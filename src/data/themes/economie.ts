
import { Question, MultiStepQuestion } from "@/components/types";

export const economieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "3",
    question: "Quel était le taux de chômage en France en 2023 ?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France en 2023 était d'environ 7,1% selon l'INSEE.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "34",
    type: "multistep",
    question: "Quel est le nombre de fenêtres lavées professionnellement chaque année dans les immeubles de bureaux de plus de 10 étages en France ?",
    finalExplanation: "Cette estimation de 11,5 millions de fenêtres lavées professionnellement dans les grands immeubles de bureaux en France est une approximation basée sur le nombre de ces immeubles, leur architecture moyenne et la fréquence d'entretien. Les chiffres réels peuvent varier selon les politiques d'entretien, les contraintes budgétaires et les spécificités architecturales.",
    theme: "économie",
    steps: [
      {
        question: "Combien d'immeubles de bureaux de plus de 10 étages existe-t-il en France ?",
        correctAnswer: 1250,
        unit: "immeubles",
        explanation: "On estime qu'il existe environ 1 250 immeubles de bureaux de plus de 10 étages en France, principalement concentrés dans les grandes métropoles."
      },
      {
        question: "Combien d'étages compte en moyenne un de ces immeubles ?",
        correctAnswer: 16.5,
        unit: "étages",
        explanation: "Ces grands immeubles de bureaux comptent en moyenne 16,5 étages selon les données d'urbanisme commercial."
      },
      {
        question: "Combien de fenêtres y a-t-il en moyenne par étage ?",
        correctAnswer: 35,
        unit: "fenêtres",
        explanation: "Un étage standard d'immeuble de bureaux moderne comprend en moyenne 35 fenêtres selon les normes architecturales contemporaines."
      },
      {
        question: "Combien de fois par an les fenêtres sont-elles lavées professionnellement ?",
        correctAnswer: 4,
        unit: "fois",
        explanation: "Les fenêtres des immeubles de bureaux sont généralement nettoyées professionnellement 4 fois par an selon les standards d'entretien des bâtiments commerciaux."
      },
      {
        question: "Quel est le nombre total de fenêtres lavées chaque année dans ces immeubles ?",
        correctAnswer: 11.5,
        unit: "millions",
        explanation: "En multipliant le nombre d'immeubles (1 250) par le nombre moyen d'étages (16,5) par le nombre moyen de fenêtres par étage (35) par la fréquence de nettoyage annuelle (4), on obtient environ 11,5 millions de fenêtres lavées par an."
      }
    ]
  }
];
