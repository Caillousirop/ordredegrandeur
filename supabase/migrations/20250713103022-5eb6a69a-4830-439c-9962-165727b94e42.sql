
-- Corriger la structure de la table user_progress pour supporter le stockage de données de progression
ALTER TABLE public.user_progress 
ADD COLUMN IF NOT EXISTS progress_data JSONB DEFAULT '{}'::jsonb;

-- Mettre à jour les fonctions RPC pour qu'elles fonctionnent avec la nouvelle structure
CREATE OR REPLACE FUNCTION public.get_quiz_progress()
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE
  v_user_id UUID;
  v_progress JSONB;
BEGIN
  -- Get the current user's ID
  v_user_id := (SELECT auth.uid());
  
  -- If no user is authenticated, return empty object
  IF v_user_id IS NULL THEN
    RETURN '{}'::jsonb;
  END IF;
  
  -- Get the user's quiz progress
  SELECT progress_data INTO v_progress 
  FROM public.user_progress 
  WHERE user_id = v_user_id;
  
  -- If no record exists, return empty object
  IF v_progress IS NULL THEN
    RETURN '{}'::jsonb;
  END IF;
  
  RETURN v_progress;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_quiz_progress(p_progress_data jsonb)
RETURNS jsonb
LANGUAGE plpgsql
AS $$
DECLARE
  v_user_id UUID;
  v_result JSONB;
BEGIN
  -- Get the current user's ID
  v_user_id := (SELECT auth.uid());
  
  -- If no user is authenticated, return the progress data as-is
  IF v_user_id IS NULL THEN
    RETURN p_progress_data;
  END IF;
  
  -- Insert or update the user's progress
  INSERT INTO public.user_progress (user_id, progress_data)
  VALUES (v_user_id, p_progress_data)
  ON CONFLICT (user_id) 
  DO UPDATE SET 
    progress_data = p_progress_data,
    last_updated = now()
  RETURNING progress_data INTO v_result;
  
  RETURN v_result;
END;
$$;

-- Créer une table pour traquer les questions vues (pour les utilisateurs non connectés aussi)
CREATE TABLE IF NOT EXISTS public.question_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users,
  session_id TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_answer NUMERIC,
  accuracy INTEGER
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_question_views_question_id ON public.question_views(question_id);
CREATE INDEX IF NOT EXISTS idx_question_views_user_id ON public.question_views(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_question_views_session_id ON public.question_views(session_id) WHERE session_id IS NOT NULL;

-- RLS pour la table question_views
ALTER TABLE public.question_views ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs connectés voient leurs propres vues
CREATE POLICY "Users can view their own question views" 
  ON public.question_views 
  FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Politique pour insérer des vues (connectés et non connectés)
CREATE POLICY "Anyone can insert question views" 
  ON public.question_views 
  FOR INSERT 
  WITH CHECK (true);

-- Politique pour mettre à jour ses propres vues
CREATE POLICY "Users can update their own question views" 
  ON public.question_views 
  FOR UPDATE 
  USING (auth.uid() = user_id OR (user_id IS NULL AND session_id IS NOT NULL));
