
import { Question, MultiStepQuestion } from "@/components/types";

export const infrastructureTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "11",
    question: "Combien de permis de conduire sont délivrés chaque année en France ?",
    correctAnswer: 800000,
    unit: "permis",
    explanation: "Environ 800 000 permis de conduire sont délivrés chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "12",
    question: "Quelle est la longueur totale des lignes de tramway en France ?",
    correctAnswer: 800,
    unit: "km",
    explanation: "Les lignes de tramway en France représentent une longueur totale d'environ 800 km.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "13",
    question: "Combien de bus circulent dans les réseaux de transport urbain en France ?",
    correctAnswer: 60000,
    unit: "bus",
    explanation: "Environ 60 000 bus circulent dans les réseaux de transport urbain en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "14",
    question: "Quelle est la part des énergies renouvelables dans la consommation d'énergie du secteur des transports en France ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Les énergies renouvelables représentent environ 10% de la consommation d'énergie du secteur des transports en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "15",
    question: "Combien de stations de recharge pour véhicules électriques sont accessibles au public en France ?",
    correctAnswer: 50000,
    unit: "stations",
    explanation: "Plus de 50 000 stations de recharge pour véhicules électriques sont accessibles au public en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr9",
    question: "Combien de tonnes de CO2 sont émises chaque année par le secteur des transports en France ?",
    correctAnswer: 130000000,
    unit: "tonnes",
    explanation: "Le secteur des transports émet environ 130 millions de tonnes de CO2 chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr18",
    question: "Combien de kilomètres de voies navigables sont exploitées pour le transport de marchandises en France ?",
    correctAnswer: 8500,
    unit: "km",
    explanation: "Environ 8 500 km de voies navigables sont exploitées pour le transport de marchandises en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr19",
    question: "Quel est le nombre de ports de plaisance en France ?",
    correctAnswer: 450,
    unit: "ports",
    explanation: "La France compte environ 450 ports de plaisance.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr-ms-001",
    type: "multistep",
    question: "Combien de kilomètres de routes y a-t-il en France ?",
    finalExplanation: "Le réseau routier français compte environ 1,1 million de kilomètres, ce qui en fait l'un des plus denses d'Europe.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la superficie de la France métropolitaine ?",
        correctAnswer: 551695,
        unit: "km²",
        explanation: "La France métropolitaine couvre une superficie d'environ 551 695 km²."
      },
      {
        question: "Quelle est la densité moyenne du réseau routier français (kilomètres de route par km²) ?",
        correctAnswer: 1.99,
        unit: "km/km²",
        explanation: "La densité moyenne du réseau routier français est d'environ 1,99 km de route par km²."
      },
      {
        question: "Combien de kilomètres de routes y a-t-il donc en France ?",
        correctAnswer: 1100000,
        unit: "km",
        explanation: "En multipliant la superficie (551 695 km²) par la densité routière (1,99 km/km²), on obtient environ 1,1 million de kilomètres de routes."
      }
    ]
  },
  {
    id: "trans-105",
    type: "simple",
    question: "Quelle est la longueur totale du réseau ferroviaire français ?",
    correctAnswer: 29000,
    unit: "km",
    explanation: "Le réseau ferroviaire français compte environ 29 000 kilomètres de voies ferrées.",
    theme: "transport"
  },
  {
    id: "trans-109",
    type: "simple",
    question: "Quelle est la longueur totale du réseau d'autoroutes français ?",
    correctAnswer: 11690,
    unit: "km",
    explanation: "Le réseau d'autoroutes français compte environ 11 690 kilomètres.",
    theme: "transport"
  }
];
