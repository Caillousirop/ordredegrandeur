
import { Question, MultiStepQuestion } from "@/components/types";

// Questions related to world population and demographics
export const mondeDemographieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "naissances-bresil",
    type: "multistep",
    question: "Combien de naissances ont lieu chaque jour au Brésil ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Brésil ?",
        correctAnswer: 213000000,
        unit: "personnes",
        explanation: "Le Brésil compte environ 213 millions d'habitants."
      },
      {
        question: "Quel est le taux de natalité annuel au Brésil (nombre de naissances pour 1000 habitants) ?",
        correctAnswer: 14,
        unit: "‰",
        explanation: "Le taux de natalité au Brésil est d'environ 14 naissances pour 1000 habitants par an."
      },
      {
        question: "Combien de naissances ont lieu chaque jour au Brésil ?",
        correctAnswer: 8150,
        unit: "naissances",
        explanation: "Environ 8150 naissances ont lieu chaque jour au Brésil."
      }
    ],
    finalExplanation: "Avec une population d'environ 213 millions d'habitants et un taux de natalité de 14 pour 1000, le Brésil enregistre approximativement 8150 naissances par jour."
  },
  {
    id: "cote-maritime-indonesie",
    type: "multistep",
    question: "Combien de personnes vivent à moins de 10 km d'une côte maritime en Indonésie ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale de l'Indonésie ?",
        correctAnswer: 276000000,
        unit: "personnes",
        explanation: "L'Indonésie compte environ 276 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population indonésienne estimez-vous vivre à moins de 10 km d'une côte maritime ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% de la population indonésienne vit à moins de 10 km d'une côte maritime."
      },
      {
        question: "Combien de personnes vivent à moins de 10 km d'une côte maritime en Indonésie ?",
        correctAnswer: 179000000,
        unit: "personnes",
        explanation: "Environ 179 millions de personnes vivent à moins de 10 km d'une côte maritime en Indonésie."
      }
    ],
    finalExplanation: "L'Indonésie étant un archipel composé de plus de 17 000 îles, une grande partie de sa population vit près des côtes. Environ 179 millions de personnes, soit 65% de sa population totale, vivent à moins de 10 km d'une côte maritime."
  },
  {
    id: "altitude-perou",
    type: "multistep",
    question: "Combien de personnes vivent à plus de 2 000 mètres d'altitude au Pérou ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Pérou ?",
        correctAnswer: 33000000,
        unit: "personnes",
        explanation: "Le Pérou compte environ 33 millions d'habitants."
      },
      {
        question: "Quel pourcentage du territoire péruvien se trouve à plus de 2 000 mètres d'altitude ?",
        correctAnswer: 35,
        unit: "%",
        explanation: "Environ 35% du territoire péruvien se trouve à plus de 2 000 mètres d'altitude."
      },
      {
        question: "Quel pourcentage de la population péruvienne estimez-vous vivre à plus de 2 000 mètres d'altitude ?",
        correctAnswer: 32,
        unit: "%",
        explanation: "Environ 32% de la population péruvienne vit à plus de 2 000 mètres d'altitude."
      },
      {
        question: "Combien de personnes vivent à plus de 2 000 mètres d'altitude au Pérou ?",
        correctAnswer: 10560000,
        unit: "personnes",
        explanation: "Environ 10,56 millions de personnes vivent à plus de 2 000 mètres d'altitude au Pérou."
      }
    ],
    finalExplanation: "Le Pérou est un pays montagneux avec la cordillère des Andes traversant son territoire. Sur une population totale de 33 millions d'habitants, environ 32% (soit 10,56 millions de personnes) vivent à plus de 2 000 mètres d'altitude."
  },
  {
    id: "mon-ms-001",
    type: "multistep",
    question: "Combien de personnes dans le monde n'ont pas accès à l'eau potable ?",
    finalExplanation: "Environ 785 millions de personnes dans le monde n'ont toujours pas accès à l'eau potable, ce qui représente un défi majeur pour le développement durable.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes selon les dernières estimations des Nations Unies."
      },
      {
        question: "Quel pourcentage de la population mondiale n'a pas accès à l'eau potable ?",
        correctAnswer: 9.8,
        unit: "%",
        explanation: "Environ 9,8% de la population mondiale n'a pas accès à des sources d'eau potable sûres selon l'OMS et l'UNICEF."
      },
      {
        question: "Combien de personnes n'ont donc pas accès à l'eau potable dans le monde ?",
        correctAnswer: 785,
        unit: "millions",
        explanation: "En multipliant la population mondiale (8 milliards) par le pourcentage sans accès à l'eau potable (9,8%), on obtient environ 785 millions de personnes."
      }
    ]
  },
  {
    id: "mon-ms-008",
    type: "multistep",
    question: "Combien de personnes n'ont jamais utilisé internet dans le monde ?",
    finalExplanation: "Environ 2,96 milliards de personnes n'ont jamais utilisé internet dans le monde, révélant une importante fracture numérique qui persiste.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quel pourcentage de la population mondiale a déjà utilisé internet ?",
        correctAnswer: 63,
        unit: "%",
        explanation: "Environ 63% de la population mondiale a déjà utilisé internet selon l'Union internationale des télécommunications."
      },
      {
        question: "Combien de personnes n'ont donc jamais utilisé internet ?",
        correctAnswer: 2960,
        unit: "millions",
        explanation: "En calculant le pourcentage de personnes n'ayant jamais utilisé internet (100% - 63% = 37%) et en multipliant par la population mondiale (8 milliards), on obtient environ 2,96 milliards de personnes."
      }
    ]
  },
  {
    id: "mon-ms-015",
    type: "multistep",
    question: "Combien de personnes vivent à plus de 2 500 mètres d'altitude dans le monde ?",
    finalExplanation: "Environ 140 millions de personnes vivent à plus de 2 500 mètres d'altitude dans le monde, principalement dans les régions montagneuses d'Amérique du Sud, d'Asie et d'Afrique.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quel pourcentage de la surface terrestre se trouve à plus de 2 500 mètres d'altitude ?",
        correctAnswer: 2.8,
        unit: "%",
        explanation: "Environ 2,8% de la surface terrestre se trouve à plus de 2 500 mètres d'altitude."
      },
      {
        question: "Quelle est la densité de population moyenne dans ces zones de haute altitude par rapport à la moyenne mondiale ?",
        correctAnswer: 0.625,
        unit: "ratio",
        explanation: "La densité de population dans les zones de haute altitude est en moyenne 0,625 fois la densité mondiale moyenne."
      },
      {
        question: "Combien de personnes vivent donc à plus de 2 500 mètres d'altitude ?",
        correctAnswer: 140,
        unit: "millions",
        explanation: "En multipliant la population mondiale (8 milliards) par le pourcentage de terres à haute altitude (2,8%) et par le ratio de densité (0,625), on obtient environ 140 millions de personnes."
      }
    ]
  },
  {
    id: "mon-ms-006",
    type: "multistep",
    question: "Combien de mégapoles (villes de plus de 10 millions d'habitants) y a-t-il dans le monde ?",
    finalExplanation: "Il existe 33 mégapoles dans le monde, ces immenses agglomérations de plus de 10 millions d'habitants concentrent une part croissante de la population mondiale.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population urbaine mondiale ?",
        correctAnswer: 4544,
        unit: "millions",
        explanation: "La population urbaine mondiale est d'environ 4,544 milliards de personnes, soit environ 56,7% de la population totale."
      },
      {
        question: "Quel pourcentage de la population urbaine vit dans des mégapoles (villes de plus de 10 millions d'habitants) ?",
        correctAnswer: 7.3,
        unit: "%",
        explanation: "Environ 7,3% de la population urbaine mondiale vit dans des mégapoles."
      },
      {
        question: "Quelle est la population moyenne d'une mégapole ?",
        correctAnswer: 16.1,
        unit: "millions",
        explanation: "Une mégapole compte en moyenne 16,1 millions d'habitants."
      },
      {
        question: "Combien y a-t-il donc de mégapoles dans le monde ?",
        correctAnswer: 33,
        unit: "mégapoles",
        explanation: "En divisant la population totale des mégapoles (4 544 millions × 7,3% ≈ 332 millions) par la population moyenne d'une mégapole (16,1 millions), on obtient environ 33 mégapoles."
      }
    ]
  }
];
