
import { Question, MultiStepQuestion } from "@/components/types";

export const emploiQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "20",
    question: "Quel est le nombre d'heures travaillées en moyenne par semaine en France ?",
    correctAnswer: 35.6,
    unit: "heures",
    explanation: "Selon l'INSEE, les Français travaillent en moyenne 35,6 heures par semaine (tous types de contrats confondus).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "21",
    question: "Quel est le salaire médian mensuel net en France en 2023 ?",
    correctAnswer: 1940,
    unit: "€",
    explanation: "Le salaire médian mensuel net en France est d'environ 1 940 euros selon les données de l'INSEE.",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "22",
    type: "multistep",
    question: "Combien de jours de congés payés sont pris en moyenne par les Français chaque année ?",
    finalExplanation: "Les Français prennent en moyenne 37 jours de congés payés par an (incluant RTT et congés payés standards).",
    theme: "emploi",
    steps: [
      {
        question: "Quel est le nombre minimum légal de jours de congés payés en France ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Le minimum légal de congés payés en France est de 25 jours ouvrés (5 semaines)."
      },
      {
        question: "Combien de jours RTT un salarié français reçoit-il en moyenne par an ?",
        correctAnswer: 12,
        unit: "jours",
        explanation: "Un salarié français reçoit en moyenne 12 jours RTT par an, selon les statistiques du Ministère du Travail."
      },
      {
        question: "Combien de jours de congés payés (RTT inclus) sont pris en moyenne par an ?",
        correctAnswer: 37,
        unit: "jours",
        explanation: "En moyenne, les Français prennent 37 jours de congés par an, en additionnant les congés payés standards et les RTT."
      }
    ]
  },
  {
    id: "28",
    question: "Quel pourcentage des emplois en France sont dans le secteur tertiaire (services) ?",
    correctAnswer: 76.8,
    unit: "%",
    explanation: "Selon l'INSEE, 76,8% des emplois en France sont dans le secteur tertiaire (services).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "31",
    type: "multistep",
    question: "Combien de congés payés sont pris en moyenne par les Français de moins de 40 ans en région Bretagne ?",
    finalExplanation: "Cette estimation de 725 000 jours de congés payés est une approximation basée sur la population bretonne de moins de 40 ans, le taux d'activité professionnelle et les habitudes de prise de congés dans cette région. Les chiffres réels peuvent varier selon les secteurs d'activité, les conventions collectives et les pratiques individuelles.",
    theme: "emploi",
    steps: [
      {
        question: "Quelle est la population totale de la Bretagne ?",
        correctAnswer: 3.35,
        unit: "millions",
        explanation: "La Bretagne compte environ 3,35 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population a moins de 40 ans ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% de la population bretonne a moins de 40 ans selon la pyramide des âges régionale."
      },
      {
        question: "Parmi cette population de moins de 40 ans, quel pourcentage est en activité professionnelle ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Le taux d'activité professionnelle des moins de 40 ans en Bretagne est d'environ 72% selon les statistiques de l'emploi régional."
      },
      {
        question: "Combien de jours de congés payés sont pris en moyenne par an par ces personnes ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Les actifs de moins de 40 ans en Bretagne prennent en moyenne 25 jours de congés payés par an, légèrement en-dessous de la moyenne nationale."
      },
      {
        question: "Combien de jours de congés payés sont pris au total par les Bretons de moins de 40 ans ?",
        correctAnswer: 725000,
        unit: "jours",
        explanation: "En multipliant la population totale (3,35 millions) par le pourcentage de moins de 40 ans (43%) par le taux d'activité (72%) par le nombre de jours de congés (25), on obtient environ 725 000 jours de congés payés."
      }
    ]
  }
];
