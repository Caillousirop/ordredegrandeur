
import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur des faits insolites (vide)
export const questionsInsolitesSimples: Question[] = [];

// Questions à étapes sur des faits insolites avec indices
export const questionsInsolitesMultiStep: MultiStepQuestion[] = [
  {
    id: "insolite-1",
    type: "multistep",
    question: "Combien de Tours Eiffel faudrait-il empiler pour atteindre la Lune ?",
    steps: [
      {
        question: "Quelle est la hauteur de la Tour Eiffel ?",
        correctAnswer: 300,
        unit: "m",
        explanation: "La Tour Eiffel mesure environ 300 mètres de hauteur."
      },
      {
        question: "Quelle est la distance Terre-Lune ?",
        correctAnswer: 384000000,
        unit: "m",
        explanation: "La distance moyenne entre la Terre et la Lune est d'environ 384 000 km, soit 384 000 000 m."
      },
      {
        question: "Calculez le nombre de Tours Eiffel nécessaires (distance ÷ hauteur)",
        correctAnswer: 1280000,
        explanation: "Nombre de tours = 384 000 000 ÷ 300 ≈ 1 280 000"
      }
    ],
    finalExplanation: "Il faudrait environ 1,28 million de Tours Eiffel empilées pour atteindre la Lune.",
    theme: "insolite"
  },
  {
    id: "insolite-2",
    type: "multistep",
    question: "Combien de piscines olympiques seraient nécessaires pour contenir toute l'eau d'un orage moyen sur 1 km² ?",
    steps: [
      {
        question: "Quel est le volume d'une piscine olympique ?",
        correctAnswer: 2500,
        unit: "m³",
        explanation: "Une piscine olympique standard mesure 50m × 25m × 2m = 2 500 m³"
      },
      {
        question: "Quel est le volume d'eau de pluie sur 1 km² lors d'un orage moyen (10 mm) ?",
        correctAnswer: 10000,
        unit: "m³",
        explanation: "10 mm de pluie sur 1 km² = 0,01 m × 1 000 000 m² = 10 000 m³"
      },
      {
        question: "Calculez le nombre de piscines olympiques nécessaires",
        correctAnswer: 4,
        explanation: "Nombre de piscines = 10 000 ÷ 2 500 = 4"
      }
    ],
    finalExplanation: "Un orage moyen sur 1 km² libère l'équivalent de 4 piscines olympiques d'eau.",
    theme: "insolite"
  },
  {
    id: "insolite-3",
    type: "multistep",
    question: "Combien de camions remplis de pièces de 1 centime faudrait-il pour faire le poids de la Tour de Pise ?",
    steps: [
      {
        question: "Quel est le poids de la Tour de Pise ?",
        correctAnswer: 14500000,
        unit: "kg",
        explanation: "La Tour de Pise pèse environ 14 500 tonnes, soit 14,5 millions de kg."
      },
      {
        question: "Quel est le poids d'une pièce de 1 centime ?",
        correctAnswer: 0.0023,
        unit: "kg",
        explanation: "Une pièce de 1 centime pèse environ 2,3 g, soit 0,0023 kg."
      },
      {
        question: "Combien de pièces seraient nécessaires pour atteindre ce poids ?",
        correctAnswer: 6300000000,
        explanation: "Nombre de pièces = 14,5 × 10⁶ ÷ 0,0023 ≈ 6,3 milliards"
      },
      {
        question: "Combien de camions de 25 tonnes seraient nécessaires ?",
        correctAnswer: 580,
        explanation: "Nombre de camions = 14,5 × 10⁶ ÷ 25 000 ≈ 580"
      }
    ],
    finalExplanation: "Il faudrait environ 580 camions remplis de pièces de 1 centime pour atteindre le poids de la Tour de Pise.",
    theme: "insolite"
  },
  {
    id: "insolite-4",
    type: "multistep",
    question: "Si on recouvrait la France de briques Lego, combien en faudrait-il ?",
    steps: [
      {
        question: "Quelle est la surface de la France ?",
        correctAnswer: 550000000000,
        unit: "m²",
        explanation: "La France a une surface d'environ 550 000 km², soit 5,5 × 10¹¹ m²."
      },
      {
        question: "Quelle est la surface d'une brique Lego standard (2x4) ?",
        correctAnswer: 0.00205,
        unit: "m²",
        explanation: "Une brique Lego standard mesure environ 3,2 cm × 6,4 cm = 20,5 cm² = 0,00205 m²."
      },
      {
        question: "Calculez le nombre de briques nécessaires",
        correctAnswer: 270000000000000,
        explanation: "Nombre de briques = 5,5 × 10¹¹ ÷ 0,00205 ≈ 2,7 × 10¹⁴ = 270 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 270 000 milliards de briques Lego pour recouvrir la France.",
    theme: "insolite"
  },
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
    id: "insolite-6",
    type: "multistep",
    question: "Combien de rouleaux de papier toilette faudrait-il pour faire le tour de la Terre ?",
    steps: [
      {
        question: "Quelle est la circonférence de la Terre ?",
        correctAnswer: 40000000,
        unit: "m",
        explanation: "La circonférence de la Terre est d'environ 40 000 km, soit 40 000 000 m."
      },
      {
        question: "Quelle est la longueur d'un rouleau standard de papier toilette ?",
        correctAnswer: 20,
        unit: "m",
        explanation: "Un rouleau standard de papier toilette fait environ 20 m de long."
      },
      {
        question: "Calculez le nombre de rouleaux nécessaires",
        correctAnswer: 2000000,
        explanation: "Nombre de rouleaux = 40 000 000 ÷ 20 = 2 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 2 millions de rouleaux de papier toilette pour faire le tour de la Terre.",
    theme: "insolite"
  },
  {
    id: "insolite-7",
    type: "multistep",
    question: "Combien de ballons de baudruche seraient nécessaires pour soulever un bus scolaire ?",
    steps: [
      {
        question: "Quel est le poids d'un bus scolaire ?",
        correctAnswer: 10000,
        unit: "kg",
        explanation: "Un bus scolaire pèse environ 10 000 kg."
      },
      {
        question: "Quelle est la poussée d'Archimède générée par un ballon d'hélium ?",
        correctAnswer: 0.014,
        unit: "kg",
        explanation: "Un ballon d'hélium génère une poussée d'environ 14 g, soit 0,014 kg."
      },
      {
        question: "Calculez le nombre de ballons nécessaires",
        correctAnswer: 714000,
        explanation: "Nombre de ballons = 10 000 ÷ 0,014 ≈ 714 000"
      }
    ],
    finalExplanation: "Il faudrait environ 700 000 ballons de baudruche pour soulever un bus scolaire.",
    theme: "insolite"
  },
  {
    id: "insolite-8",
    type: "multistep",
    question: "Combien de pianos à queue rempliraient un stade de football ?",
    steps: [
      {
        question: "Quel est le volume d'un piano à queue ?",
        correctAnswer: 3,
        unit: "m³",
        explanation: "Un piano à queue a un volume d'environ 2 m × 1,5 m × 1 m = 3 m³."
      },
      {
        question: "Quel est le volume approximatif d'un stade de football ?",
        correctAnswer: 140000,
        unit: "m³",
        explanation: "Un stade de football a un volume approximatif de 100 m × 70 m × 20 m = 140 000 m³."
      },
      {
        question: "Calculez le nombre de pianos nécessaires",
        correctAnswer: 46000,
        explanation: "Nombre de pianos = 140 000 ÷ 3 ≈ 46 000"
      }
    ],
    finalExplanation: "On pourrait faire entrer environ 46 000 pianos à queue dans un stade de football.",
    theme: "insolite"
  },
  {
    id: "insolite-9",
    type: "multistep",
    question: "Combien de stylos Bic alignés mesureraient la distance entre Paris et Marseille ?",
    steps: [
      {
        question: "Quelle est la distance entre Paris et Marseille ?",
        correctAnswer: 775000,
        unit: "m",
        explanation: "La distance entre Paris et Marseille est d'environ 775 km, soit 775 000 m."
      },
      {
        question: "Quelle est la longueur d'un stylo Bic ?",
        correctAnswer: 0.14,
        unit: "m",
        explanation: "Un stylo Bic mesure environ 14 cm, soit 0,14 m."
      },
      {
        question: "Calculez le nombre de stylos nécessaires",
        correctAnswer: 5500000,
        explanation: "Nombre de stylos = 775 000 ÷ 0,14 ≈ 5,5 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 5,5 millions de stylos Bic alignés pour relier Paris à Marseille.",
    theme: "insolite"
  },
  {
    id: "insolite-10",
    type: "multistep",
    question: "Combien de canettes de soda empilées verticalement atteindraient la station spatiale internationale ?",
    steps: [
      {
        question: "À quelle hauteur se trouve l'ISS ?",
        correctAnswer: 400000,
        unit: "m",
        explanation: "L'ISS orbite à environ 400 km, soit 400 000 m d'altitude."
      },
      {
        question: "Quelle est la hauteur d'une canette de soda ?",
        correctAnswer: 0.12,
        unit: "m",
        explanation: "Une canette de soda mesure environ 12 cm, soit 0,12 m de hauteur."
      },
      {
        question: "Calculez le nombre de canettes nécessaires",
        correctAnswer: 3330000,
        explanation: "Nombre de canettes = 400 000 ÷ 0,12 ≈ 3,33 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 3,3 millions de canettes empilées pour atteindre l'ISS.",
    theme: "insolite"
  }
];

// Exporter toutes les questions insolites
export const insoliteQuestions: (Question | MultiStepQuestion)[] = [
  ...questionsInsolitesSimples,
  ...questionsInsolitesMultiStep
];
