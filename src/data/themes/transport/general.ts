
import { Question, MultiStepQuestion } from "@/components/types";

export const generalTransportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Combien de kilomètres de pistes cyclables y a-t-il en France ?",
    correctAnswer: 50000,
    unit: "km",
    explanation: "La France compte environ 50 000 km de pistes cyclables selon le Ministère de la Transition écologique.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "3",
    question: "Combien de gares SNCF y a-t-il en France ?",
    correctAnswer: 3000,
    unit: "gares",
    explanation: "La France compte environ 3 000 gares SNCF ouvertes aux voyageurs.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "4",
    question: "Quelle est la longueur du réseau autoroutier français ?",
    correctAnswer: 12000,
    unit: "km",
    explanation: "Le réseau autoroutier français s'étend sur environ 12 000 km.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "5",
    question: "Combien d'aéroports accueillent des vols commerciaux en France ?",
    correctAnswer: 150,
    unit: "aéroports",
    explanation: "Environ 150 aéroports en France accueillent des vols commerciaux réguliers.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "6",
    question: "Quel est le nombre de ports de commerce en France ?",
    correctAnswer: 70,
    unit: "ports",
    explanation: "La France compte environ 70 ports de commerce actifs.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "8",
    question: "Quelle est la part du transport ferroviaire dans le transport de marchandises en France ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Le transport ferroviaire représente environ 10% du transport de marchandises en France.",
    type: "simple",
    theme: "transport"
  }
  // J'ai supprimé les questions 2, 7, 9 et 10 car elles ressemblaient à des questions à étapes nécessitant des calculs
];
