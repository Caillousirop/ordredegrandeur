
import { mondeEconomieQuestions } from './economie';
import { mondeDemographieQuestions } from './demographie';
import { mondeEnvironnementQuestions } from './environnement';
import { mondeGeneralQuestions } from './general';

// Export all questions from the monde theme
export const mondeQuestions = [
  ...mondeGeneralQuestions,
  ...mondeDemographieQuestions,
  ...mondeEconomieQuestions,
  ...mondeEnvironnementQuestions
];
