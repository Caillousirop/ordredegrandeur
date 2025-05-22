
import { Question, MultiStepQuestion } from "@/components/types";

export const insoliteTerreEspaceQuestions: MultiStepQuestion[] = [
  {
    id: "insolite-1",
    type: "multistep",
    question: "Combien de Tours Eiffel faudrait-il empiler pour atteindre la Lune ?",
    steps: [
      {
        question: "Quelle est la hauteur de la Tour Eiffel ?",
        correctAnswer: 300,
        unit: "m",
        explanation: "La Tour Eiffel mesure environ 300 mètres de hauteur."
      },
      {
        question: "Quelle est la distance Terre-Lune ?",
        correctAnswer: 384000000,
        unit: "m",
        explanation: "La distance moyenne entre la Terre et la Lune est d'environ 384 000 km, soit 384 000 000 m."
      },
      {
        question: "Calculez le nombre de Tours Eiffel nécessaires (distance ÷ hauteur)",
        correctAnswer: 1280000,
        explanation: "Nombre de tours = 384 000 000 ÷ 300 ≈ 1 280 000"
      }
    ],
    finalExplanation: "Il faudrait environ 1,28 million de Tours Eiffel empilées pour atteindre la Lune.",
    theme: "insolite"
  },
  {
    id: "insolite-11",
    type: "multistep",
    question: "Combien de planètes Terre tiendraient dans le Soleil ?",
    steps: [
      {
        question: "Quel est le volume de la Terre ?",
        correctAnswer: 1080000000000,
        unit: "km³",
        explanation: "Le volume de la Terre est d'environ 1,08 × 10¹² km³."
      },
      {
        question: "Quel est le volume du Soleil ?",
        correctAnswer: 1410000000000000000,
        unit: "km³",
        explanation: "Le volume du Soleil est d'environ 1,41 × 10¹⁸ km³."
      },
      {
        question: "Calculez combien de planètes Terre pourraient tenir dans le Soleil",
        correctAnswer: 1300000,
        explanation: "Nombre de Terres = 1,41 × 10¹⁸ ÷ 1,08 × 10¹² ≈ 1,3 million"
      }
    ],
    finalExplanation: "Environ 1,3 million de planètes Terre pourraient tenir dans le Soleil.",
    theme: "insolite"
  },
  {
    id: "insolite-12",
    type: "multistep",
    question: "Combien de feuilles A4 faudrait-il pour couvrir la surface de la Lune ?",
    steps: [
      {
        question: "Quelle est la surface de la Lune ?",
        correctAnswer: 38000000000000,
        unit: "m²",
        explanation: "La surface de la Lune est d'environ 38 millions de km², soit 3,8 × 10¹³ m²."
      },
      {
        question: "Quelle est la surface d'une feuille A4 ?",
        correctAnswer: 0.06237,
        unit: "m²",
        explanation: "Une feuille A4 mesure environ 0,21 m × 0,297 m = 0,06237 m²."
      },
      {
        question: "Calculez le nombre de feuilles nécessaires",
        correctAnswer: 600000000000000,
        explanation: "Nombre de feuilles = 3,8 × 10¹³ ÷ 0,06237 ≈ 6 × 10¹⁴ = 600 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 600 000 milliards de feuilles A4 pour recouvrir toute la Lune.",
    theme: "insolite"
  },
  {
    id: "insolite-13",
    type: "multistep",
    question: "Combien de secondes faut-il pour qu'un humain respire autant de molécules d'air qu'il y a d'étoiles dans la Voie lactée ?",
    steps: [
      {
        question: "Combien y a-t-il de molécules dans une respiration humaine (0,5 L) ?",
        correctAnswer: 12000000000000000000000,
        explanation: "Une respiration contient environ 1,2 × 10²² molécules d'air."
      },
      {
        question: "Combien y a-t-il d'étoiles dans la Voie lactée ?",
        correctAnswer: 100000000000,
        explanation: "La Voie lactée contient environ 100 milliards d'étoiles, soit 1 × 10¹¹."
      },
      {
        question: "Combien de respirations faut-il pour inhaler autant de molécules qu'il y a d'étoiles ?",
        correctAnswer: 0.000000000008333,
        explanation: "Nombre de respirations = (1 × 10¹¹) ÷ (1,2 × 10²²) ≈ 8,333 × 10⁻¹² (bien moins qu'une respiration)"
      }
    ],
    finalExplanation: "Il suffit d'une seule respiration pour inhaler bien plus de molécules qu'il n'y a d'étoiles dans la galaxie.",
    theme: "insolite"
  },
  {
    id: "insolite-14",
    type: "multistep",
    question: "Combien de fusées seraient nécessaires pour transporter toute la population humaine sur Mars ?",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000000000,
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quelle est la capacité d'une fusée de type Starship ?",
        correctAnswer: 100,
        unit: "personnes",
        explanation: "Une fusée de type Starship peut transporter environ 100 personnes."
      },
      {
        question: "Calculez le nombre de fusées nécessaires",
        correctAnswer: 80000000,
        explanation: "Nombre de fusées = 8 × 10⁹ ÷ 100 = 80 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 80 millions de vols de fusée pour transporter l'humanité sur Mars.",
    theme: "insolite"
  },
  {
    id: "insolite-15",
    type: "multistep",
    question: "Combien de grains de riz alignés représenteraient la distance entre la Terre et le Soleil ?",
    steps: [
      {
        question: "Quelle est la distance entre la Terre et le Soleil ?",
        correctAnswer: 150000000000,
        unit: "m",
        explanation: "La distance Terre-Soleil est d'environ 150 millions de km, soit 1,5 × 10¹¹ m."
      },
      {
        question: "Quelle est la longueur moyenne d'un grain de riz ?",
        correctAnswer: 0.007,
        unit: "m",
        explanation: "Un grain de riz mesure environ 7 mm, soit 0,007 m."
      },
      {
        question: "Calculez le nombre de grains nécessaires",
        correctAnswer: 21000000000000,
        explanation: "Nombre de grains = 1,5 × 10¹¹ ÷ 0,007 ≈ 2,1 × 10¹³ = 21 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 21 000 milliards de grains de riz alignés pour atteindre le Soleil.",
    theme: "insolite"
  }
];
