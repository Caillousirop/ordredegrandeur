
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur le domaine pharmaceutique et les médicaments
export const santePharmaQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "110",
    type: "multistep",
    question: "Combien de pharmaciens exercent dans des communes de moins de 5 000 habitants ?",
    finalExplanation: "Environ 7 200 pharmaciens exercent dans des communes de moins de 5 000 habitants, jouant un rôle crucial dans l'accès aux médicaments et aux conseils de santé dans les zones rurales.",
    theme: "santé",
    steps: [
      {
        question: "Combien de pharmaciens sont en exercice en France ?",
        correctAnswer: 72000,
        unit: "pharmaciens",
        explanation: "La France compte environ 72 000 pharmaciens en exercice selon les données du Conseil National de l'Ordre des Pharmaciens."
      },
      {
        question: "Combien de pharmacies d'officine sont implantées en France ?",
        correctAnswer: 20800,
        unit: "pharmacies",
        explanation: "On dénombre environ 20 800 pharmacies d'officine sur le territoire français."
      },
      {
        question: "Quel pourcentage des pharmacies sont implantées dans des communes de moins de 5 000 habitants ?",
        correctAnswer: 34.6,
        unit: "%",
        explanation: "Environ 34,6% des pharmacies françaises sont situées dans des communes de moins de 5 000 habitants."
      },
      {
        question: "Combien de pharmaciens exercent dans des communes de moins de 5 000 habitants ?",
        correctAnswer: 7200,
        unit: "pharmaciens",
        explanation: "En multipliant le nombre de pharmacies en zone rurale (20 800 × 34,6% ≈ 7 200) par le nombre moyen de pharmaciens par établissement en zone rurale (environ 1), on obtient approximativement 7 200 pharmaciens."
      }
    ]
  },
  {
    id: "111",
    type: "multistep",
    question: "Combien de femmes de 50 à 74 ans réalisent une mammographie tous les 2 ans ?",
    finalExplanation: "Environ 2,5 millions de femmes de 50 à 74 ans réalisent une mammographie de dépistage tous les 2 ans dans le cadre du programme national de dépistage du cancer du sein.",
    theme: "santé",
    steps: [
      {
        question: "Combien de femmes âgées de 50 à 74 ans vivent en France ?",
        correctAnswer: 8.4,
        unit: "millions",
        explanation: "La France compte environ 8,4 millions de femmes âgées de 50 à 74 ans, la tranche d'âge cible pour le dépistage organisé du cancer du sein."
      },
      {
        question: "Quel est le taux de participation au programme national de dépistage du cancer du sein ?",
        correctAnswer: 50.1,
        unit: "%",
        explanation: "Environ 50,1% des femmes éligibles participent au programme national de dépistage du cancer du sein, qui recommande une mammographie tous les deux ans."
      },
      {
        question: "Quel pourcentage de femmes réalisent une mammographie hors programme de dépistage organisé ?",
        correctAnswer: 10,
        unit: "%",
        explanation: "Environ 10% des femmes de cette tranche d'âge réalisent une mammographie en dehors du programme national, généralement sur prescription de leur médecin."
      },
      {
        question: "Combien de femmes de 50 à 74 ans réalisent une mammographie tous les 2 ans ?",
        correctAnswer: 5,
        unit: "millions",
        explanation: "En additionnant les participantes au programme national (8,4 millions × 50,1% ≈ 4,2 millions) et celles réalisant une mammographie hors programme (8,4 millions × 10% ≈ 0,8 million), on obtient environ 5 millions de femmes sur un cycle de 2 ans, soit 2,5 millions par an."
      }
    ]
  },
  {
    id: "114",
    type: "multistep",
    question: "Combien de patients atteints de diabète de type 2 sont traités par insuline en France ?",
    finalExplanation: "Environ 850 000 patients atteints de diabète de type 2 sont traités par insuline en France, représentant environ 25% de l'ensemble des diabétiques de type 2.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont atteintes de diabète en France ?",
        correctAnswer: 4.2,
        unit: "millions",
        explanation: "Environ 4,2 millions de personnes sont atteintes de diabète en France selon les données de Santé Publique France."
      },
      {
        question: "Quel pourcentage des diabétiques sont atteints de diabète de type 2 ?",
        correctAnswer: 91.5,
        unit: "%",
        explanation: "Environ 91,5% des personnes diabétiques sont atteintes de diabète de type 2 (diabète non insulino-dépendant à l'origine), les autres étant principalement atteintes de diabète de type 1."
      },
      {
        question: "Parmi les diabétiques de type 2, quel pourcentage est traité par insuline ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Environ 22% des patients atteints de diabète de type 2 sont traités par insuline, généralement après plusieurs années d'évolution de la maladie."
      },
      {
        question: "Combien de patients atteints de diabète de type 2 sont traités par insuline en France ?",
        correctAnswer: 850000,
        unit: "patients",
        explanation: "En multipliant le nombre total de diabétiques (4,2 millions) par le pourcentage de type 2 (91,5%) puis par le taux d'insulinothérapie (22%), on obtient environ 850 000 patients."
      }
    ]
  },
  {
    id: "116",
    type: "multistep",
    question: "Combien de patients sont hospitalisés pour une intervention orthopédique chaque année ?",
    finalExplanation: "Environ 1,1 million de patients sont hospitalisés pour une intervention orthopédique chaque année en France, ce qui en fait l'une des spécialités chirurgicales les plus importantes en volume.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'hospitalisations avec au moins un acte chirurgical ont lieu chaque année en France ?",
        correctAnswer: 6.2,
        unit: "millions",
        explanation: "Environ 6,2 millions d'hospitalisations avec au moins un acte chirurgical sont réalisées chaque année en France selon les données de l'ATIH."
      },
      {
        question: "Quel pourcentage de ces interventions concernent l'orthopédie ?",
        correctAnswer: 18,
        unit: "%",
        explanation: "Environ 18% des interventions chirurgicales relèvent de l'orthopédie (chirurgie des os, articulations, tendons, etc.)."
      },
      {
        question: "Combien de patients sont hospitalisés pour une intervention orthopédique chaque année ?",
        correctAnswer: 1.1,
        unit: "million",
        explanation: "En multipliant le nombre total d'hospitalisations chirurgicales (6,2 millions) par la proportion d'interventions orthopédiques (18%), on obtient environ 1,1 million de patients par an."
      }
    ]
  }
];
