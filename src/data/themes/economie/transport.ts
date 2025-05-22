
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur l'économie des transports
export const economieTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco8",
    type: "multistep",
    question: "Combien de voitures neuves sont vendues en France chaque année ?",
    finalExplanation: "Environ 1,6 million de voitures neuves sont vendues en France chaque année, un marché qui évolue avec les nouvelles technologies et les préoccupations environnementales.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "Il y a environ 30 millions de ménages en France selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces ménages achète une voiture neuve chaque année ?",
        correctAnswer: 5.3,
        unit: "%",
        explanation: "Environ 5,3% des ménages français achètent une voiture neuve chaque année."
      },
      {
        question: "Combien de voitures neuves sont vendues en France chaque année ?",
        correctAnswer: 1.6,
        unit: "million",
        explanation: "En multipliant le nombre de ménages (30 millions) par le pourcentage achetant une voiture neuve (5,3%), on obtient environ 1,6 million de voitures neuves vendues annuellement."
      }
    ]
  },
  {
    id: "eco10",
    type: "multistep",
    question: "Combien de billets de train sont vendus en France chaque jour ?",
    finalExplanation: "Environ 380 000 billets de train sont vendus en France chaque jour, permettant la mobilité de millions de Français à travers le territoire.",
    theme: "economie",
    steps: [
      {
        question: "Combien de voyages en train sont effectués en France par an ?",
        correctAnswer: 138,
        unit: "millions",
        explanation: "Environ 138 millions de voyages en train sont effectués en France chaque année."
      },
      {
        question: "Quelle part de ces voyages correspond à des billets vendus individuellement (hors abonnements) ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% de ces voyages correspondent à des billets vendus individuellement, le reste étant couvert par des abonnements."
      },
      {
        question: "Combien de billets de train sont vendus en France chaque jour ?",
        correctAnswer: 380000,
        unit: "billets",
        explanation: "En multipliant le nombre annuel de voyages (138 millions) par la part des billets individuels (78%) puis en divisant par 365 jours, on obtient environ 380 000 billets vendus quotidiennement."
      }
    ]
  }
];
