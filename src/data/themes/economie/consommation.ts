
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur la consommation
export const economieConsommationQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco2",
    type: "multistep",
    question: "Combien d'argent les Français épargnent-ils chaque année ?",
    finalExplanation: "Les Français épargnent environ 208 milliards d'euros chaque année, soit un des taux d'épargne les plus élevés d'Europe.",
    theme: "economie",
    steps: [
      {
        question: "Quel est le revenu disponible total des ménages français par an ?",
        correctAnswer: 1600,
        unit: "milliards €",
        explanation: "Le revenu disponible total des ménages français est d'environ 1 600 milliards d'euros par an."
      },
      {
        question: "Quel est le taux d'épargne moyen des ménages français (pourcentage du revenu disponible) ?",
        correctAnswer: 13,
        unit: "%",
        explanation: "Le taux d'épargne moyen des ménages français est d'environ 13% du revenu disponible, un des plus élevés d'Europe."
      },
      {
        question: "Combien d'argent les Français épargnent-ils chaque année ?",
        correctAnswer: 208,
        unit: "milliards €",
        explanation: "En multipliant le revenu disponible total (1 600 milliards €) par le taux d'épargne (13%), on obtient environ 208 milliards d'euros épargnés chaque année."
      }
    ]
  },
  {
    id: "eco4",
    type: "multistep",
    question: "Combien de transactions sont réalisées par carte bancaire en France chaque jour ?",
    finalExplanation: "Environ 34 millions de transactions sont réalisées par carte bancaire en France chaque jour, reflétant l'importance croissante des paiements électroniques dans l'économie française.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de cartes bancaires en circulation en France ?",
        correctAnswer: 72,
        unit: "millions",
        explanation: "Il y a environ 72 millions de cartes bancaires en circulation en France."
      },
      {
        question: "Combien de transactions une carte bancaire moyenne réalise-t-elle par semaine ?",
        correctAnswer: 3.3,
        unit: "transactions",
        explanation: "Une carte bancaire moyenne en France réalise environ 3,3 transactions par semaine."
      },
      {
        question: "Combien de transactions sont réalisées par carte bancaire en France chaque jour ?",
        correctAnswer: 34,
        unit: "millions",
        explanation: "En multipliant le nombre de cartes (72 millions) par le nombre de transactions hebdomadaires (3,3) puis en divisant par 7 jours, on obtient environ 34 millions de transactions quotidiennes."
      }
    ]
  },
  {
    id: "eco5",
    type: "multistep",
    question: "Quel est le montant total des achats en ligne réalisés en France chaque année ?",
    finalExplanation: "Les Français réalisent environ 129 milliards d'euros d'achats en ligne chaque année, un marché en constante progression depuis plusieurs années.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il d'acheteurs en ligne en France ?",
        correctAnswer: 43,
        unit: "millions",
        explanation: "Il y a environ 43 millions d'acheteurs en ligne en France."
      },
      {
        question: "Combien chaque acheteur en ligne dépense-t-il en moyenne par an sur internet ?",
        correctAnswer: 3000,
        unit: "€",
        explanation: "Chaque acheteur en ligne français dépense en moyenne 3 000 € par an sur internet."
      },
      {
        question: "Quel est le montant total des achats en ligne réalisés en France chaque année ?",
        correctAnswer: 129,
        unit: "milliards €",
        explanation: "En multipliant le nombre d'acheteurs en ligne (43 millions) par la dépense moyenne annuelle (3 000 €), on obtient environ 129 milliards d'euros d'achats en ligne par an."
      }
    ]
  }
];
