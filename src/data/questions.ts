
import { Question, MultiStepQuestion } from "@/components/types";

export const questions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Quel est le pourcentage de femmes en France en 2023 ?",
    correctAnswer: 51.7,
    unit: "%",
    explanation: "En France, les femmes représentent environ 51,7% de la population selon les dernières estimations de l'INSEE.",
    type: "simple"
  },
  {
    id: "2",
    question: "Quelle est la température moyenne mondiale en 2023 (en degrés Celsius) ?",
    correctAnswer: 14.8,
    unit: "°C",
    explanation: "La température moyenne mondiale en 2023 était d'environ 14,8°C, ce qui est plus élevé que la moyenne pré-industrielle.",
    type: "simple"
  },
  {
    id: "3",
    question: "Quel était le taux de chômage en France en 2023 ?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France en 2023 était d'environ 7,1% selon l'INSEE.",
    type: "simple"
  },
  {
    id: "4",
    question: "Quel est le pourcentage de la surface terrestre couverte par les océans ?",
    correctAnswer: 71,
    unit: "%",
    explanation: "Les océans couvrent environ 71% de la surface terrestre.",
    type: "simple"
  },
  {
    id: "5",
    question: "Combien de litres d'eau consomme en moyenne un Français par jour ?",
    correctAnswer: 148,
    unit: "litres",
    explanation: "Un Français consomme en moyenne 148 litres d'eau par jour pour son usage domestique.",
    type: "simple"
  },
  {
    id: "6",
    type: "multistep",
    question: "Combien de femmes de plus de 50 ans ont un diplôme Bac+5 en France ?",
    finalExplanation: "D'après les statistiques de l'INSEE, environ 420 000 femmes de plus de 50 ans possèdent un diplôme de niveau Bac+5 ou plus en France.",
    steps: [
      {
        question: "Combien y a-t-il de femmes de plus de 50 ans en France ?",
        correctAnswer: 13.2,
        unit: "millions",
        explanation: "En France, il y a environ 13,2 millions de femmes âgées de plus de 50 ans selon les dernières données démographiques."
      },
      {
        question: "Quel pourcentage de la population française possède un diplôme Bac+5 ?",
        correctAnswer: 10.5,
        unit: "%",
        explanation: "Environ 10,5% de la population française détient un diplôme de niveau Bac+5 ou plus."
      },
      {
        question: "Parmi les femmes de plus de 50 ans, combien possèdent un diplôme Bac+5 ?",
        correctAnswer: 420000,
        unit: "personnes",
        explanation: "Le croisement des données démographiques et éducatives montre qu'environ 420 000 femmes de plus de 50 ans ont un diplôme Bac+5."
      }
    ]
  },
  {
    id: "7",
    type: "multistep",
    question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants en France ?",
    finalExplanation: "En croisant les données d'immatriculation et d'urbanisme, on estime qu'environ 210 000 voitures électriques circulent dans les grandes villes françaises de plus de 100 000 habitants.",
    steps: [
      {
        question: "Combien y a-t-il de voitures électriques en France au total ?",
        correctAnswer: 620000,
        unit: "véhicules",
        explanation: "La France compte environ 620 000 voitures électriques immatriculées selon les dernières statistiques."
      },
      {
        question: "Quel pourcentage de la population française vit dans des villes de plus de 100 000 habitants ?",
        correctAnswer: 34,
        unit: "%",
        explanation: "Environ 34% de la population française vit dans des villes de plus de 100 000 habitants."
      },
      {
        question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants ?",
        correctAnswer: 210000,
        unit: "véhicules",
        explanation: "En appliquant la répartition démographique et les taux d'adoption plus élevés en zones urbaines, on estime ce nombre à 210 000 véhicules."
      }
    ]
  }
];

