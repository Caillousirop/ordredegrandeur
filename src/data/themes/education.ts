
import { Question, MultiStepQuestion } from "@/components/types";

export const educationQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "11",
    question: "Quel est le budget annuel moyen par élève dans l'enseignement primaire ?",
    correctAnswer: 7840,
    unit: "€",
    explanation: "Selon le Ministère de l'Éducation nationale et l'INSEE, le budget annuel moyen consacré à un élève du primaire est d'environ 7 840 euros.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "12",
    question: "Quel est le pourcentage d'une génération obtenant le baccalauréat en France ?",
    correctAnswer: 80.1,
    unit: "%",
    explanation: "Selon les chiffres de l'INSEE, environ 80,1% d'une génération obtient le baccalauréat en France.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "13",
    type: "multistep",
    question: "Combien d'heures d'enseignement un élève français reçoit-il entre 6 et 18 ans ?",
    finalExplanation: "Un élève français reçoit environ 10 800 heures d'enseignement entre 6 et 18 ans selon les données du Ministère de l'Éducation nationale.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'heures de cours un élève reçoit-il en moyenne par semaine ?",
        correctAnswer: 27,
        unit: "heures",
        explanation: "Un élève reçoit en moyenne 27 heures de cours par semaine dans le système éducatif français."
      },
      {
        question: "Combien de semaines d'école y a-t-il par an en France ?",
        correctAnswer: 36,
        unit: "semaines",
        explanation: "L'année scolaire en France compte environ 36 semaines de cours."
      },
      {
        question: "Combien d'années d'enseignement obligatoire y a-t-il entre 6 et 18 ans ?",
        correctAnswer: 12,
        unit: "années",
        explanation: "Entre 6 et 18 ans, il y a 12 années d'enseignement obligatoire en France."
      },
      {
        question: "Quel est le nombre total d'heures d'enseignement reçues entre 6 et 18 ans ?",
        correctAnswer: 10800,
        unit: "heures",
        explanation: "En multipliant 27 heures par semaine × 36 semaines par an × 12 années, on obtient un total d'environ 10 800 heures."
      }
    ]
  },
  {
    id: "24",
    question: "Quel est le pourcentage de jeunes de 18-24 ans poursuivant des études supérieures en France ?",
    correctAnswer: 46.2,
    unit: "%",
    explanation: "Selon les données de l'INSEE, 46,2% des jeunes de 18 à 24 ans poursuivent des études supérieures en France.",
    type: "simple",
    theme: "éducation"
  }
];
