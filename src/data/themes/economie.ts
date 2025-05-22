import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur l'économie
export const economieQuestionsOriginal: (Question | MultiStepQuestion)[] = [
  {
    id: "13",
    question: "Quel est le PIB de la France en milliards d'euros ?",
    correctAnswer: 2500,
    unit: "milliards €",
    explanation: "Le PIB de la France est d'environ 2 500 milliards d'euros en 2023.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "14",
    question: "Quel est le montant moyen d'un salaire mensuel net en France ?",
    correctAnswer: 2520,
    unit: "€",
    explanation: "Le salaire moyen net en France est d'environ 2 520 euros par mois.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "15",
    question: "Quel est le taux de chômage en France ?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France est d'environ 7,1% de la population active.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "16",
    question: "Combien y a-t-il d'entreprises en France ?",
    correctAnswer: 4000000,
    unit: "entreprises",
    explanation: "Il y a environ 4 millions d'entreprises en France (incluant auto-entrepreneurs, TPE, PME et grandes entreprises).",
    type: "simple",
    theme: "economie"
  },
  {
    id: "17",
    question: "Quel est le montant de la dette publique de la France en % du PIB ?",
    correctAnswer: 112.9,
    unit: "% du PIB",
    explanation: "La dette publique de la France représente environ 112,9% du PIB.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "18",
    question: "Combien coûte une baguette de pain en moyenne en France ?",
    correctAnswer: 1.29,
    unit: "€",
    explanation: "Le prix moyen d'une baguette de pain en France est d'environ 1,29€.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "19",
    type: "multistep",
    question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
    finalExplanation: "Un ménage français dépense en moyenne 2 570 € par mois, tous postes de dépenses confondus (logement, alimentation, transport, loisirs, etc.)",
    theme: "economie",
    steps: [
      {
        question: "Quel est le revenu moyen disponible d'un ménage français par mois ?",
        correctAnswer: 3100,
        unit: "€",
        explanation: "Le revenu disponible moyen d'un ménage français est d'environ 3 100 € par mois."
      },
      {
        question: "Quel pourcentage de ce revenu est dépensé en moyenne ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "En moyenne, un ménage français dépense environ 83% de son revenu disponible."
      },
      {
        question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
        correctAnswer: 2570,
        unit: "€",
        explanation: "3 100 € × 83% = 2 570 €"
      }
    ]
  }
];

// Questions anciennes thème emploi maintenant dans économie
export const emploiQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "emploi1",
    question: "Quel est le taux de chômage des jeunes (15-24 ans) en France ?",
    correctAnswer: 17.5,
    unit: "%",
    explanation: "Le taux de chômage des jeunes de 15 à 24 ans en France est d'environ 17,5%, soit plus de deux fois le taux de chômage général.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "emploi2",
    question: "Quel est le salaire médian en France (net mensuel) ?",
    correctAnswer: 1940,
    unit: "€",
    explanation: "Le salaire médian en France est d'environ 1 940 € net par mois, ce qui signifie que la moitié des salariés gagnent moins et l'autre moitié gagne plus que ce montant.",
    type: "simple",
    theme: "economie"
  }
];

// Combinaison des questions économie originales et emploi (maintenant toutes en économie)
export const economieQuestions = [
  ...economieQuestionsOriginal,
  ...emploiQuestions
];
