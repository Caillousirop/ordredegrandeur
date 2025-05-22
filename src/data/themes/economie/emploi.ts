
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur l'emploi et les salaires
export const economieEmploiQuestions: (Question | MultiStepQuestion)[] = [
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
