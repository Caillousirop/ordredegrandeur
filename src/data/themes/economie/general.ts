
import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur l'économie générale
export const economieGeneralQuestions: (Question | MultiStepQuestion)[] = [
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
  }
];
