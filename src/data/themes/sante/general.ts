import { Question, MultiStepQuestion } from "@/components/types";

// Questions générales sur la santé (docteurs, consultations, etc.)
export const santeGeneralQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "9",
    question: "Quelle est l'espérance de vie moyenne en France en 2023 ?",
    correctAnswer: 82.9,
    unit: "ans",
    explanation: "L'espérance de vie moyenne en France en 2023 est de 82,9 ans selon les données de l'INSEE (85,7 ans pour les femmes et 79,8 ans pour les hommes).",
    type: "simple",
    theme: "sante"
  },
  {
    id: "29",
    question: "Quel est le pourcentage de médecins généralistes parmi l'ensemble des médecins en France ?",
    correctAnswer: 44.3,
    unit: "%",
    explanation: "Selon les données de l'Ordre des Médecins et de l'INSEE, 44,3% des médecins en France sont des généralistes.",
    type: "simple",
    theme: "sante"
  },
  {
    id: "101",
    type: "multistep",
    question: "Combien de consultations médicales sont réalisées chaque jour en France par des généralistes ?",
    finalExplanation: "Les médecins généralistes français réalisent environ 930 000 consultations par jour, ce qui témoigne de leur rôle central dans le système de santé français.",
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    id: "g1",
    type: "multistep",
    question: "Combien de médecins exercent en zone rurale en France ?",
    finalExplanation: "Environ 18 000 médecins exercent en zone rurale en France, un chiffre en baisse ces dernières années malgré les incitations à l'installation dans ces territoires.",
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    theme: "sante",
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
    id: "sante-simple-6",
    type: "simple",
    question: "Quel pourcentage des Français portent des lunettes ou des lentilles de contact ?",
    correctAnswer: 71,
    unit: "%",
    explanation: "Environ 71% des Français portent des lunettes ou des lentilles de contact pour corriger leur vision.",
    theme: "sante"
  },
  {
    id: "sante-simple-9",
    type: "simple",
    question: "Quel pourcentage des Français ont une complémentaire santé (mutuelle) ?",
    correctAnswer: 95,
    unit: "%",
    explanation: "Environ 95% des Français bénéficient d'une complémentaire santé (mutuelle) pour compléter les remboursements de la Sécurité Sociale.",
    theme: "sante"
  },
  {
    id: "sante-multistep-1",
    type: "multistep",
    question: "Combien de patients une clinique généraliste moyenne peut-elle traiter par an en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de médecins généralistes en France ?",
        correctAnswer: 87000,
        unit: "médecins",
        explanation: "La France compte environ 87 000 médecins généralistes en exercice."
      },
      {
        question: "Combien de patients un médecin généraliste voit-il en moyenne par jour ?",
        correctAnswer: 25,
        unit: "patients",
        explanation: "Un médecin généraliste voit en moyenne 25 patients par jour de consultation."
      },
      {
        question: "Combien de jours par an un médecin généraliste travaille-t-il en moyenne ?",
        correctAnswer: 220,
        unit: "jours",
        explanation: "Un médecin généraliste travaille en moyenne 220 jours par an, en tenant compte des congés et jours non travaillés."
      },
      {
        question: "Combien de patients une clinique généraliste moyenne peut-elle traiter par an ?",
        correctAnswer: 5500,
        unit: "patients",
        explanation: "En multipliant le nombre de patients quotidiens (25) par le nombre de jours travaillés (220), une clinique généraliste traite environ 5 500 patients par an."
      }
    ],
    finalExplanation: "Une clinique généraliste moyenne en France peut traiter environ 5 500 patients par an, en tenant compte du nombre moyen de consultations quotidiennes et du nombre de jours travaillés."
  },
  {
    id: "sante-multistep-2",
    type: "multistep",
    question: "Quel est le nombre total de consultations chez les généralistes en France chaque année ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de médecins généralistes en exercice en France ?",
        correctAnswer: 87000,
        unit: "médecins",
        explanation: "La France compte environ 87 000 médecins généralistes en exercice."
      },
      {
        question: "Combien de consultations un médecin généraliste réalise-t-il en moyenne par jour ?",
        correctAnswer: 25,
        unit: "consultations",
        explanation: "Un médecin généraliste réalise en moyenne 25 consultations par jour."
      },
      {
        question: "Combien de jours par an un médecin généraliste travaille-t-il en moyenne ?",
        correctAnswer: 220,
        unit: "jours",
        explanation: "Un médecin généraliste travaille en moyenne 220 jours par an."
      },
      {
        question: "Quel est le nombre total de consultations chez les généralistes en France chaque année ?",
        correctAnswer: 478500000,
        unit: "consultations",
        explanation: "En multipliant le nombre de médecins (87 000) par le nombre de consultations quotidiennes (25) par le nombre de jours travaillés (220), on obtient environ 478,5 millions de consultations annuelles."
      }
    ],
    finalExplanation: "En France, les médecins généralistes réalisent environ 478,5 millions de consultations chaque année, ce qui souligne l'importance de la médecine de premier recours dans le système de santé français."
  },
  {
    id: "sante-multistep-3",
    type: "multistep",
    question: "Combien de téléconsultations sont réalisées chaque mois en France ?",
    theme: "sante",
    steps: [
      {
        question: "Quel est le nombre total de consultations médicales en France par an ?",
        correctAnswer: 550000000,
        unit: "consultations",
        explanation: "Le nombre total de consultations médicales en France est d'environ 550 millions par an."
      },
      {
        question: "Quel pourcentage des consultations médicales sont des téléconsultations ?",
        correctAnswer: 5.5,
        unit: "%",
        explanation: "Environ 5,5% des consultations médicales sont des téléconsultations en France."
      },
      {
        question: "Combien de téléconsultations sont réalisées par an en France ?",
        correctAnswer: 30250000,
        unit: "téléconsultations",
        explanation: "En multipliant le nombre total de consultations (550 millions) par le pourcentage de téléconsultations (5,5%), on obtient environ 30,25 millions de téléconsultations par an."
      },
      {
        question: "Combien de téléconsultations sont réalisées chaque mois en France ?",
        correctAnswer: 2520000,
        unit: "téléconsultations",
        explanation: "En divisant le nombre annuel de téléconsultations (30,25 millions) par 12 mois, on obtient environ 2,52 millions de téléconsultations par mois."
      }
    ],
    finalExplanation: "En France, environ 2,52 millions de téléconsultations sont réalisées chaque mois, soit environ 30,25 millions par an, ce qui représente 5,5% de toutes les consultations médicales."
  },
  {
    id: "sante-multistep-4",
    type: "multistep",
    question: "Combien de personnes utilisent une app de suivi de diabète en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de personnes diabétiques en France ?",
        correctAnswer: 3700000,
        unit: "personnes",
        explanation: "La France compte environ 3,7 millions de personnes atteintes de diabète."
      },
      {
        question: "Quel pourcentage des personnes diabétiques utilisent des outils numériques pour suivre leur maladie ?",
        correctAnswer: 23,
        unit: "%",
        explanation: "Environ 23% des personnes diabétiques utilisent des outils numériques pour suivre leur maladie en France."
      },
      {
        question: "Parmi ces utilisateurs d'outils numériques, quel pourcentage utilisent spécifiquement une application mobile de suivi ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% des diabétiques utilisant des outils numériques optent pour une application mobile de suivi."
      },
      {
        question: "Combien de personnes utilisent donc une app de suivi de diabète en France ?",
        correctAnswer: 665000,
        unit: "personnes",
        explanation: "En multipliant le nombre de diabétiques (3,7 millions) par le pourcentage utilisant des outils numériques (23%) par le pourcentage utilisant une app mobile (78%), on obtient environ 665 000 personnes."
      }
    ],
    finalExplanation: "En France, environ 665 000 personnes diabétiques utilisent une application mobile pour suivre leur maladie, ce qui représente environ 18% de la population diabétique totale."
  },
  {
    id: "sante-multistep-5",
    type: "multistep",
    question: "Quel est le marché potentiel des montres connectées santé chez les plus de 60 ans ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de personnes âgées de plus de 60 ans en France ?",
        correctAnswer: 17500000,
        unit: "personnes",
        explanation: "La France compte environ 17,5 millions de personnes âgées de plus de 60 ans."
      },
      {
        question: "Quel pourcentage de cette population est susceptible d'utiliser des appareils électroniques ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% des personnes de plus de 60 ans sont susceptibles d'utiliser des appareils électroniques."
      },
      {
        question: "Parmi ces utilisateurs potentiels, quel pourcentage serait intéressé par une montre connectée dédiée à la santé ?",
        correctAnswer: 28,
        unit: "%",
        explanation: "Environ 28% des seniors utilisateurs d'appareils électroniques seraient intéressés par une montre connectée santé."
      },
      {
        question: "Quel est donc le marché potentiel des montres connectées santé chez les plus de 60 ans en France ?",
        correctAnswer: 3185000,
        unit: "personnes",
        explanation: "En multipliant le nombre de personnes de plus de 60 ans (17,5 millions) par le pourcentage d'utilisateurs d'appareils électroniques (65%) par le pourcentage d'intéressés par les montres connectées santé (28%), on obtient environ 3,185 millions de personnes."
      }
    ],
    finalExplanation: "Le marché potentiel des montres connectées santé chez les plus de 60 ans en France est d'environ 3,185 millions de personnes, ce qui représente un segment important pour les fabricants de ces appareils."
  },
  {
    id: "sante-multistep-6",
    type: "multistep",
    question: "Combien de SMS de rappel de rendez-vous médicaux sont envoyés chaque année ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de consultations médicales en France par an ?",
        correctAnswer: 550000000,
        unit: "consultations",
        explanation: "Il y a environ 550 millions de consultations médicales en France par an."
      },
      {
        question: "Quel pourcentage de ces consultations sont planifiées à l'avance (et non en urgence) ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% des consultations médicales sont planifiées à l'avance et non en urgence."
      },
      {
        question: "Parmi ces consultations planifiées, pour quel pourcentage un SMS de rappel est-il envoyé ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Pour environ 62% des consultations planifiées, un SMS de rappel est envoyé au patient."
      },
      {
        question: "Combien de SMS de rappel de rendez-vous médicaux sont envoyés chaque année ?",
        correctAnswer: 289850000,
        unit: "SMS",
        explanation: "En multipliant le nombre total de consultations (550 millions) par le pourcentage de consultations planifiées (85%) par le pourcentage avec SMS de rappel (62%), on obtient environ 289,85 millions de SMS envoyés."
      }
    ],
    finalExplanation: "En France, environ 289,85 millions de SMS de rappel de rendez-vous médicaux sont envoyés chaque année, ce qui représente un outil important pour réduire les rendez-vous manqués dans le système de santé."
  },
  {
    id: "sante-multistep-7",
    type: "multistep",
    question: "Combien de gigaoctets de données médicales sont générés chaque jour en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien de consultations médicales ont lieu chaque jour en France ?",
        correctAnswer: 1500000,
        unit: "consultations",
        explanation: "Environ 1,5 million de consultations médicales ont lieu chaque jour en France."
      },
      {
        question: "Combien de gigaoctets de données médicales sont générés en moyenne par consultation ?",
        correctAnswer: 0.05,
        unit: "Go",
        explanation: "Une consultation médicale génère en moyenne 0,05 gigaoctet de données (textes, images, résultats d'analyses)."
      },
      {
        question: "Combien d'examens d'imagerie médicale sont réalisés chaque jour en France ?",
        correctAnswer: 80000,
        unit: "examens",
        explanation: "Environ 80 000 examens d'imagerie médicale (radiographies, IRM, scanners) sont réalisés chaque jour en France."
      },
      {
        question: "Combien de gigaoctets de données sont générés en moyenne par un examen d'imagerie médicale ?",
        correctAnswer: 0.5,
        unit: "Go",
        explanation: "Un examen d'imagerie médicale génère en moyenne 0,5 gigaoctet de données."
      },
      {
        question: "Combien de gigaoctets de données médicales sont générés chaque jour en France ?",
        correctAnswer: 115000,
        unit: "Go",
        explanation: "En additionnant les données des consultations (1,5 million × 0,05 Go = 75 000 Go) et des examens d'imagerie (80 000 × 0,5 Go = 40 000 Go), on obtient environ 115 000 Go de données générées par jour."
      }
    ],
    finalExplanation: "En France, environ 115 000 gigaoctets (115 téraoctets) de données médicales sont générés chaque jour, illustrant le défi de la gestion et du stockage des données dans le système de santé moderne."
  },
  {
    id: "sante-multistep-8",
    type: "multistep",
    question: "Combien d'infirmier(ère)s exercent à domicile chaque année en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il d'infirmier(ère)s en France au total ?",
        correctAnswer: 700000,
        unit: "infirmier(ère)s",
        explanation: "Il y a environ 700 000 infirmier(ère)s en France, tous modes d'exercice confondus."
      },
      {
        question: "Quel pourcentage des infirmier(ère)s travaillent en libéral ?",
        correctAnswer: 18,
        unit: "%",
        explanation: "Environ 18% des infirmier(ère)s travaillent en libéral en France."
      },
      {
        question: "Parmi les infirmier(ère)s libéraux, quel pourcentage exercent principalement à domicile ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des infirmier(ère)s libéraux exercent principalement à domicile."
      },
      {
        question: "Combien d'infirmier(ère)s exercent donc à domicile en France ?",
        correctAnswer: 115920,
        unit: "infirmier(ère)s",
        explanation: "En multipliant le nombre total d'infirmier(ère)s (700 000) par le pourcentage en libéral (18%) par le pourcentage exerçant à domicile (92%), on obtient environ 115 920 infirmier(ère)s."
      }
    ],
    finalExplanation: "En France, environ 115 920 infirmier(ère)s exercent principalement à domicile, ce qui représente une ressource essentielle pour les soins de proximité, notamment pour les personnes âgées ou dépendantes."
  },
  {
    id: "sante-multistep-9",
    type: "multistep",
    question: "Combien de médicaments sont consommés quotidiennement par les Français de plus de 65 ans ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de personnes âgées de plus de 65 ans en France ?",
        correctAnswer: 14000000,
        unit: "personnes",
        explanation: "La France compte environ 14 millions de personnes âgées de plus de 65 ans."
      },
      {
        question: "Combien de médicaments différents une personne de plus de 65 ans prend-elle en moyenne par jour ?",
        correctAnswer: 3.9,
        unit: "médicaments",
        explanation: "Une personne de plus de 65 ans prend en moyenne 3,9 médicaments différents par jour."
      },
      {
        question: "Quel pourcentage des personnes de plus de 65 ans prend au moins un médicament quotidiennement ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des personnes de plus de 65 ans prennent au moins un médicament quotidiennement."
      },
      {
        question: "Combien de médicaments sont consommés quotidiennement par les Français de plus de 65 ans ?",
        correctAnswer: 50232000,
        unit: "médicaments",
        explanation: "En multipliant le nombre de personnes de plus de 65 ans (14 millions) par le taux de consommation de médicaments (92%) par le nombre moyen de médicaments (3,9), on obtient environ 50,232 millions de médicaments consommés quotidiennement."
      }
    ],
    finalExplanation: "Les Français de plus de 65 ans consomment environ 50,232 millions de médicaments chaque jour, ce qui souligne l'importance de la polymédication chez les personnes âgées et les enjeux associés à sa gestion."
  },
  {
    id: "sante-multistep-10",
    type: "multistep",
    question: "Combien de kilomètres parcourent les ambulances en France chaque année ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il d'ambulances en service en France ?",
        correctAnswer: 7500,
        unit: "ambulances",
        explanation: "La France dispose d'environ 7 500 ambulances en service."
      },
      {
        question: "Combien de kilomètres une ambulance parcourt-elle en moyenne par jour ?",
        correctAnswer: 150,
        unit: "km",
        explanation: "Une ambulance parcourt en moyenne 150 kilomètres par jour."
      },
      {
        question: "Combien de jours par an une ambulance est-elle en service en moyenne ?",
        correctAnswer: 330,
        unit: "jours",
        explanation: "Une ambulance est en service en moyenne 330 jours par an, en tenant compte des périodes de maintenance."
      },
      {
        question: "Combien de kilomètres parcourent les ambulances en France chaque année ?",
        correctAnswer: 371250000,
        unit: "km",
        explanation: "En multipliant le nombre d'ambulances (7 500) par la distance quotidienne (150 km) par le nombre de jours de service (330), on obtient environ 371,25 millions de kilomètres parcourus par an."
      }
    ],
    finalExplanation: "Les ambulances en France parcourent environ 371,25 millions de kilomètres chaque année, soit près de 10 000 fois le tour de la Terre, pour assurer le transport des patients."
  }
];
