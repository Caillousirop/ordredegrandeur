
import { Question, MultiStepQuestion } from "@/components/types";

// Questions générales sur la santé (docteurs, consultations, etc.)
export const santeGeneralQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "8",
    question: "Quel est le nombre moyen de médecins pour 1000 habitants en France ?",
    correctAnswer: 3.4,
    unit: "médecins",
    explanation: "Selon les données de l'INSEE, la France compte en moyenne 3,4 médecins pour 1000 habitants en 2023.",
    type: "simple",
    theme: "santé"
  },
  {
    id: "9",
    question: "Quelle est l'espérance de vie moyenne en France en 2023 ?",
    correctAnswer: 82.9,
    unit: "ans",
    explanation: "L'espérance de vie moyenne en France en 2023 est de 82,9 ans selon les données de l'INSEE (85,7 ans pour les femmes et 79,8 ans pour les hommes).",
    type: "simple",
    theme: "santé"
  },
  {
    id: "29",
    question: "Quel est le pourcentage de médecins généralistes parmi l'ensemble des médecins en France ?",
    correctAnswer: 44.3,
    unit: "%",
    explanation: "Selon les données de l'Ordre des Médecins et de l'INSEE, 44,3% des médecins en France sont des généralistes.",
    type: "simple",
    theme: "santé"
  },
  {
    id: "101",
    type: "multistep",
    question: "Combien de consultations médicales sont réalisées chaque jour en France par des généralistes ?",
    finalExplanation: "Les médecins généralistes français réalisent environ 930 000 consultations par jour, ce qui témoigne de leur rôle central dans le système de santé français.",
    theme: "santé",
    steps: [
      {
        question: "Combien de médecins généralistes exercent en France ?",
        correctAnswer: 55000,
        unit: "médecins",
        explanation: "La France compte environ 55 000 médecins généralistes en exercice selon les données du Conseil National de l'Ordre des Médecins."
      },
      {
        question: "Combien de jours par semaine travaille en moyenne un médecin généraliste ?",
        correctAnswer: 4.5,
        unit: "jours",
        explanation: "Un médecin généraliste travaille en moyenne 4,5 jours par semaine, en tenant compte des temps partiels et des différentes organisations."
      },
      {
        question: "Combien de patients un médecin généraliste voit-il en moyenne par jour de travail ?",
        correctAnswer: 22,
        unit: "patients",
        explanation: "Un médecin généraliste reçoit en moyenne 22 patients par jour de consultation selon les études de la DREES."
      },
      {
        question: "Combien de consultations médicales sont réalisées chaque jour en France par des généralistes ?",
        correctAnswer: 930000,
        unit: "consultations",
        explanation: "En multipliant le nombre de médecins généralistes (55 000) par le nombre moyen de patients vus par jour (22) et en ajustant par le taux d'activité quotidienne (4,5/7), on obtient environ 930 000 consultations par jour."
      }
    ]
  },
  {
    id: "115",
    type: "multistep",
    question: "Combien de téléconsultations médicales ont lieu chaque semaine ?",
    finalExplanation: "Environ 500 000 téléconsultations médicales ont lieu chaque semaine en France, un chiffre qui a fortement augmenté depuis la crise sanitaire du COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien de consultations médicales ont lieu chaque semaine en France, tous modes confondus ?",
        correctAnswer: 5.1,
        unit: "millions",
        explanation: "Environ 5,1 millions de consultations médicales (généralistes et spécialistes) ont lieu chaque semaine en France."
      },
      {
        question: "Quel pourcentage des consultations médicales sont réalisées en téléconsultation ?",
        correctAnswer: 9.8,
        unit: "%",
        explanation: "Environ 9,8% des consultations médicales sont désormais réalisées en téléconsultation, un chiffre qui s'est stabilisé après avoir fortement augmenté pendant la pandémie."
      },
      {
        question: "Combien de téléconsultations médicales ont lieu chaque semaine ?",
        correctAnswer: 500000,
        unit: "téléconsultations",
        explanation: "En multipliant le nombre total de consultations hebdomadaires (5,1 millions) par le pourcentage de téléconsultations (9,8%), on obtient environ 500 000 téléconsultations par semaine."
      }
    ]
  },
  {
    id: "103",
    type: "multistep",
    question: "Combien de rendez-vous sont pris chaque jour sur Doctolib ?",
    finalExplanation: "Avec environ 2 millions de rendez-vous quotidiens, Doctolib est devenu un acteur majeur de la prise de rendez-vous médicaux en ligne en France.",
    theme: "santé",
    steps: [
      {
        question: "Combien de professionnels de santé sont inscrits sur Doctolib en France ?",
        correctAnswer: 250000,
        unit: "professionnels",
        explanation: "Environ 250 000 professionnels de santé (médecins, dentistes, kinésithérapeutes, etc.) sont inscrits sur Doctolib en France."
      },
      {
        question: "Combien de rendez-vous un professionnel reçoit-il en moyenne par jour via Doctolib ?",
        correctAnswer: 12,
        unit: "rendez-vous",
        explanation: "Un professionnel de santé présent sur Doctolib reçoit en moyenne 12 rendez-vous par jour via la plateforme, sachant que tous les rendez-vous ne sont pas nécessairement pris en ligne."
      },
      {
        question: "Quel pourcentage des professionnels inscrits utilisent activement la plateforme chaque jour ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% des professionnels inscrits utilisent activement la plateforme quotidiennement pour leur planning."
      },
      {
        question: "Combien de rendez-vous sont pris chaque jour sur Doctolib ?",
        correctAnswer: 2,
        unit: "millions",
        explanation: "En multipliant le nombre de professionnels inscrits (250 000) par le taux d'utilisation quotidienne (65%) par le nombre moyen de rendez-vous par jour (12), on obtient environ 2 millions de rendez-vous quotidiens."
      }
    ]
  },
  {
    id: "104",
    type: "multistep",
    question: "Combien de Français consultent un psychologue au moins une fois par an ?",
    finalExplanation: "Environ 5,4 millions de Français consultent un psychologue au moins une fois par an, un chiffre qui est en augmentation constante depuis quelques années, notamment depuis la crise sanitaire.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population adulte en France ?",
        correctAnswer: 54,
        unit: "millions",
        explanation: "La France compte environ 54 millions d'adultes (personnes de 18 ans et plus)."
      },
      {
        question: "Quel pourcentage de la population adulte déclare avoir consulté un psychologue au cours des 12 derniers mois ?",
        correctAnswer: 10,
        unit: "%",
        explanation: "Selon les enquêtes de santé publique, environ 10% des adultes déclarent avoir consulté un psychologue au moins une fois au cours de l'année écoulée."
      },
      {
        question: "Combien de Français consultent un psychologue au moins une fois par an ?",
        correctAnswer: 5.4,
        unit: "millions",
        explanation: "En multipliant la population adulte (54 millions) par le pourcentage de consultation (10%), on obtient 5,4 millions de personnes."
      }
    ]
  }
];
