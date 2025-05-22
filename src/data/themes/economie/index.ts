
import { Question, MultiStepQuestion } from "@/components/types";
import { economieGeneralQuestions } from "./general";
import { economieDepensesQuestions } from "./depenses";
import { economieEmploiQuestions } from "./emploi";
import { economieFiscaliteQuestions } from "./fiscalite";
import { economieLogementQuestions } from "./logement";
import { economieConsommationQuestions } from "./consommation";
import { economieTransportQuestions } from "./transport";
import { economieSanteQuestions } from "./sante";
import { economieLoisirsQuestions } from "./loisirs";

// Combiner toutes les questions d'économie
export const economieQuestions: (Question | MultiStepQuestion)[] = [
  ...economieGeneralQuestions,
  ...economieDepensesQuestions,
  ...economieEmploiQuestions,
  ...economieFiscaliteQuestions,
  ...economieLogementQuestions,
  ...economieConsommationQuestions,
  ...economieTransportQuestions,
  ...economieSanteQuestions,
  ...economieLoisirsQuestions
];
