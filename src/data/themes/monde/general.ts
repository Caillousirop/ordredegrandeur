
import { Question, MultiStepQuestion } from "@/components/types";

// Basic world statistics and general knowledge
export const mondeGeneralQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "mon-101",
    type: "simple",
    question: "Quelle était la population mondiale en 2024 ?",
    correctAnswer: 8200000000,
    unit: "personnes",
    explanation: "La population mondiale était de 8,2 milliards d'habitants en 2024 selon les données de l'INED (Institut National d'Études Démographiques).",
    theme: "monde"
  },
  {
    id: "mon-102",
    type: "simple",
    question: "Quel était le PIB mondial total en 2023 ?",
    correctAnswer: 101000000000000,
    unit: "dollars",
    explanation: "Le PIB mondial total était d'environ 101 000 milliards de dollars en 2023 selon les données de la Banque mondiale.",
    theme: "monde"
  },
  {
    id: "mon-103",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vivait dans les villes en 2023 ?",
    correctAnswer: 56.7,
    unit: "%",
    explanation: "Environ 56,7% de la population mondiale vivait dans des zones urbaines en 2023, une proportion en augmentation constante.",
    theme: "monde"
  },
  {
    id: "mon-104",
    type: "simple",
    question: "Quelle était l'espérance de vie moyenne mondiale en 2023 ?",
    correctAnswer: 72.7,
    unit: "ans",
    explanation: "L'espérance de vie moyenne mondiale était de 72,7 ans en 2023, tous pays confondus.",
    theme: "monde"
  },
  {
    id: "mon-105",
    type: "simple",
    question: "Quel pourcentage de la population mondiale avait accès à Internet en 2023 ?",
    correctAnswer: 63,
    unit: "%",
    explanation: "Environ 63% de la population mondiale avait accès à Internet en 2023, avec de fortes disparités entre pays développés et en développement.",
    theme: "monde"
  },
  {
    id: "mon-106",
    type: "simple",
    question: "Quelle part de l'électricité mondiale était produite à partir d'énergies renouvelables en 2023 ?",
    correctAnswer: 29,
    unit: "%",
    explanation: "Environ 29% de l'électricité mondiale était produite à partir de sources d'énergies renouvelables en 2023 (hydraulique, éolien, solaire, biomasse, etc.).",
    theme: "monde"
  },
  {
    id: "mon-107",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vivait avec moins de 2 dollars par jour en 2022 ?",
    correctAnswer: 9.2,
    unit: "%",
    explanation: "Environ 9,2% de la population mondiale vivait dans l'extrême pauvreté en 2022, avec moins de 2 dollars par jour.",
    theme: "monde"
  },
  {
    id: "mon-108",
    type: "simple",
    question: "Quelle est la surface des terres émergées sur Terre ?",
    correctAnswer: 149000000,
    unit: "km²",
    explanation: "Les terres émergées représentent environ 149 millions de km² sur la surface totale de la Terre qui est de 510 millions de km².",
    theme: "monde"
  },
  {
    id: "mon-109",
    type: "simple",
    question: "Quel était le taux d'alphabétisation mondial des adultes en 2023 ?",
    correctAnswer: 86.5,
    unit: "%",
    explanation: "Le taux d'alphabétisation mondial des adultes était d'environ 86,5% en 2023, selon les données de l'UNESCO.",
    theme: "monde"
  },
  {
    id: "mon-110",
    type: "simple",
    question: "Quelle était la proportion de la population mondiale âgée de moins de 15 ans en 2023 ?",
    correctAnswer: 25.4,
    unit: "%",
    explanation: "Environ 25,4% de la population mondiale était âgée de moins de 15 ans en 2023.",
    theme: "monde"
  }
];
