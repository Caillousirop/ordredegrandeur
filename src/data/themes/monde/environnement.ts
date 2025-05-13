
import { Question, MultiStepQuestion } from "@/components/types";

// Questions related to world environment and resources
export const mondeEnvironnementQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eau-egypte",
    type: "multistep",
    question: "Combien de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Égypte ?",
        correctAnswer: 104000000,
        unit: "personnes",
        explanation: "L'Égypte compte environ 104 millions d'habitants."
      },
      {
        question: "Quelle est la consommation moyenne d'eau par personne et par jour pour un usage domestique en Égypte ?",
        correctAnswer: 175,
        unit: "L",
        explanation: "La consommation moyenne d'eau par personne et par jour pour un usage domestique en Égypte est d'environ 175 litres."
      },
      {
        question: "Combien de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique ?",
        correctAnswer: 18200000000,
        unit: "L",
        explanation: "Environ 18,2 milliards de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique."
      }
    ],
    finalExplanation: "Avec une population de 104 millions d'habitants et une consommation moyenne de 175 litres par personne et par jour, environ 18,2 milliards de litres d'eau sont consommés quotidiennement en Égypte pour un usage domestique."
  },
  {
    id: "terres-agricoles-france",
    type: "multistep",
    question: "Combien d'hectares de terres agricoles sont utilisés en France par habitant ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des terres agricoles en France ?",
        correctAnswer: 27000000,
        unit: "hectares",
        explanation: "La superficie totale des terres agricoles en France est d'environ 27 millions d'hectares."
      },
      {
        question: "Quelle est la population de la France ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Combien d'hectares de terres agricoles sont utilisés en France par habitant ?",
        correctAnswer: 0.4,
        unit: "hectares",
        explanation: "Environ 0,4 hectare de terres agricoles est utilisé par habitant en France."
      }
    ],
    finalExplanation: "Avec 27 millions d'hectares de terres agricoles pour une population de 68 millions d'habitants, la France utilise environ 0,4 hectare de terres agricoles par habitant, ce qui est supérieur à la moyenne mondiale."
  },
  {
    id: "arbres-urbains-canada",
    type: "multistep",
    question: "Combien d'arbres y a-t-il dans les zones urbaines du Canada ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des zones urbaines au Canada ?",
        correctAnswer: 90000,
        unit: "km²",
        explanation: "Les zones urbaines au Canada représentent environ 90 000 km²."
      },
      {
        question: "Quelle est la densité moyenne d'arbres par km² dans les zones urbaines canadiennes ?",
        correctAnswer: 9500,
        unit: "arbres/km²",
        explanation: "Dans les zones urbaines canadiennes, on trouve en moyenne environ 9 500 arbres par km²."
      },
      {
        question: "Combien d'arbres y a-t-il dans les zones urbaines du Canada ?",
        correctAnswer: 855000000,
        unit: "arbres",
        explanation: "Il y a environ 855 millions d'arbres dans les zones urbaines du Canada."
      }
    ],
    finalExplanation: "Avec une superficie urbaine d'environ 90 000 km² et une densité moyenne de 9 500 arbres par km², on estime qu'il y a environ 855 millions d'arbres dans les zones urbaines du Canada."
  },
  {
    id: "dechets-chine",
    type: "multistep",
    question: "Combien de tonnes de déchets sont produites chaque jour en Chine ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de la Chine ?",
        correctAnswer: 1400000000,
        unit: "personnes",
        explanation: "La Chine compte environ 1,4 milliard d'habitants."
      },
      {
        question: "Combien de kilos de déchets une personne produit-elle en moyenne par jour en Chine ?",
        correctAnswer: 1.1,
        unit: "kg",
        explanation: "En Chine, une personne produit en moyenne 1,1 kg de déchets par jour."
      },
      {
        question: "Combien de tonnes de déchets sont produites chaque jour en Chine ?",
        correctAnswer: 1540000,
        unit: "tonnes",
        explanation: "Environ 1,54 million de tonnes de déchets sont produites chaque jour en Chine."
      }
    ],
    finalExplanation: "Avec une population de 1,4 milliard d'habitants et une production moyenne de 1,1 kg de déchets par personne et par jour, la Chine produit environ 1,54 million de tonnes de déchets quotidiennement."
  },
  {
    id: "climatisation-arabie-saoudite",
    type: "multistep",
    question: "Combien de logements possèdent une climatisation en Arabie Saoudite ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Arabie Saoudite ?",
        correctAnswer: 35000000,
        unit: "personnes",
        explanation: "L'Arabie Saoudite compte environ 35 millions d'habitants."
      },
      {
        question: "Combien de personnes en moyenne vivent dans un foyer en Arabie Saoudite ?",
        correctAnswer: 5.5,
        unit: "personnes",
        explanation: "En moyenne, 5,5 personnes vivent dans un foyer en Arabie Saoudite."
      },
      {
        question: "Quel pourcentage des logements en Arabie Saoudite possède une climatisation ?",
        correctAnswer: 98,
        unit: "%",
        explanation: "Environ 98% des logements en Arabie Saoudite sont équipés de climatisation."
      },
      {
        question: "Combien de logements possèdent une climatisation en Arabie Saoudite ?",
        correctAnswer: 6240000,
        unit: "logements",
        explanation: "Environ 6,24 millions de logements possèdent une climatisation en Arabie Saoudite."
      }
    ],
    finalExplanation: "Avec une population de 35 millions d'habitants, une moyenne de 5,5 personnes par foyer, et un taux d'équipement en climatisation de 98%, on estime qu'environ 6,24 millions de logements sont équipés de climatisation en Arabie Saoudite."
  },
  {
    id: "mon-ms-003",
    type: "multistep",
    question: "Combien d'hectares de forêt disparaissent chaque année dans le monde ?",
    finalExplanation: "Environ 4,7 millions d'hectares de forêt disparaissent chaque année dans le monde, principalement en raison de la déforestation pour l'agriculture.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie forestière mondiale actuelle ?",
        correctAnswer: 4060,
        unit: "millions d'hectares",
        explanation: "Les forêts couvrent environ 4 060 millions d'hectares dans le monde selon la FAO."
      },
      {
        question: "Quel est le taux annuel de déforestation nette (pourcentage de forêts qui disparaissent chaque année) ?",
        correctAnswer: 0.116,
        unit: "%",
        explanation: "Le taux annuel de déforestation nette est d'environ 0,116%, ce qui inclut la déforestation moins le reboisement."
      },
      {
        question: "Combien d'hectares de forêt disparaissent donc chaque année ?",
        correctAnswer: 4.7,
        unit: "millions",
        explanation: "En multipliant la superficie forestière mondiale (4 060 millions d'hectares) par le taux de déforestation (0,116%), on obtient environ 4,7 millions d'hectares par an."
      }
    ]
  },
  {
    id: "mon-ms-007",
    type: "multistep",
    question: "Combien de kilos de plastique sont produits chaque année dans le monde ?",
    finalExplanation: "Environ 380 millions de tonnes de plastique sont produites chaque année dans le monde, dont une grande partie finit en déchets non recyclés.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Combien de kilos de plastique sont produits par personne et par an en moyenne ?",
        correctAnswer: 47.5,
        unit: "kg",
        explanation: "En moyenne, environ 47,5 kg de plastique sont produits par personne et par an dans le monde."
      },
      {
        question: "Combien de kilos de plastique sont donc produits chaque année dans le monde ?",
        correctAnswer: 380,
        unit: "millions de tonnes",
        explanation: "En multipliant la population mondiale (8 milliards) par la production annuelle par personne (47,5 kg), on obtient environ 380 millions de tonnes."
      }
    ]
  },
  {
    id: "mon-ms-010",
    type: "multistep",
    question: "Combien de tonnes de nourriture sont gaspillées chaque année dans le monde ?",
    finalExplanation: "Environ 1,3 milliard de tonnes de nourriture sont gaspillées chaque année dans le monde, soit près d'un tiers de la production alimentaire mondiale.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la production alimentaire mondiale annuelle (en tonnes) ?",
        correctAnswer: 4000,
        unit: "millions",
        explanation: "La production alimentaire mondiale annuelle est d'environ 4 milliards de tonnes."
      },
      {
        question: "Quel pourcentage de cette production est gaspillé ou perdu ?",
        correctAnswer: 32.5,
        unit: "%",
        explanation: "Environ 32,5% de la production alimentaire mondiale est gaspillé ou perdue selon la FAO, que ce soit à la production, au transport, à la distribution ou à la consommation."
      },
      {
        question: "Combien de tonnes de nourriture sont donc gaspillées chaque année ?",
        correctAnswer: 1300,
        unit: "millions",
        explanation: "En multipliant la production alimentaire mondiale (4 milliards de tonnes) par le pourcentage gaspillé (32,5%), on obtient environ 1,3 milliard de tonnes."
      }
    ]
  },
  {
    id: "mon-ms-012",
    type: "multistep",
    question: "Combien de kilomètres carrés de terres sont consacrés à l'agriculture dans le monde ?",
    finalExplanation: "Environ 48,6 millions de kilomètres carrés de terres sont consacrés à l'agriculture dans le monde, soit près de 37% des terres émergées.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des terres émergées sur Terre ?",
        correctAnswer: 149,
        unit: "millions de km²",
        explanation: "Les terres émergées représentent environ 149 millions de km² sur la surface totale de la Terre qui est de 510 millions de km²."
      },
      {
        question: "Quel pourcentage des terres émergées est consacré à l'agriculture (cultures et pâturages) ?",
        correctAnswer: 32.6,
        unit: "%",
        explanation: "Environ 32,6% des terres émergées dans le monde sont consacrées à l'agriculture, selon la FAO."
      },
      {
        question: "Combien de kilomètres carrés de terres sont donc consacrés à l'agriculture ?",
        correctAnswer: 48.6,
        unit: "millions de km²",
        explanation: "En multipliant la superficie des terres émergées (149 millions de km²) par le pourcentage consacré à l'agriculture (32,6%), on obtient environ 48,6 millions de km²."
      }
    ]
  }
];
