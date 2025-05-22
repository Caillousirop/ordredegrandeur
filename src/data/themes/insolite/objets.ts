
import { Question, MultiStepQuestion } from "@/components/types";

export const insoliteObjetsQuestions: MultiStepQuestion[] = [
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
  },
  {
    id: "insolite-21",
    type: "multistep",
    question: "Combien de smartphones empilés feraient la hauteur de l'Everest ?",
    steps: [
      {
        question: "Quelle est la hauteur du mont Everest ?",
        correctAnswer: 8850,
        unit: "m",
        explanation: "Le mont Everest s'élève à environ 8 850 m d'altitude."
      },
      {
        question: "Quelle est l'épaisseur moyenne d'un smartphone ?",
        correctAnswer: 0.008,
        unit: "m",
        explanation: "Un smartphone a une épaisseur moyenne d'environ 8 mm, soit 0,008 m."
      },
      {
        question: "Calculez le nombre de smartphones nécessaires",
        correctAnswer: 1100000,
        explanation: "Nombre de smartphones = 8 850 ÷ 0,008 ≈ 1,1 million"
      }
    ],
    finalExplanation: "Il faudrait environ 1,1 million de smartphones empilés pour atteindre l'Everest.",
    theme: "insolite"
  },
  {
    id: "insolite-23",
    type: "multistep",
    question: "Combien de claviers d'ordinateur rempliraient une piscine ?",
    steps: [
      {
        question: "Quel est le volume d'un clavier d'ordinateur ?",
        correctAnswer: 0.00135,
        unit: "m³",
        explanation: "Un clavier mesure environ 45 cm × 15 cm × 2 cm = 0,00135 m³."
      },
      {
        question: "Quel est le volume moyen d'une piscine ?",
        correctAnswer: 50,
        unit: "m³",
        explanation: "Une piscine moyenne a un volume d'environ 50 m³."
      },
      {
        question: "Calculez le nombre de claviers nécessaires",
        correctAnswer: 37000,
        explanation: "Nombre de claviers = 50 ÷ 0,00135 ≈ 37 000"
      }
    ],
    finalExplanation: "Il faudrait environ 37 000 claviers pour remplir une piscine standard.",
    theme: "insolite"
  },
  {
    id: "insolite-24",
    type: "multistep",
    question: "Combien de toasts faudrait-il pour couvrir le sol au pied de la Tour Eiffel ?",
    steps: [
      {
        question: "Quelle est la surface au sol de la Tour Eiffel ?",
        correctAnswer: 15625,
        unit: "m²",
        explanation: "La base carrée de la Tour Eiffel mesure environ 125 m × 125 m = 15 625 m²."
      },
      {
        question: "Quelle est la surface d'un toast ?",
        correctAnswer: 0.01,
        unit: "m²",
        explanation: "Un toast mesure environ 0,1 m × 0,1 m = 0,01 m²."
      },
      {
        question: "Calculez le nombre de toasts nécessaires",
        correctAnswer: 1560000,
        explanation: "Nombre de toasts = 15 625 ÷ 0,01 = 1,56 million"
      }
    ],
    finalExplanation: "Il faudrait environ 1,5 million de toasts pour recouvrir la base de la Tour Eiffel.",
    theme: "insolite"
  },
  {
    id: "insolite-25",
    type: "multistep",
    question: "Combien de cheveux humains alignés mesurent 1 kilomètre ?",
    steps: [
      {
        question: "Quelle est la longueur moyenne d'un cheveu humain ?",
        correctAnswer: 0.00006,
        unit: "m",
        explanation: "Un cheveu a un diamètre moyen d'environ 0,06 mm, soit 6 × 10⁻⁵ m."
      },
      {
        question: "Calculez le nombre de cheveux nécessaires pour atteindre 1 km",
        correctAnswer: 17000000,
        explanation: "Nombre de cheveux = 1 000 ÷ 6 × 10⁻⁵ ≈ 17 millions"
      }
    ],
    finalExplanation: "Il faut environ 17 millions de cheveux mis bout à bout pour atteindre 1 km.",
    theme: "insolite"
  }
];
