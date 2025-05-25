
-- Insérer une question d'exemple pour aujourd'hui
INSERT INTO daily_questions (
  question,
  correct_answer,
  unit,
  explanation,
  date,
  theme
) VALUES (
  'Combien de femmes de plus de 60 ans jouent du piano en France ?',
  450000,
  'femmes',
  'Environ 450 000 femmes de plus de 60 ans pratiquent le piano en France. Cette estimation se base sur les données de pratique musicale amateur et les inscriptions dans les conservatoires et écoles de musique, où le piano reste l''instrument le plus populaire, particulièrement chez les femmes seniors.',
  CURRENT_DATE,
  'culture'
) 
ON CONFLICT (date) DO UPDATE SET
  question = EXCLUDED.question,
  correct_answer = EXCLUDED.correct_answer,
  unit = EXCLUDED.unit,
  explanation = EXCLUDED.explanation,
  theme = EXCLUDED.theme;
