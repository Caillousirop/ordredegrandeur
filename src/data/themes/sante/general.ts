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
  },
  {
    id: "g1",
    type: "multistep",
    question: "Combien de médecins exercent en zone rurale en France ?",
    finalExplanation: "Environ 18 000 médecins exercent en zone rurale en France, un chiffre en baisse ces dernières années malgré les incitations à l'installation dans ces territoires.",
    theme: "santé",
    steps: [
      {
        question: "Combien de médecins en activité compte la France ?",
        correctAnswer: 215000,
        unit: "médecins",
        explanation: "La France compte environ 215 000 médecins en activité (toutes spécialités confondues, y compris les remplaçants)."
      },
      {
        question: "Quelle proportion de la population française vit en zone rurale ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% de la population française vit en zone rurale selon la définition de l'INSEE."
      },
      {
        question: "Quel est le ratio entre la densité médicale en zone rurale et la densité médicale moyenne nationale ?",
        correctAnswer: 0.42,
        unit: "ratio",
        explanation: "La densité médicale en zone rurale représente environ 42% de la densité médicale moyenne nationale, témoignant des disparités territoriales d'accès aux soins."
      },
      {
        question: "Combien de médecins exercent en zone rurale en France ?",
        correctAnswer: 18000,
        unit: "médecins",
        explanation: "En multipliant le nombre total de médecins (215 000) par la proportion de population rurale (20%) puis par le ratio de densité médicale (0,42), on obtient environ 18 000 médecins exerçant en zone rurale."
      }
    ]
  },
  {
    id: "g2",
    type: "multistep",
    question: "Combien d'actes de chirurgie plastique sont pratiqués chaque année en France ?",
    finalExplanation: "Environ 320 000 actes de chirurgie plastique sont pratiqués chaque année en France, dont environ un tiers à visée purement esthétique et deux tiers à visée reconstructrice ou réparatrice.",
    theme: "santé",
    steps: [
      {
        question: "Combien de chirurgiens plasticiens exercent en France ?",
        correctAnswer: 950,
        unit: "chirurgiens",
        explanation: "Environ 950 chirurgiens plasticiens exercent en France, que ce soit en établissement de santé ou en cabinet privé."
      },
      {
        question: "Combien d'actes de chirurgie plastique un praticien réalise-t-il en moyenne par année ?",
        correctAnswer: 340,
        unit: "actes",
        explanation: "Un chirurgien plasticien réalise en moyenne 340 actes chirurgicaux par an, en tenant compte des différences d'activité entre secteur public et privé."
      },
      {
        question: "Combien d'actes de chirurgie plastique sont pratiqués chaque année en France ?",
        correctAnswer: 320000,
        unit: "actes",
        explanation: "En multipliant le nombre de chirurgiens plasticiens (950) par le nombre moyen d'actes annuels (340), on obtient environ 320 000 actes de chirurgie plastique par an."
      }
    ]
  },
  {
    id: "g3",
    type: "multistep",
    question: "Combien d'auxiliaires médicaux (infirmiers, kinés, etc.) exercent en France ?",
    finalExplanation: "Environ 820 000 auxiliaires médicaux exercent en France, constituant un maillon essentiel du système de santé français.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'infirmiers et infirmières sont en exercice en France ?",
        correctAnswer: 380000,
        unit: "infirmiers",
        explanation: "La France compte environ 380 000 infirmiers et infirmières en exercice, ce qui en fait la profession paramédicale la plus nombreuse."
      },
      {
        question: "Combien de masseurs-kinésithérapeutes exercent en France ?",
        correctAnswer: 105000,
        unit: "kinés",
        explanation: "Environ 105 000 masseurs-kinésithérapeutes exercent en France, principalement en libéral."
      },
      {
        question: "Combien d'autres auxiliaires médicaux (orthophonistes, podologues, orthoptistes, etc.) sont en activité ?",
        correctAnswer: 335000,
        unit: "professionnels",
        explanation: "On compte environ 335 000 autres professionnels paramédicaux en France, incluant notamment les orthophonistes, les podologues, les diététiciens, les ergothérapeutes, etc."
      },
      {
        question: "Combien d'auxiliaires médicaux exercent en France au total ?",
        correctAnswer: 820000,
        unit: "professionnels",
        explanation: "En additionnant les infirmiers (380 000), les masseurs-kinésithérapeutes (105 000) et les autres auxiliaires médicaux (335 000), on obtient environ 820 000 professionnels."
      }
    ]
  },
  {
    id: "g4",
    type: "multistep",
    question: "Quel est le budget annuel de l'Assurance Maladie pour les remboursements de soins ?",
    finalExplanation: "Le budget annuel de l'Assurance Maladie pour les remboursements de soins s'élève à environ 200 milliards d'euros, ce qui en fait l'un des postes de dépenses publiques les plus importants en France.",
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
        correctAnswer: 12,
        unit: "%",
        explanation: "Les dépenses de santé représentent environ 12% du PIB français, un pourcentage parmi les plus élevés des pays de l'OCDE."
      },
      {
        question: "Quelle proportion des dépenses de santé est prise en charge par l'Assurance Maladie ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "L'Assurance Maladie prend en charge environ 67% des dépenses de santé, le reste étant financé par les complémentaires santé et les ménages directement."
      },
      {
        question: "Quel est le budget annuel de l'Assurance Maladie pour les remboursements de soins ?",
        correctAnswer: 200,
        unit: "milliards d'euros",
        explanation: "En multipliant le PIB (2 500 milliards) par la part des dépenses de santé (12%) puis par le taux de prise en charge de l'Assurance Maladie (67%), on obtient environ 200 milliards d'euros."
      }
    ]
  },
  {
    id: "g5",
    type: "multistep",
    question: "Quel est le nombre total d'étudiants en médecine en France ?",
    finalExplanation: "Environ 240 000 étudiants suivent des études de médecine en France, toutes années et toutes filières confondues, représentant un vivier important de futurs professionnels pour le système de santé.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'étudiants sont admis chaque année en deuxième année de médecine (après la réforme du numerus clausus) ?",
        correctAnswer: 12000,
        unit: "étudiants",
        explanation: "Environ 12 000 étudiants sont admis chaque année en deuxième année de médecine en France, suite à la réforme du numerus clausus qui a augmenté progressivement les capacités d'accueil."
      },
      {
        question: "Quelle est la durée moyenne des études de médecine en France ?",
        correctAnswer: 10,
        unit: "années",
        explanation: "Les études de médecine durent en moyenne 10 ans en France (9 ans pour un généraliste, jusqu'à 12 ans pour certaines spécialités chirurgicales)."
      },
      {
        question: "Quel est le taux d'abandon moyen au cours des études de médecine ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des étudiants admis en deuxième année abandonnent leurs études de médecine avant l'obtention du diplôme, généralement par réorientation vers d'autres filières de santé."
      },
      {
        question: "Combien d'étudiants sont inscrits en première année (PASS/LAS) ?",
        correctAnswer: 60000,
        unit: "étudiants",
        explanation: "Environ 60 000 étudiants sont inscrits en première année (PASS ou LAS) pour tenter d'accéder aux études de médecine."
      },
      {
        question: "Quel est le nombre total d'étudiants en médecine en France ?",
        correctAnswer: 240000,
        unit: "étudiants",
        explanation: "En additionnant les étudiants de première année (60 000) et ceux des années supérieures (12 000 admis par an × 10 ans de durée moyenne × 80% de taux de poursuite = 96 000), on obtient environ 156 000 étudiants. En ajoutant les étudiants en spécialisation et autres parcours particuliers, on atteint environ 240 000 étudiants au total."
      }
    ]
  },
  {
    id: "g6",
    type: "multistep",
    question: "Combien de chirurgiens-dentistes exercent en France ?",
    finalExplanation: "Environ 42 000 chirurgiens-dentistes exercent en France, principalement en libéral, mais ce chiffre reste insuffisant face aux besoins de la population.",
    theme: "santé",
    steps: [
      {
        question: "Quel est le nombre d'habitants en France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française compte environ 68 millions d'habitants."
      },
      {
        question: "Quel est le nombre moyen de chirurgiens-dentistes pour 100 000 habitants en France ?",
        correctAnswer: 61.8,
        unit: "dentistes",
        explanation: "La France compte en moyenne 61,8 chirurgiens-dentistes pour 100 000 habitants, un ratio légèrement inférieur à la moyenne européenne."
      },
      {
        question: "Combien de chirurgiens-dentistes exercent en France ?",
        correctAnswer: 42000,
        unit: "dentistes",
        explanation: "En multipliant la population totale (68 millions) par le ratio de dentistes pour 100 000 habitants (61,8) puis en divisant par 100 000, on obtient environ 42 000 chirurgiens-dentistes."
      }
    ]
  },
  {
    id: "g7",
    type: "multistep",
    question: "Combien de médecins étrangers exercent en France ?",
    finalExplanation: "Environ 28 000 médecins formés à l'étranger exercent en France, représentant une part significative du corps médical français et contribuant à pallier certaines pénuries dans les territoires sous-dotés.",
    theme: "santé",
    steps: [
      {
        question: "Combien de médecins actifs y a-t-il au total en France ?",
        correctAnswer: 215000,
        unit: "médecins",
        explanation: "La France compte environ 215 000 médecins en activité, toutes spécialités confondues."
      },
      {
        question: "Quel pourcentage des médecins exerçant en France ont obtenu leur diplôme à l'étranger ?",
        correctAnswer: 13,
        unit: "%",
        explanation: "Environ 13% des médecins exerçant en France ont obtenu leur diplôme médical dans un autre pays (Union européenne ou hors UE)."
      },
      {
        question: "Combien de médecins étrangers exercent en France ?",
        correctAnswer: 28000,
        unit: "médecins",
        explanation: "En multipliant le nombre total de médecins (215 000) par le pourcentage de diplômés à l'étranger (13%), on obtient environ 28 000 médecins formés à l'étranger exerçant en France."
      }
    ]
  },
  {
    id: "g8",
    type: "multistep",
    question: "Combien de Français portent des lunettes ou des lentilles de contact ?",
    finalExplanation: "Environ 40 millions de Français portent des lunettes ou des lentilles de contact, soit près de 6 personnes sur 10, témoignant de l'importance des troubles de la vision dans la population.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population adulte porte des lunettes ou des lentilles ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Environ 72% des adultes français portent une correction visuelle (lunettes ou lentilles de contact)."
      },
      {
        question: "Quel pourcentage des enfants et adolescents (moins de 18 ans) porte des lunettes ou des lentilles ?",
        correctAnswer: 23,
        unit: "%",
        explanation: "Environ 23% des enfants et adolescents français portent une correction visuelle, un taux qui augmente avec l'âge."
      },
      {
        question: "Quelle est la proportion de personnes de moins de 18 ans dans la population française ?",
        correctAnswer: 21.5,
        unit: "%",
        explanation: "Les moins de 18 ans représentent environ 21,5% de la population française totale."
      },
      {
        question: "Combien de Français portent des lunettes ou des lentilles de contact ?",
        correctAnswer: 40,
        unit: "millions",
        explanation: "En calculant séparément pour les adultes (68 millions × 78,5% × 72% ≈ 38,3 millions) et les moins de 18 ans (68 millions × 21,5% × 23% ≈ 3,4 millions), puis en additionnant ces deux résultats, on obtient environ 40 millions de personnes."
      }
    ]
  },
  {
    id: "g9",
    type: "multistep",
    question: "Combien d'ostéopathes sont en activité en France ?",
    finalExplanation: "Environ 30 000 ostéopathes exercent en France, ce qui en fait l'un des pays avec la plus forte densité de praticiens de cette discipline au monde.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'écoles d'ostéopathie sont agréées en France ?",
        correctAnswer: 31,
        unit: "écoles",
        explanation: "La France compte 31 écoles d'ostéopathie agréées par le ministère de la Santé."
      },
      {
        question: "Combien de nouveaux diplômés en ostéopathie sortent chaque année de ces écoles ?",
        correctAnswer: 2300,
        unit: "diplômés",
        explanation: "Environ 2 300 nouveaux ostéopathes sont diplômés chaque année en France."
      },
      {
        question: "Quelle est la durée moyenne d'exercice d'un ostéopathe en France ?",
        correctAnswer: 15,
        unit: "années",
        explanation: "Un ostéopathe exerce en moyenne pendant 15 ans en France avant de changer de métier ou de prendre sa retraite."
      },
      {
        question: "Quel est le taux d'abandon de la profession dans les cinq premières années d'exercice ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des ostéopathes abandonnent la profession dans les cinq premières années d'exercice, principalement en raison de difficultés économiques."
      },
      {
        question: "Combien d'ostéopathes sont en activité en France ?",
        correctAnswer: 30000,
        unit: "ostéopathes",
        explanation: "En tenant compte du nombre annuel de nouveaux diplômés (2 300), de la durée moyenne d'exercice (15 ans) et du taux d'abandon (30%), on estime qu'environ 30 000 ostéopathes sont en activité en France."
      }
    ]
  },
  {
    id: "g10",
    type: "multistep",
    question: "Combien de Français sont équipés d'une complémentaire santé ?",
    finalExplanation: "Environ 60 millions de Français bénéficient d'une complémentaire santé, soit près de 95% de la population, ce qui témoigne de l'importance de ce dispositif dans le système de santé français.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population active bénéficie d'une complémentaire santé d'entreprise obligatoire ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% de la population active bénéficie d'une complémentaire santé via un contrat collectif d'entreprise rendu obligatoire depuis la loi ANI de 2013."
      },
      {
        question: "Quelle proportion de la population est couverte par une complémentaire santé individuelle ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Environ 22% de la population française est couverte par une complémentaire santé individuelle (souscrite directement auprès d'une mutuelle, d'une assurance ou d'une institution de prévoyance)."
      },
      {
        question: "Quel pourcentage de la population bénéficie de la Complémentaire Santé Solidaire (CSS) ?",
        correctAnswer: 8,
        unit: "%",
        explanation: "Environ 8% de la population française bénéficie de la Complémentaire Santé Solidaire, un dispositif destiné aux personnes aux revenus modestes."
      },
      {
        question: "Combien de Français sont équipés d'une complémentaire santé au total ?",
        correctAnswer: 60,
        unit: "millions",
        explanation: "En additionnant les différents types de couverture (65% + 22% + 8% = 95% de la population), on obtient environ 95% × 68 millions = 64,6 millions de personnes. Toutefois, certaines personnes peuvent être comptées deux fois (par exemple, un retraité bénéficiant à la fois d'une complémentaire de son ancien employeur et d'une autre individuelle), donc on estime le nombre réel à environ 60 millions."
      }
    ]
  },
  {
    id: "g11",
    type: "simple",
    question: "Quel est le délai moyen pour obtenir un rendez-vous chez un ophtalmologiste en France ?",
    correctAnswer: 80,
    unit: "jours",
    explanation: "Le délai moyen pour obtenir un rendez-vous chez un ophtalmologiste en France est d'environ 80 jours, avec de fortes disparités régionales.",
    theme: "santé"
  },
  {
    id: "g12",
    type: "simple",
    question: "Combien d'infirmiers libéraux exercent en France ?",
    correctAnswer: 145000,
    unit: "infirmiers",
    explanation: "Environ 145 000 infirmiers exercent en libéral en France, assurant notamment les soins à domicile et en cabinet.",
    theme: "santé"
  },
  {
    id: "g13",
    type: "simple",
    question: "Quel est le nombre de consultations médicales par habitant et par an en France ?",
    correctAnswer: 6.8,
    unit: "consultations",
    explanation: "Un Français consulte un médecin en moyenne 6,8 fois par an, tous types de consultation confondus.",
    theme: "santé"
  },
  {
    id: "g14",
    type: "simple",
    question: "Quelle est la proportion de femmes parmi les médecins en France ?",
    correctAnswer: 52,
    unit: "%",
    explanation: "Les femmes représentent environ 52% des médecins en France, une proportion qui continue d'augmenter avec le renouvellement des générations.",
    theme: "santé"
  },
  {
    id: "g15",
    type: "simple",
    question: "Quel est le nombre de sages-femmes en exercice en France ?",
    correctAnswer: 24500,
    unit: "sages-femmes",
    explanation: "Environ 24 500 sages-femmes exercent en France, que ce soit en établissement ou en libéral.",
    theme: "santé"
  },
  {
    id: "g16",
    type: "simple",
    question: "Combien de médecins exercent en libéral en France ?",
    correctAnswer: 125000,
    unit: "médecins",
    explanation: "Environ 125 000 médecins exercent en libéral (exclusif ou mixte) en France, soit environ 58% du total des médecins.",
    theme: "santé"
  },
  {
    id: "g17",
    type: "simple",
    question: "Quelle est la durée moyenne d'une consultation chez un médecin généraliste ?",
    correctAnswer: 17.5,
    unit: "minutes",
    explanation: "Une consultation chez un médecin généraliste dure en moyenne 17,5 minutes en France.",
    theme: "santé"
  },
  {
    id: "g18",
    type: "simple",
    question: "Quel est le taux de médecins pratiquant des dépassements d'honoraires en France ?",
    correctAnswer: 23.7,
    unit: "%",
    explanation: "Environ 23,7% des médecins pratiquent des dépassements d'honoraires en France (principalement des spécialistes en secteur 2).",
    theme: "santé"
  },
  {
    id: "g19",
    type: "simple",
    question: "Combien d'orthophonistes exercent en France ?",
    correctAnswer: 27500,
    unit: "orthophonistes",
    explanation: "La France compte environ 27 500 orthophonistes en exercice, principalement en libéral.",
    theme: "santé"
  },
  {
    id: "g20",
    type: "simple",
    question: "Quel est l'âge moyen des médecins en France ?",
    correctAnswer: 51.2,
    unit: "ans",
    explanation: "L'âge moyen des médecins en France est de 51,2 ans, avec une tendance au vieillissement qui pose la question du renouvellement générationnel.",
    theme: "santé"
  },
  {
    id: "g21",
    type: "simple",
    question: "Quel est le coût moyen annuel d'une complémentaire santé par personne ?",
    correctAnswer: 720,
    unit: "euros",
    explanation: "Une complémentaire santé coûte en moyenne 720 euros par personne et par an en France, avec de fortes variations selon l'âge et le niveau de couverture.",
    theme: "santé"
  },
  {
    id: "g22",
    type: "simple",
    question: "Combien de diététiciens-nutritionnistes exercent en France ?",
    correctAnswer: 12500,
    unit: "diététiciens",
    explanation: "Environ 12 500 diététiciens-nutritionnistes exercent en France, majoritairement en libéral.",
    theme: "santé"
  },
  {
    id: "g23",
    type: "simple",
    question: "Quel est le pourcentage de Français portant un appareil dentaire au cours de leur vie ?",
    correctAnswer: 35,
    unit: "%",
    explanation: "Environ 35% des Français portent un appareil dentaire à un moment de leur vie, principalement pendant l'enfance ou l'adolescence.",
    theme: "santé"
  },
  {
    id: "g24",
    type: "simple",
    question: "Combien de personnes sont couvertes par la CMU-C (devenue CSS) en France ?",
    correctAnswer: 5.9,
    unit: "millions",
    explanation: "Environ 5,9 millions de personnes bénéficient de la Complémentaire Santé Solidaire (ex-CMU-C) en France.",
    theme: "santé"
  },
  {
    id: "g25",
    type: "simple",
    question: "Quel est le nombre d'ostéopathes pour 100 000 habitants en France ?",
    correctAnswer: 45,
    unit: "ostéopathes",
    explanation: "La France compte environ 45 ostéopathes pour 100 000 habitants, ce qui en fait l'un des pays avec la plus forte densité au monde pour cette profession.",
    theme: "santé"
  },
  {
    id: "g26",
    type: "simple",
    question: "Quelle proportion des dépenses de santé reste à la charge des ménages en France ?",
    correctAnswer: 7.5,
    unit: "%",
    explanation: "Environ 7,5% des dépenses de santé restent à la charge directe des ménages français après remboursements de la Sécurité sociale et des complémentaires, l'un des taux les plus bas des pays de l'OCDE.",
    theme: "santé"
  },
  {
    id: "g27",
    type: "simple",
    question: "Combien de podologues exercent en France ?",
    correctAnswer: 14200,
    unit: "podologues",
    explanation: "Environ 14 200 pédicures-podologues exercent en France, presque exclusivement en libéral.",
    theme: "santé"
  },
  {
    id: "g28",
    type: "simple",
    question: "Quel est le pourcentage de naissances ayant lieu avec péridurale en France ?",
    correctAnswer: 82,
    unit: "%",
    explanation: "Environ 82% des accouchements en France se déroulent avec une analgésie péridurale, l'un des taux les plus élevés au monde.",
    theme: "santé"
  },
  {
    id: "g29",
    type: "simple",
    question: "Quel est le nombre de psychologues en France ?",
    correctAnswer: 75000,
    unit: "psychologues",
    explanation: "On compte environ 75 000 psychologues en France, exerçant dans divers secteurs (santé, éducation, entreprises, libéral...).",
    theme: "santé"
  },
  {
    id: "g30",
    type: "simple",
    question: "Quelle est la part des dépenses de santé dans le budget des ménages français ?",
    correctAnswer: 3.8,
    unit: "%",
    explanation: "Les dépenses de santé représentent en moyenne 3,8% du budget des ménages français, un chiffre relativement stable grâce au système de protection sociale.",
    theme: "santé"
  }
]
