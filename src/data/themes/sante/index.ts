
import { santeGeneralQuestions } from "./general";
import { santeStatistiquesQuestions } from "./statistiques";
import { santePharmaQuestions } from "./pharmaceutique";
import { santeHospitaliereQuestions } from "./hospitaliere";

export const santeQuestions = [
  ...santeGeneralQuestions,
  ...santeStatistiquesQuestions,
  ...santePharmaQuestions,
  ...santeHospitaliereQuestions
];
