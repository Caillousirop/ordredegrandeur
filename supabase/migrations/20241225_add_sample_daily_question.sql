
-- Insérer une question d'exemple pour aujourd'hui
INSERT INTO daily_questions (
  question,
  correct_answer,
  unit,
  explanation,
  date,
  theme
) VALUES (
  'Combien de baguettes de pain sont vendues chaque jour en France ?',
  30000000,
  'baguettes',
  'La France consomme environ 30 millions de baguettes par jour. Cette consommation représente environ 10 milliards de baguettes par an, soit une moyenne de 120 baguettes par personne et par an.',
  CURRENT_DATE,
  'économie'
) 
ON CONFLICT (date) DO NOTHING;
