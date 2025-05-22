
import { Question, MultiStepQuestion } from "@/components/types";

// Placeholder for simple questions about unusual facts
export const questionsInsolitesSimples: Question[] = [];

export const insoliteCuriositesQuestions: MultiStepQuestion[] = [
  {
    id: "insolite-5",
    type: "multistep",
    question: "Combien d'avions Boeing 747 rempliraient le volume du Grand Canyon ?",
    steps: [
      {
        question: "Quel est le volume approximatif du Grand Canyon ?",
        correctAnswer: 4000000000000,
        unit: "m³",
        explanation: "Le Grand Canyon a un volume approximatif d'environ 4 000 km³, soit 4 × 10¹² m³."
      },
      {
        question: "Quel est le volume d'un Boeing 747 ?",
        correctAnswer: 1000,
        unit: "m³",
        explanation: "Un Boeing 747 a un volume d'environ 1 000 m³."
      },
      {
        question: "Calculez le nombre d'avions nécessaires",
        correctAnswer: 4000000000,
        explanation: "Nombre d'avions = 4 × 10¹² ÷ 1 000 = 4 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 4 milliards de Boeing 747 pour remplir le Grand Canyon.",
    theme: "insolite"
  },
  {
    id: "insolite-22",
    type: "multistep",
    question: "Combien de fois une personne fait-elle le tour du monde en marchant au cours de sa vie ?",
    steps: [
      {
        question: "Quelle distance une personne parcourt-elle en moyenne par jour ?",
        correctAnswer: 5,
        unit: "km",
        explanation: "Une personne fait environ 7 000 pas par jour, soit environ 5 km."
      },
      {
        question: "Quelle distance totale une personne parcourt-elle au cours de sa vie active ?",
        correctAnswer: 110000,
        unit: "km",
        explanation: "Sur 60 ans de vie active : 60 × 365 = 21 900 jours. Distance totale = 5 × 21 900 = 110 000 km."
      },
      {
        question: "Quelle est la circonférence de la Terre ?",
        correctAnswer: 40000,
        unit: "km",
        explanation: "La circonférence de la Terre est d'environ 40 000 km."
      },
      {
        question: "Calculez le nombre de tours du monde",
        correctAnswer: 2.75,
        explanation: "Nombre de tours = 110 000 ÷ 40 000 ≈ 2,75"
      }
    ],
    finalExplanation: "Une personne fait environ 2 à 3 fois le tour de la Terre à pied dans sa vie.",
    theme: "insolite"
  }
];
