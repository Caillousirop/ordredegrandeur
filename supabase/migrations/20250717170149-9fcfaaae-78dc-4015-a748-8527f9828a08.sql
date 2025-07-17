-- Vérifier et créer le trigger pour mettre à jour user_progress quand un score est sauvegardé
-- D'abord, supprimer le trigger existant s'il existe
DROP TRIGGER IF EXISTS update_user_progress_on_score ON user_quiz_scores;

-- Créer ou remplacer la fonction trigger
CREATE OR REPLACE FUNCTION public.update_user_progress_on_score()
RETURNS TRIGGER AS $$
BEGIN
  -- Mettre à jour ou créer la progression utilisateur
  INSERT INTO public.user_progress (
    user_id,
    total_points,
    questions_completed,
    user_level,
    correct_percentage,
    last_updated
  )
  SELECT 
    NEW.user_id,
    COALESCE(SUM(
      CASE 
        WHEN accuracy >= 50 THEN ROUND(accuracy / 10) + 
          CASE WHEN is_multi_step AND direct_final_answer THEN 5 ELSE 0 END
        ELSE 0 
      END
    ), 0) as total_points,
    COUNT(*) as questions_completed,
    GREATEST(1, FLOOR(COALESCE(SUM(
      CASE 
        WHEN accuracy >= 50 THEN ROUND(accuracy / 10) + 
          CASE WHEN is_multi_step AND direct_final_answer THEN 5 ELSE 0 END
        ELSE 0 
      END
    ), 0) / 25) + 1) as user_level,
    CASE 
      WHEN COUNT(*) > 0 THEN ROUND((COUNT(CASE WHEN accuracy >= 50 THEN 1 END) * 100.0) / COUNT(*))
      ELSE 0 
    END as correct_percentage,
    NOW()
  FROM public.user_quiz_scores 
  WHERE user_id = NEW.user_id
  ON CONFLICT (user_id) 
  DO UPDATE SET
    total_points = EXCLUDED.total_points,
    questions_completed = EXCLUDED.questions_completed,
    user_level = EXCLUDED.user_level,
    correct_percentage = EXCLUDED.correct_percentage,
    last_updated = EXCLUDED.last_updated;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Créer le trigger sur INSERT ET UPDATE
CREATE TRIGGER update_user_progress_on_score
  AFTER INSERT OR UPDATE ON public.user_quiz_scores
  FOR EACH ROW
  EXECUTE FUNCTION public.update_user_progress_on_score();