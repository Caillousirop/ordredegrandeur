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
  },
  {
    id: "s1",
    type: "multistep",
    question: "Combien de personnes sont atteintes de maladies chroniques en France ?",
    finalExplanation: "Environ 24 millions de Français souffrent d'au moins une maladie chronique, ce qui représente plus d'un tiers de la population et constitue un enjeu majeur de santé publique.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population adulte souffre d'au moins une maladie chronique ?",
        correctAnswer: 41,
        unit: "%",
        explanation: "Environ 41% des adultes français souffrent d'au moins une maladie chronique selon les données de Santé Publique France."
      },
      {
        question: "Quel pourcentage des enfants et adolescents souffre d'une maladie chronique ?",
        correctAnswer: 15,
        unit: "%",
        explanation: "Environ 15% des enfants et adolescents souffrent d'une maladie chronique (asthme, allergies sévères, diabète de type 1, etc.)."
      },
      {
        question: "Quelle est la proportion d'adultes (18 ans et plus) dans la population française ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Les adultes de 18 ans et plus représentent environ 78% de la population française."
      },
      {
        question: "Combien de personnes sont atteintes de maladies chroniques en France ?",
        correctAnswer: 24,
        unit: "millions",
        explanation: "En additionnant les adultes atteints (68 millions × 78% × 41% ≈ 21,8 millions) et les mineurs atteints (68 millions × 22% × 15% ≈ 2,2 millions), on obtient environ 24 millions de personnes."
      }
    ]
  },
  {
    id: "s2",
    type: "multistep",
    question: "Combien de cas de cancer sont diagnostiqués chaque année en France ?",
    finalExplanation: "Environ 382 000 nouveaux cas de cancer sont diagnostiqués chaque année en France, un chiffre qui continue d'augmenter en raison notamment du vieillissement de la population.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel est le taux d'incidence du cancer en France (nouveaux cas pour 100 000 habitants par an) ?",
        correctAnswer: 562,
        unit: "pour 100 000",
        explanation: "Le taux d'incidence du cancer en France est de 562 nouveaux cas pour 100 000 habitants par an, tous cancers et tous âges confondus."
      },
      {
        question: "Combien de cas de cancer sont diagnostiqués chaque année en France ?",
        correctAnswer: 382000,
        unit: "cas",
        explanation: "En multipliant la population totale (68 millions) par le taux d'incidence (562 pour 100 000) et en divisant par 100 000, on obtient environ 382 000 nouveaux cas par an."
      }
    ]
  },
  {
    id: "s3",
    type: "multistep",
    question: "Combien d'arrêts maladie sont prescrits chaque année en France ?",
    finalExplanation: "Environ 8 millions d'arrêts maladie sont prescrits chaque année en France, représentant un enjeu important tant pour la santé publique que pour l'économie.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont en emploi en France ?",
        correctAnswer: 29,
        unit: "millions",
        explanation: "La France compte environ 29 millions de personnes en emploi (salariés et indépendants)."
      },
      {
        question: "Quel pourcentage des personnes en emploi reçoit au moins un arrêt maladie par an ?",
        correctAnswer: 37,
        unit: "%",
        explanation: "Environ 37% des personnes en emploi se voient prescrire au moins un arrêt maladie au cours d'une année."
      },
      {
        question: "Combien d'arrêts maladie sont prescrits en moyenne à chaque personne concernée par an ?",
        correctAnswer: 1.8,
        unit: "arrêts",
        explanation: "Les personnes qui s'arrêtent pour maladie reçoivent en moyenne 1,8 arrêt de travail par an (certaines personnes pouvant avoir plusieurs épisodes d'arrêt)."
      },
      {
        question: "Combien d'arrêts maladie sont prescrits chaque année en France ?",
        correctAnswer: 19,
        unit: "millions",
        explanation: "En multipliant le nombre de personnes en emploi (29 millions) par le pourcentage recevant des arrêts (37%) par le nombre moyen d'arrêts par personne concernée (1,8), on obtient environ 19 millions d'arrêts maladie par an."
      }
    ]
  },
  {
    id: "s4",
    type: "multistep",
    question: "Combien de personnes souffrent de dépression en France ?",
    finalExplanation: "Environ 3,8 millions de Français souffrent de dépression à un moment donné, ce qui en fait l'un des troubles de santé mentale les plus répandus et un enjeu majeur de santé publique.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française adulte (18 ans et plus) ?",
        correctAnswer: 54,
        unit: "millions",
        explanation: "La France compte environ 54 millions d'adultes de 18 ans et plus."
      },
      {
        question: "Quel est le taux de prévalence de la dépression chez les adultes en France ?",
        correctAnswer: 7,
        unit: "%",
        explanation: "Environ 7% des adultes français souffrent d'un épisode dépressif caractérisé à un moment donné selon les études épidémiologiques."
      },
      {
        question: "Combien de personnes souffrent de dépression en France ?",
        correctAnswer: 3.8,
        unit: "millions",
        explanation: "En multipliant la population adulte (54 millions) par le taux de prévalence de la dépression (7%), on obtient environ 3,8 millions de personnes."
      }
    ]
  },
  {
    id: "s5",
    type: "multistep",
    question: "Combien de personnes vivent avec un handicap reconnu en France ?",
    finalExplanation: "Environ 6,8 millions de personnes vivent avec un handicap administrativement reconnu en France, ce qui représente un enjeu majeur d'inclusion et d'accessibilité pour la société.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population française déclare vivre avec une forme de handicap ou de limitation fonctionnelle ?",
        correctAnswer: 18,
        unit: "%",
        explanation: "Selon les enquêtes déclaratives, environ 18% des Français déclarent vivre avec une forme de handicap ou de limitation fonctionnelle dans leur vie quotidienne."
      },
      {
        question: "Parmi ces personnes, quelle proportion bénéficie d'une reconnaissance administrative de leur handicap ?",
        correctAnswer: 56,
        unit: "%",
        explanation: "Environ 56% des personnes se déclarent en situation de handicap bénéficient d'une reconnaissance administrative (allocation, carte d'invalidité, RQTH, etc.)."
      },
      {
        question: "Combien de personnes vivent avec un handicap reconnu en France ?",
        correctAnswer: 6.8,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le taux de handicap déclaré (18%) puis par le taux de reconnaissance administrative (56%), on obtient environ 6,8 millions de personnes."
      }
    ]
  },
  {
    id: "s6",
    type: "multistep",
    question: "Quel est le nombre de cas de démence sénile et maladie d'Alzheimer en France ?",
    finalExplanation: "Environ 1,2 million de personnes sont atteintes de démence sénile dont la maladie d'Alzheimer en France, un chiffre en augmentation constante avec le vieillissement de la population.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont âgées de plus de 65 ans en France ?",
        correctAnswer: 14.4,
        unit: "millions",
        explanation: "La France compte environ 14,4 millions de personnes âgées de 65 ans ou plus."
      },
      {
        question: "Quel est le taux de prévalence de la démence chez les plus de 65 ans ?",
        correctAnswer: 8.3,
        unit: "%",
        explanation: "Environ 8,3% des personnes de plus de 65 ans sont atteintes d'une forme de démence (Alzheimer ou autre)."
      },
      {
        question: "Quel est le nombre de cas de démence sénile et maladie d'Alzheimer en France ?",
        correctAnswer: 1.2,
        unit: "million",
        explanation: "En multipliant le nombre de personnes de plus de 65 ans (14,4 millions) par le taux de prévalence de la démence (8,3%), on obtient environ 1,2 million de personnes atteintes."
      }
    ]
  },
  {
    id: "s7",
    type: "multistep",
    question: "Combien de personnes pratiquent une activité physique régulière en France ?",
    finalExplanation: "Environ 26 millions de Français pratiquent une activité physique régulière, ce qui représente un peu plus d'un tiers de la population, un chiffre considéré comme insuffisant par les autorités de santé.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage des Français déclarent pratiquer une activité physique régulière (au moins 30 minutes, 3 fois par semaine) ?",
        correctAnswer: 38,
        unit: "%",
        explanation: "Environ 38% des Français déclarent pratiquer une activité physique régulière selon les recommandations minimales de l'Organisation Mondiale de la Santé."
      },
      {
        question: "Combien de personnes pratiquent une activité physique régulière en France ?",
        correctAnswer: 26,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de pratiquants réguliers (38%), on obtient environ 26 millions de personnes."
      }
    ]
  },
  {
    id: "s8",
    type: "multistep",
    question: "Combien de personnes souffrent d'obésité en France ?",
    finalExplanation: "Environ 8,6 millions de Français sont en situation d'obésité, un problème de santé publique qui continue de progresser malgré les campagnes de prévention.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française adulte ?",
        correctAnswer: 54,
        unit: "millions",
        explanation: "La France compte environ 54 millions d'adultes (18 ans et plus)."
      },
      {
        question: "Quel est le taux de prévalence de l'obésité (IMC ≥ 30) chez les adultes français ?",
        correctAnswer: 15,
        unit: "%",
        explanation: "Environ 15% des adultes français sont en situation d'obésité selon les critères de l'OMS (IMC ≥ 30)."
      },
      {
        question: "Combien d'enfants et adolescents sont concernés par l'obésité en France ?",
        correctAnswer: 0.7,
        unit: "million",
        explanation: "Environ 700 000 enfants et adolescents français sont en situation d'obésité."
      },
      {
        question: "Combien de personnes souffrent d'obésité en France ?",
        correctAnswer: 8.6,
        unit: "millions",
        explanation: "En additionnant les adultes obèses (54 millions × 15% = 8,1 millions) et les enfants obèses (0,7 million), on obtient environ 8,6 millions de personnes."
      }
    ]
  },
  {
    id: "s9",
    type: "multistep",
    question: "Combien de décès sont causés par le tabac chaque année en France ?",
    finalExplanation: "Le tabac est responsable d'environ 75 000 décès chaque année en France, ce qui en fait la première cause de mortalité évitable dans le pays.",
    theme: "santé",
    steps: [
      {
        question: "Combien de décès toutes causes confondues sont enregistrés en France chaque année ?",
        correctAnswer: 620000,
        unit: "décès",
        explanation: "Environ 620 000 décès toutes causes confondues sont enregistrés chaque année en France."
      },
      {
        question: "Quel pourcentage des décès est attribuable au tabagisme en France ?",
        correctAnswer: 12.1,
        unit: "%",
        explanation: "Environ 12,1% des décès en France sont attribuables au tabagisme (cancers, maladies cardiovasculaires, maladies respiratoires, etc.)."
      },
      {
        question: "Combien de décès sont causés par le tabac chaque année en France ?",
        correctAnswer: 75000,
        unit: "décès",
        explanation: "En multipliant le nombre total de décès (620 000) par le pourcentage attribuable au tabac (12,1%), on obtient environ 75 000 décès par an."
      }
    ]
  },
  {
    id: "s10",
    type: "multistep",
    question: "Quel est le coût total des dépenses de santé en France ?",
    finalExplanation: "Les dépenses de santé en France s'élèvent à environ 294 milliards d'euros par an, soit près de 12% du PIB, ce qui en fait l'un des systèmes de santé les plus généreux mais aussi les plus coûteux au monde.",
    theme: "santé",
    steps: [
      {
        question: "Quel est le PIB de la France ?",
        correctAnswer: 2500,
        unit: "milliards d'euros",
        explanation: "Le Produit Intérieur Brut (PIB) de la France s'élève à environ 2 500 milliards d'euros."
      },
      {
        question: "Quelle part du PIB représentent les dépenses de santé en France ?",
        correctAnswer: 11.8,
        unit: "%",
        explanation: "Les dépenses de santé représentent environ 11,8% du PIB français, un pourcentage parmi les plus élevés des pays de l'OCDE."
      },
      {
        question: "Quel est le coût total des dépenses de santé en France ?",
        correctAnswer: 294,
        unit: "milliards d'euros",
        explanation: "En multipliant le PIB (2 500 milliards d'euros) par la part consacrée à la santé (11,8%), on obtient environ 294 milliards d'euros."
      }
    ]
  },
  {
    id: "s11",
    type: "simple",
    question: "Quel est le taux de mortalité infantile en France ?",
    correctAnswer: 3.9,
    unit: "pour 1000 naissances",
    explanation: "Le taux de mortalité infantile en France est de 3,9 décès pour 1000 naissances vivantes, un niveau relativement bas mais qui stagne depuis quelques années.",
    theme: "santé"
  },
  {
    id: "s12",
    type: "simple",
    question: "Quelle est la prévalence du diabète dans la population française ?",
    correctAnswer: 6.1,
    unit: "%",
    explanation: "Environ 6,1% de la population française est atteinte de diabète (types 1 et 2 confondus).",
    theme: "santé"
  },
  {
    id: "s13",
    type: "simple",
    question: "Quel est le nombre de donneurs de sang actifs en France ?",
    correctAnswer: 1600000,
    unit: "donneurs",
    explanation: "La France compte environ 1,6 million de donneurs de sang actifs (ayant donné au moins une fois dans l'année).",
    theme: "santé"
  },
  {
    id: "s14",
    type: "simple",
    question: "Quel est le pourcentage des Français portant des lunettes ou des lentilles ?",
    correctAnswer: 59,
    unit: "%",
    explanation: "Environ 59% des Français portent des lunettes ou des lentilles de contact pour corriger leur vision.",
    theme: "santé"
  },
  {
    id: "s15",
    type: "simple",
    question: "Combien de personnes sont en attente d'une greffe d'organe en France ?",
    correctAnswer: 24500,
    unit: "personnes",
    explanation: "Environ 24 500 personnes sont en attente d'une greffe d'organe en France.",
    theme: "santé"
  },
  {
    id: "s16",
    type: "simple",
    question: "Quelle est la consommation moyenne d'alcool par adulte en France (en litres d'alcool pur par an) ?",
    correctAnswer: 11.7,
    unit: "litres",
    explanation: "Un adulte français consomme en moyenne 11,7 litres d'alcool pur par an, un chiffre en baisse mais qui reste l'un des plus élevés d'Europe.",
    theme: "santé"
  },
  {
    id: "s17",
    type: "simple",
    question: "Quel est le pourcentage de fumeurs quotidiens en France ?",
    correctAnswer: 24,
    unit: "%",
    explanation: "Environ 24% des Français de 18 à 75 ans fument quotidiennement, un taux en baisse mais qui reste élevé par rapport à d'autres pays développés.",
    theme: "santé"
  },
  {
    id: "s18",
    type: "simple",
    question: "Quelle est la prévalence de l'hypertension artérielle en France ?",
    correctAnswer: 30.6,
    unit: "%",
    explanation: "Environ 30,6% des adultes français souffrent d'hypertension artérielle.",
    theme: "santé"
  },
  {
    id: "s19",
    type: "simple",
    question: "Quel est le taux d'incidence des accidents vasculaires cérébraux (AVC) en France ?",
    correctAnswer: 145000,
    unit: "cas par an",
    explanation: "On dénombre environ 145 000 nouveaux cas d'AVC chaque année en France.",
    theme: "santé"
  },
  {
    id: "s20",
    type: "simple",
    question: "Quel est le nombre de naissances par an en France ?",
    correctAnswer: 720000,
    unit: "naissances",
    explanation: "La France enregistre environ 720 000 naissances par an, un chiffre en baisse ces dernières années.",
    theme: "santé"
  },
  {
    id: "s21",
    type: "simple",
    question: "Quel est le taux de vaccination contre la rougeole, les oreillons et la rubéole (ROR) chez les enfants de 2 ans ?",
    correctAnswer: 90.5,
    unit: "%",
    explanation: "Environ 90,5% des enfants de 2 ans sont vaccinés contre la rougeole, les oreillons et la rubéole en France.",
    theme: "santé"
  },
  {
    id: "s22",
    type: "simple",
    question: "Quelle proportion des Français souffre de troubles du sommeil ?",
    correctAnswer: 35.9,
    unit: "%",
    explanation: "Environ 35,9% des Français déclarent souffrir de troubles du sommeil réguliers.",
    theme: "santé"
  },
  {
    id: "s23",
    type: "simple",
    question: "Quel est le nombre de cas de maladies professionnelles reconnus chaque année en France ?",
    correctAnswer: 48500,
    unit: "cas",
    explanation: "Environ 48 500 cas de maladies professionnelles sont reconnus chaque année en France par l'Assurance Maladie.",
    theme: "santé"
  },
  {
    id: "s24",
    type: "simple",
    question: "Quelle est la prévalence des allergies respiratoires en France ?",
    correctAnswer: 28,
    unit: "%",
    explanation: "Environ 28% des Français souffrent d'allergies respiratoires (rhinite allergique, asthme allergique, etc.).",
    theme: "santé"
  },
  {
    id: "s25",
    type: "simple",
    question: "Combien de personnes sont atteintes de BPCO (bronchopneumopathie chronique obstructive) en France ?",
    correctAnswer: 3500000,
    unit: "personnes",
    explanation: "Environ 3,5 millions de personnes sont atteintes de BPCO en France, mais la moitié d'entre elles ignorent leur maladie.",
    theme: "santé"
  },
  {
    id: "s26",
    type: "simple",
    question: "Quel est le taux d'incidence annuel des fractures de l'extrémité supérieure du fémur chez les plus de 65 ans ?",
    correctAnswer: 9,
    unit: "pour 1000",
    explanation: "L'incidence annuelle des fractures de l'extrémité supérieure du fémur est d'environ 9 pour 1000 chez les personnes de plus de 65 ans.",
    theme: "santé"
  },
  {
    id: "s27",
    type: "simple",
    question: "Quelle est la durée moyenne d'un arrêt maladie en France ?",
    correctAnswer: 22,
    unit: "jours",
    explanation: "La durée moyenne d'un arrêt maladie en France est de 22 jours, tous motifs confondus.",
    theme: "santé"
  },
  {
    id: "s28",
    type: "simple",
    question: "Quel pourcentage des Français a recours à la médecine alternative ou complémentaire ?",
    correctAnswer: 40,
    unit: "%",
    explanation: "Environ 40% des Français déclarent avoir recours à au moins une forme de médecine alternative ou complémentaire (ostéopathie, acupuncture, homéopathie, etc.).",
    theme: "santé"
  },
  {
    id: "s29",
    type: "simple",
    question: "Quel est le nombre de cas de suicide par an en France ?",
    correctAnswer: 8800,
    unit: "suicides",
    explanation: "On dénombre environ 8 800 suicides par an en France, ce qui représente plus du double des décès par accident de la route.",
    theme: "santé"
  },
  {
    id: "s30",
    type: "simple",
    question: "Quelle est la prévalence de l'arthrose dans la population française ?",
    correctAnswer: 17,
    unit: "%",
    explanation: "Environ 17% des Français souffrent d'arthrose, avec une prévalence qui augmente fortement avec l'âge.",
    theme: "santé"
  },
  {
    id: "sante-multistep-stats-1",
    type: "multistep",
    question: "Combien de litres de solution hydroalcoolique sont utilisés chaque année dans les hôpitaux français ?",
    theme: "sante",
    steps: [
      {
        question: "Combien d'hôpitaux y a-t-il en France ?",
        correctAnswer: 3000,
        unit: "hôpitaux",
        explanation: "La France compte environ 3 000 établissements hospitaliers publics et privés."
      },
      {
        question: "Combien de lits d'hospitalisation y a-t-il en moyenne par hôpital ?",
        correctAnswer: 175,
        unit: "lits",
        explanation: "Il y a en moyenne 175 lits d'hospitalisation par établissement hospitalier en France."
      },
      {
        question: "Combien de litres de solution hydroalcoolique sont utilisés par lit d'hospitalisation et par an ?",
        correctAnswer: 12,
        unit: "litres",
        explanation: "Environ 12 litres de solution hydroalcoolique sont utilisés par lit d'hospitalisation et par an."
      },
      {
        question: "Combien de litres de solution hydroalcoolique sont utilisés chaque année dans les hôpitaux français ?",
        correctAnswer: 6300000,
        unit: "litres",
        explanation: "En multipliant le nombre d'hôpitaux (3 000) par le nombre moyen de lits (175) par la consommation par lit (12 litres), on obtient environ 6,3 millions de litres de solution hydroalcoolique utilisés annuellement."
      }
    ],
    finalExplanation: "Les hôpitaux français consomment environ 6,3 millions de litres de solution hydroalcoolique chaque année pour l'hygiène des mains du personnel soignant et des visiteurs, ce qui est essentiel pour prévenir les infections nosocomiales."
  },
  {
    id: "sante-multistep-stats-2",
    type: "multistep",
    question: "Combien d'IRM sont réalisées chaque année en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il d'appareils d'IRM en France ?",
        correctAnswer: 950,
        unit: "appareils",
        explanation: "La France dispose d'environ 950 appareils d'IRM répartis sur tout le territoire."
      },
      {
        question: "Combien d'examens un appareil d'IRM réalise-t-il en moyenne par jour ?",
        correctAnswer: 15,
        unit: "examens",
        explanation: "Un appareil d'IRM réalise en moyenne 15 examens par jour."
      },
      {
        question: "Combien de jours par an un appareil d'IRM est-il en fonctionnement ?",
        correctAnswer: 290,
        unit: "jours",
        explanation: "Un appareil d'IRM fonctionne en moyenne 290 jours par an, en tenant compte des périodes de maintenance."
      },
      {
        question: "Combien d'IRM sont réalisées chaque année en France ?",
        correctAnswer: 4132500,
        unit: "examens",
        explanation: "En multipliant le nombre d'appareils (950) par le nombre d'examens quotidiens (15) par le nombre de jours de fonctionnement (290), on obtient environ 4 132 500 examens d'IRM par an."
      }
    ],
    finalExplanation: "En France, environ 4,13 millions d'examens d'IRM sont réalisés chaque année, ce qui représente un outil diagnostique majeur dans la médecine moderne."
  },
  {
    id: "sante-multistep-stats-3",
    type: "multistep",
    question: "Combien de seringues sont utilisées chaque année dans le système de santé français ?",
    theme: "santé",
    steps: [
      {
        question: "Combien de jours d'hospitalisation sont comptabilisés par an en France ?",
        correctAnswer: 120000000,
        unit: "journées",
        explanation: "La France compte environ 120 millions de journées d'hospitalisation par an."
      },
      {
        question: "Combien de seringues sont utilisées en moyenne par jour d'hospitalisation ?",
        correctAnswer: 3.2,
        unit: "seringues",
        explanation: "Environ 3,2 seringues sont utilisées en moyenne par jour d'hospitalisation."
      },
      {
        question: "Combien d'injections sont réalisées en médecine de ville chaque année ?",
        correctAnswer: 325000000,
        unit: "injections",
        explanation: "Environ 325 millions d'injections sont réalisées chaque année en médecine de ville (vaccinations, traitements, etc.)."
      },
      {
        question: "Combien de seringues sont utilisées chaque année dans le système de santé français ?",
        correctAnswer: 709000000,
        unit: "seringues",
        explanation: "En additionnant les seringues utilisées à l'hôpital (120 millions × 3,2 = 384 millions) et celles utilisées en médecine de ville (325 millions), on obtient environ 709 millions de seringues par an."
      }
    ],
    finalExplanation: "Le système de santé français utilise environ 709 millions de seringues chaque année, pour les hospitalisations et les soins en médecine de ville, ce qui souligne l'importance de la gestion des déchets médicaux."
  },
  {
    id: "sante-multistep-stats-4",
    type: "multistep",
    question: "Combien de tensiomètres sont vendus aux particuliers chaque année ?",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il de personnes atteintes d'hypertension artérielle en France ?",
        correctAnswer: 15000000,
        unit: "personnes",
        explanation: "Environ 15 millions de personnes sont atteintes d'hypertension artérielle en France."
      },
      {
        question: "Quel pourcentage de ces personnes possède un tensiomètre à domicile ?",
        correctAnswer: 35,
        unit: "%",
        explanation: "Environ 35% des personnes hypertendues possèdent un tensiomètre à domicile pour surveiller leur tension artérielle."
      },
      {
        question: "Quelle est la durée de vie moyenne d'un tensiomètre électronique grand public ?",
        correctAnswer: 6,
        unit: "années",
        explanation: "Un tensiomètre électronique a une durée de vie moyenne de 6 ans avant remplacement."
      },
      {
        question: "Combien de tensiomètres sont vendus aux particuliers chaque année ?",
        correctAnswer: 875000,
        unit: "tensiomètres",
        explanation: "En divisant le nombre de personnes hypertendues possédant un tensiomètre (15 millions × 35% = 5,25 millions) par la durée de vie moyenne (6 ans), on obtient environ 875 000 tensiomètres vendus par an."
      }
    ],
    finalExplanation: "Environ 875 000 tensiomètres sont vendus aux particuliers chaque année en France, principalement pour le suivi de l'hypertension artérielle à domicile, une pratique encouragée par les médecins."
  },
  {
    id: "sante-multistep-stats-5",
    type: "multistep",
    question: "Quel est le besoin annuel en gants jetables dans un hôpital moyen ?",
    theme: "santé",
    steps: [
      {
        question: "Combien de lits compte un hôpital moyen en France ?",
        correctAnswer: 175,
        unit: "lits",
        explanation: "Un hôpital moyen en France compte environ 175 lits."
      },
      {
        question: "Combien de soignants interviennent en moyenne auprès de chaque patient hospitalisé par jour ?",
        correctAnswer: 8,
        unit: "soignants",
        explanation: "En moyenne, 8 soignants différents (médecins, infirmiers, aides-soignants, etc.) interviennent auprès de chaque patient hospitalisé chaque jour."
      },
      {
        question: "Combien de paires de gants un soignant utilise-t-il en moyenne par patient et par intervention ?",
        correctAnswer: 1.5,
        unit: "paires",
        explanation: "Un soignant utilise en moyenne 1,5 paire de gants par patient et par intervention."
      },
      {
        question: "Combien de jours d'hospitalisation un hôpital moyen enregistre-t-il par an ?",
        correctAnswer: 58000,
        unit: "jours",
        explanation: "Un hôpital moyen enregistre environ 58 000 journées d'hospitalisation par an (175 lits × taux d'occupation de 90% × 365 jours)."
      },
      {
        question: "Quel est le besoin annuel en gants jetables dans un hôpital moyen ?",
        correctAnswer: 696000,
        unit: "paires",
        explanation: "En multipliant le nombre de journées d'hospitalisation (58 000) par le nombre de soignants par patient (8) par le nombre de paires de gants par intervention (1,5), on obtient environ 696 000 paires de gants."
      }
    ],
    finalExplanation: "Un hôpital moyen en France a besoin d'environ 696 000 paires de gants jetables par an pour assurer les soins aux patients hospitalisés, sans compter les consultations externes et les interventions chirurgicales."
  },
  {
    id: "sante-multistep-stats-6",
    type: "multistep",
    question: "Combien de stéthoscopes sont vendus par an aux nouveaux médecins ?",
    theme: "sante",
    steps: [
      {
        question: "Combien de nouveaux médecins sont diplômés chaque année en France ?",
        correctAnswer: 9500,
        unit: "médecins",
        explanation: "Environ 9 500 nouveaux médecins sont diplômés chaque année en France."
      },
      {
        question: "Quel pourcentage de ces nouveaux médecins achète un stéthoscope dès la fin de leurs études ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des nouveaux médecins achètent un stéthoscope dès la fin de leurs études."
      },
      {
        question: "Combien de stéthoscopes par médecin sont achetés en moyenne lors de la première année d'exercice ?",
        correctAnswer: 1.1,
        unit: "stéthoscopes",
        explanation: "Les nouveaux médecins achètent en moyenne 1,1 stéthoscope lors de leur première année d'exercice (certains en achètent un deuxième pour leur domicile ou en remplacement)."
      },
      {
        question: "Combien de stéthoscopes sont vendus par an aux nouveaux médecins ?",
        correctAnswer: 9614,
        unit: "stéthoscopes",
        explanation: "En multipliant le nombre de nouveaux médecins (9 500) par le pourcentage achetant un stéthoscope (92%) par le nombre moyen de stéthoscopes achetés (1,1), on obtient environ 9 614 stéthoscopes."
      }
    ],
    finalExplanation: "Environ 9 614 stéthoscopes sont vendus chaque année aux nouveaux médecins en France, ce qui représente un marché important pour les fabricants de matériel médical."
  },
  {
    id: "sante-multistep-stats-7",
    type: "multistep",
    question: "Combien d'analyses de sang sont réalisées chaque année en France ?",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67500000,
        unit: "personnes",
        explanation: "La population française est d'environ 67,5 millions de personnes."
      },
      {
        question: "Combien d'analyses de sang une personne réalise-t-elle en moyenne par an ?",
        correctAnswer: 2.3,
        unit: "analyses",
        explanation: "En moyenne, une personne réalise 2,3 analyses de sang par an en France."
      },
      {
        question: "Quel pourcentage de la population effectue au moins une analyse de sang par an ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% de la population française effectue au moins une analyse de sang par an."
      },
      {
        question: "Combien d'analyses de sang sont réalisées chaque année en France ?",
        correctAnswer: 131962500,
        unit: "analyses",
        explanation: "En multipliant la population (67,5 millions) par le pourcentage effectuant des analyses (85%) par le nombre moyen d'analyses par personne (2,3), on obtient environ 131 962 500 analyses de sang par an."
      }
    ],
    finalExplanation: "En France, environ 132 millions d'analyses de sang sont réalisées chaque année, ce qui témoigne de l'importance de la biologie médicale dans le diagnostic et le suivi des patients."
  },
  {
    id: "sante-multistep-stats-8",
    type: "multistep",
    question: "Combien de médecins travaillent dans les services d'urgence en France ?",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il de services d'urgence en France ?",
        correctAnswer: 650,
        unit: "services",
        explanation: "La France compte environ 650 services d'urgence hospitaliers."
      },
      {
        question: "Combien de médecins urgentistes travaillent en moyenne dans chaque service d'urgence ?",
        correctAnswer: 12.5,
        unit: "médecins",
        explanation: "En moyenne, 12,5 médecins urgentistes (équivalents temps plein) travaillent dans chaque service d'urgence."
      },
      {
        question: "Quel est le pourcentage de médecins non-urgentistes (autres spécialités) intervenant régulièrement aux urgences ?",
        correctAnswer: 15,
        unit: "%",
        explanation: "Environ 15% des médecins travaillant aux urgences sont des spécialistes d'autres disciplines intervenant régulièrement dans ces services."
      },
      {
        question: "Combien de médecins travaillent dans les services d'urgence en France ?",
        correctAnswer: 9431,
        unit: "médecins",
        explanation: "En multipliant le nombre de services d'urgence (650) par le nombre moyen de médecins urgentistes (12,5), puis en ajoutant 15% pour les autres spécialistes, on obtient environ 9 431 médecins."
      }
    ],
    finalExplanation: "En France, environ 9 431 médecins travaillent dans les services d'urgence, assurant la prise en charge des patients 24 heures sur 24, 7 jours sur 7."
  },
  {
    id: "sante-multistep-stats-9",
    type: "multistep",
    question: "Combien de consultations ophtalmologiques sont réalisées chaque année en France ?",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il d'ophtalmologistes en France ?",
        correctAnswer: 5850,
        unit: "ophtalmologistes",
        explanation: "La France compte environ 5 850 ophtalmologistes en exercice."
      },
      {
        question: "Combien de consultations un ophtalmologiste réalise-t-il en moyenne par jour ?",
        correctAnswer: 22,
        unit: "consultations",
        explanation: "Un ophtalmologiste réalise en moyenne 22 consultations par jour."
      },
      {
        question: "Combien de jours par an un ophtalmologiste travaille-t-il en moyenne ?",
        correctAnswer: 215,
        unit: "jours",
        explanation: "Un ophtalmologiste travaille en moyenne 215 jours par an."
      },
      {
        question: "Combien de consultations ophtalmologiques sont réalisées chaque année en France ?",
        correctAnswer: 27599250,
        unit: "consultations",
        explanation: "En multipliant le nombre d'ophtalmologistes (5 850) par le nombre de consultations quotidiennes (22) par le nombre de jours travaillés (215), on obtient environ 27 599 250 consultations par an."
      }
    ],
    finalExplanation: "En France, environ 27,6 millions de consultations ophtalmologiques sont réalisées chaque année, ce qui représente un enjeu important de santé publique compte tenu des délais d'attente souvent longs."
  },
  {
    id: "sante-multistep-stats-10",
    type: "multistep",
    question: "Combien de personnes utilisent régulièrement des applications de suivi de leur activité physique en France ?",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française possédant un smartphone ?",
        correctAnswer: 52000000,
        unit: "personnes",
        explanation: "Environ 52 millions de Français possèdent un smartphone."
      },
      {
        question: "Quel pourcentage de ces utilisateurs de smartphone ont installé une application de suivi d'activité physique ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des utilisateurs de smartphone ont installé une application de suivi d'activité physique."
      },
      {
        question: "Parmi ces personnes ayant installé une application, quel pourcentage l'utilise régulièrement (au moins une fois par semaine) ?",
        correctAnswer: 26,
        unit: "%",
        explanation: "Environ 26% des personnes ayant installé une application de suivi d'activité physique l'utilisent régulièrement (au moins une fois par semaine)."
      },
      {
        question: "Combien de personnes utilisent régulièrement des applications de suivi de leur activité physique en France ?",
        correctAnswer: 5678400,
        unit: "personnes",
        explanation: "En multipliant le nombre d'utilisateurs de smartphone (52 millions) par le pourcentage ayant installé une application (42%) par le pourcentage d'utilisateurs réguliers (26%), on obtient environ 5 678 400 personnes."
      }
    ],
    finalExplanation: "En France, environ 5,68 millions de personnes utilisent régulièrement des applications de suivi de leur activité physique, ce qui témoigne de l'importance croissante des outils numériques dans la gestion de la santé."
  },
  {
    id: "sante-simple-stats-1",
    type: "simple",
    question: "Quel pourcentage des Français souffre de troubles du sommeil ?",
    correctAnswer: 36,
    unit: "%",
    explanation: "Environ 36% des Français souffrent de troubles du sommeil, allant de l'insomnie occasionnelle à chronique.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-2",
    type: "simple",
    question: "Quelle est la durée moyenne d'hospitalisation en France ?",
    correctAnswer: 5.6,
    unit: "jours",
    explanation: "La durée moyenne d'hospitalisation en France est de 5,6 jours, tous services confondus.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-3",
    type: "simple",
    question: "Quel est le pourcentage de la population française portant des prothèses dentaires ?",
    correctAnswer: 27,
    unit: "%",
    explanation: "Environ 27% de la population française porte une prothèse dentaire (couronne, bridge, appareil complet ou partiel).",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-4",
    type: "simple",
    question: "Quelle est la proportion de naissances par césarienne en France ?",
    correctAnswer: 20.4,
    unit: "%",
    explanation: "En France, 20,4% des naissances se font par césarienne, un taux inférieur à la moyenne européenne.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-5",
    type: "simple",
    question: "Quel est le nombre moyen de pas quotidiens effectués par un Français ?",
    correctAnswer: 7100,
    unit: "pas",
    explanation: "Un Français effectue en moyenne 7 100 pas par jour, un chiffre en dessous des 10 000 pas recommandés par l'OMS.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-6",
    type: "simple",
    question: "Combien d'heures par semaine un médecin hospitalier travaille-t-il en moyenne ?",
    correctAnswer: 48.5,
    unit: "heures",
    explanation: "Un médecin hospitalier travaille en moyenne 48,5 heures par semaine en France.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-7",
    type: "simple",
    question: "Quel est le pourcentage des Français souffrant d'allergies respiratoires ?",
    correctAnswer: 30,
    unit: "%",
    explanation: "Environ 30% des Français souffrent d'allergies respiratoires (pollens, acariens, poils d'animaux, etc.).",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-8",
    type: "simple",
    question: "Quelle est la distance moyenne parcourue par une ambulance pour une intervention ?",
    correctAnswer: 15.7,
    unit: "km",
    explanation: "Une ambulance parcourt en moyenne 15,7 km pour une intervention en France.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-9",
    type: "simple",
    question: "Quel est le taux d'équipement en défibrillateurs automatiques dans les lieux publics en France ?",
    correctAnswer: 3.8,
    unit: "défibrillateurs pour 10 000 habitants",
    explanation: "La France compte environ 3,8 défibrillateurs automatiques pour 10 000 habitants dans les lieux publics.",
    theme: "santé"
  },
  {
    id: "sante-simple-stats-10",
    type: "simple",
    question: "Quel pourcentage des accouchements en France est assisté par une péridurale ?",
    correctAnswer: 82.3,
    unit: "%",
    explanation: "Environ 82,3% des accouchements en France sont réalisés avec une analgésie péridurale, l'un des taux les plus élevés au monde.",
    theme: "santé"
  }
];
