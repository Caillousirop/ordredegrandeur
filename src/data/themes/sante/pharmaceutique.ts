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
  },
  {
    id: "p1",
    type: "multistep",
    question: "Combien de boîtes de Doliprane sont vendues chaque année en France ?",
    finalExplanation: "Environ 520 millions de boîtes de Doliprane (ou de ses génériques à base de paracétamol) sont vendues chaque année en France, témoignant de la place considérable de ce médicament dans la consommation pharmaceutique nationale.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Combien de boîtes de médicaments contenant du paracétamol sont consommées en moyenne par personne et par an ?",
        correctAnswer: 7.6,
        unit: "boîtes",
        explanation: "En moyenne, chaque Français consomme environ 7,6 boîtes de médicaments contenant du paracétamol par an (toutes marques confondues)."
      },
      {
        question: "Quelle est la part de marché du Doliprane parmi les médicaments à base de paracétamol ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Le Doliprane (marque commerciale du laboratoire Sanofi) détient environ 65% du marché des médicaments à base de paracétamol en France, le reste étant occupé par les génériques et d'autres marques."
      },
      {
        question: "Quel est le nombre total de boîtes de Doliprane vendues chaque année en France ?",
        correctAnswer: 336,
        unit: "millions",
        explanation: "En multipliant la population (68 millions) par la consommation moyenne de paracétamol (7,6 boîtes) puis par la part de marché de Doliprane (65%), on obtient environ 336 millions de boîtes par an."
      }
    ]
  },
  {
    id: "p2",
    type: "multistep",
    question: "Quel est le chiffre d'affaires moyen d'une pharmacie française ?",
    finalExplanation: "Une pharmacie française réalise en moyenne un chiffre d'affaires annuel d'environ 1,9 million d'euros, avec d'importantes variations selon la localisation et la taille de l'officine.",
    theme: "santé",
    steps: [
      {
        question: "Combien de pharmacies d'officine sont implantées en France ?",
        correctAnswer: 20800,
        unit: "pharmacies",
        explanation: "On compte environ 20 800 pharmacies d'officine sur le territoire français."
      },
      {
        question: "Quel est le chiffre d'affaires total du secteur des pharmacies d'officine en France ?",
        correctAnswer: 39.5,
        unit: "milliards d'euros",
        explanation: "Le chiffre d'affaires total du secteur des pharmacies d'officine en France s'élève à environ 39,5 milliards d'euros par an."
      },
      {
        question: "Quel est le chiffre d'affaires moyen d'une pharmacie française ?",
        correctAnswer: 1.9,
        unit: "million d'euros",
        explanation: "En divisant le chiffre d'affaires total du secteur (39,5 milliards d'euros) par le nombre de pharmacies (20 800), on obtient un chiffre d'affaires moyen d'environ 1,9 million d'euros par pharmacie."
      }
    ]
  },
  {
    id: "p3",
    type: "multistep",
    question: "Combien de prescriptions médicales sont remplies chaque année en France ?",
    finalExplanation: "Environ 1,1 milliard de prescriptions médicales sont remplies chaque année dans les pharmacies françaises, témoignant de l'importance du médicament remboursé dans le système de santé.",
    theme: "santé",
    steps: [
      {
        question: "Combien de consultations médicales donnent lieu à une prescription en France chaque année ?",
        correctAnswer: 440,
        unit: "millions",
        explanation: "Environ 440 millions de consultations médicales ont lieu chaque année en France, tous professionnels confondus."
      },
      {
        question: "Quel pourcentage de ces consultations donne lieu à une prescription médicale ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% des consultations médicales en France donnent lieu à au moins une prescription, un taux parmi les plus élevés d'Europe."
      },
      {
        question: "Combien de médicaments différents sont prescrits en moyenne par ordonnance ?",
        correctAnswer: 3.2,
        unit: "médicaments",
        explanation: "Une ordonnance en France contient en moyenne 3,2 médicaments différents, un chiffre qui varie selon la spécialité du prescripteur et l'âge du patient."
      },
      {
        question: "Combien de prescriptions médicales sont remplies chaque année en France ?",
        correctAnswer: 1.1,
        unit: "milliard",
        explanation: "En multipliant le nombre de consultations (440 millions) par le taux de prescription (78%) puis par le nombre moyen de médicaments par ordonnance (3,2), on obtient environ 1,1 milliard de prescriptions de médicaments individuelles par an."
      }
    ]
  },
  {
    id: "p4",
    type: "multistep",
    question: "Combien de vaccins contre la grippe sont administrés chaque année en France ?",
    finalExplanation: "Environ 12 millions de vaccins contre la grippe sont administrés chaque année en France, principalement aux personnes âgées et aux personnes atteintes de pathologies chroniques.",
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
        question: "Quel pourcentage des personnes non à risque se fait vacciner contre la grippe ?",
        correctAnswer: 5.7,
        unit: "%",
        explanation: "Environ 5,7% des personnes non considérées comme à risque se font également vacciner contre la grippe."
      },
      {
        question: "Combien de vaccins contre la grippe sont administrés chaque année en France ?",
        correctAnswer: 12,
        unit: "millions",
        explanation: "En additionnant les personnes à risque vaccinées (68 millions × 29% × 52% ≈ 10,3 millions) et les personnes non à risque vaccinées (68 millions × 71% × 5,7% ≈ 2,7 millions), on obtient environ 12 millions de vaccinations."
      }
    ]
  },
  {
    id: "p5",
    type: "multistep",
    question: "Combien de boîtes de médicaments un senior consomme-t-il par an en moyenne ?",
    finalExplanation: "Un senior de plus de 65 ans consomme en moyenne 38 boîtes de médicaments remboursés par an en France, un chiffre qui témoigne de la polymédication fréquente dans cette population.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes de plus de 65 ans vivent en France ?",
        correctAnswer: 14.4,
        unit: "millions",
        explanation: "La France compte environ 14,4 millions de personnes âgées de 65 ans et plus."
      },
      {
        question: "Quelle est la consommation totale de boîtes de médicaments remboursés en France par an ?",
        correctAnswer: 2.8,
        unit: "milliards",
        explanation: "Environ 2,8 milliards de boîtes de médicaments remboursés sont délivrées chaque année en pharmacie en France."
      },
      {
        question: "Quelle part de cette consommation est attribuable aux personnes de plus de 65 ans ?",
        correctAnswer: 48,
        unit: "%",
        explanation: "Les personnes de plus de 65 ans sont responsables d'environ 48% de la consommation totale de médicaments remboursés en France, bien qu'elles ne représentent qu'environ 21% de la population."
      },
      {
        question: "Combien de boîtes de médicaments un senior consomme-t-il par an en moyenne ?",
        correctAnswer: 38,
        unit: "boîtes",
        explanation: "En divisant la consommation attribuable aux seniors (2,8 milliards × 48% ≈ 1,344 milliard de boîtes) par le nombre de seniors (14,4 millions), on obtient une moyenne d'environ 38 boîtes par senior et par an."
      }
    ]
  },
  {
    id: "p6",
    type: "multistep",
    question: "Quelle est la consommation annuelle d'antibiotiques en France ?",
    finalExplanation: "La France consomme environ 720 tonnes d'antibiotiques par an, ce qui la place parmi les plus gros consommateurs européens malgré une tendance à la baisse ces dernières années.",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française totale ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quelle est la consommation moyenne d'antibiotiques par habitant et par an ?",
        correctAnswer: 19.5,
        unit: "doses définies journalières",
        explanation: "Un Français consomme en moyenne 19,5 doses définies journalières d'antibiotiques par an, selon les données de l'ANSM. Une dose définie journalière est l'unité de mesure standard pour comparer les consommations d'antibiotiques."
      },
      {
        question: "Quelle est la masse moyenne d'antibiotiques par dose définie journalière ?",
        correctAnswer: 0.54,
        unit: "gramme",
        explanation: "Une dose définie journalière d'antibiotiques correspond en moyenne à 0,54 gramme de principe actif, tous types d'antibiotiques confondus."
      },
      {
        question: "Quelle est la consommation annuelle d'antibiotiques en France ?",
        correctAnswer: 720,
        unit: "tonnes",
        explanation: "En multipliant la population (68 millions) par la consommation moyenne (19,5 doses) par la masse moyenne par dose (0,54 gramme) et en convertissant en tonnes, on obtient environ 720 tonnes d'antibiotiques par an."
      }
    ]
  },
  {
    id: "p7",
    type: "multistep",
    question: "Combien de médicaments sont autorisés sur le marché français ?",
    finalExplanation: "Environ 11 000 médicaments différents sont autorisés sur le marché français, mais tous ne sont pas effectivement commercialisés ou remboursés par la Sécurité sociale.",
    theme: "santé",
    steps: [
      {
        question: "Combien de substances actives sont utilisées dans les médicaments en France ?",
        correctAnswer: 3200,
        unit: "substances",
        explanation: "Environ 3 200 substances actives différentes sont utilisées dans les médicaments autorisés en France."
      },
      {
        question: "Combien de formes pharmaceutiques existent en moyenne pour chaque substance active ?",
        correctAnswer: 2.8,
        unit: "formes",
        explanation: "Une substance active est disponible en moyenne sous 2,8 formes pharmaceutiques différentes (comprimé, gélule, solution injectable, pommade, etc.)."
      },
      {
        question: "Combien de dosages différents existe-t-il en moyenne pour chaque forme pharmaceutique d'une substance ?",
        correctAnswer: 1.7,
        unit: "dosages",
        explanation: "Chaque forme pharmaceutique d'une substance active existe en moyenne en 1,7 dosage différent."
      },
      {
        question: "Combien de médicaments différents sont donc autorisés sur le marché français ?",
        correctAnswer: 11000,
        unit: "médicaments",
        explanation: "En multipliant le nombre de substances actives (3 200) par le nombre moyen de formes pharmaceutiques (2,8) par le nombre moyen de dosages (1,7) et en tenant compte de certains produits combinés, on obtient environ 11 000 médicaments différents."
      }
    ]
  },
  {
    id: "p8",
    type: "multistep",
    question: "Quel est le chiffre d'affaires annuel de l'industrie pharmaceutique en France ?",
    finalExplanation: "L'industrie pharmaceutique en France réalise un chiffre d'affaires annuel d'environ 60 milliards d'euros, dont une part importante provient des exportations.",
    theme: "santé",
    steps: [
      {
        question: "Quel est le chiffre d'affaires réalisé sur le marché français par les médicaments remboursables ?",
        correctAnswer: 24,
        unit: "milliards d'euros",
        explanation: "Le marché français des médicaments remboursables représente environ 24 milliards d'euros de chiffre d'affaires par an."
      },
      {
        question: "Quel est le chiffre d'affaires réalisé sur le marché français par les médicaments non remboursables ?",
        correctAnswer: 6,
        unit: "milliards d'euros",
        explanation: "Les médicaments non remboursables (automédication, etc.) représentent environ 6 milliards d'euros de chiffre d'affaires annuel sur le marché français."
      },
      {
        question: "Quelle part du chiffre d'affaires de l'industrie pharmaceutique française provient des exportations ?",
        correctAnswer: 50,
        unit: "%",
        explanation: "Environ 50% du chiffre d'affaires total de l'industrie pharmaceutique française provient des exportations, témoignant de la compétitivité internationale du secteur."
      },
      {
        question: "Quel est le chiffre d'affaires annuel total de l'industrie pharmaceutique en France ?",
        correctAnswer: 60,
        unit: "milliards d'euros",
        explanation: "En additionnant le chiffre d'affaires sur le marché domestique (24 + 6 = 30 milliards) et en considérant qu'il représente 50% du total (donc l'autre 50% vient des exportations), on obtient un chiffre d'affaires total d'environ 60 milliards d'euros."
      }
    ]
  },
  {
    id: "p9",
    type: "multistep",
    question: "Combien de laboratoires pharmaceutiques sont implantés en France ?",
    finalExplanation: "Environ 260 laboratoires pharmaceutiques sont implantés en France, allant des multinationales aux petites entreprises spécialisées dans des niches thérapeutiques.",
    theme: "santé",
    steps: [
      {
        question: "Combien de laboratoires pharmaceutiques multinationaux ont une activité significative en France ?",
        correctAnswer: 45,
        unit: "laboratoires",
        explanation: "Environ 45 grands laboratoires pharmaceutiques multinationaux ont une présence significative en France (filiale, site de production ou centre de R&D)."
      },
      {
        question: "Combien de laboratoires pharmaceutiques français de taille moyenne sont actifs sur le marché ?",
        correctAnswer: 75,
        unit: "laboratoires",
        explanation: "On compte environ 75 laboratoires pharmaceutiques français de taille moyenne (entre 50 et 500 salariés)."
      },
      {
        question: "Combien de petits laboratoires pharmaceutiques et entreprises de biotechnologie médicale existent en France ?",
        correctAnswer: 140,
        unit: "entreprises",
        explanation: "Environ 140 petites entreprises pharmaceutiques et de biotechnologie médicale (moins de 50 salariés) complètent le paysage pharmaceutique français."
      },
      {
        question: "Combien de laboratoires pharmaceutiques sont donc implantés en France ?",
        correctAnswer: 260,
        unit: "laboratoires",
        explanation: "En additionnant les multinationales (45), les entreprises de taille moyenne (75) et les petites structures (140), on obtient environ 260 laboratoires pharmaceutiques."
      }
    ]
  },
  {
    id: "p10",
    type: "multistep",
    question: "Combien d'emplois directs représente l'industrie pharmaceutique en France ?",
    finalExplanation: "L'industrie pharmaceutique représente environ 98 000 emplois directs en France, auxquels s'ajoutent de nombreux emplois indirects et induits.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'employés travaillent dans la production pharmaceutique en France ?",
        correctAnswer: 42000,
        unit: "employés",
        explanation: "Environ 42 000 personnes travaillent directement dans la production de médicaments en France (usines, chaînes de conditionnement, etc.)."
      },
      {
        question: "Combien de personnes travaillent dans la recherche et développement pharmaceutique en France ?",
        correctAnswer: 22000,
        unit: "chercheurs",
        explanation: "La R&D pharmaceutique emploie environ 22 000 personnes en France, incluant chercheurs, techniciens et personnel de support."
      },
      {
        question: "Combien de personnes travaillent dans les fonctions commerciales et administratives des laboratoires pharmaceutiques ?",
        correctAnswer: 34000,
        unit: "employés",
        explanation: "Les fonctions commerciales (visiteurs médicaux, marketing) et administratives des laboratoires pharmaceutiques emploient environ 34 000 personnes en France."
      },
      {
        question: "Combien d'emplois directs représente l'industrie pharmaceutique en France ?",
        correctAnswer: 98000,
        unit: "emplois",
        explanation: "En additionnant les effectifs de production (42 000), de R&D (22 000) et des fonctions commerciales et administratives (34 000), l'industrie pharmaceutique représente environ 98 000 emplois directs en France."
      }
    ]
  },
  {
    id: "p11",
    type: "multistep",
    question: "Quelle est la part des médicaments génériques dans le marché pharmaceutique français ?",
    finalExplanation: "Les médicaments génériques représentent environ 38% du volume des médicaments vendus en France et 20% de leur valeur, un taux inférieur à la moyenne européenne malgré les politiques d'encouragement.",
    theme: "santé",
    steps: [
      {
        question: "Quel pourcentage des médicaments prescrits en France sont potentiellement substituables par des génériques ?",
        correctAnswer: 45,
        unit: "%",
        explanation: "Environ 45% des médicaments prescrits en France appartiennent à des classes thérapeutiques où des génériques sont disponibles."
      },
      {
        question: "Parmi ces médicaments substituables, quel est le taux de pénétration effective des génériques ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "Lorsqu'un générique existe, il est effectivement délivré dans environ 83% des cas, grâce notamment au droit de substitution des pharmaciens et aux incitations financières."
      },
      {
        question: "En volume, quelle est donc la part des médicaments génériques dans le marché français ?",
        correctAnswer: 38,
        unit: "%",
        explanation: "En multipliant le pourcentage de médicaments substituables (45%) par le taux de pénétration des génériques (83%), on obtient une part de marché en volume d'environ 38%."
      },
      {
        question: "Quelle est la différence moyenne de prix entre un médicament princeps et son générique ?",
        correctAnswer: 60,
        unit: "%",
        explanation: "En moyenne, un médicament générique est environ 60% moins cher que le médicament princeps (original) correspondant."
      },
      {
        question: "En valeur, quelle est la part des médicaments génériques dans le marché français ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Compte tenu de la différence de prix entre génériques et princeps, la part des génériques en valeur (environ 20%) est nettement inférieure à leur part en volume (38%)."
      }
    ]
  },
  {
    id: "p12",
    type: "simple",
    question: "Combien de pharmacies en ligne agréées existe-t-il en France ?",
    correctAnswer: 720,
    unit: "pharmacies en ligne",
    explanation: "Environ 720 pharmacies en ligne agréées existent en France, toutes étant obligatoirement adossées à une officine physique conformément à la législation française.",
    theme: "santé"
  },
  {
    id: "p13",
    type: "simple",
    question: "Quel est le nombre moyen d'employés dans une pharmacie française ?",
    correctAnswer: 4.2,
    unit: "employés",
    explanation: "Une pharmacie française emploie en moyenne 4,2 personnes, incluant pharmaciens titulaires, pharmaciens assistants et préparateurs en pharmacie.",
    theme: "santé"
  },
  {
    id: "p14",
    type: "simple",
    question: "Quelle est la marge moyenne d'une pharmacie sur un médicament remboursable ?",
    correctAnswer: 25.5,
    unit: "%",
    explanation: "La marge moyenne d'une pharmacie sur un médicament remboursable est d'environ 25,5%, bien que ce pourcentage varie selon le prix du médicament (système de marge dégressive).",
    theme: "santé"
  },
  {
    id: "p15",
    type: "simple",
    question: "Combien d'officines de pharmacie ferment chaque année en France ?",
    correctAnswer: 250,
    unit: "pharmacies",
    explanation: "Environ 250 officines de pharmacie ferment chaque année en France, principalement en raison de difficultés économiques ou de départs à la retraite sans repreneur.",
    theme: "santé"
  },
  {
    id: "p16",
    type: "simple",
    question: "Quel est le prix moyen d'une boîte de médicament remboursable en France ?",
    correctAnswer: 8.50,
    unit: "euros",
    explanation: "Le prix moyen d'une boîte de médicament remboursable en France est d'environ 8,50 euros, avec d'importantes variations selon les catégories thérapeutiques.",
    theme: "santé"
  },
  {
    id: "p17",
    type: "simple",
    question: "Combien de nouvelles molécules médicamenteuses sont approuvées chaque année en France ?",
    correctAnswer: 35,
    unit: "molécules",
    explanation: "Environ 35 nouvelles molécules médicamenteuses reçoivent une autorisation de mise sur le marché chaque année en France, via la procédure européenne centralisée ou nationale.",
    theme: "santé"
  },
  {
    id: "p18",
    type: "simple",
    question: "Quelle est la durée moyenne de développement d'un nouveau médicament ?",
    correctAnswer: 10,
    unit: "années",
    explanation: "Il faut en moyenne 10 ans pour développer un nouveau médicament, depuis la découverte de la molécule jusqu'à sa mise sur le marché, en passant par les différentes phases d'essais cliniques.",
    theme: "santé"
  },
  {
    id: "p19",
    type: "simple",
    question: "Quel est le coût moyen de développement d'un nouveau médicament ?",
    correctAnswer: 1.3,
    unit: "milliard d'euros",
    explanation: "Le développement complet d'un nouveau médicament coûte en moyenne 1,3 milliard d'euros, en incluant le coût des projets qui n'aboutissent pas.",
    theme: "santé"
  },
  {
    id: "p20",
    type: "simple",
    question: "Quel est le nombre annuel de prescriptions d'antibiotiques en France ?",
    correctAnswer: 35,
    unit: "millions",
    explanation: "Environ 35 millions de prescriptions d'antibiotiques sont délivrées chaque année en France, ce qui place le pays parmi les plus gros consommateurs en Europe.",
    theme: "santé"
  },
  {
    id: "p21",
    type: "simple",
    question: "Quel est le pourcentage du PIB français consacré aux dépenses de médicaments ?",
    correctAnswer: 1.8,
    unit: "%",
    explanation: "Les dépenses de médicaments représentent environ 1,8% du PIB français, un pourcentage relativement stable ces dernières années grâce à diverses mesures de maîtrise des coûts.",
    theme: "santé"
  },
  {
    id: "p22",
    type: "simple",
    question: "Quelle est la part des ventes de médicaments réalisée hors ordonnance en France ?",
    correctAnswer: 18,
    unit: "%",
    explanation: "Environ 18% des ventes de médicaments en France sont réalisées hors ordonnance (automédication), un taux inférieur à celui observé dans d'autres pays européens.",
    theme: "santé"
  },
  {
    id: "p23",
    type: "simple",
    question: "Quel est le nombre moyen de médicaments différents consommés par an par un Français ?",
    correctAnswer: 12.6,
    unit: "médicaments",
    explanation: "Un Français consomme en moyenne 12,6 médicaments différents par an, avec d'importantes variations selon l'âge et l'état de santé.",
    theme: "santé"
  },
  {
    id: "p24",
    type: "simple",
    question: "Combien de sites de production pharmaceutique sont actifs en France ?",
    correctAnswer: 320,
    unit: "sites",
    explanation: "La France compte environ 320 sites de production pharmaceutique actifs sur son territoire, faisant du pays l'un des principaux producteurs européens de médicaments.",
    theme: "santé"
  },
  {
    id: "p25",
    type: "simple",
    question: "Quelle est la valeur annuelle des exportations pharmaceutiques françaises ?",
    correctAnswer: 30,
    unit: "milliards d'euros",
    explanation: "Les exportations pharmaceutiques françaises représentent environ 30 milliards d'euros par an, faisant de ce secteur l'un des principaux contributeurs à la balance commerciale positive du pays.",
    theme: "santé"
  },
  {
    id: "p26",
    type: "simple",
    question: "Combien de préparateurs en pharmacie travaillent en France ?",
    correctAnswer: 35000,
    unit: "préparateurs",
    explanation: "Environ 35 000 préparateurs en pharmacie exercent en France, principalement en officine mais aussi dans les pharmacies hospitalières et l'industrie.",
    theme: "santé"
  },
  {
    id: "p27",
    type: "simple",
    question: "Quel est le nombre de pharmacies pour 100 000 habitants en France ?",
    correctAnswer: 32,
    unit: "pharmacies",
    explanation: "La France compte environ 32 pharmacies pour 100 000 habitants, un ratio supérieur à la moyenne européenne.",
    theme: "santé"
  },
  {
    id: "p28",
    type: "simple",
    question: "Quelle proportion des Français a recours à l'automédication au moins une fois par mois ?",
    correctAnswer: 58,
    unit: "%",
    explanation: "Environ 58% des Français déclarent recourir à l'automédication au moins une fois par mois, principalement pour des problèmes bénins comme les douleurs ou les rhumes.",
    theme: "santé"
  },
  {
    id: "p29",
    type: "simple",
    question: "Quel est le nombre de références de médicaments disponibles dans une pharmacie moyenne ?",
    correctAnswer: 4200,
    unit: "références",
    explanation: "Une pharmacie française dispose en moyenne de 4 200 références de médicaments différentes dans son stock.",
    theme: "santé"
  },
  {
    id: "p30",
    type: "simple",
    question: "Quel est le temps d'attente moyen pour obtenir un médicament en rupture de stock ?",
    correctAnswer: 18,
    unit: "jours",
    explanation: "Lorsqu'un médicament est en rupture de stock, le délai moyen pour le réapprovisionner est d'environ 18 jours, bien que ce délai puisse varier considérablement selon les produits.",
    theme: "santé"
  },

  // Nouvelles questions à étapes
  {
    id: "sante-multistep-pharma-1",
    type: "multistep",
    question: "Combien de boîtes de Doliprane sont vendues chaque année en France ?",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67500000,
        unit: "personnes",
        explanation: "La population française est d'environ 67,5 millions de personnes."
      },
      {
        question: "Combien de boîtes de paracétamol (dont le Doliprane) une personne consomme-t-elle en moyenne par an ?",
        correctAnswer: 3.8,
        unit: "boîtes",
        explanation: "En moyenne, une personne consomme 3,8 boîtes de paracétamol par an en France."
      },
      {
        question: "Quelle est la part de marché du Doliprane parmi les médicaments à base de paracétamol ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "Le Doliprane détient environ 75% de part de marché parmi les médicaments à base de paracétamol en France."
      },
      {
        question: "Combien de boîtes de Doliprane sont vendues chaque année en France ?",
        correctAnswer: 192375000,
        unit: "boîtes",
        explanation: "En multipliant la population (67,5 millions) par la consommation moyenne de paracétamol (3,8 boîtes) par la part de marché du Doliprane (75%), on obtient environ 192,375 millions de boîtes de Doliprane vendues par an."
      }
    ],
    finalExplanation: "En France, environ 192,375 millions de boîtes de Doliprane sont vendues chaque année, ce qui en fait l'un des médicaments les plus consommés dans le pays."
  },
  {
    id: "sante-multistep-pharma-2",
    type: "multistep",
    question: "Quel est le chiffre d'affaires moyen d'une pharmacie française ?",
    theme: "sante",
    steps: [
      {
        question: "Combien y a-t-il de pharmacies en France ?",
        correctAnswer: 21000,
        unit: "pharmacies",
        explanation: "Il y a environ 21 000 pharmacies en France."
      },
      {
        question: "Quel est le chiffre d'affaires total des pharmacies en France ?",
        correctAnswer: 38000000000,
        unit: "euros",
        explanation: "Le chiffre d'affaires total des pharmacies en France est d'environ 38 milliards d'euros."
      },
      {
        question: "Quel est le chiffre d'affaires moyen d'une pharmacie française ?",
        correctAnswer: 1810000,
        unit: "euros",
        explanation: "En divisant le chiffre d'affaires total (38 milliards d'euros) par le nombre de pharmacies (21 000), on obtient un chiffre d'affaires moyen de 1,81 million d'euros par pharmacie."
      }
    ],
    finalExplanation: "En France, une pharmacie réalise en moyenne 1,81 million d'euros de chiffre d'affaires annuel, avec toutefois de grandes disparités selon la localisation et la taille de l'officine."
  },
  {
    id: "sante-multistep-pharma-3",
    type: "multistep",
    question: "Combien de prescriptions médicales sont remplies chaque année en France ?",
    theme: "sante",
    steps: [
      {
        question: "Combien de consultations médicales sont réalisées chaque année en France ?",
        correctAnswer: 550000000,
        unit: "consultations",
        explanation: "Environ 550 millions de consultations médicales sont réalisées chaque année en France."
      },
      {
        question: "Quel pourcentage des consultations médicales donne lieu à une prescription de médicaments ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% des consultations médicales donnent lieu à une prescription de médicaments en France."
      },
      {
        question: "Combien de prescriptions médicales sont remplies chaque année en France ?",
        correctAnswer: 467500000,
        unit: "prescriptions",
        explanation: "En multipliant le nombre de consultations (550 millions) par le pourcentage donnant lieu à une prescription (85%), on obtient environ 467,5 millions de prescriptions par an."
      }
    ],
    finalExplanation: "En France, environ 467,5 millions de prescriptions médicales sont remplies chaque année, ce qui reflète l'importance de la prescription médicamenteuse dans le système de santé français."
  },
  {
    id: "sante-multistep-pharma-4",
    type: "multistep",
    question: "Combien de vaccins contre la grippe sont administrés chaque année en France ?",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67500000,
        unit: "personnes",
        explanation: "La population française est d'environ 67,5 millions de personnes."
      },
      {
        question: "Quel pourcentage de la population est ciblé par les recommandations de vaccination contre la grippe ?",
        correctAnswer: 26,
        unit: "%",
        explanation: "Environ 26% de la population française est ciblée par les recommandations de vaccination contre la grippe (personnes âgées, malades chroniques, femmes enceintes, etc.)."
      },
      {
        question: "Quel est le taux de couverture vaccinale contre la grippe parmi cette population cible ?",
        correctAnswer: 52,
        unit: "%",
        explanation: "Le taux de couverture vaccinale contre la grippe est d'environ 52% parmi la population cible en France."
      },
      {
        question: "Combien de vaccins contre la grippe sont administrés chaque année en France ?",
        correctAnswer: 9126000,
        unit: "vaccins",
        explanation: "En multipliant la population (67,5 millions) par le pourcentage ciblé (26%) par le taux de couverture (52%), on obtient environ 9,126 millions de vaccins administrés par an."
      }
    ],
    finalExplanation: "En France, environ 9,13 millions de vaccins contre la grippe sont administrés chaque année, principalement aux personnes âgées et aux personnes atteintes de maladies chroniques."
  },
  {
    id: "sante-multistep-pharma-5",
    type: "multistep",
    question: "Combien de boîtes de médicaments un senior consomme-t-il par an en moyenne ?",
    theme: "santé",
    steps: [
      {
        question: "Combien de médicaments différents un senior (plus de 65 ans) prend-il quotidiennement en moyenne ?",
        correctAnswer: 3.9,
        unit: "médicaments",
        explanation: "En moyenne, un senior prend 3,9 médicaments différents par jour."
      },
      {
        question: "Combien de boîtes de médicaments cela représente-t-il par mois ?",
        correctAnswer: 4.2,
        unit: "boîtes",
        explanation: "Cela représente en moyenne 4,2 boîtes de médicaments par mois, car certains médicaments sont prescrits pour plusieurs mois."
      },
      {
        question: "Combien de boîtes de médicaments un senior consomme-t-il par an en moyenne ?",
        correctAnswer: 50.4,
        unit: "boîtes",
        explanation: "En multipliant le nombre mensuel de boîtes (4,2) par 12 mois, on obtient environ 50,4 boîtes de médicaments par an."
      }
    ],
    finalExplanation: "En France, un senior consomme en moyenne 50,4 boîtes de médicaments par an, ce qui illustre l'importance de la polymédication chez les personnes âgées et ses enjeux en termes de santé publique."
  },
  {
    id: "sante-multistep-pharma-6",
    type: "multistep",
    question: "Combien d'antibiotiques sont prescrits chaque année en France ?",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67500000,
        unit: "personnes",
        explanation: "La population française est d'environ 67,5 millions de personnes."
      },
      {
        question: "Quel pourcentage de la population reçoit au moins une prescription d'antibiotiques par an ?",
        correctAnswer: 40,
        unit: "%",
        explanation: "Environ 40% de la population française reçoit au moins une prescription d'antibiotiques par an."
      },
      {
        question: "Combien de prescriptions d'antibiotiques une personne traitée reçoit-elle en moyenne par an ?",
        correctAnswer: 1.8,
        unit: "prescriptions",
        explanation: "En moyenne, une personne recevant des antibiotiques obtient 1,8 prescription par an."
      },
      {
        question: "Combien d'antibiotiques sont prescrits chaque année en France ?",
        correctAnswer: 48600000,
        unit: "prescriptions",
        explanation: "En multipliant la population (67,5 millions) par le pourcentage recevant des antibiotiques (40%) par le nombre moyen de prescriptions (1,8), on obtient environ 48,6 millions de prescriptions d'antibiotiques par an."
      }
    ],
    finalExplanation: "En France, environ 48,6 millions de prescriptions d'antibiotiques sont délivrées chaque année, plaçant le pays parmi les plus gros consommateurs d'antibiotiques en Europe, ce qui soulève des questions sur la résistance antimicrobienne."
  },
  {
    id: "sante-multistep-pharma-7",
    type: "multistep",
    question: "Combien de médicaments sont remboursés par la Sécurité Sociale en France ?",
    theme: "santé",
    steps: [
      {
        question: "Combien de médicaments différents sont commercialisés en France ?",
        correctAnswer: 11000,
        unit: "médicaments",
        explanation: "Environ 11 000 médicaments différents sont commercialisés en France (en considérant les différentes présentations et dosages)."
      },
      {
        question: "Quel pourcentage de ces médicaments est inscrit sur la liste des médicaments remboursables ?",
        correctAnswer: 73,
        unit: "%",
        explanation: "Environ 73% des médicaments commercialisés sont inscrits sur la liste des médicaments remboursables par la Sécurité Sociale."
      },
      {
        question: "Combien de médicaments sont remboursés par la Sécurité Sociale en France ?",
        correctAnswer: 8030,
        unit: "médicaments",
        explanation: "En multipliant le nombre total de médicaments (11 000) par le pourcentage de médicaments remboursables (73%), on obtient environ 8 030 médicaments remboursés."
      }
    ],
    finalExplanation: "En France, environ 8 030 médicaments sont remboursés par la Sécurité Sociale, selon différents taux de remboursement (15%, 30%, 65% ou 100%) en fonction de leur service médical rendu."
  },
  {
    id: "sante-multistep-pharma-8",
    type: "multistep",
    question: "Combien de médicaments génériques sont vendus chaque année en France ?",
    theme: "santé",
    steps: [
      {
        question: "Combien de boîtes de médicaments sont vendues chaque année en France ?",
        correctAnswer: 3000000000,
        unit: "boîtes",
        explanation: "Environ 3 milliards de boîtes de médicaments sont vendues chaque année en France."
      },
      {
        question: "Quelle est la part de marché des médicaments génériques en volume (nombre de boîtes) ?",
        correctAnswer: 39,
        unit: "%",
        explanation: "Les médicaments génériques représentent environ 39% du volume total des médicaments vendus en France."
      },
      {
        question: "Combien de médicaments génériques sont vendus chaque année en France ?",
        correctAnswer: 1170000000,
        unit: "boîtes",
        explanation: "En multipliant le nombre total de boîtes vendues (3 milliards) par la part de marché des génériques (39%), on obtient environ 1,17 milliard de boîtes de médicaments génériques."
      }
    ],
    finalExplanation: "En France, environ 1,17 milliard de boîtes de médicaments génériques sont vendues chaque année, permettant d'importantes économies pour le système de santé tout en maintenant la qualité des soins."
  },
  {
    id: "sante-multistep-pharma-9",
    type: "multistep",
    question: "Combien coûtent les médicaments remboursés aux français chaque année ?",
    theme: "santé",
    steps: [
      {
        question: "Quel est le montant total des dépenses de médicaments en France par an ?",
        correctAnswer: 32000000000,
        unit: "euros",
        explanation: "Les dépenses totales de médicaments en France s'élèvent à environ 32 milliards d'euros par an."
      },
      {
        question: "Quel pourcentage de ces dépenses concerne des médicaments remboursables ?",
        correctAnswer: 91,
        unit: "%",
        explanation: "Environ 91% des dépenses de médicaments concernent des médicaments remboursables par l'Assurance Maladie."
      },
      {
        question: "Quel est le taux de remboursement moyen des médicaments remboursables ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Le taux de remboursement moyen des médicaments remboursables est d'environ 72% en France."
      },
      {
        question: "Combien coûtent les médicaments remboursés aux français chaque année ?",
        correctAnswer: 20995200000,
        unit: "euros",
        explanation: "En multipliant le montant total des dépenses (32 milliards) par le pourcentage de médicaments remboursables (91%) par le taux de remboursement moyen (72%), on obtient environ 20,995 milliards d'euros."
      }
    ],
    finalExplanation: "En France, les médicaments remboursés coûtent environ 20,995 milliards d'euros par an à l'Assurance Maladie, ce qui représente une part significative des dépenses de santé."
  },
  {
    id: "sante-multistep-pharma-10",
    type: "multistep",
    question: "Combien de patients suivent un traitement pour l'hypertension en France ?",
    theme: "santé",
    steps: [
      {
        question: "Quelle est la population adulte française (18 ans et plus) ?",
        correctAnswer: 52000000,
        unit: "personnes",
        explanation: "La population adulte française (18 ans et plus) est d'environ 52 millions de personnes."
      },
      {
        question: "Quel est le taux de prévalence de l'hypertension artérielle chez les adultes en France ?",
        correctAnswer: 30.6,
        unit: "%",
        explanation: "Le taux de prévalence de l'hypertension artérielle chez les adultes français est d'environ 30,6%."
      },
      {
        question: "Parmi les personnes hypertendues, quel pourcentage est diagnostiqué et traité ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% des personnes hypertendues sont diagnostiquées et traitées en France."
      },
      {
        question: "Combien de patients suivent un traitement pour l'hypertension en France ?",
        correctAnswer: 10340800,
        unit: "patients",
        explanation: "En multipliant la population adulte (52 millions) par le taux de prévalence (30,6%) par le pourcentage de patients diagnostiqués et traités (65%), on obtient environ 10 340 800 patients."
      }
    ],
    finalExplanation: "En France, environ 10,34 millions de patients suivent un traitement pour l'hypertension artérielle, ce qui représente le traitement chronique le plus prescrit dans le pays."
  },

  // Nouvelles questions simples
  {
    id: "sante-simple-pharma-1",
    type: "simple",
    question: "Quel est le prix moyen d'une boîte de médicament remboursable en France ?",
    correctAnswer: 10.2,
    unit: "euros",
    explanation: "Le prix moyen d'une boîte de médicament remboursable en France est d'environ 10,20 euros.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-2",
    type: "simple",
    question: "Quel pourcentage des médicaments vendus en France sont des médicaments sans ordonnance ?",
    correctAnswer: 18.5,
    unit: "%",
    explanation: "Environ 18,5% des médicaments vendus en France sont des médicaments sans ordonnance (OTC - Over The Counter).",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-3",
    type: "simple",
    question: "Combien de pharmaciens exercent en France ?",
    correctAnswer: 74000,
    unit: "pharmaciens",
    explanation: "Environ 74 000 pharmaciens exercent en France, tous modes d'exercice confondus (officine, hôpital, industrie, etc.).",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-4",
    type: "simple",
    question: "Quelle est la durée moyenne d'un traitement antibiotique en France ?",
    correctAnswer: 6.8,
    unit: "jours",
    explanation: "La durée moyenne d'un traitement antibiotique en France est de 6,8 jours.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-5",
    type: "simple",
    question: "Quel pourcentage des dépenses de santé est consacré aux médicaments en France ?",
    correctAnswer: 16.9,
    unit: "%",
    explanation: "Environ 16,9% des dépenses de santé en France sont consacrées aux médicaments.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-6",
    type: "simple",
    question: "Quelle est la part de marché des médicaments génériques en France en valeur ?",
    correctAnswer: 20.5,
    unit: "%",
    explanation: "Les médicaments génériques représentent environ 20,5% du marché pharmaceutique français en valeur (euros).",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-7",
    type: "simple",
    question: "Combien de préparateurs en pharmacie travaillent en France ?",
    correctAnswer: 35000,
    unit: "préparateurs",
    explanation: "Environ 35 000 préparateurs en pharmacie travaillent en France, majoritairement en officine.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-8",
    type: "simple",
    question: "Quelle est la consommation moyenne d'antidépresseurs par habitant en France ?",
    correctAnswer: 50,
    unit: "doses journalières pour 1000 habitants",
    explanation: "La consommation moyenne d'antidépresseurs en France est d'environ 50 doses journalières pour 1000 habitants.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-9",
    type: "simple",
    question: "Quel est le budget moyen consacré aux médicaments par an et par Français ?",
    correctAnswer: 475,
    unit: "euros",
    explanation: "Un Français dépense en moyenne 475 euros par an en médicaments, remboursés ou non.",
    theme: "santé"
  },
  {
    id: "sante-simple-pharma-10",
    type: "simple",
    question: "Quel pourcentage des Français achète des médicaments en ligne ?",
    correctAnswer: 7.5,
    unit: "%",
    explanation: "Environ 7,5% des Français achètent des médicaments en ligne via des pharmacies en ligne agréées.",
    theme: "santé"
  }
];
