
import { Question, MultiStepQuestion } from "@/components/types";
import { insoliteTerreEspaceQuestions } from "./terre-espace";
import { insoliteObjetsQuestions } from "./objets";
import { insoliteNatureQuestions } from "./nature";
import { insoliteCuriositesQuestions } from "./curiosites";

// Exporter toutes les questions combinées
export const insoliteQuestions: (Question | MultiStepQuestion)[] = [
  ...insoliteTerreEspaceQuestions,
  ...insoliteObjetsQuestions,
  ...insoliteNatureQuestions,
  ...insoliteCuriositesQuestions
];
