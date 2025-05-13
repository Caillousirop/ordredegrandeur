
import { santeGeneralQuestions } from "./sante/general";
import { santeStatistiquesQuestions } from "./sante/statistiques";
import { santePharmaQuestions } from "./sante/pharmaceutique";
import { santeHospitaliereQuestions } from "./sante/hospitaliere";

// Exporter toutes les questions combinées
export const santeQuestions = [
  ...santeGeneralQuestions,
  ...santeStatistiquesQuestions,
  ...santePharmaQuestions,
  ...santeHospitaliereQuestions
];
