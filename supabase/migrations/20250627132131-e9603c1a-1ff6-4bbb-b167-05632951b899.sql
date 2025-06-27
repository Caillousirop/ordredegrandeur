
-- Ajouter une contrainte unique sur user_id et question_id pour permettre l'upsert
ALTER TABLE public.user_quiz_scores 
ADD CONSTRAINT user_quiz_scores_user_question_unique 
UNIQUE (user_id, question_id);

-- Créer un trigger pour mettre à jour automatiquement user_progress
CREATE OR REPLACE FUNCTION update_user_progress_on_score()
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
$$ LANGUAGE plpgsql;

-- Créer le trigger
DROP TRIGGER IF EXISTS trigger_update_user_progress ON public.user_quiz_scores;
CREATE TRIGGER trigger_update_user_progress
  AFTER INSERT OR UPDATE ON public.user_quiz_scores
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress_on_score();
