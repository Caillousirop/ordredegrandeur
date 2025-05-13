
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur le système hospitalier
export const santeHospitaliereQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "108",
    type: "multistep",
    question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
    finalExplanation: "L'Île-de-France dispose d'environ 1 200 lits de réanimation, une capacité qui peut être augmentée en cas de crise sanitaire majeure comme l'a montré la pandémie de COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'habitants compte la région Île-de-France ?",
        correctAnswer: 12.3,
        unit: "millions",
        explanation: "La région Île-de-France compte environ 12,3 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en moyenne pour 100 000 habitants en France ?",
        correctAnswer: 10.2,
        unit: "lits",
        explanation: "La France dispose d'environ 10,2 lits de réanimation pour 100 000 habitants, légèrement au-dessus de la moyenne européenne."
      },
      {
        question: "Quel est le ratio de lits de réanimation en Île-de-France par rapport à la moyenne nationale ?",
        correctAnswer: 0.96,
        unit: "",
        explanation: "L'Île-de-France a une densité de lits de réanimation légèrement inférieure à la moyenne nationale, avec un ratio de 0,96."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
        correctAnswer: 1200,
        unit: "lits",
        explanation: "En multipliant la population francilienne (12,3 millions) par le taux de lits pour 100 000 habitants (10,2) ajusté par le ratio régional (0,96), on obtient environ 1 200 lits."
      }
    ]
  },
  {
    id: "109",
    type: "multistep",
    question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
    finalExplanation: "Environ 20 000 opérations chirurgicales programmées sont réalisées chaque jour en France, sans compter les interventions urgentes, ce qui témoigne de l'activité importante du système chirurgical français.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'opérations chirurgicales sont réalisées chaque année en France ?",
        correctAnswer: 6.5,
        unit: "millions",
        explanation: "Environ 6,5 millions d'interventions chirurgicales sont réalisées chaque année en France, toutes spécialités confondues."
      },
      {
        question: "Quel pourcentage de ces opérations sont des interventions programmées (non urgentes) ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Environ 82% des interventions chirurgicales sont programmées à l'avance, par opposition aux interventions d'urgence."
      },
      {
        question: "Combien de jours par an les blocs opératoires sont-ils actifs ?",
        correctAnswer: 270,
        unit: "jours",
        explanation: "Les blocs opératoires fonctionnent environ 270 jours par an, en tenant compte des week-ends, jours fériés et périodes de maintenance."
      },
      {
        question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
        correctAnswer: 20000,
        unit: "opérations",
        explanation: "En multipliant le nombre total d'opérations annuelles (6,5 millions) par le pourcentage d'interventions programmées (82%) et en divisant par le nombre de jours d'activité (270), on obtient environ 20 000 opérations programmées par jour."
      }
    ]
  },
  {
    id: "113",
    type: "multistep",
    question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
    finalExplanation: "Environ 1,3 million de personnes travaillent dans le secteur hospitalier français, ce qui en fait l'un des plus grands employeurs du pays.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'établissements hospitaliers existe-t-il en France ?",
        correctAnswer: 3000,
        unit: "établissements",
        explanation: "La France compte environ 3 000 établissements hospitaliers, incluant les hôpitaux publics, privés et les établissements privés à but non lucratif."
      },
      {
        question: "Quelle est la taille moyenne d'un établissement hospitalier en nombre d'employés ?",
        correctAnswer: 430,
        unit: "employés",
        explanation: "Un établissement hospitalier français emploie en moyenne 430 personnes, tous métiers confondus (médical, paramédical, administratif, technique, etc.)."
      },
      {
        question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre d'établissements (3 000) par la taille moyenne (430 employés), on obtient environ 1,3 million de personnes travaillant dans le secteur hospitalier."
      }
    ]
  },
  {
    id: "105",
    type: "multistep",
    question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
    finalExplanation: "Environ 3,2 millions d'IRM sont réalisées chaque année dans les hôpitaux publics français, représentant environ 60% de l'ensemble des IRM pratiquées en France.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'appareils d'IRM sont installés dans les hôpitaux publics en France ?",
        correctAnswer: 520,
        unit: "appareils",
        explanation: "On compte environ 520 appareils d'IRM installés dans les établissements publics de santé en France."
      },
      {
        question: "Combien d'examens IRM sont réalisés en moyenne par appareil et par jour ?",
        correctAnswer: 18,
        unit: "examens",
        explanation: "Un appareil d'IRM réalise en moyenne 18 examens par jour dans le secteur public."
      },
      {
        question: "Combien de jours par an ces appareils sont-ils opérationnels ?",
        correctAnswer: 340,
        unit: "jours",
        explanation: "Les appareils d'IRM fonctionnent environ 340 jours par an, en tenant compte des maintenances et des jours fériés."
      },
      {
        question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
        correctAnswer: 3.2,
        unit: "millions",
        explanation: "En multipliant le nombre d'appareils (520) par le nombre d'examens quotidiens (18) par le nombre de jours de fonctionnement (340), on obtient environ 3,2 millions d'IRM par an."
      }
    ]
  }
];
