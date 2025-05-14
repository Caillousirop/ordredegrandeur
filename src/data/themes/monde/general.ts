import { Question, MultiStepQuestion } from "@/components/types";

// Basic world statistics and general knowledge
export const mondeGeneralQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "mon-101",
    type: "simple",
    question: "Quelle est la population mondiale actuelle ?",
    correctAnswer: 8200000000,
    unit: "personnes",
    explanation: "La population mondiale est de 8,2 milliards d'habitants en 2024 selon les données de l'INED (Institut National d'Études Démographiques).",
    theme: "monde"
  },
  {
    id: "mon-102",
    type: "simple",
    question: "Quel est le PIB mondial total ?",
    correctAnswer: 101000000000000,
    unit: "dollars",
    explanation: "Le PIB mondial total est d'environ 101 000 milliards de dollars selon les données de la Banque mondiale.",
    theme: "monde"
  },
  {
    id: "mon-103",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vit dans les villes ?",
    correctAnswer: 56.7,
    unit: "%",
    explanation: "Environ 56,7% de la population mondiale vit dans des zones urbaines, une proportion en augmentation constante.",
    theme: "monde"
  },
  {
    id: "mon-104",
    type: "simple",
    question: "Quelle est la durée de vie moyenne mondiale ?",
    correctAnswer: 72.7,
    unit: "ans",
    explanation: "L'espérance de vie moyenne mondiale est de 72,7 ans, tous pays confondus.",
    theme: "monde"
  },
  {
    id: "mon-105",
    type: "simple",
    question: "Quel pourcentage de la population mondiale a accès à Internet ?",
    correctAnswer: 63,
    unit: "%",
    explanation: "Environ 63% de la population mondiale a accès à Internet, avec de fortes disparités entre pays développés et en développement.",
    theme: "monde"
  },
  {
    id: "mon-106",
    type: "simple",
    question: "Quelle part de l'électricité mondiale est produite à partir d'énergies renouvelables ?",
    correctAnswer: 29,
    unit: "%",
    explanation: "Environ 29% de l'électricité mondiale est produite à partir de sources d'énergies renouvelables (hydraulique, éolien, solaire, biomasse, etc.).",
    theme: "monde"
  },
  {
    id: "mon-107",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vit avec moins de 2 dollars par jour ?",
    correctAnswer: 9.2,
    unit: "%",
    explanation: "Environ 9,2% de la population mondiale vit dans l'extrême pauvreté, avec moins de 2 dollars par jour.",
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
    question: "Quel est le taux d'alphabétisation mondial des adultes ?",
    correctAnswer: 86.5,
    unit: "%",
    explanation: "Le taux d'alphabétisation mondial des adultes est d'environ 86,5%, selon les données de l'UNESCO.",
    theme: "monde"
  },
  {
    id: "mon-110",
    type: "simple",
    question: "Quelle est la proportion de la population mondiale âgée de moins de 15 ans ?",
    correctAnswer: 25.4,
    unit: "%",
    explanation: "Environ 25,4% de la population mondiale est âgée de moins de 15 ans.",
    theme: "monde"
  }
  // J'ai supprimé les questions mon-s-001 à mon-s-004 car elles ressemblaient à des questions à étapes nécessitant des calculs
];
