
-- Fonction pour récupérer la réponse d'un utilisateur à une question quotidienne
CREATE OR REPLACE FUNCTION get_user_daily_response(p_daily_question_id UUID, p_user_id UUID)
RETURNS TABLE (
  id UUID,
  user_answer NUMERIC,
  accuracy INTEGER,
  answered_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    dr.id,
    dr.user_answer,
    dr.accuracy,
    dr.answered_at
  FROM public.daily_responses dr
  WHERE dr.daily_question_id = p_daily_question_id 
    AND dr.user_id = p_user_id;
END;
$$;

-- Fonction pour insérer une réponse quotidienne
CREATE OR REPLACE FUNCTION insert_daily_response(
  p_user_id UUID,
  p_daily_question_id UUID,
  p_user_answer NUMERIC,
  p_accuracy INTEGER
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  response_id UUID;
BEGIN
  INSERT INTO public.daily_responses (user_id, daily_question_id, user_answer, accuracy)
  VALUES (p_user_id, p_daily_question_id, p_user_answer, p_accuracy)
  ON CONFLICT (user_id, daily_question_id)
  DO UPDATE SET 
    user_answer = EXCLUDED.user_answer,
    accuracy = EXCLUDED.accuracy,
    answered_at = now()
  RETURNING id INTO response_id;
  
  RETURN response_id;
END;
$$;

-- Fonction pour récupérer le classement quotidien
CREATE OR REPLACE FUNCTION get_daily_leaderboard(p_daily_question_id UUID)
RETURNS TABLE (
  user_id UUID,
  username TEXT,
  accuracy INTEGER,
  answered_at TIMESTAMP WITH TIME ZONE
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    dr.user_id,
    COALESCE(p.username, 'Utilisateur') as username,
    dr.accuracy,
    dr.answered_at
  FROM public.daily_responses dr
  LEFT JOIN public.profiles p ON p.id = dr.user_id
  WHERE dr.daily_question_id = p_daily_question_id
  ORDER BY dr.accuracy DESC, dr.answered_at ASC
  LIMIT 10;
END;
$$;
