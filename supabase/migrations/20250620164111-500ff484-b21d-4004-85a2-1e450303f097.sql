
-- Vérifier si l'utilisateur actuel est admin
SELECT * FROM public.admin_users WHERE user_id = '5793a6e2-206e-4a55-9a6f-c5966b3b8c7d';

-- Créer une fonction pour vérifier si un utilisateur est admin (évite la récursion RLS)
CREATE OR REPLACE FUNCTION public.is_user_admin(check_user_id uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = check_user_id
  );
$$;

-- Mettre à jour les politiques RLS pour user_quiz_scores pour inclure les admins
DROP POLICY IF EXISTS "Users can view their own scores" ON public.user_quiz_scores;
DROP POLICY IF EXISTS "Users can insert their own scores" ON public.user_quiz_scores;
DROP POLICY IF EXISTS "Users can update their own scores" ON public.user_quiz_scores;

CREATE POLICY "Users and admins can view scores" ON public.user_quiz_scores
  FOR SELECT USING (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users and admins can insert scores" ON public.user_quiz_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users and admins can update scores" ON public.user_quiz_scores
  FOR UPDATE USING (auth.uid() = user_id OR public.is_user_admin());

-- Mettre à jour les politiques RLS pour user_progress pour inclure les admins
DROP POLICY IF EXISTS "Users can view their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON public.user_progress;

CREATE POLICY "Users and admins can view progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users and admins can insert progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_user_admin());

CREATE POLICY "Users and admins can update progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id OR public.is_user_admin());
