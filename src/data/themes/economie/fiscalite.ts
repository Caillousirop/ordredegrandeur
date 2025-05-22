
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur la fiscalité
export const economieFiscaliteQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco1",
    type: "multistep",
    question: "Combien d'impôts sur le revenu sont collectés chaque année en France ?",
    finalExplanation: "Environ 97 milliards d'euros d'impôts sur le revenu sont collectés chaque année en France, ce qui représente une part importante des recettes fiscales de l'État.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de foyers fiscaux en France ?",
        correctAnswer: 39,
        unit: "millions",
        explanation: "Il y a environ 39 millions de foyers fiscaux en France selon la Direction Générale des Finances Publiques."
      },
      {
        question: "Parmi ces foyers fiscaux, quel pourcentage est effectivement imposable ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des foyers fiscaux sont effectivement imposables en France, les autres étant non imposables en raison de revenus insuffisants ou d'exonérations."
      },
      {
        question: "Quel est le montant moyen d'impôt sur le revenu payé par foyer imposable par an ?",
        correctAnswer: 5800,
        unit: "€",
        explanation: "Le montant moyen d'impôt sur le revenu payé par foyer imposable est d'environ 5 800 € par an."
      },
      {
        question: "Combien d'impôts sur le revenu sont collectés chaque année en France ?",
        correctAnswer: 97,
        unit: "milliards €",
        explanation: "En multipliant le nombre de foyers fiscaux imposables (39 millions × 43% = 16,77 millions) par le montant moyen d'impôt (5 800 €), on obtient environ 97 milliards d'euros d'impôts sur le revenu collectés annuellement."
      }
    ]
  }
];
