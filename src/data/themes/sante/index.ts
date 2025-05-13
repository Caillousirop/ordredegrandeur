
import { Question, MultiStepQuestion } from "@/components/types";
import { santeGeneralQuestions } from "./general";
import { santeHospitaliereQuestions } from "./hospitaliere";
import { santePharmaQuestions } from "./pharmaceutique";
import { santeStatistiquesQuestions } from "./statistiques";

// Combiner toutes les questions de santé
export const santeQuestions: (Question | MultiStepQuestion)[] = [
  ...santeGeneralQuestions,
  ...santeHospitaliereQuestions,
  ...santePharmaQuestions,
  ...santeStatistiquesQuestions
];
