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
  }
]
