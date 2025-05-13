
import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur les statistiques de santé
export const santeStatistiquesQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "10",
    type: "multistep",
    question: "Quel est le nombre total de jours d'hospitalisation en France par an ?",
    finalExplanation: "Selon les données de l'INSEE et de la DREES, le nombre total de jours d'hospitalisation en France est d'environ 115 millions par an.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont hospitalisées chaque année en France ?",
        correctAnswer: 12.5,
        unit: "millions",
        explanation: "Environ 12,5 millions de personnes sont hospitalisées chaque année en France selon la DREES."
      },
      {
        question: "Quelle est la durée moyenne d'hospitalisation en France ?",
        correctAnswer: 9.2,
        unit: "jours",
        explanation: "La durée moyenne d'une hospitalisation en France est de 9,2 jours selon les données de l'INSEE."
      },
      {
        question: "Quel est le nombre total de jours d'hospitalisation en France ?",
        correctAnswer: 115,
        unit: "millions de jours",
        explanation: "En multipliant le nombre de patients hospitalisés par la durée moyenne, on obtient environ 115 millions de jours d'hospitalisation par an."
      }
    ]
  },
  {
    id: "33",
    type: "multistep",
    question: "Combien de yaourts sont consommés annuellement par les enfants de moins de 12 ans dans les écoles primaires des zones rurales françaises ?",
    finalExplanation: "Cette estimation de 98 millions de yaourts consommés par les enfants en milieu scolaire rural est une approximation basée sur la population scolaire rurale, les habitudes alimentaires et le calendrier scolaire. Les chiffres réels peuvent varier selon les politiques alimentaires locales, les préférences des enfants et les approvisionnements des cantines.",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il d'élèves en école primaire en France ?",
        correctAnswer: 6.7,
        unit: "millions",
        explanation: "La France compte environ 6,7 millions d'élèves en école primaire selon les données du Ministère de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves étudient dans des zones rurales ?",
        correctAnswer: 17.5,
        unit: "%",
        explanation: "Environ 17,5% des élèves du primaire sont scolarisés dans des zones rurales d'après les statistiques de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves mangent à la cantine ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "En zone rurale, environ 85% des élèves du primaire mangent à la cantine scolaire selon les enquêtes sur la restauration scolaire."
      },
      {
        question: "Combien de jours d'école y a-t-il par an en France ?",
        correctAnswer: 144,
        unit: "jours",
        explanation: "Une année scolaire en France compte environ 144 jours de classe avec restauration scolaire."
      },
      {
        question: "Combien de fois par semaine en moyenne un yaourt est-il servi à la cantine ?",
        correctAnswer: 3,
        unit: "jours",
        explanation: "Dans les cantines scolaires rurales, un yaourt est servi en moyenne 3 jours par semaine selon les plans alimentaires types."
      },
      {
        question: "Combien de yaourts sont consommés annuellement par les enfants dans les écoles primaires rurales ?",
        correctAnswer: 98,
        unit: "millions",
        explanation: "En multipliant le nombre d'élèves (6,7 millions) par le pourcentage en zone rurale (17,5%) par le taux de fréquentation des cantines (85%) par le nombre de jours d'école (144) par le ratio de service de yaourts (3/5), on obtient environ 98 millions de yaourts."
      }
    ]
  },
  {
    id: "102",
    type: "multistep",
    question: "Combien de Français de plus de 65 ans prennent au moins 5 médicaments par jour ?",
    finalExplanation: "Environ 2,3 millions de Français de plus de 65 ans sont concernés par la polymédication, c'est-à-dire la prise d'au moins 5 médicaments différents par jour, ce qui soulève des enjeux importants de santé publique.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes de plus de 65 ans vivent en France ?",
        correctAnswer: 14.4,
        unit: "millions",
        explanation: "La France compte environ 14,4 millions de personnes âgées de 65 ans ou plus selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage des plus de 65 ans souffrent d'au moins une maladie chronique ?",
        correctAnswer: 73,
        unit: "%",
        explanation: "Environ 73% des personnes de plus de 65 ans souffrent d'au moins une maladie chronique nécessitant un traitement médicamenteux régulier."
      },
      {
        question: "Parmi ces personnes souffrant de maladies chroniques, quel pourcentage prend au moins 5 médicaments différents par jour ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Selon les études sur la polymédication, environ 22% des personnes âgées atteintes de maladies chroniques prennent au moins 5 médicaments différents quotidiennement."
      },
      {
        question: "Combien de Français de plus de 65 ans prennent au moins 5 médicaments par jour ?",
        correctAnswer: 2.3,
        unit: "millions",
        explanation: "En multipliant la population des plus de 65 ans (14,4 millions) par le taux de maladies chroniques (73%) puis par le taux de polymédication (22%), on obtient environ 2,3 millions de personnes."
      }
    ]
  },
  {
    id: "106",
    type: "multistep",
    question: "Combien de passages aux urgences sont liés à des accidents domestiques chaque année ?",
    finalExplanation: "Les accidents domestiques représentent environ 3,5 millions de passages aux urgences chaque année en France, soit près d'un passage sur cinq.",
    theme: "santé",
    steps: [
      {
        question: "Combien de passages aux urgences sont enregistrés chaque année en France ?",
        correctAnswer: 19.2,
        unit: "millions",
        explanation: "Les services d'urgence en France enregistrent environ 19,2 millions de passages par an selon les données de la DREES."
      },
      {
        question: "Quel pourcentage de ces passages est lié à des accidents domestiques ?",
        correctAnswer: 18.2,
        unit: "%",
        explanation: "Selon les études épidémiologiques, environ 18,2% des passages aux urgences sont liés à des accidents domestiques (chutes, brûlures, intoxications, etc.)."
      },
      {
        question: "Combien de passages aux urgences sont liés à des accidents domestiques chaque année ?",
        correctAnswer: 3.5,
        unit: "millions",
        explanation: "En multipliant le nombre total de passages (19,2 millions) par la proportion d'accidents domestiques (18,2%), on obtient environ 3,5 millions de passages par an."
      }
    ]
  },
  {
    id: "107",
    type: "multistep",
    question: "Combien de personnes bénéficient de la CMU-C ou de la complémentaire santé solidaire ?",
    finalExplanation: "Environ 7,2 millions de personnes bénéficient de la Complémentaire Santé Solidaire (qui a remplacé la CMU-C), un dispositif essentiel pour l'accès aux soins des populations les plus vulnérables.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants (France métropolitaine et DOM-TOM)."
      },
      {
        question: "Quel pourcentage de la population française vit sous le seuil de pauvreté ?",
        correctAnswer: 14.6,
        unit: "%",
        explanation: "Environ 14,6% de la population française vit sous le seuil de pauvreté, soit avec moins de 60% du revenu médian."
      },
      {
        question: "Parmi cette population, quel pourcentage bénéficie effectivement de la Complémentaire Santé Solidaire ?",
        correctAnswer: 72.5,
        unit: "%",
        explanation: "Environ 72,5% des personnes éligibles bénéficient effectivement de la Complémentaire Santé Solidaire (ex-CMU-C), certains ne faisant pas valoir leurs droits."
      },
      {
        question: "Combien de personnes bénéficient de la CMU-C ou de la complémentaire santé solidaire ?",
        correctAnswer: 7.2,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le taux de pauvreté (14,6%) puis par le taux de recours (72,5%), on obtient environ 7,2 millions de bénéficiaires."
      }
    ]
  },
  {
    id: "112",
    type: "multistep",
    question: "Combien de Français reçoivent un vaccin contre la grippe chaque hiver ?",
    finalExplanation: "Environ 12 millions de Français se font vacciner contre la grippe chaque hiver, un chiffre qui fluctue selon les épidémies précédentes et les campagnes de sensibilisation.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population est considéré comme personne à risque pour la grippe (personnes âgées, malades chroniques, etc.) ?",
        correctAnswer: 29,
        unit: "%",
        explanation: "Environ 29% de la population française est considérée comme à risque face à la grippe et devrait être vaccinée prioritairement selon les recommandations sanitaires."
      },
      {
        question: "Quel est le taux de couverture vaccinale contre la grippe chez les personnes à risque ?",
        correctAnswer: 52,
        unit: "%",
        explanation: "Le taux de couverture vaccinale contre la grippe chez les personnes à risque est d'environ 52%, bien en-deçà de l'objectif de 75% fixé par l'Organisation Mondiale de la Santé."
      },
      {
        question: "Quel est le pourcentage de personnes non à risque qui se font vacciner contre la grippe ?",
        correctAnswer: 5.7,
        unit: "%",
        explanation: "Environ 5,7% des personnes non considérées comme à risque se font également vacciner contre la grippe."
      },
      {
        question: "Combien de Français reçoivent un vaccin contre la grippe chaque hiver ?",
        correctAnswer: 12,
        unit: "millions",
        explanation: "En additionnant les personnes à risque vaccinées (68 millions × 29% × 52% ≈ 10,3 millions) et les personnes non à risque vaccinées (68 millions × 71% × 5,7% ≈ 2,7 millions), on obtient environ 12 millions de vaccinations."
      }
    ]
  }
];
