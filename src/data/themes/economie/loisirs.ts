
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur l'économie des loisirs
export const economieLoisirsQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "eco11",
    type: "multistep",
    question: "Combien d'euros les Français jouent-ils en paris sportifs chaque année ?",
    finalExplanation: "Les Français misent environ 12 milliards d'euros en paris sportifs chaque année, un secteur en forte croissance depuis la légalisation des paris en ligne.",
    theme: "economie",
    steps: [
      {
        question: "Combien de parieurs sportifs actifs y a-t-il en France ?",
        correctAnswer: 3.6,
        unit: "millions",
        explanation: "On compte environ 3,6 millions de parieurs sportifs actifs en France."
      },
      {
        question: "Quelle somme un parieur moyen mise-t-il chaque année ?",
        correctAnswer: 3300,
        unit: "€",
        explanation: "Un parieur sportif français mise en moyenne 3 300 € par an."
      },
      {
        question: "Combien d'euros les Français jouent-ils en paris sportifs chaque année ?",
        correctAnswer: 12,
        unit: "milliards €",
        explanation: "En multipliant le nombre de parieurs (3,6 millions) par la mise moyenne annuelle (3 300 €), on obtient environ 12 milliards d'euros misés annuellement en paris sportifs."
      }
    ]
  }
];
