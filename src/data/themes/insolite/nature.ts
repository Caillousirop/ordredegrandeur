
import { Question, MultiStepQuestion } from "@/components/types";

export const insoliteNatureQuestions: MultiStepQuestion[] = [
  {
    id: "insolite-7",
    type: "multistep",
    question: "Combien de ballons de baudruche seraient nécessaires pour soulever un bus scolaire ?",
    steps: [
      {
        question: "Quel est le poids d'un bus scolaire ?",
        correctAnswer: 10000,
        unit: "kg",
        explanation: "Un bus scolaire pèse environ 10 000 kg."
      },
      {
        question: "Quelle est la poussée d'Archimède générée par un ballon d'hélium ?",
        correctAnswer: 0.014,
        unit: "kg",
        explanation: "Un ballon d'hélium génère une poussée d'environ 14 g, soit 0,014 kg."
      },
      {
        question: "Calculez le nombre de ballons nécessaires",
        correctAnswer: 714000,
        explanation: "Nombre de ballons = 10 000 ÷ 0,014 ≈ 714 000"
      }
    ],
    finalExplanation: "Il faudrait environ 700 000 ballons de baudruche pour soulever un bus scolaire.",
    theme: "insolite"
  },
  {
    id: "insolite-16",
    type: "multistep",
    question: "Combien d'éléphants équivaudraient au poids de tous les humains sur Terre ?",
    steps: [
      {
        question: "Quel est le poids total de l'humanité ?",
        correctAnswer: 500000000000,
        unit: "kg",
        explanation: "Avec 8 milliards d'humains à 62 kg en moyenne, le poids total est d'environ 8 × 10⁹ × 62 = 5 × 10¹¹ kg."
      },
      {
        question: "Quel est le poids moyen d'un éléphant ?",
        correctAnswer: 5000,
        unit: "kg",
        explanation: "Un éléphant pèse en moyenne 5 000 kg."
      },
      {
        question: "Calculez le nombre d'éléphants équivalents",
        correctAnswer: 100000000,
        explanation: "Nombre d'éléphants = 5 × 10¹¹ ÷ 5 000 = 100 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 100 millions d'éléphants pour égaler le poids de l'humanité.",
    theme: "insolite"
  },
  {
    id: "insolite-17",
    type: "multistep",
    question: "Combien de battements d'ailes d'un colibri pour parcourir la distance Paris-New York ?",
    steps: [
      {
        question: "Quelle est la distance entre Paris et New York ?",
        correctAnswer: 5800,
        unit: "km",
        explanation: "La distance Paris-New York est d'environ 5 800 km."
      },
      {
        question: "À quelle vitesse vole un colibri et combien de battements d'ailes fait-il par seconde ?",
        correctAnswer: 50,
        unit: "battements/s",
        explanation: "Un colibri bat des ailes environ 50 fois par seconde et vole à environ 50 km/h."
      },
      {
        question: "Calculez le nombre total de battements d'ailes",
        correctAnswer: 20900000,
        explanation: "Temps de vol = 5 800 ÷ 50 = 116 h. Nombre de battements = 50/s × 3600 × 116 = 20,9 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 21 millions de battements d'ailes à un colibri pour traverser l'Atlantique.",
    theme: "insolite"
  },
  {
    id: "insolite-18",
    type: "multistep",
    question: "Combien d'arbres faudrait-il pour produire assez d'oxygène pour la population de Londres pendant une journée ?",
    steps: [
      {
        question: "Quelle est la population de Londres ?",
        correctAnswer: 9000000,
        explanation: "Londres compte environ 9 millions d'habitants."
      },
      {
        question: "Quelle quantité d'oxygène consomme un humain par jour ?",
        correctAnswer: 0.75,
        unit: "kg",
        explanation: "Un humain consomme environ 550 L d'oxygène par jour, soit environ 0,75 kg."
      },
      {
        question: "Quelle quantité d'oxygène produit un arbre par jour ?",
        correctAnswer: 0.27,
        unit: "kg",
        explanation: "Un arbre produit environ 100 kg d'oxygène par an, soit 0,27 kg par jour."
      },
      {
        question: "Calculez le nombre d'arbres nécessaires",
        correctAnswer: 25000000,
        explanation: "Oxygène total/jour = 9 × 10⁶ × 0,75 = 6,75 × 10⁶ kg. Nombre d'arbres = 6,75 × 10⁶ ÷ 0,27 ≈ 25 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 25 millions d'arbres pour oxygéner Londres pendant une journée.",
    theme: "insolite"
  },
  {
    id: "insolite-19",
    type: "multistep",
    question: "Combien de litres de miel produiraient toutes les abeilles de France en un an ?",
    steps: [
      {
        question: "Combien y a-t-il de ruches en France ?",
        correctAnswer: 1000000,
        explanation: "La France compte environ 1 million de ruches."
      },
      {
        question: "Quelle est la production moyenne de miel par ruche par an ?",
        correctAnswer: 20,
        unit: "L",
        explanation: "Une ruche produit en moyenne 20 kg de miel par an, soit environ 20 L (densité ~1 kg/L)."
      },
      {
        question: "Calculez la production totale annuelle",
        correctAnswer: 20000000,
        unit: "L",
        explanation: "Production totale = 1 million × 20 L = 20 millions de litres"
      }
    ],
    finalExplanation: "Les abeilles françaises produisent environ 20 millions de litres de miel par an.",
    theme: "insolite"
  },
  {
    id: "insolite-20",
    type: "multistep",
    question: "Combien de fourmis pèsent autant qu'un être humain moyen ?",
    steps: [
      {
        question: "Quel est le poids moyen d'un être humain ?",
        correctAnswer: 62,
        unit: "kg",
        explanation: "Un être humain pèse en moyenne 62 kg."
      },
      {
        question: "Quel est le poids moyen d'une fourmi ?",
        correctAnswer: 0.000003,
        unit: "kg",
        explanation: "Une fourmi pèse en moyenne 3 mg, soit 0,000003 kg."
      },
      {
        question: "Calculez le nombre de fourmis nécessaires",
        correctAnswer: 21000000,
        explanation: "Nombre de fourmis = 62 ÷ 0,000003 ≈ 21 millions"
      }
    ],
    finalExplanation: "Il faut environ 21 millions de fourmis pour égaler le poids d'un humain.",
    theme: "insolite"
  }
];
