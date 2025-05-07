
import { Question, MultiStepQuestion } from "@/components/types";

export const santeQuestions: (Question | MultiStepQuestion)[] = [
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
    id: "29",
    question: "Quel est le pourcentage de médecins généralistes parmi l'ensemble des médecins en France ?",
    correctAnswer: 44.3,
    unit: "%",
    explanation: "Selon les données de l'Ordre des Médecins et de l'INSEE, 44,3% des médecins en France sont des généralistes.",
    type: "simple",
    theme: "santé"
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
    id: "105",
    type: "multistep",
    question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
    finalExplanation: "Environ 3,2 millions d'IRM sont réalisées chaque année dans les hôpitaux publics français, représentant environ 60% de l'ensemble des IRM pratiquées en France.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'appareils d'IRM sont installés dans les hôpitaux publics en France ?",
        correctAnswer: 520,
        unit: "appareils",
        explanation: "On compte environ 520 appareils d'IRM installés dans les établissements publics de santé en France."
      },
      {
        question: "Combien d'examens IRM sont réalisés en moyenne par appareil et par jour ?",
        correctAnswer: 18,
        unit: "examens",
        explanation: "Un appareil d'IRM réalise en moyenne 18 examens par jour dans le secteur public."
      },
      {
        question: "Combien de jours par an ces appareils sont-ils opérationnels ?",
        correctAnswer: 340,
        unit: "jours",
        explanation: "Les appareils d'IRM fonctionnent environ 340 jours par an, en tenant compte des maintenances et des jours fériés."
      },
      {
        question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
        correctAnswer: 3.2,
        unit: "millions",
        explanation: "En multipliant le nombre d'appareils (520) par le nombre d'examens quotidiens (18) par le nombre de jours de fonctionnement (340), on obtient environ 3,2 millions d'IRM par an."
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
    id: "108",
    type: "multistep",
    question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
    finalExplanation: "L'Île-de-France dispose d'environ 1 200 lits de réanimation, une capacité qui peut être augmentée en cas de crise sanitaire majeure comme l'a montré la pandémie de COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'habitants compte la région Île-de-France ?",
        correctAnswer: 12.3,
        unit: "millions",
        explanation: "La région Île-de-France compte environ 12,3 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en moyenne pour 100 000 habitants en France ?",
        correctAnswer: 10.2,
        unit: "lits",
        explanation: "La France dispose d'environ 10,2 lits de réanimation pour 100 000 habitants, légèrement au-dessus de la moyenne européenne."
      },
      {
        question: "Quel est le ratio de lits de réanimation en Île-de-France par rapport à la moyenne nationale ?",
        correctAnswer: 0.96,
        unit: "",
        explanation: "L'Île-de-France a une densité de lits de réanimation légèrement inférieure à la moyenne nationale, avec un ratio de 0,96."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
        correctAnswer: 1200,
        unit: "lits",
        explanation: "En multipliant la population francilienne (12,3 millions) par le taux de lits pour 100 000 habitants (10,2) ajusté par le ratio régional (0,96), on obtient environ 1 200 lits."
      }
    ]
  },
  {
    id: "109",
    type: "multistep",
    question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
    finalExplanation: "Environ 20 000 opérations chirurgicales programmées sont réalisées chaque jour en France, sans compter les interventions urgentes, ce qui témoigne de l'activité importante du système chirurgical français.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'opérations chirurgicales sont réalisées chaque année en France ?",
        correctAnswer: 6.5,
        unit: "millions",
        explanation: "Environ 6,5 millions d'interventions chirurgicales sont réalisées chaque année en France, toutes spécialités confondues."
      },
      {
        question: "Quel pourcentage de ces opérations sont des interventions programmées (non urgentes) ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Environ 82% des interventions chirurgicales sont programmées à l'avance, par opposition aux interventions d'urgence."
      },
      {
        question: "Combien de jours par an les blocs opératoires sont-ils actifs ?",
        correctAnswer: 270,
        unit: "jours",
        explanation: "Les blocs opératoires fonctionnent environ 270 jours par an, en tenant compte des week-ends, jours fériés et périodes de maintenance."
      },
      {
        question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
        correctAnswer: 20000,
        unit: "opérations",
        explanation: "En multipliant le nombre total d'opérations annuelles (6,5 millions) par le pourcentage d'interventions programmées (82%) et en divisant par le nombre de jours d'activité (270), on obtient environ 20 000 opérations programmées par jour."
      }
    ]
  },
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
    id: "113",
    type: "multistep",
    question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
    finalExplanation: "Environ 1,3 million de personnes travaillent dans le secteur hospitalier français, ce qui en fait l'un des plus grands employeurs du pays.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'établissements hospitaliers existe-t-il en France ?",
        correctAnswer: 3000,
        unit: "établissements",
        explanation: "La France compte environ 3 000 établissements hospitaliers, incluant les hôpitaux publics, privés et les établissements privés à but non lucratif."
      },
      {
        question: "Quelle est la taille moyenne d'un établissement hospitalier en nombre d'employés ?",
        correctAnswer: 430,
        unit: "employés",
        explanation: "Un établissement hospitalier français emploie en moyenne 430 personnes, tous métiers confondus (médical, paramédical, administratif, technique, etc.)."
      },
      {
        question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre d'établissements (3 000) par la taille moyenne (430 employés), on obtient environ 1,3 million de personnes travaillant dans le secteur hospitalier."
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
        question: "Quel pourcentage de ces hospitalisations concerne la chirurgie orthopédique et traumatologique ?",
        correctAnswer: 17.7,
        unit: "%",
        explanation: "La chirurgie orthopédique et traumatologique représente environ 17,7% de l'ensemble des actes chirurgicaux réalisés en France."
      },
      {
        question: "Combien de patients sont hospitalisés pour une intervention orthopédique chaque année ?",
        correctAnswer: 1.1,
        unit: "million",
        explanation: "En multipliant le nombre total d'hospitalisations chirurgicales (6,2 millions) par le pourcentage d'interventions orthopédiques (17,7%), on obtient environ 1,1 million de patients."
      }
    ]
  },
  {
    id: "117",
    type: "multistep",
    question: "Combien de jeunes de 18 à 25 ans bénéficient d'un suivi psychiatrique ou psychologique ?",
    finalExplanation: "Environ 720 000 jeunes de 18 à 25 ans bénéficient d'un suivi psychiatrique ou psychologique en France, un chiffre en augmentation depuis plusieurs années.",
    theme: "santé",
    steps: [
      {
        question: "Combien de jeunes âgés de 18 à 25 ans y a-t-il en France ?",
        correctAnswer: 5.4,
        unit: "millions",
        explanation: "La France compte environ 5,4 millions de jeunes âgés de 18 à 25 ans selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage des 18-25 ans souffrent de troubles psychiques nécessitant un suivi ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Selon les études épidémiologiques récentes, environ 22% des jeunes adultes souffrent de troubles psychiques nécessitant potentiellement un suivi."
      },
      {
        question: "Parmi les jeunes souffrant de troubles psychiques, quel pourcentage bénéficie effectivement d'un suivi ?",
        correctAnswer: 60,
        unit: "%",
        explanation: "Environ 60% des jeunes adultes souffrant de troubles psychiques bénéficient effectivement d'un suivi professionnel (psychiatre, psychologue, etc.)."
      },
      {
        question: "Combien de jeunes de 18 à 25 ans bénéficient d'un suivi psychiatrique ou psychologique ?",
        correctAnswer: 720000,
        unit: "jeunes",
        explanation: "En multipliant la population des 18-25 ans (5,4 millions) par le taux de troubles psychiques (22%) puis par le taux d'accès aux soins (60%), on obtient environ 720 000 jeunes."
      }
    ]
  },
  {
    id: "118",
    type: "multistep",
    question: "Combien de médicaments sont délivrés chaque jour en officine en France ?",
    finalExplanation: "Environ 13 millions de boîtes de médicaments sont délivrées chaque jour dans les pharmacies françaises, ce qui illustre l'importance de la consommation pharmaceutique dans le pays.",
    theme: "santé",
    steps: [
      {
        question: "Combien de pharmacies d'officine sont présentes en France ?",
        correctAnswer: 20800,
        unit: "pharmacies",
        explanation: "La France compte environ 20 800 pharmacies d'officine réparties sur l'ensemble du territoire."
      },
      {
        question: "Combien de clients une pharmacie reçoit-elle en moyenne par jour ?",
        correctAnswer: 120,
        unit: "clients",
        explanation: "Une pharmacie française reçoit en moyenne 120 clients par jour, avec des variations importantes selon la localisation et la taille de l'établissement."
      },
      {
        question: "Combien de boîtes de médicaments sont délivrées en moyenne par client ?",
        correctAnswer: 5.2,
        unit: "boîtes",
        explanation: "En moyenne, chaque client se voit délivrer 5,2 boîtes de médicaments lors d'une visite en pharmacie (incluant les traitements chroniques qui comportent souvent plusieurs médicaments)."
      },
      {
        question: "Combien de médicaments sont délivrés chaque jour en officine en France ?",
        correctAnswer: 13,
        unit: "millions",
        explanation: "En multipliant le nombre de pharmacies (20 800) par le nombre moyen de clients quotidiens (120) puis par le nombre moyen de boîtes par client (5,2), on obtient environ 13 millions de boîtes de médicaments délivrées chaque jour."
      }
    ]
  },
  {
    id: "119",
    type: "multistep",
    question: "Combien d'enfants sont suivis par un orthodontiste chaque année ?",
    finalExplanation: "Environ 1,7 million d'enfants sont suivis par un orthodontiste chaque année en France, représentant près d'un quart des enfants en âge de bénéficier de ce type de traitement.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'enfants âgés de 7 à 16 ans y a-t-il en France ?",
        correctAnswer: 7.8,
        unit: "millions",
        explanation: "La France compte environ 7,8 millions d'enfants âgés de 7 à 16 ans, la principale tranche d'âge concernée par les traitements orthodontiques."
      },
      {
        question: "Quel pourcentage de ces enfants présentent des problèmes dentaires nécessitant un traitement orthodontique ?",
        correctAnswer: 35,
        unit: "%",
        explanation: "Selon les études épidémiologiques, environ 35% des enfants présentent des problèmes dentaires qui pourraient bénéficier d'un traitement orthodontique."
      },
      {
        question: "Parmi les enfants ayant besoin d'un traitement orthodontique, quel pourcentage en bénéficie effectivement ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des enfants ayant besoin d'un traitement orthodontique en bénéficient effectivement, les autres n'y ayant pas accès pour des raisons financières, géographiques ou de choix familial."
      },
      {
        question: "Combien d'enfants sont suivis par un orthodontiste chaque année ?",
        correctAnswer: 1.7,
        unit: "million",
        explanation: "En multipliant la population concernée (7,8 millions) par le taux de besoin (35%) puis par le taux d'accès aux soins (62%), on obtient environ 1,7 million d'enfants suivis en orthodontie."
      }
    ]
  },
  {
    id: "120",
    type: "multistep",
    question: "Combien de personnes ont un rendez-vous médical reporté ou annulé chaque jour en France ?",
    finalExplanation: "Environ 290 000 rendez-vous médicaux sont reportés ou annulés chaque jour en France, ce qui pose des problèmes d'organisation pour le système de santé et d'accès aux soins pour les patients.",
    theme: "santé",
    steps: [
      {
        question: "Combien de rendez-vous médicaux sont programmés chaque jour en France ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "Environ 1,3 million de rendez-vous médicaux (généralistes, spécialistes, dentistes, etc.) sont programmés chaque jour en France."
      },
      {
        question: "Quel est le taux d'annulation et de report des rendez-vous médicaux ?",
        correctAnswer: 22.3,
        unit: "%",
        explanation: "Le taux d'annulation et de report des rendez-vous médicaux est d'environ 22,3%, incluant les annulations par les patients et par les professionnels de santé."
      },
      {
        question: "Combien de personnes ont un rendez-vous médical reporté ou annulé chaque jour en France ?",
        correctAnswer: 290000,
        unit: "personnes",
        explanation: "En multipliant le nombre total de rendez-vous quotidiens (1,3 million) par le taux d'annulation et de report (22,3%), on obtient environ 290 000 rendez-vous reportés ou annulés chaque jour."
      }
    ]
  }
];

