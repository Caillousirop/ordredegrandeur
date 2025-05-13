
import { Question, MultiStepQuestion } from "@/components/types";
import { mondeGeneralQuestions } from "./general";
import { mondeDemographieQuestions } from "./demographie";
import { mondeEnvironnementQuestions } from "./environnement";
import { mondeEconomieQuestions } from "./economie";

// Combine all monde questions
export const mondeQuestions: (Question | MultiStepQuestion)[] = [
  ...mondeGeneralQuestions,
  ...mondeDemographieQuestions,
  ...mondeEnvironnementQuestions,
  ...mondeEconomieQuestions
];
