
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur les dépenses des ménages
export const economieDepensesQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "19",
    type: "multistep",
    question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
    finalExplanation: "Un ménage français dépense en moyenne 2 570 € par mois, tous postes de dépenses confondus (logement, alimentation, transport, loisirs, etc.)",
    theme: "economie",
    steps: [
      {
        question: "Quel est le revenu moyen disponible d'un ménage français par mois ?",
        correctAnswer: 3100,
        unit: "€",
        explanation: "Le revenu disponible moyen d'un ménage français est d'environ 3 100 € par mois."
      },
      {
        question: "Quel pourcentage de ce revenu est dépensé en moyenne ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "En moyenne, un ménage français dépense environ 83% de son revenu disponible."
      },
      {
        question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
        correctAnswer: 2570,
        unit: "€",
        explanation: "3 100 € × 83% = 2 570 €"
      }
    ]
  },
  {
    id: "eco3",
    type: "multistep",
    question: "Quel est le chiffre d'affaires total de la grande distribution alimentaire en France par an ?",
    finalExplanation: "La grande distribution alimentaire en France génère environ 234 milliards d'euros de chiffre d'affaires par an, un secteur économique majeur dans le pays.",
    theme: "economie",
    steps: [
      {
        question: "Combien chaque ménage français dépense-t-il en moyenne dans la grande distribution alimentaire par mois ?",
        correctAnswer: 650,
        unit: "€",
        explanation: "Chaque ménage français dépense en moyenne 650 € par mois dans la grande distribution alimentaire."
      },
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "Il y a environ 30 millions de ménages en France selon l'INSEE."
      },
      {
        question: "Quel est le chiffre d'affaires total de la grande distribution alimentaire en France par an ?",
        correctAnswer: 234,
        unit: "milliards €",
        explanation: "En multipliant la dépense moyenne par ménage (650 €) par le nombre de ménages (30 millions) puis par 12 mois, on obtient environ 234 milliards d'euros de chiffre d'affaires annuel."
      }
    ]
  },
  {
    id: "eco6",
    type: "multistep",
    question: "Combien d'euros sont dépensés dans les restaurants en France chaque jour ?",
    finalExplanation: "Environ 186 millions d'euros sont dépensés dans les restaurants en France chaque jour, illustrant l'importance de la gastronomie et de la restauration dans l'économie française.",
    theme: "economie",
    steps: [
      {
        question: "Combien de repas sont servis dans les restaurants français chaque jour ?",
        correctAnswer: 6.2,
        unit: "millions",
        explanation: "Environ 6,2 millions de repas sont servis dans les restaurants français chaque jour."
      },
      {
        question: "Quel est le montant moyen dépensé par repas au restaurant en France ?",
        correctAnswer: 30,
        unit: "€",
        explanation: "Le montant moyen dépensé par repas au restaurant en France est d'environ 30 € par personne."
      },
      {
        question: "Combien d'euros sont dépensés dans les restaurants en France chaque jour ?",
        correctAnswer: 186,
        unit: "millions €",
        explanation: "En multipliant le nombre de repas servis (6,2 millions) par la dépense moyenne (30 €), on obtient environ 186 millions d'euros dépensés quotidiennement dans les restaurants."
      }
    ]
  }
];
