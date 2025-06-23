
-- Table pour les sessions de quiz chronométré
CREATE TABLE public.timed_quiz_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_time TIMESTAMP WITH TIME ZONE,
  total_questions INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  score INTEGER NOT NULL DEFAULT 0,
  duration_seconds INTEGER NOT NULL DEFAULT 30,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les réponses individuelles du quiz chronométré
CREATE TABLE public.timed_quiz_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.timed_quiz_sessions(id) ON DELETE CASCADE NOT NULL,
  question_id TEXT NOT NULL,
  user_answer NUMERIC,
  correct_answer NUMERIC NOT NULL,
  accuracy INTEGER NOT NULL,
  answered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  response_time_ms INTEGER NOT NULL
);

-- Activer RLS sur les tables
ALTER TABLE public.timed_quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timed_quiz_answers ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour timed_quiz_sessions
CREATE POLICY "Users can view their own quiz sessions" 
  ON public.timed_quiz_sessions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz sessions" 
  ON public.timed_quiz_sessions 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz sessions" 
  ON public.timed_quiz_sessions 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Politiques RLS pour timed_quiz_answers
CREATE POLICY "Users can view their own quiz answers" 
  ON public.timed_quiz_answers 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.timed_quiz_sessions 
      WHERE id = session_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own quiz answers" 
  ON public.timed_quiz_answers 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.timed_quiz_sessions 
      WHERE id = session_id AND user_id = auth.uid()
    )
  );

-- Vue pour le classement public (accessible à tous les utilisateurs connectés)
CREATE OR REPLACE VIEW public.timed_quiz_leaderboard AS
SELECT 
  tqs.id,
  p.username,
  tqs.score,
  tqs.total_questions,
  tqs.correct_answers,
  tqs.created_at,
  RANK() OVER (ORDER BY tqs.score DESC, tqs.total_questions DESC, tqs.created_at ASC) as rank
FROM public.timed_quiz_sessions tqs
LEFT JOIN public.profiles p ON p.id = tqs.user_id
WHERE tqs.is_completed = true
ORDER BY tqs.score DESC, tqs.total_questions DESC, tqs.created_at ASC
LIMIT 100;

-- Politique RLS pour la vue du classement (accessible à tous les utilisateurs connectés)
CREATE POLICY "Authenticated users can view leaderboard" 
  ON public.timed_quiz_sessions 
  FOR SELECT 
  TO authenticated
  USING (is_completed = true);
