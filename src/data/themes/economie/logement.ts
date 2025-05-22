
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur le logement
export const economieLogementQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco7",
    type: "multistep",
    question: "Quel est le montant total des loyers payés en France chaque mois ?",
    finalExplanation: "Environ 11,2 milliards d'euros de loyers sont payés en France chaque mois, représentant une part importante des dépenses des ménages et un secteur économique majeur.",
    theme: "economie",
    steps: [
      {
        question: "Combien de logements locatifs y a-t-il en France ?",
        correctAnswer: 14,
        unit: "millions",
        explanation: "Il y a environ 14 millions de logements locatifs en France selon les données de l'INSEE."
      },
      {
        question: "Quel est le loyer moyen mensuel en France (tous types de logements confondus) ?",
        correctAnswer: 800,
        unit: "€",
        explanation: "Le loyer moyen mensuel en France est d'environ 800 € tous types de logements confondus."
      },
      {
        question: "Quel est le montant total des loyers payés en France chaque mois ?",
        correctAnswer: 11.2,
        unit: "milliards €",
        explanation: "En multipliant le nombre de logements locatifs (14 millions) par le loyer moyen (800 €), on obtient environ 11,2 milliards d'euros de loyers payés mensuellement."
      }
    ]
  }
];
