
import { Question, MultiStepQuestion } from "@/components/types";
import { generalTransportQuestions } from "./general";
import { infrastructureTransportQuestions } from "./infrastructure";
import { usageTransportQuestions } from "./usage";
import { economicTransportQuestions } from "./economic";
import { vehiclesTransportQuestions } from "./vehicles";

// Exporter toutes les questions de transport combinées
export const transportQuestions: (Question | MultiStepQuestion)[] = [
  ...generalTransportQuestions,
  ...infrastructureTransportQuestions,
  ...usageTransportQuestions,
  ...economicTransportQuestions,
  ...vehiclesTransportQuestions
];
