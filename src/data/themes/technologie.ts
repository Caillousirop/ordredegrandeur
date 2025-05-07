
import { Question, MultiStepQuestion } from "@/components/types";

export const technologieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "7",
    type: "multistep",
    question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens français de la région Île-de-France ?",
    finalExplanation: "Cette estimation de 511 millions d'heures passées sur les réseaux sociaux par les lycéens d'Île-de-France chaque année est une approximation basée sur la population lycéenne, le taux d'utilisation des réseaux sociaux et le temps moyen passé quotidiennement. Les chiffres réels peuvent varier en fonction des évolutions technologiques, des tendances sociales et des politiques éducatives.",
    theme: "technologie",
    steps: [
      {
        question: "Combien y a-t-il de lycéens en Île-de-France ?",
        correctAnswer: 500000,
        unit: "lycéens",
        explanation: "L'Île-de-France compte environ 500 000 lycéens selon les données du Rectorat et de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces lycéens utilise régulièrement les réseaux sociaux ?",
        correctAnswer: 93.5,
        unit: "%",
        explanation: "Environ 93,5% des lycéens utilisent régulièrement les réseaux sociaux d'après les enquêtes sur les pratiques numériques des adolescents."
      },
      {
        question: "Combien d'heures par jour un lycéen passe-t-il en moyenne sur les réseaux sociaux ?",
        correctAnswer: 3,
        unit: "heures",
        explanation: "Un lycéen passe en moyenne 3 heures par jour sur les réseaux sociaux selon les études sur les usages numériques des adolescents."
      },
      {
        question: "Combien de jours par an les lycéens utilisent-ils les réseaux sociaux ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les lycéens utilisent les réseaux sociaux pratiquement tous les jours de l'année, soit 365 jours."
      },
      {
        question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens d'Île-de-France ?",
        correctAnswer: 511,
        unit: "millions d'heures",
        explanation: "En multipliant le nombre de lycéens (500 000) par le pourcentage utilisant les réseaux sociaux (93,5%) par le temps quotidien (3 heures) par le nombre de jours (365), on obtient environ 511 millions d'heures."
      }
    ]
  },
  {
    id: "17",
    question: "Quel est le pourcentage de foyers français équipés d'une connexion internet ?",
    correctAnswer: 92,
    unit: "%",
    explanation: "Selon l'INSEE, 92% des foyers français sont équipés d'une connexion internet en 2023.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "18",
    question: "Combien d'heures par semaine un Français passe-t-il en moyenne sur son smartphone ?",
    correctAnswer: 27,
    unit: "heures",
    explanation: "Selon les études de l'ARCEP et de l'INSEE, un Français passe en moyenne 27 heures par semaine sur son smartphone.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "19",
    type: "multistep",
    question: "Combien de données numériques sont produites en France chaque année ?",
    finalExplanation: "La France produit environ 1,3 exaoctets (millions de téraoctets) de données numériques par an selon les estimations de l'INSEE.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de données numériques un Français produit-il en moyenne par jour ?",
        correctAnswer: 2.5,
        unit: "Go",
        explanation: "Un Français produit en moyenne 2,5 gigaoctets de données numériques par jour."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La population française est estimée à 67,8 millions d'habitants selon l'INSEE."
      },
      {
        question: "Combien de données sont produites annuellement en France ?",
        correctAnswer: 1.3,
        unit: "exaoctets",
        explanation: "En multipliant 2,5 Go × 365 jours × 67,8 millions d'habitants, puis en convertissant, on obtient environ 1,3 exaoctets par an."
      }
    ]
  }
];
