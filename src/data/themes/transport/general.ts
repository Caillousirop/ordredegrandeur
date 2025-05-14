
import { Question, MultiStepQuestion } from "@/components/types";

export const generalTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Combien de kilomètres de pistes cyclables y avait-il en France en 2023 ?",
    correctAnswer: 50000,
    unit: "km",
    explanation: "La France comptait environ 50 000 km de pistes cyclables en 2023 selon le Ministère de la Transition écologique.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "3",
    question: "Combien de gares SNCF y avait-il en France en 2023 ?",
    correctAnswer: 3000,
    unit: "gares",
    explanation: "La France comptait environ 3 000 gares SNCF ouvertes aux voyageurs en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "4",
    question: "Quelle était la longueur du réseau autoroutier français en 2023 ?",
    correctAnswer: 12000,
    unit: "km",
    explanation: "Le réseau autoroutier français s'étendait sur environ 12 000 km en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "5",
    question: "Combien d'aéroports accueillaient des vols commerciaux en France en 2023 ?",
    correctAnswer: 150,
    unit: "aéroports",
    explanation: "Environ 150 aéroports en France accueillaient des vols commerciaux réguliers en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "6",
    question: "Quel était le nombre de ports de commerce en France en 2023 ?",
    correctAnswer: 70,
    unit: "ports",
    explanation: "La France comptait environ 70 ports de commerce actifs en 2023.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "8",
    question: "Quelle était la part du transport ferroviaire dans le transport de marchandises en France en 2022 ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Le transport ferroviaire représentait environ 10% du transport de marchandises en France en 2022.",
    type: "simple",
    theme: "transport"
  }
];
