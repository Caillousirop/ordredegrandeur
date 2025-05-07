
import { Question, MultiStepQuestion } from "@/components/types";

export const santeQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "8",
    question: "Quel est le nombre moyen de médecins pour 1000 habitants en France ?",
    correctAnswer: 3.4,
    unit: "médecins",
    explanation: "Selon les données de l'INSEE, la France compte en moyenne 3,4 médecins pour 1000 habitants en 2023.",
    type: "simple",
    theme: "santé"
  },
  {
    id: "9",
    question: "Quelle est l'espérance de vie moyenne en France en 2023 ?",
    correctAnswer: 82.9,
    unit: "ans",
    explanation: "L'espérance de vie moyenne en France en 2023 est de 82,9 ans selon les données de l'INSEE (85,7 ans pour les femmes et 79,8 ans pour les hommes).",
    type: "simple",
    theme: "santé"
  },
  {
    id: "10",
    type: "multistep",
    question: "Quel est le nombre total de jours d'hospitalisation en France par an ?",
    finalExplanation: "Selon les données de l'INSEE et de la DREES, le nombre total de jours d'hospitalisation en France est d'environ 115 millions par an.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont hospitalisées chaque année en France ?",
        correctAnswer: 12.5,
        unit: "millions",
        explanation: "Environ 12,5 millions de personnes sont hospitalisées chaque année en France selon la DREES."
      },
      {
        question: "Quelle est la durée moyenne d'hospitalisation en France ?",
        correctAnswer: 9.2,
        unit: "jours",
        explanation: "La durée moyenne d'une hospitalisation en France est de 9,2 jours selon les données de l'INSEE."
      },
      {
        question: "Quel est le nombre total de jours d'hospitalisation en France ?",
        correctAnswer: 115,
        unit: "millions de jours",
        explanation: "En multipliant le nombre de patients hospitalisés par la durée moyenne, on obtient environ 115 millions de jours d'hospitalisation par an."
      }
    ]
  },
  {
    id: "29",
    question: "Quel est le pourcentage de médecins généralistes parmi l'ensemble des médecins en France ?",
    correctAnswer: 44.3,
    unit: "%",
    explanation: "Selon les données de l'Ordre des Médecins et de l'INSEE, 44,3% des médecins en France sont des généralistes.",
    type: "simple",
    theme: "santé"
  },
  {
    id: "33",
    type: "multistep",
    question: "Combien de yaourts sont consommés annuellement par les enfants de moins de 12 ans dans les écoles primaires des zones rurales françaises ?",
    finalExplanation: "Cette estimation de 98 millions de yaourts consommés par les enfants en milieu scolaire rural est une approximation basée sur la population scolaire rurale, les habitudes alimentaires et le calendrier scolaire. Les chiffres réels peuvent varier selon les politiques alimentaires locales, les préférences des enfants et les approvisionnements des cantines.",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il d'élèves en école primaire en France ?",
        correctAnswer: 6.7,
        unit: "millions",
        explanation: "La France compte environ 6,7 millions d'élèves en école primaire selon les données du Ministère de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves étudient dans des zones rurales ?",
        correctAnswer: 17.5,
        unit: "%",
        explanation: "Environ 17,5% des élèves du primaire sont scolarisés dans des zones rurales d'après les statistiques de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves mangent à la cantine ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "En zone rurale, environ 85% des élèves du primaire mangent à la cantine scolaire selon les enquêtes sur la restauration scolaire."
      },
      {
        question: "Combien de jours d'école y a-t-il par an en France ?",
        correctAnswer: 144,
        unit: "jours",
        explanation: "Une année scolaire en France compte environ 144 jours de classe avec restauration scolaire."
      },
      {
        question: "Combien de fois par semaine en moyenne un yaourt est-il servi à la cantine ?",
        correctAnswer: 3,
        unit: "jours",
        explanation: "Dans les cantines scolaires rurales, un yaourt est servi en moyenne 3 jours par semaine selon les plans alimentaires types."
      },
      {
        question: "Combien de yaourts sont consommés annuellement par les enfants dans les écoles primaires rurales ?",
        correctAnswer: 98,
        unit: "millions",
        explanation: "En multipliant le nombre d'élèves (6,7 millions) par le pourcentage en zone rurale (17,5%) par le taux de fréquentation des cantines (85%) par le nombre de jours d'école (144) par le ratio de service de yaourts (3/5), on obtient environ 98 millions de yaourts."
      }
    ]
  }
];
