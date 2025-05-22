
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur l'économie de la santé
export const economieSanteQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco9",
    type: "multistep",
    question: "Combien d'argent est dépensé en médicaments en France chaque année ?",
    finalExplanation: "Environ 37 milliards d'euros sont dépensés en médicaments en France chaque année, un poste important des dépenses de santé.",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la dépense de santé totale en France par an ?",
        correctAnswer: 185,
        unit: "milliards €",
        explanation: "La dépense de santé totale en France est d'environ 185 milliards d'euros par an."
      },
      {
        question: "Quel pourcentage de ces dépenses de santé est consacré aux médicaments ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des dépenses de santé en France sont consacrés aux médicaments."
      },
      {
        question: "Combien d'argent est dépensé en médicaments en France chaque année ?",
        correctAnswer: 37,
        unit: "milliards €",
        explanation: "En multipliant les dépenses de santé totales (185 milliards €) par le pourcentage consacré aux médicaments (20%), on obtient environ 37 milliards d'euros de dépenses annuelles en médicaments."
      }
    ]
  }
];
