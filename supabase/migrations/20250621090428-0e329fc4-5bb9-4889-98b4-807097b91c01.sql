
-- Mettre à jour les politiques RLS pour user_quiz_scores
DROP POLICY IF EXISTS "Users and admins can view scores" ON public.user_quiz_scores;
DROP POLICY IF EXISTS "Users and admins can insert scores" ON public.user_quiz_scores;
DROP POLICY IF EXISTS "Users and admins can update scores" ON public.user_quiz_scores;

-- Activer RLS sur la table
ALTER TABLE public.user_quiz_scores ENABLE ROW LEVEL SECURITY;

-- Créer les nouvelles politiques RLS
CREATE POLICY "Users can view their own scores" ON public.user_quiz_scores
  FOR SELECT USING (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users can insert their own scores" ON public.user_quiz_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users can update their own scores" ON public.user_quiz_scores
  FOR UPDATE USING (auth.uid() = user_id OR public.is_user_admin());

-- Mettre à jour les politiques RLS pour user_progress
DROP POLICY IF EXISTS "Users and admins can view progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users and admins can insert progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users and admins can update progress" ON public.user_progress;

-- Activer RLS sur la table
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Créer les nouvelles politiques RLS
CREATE POLICY "Users can view their own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users can insert their own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users can update their own progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id OR public.is_user_admin());

-- Vérifier que le trigger existe bien
CREATE OR REPLACE TRIGGER update_user_progress_trigger
  AFTER INSERT OR UPDATE ON public.user_quiz_scores
  FOR EACH ROW
  EXECUTE FUNCTION public.update_user_progress();
