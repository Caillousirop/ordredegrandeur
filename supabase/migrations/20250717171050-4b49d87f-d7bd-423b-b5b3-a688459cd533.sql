-- Désactiver le trigger qui cause la boucle
DROP TRIGGER IF EXISTS update_user_progress_on_score ON user_quiz_scores;

-- Supprimer l'ancienne fonction trigger
DROP FUNCTION IF EXISTS public.update_user_progress_on_score();

-- Créer une fonction plus sûre qui évite les boucles
CREATE OR REPLACE FUNCTION public.calculate_user_progress(user_uuid UUID)
RETURNS TABLE(
  total_points INTEGER,
  questions_completed INTEGER,
  user_level INTEGER,
  correct_percentage INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(SUM(
      CASE 
        WHEN accuracy >= 50 THEN ROUND(accuracy / 10) + 
          CASE WHEN is_multi_step AND direct_final_answer THEN 5 ELSE 0 END
        ELSE 0 
      END
    ), 0)::INTEGER as total_points,
    COUNT(*)::INTEGER as questions_completed,
    GREATEST(1, FLOOR(COALESCE(SUM(
      CASE 
        WHEN accuracy >= 50 THEN ROUND(accuracy / 10) + 
          CASE WHEN is_multi_step AND direct_final_answer THEN 5 ELSE 0 END
        ELSE 0 
      END
    ), 0) / 25) + 1)::INTEGER as user_level,
    CASE 
      WHEN COUNT(*) > 0 THEN ROUND((COUNT(CASE WHEN accuracy >= 50 THEN 1 END) * 100.0) / COUNT(*))
      ELSE 0 
    END::INTEGER as correct_percentage
  FROM public.user_quiz_scores 
  WHERE user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;