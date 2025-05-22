
import { mondeGeneralQuestions } from "./general";
import { mondeDemographieQuestions } from "./demographie";
import { mondeEconomieQuestions } from "./economie";
import { mondeEnvironnementQuestions } from "./environnement";

export const mondeQuestions = [
  ...mondeGeneralQuestions,
  ...mondeDemographieQuestions,
  ...mondeEconomieQuestions,
  ...mondeEnvironnementQuestions
];
