
import { Question, MultiStepQuestion } from "@/components/types";

export const transportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "14",
    question: "Quelle est la distance moyenne parcourue par un Français en voiture chaque année ?",
    correctAnswer: 12200,
    unit: "km",
    explanation: "Selon les données de l'INSEE, un Français parcourt en moyenne 12 200 kilomètres par an en voiture.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "15",
    question: "Quel est le nombre de voyageurs dans le métro parisien par jour ?",
    correctAnswer: 4.16,
    unit: "millions",
    explanation: "Le métro parisien transporte environ 4,16 millions de voyageurs par jour selon les statistiques de la RATP.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "16",
    type: "multistep",
    question: "Combien de kilomètres de pistes cyclables y a-t-il en France ?",
    finalExplanation: "La France compte environ 60 000 km de pistes cyclables et voies vertes selon les données du Ministère de la Transition Écologique.",
    theme: "transport",
    steps: [
      {
        question: "Combien de kilomètres d'itinéraires cyclables nationaux sont aménagés en France ?",
        correctAnswer: 25700,
        unit: "km",
        explanation: "La France compte environ 25 700 km d'itinéraires cyclables nationaux aménagés."
      },
      {
        question: "Quel est le nombre de kilomètres de pistes cyclables urbaines en France ?",
        correctAnswer: 34300,
        unit: "km",
        explanation: "Les pistes cyclables urbaines représentent environ 34 300 km en France."
      },
      {
        question: "Combien de kilomètres de pistes cyclables compte la France au total ?",
        correctAnswer: 60000,
        unit: "km",
        explanation: "En additionnant les itinéraires nationaux et urbains, la France compte environ 60 000 km de pistes cyclables."
      }
    ]
  },
  {
    id: "27",
    type: "multistep",
    question: "Quel pourcentage des déplacements urbains sont effectués à vélo en France ?",
    finalExplanation: "Selon les données de l'INSEE et du Ministère de la Transition Écologique, environ 4% des déplacements urbains sont effectués à vélo en France.",
    theme: "transport",
    steps: [
      {
        question: "Combien de déplacements quotidiens un Français effectue-t-il en moyenne ?",
        correctAnswer: 3.15,
        unit: "déplacements",
        explanation: "Un Français effectue en moyenne 3,15 déplacements quotidiens selon les enquêtes de mobilité."
      },
      {
        question: "Combien de Français se déplacent régulièrement à vélo en zone urbaine ?",
        correctAnswer: 8.3,
        unit: "millions",
        explanation: "Environ 8,3 millions de Français utilisent régulièrement le vélo en zone urbaine."
      },
      {
        question: "Quel pourcentage des déplacements urbains sont effectués à vélo ?",
        correctAnswer: 4,
        unit: "%",
        explanation: "Le vélo représente environ 4% de l'ensemble des déplacements urbains en France."
      }
    ]
  },
  {
    id: "30",
    type: "multistep",
    question: "Quel pourcentage de Français utilisent quotidiennement les transports en commun ?",
    finalExplanation: "Environ 16% des Français utilisent quotidiennement les transports en commun selon les données de l'INSEE.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population française en âge de se déplacer de façon autonome (plus de 12 ans) ?",
        correctAnswer: 61.4,
        unit: "millions",
        explanation: "En France, environ 61,4 millions de personnes ont plus de 12 ans et peuvent se déplacer de façon autonome."
      },
      {
        question: "Combien de personnes utilisent les transports en commun chaque jour ?",
        correctAnswer: 9.8,
        unit: "millions",
        explanation: "Environ 9,8 millions de Français utilisent les transports en commun quotidiennement."
      },
      {
        question: "Quel pourcentage cela représente-t-il par rapport à la population en âge de se déplacer ?",
        correctAnswer: 16,
        unit: "%",
        explanation: "En divisant 9,8 millions par 61,4 millions, on obtient environ 16% de la population."
      }
    ]
  },
  {
    id: "32",
    type: "multistep",
    question: "Quel est le nombre total d'heures passées dans les embouteillages chaque année par les habitants de la métropole de Lyon ?",
    finalExplanation: "Cette estimation de 14,6 millions d'heures passées dans les embouteillages par les habitants de la métropole lyonnaise est une approximation qui se base sur la population active, le taux de déplacement en voiture et le temps moyen perdu dans les embouteillages. Les chiffres réels peuvent varier selon les saisons, les travaux routiers et les évolutions des modes de transport.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population de la métropole de Lyon ?",
        correctAnswer: 1.4,
        unit: "millions",
        explanation: "La métropole de Lyon compte environ 1,4 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population utilise la voiture comme moyen de transport principal ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des habitants de la métropole lyonnaise utilisent la voiture comme moyen de transport principal d'après les enquêtes sur les déplacements urbains."
      },
      {
        question: "Combien de déplacements en voiture effectue en moyenne un conducteur par jour ouvré ?",
        correctAnswer: 2.3,
        unit: "déplacements",
        explanation: "En moyenne, un conducteur lyonnais effectue 2,3 déplacements en voiture par jour ouvré selon les études de mobilité urbaine."
      },
      {
        question: "Combien de minutes sont perdues en moyenne dans les embouteillages par déplacement ?",
        correctAnswer: 18,
        unit: "minutes",
        explanation: "Un conducteur perd en moyenne 18 minutes par déplacement dans les embouteillages à Lyon selon les données de congestion routière."
      },
      {
        question: "Combien de jours ouvrés compte une année ?",
        correctAnswer: 220,
        unit: "jours",
        explanation: "Une année compte environ 220 jours ouvrés en France, déduction faite des week-ends et jours fériés."
      },
      {
        question: "Combien d'heures sont passées dans les embouteillages chaque année par les habitants de la métropole de Lyon ?",
        correctAnswer: 14.6,
        unit: "millions d'heures",
        explanation: "En multipliant la population (1,4 millions) par le pourcentage utilisant la voiture (42%) par le nombre de déplacements quotidiens (2,3) par le temps perdu (18 minutes) par le nombre de jours ouvrés (220), puis en convertissant en heures, on obtient environ 14,6 millions d'heures."
      }
    ]
  }
];
