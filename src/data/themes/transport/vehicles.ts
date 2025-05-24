
import { Question, MultiStepQuestion } from "@/components/types";

export const vehiclesTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "tr7",
    question: "Combien de véhicules sont contrôlés chaque année par les forces de l'ordre en France ?",
    correctAnswer: 20000000,
    unit: "véhicules",
    explanation: "Environ 20 millions de véhicules sont contrôlés chaque année par les forces de l'ordre en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr13",
    question: "Combien de véhicules sont volés chaque année en France ?",
    correctAnswer: 120000,
    unit: "véhicules",
    explanation: "Environ 120 000 véhicules sont volés chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr20",
    question: "Combien de drones sont utilisés à des fins professionnelles en France ?",
    correctAnswer: 40000,
    unit: "drones",
    explanation: "Environ 40 000 drones sont utilisés à des fins professionnelles en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr-ms-005",
    type: "multistep",
    question: "Combien de kilomètres sont parcourus par les trains de marchandises en France chaque année ?",
    finalExplanation: "Les trains de marchandises parcourent environ 36 millions de kilomètres chaque année en France, contribuant significativement au transport de fret du pays.",
    theme: "transport",
    steps: [
      {
        question: "Combien de trains de marchandises circulent quotidiennement en France ?",
        correctAnswer: 700,
        unit: "trains",
        explanation: "Environ 700 trains de marchandises circulent chaque jour sur le réseau ferroviaire français."
      },
      {
        question: "Quelle distance parcourt en moyenne un train de marchandises par jour ?",
        correctAnswer: 140,
        unit: "km",
        explanation: "Un train de marchandises parcourt en moyenne 140 km par jour en France."
      },
      {
        question: "Combien de jours par an les trains de marchandises circulent-ils ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les trains de marchandises circulent 365 jours par an, bien que le volume puisse varier selon les périodes."
      },
      {
        question: "Combien de kilomètres sont donc parcourus par les trains de marchandises chaque année ?",
        correctAnswer: 36000000,
        unit: "kilomètres",
        explanation: "En multipliant le nombre de trains (700) par la distance moyenne quotidienne (140 km) par le nombre de jours d'exploitation (365), on obtient environ 36 millions de kilomètres par an."
      }
    ]
  },
  {
    id: "tr-ms-006",
    type: "multistep",
    question: "Combien de kilomètres sont parcourus par les Français en avion chaque année ?",
    finalExplanation: "Les Français parcourent environ 174 milliards de kilomètres en avion chaque année, reflétant l'importance du transport aérien dans les déplacements nationaux et internationaux.",
    theme: "transport",
    steps: [
      {
        question: "Combien de voyages en avion les Français effectuent-ils en moyenne chaque année ?",
        correctAnswer: 145000000,
        unit: "voyages",
        explanation: "Les Français effectuent environ 145 millions de voyages en avion par an (vols nationaux et internationaux)."
      },
      {
        question: "Quelle est la distance moyenne d'un voyage en avion pour un Français ?",
        correctAnswer: 1200,
        unit: "km",
        explanation: "La distance moyenne d'un voyage en avion pour un Français est d'environ 1 200 km."
      },
      {
        question: "Combien de kilomètres sont donc parcourus par les Français en avion chaque année ?",
        correctAnswer: 174000000000,
        unit: "kilomètres",
        explanation: "En multipliant le nombre de voyages (145 millions) par la distance moyenne (1 200 km), on obtient environ 174 milliards de kilomètres par an."
      }
    ]
  },
  {
    id: "tr-ms-007",
    type: "multistep",
    question: "Combien de vélos sont vendus chaque année en France ?",
    finalExplanation: "Environ 2,7 millions de vélos sont vendus chaque année en France, un chiffre en augmentation avec l'intérêt croissant pour les mobilités douces.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population de la France ?",
        correctAnswer: 68000000,
        unit: "habitants",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel est le taux de renouvellement annuel du parc de vélos en France (pourcentage de la population qui achète un vélo neuf chaque année) ?",
        correctAnswer: 3.97,
        unit: "%",
        explanation: "Environ 3,97% de la population française achète un vélo neuf chaque année."
      },
      {
        question: "Combien de vélos sont donc vendus chaque année en France ?",
        correctAnswer: 2700000,
        unit: "vélos",
        explanation: "En multipliant la population (68 millions) par le taux d'achat annuel (3,97%), on obtient environ 2,7 millions de vélos vendus par an."
      }
    ]
  },
  {
    id: "trans-108",
    type: "simple",
    question: "Quelle est la part des véhicules électriques dans les ventes de voitures neuves en France ?",
    correctAnswer: 14.5,
    unit: "%",
    explanation: "Les véhicules électriques représentent environ 14,5% des ventes de voitures neuves en France.",
    theme: "transport"
  },
  {
    id: "trans-110",
    type: "simple",
    question: "Quel est l'âge moyen du parc automobile français ?",
    correctAnswer: 10.5,
    unit: "ans",
    explanation: "L'âge moyen des véhicules du parc automobile français est d'environ 10,5 ans.",
    theme: "transport"
  }
];
