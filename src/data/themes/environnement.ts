
import { Question, MultiStepQuestion } from "@/components/types";

export const environnementQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "2",
    question: "Quelle est la température moyenne mondiale en 2023 (en degrés Celsius) ?",
    correctAnswer: 14.8,
    unit: "°C",
    explanation: "La température moyenne mondiale en 2023 était d'environ 14,8°C, ce qui est plus élevé que la moyenne pré-industrielle.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "4",
    question: "Quel est le pourcentage de la surface terrestre couverte par les océans ?",
    correctAnswer: 71,
    unit: "%",
    explanation: "Les océans couvrent environ 71% de la surface terrestre.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "5",
    question: "Combien de litres d'eau consomme en moyenne un Français par jour ?",
    correctAnswer: 148,
    unit: "litres",
    explanation: "Un Français consomme en moyenne 148 litres d'eau par jour pour son usage domestique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "6",
    type: "multistep",
    question: "Combien de bouteilles d'eau sont consommées en France par an par les touristes sur la Côte d'Azur ?",
    finalExplanation: "Cette estimation de 96 millions de bouteilles d'eau consommées par les touristes sur la Côte d'Azur est une approximation basée sur les flux touristiques, la durée moyenne de séjour et les habitudes de consommation. Les chiffres réels peuvent varier en fonction des saisons, des conditions météorologiques et des changements dans les habitudes de consommation.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de touristes visitent la Côte d'Azur chaque année ?",
        correctAnswer: 10,
        unit: "millions",
        explanation: "Environ 10 millions de touristes visitent la Côte d'Azur annuellement selon les données du Comité Régional du Tourisme."
      },
      {
        question: "Quelle est la durée moyenne de séjour d'un touriste sur la Côte d'Azur ?",
        correctAnswer: 5.5,
        unit: "jours",
        explanation: "La durée moyenne de séjour d'un touriste sur la Côte d'Azur est d'environ 5,5 jours d'après les statistiques touristiques régionales."
      },
      {
        question: "Combien de bouteilles d'eau un touriste consomme-t-il en moyenne par jour en période estivale ?",
        correctAnswer: 1.75,
        unit: "bouteilles",
        explanation: "En période estivale, sous le climat méditerranéen, un touriste consomme en moyenne 1,75 bouteilles d'eau par jour."
      },
      {
        question: "Combien de bouteilles d'eau sont consommées par les touristes sur la Côte d'Azur par an ?",
        correctAnswer: 96,
        unit: "millions",
        explanation: "En multipliant le nombre de touristes (10 millions) par la durée moyenne de séjour (5,5 jours) et par la consommation quotidienne (1,75 bouteilles), on obtient environ 96 millions de bouteilles."
      }
    ]
  },
  {
    id: "25",
    question: "Quel est le pourcentage de logements équipés de chauffage électrique en France ?",
    correctAnswer: 34.7,
    unit: "%",
    explanation: "Selon l'INSEE, 34,7% des logements français sont équipés d'un chauffage électrique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "26",
    type: "multistep",
    question: "Quel est le pourcentage d'électricité produite à partir d'énergies renouvelables en France ?",
    finalExplanation: "D'après les données de RTE et de l'INSEE, environ 24% de l'électricité en France provient des énergies renouvelables en 2023.",
    theme: "environnement",
    steps: [
      {
        question: "Quelle quantité d'électricité est produite annuellement en France ?",
        correctAnswer: 540,
        unit: "TWh",
        explanation: "La France produit environ 540 térawattheures d'électricité par an selon RTE."
      },
      {
        question: "Quelle quantité d'électricité est produite par des énergies renouvelables ?",
        correctAnswer: 129.6,
        unit: "TWh",
        explanation: "Les énergies renouvelables produisent environ 129,6 térawattheures en France."
      },
      {
        question: "Quel pourcentage de l'électricité française est donc renouvelable ?",
        correctAnswer: 24,
        unit: "%",
        explanation: "En divisant la production renouvelable par la production totale, on obtient 24% d'électricité renouvelable."
      }
    ]
  }
];
