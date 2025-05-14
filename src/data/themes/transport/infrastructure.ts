
import { Question, MultiStepQuestion } from "@/components/types";

export const infrastructureTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "11",
    question: "Combien de permis de conduire ont été délivrés en France en 2022 ?",
    correctAnswer: 800000,
    unit: "permis",
    explanation: "Environ 800 000 permis de conduire ont été délivrés en France en 2022.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "12",
    question: "Quelle était la longueur totale des lignes de tramway en France en 2023 ?",
    correctAnswer: 800,
    unit: "km",
    explanation: "Les lignes de tramway en France représentaient une longueur totale d'environ 800 km en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "13",
    question: "Combien de bus circulaient dans les réseaux de transport urbain en France en 2023 ?",
    correctAnswer: 60000,
    unit: "bus",
    explanation: "Environ 60 000 bus circulaient dans les réseaux de transport urbain en France en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "14",
    question: "Quelle était la part des énergies renouvelables dans la consommation d'énergie du secteur des transports en France en 2022 ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Les énergies renouvelables représentaient environ 10% de la consommation d'énergie du secteur des transports en France en 2022.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "15",
    question: "Combien de stations de recharge pour véhicules électriques étaient accessibles au public en France fin 2023 ?",
    correctAnswer: 50000,
    unit: "stations",
    explanation: "Plus de 50 000 stations de recharge pour véhicules électriques étaient accessibles au public en France fin 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr9",
    question: "Combien de tonnes de CO2 ont été émises par le secteur des transports en France en 2022 ?",
    correctAnswer: 130000000,
    unit: "tonnes",
    explanation: "Le secteur des transports a émis environ 130 millions de tonnes de CO2 en France en 2022.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr18",
    question: "Combien de kilomètres de voies navigables étaient exploitées pour le transport de marchandises en France en 2023 ?",
    correctAnswer: 8500,
    unit: "km",
    explanation: "Environ 8 500 km de voies navigables étaient exploitées pour le transport de marchandises en France en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr19",
    question: "Quel était le nombre de ports de plaisance en France en 2023 ?",
    correctAnswer: 450,
    unit: "ports",
    explanation: "La France comptait environ 450 ports de plaisance en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr-ms-001",
    type: "multistep",
    question: "Combien de kilomètres de routes y avait-il en France en 2023 ?",
    finalExplanation: "Le réseau routier français comptait environ 1,1 million de kilomètres en 2023, ce qui en fait l'un des plus denses d'Europe.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la superficie de la France métropolitaine ?",
        correctAnswer: 551695,
        unit: "km²",
        explanation: "La France métropolitaine couvre une superficie d'environ 551 695 km²."
      },
      {
        question: "Quelle est la densité moyenne du réseau routier français (kilomètres de route par km²) en 2023 ?",
        correctAnswer: 1.99,
        unit: "km/km²",
        explanation: "La densité moyenne du réseau routier français était d'environ 1,99 km de route par km² en 2023."
      },
      {
        question: "Combien de kilomètres de routes y avait-il donc en France en 2023 ?",
        correctAnswer: 1100000,
        unit: "km",
        explanation: "En multipliant la superficie (551 695 km²) par la densité routière (1,99 km/km²), on obtient environ 1,1 million de kilomètres de routes."
      }
    ]
  },
  // Remove duplicate about autoroute network since it exists in general.ts (ID: 4)
  {
    id: "trans-105",
    type: "simple",
    question: "Quelle était la longueur totale du réseau ferroviaire français en 2023 ?",
    correctAnswer: 29000,
    unit: "km",
    explanation: "Le réseau ferroviaire français comptait environ 29 000 kilomètres de voies ferrées en 2023.",
    theme: "transport"
  }
  // Removing duplicate question about autoroutes (ID: trans-109) as it's redundant with ID: 4
];
