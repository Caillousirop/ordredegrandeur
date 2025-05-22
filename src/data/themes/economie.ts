import { Question, MultiStepQuestion } from "@/components/types";
import { emploiQuestions } from "./emploi";

// Exporting all economy questions combined with employment questions
export const economieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "3",
    type: "simple",
    theme: "economie",
    question: "Quel est le nombre total de logements construits chaque année en France ?",
    correctAnswer: 410000,
    unit: "logements",
    explanation: "Depuis 2021, le nombre annuel de logements construits en France est d'environ 410 000."
  },
  {
    id: "1",
    type: "simple",
    theme: "economie",
    question: "Quel est le salaire mensuel net médian en France en 2021 ?",
    correctAnswer: 2014,
    unit: "euros",
    explanation: "Le salaire mensuel net médian en France en 2021 est de 2 014 euros. La moitié des salariés gagne plus, l'autre moitié gagne moins."
  },
  {
    id: "2",
    type: "simple",
    theme: "economie",
    question: "Combien d'entreprises ont été créées en France en 2022 ?",
    correctAnswer: 1050000,
    unit: "entreprises",
    explanation: "En 2022, un nombre record de 1 050 000 entreprises ont été créées en France, témoignant d'un dynamisme entrepreneurial important."
  },
  {
    id: "4",
    type: "simple",
    theme: "economie",
    question: "Quel est le montant du déficit public de la France en 2023 (en pourcentage du PIB) ? ",
    correctAnswer: 4.9,
    unit: "%",
    explanation: "Le déficit public de la France en 2023 s'élève à 4,9% du PIB, reflétant les dépenses de l'État par rapport à ses recettes."
  },
  {
    id: "5",
    type: "simple",
    theme: "economie",
    question: "Quel est le taux d'épargne des Français en 2023 ?",
    correctAnswer: 18,
    unit: "%",
    explanation: "En 2023, le taux d'épargne des Français est de 18%, ce qui signifie qu'ils mettent de côté 18% de leur revenu disponible."
  },
  {
    id: "6",
    type: "simple",
    theme: "economie",
    question: "Combien de milliardaires vivent en France en 2024 ?",
    correctAnswer: 43,
    unit: "milliardaires",
    explanation: "En 2024, la France compte 43 milliardaires, ce qui la place parmi les pays avec le plus grand nombre de grandes fortunes."
  },
  {
    id: "7",
    type: "simple",
    theme: "economie",
    question: "Quel est l'âge moyen du départ à la retraite en France en 2023 ?",
    correctAnswer: 62.5,
    unit: "ans",
    explanation: "L'âge moyen de départ à la retraite en France en 2023 est de 62,5 ans, un chiffre influencé par les réformes et les évolutions démographiques."
  },
  {
    id: "8",
    type: "simple",
    theme: "economie",
    question: "Quel est le pourcentage des dépenses publiques dans le PIB en France en 2023 ?",
    correctAnswer: 58,
    unit: "%",
    explanation: "En 2023, les dépenses publiques représentent 58% du PIB en France, ce qui témoigne d'un niveau élevé d'intervention de l'État dans l'économie."
  },
  {
    id: "9",
    type: "simple",
    theme: "economie",
    question: "Combien de touristes étrangers la France a-t-elle accueillis en 2023 ?",
    correctAnswer: 80000000,
    unit: "touristes",
    explanation: "La France a accueilli 80 millions de touristes étrangers en 2023, ce qui en fait l'une des destinations les plus prisées au monde."
  },
  {
    id: "10",
    type: "simple",
    theme: "economie",
    question: "Quel est le secteur d'activité qui emploie le plus de personnes en France en 2024 ?",
    correctAnswer: "services",
    unit: null,
    explanation: "En 2024, le secteur des services est celui qui emploie le plus de personnes en France, reflétant la tertiarisation de l'économie."
  },
  {
    id: "ms-eco-001",
    type: "multistep",
    question: "Quel est le chiffre d'affaires annuel du secteur du luxe en France ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la part de marché de la France dans le secteur mondial du luxe ?",
        correctAnswer: 25,
        unit: "%",
        explanation: "La France représente environ 25% du marché mondial du luxe."
      },
      {
        question: "Quel est le chiffre d'affaires annuel du marché mondial du luxe ?",
        correctAnswer: 1400000000000,
        unit: "euros",
        explanation: "Le marché mondial du luxe génère environ 1 400 milliards d'euros de chiffre d'affaires par an."
      },
      {
        question: "Quel est le chiffre d'affaires annuel du secteur du luxe en France ?",
        correctAnswer: 350000000000,
        unit: "euros",
        explanation: "Le chiffre d'affaires annuel du secteur du luxe en France est d'environ 350 milliards d'euros."
      }
    ],
    finalExplanation: "Avec une part de marché de 25% dans un marché mondial du luxe estimé à 1 400 milliards d'euros, le secteur du luxe en France réalise un chiffre d'affaires annuel d'environ 350 milliards d'euros."
  },
  {
    id: "ms-eco-002",
    type: "multistep",
    question: "Combien de bouteilles de champagne sont vendues chaque année dans le monde ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la part de la France dans la production mondiale de champagne ?",
        correctAnswer: 90,
        unit: "%",
        explanation: "La France assure environ 90% de la production mondiale de champagne."
      },
      {
        question: "Quelle est la production annuelle de champagne en France ?",
        correctAnswer: 320000000,
        unit: "bouteilles",
        explanation: "La production annuelle de champagne en France est d'environ 320 millions de bouteilles."
      },
      {
        question: "Combien de bouteilles de champagne sont vendues chaque année dans le monde ?",
        correctAnswer: 355000000,
        unit: "bouteilles",
        explanation: "Environ 355 millions de bouteilles de champagne sont vendues chaque année dans le monde, incluant la production française et celle d'autres pays."
      }
    ],
    finalExplanation: "Avec une production française représentant 90% du marché mondial et une production annuelle de 320 millions de bouteilles, les ventes mondiales de champagne atteignent environ 355 millions de bouteilles par an."
  },
  {
    id: "ms-eco-003",
    type: "multistep",
    question: "Quel est le coût total des arrêts maladie pour l'économie française chaque année ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le pourcentage de la population active française en arrêt maladie chaque jour ?",
        correctAnswer: 4,
        unit: "%",
        explanation: "Environ 4% de la population active française est en arrêt maladie chaque jour."
      },
      {
        question: "Quel est le coût journalier moyen d'un arrêt maladie pour l'économie française (salaires, production perdue, etc.) ?",
        correctAnswer: 150,
        unit: "euros",
        explanation: "Le coût journalier moyen d'un arrêt maladie pour l'économie française est estimé à 150 euros."
      },
      {
        question: "Quel est le coût total des arrêts maladie pour l'économie française chaque année ?",
        correctAnswer: 11000000000,
        unit: "euros",
        explanation: "Le coût total des arrêts maladie pour l'économie française est d'environ 11 milliards d'euros chaque année."
      }
    ],
    finalExplanation: "Avec 4% de la population active en arrêt maladie chaque jour et un coût journalier moyen de 150 euros par arrêt, le coût total annuel des arrêts maladie pour l'économie française s'élève à environ 11 milliards d'euros."
  },
  {
    id: "ms-eco-004",
    type: "multistep",
    question: "Combien de tonnes de nourriture sont gaspillées chaque année en France ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le pourcentage de la production alimentaire française qui est gaspillée chaque année ?",
        correctAnswer: 10,
        unit: "%",
        explanation: "Environ 10% de la production alimentaire française est gaspillée chaque année."
      },
      {
        question: "Quelle est la production alimentaire annuelle totale en France ?",
        correctAnswer: 130000000,
        unit: "tonnes",
        explanation: "La production alimentaire annuelle totale en France est d'environ 130 millions de tonnes."
      },
      {
        question: "Combien de tonnes de nourriture sont gaspillées chaque année en France ?",
        correctAnswer: 13000000,
        unit: "tonnes",
        explanation: "Environ 13 millions de tonnes de nourriture sont gaspillées chaque année en France."
      }
    ],
    finalExplanation: "Avec 10% d'une production alimentaire annuelle totale de 130 millions de tonnes gaspillés, la France perd environ 13 millions de tonnes de nourriture chaque année."
  },
  {
    id: "ms-eco-005",
    type: "multistep",
    question: "Quel est le montant total des investissements étrangers en France chaque année ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le pourcentage des investissements directs étrangers (IDE) en Europe qui sont dirigés vers la France ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des investissements directs étrangers (IDE) en Europe sont dirigés vers la France."
      },
      {
        question: "Quel est le montant total des IDE en Europe chaque année ?",
        correctAnswer: 1000000000000,
        unit: "euros",
        explanation: "Le montant total des IDE en Europe est d'environ 1 000 milliards d'euros chaque année."
      },
      {
        question: "Quel est le montant total des investissements étrangers en France chaque année ?",
        correctAnswer: 200000000000,
        unit: "euros",
        explanation: "Le montant total des investissements étrangers en France est d'environ 200 milliards d'euros chaque année."
      }
    ],
    finalExplanation: "Avec 20% des investissements directs étrangers en Europe dirigés vers la France et un montant total d'IDE en Europe de 1 000 milliards d'euros, la France reçoit environ 200 milliards d'euros d'investissements étrangers chaque année."
  },
  {
    id: "ms-eco-006",
    type: "multistep",
    question: "Combien de temps faut-il en moyenne pour créer une entreprise en France ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de jours sont nécessaires pour accomplir toutes les démarches administratives liées à la création d'une entreprise en France ?",
        correctAnswer: 4,
        unit: "jours",
        explanation: "Il faut en moyenne 4 jours pour accomplir toutes les démarches administratives liées à la création d'une entreprise en France."
      },
      {
        question: "Combien d'heures par jour sont généralement consacrées à ces démarches ?",
        correctAnswer: 3,
        unit: "heures",
        explanation: "En moyenne, 3 heures par jour sont consacrées aux démarches administratives lors de la création d'une entreprise."
      },
      {
        question: "Combien de temps faut-il en moyenne pour créer une entreprise en France ?",
        correctAnswer: 12,
        unit: "heures",
        explanation: "Il faut donc en moyenne 12 heures (4 jours x 3 heures) pour créer une entreprise en France."
      }
    ],
    finalExplanation: "Avec 4 jours nécessaires pour accomplir les démarches administratives et 3 heures consacrées à ces démarches chaque jour, la création d'une entreprise en France prend en moyenne 12 heures."
  },
  {
    id: "ms-eco-007",
    type: "multistep",
    question: "Quel est le nombre de kilomètres de bouchons cumulés en moyenne chaque jour en Île-de-France ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la longueur totale du réseau routier en Île-de-France ?",
        correctAnswer: 22000,
        unit: "km",
        explanation: "La longueur totale du réseau routier en Île-de-France est de 22 000 km."
      },
      {
        question: "Quel pourcentage de ce réseau est touché par des bouchons en moyenne chaque jour ?",
        correctAnswer: 1.5,
        unit: "%",
        explanation: "Environ 1,5% du réseau routier en Île-de-France est touché par des bouchons en moyenne chaque jour."
      },
      {
        question: "Quel est le nombre de kilomètres de bouchons cumulés en moyenne chaque jour en Île-de-France ?",
        correctAnswer: 330,
        unit: "km",
        explanation: "Le nombre de kilomètres de bouchons cumulés en moyenne chaque jour en Île-de-France est de 330 km."
      }
    ],
    finalExplanation: "Avec 1,5% du réseau routier de 22 000 km touché par des bouchons chaque jour, l'Île-de-France cumule en moyenne 330 km de bouchons quotidiennement."
  },
  {
    id: "ms-eco-008",
    type: "multistep",
    question: "Combien de baguettes de pain sont vendues chaque jour en France ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de personnes consomment du pain quotidiennement en France ?",
        correctAnswer: 45000000,
        unit: "personnes",
        explanation: "Environ 45 millions de personnes consomment du pain quotidiennement en France."
      },
      {
        question: "Combien de baguettes de pain sont consommées en moyenne par personne et par jour ?",
        correctAnswer: 0.3,
        unit: "baguettes",
        explanation: "En moyenne, 0,3 baguette de pain est consommée par personne et par jour en France."
      },
      {
        question: "Combien de baguettes de pain sont vendues chaque jour en France ?",
        correctAnswer: 13500000,
        unit: "baguettes",
        explanation: "Environ 13,5 millions de baguettes de pain sont vendues chaque jour en France."
      }
    ],
    finalExplanation: "Avec 45 millions de consommateurs de pain et une consommation moyenne de 0,3 baguette par personne, environ 13,5 millions de baguettes sont vendues chaque jour en France."
  },
  {
    id: "ms-eco-009",
    type: "multistep",
    question: "Quel est le montant moyen des dépenses de santé par habitant en France chaque année ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le budget total alloué aux dépenses de santé en France chaque année ?",
        correctAnswer: 250000000000,
        unit: "euros",
        explanation: "Le budget total alloué aux dépenses de santé en France est de 250 milliards d'euros chaque année."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67000000,
        unit: "habitants",
        explanation: "La population française est de 67 millions d'habitants."
      },
      {
        question: "Quel est le montant moyen des dépenses de santé par habitant en France chaque année ?",
        correctAnswer: 3730,
        unit: "euros",
        explanation: "Le montant moyen des dépenses de santé par habitant en France est de 3 730 euros chaque année."
      }
    ],
    finalExplanation: "Avec un budget total de 250 milliards d'euros alloué aux dépenses de santé et une population de 67 millions d'habitants, le montant moyen des dépenses de santé par habitant en France est de 3 730 euros chaque année."
  },
  {
    id: "ms-eco-010",
    type: "multistep",
    question: "Combien de transactions immobilières sont réalisées chaque année en France ?",
    theme: "economie",
    steps: [
      {
        question: "Quel pourcentage de la population française déménage chaque année ?",
        correctAnswer: 3,
        unit: "%",
        explanation: "Environ 3% de la population française déménage chaque année."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67000000,
        unit: "habitants",
        explanation: "La population française est de 67 millions d'habitants."
      },
      {
        question: "Combien de transactions immobilières sont réalisées chaque année en France ?",
        correctAnswer: 1000000,
        unit: "transactions",
        explanation: "Environ 1 million de transactions immobilières sont réalisées chaque année en France."
      }
    ],
    finalExplanation: "Avec 3% de la population française déménageant chaque année et une population de 67 millions d'habitants, environ 1 million de transactions immobilières sont réalisées annuellement en France."
  },
  {
    id: "ms-eco-ultimes",
    type: "multistep",
    question: "Combien de transactions bancaires sont réalisées chaque jour dans la zone euro ?",
    theme: "economie",
    steps: [
      {
        question: "Combien d'habitants compte la zone euro ?",
        correctAnswer: 340000000,
        unit: "habitants",
        explanation: "La zone euro compte environ 340 millions d'habitants."
      },
      {
        question: "Combien de transactions bancaires un habitant de la zone euro effectue-t-il en moyenne chaque jour ?",
        correctAnswer: 1.8,
        unit: "transactions",
        explanation: "Un habitant de la zone euro effectue en moyenne 1,8 transaction bancaire par jour."
      },
      {
        question: "Combien de transactions bancaires sont réalisées chaque jour dans la zone euro ?",
        correctAnswer: 612000000,
        unit: "transactions",
        explanation: "Environ 612 millions de transactions bancaires sont réalisées chaque jour dans la zone euro."
      }
    ],
    finalExplanation: "Environ 612 millions de transactions bancaires sont réalisées chaque jour dans la zone euro, ce qui correspond à une moyenne de 1,8 transaction quotidienne pour chacun des 340 millions d'habitants de la zone."
  }
];

// Adding the employment questions explicitly to economie
export const allEconomieQuestions = [...economieQuestions, ...emploiQuestions];

// Replace the exported questions to include both economie and emploi
export { allEconomieQuestions as economieQuestions };
