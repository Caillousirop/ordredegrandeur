import { Question, MultiStepQuestion } from "@/components/types";

export const demographieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Quel est le pourcentage de femmes en France en 2023 ?",
    correctAnswer: 51.7,
    unit: "%",
    explanation: "En France, les femmes représentent environ 51,7% de la population selon les dernières estimations de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "23",
    question: "Quel pourcentage des Français vivent en zone urbaine ?",
    correctAnswer: 81,
    unit: "%",
    explanation: "Selon l'INSEE, environ 81% des Français vivent en zone urbaine en 2023.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "35",
    question: "Combien de jeunes de 16 à 25 ans occupent un emploi en France ?",
    correctAnswer: 3.2,
    unit: "millions",
    explanation: "Environ 3,2 millions de jeunes de 16 à 25 ans occupent un emploi en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "36",
    question: "Combien de femmes âgées de 25 à 54 ans travaillent à temps partiel en France ?",
    correctAnswer: 1.8,
    unit: "millions",
    explanation: "Environ 1,8 millions de femmes âgées de 25 à 54 ans travaillent à temps partiel en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "37",
    type: "multistep",
    question: "Combien d'enfants de moins de 3 ans sont gardés en crèche chaque jour en France ?",
    finalExplanation: "Environ 480 000 enfants de moins de 3 ans sont gardés en crèche chaque jour en France selon les données de la CNAF et de l'INSEE.",
    theme: "démographie",
    steps: [
      {
        question: "Combien d'enfants de moins de 3 ans y a-t-il en France ?",
        correctAnswer: 2.2,
        unit: "millions",
        explanation: "La France compte environ 2,2 millions d'enfants de moins de 3 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces enfants fréquente une structure d'accueil collectif (crèche) ?",
        correctAnswer: 21.8,
        unit: "%",
        explanation: "Environ 21,8% des enfants de moins de 3 ans fréquentent une crèche selon les données de la CNAF."
      },
      {
        question: "Combien d'enfants sont donc gardés en crèche chaque jour ?",
        correctAnswer: 480000,
        unit: "enfants",
        explanation: "En multipliant le nombre d'enfants (2,2 millions) par le pourcentage en crèche (21,8%), on obtient environ 480 000 enfants."
      }
    ]
  },
  {
    id: "38",
    question: "Combien de personnes âgées de plus de 75 ans vivent seules en France ?",
    correctAnswer: 1.7,
    unit: "millions",
    explanation: "Environ 1,7 millions de personnes âgées de plus de 75 ans vivent seules en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "39",
    question: "Combien de cadres travaillent en Île-de-France ?",
    correctAnswer: 1.85,
    unit: "millions",
    explanation: "Environ 1,85 millions de cadres travaillent en Île-de-France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "40",
    type: "multistep",
    question: "Combien de personnes prennent les transports en commun chaque jour pour se rendre au travail ?",
    finalExplanation: "Environ 8,4 millions de personnes utilisent les transports en commun chaque jour pour se rendre au travail en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il d'actifs occupés en France ?",
        correctAnswer: 28,
        unit: "millions",
        explanation: "La France compte environ 28 millions d'actifs occupés selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs utilise principalement les transports en commun pour se rendre au travail ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des actifs utilisent principalement les transports en commun pour leurs trajets domicile-travail."
      },
      {
        question: "Combien de personnes prennent donc les transports en commun pour se rendre au travail ?",
        correctAnswer: 8.4,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs (28 millions) par le pourcentage utilisant les transports en commun (30%), on obtient environ 8,4 millions de personnes."
      }
    ]
  },
  {
    id: "41",
    question: "Combien d'étudiants français travaillent en parallèle de leurs études ?",
    correctAnswer: 1.1,
    unit: "millions",
    explanation: "Environ 1,1 million d'étudiants français travaillent en parallèle de leurs études selon l'Observatoire de la Vie Étudiante.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "42",
    question: "Combien d'apprentis (en alternance) y a-t-il actuellement en France ?",
    correctAnswer: 967000,
    unit: "apprentis",
    explanation: "La France compte environ 967 000 apprentis en alternance selon les données du Ministère du Travail.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "43",
    type: "multistep",
    question: "Combien de personnes travaillent dans le secteur du bâtiment en région Auvergne-Rhône-Alpes ?",
    finalExplanation: "Environ 186 000 personnes travaillent dans le secteur du bâtiment en Auvergne-Rhône-Alpes selon les données de la Fédération Française du Bâtiment.",
    theme: "démographie",
    steps: [
      {
        question: "Combien de personnes travaillent dans le secteur du bâtiment en France ?",
        correctAnswer: 1.2,
        unit: "millions",
        explanation: "En France, environ 1,2 million de personnes travaillent dans le secteur du bâtiment selon la FFB."
      },
      {
        question: "Quelle part de l'économie française représente la région Auvergne-Rhône-Alpes ?",
        correctAnswer: 15.5,
        unit: "%",
        explanation: "La région Auvergne-Rhône-Alpes représente environ 15,5% de l'économie française."
      },
      {
        question: "Combien de personnes travaillent donc dans le bâtiment en Auvergne-Rhône-Alpes ?",
        correctAnswer: 186000,
        unit: "personnes",
        explanation: "En multipliant le nombre total de travailleurs du bâtiment (1,2 million) par la part économique de la région (15,5%), on obtient environ 186 000 personnes."
      }
    ]
  },
  {
    id: "44",
    type: "multistep",
    question: "Combien de femmes de 30 à 45 ans ayant au moins un enfant travaillent à temps plein ?",
    finalExplanation: "Environ 2,6 millions de femmes de 30 à 45 ans ayant au moins un enfant travaillent à temps plein en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de femmes de 30 à 45 ans en France ?",
        correctAnswer: 5.9,
        unit: "millions",
        explanation: "La France compte environ 5,9 millions de femmes âgées de 30 à 45 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces femmes a au moins un enfant ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% des femmes de cette tranche d'âge ont au moins un enfant selon les statistiques démographiques."
      },
      {
        question: "Parmi ces mères, quel pourcentage travaille à temps plein ?",
        correctAnswer: 56,
        unit: "%",
        explanation: "Environ 56% des mères de cette tranche d'âge travaillent à temps plein selon les données du Ministère du Travail."
      },
      {
        question: "Combien de femmes de 30 à 45 ans ayant au moins un enfant travaillent donc à temps plein ?",
        correctAnswer: 2.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de femmes (5,9 millions) par le pourcentage ayant des enfants (78%) par le taux de travail à temps plein (56%), on obtient environ 2,6 millions de femmes."
      }
    ]
  },
  {
    id: "45",
    question: "Combien de personnes cumulent emploi et retraite en France ?",
    correctAnswer: 482000,
    unit: "personnes",
    explanation: "Environ 482 000 personnes cumulent emploi et retraite en France selon les données de la CNAV.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "46",
    question: "Combien d'actifs travaillent régulièrement la nuit en France ?",
    correctAnswer: 3.5,
    unit: "millions",
    explanation: "Environ 3,5 millions d'actifs travaillent régulièrement la nuit en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "47",
    question: "Combien de personnes occupent un emploi à durée déterminée (CDD ou intérim) en France ?",
    correctAnswer: 3.9,
    unit: "millions",
    explanation: "Environ 3,9 millions de personnes occupent un emploi à durée déterminée en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "48",
    type: "multistep",
    question: "Combien de jeunes (15–29 ans) ne sont ni en emploi, ni en études, ni en formation (NEET) en France ?",
    finalExplanation: "Environ 1,6 million de jeunes de 15 à 29 ans sont considérés comme NEET (ni en emploi, ni en études, ni en formation) en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de jeunes de 15 à 29 ans en France ?",
        correctAnswer: 11.2,
        unit: "millions",
        explanation: "La France compte environ 11,2 millions de jeunes âgés de 15 à 29 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces jeunes sont des NEET (ni en emploi, ni en études, ni en formation) ?",
        correctAnswer: 14.3,
        unit: "%",
        explanation: "Environ 14,3% des jeunes de 15 à 29 ans sont des NEET selon les données d'Eurostat."
      },
      {
        question: "Combien de jeunes sont donc considérés comme NEET en France ?",
        correctAnswer: 1.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de jeunes (11,2 millions) par le pourcentage de NEET (14,3%), on obtient environ 1,6 million de jeunes."
      }
    ]
  },
  {
    id: "49",
    question: "Combien de personnes travaillent dans le secteur agricole en France ?",
    correctAnswer: 866000,
    unit: "personnes",
    explanation: "Environ 866 000 personnes travaillent dans le secteur agricole en France selon les données du Ministère de l'Agriculture.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "50",
    question: "Combien de salariés télétravaillent au moins un jour par semaine en France ?",
    correctAnswer: 7.4,
    unit: "millions",
    explanation: "Environ 7,4 millions de salariés télétravaillent au moins un jour par semaine en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "51",
    question: "Combien de femmes âgées de 50 à 64 ans sont en recherche d'emploi ?",
    correctAnswer: 384000,
    unit: "femmes",
    explanation: "Environ 384 000 femmes âgées de 50 à 64 ans sont en recherche d'emploi en France selon les données de Pôle Emploi.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "52",
    question: "Combien d'hommes âgés de 18 à 30 ans sont au chômage en France ?",
    correctAnswer: 678000,
    unit: "hommes",
    explanation: "Environ 678 000 hommes âgés de 18 à 30 ans sont au chômage en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "53",
    question: "Combien de travailleurs sont en situation de handicap et en emploi en France ?",
    correctAnswer: 1.1,
    unit: "millions",
    explanation: "Environ 1,1 million de travailleurs en situation de handicap sont en emploi en France selon les données de l'AGEFIPH.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "54",
    question: "Combien de personnes travaillent dans les services à la personne en France ?",
    correctAnswer: 1.7,
    unit: "millions",
    explanation: "Environ 1,7 million de personnes travaillent dans les services à la personne en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "dem-101",
    type: "simple",
    question: "Quelle est la proportion de la population française vivant en zone urbaine ?",
    correctAnswer: 81,
    unit: "%",
    explanation: "Environ 81% de la population française vit en zone urbaine selon la définition de l'INSEE.",
    theme: "demographie"
  },
  {
    id: "dem-102",
    type: "simple",
    question: "Quelle est l'espérance de vie d'un homme à la naissance en France ?",
    correctAnswer: 79.8,
    unit: "ans",
    explanation: "L'espérance de vie à la naissance pour un homme en France est de 79,8 ans selon les dernières données disponibles.",
    theme: "demographie"
  },
  {
    id: "dem-103",
    type: "simple",
    question: "Quelle est la proportion de familles monoparentales parmi l'ensemble des familles en France ?",
    correctAnswer: 24,
    unit: "%",
    explanation: "Les familles monoparentales représentent environ 24% de l'ensemble des familles avec enfants en France.",
    theme: "demographie"
  },
  {
    id: "dem-104",
    type: "simple",
    question: "Quelle est la densité de population moyenne en France métropolitaine ?",
    correctAnswer: 119,
    unit: "habitants par km²",
    explanation: "La France métropolitaine a une densité moyenne de 119 habitants par kilomètre carré, avec de fortes disparités régionales.",
    theme: "demographie"
  },
  {
    id: "dem-105",
    type: "simple",
    question: "Quel est le pourcentage de la population française ayant plus de 65 ans ?",
    correctAnswer: 20.5,
    unit: "%",
    explanation: "Les personnes âgées de 65 ans et plus représentent environ 20,5% de la population française totale.",
    theme: "demographie"
  },
  {
    id: "dem-106",
    type: "simple",
    question: "Quel est le taux de natalité en France (nombre de naissances pour 1000 habitants) ?",
    correctAnswer: 10.9,
    unit: "naissances pour 1000 habitants",
    explanation: "Le taux de natalité en France est de 10,9 naissances pour 1000 habitants, un chiffre en baisse depuis plusieurs années.",
    theme: "demographie"
  },
  {
    id: "dem-107",
    type: "simple",
    question: "Quelle est la part des immigrés dans la population française ?",
    correctAnswer: 10.2,
    unit: "%",
    explanation: "Les immigrés représentent environ 10,2% de la population totale en France selon les définitions de l'INSEE.",
    theme: "demographie"
  },
  {
    id: "dem-108",
    type: "simple",
    question: "Quelle est la taille moyenne d'un ménage en France ?",
    correctAnswer: 2.2,
    unit: "personnes",
    explanation: "Un ménage en France compte en moyenne 2,2 personnes, un chiffre en baisse constante depuis plusieurs décennies.",
    theme: "demographie"
  },
  {
    id: "dem-109",
    type: "simple",
    question: "Quel est l'âge médian de la population française ?",
    correctAnswer: 41.7,
    unit: "ans",
    explanation: "L'âge médian de la population française est de 41,7 ans, ce qui signifie que la moitié de la population a plus de cet âge et l'autre moitié a moins.",
    theme: "demographie"
  },
  {
    id: "dem-110",
    type: "simple",
    question: "Quel est le pourcentage de la population française vivant en région parisienne (Île-de-France) ?",
    correctAnswer: 18.3,
    unit: "%",
    explanation: "Environ 18,3% de la population française vit en région parisienne (Île-de-France), qui reste la région la plus peuplée du pays.",
    theme: "demographie"
  },
  {
    id: "dem-ms-001",
    type: "multistep",
    question: "Combien de personnes déménagent chaque année en France pour changer de région ?",
    finalExplanation: "Environ 1,7 million de personnes déménagent chaque année pour changer de région en France, contribuant à la mobilité géographique de la population française.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La France compte environ 68 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de la population française déménage chaque année (tous types de déménagements confondus) ?",
        correctAnswer: 10.5,
        unit: "%",
        explanation: "Environ 10,5% de la population française déménage chaque année, ce qui représente une mobilité résidentielle importante."
      },
      {
        question: "Parmi les personnes qui déménagent, quel pourcentage change de région ?",
        correctAnswer: 24,
        unit: "%",
        explanation: "24% des déménagements en France impliquent un changement de région administrative."
      },
      {
        question: "Combien de personnes déménagent donc chaque année en France pour changer de région ?",
        correctAnswer: 1.7,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le taux de déménagement (10,5%) puis par le pourcentage de changement de région (24%), on obtient environ 1,7 million de personnes."
      }
    ]
  },
  {
    id: "dem-ms-002",
    type: "multistep",
    question: "Combien d'écoliers font leur entrée en CP chaque année en France ?",
    finalExplanation: "Environ 820 000 enfants entrent en CP chaque année en France, marquant le début de leur scolarité en école élémentaire.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il de naissances par an en France en moyenne ?",
        correctAnswer: 740000,
        unit: "naissances",
        explanation: "La France enregistre en moyenne 740 000 naissances par an selon les dernières données disponibles."
      },
      {
        question: "Quel pourcentage d'une génération est scolarisé à l'âge de l'entrée au CP (6 ans) ?",
        correctAnswer: 99.8,
        unit: "%",
        explanation: "Environ 99,8% des enfants d'une génération sont scolarisés à l'âge de l'entrée en CP, l'école étant obligatoire à cet âge."
      },
      {
        question: "En tenant compte de l'immigration et des enfants scolarisés plus tôt ou plus tard, quel facteur d'ajustement faut-il appliquer ?",
        correctAnswer: 1.11,
        unit: "facteur",
        explanation: "Un facteur d'ajustement d'environ 1,11 est nécessaire pour tenir compte de l'immigration et des variations d'âge d'entrée en CP."
      },
      {
        question: "Combien d'enfants entrent donc en CP chaque année en France ?",
        correctAnswer: 820000,
        unit: "enfants",
        explanation: "En multipliant le nombre de naissances (740 000) par le taux de scolarisation (99,8%) et par le facteur d'ajustement (1,11), on obtient environ 820 000 enfants."
      }
    ]
  },
  {
    id: "dem-ms-003",
    type: "multistep",
    question: "Quel est le nombre de grands-parents en France ?",
    finalExplanation: "On compte environ 16,4 millions de grands-parents en France, soit près d'un quart de la population totale.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population française âgée de plus de 50 ans ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "Environ 28,5 millions de Français sont âgés de plus de 50 ans, selon les données démographiques récentes."
      },
      {
        question: "Quel pourcentage des personnes de plus de 50 ans a au moins un petit-enfant ?",
        correctAnswer: 57.5,
        unit: "%",
        explanation: "Environ 57,5% des personnes de plus de 50 ans en France ont au moins un petit-enfant."
      },
      {
        question: "Quel est le nombre total de grands-parents en France ?",
        correctAnswer: 16.4,
        unit: "millions",
        explanation: "En multipliant la population de plus de 50 ans (28,5 millions) par le pourcentage ayant des petits-enfants (57,5%), on obtient environ 16,4 millions de grands-parents."
      }
    ]
  },
  {
    id: "dem-ms-004",
    type: "multistep",
    question: "Combien de personnes vivent seules en France ?",
    finalExplanation: "Environ 10,5 millions de personnes vivent seules en France, ce qui représente une part croissante des ménages français.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30.5,
        unit: "millions",
        explanation: "La France compte environ 30,5 millions de ménages selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage des ménages est composé d'une seule personne ?",
        correctAnswer: 34.5,
        unit: "%",
        explanation: "Environ 34,5% des ménages français sont composés d'une seule personne, une proportion en augmentation constante."
      },
      {
        question: "Combien de personnes vivent donc seules en France ?",
        correctAnswer: 10.5,
        unit: "millions",
        explanation: "En multipliant le nombre de ménages (30,5 millions) par le pourcentage de ménages unipersonnels (34,5%), on obtient environ 10,5 millions de personnes vivant seules."
      }
    ]
  },
  {
    id: "dem-ms-005",
    type: "multistep",
    question: "Combien d'enfants vivent dans une famille recomposée en France ?",
    finalExplanation: "Environ 1,7 million d'enfants vivent dans une famille recomposée en France, ce qui représente une réalité sociale importante.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il d'enfants de moins de 18 ans en France ?",
        correctAnswer: 14,
        unit: "millions",
        explanation: "La France compte environ 14 millions d'enfants de moins de 18 ans."
      },
      {
        question: "Quel pourcentage des enfants vit dans une famille recomposée ?",
        correctAnswer: 12.1,
        unit: "%",
        explanation: "Environ 12,1% des enfants en France vivent dans une famille recomposée."
      },
      {
        question: "Combien d'enfants vivent donc dans une famille recomposée ?",
        correctAnswer: 1.7,
        unit: "millions",
        explanation: "En multipliant le nombre d'enfants (14 millions) par le pourcentage vivant dans une famille recomposée (12,1%), on obtient environ 1,7 million d'enfants."
      }
    ]
  },
  {
    id: "dem-ms-006",
    type: "multistep",
    question: "Combien de personnes nées à l'étranger vivent en France ?",
    finalExplanation: "Environ 6,7 millions de personnes nées à l'étranger vivent aujourd'hui en France, représentant près de 10% de la population totale.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population française est née à l'étranger ?",
        correctAnswer: 9.8,
        unit: "%",
        explanation: "Environ 9,8% de la population française est née à l'étranger, selon les dernières données disponibles."
      },
      {
        question: "Combien de personnes nées à l'étranger vivent donc en France ?",
        correctAnswer: 6.7,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de personnes nées à l'étranger (9,8%), on obtient environ 6,7 millions de personnes."
      }
    ]
  },
  {
    id: "dem-ms-007",
    type: "multistep",
    question: "Combien de personnes changent de nom ou de prénom chaque année en France ?",
    finalExplanation: "Environ 32 000 personnes changent de nom ou de prénom chaque année en France, pour diverses raisons personnelles, familiales ou administratives.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population change de nom ou de prénom chaque année ?",
        correctAnswer: 0.047,
        unit: "%",
        explanation: "Environ 0,047% de la population française change de nom ou de prénom chaque année."
      },
      {
        question: "Combien de personnes changent donc de nom ou de prénom chaque année en France ?",
        correctAnswer: 32000,
        unit: "personnes",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de changements de nom ou prénom (0,047%), on obtient environ 32 000 personnes."
      }
    ]
  },
  {
    id: "dem-ms-008",
    type: "multistep",
    question: "Combien de personnes vivent dans des communes de moins de 1000 habitants en France ?",
    finalExplanation: "Environ 9,3 millions de personnes vivent dans des communes de moins de 1 000 habitants en France, témoignant de l'importance de la ruralité dans le pays.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il de communes en France ?",
        correctAnswer: 34955,
        unit: "communes",
        explanation: "La France compte environ 34 955 communes, ce qui en fait l'un des pays avec le plus grand nombre de communes en Europe."
      },
      {
        question: "Quel pourcentage de ces communes a moins de 1000 habitants ?",
        correctAnswer: 73.5,
        unit: "%",
        explanation: "Environ 73,5% des communes françaises ont moins de 1 000 habitants, soit près de 25 700 communes."
      },
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population vit dans ces petites communes ?",
        correctAnswer: 13.7,
        unit: "%",
        explanation: "Environ 13,7% de la population française vit dans des communes de moins de 1 000 habitants."
      },
      {
        question: "Combien de personnes vivent donc dans des communes de moins de 1000 habitants ?",
        correctAnswer: 9.3,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage vivant dans des petites communes (13,7%), on obtient environ 9,3 millions de personnes."
      }
    ]
  },
  {
    id: "dem-ms-009",
    type: "multistep",
    question: "Combien de célibataires âgés de 25 à 40 ans vivent en France ?",
    finalExplanation: "Environ 4,7 millions de célibataires âgés de 25 à 40 ans vivent en France, un segment démographique important.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population française âgée de 25 à 40 ans ?",
        correctAnswer: 12.2,
        unit: "millions",
        explanation: "La France compte environ 12,2 millions de personnes âgées de 25 à 40 ans."
      },
      {
        question: "Quel pourcentage de cette tranche d'âge est célibataire (au sens légal) ?",
        correctAnswer: 38.5,
        unit: "%",
        explanation: "Environ 38,5% des personnes de cette tranche d'âge sont célibataires au sens légal (jamais mariées)."
      },
      {
        question: "Combien de célibataires âgés de 25 à 40 ans vivent donc en France ?",
        correctAnswer: 4.7,
        unit: "millions",
        explanation: "En multipliant la population de cette tranche d'âge (12,2 millions) par le pourcentage de célibataires (38,5%), on obtient environ 4,7 millions de célibataires âgés de 25 à 40 ans."
      }
    ]
  },
  {
    id: "dem-ms-010",
    type: "multistep",
    question: "Combien de jumeaux naissent chaque année en France ?",
    finalExplanation: "Environ 22 000 paires de jumeaux naissent chaque année en France, représentant une part croissante des naissances.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il de naissances par an en France ?",
        correctAnswer: 740000,
        unit: "naissances",
        explanation: "La France enregistre en moyenne 740 000 naissances par an selon les dernières données disponibles."
      },
      {
        question: "Quelle est la fréquence des naissances gémellaires (en pourcentage des accouchements) ?",
        correctAnswer: 3.0,
        unit: "%",
        explanation: "Environ 3,0% des accouchements en France concernent des jumeaux, un chiffre en augmentation notamment en raison des procréations médicalement assistées."
      },
      {
        question: "Combien de paires de jumeaux naissent donc chaque année en France ?",
        correctAnswer: 22000,
        unit: "paires",
        explanation: "En calculant 3,0% des 740 000 naissances, on obtient environ 22 000 paires de jumeaux par an."
      }
    ]
  },
  {
    id: "dem-ms-011",
    type: "multistep",
    question: "Combien de personnes ont plus de 100 ans en France ?",
    finalExplanation: "Environ 32 000 personnes ont plus de 100 ans en France, un nombre qui a considérablement augmenté au cours des dernières décennies.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population française a plus de 100 ans ?",
        correctAnswer: 0.047,
        unit: "%",
        explanation: "Environ 0,047% de la population française a plus de 100 ans."
      },
      {
        question: "Combien de personnes ont donc plus de 100 ans en France ?",
        correctAnswer: 32000,
        unit: "personnes",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de centenaires (0,047%), on obtient environ 32 000 personnes."
      }
    ]
  },
  {
    id: "dem-ms-012",
    type: "multistep",
    question: "Combien de ménages français possèdent une résidence secondaire ?",
    finalExplanation: "Environ 3,6 millions de ménages français possèdent une résidence secondaire, soit près d'un ménage sur huit.",
    theme: "demographie",
    steps: [
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30.5,
        unit: "millions",
        explanation: "La France compte environ 30,5 millions de ménages selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage des ménages possède une résidence secondaire ?",
        correctAnswer: 11.8,
        unit: "%",
        explanation: "Environ 11,8% des ménages français possèdent une résidence secondaire."
      },
      {
        question: "Combien de ménages possèdent donc une résidence secondaire ?",
        correctAnswer: 3.6,
        unit: "millions",
        explanation: "En multipliant le nombre de ménages (30,5 millions) par le pourcentage possédant une résidence secondaire (11,8%), on obtient environ 3,6 millions de ménages."
      }
    ]
  },
  {
    id: "dem-ms-013",
    type: "multistep",
    question: "Combien de personnes obtiennent la nationalité française chaque année ?",
    finalExplanation: "Environ 95 000 personnes obtiennent la nationalité française chaque année, par naturalisation, mariage ou autres procédures.",
    theme: "demographie",
    steps: [
      {
        question: "Combien d'étrangers vivent en France ?",
        correctAnswer: 5.2,
        unit: "millions",
        explanation: "Environ 5,2 millions d'étrangers vivent en France selon les dernières données disponibles."
      },
      {
        question: "Quel pourcentage des étrangers résidant en France obtient la nationalité française chaque année ?",
        correctAnswer: 1.83,
        unit: "%",
        explanation: "Environ 1,83% des étrangers résidant en France obtiennent la nationalité française chaque année."
      },
      {
        question: "Combien de personnes obtiennent donc la nationalité française chaque année ?",
        correctAnswer: 95000,
        unit: "personnes",
        explanation: "En multipliant le nombre d'étrangers (5,2 millions) par le pourcentage obtenant la nationalité (1,83%), on obtient environ 95 000 personnes par an."
      }
    ]
  },
  {
    id: "dem-ms-014",
    type: "multistep",
    question: "Combien de personnes pratiquent une religion en France ?",
    finalExplanation: "Environ 39,8 millions de personnes pratiquent ou se déclarent appartenir à une religion en France, soit environ 58,5% de la population.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population française se déclare croyant ou pratiquant d'une religion ?",
        correctAnswer: 58.5,
        unit: "%",
        explanation: "Environ 58,5% des Français se déclarent croyants ou pratiquants d'une religion, tous cultes confondus."
      },
      {
        question: "Combien de personnes pratiquent donc une religion en France ?",
        correctAnswer: 39.8,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de croyants ou pratiquants (58,5%), on obtient environ 39,8 millions de personnes."
      }
    ]
  },
  {
    id: "dem-ms-015",
    type: "multistep",
    question: "Combien de personnes sont inscrites sur les listes électorales en France ?",
    finalExplanation: "Environ 49 millions de Français sont inscrites sur les listes électorales, représentant la grande majorité des citoyens en âge de voter.",
    theme: "demographie",
    steps: [
      {
        question: "Quelle est la population totale de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population est majeure (18 ans et plus) ?",
        correctAnswer: 79,
        unit: "%",
        explanation: "Environ 79% de la population française est majeure (18 ans et plus)."
      },
      {
        question: "Parmi les majeurs, quel pourcentage a la nationalité française ?",
        correctAnswer: 94,
        unit: "%",
        explanation: "Environ 94% des majeurs en France ont la nationalité française."
      },
      {
        question: "Parmi les majeurs de nationalité française, quel pourcentage est inscrit sur les listes électorales ?",
        correctAnswer: 97,
        unit: "%",
        explanation: "Environ 97% des majeurs de nationalité française sont inscrits sur les listes électorales."
      },
      {
        question: "Combien de personnes sont donc inscrites sur les listes électorales en France ?",
        correctAnswer: 49,
        unit: "millions",
        explanation: "En multipliant la population totale (68 millions) par le pourcentage de majeurs (79%), puis par le pourcentage de Français parmi les majeurs (94%), puis par le taux d'inscription (97%), on obtient environ 49 millions de personnes."
      }
    ]
  },
  
  {
    id: "dem-s-001",
    type: "simple",
    question: "Quel est l'âge moyen de la population française ?",
    correctAnswer: 42.3,
    unit: "ans",
    explanation: "L'âge moyen de la population française est d'environ 42,3 ans, reflétant le vieillissement progressif de la population.",
    theme: "demographie"
  },
  {
    id: "dem-s-002",
    type: "simple",
    question: "Combien de naissances sont enregistrées chaque jour en France en moyenne ?",
    correctAnswer: 2027,
    unit: "naissances",
    explanation: "En moyenne, environ 2 027 naissances sont enregistrées chaque jour en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-003",
    type: "simple",
    question: "Quel est le pourcentage de la population française ayant moins de 18 ans ?",
    correctAnswer: 21.6,
    unit: "%",
    explanation: "Les moins de 18 ans représentent environ 21,6% de la population française.",
    theme: "demographie"
  },
  {
    id: "dem-s-004",
    type: "simple",
    question: "Quel est le taux de fécondité en France (nombre d'enfants par femme) ?",
    correctAnswer: 1.83,
    unit: "enfant(s) par femme",
    explanation: "Le taux de fécondité en France est d'environ 1,83 enfant par femme, légèrement en dessous du seuil de renouvellement des générations (2,1).",
    theme: "demographie"
  },
  {
    id: "dem-s-005",
    type: "simple",
    question: "Quelle est la proportion des femmes dans la population française ?",
    correctAnswer: 51.7,
    unit: "%",
    explanation: "Les femmes représentent environ 51,7% de la population française.",
    theme: "demographie"
  },
  {
    id: "dem-s-006",
    type: "simple",
    question: "Quelle est l'espérance de vie à la naissance pour une femme en France ?",
    correctAnswer: 85.4,
    unit: "ans",
    explanation: "L'espérance de vie à la naissance pour une femme en France est d'environ 85,4 ans.",
    theme: "demographie"
  },
  {
    id: "dem-s-007",
    type: "simple",
    question: "Combien d'enfants naissent par césarienne en France chaque année ?",
    correctAnswer: 148000,
    unit: "naissances",
    explanation: "Environ 148 000 enfants naissent par césarienne en France chaque année, soit environ 20% des naissances totales.",
    theme: "demographie"
  },
  {
    id: "dem-s-008",
    type: "simple",
    question: "Quel est le nombre moyen de personnes par ménage en France ?",
    correctAnswer: 2.2,
    unit: "personnes",
    explanation: "Un ménage français compte en moyenne 2,2 personnes, un chiffre en baisse constante depuis plusieurs décennies.",
    theme: "demographie"
  },
  {
    id: "dem-s-009",
    type: "simple",
    question: "Quelle est la population de Paris intra-muros ?",
    correctAnswer: 2.15,
    unit: "millions",
    explanation: "Paris intra-muros (les 20 arrondissements) compte environ 2,15 millions d'habitants.",
    theme: "demographie"
  },
  {
    id: "dem-s-010",
    type: "simple",
    question: "Quel est le pourcentage de familles monoparentales en France ?",
    correctAnswer: 24,
    unit: "%",
    explanation: "Les familles monoparentales représentent environ 24% de l'ensemble des familles avec enfants en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-011",
    type: "simple",
    question: "Quelle est la densité de population moyenne en France métropolitaine ?",
    correctAnswer: 119,
    unit: "habitants par km²",
    explanation: "La France métropolitaine a une densité moyenne de 119 habitants par kilomètre carré, avec de fortes disparités régionales.",
    theme: "demographie"
  },
  {
    id: "dem-s-012",
    type: "simple",
    question: "Combien d'enfants sont adoptés chaque année en France ?",
    correctAnswer: 3500,
    unit: "enfants",
    explanation: "Environ 3 500 enfants sont adoptés chaque année en France, toutes formes d'adoption confondues.",
    theme: "demographie"
  },
  {
    id: "dem-s-013",
    type: "simple",
    question: "Quel est l'âge moyen de la première maternité en France ?",
    correctAnswer: 30.9,
    unit: "ans",
    explanation: "L'âge moyen de la première maternité en France est d'environ 30,9 ans, un âge qui ne cesse d'augmenter.",
    theme: "demographie"
  },
  {
    id: "dem-s-014",
    type: "simple",
    question: "Quel est le pourcentage de la population française qui vit en zone rurale ?",
    correctAnswer: 19,
    unit: "%",
    explanation: "Environ 19% de la population française vit en zone rurale selon la définition de l'INSEE.",
    theme: "demographie"
  },
  {
    id: "dem-s-015",
    type: "simple",
    question: "Combien de mariages sont célébrés chaque année en France ?",
    correctAnswer: 235000,
    unit: "mariages",
    explanation: "Environ 235 000 mariages sont célébrés chaque année en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-016",
    type: "simple",
    question: "Quel est le nombre de PACS conclus chaque année en France ?",
    correctAnswer: 192000,
    unit: "PACS",
    explanation: "Environ 192 000 PACS sont conclus chaque année en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-017",
    type: "simple",
    question: "Quel pourcentage de la population française a plus de 65 ans ?",
    correctAnswer: 20.5,
    unit: "%",
    explanation: "Les personnes âgées de 65 ans et plus représentent environ 20,5% de la population française.",
    theme: "demographie"
  },
  {
    id: "dem-s-018",
    type: "simple",
    question: "Combien de divorces sont prononcés chaque année en France ?",
    correctAnswer: 101500,
    unit: "divorces",
    explanation: "Environ 101 500 divorces sont prononcés chaque année en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-019",
    type: "simple",
    question: "Quel est le taux de mortalité infantile en France (pour 1000 naissances) ?",
    correctAnswer: 3.5,
    unit: "pour 1000",
    explanation: "Le taux de mortalité infantile en France est d'environ 3,5 décès pour 1 000 naissances vivantes.",
    theme: "demographie"
  },
  {
    id: "dem-s-020",
    type: "simple",
    question: "Combien de personnes changent de département de résidence chaque année en France ?",
    correctAnswer: 4.3,
    unit: "millions",
    explanation: "Environ 4,3 millions de personnes changent de département de résidence chaque année en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-021",
    type: "simple",
    question: "Quelle est la part de la population française née à l'étranger ?",
    correctAnswer: 10.2,
    unit: "%",
    explanation: "Environ 10,2% de la population française est née à l'étranger.",
    theme: "demographie"
  },
  {
    id: "dem-s-022",
    type: "simple",
    question: "Combien d'immigrants s'installent en France chaque année en moyenne ?",
    correctAnswer: 258000,
    unit: "personnes",
    explanation: "En moyenne, environ 258 000 immigrants s'installent en France chaque année.",
    theme: "demographie"
  },
  {
    id: "dem-s-023",
    type: "simple",
    question: "Quelle est la part des logements qui sont des résidences secondaires en France ?",
    correctAnswer: 9.6,
    unit: "%",
    explanation: "Environ 9,6% des logements en France sont des résidences secondaires ou occasionnelles.",
    theme: "demographie"
  },
  {
    id: "dem-s-024",
    type: "simple",
    question: "Quel est l'âge médian en France ?",
    correctAnswer: 41.7,
    unit: "ans",
    explanation: "L'âge médian en France est de 41,7 ans, ce qui signifie que la moitié de la population a moins de cet âge et l'autre moitié a plus.",
    theme: "demographie"
  },
  {
    id: "dem-s-025",
    type: "simple",
    question: "Combien de bébés naissent prématurément chaque année en France ?",
    correctAnswer: 54000,
    unit: "bébés",
    explanation: "Environ 54 000 bébés naissent prématurément chaque année en France, soit environ 7,3% des naissances.",
    theme: "demographie"
  },
  {
    id: "dem-s-026",
    type: "simple",
    question: "Quelle est la proportion de la population française vivant en région parisienne (Île-de-France) ?",
    correctAnswer: 18.3,
    unit: "%",
    explanation: "Environ 18,3% de la population française vit en région parisienne (Île-de-France).",
    theme: "demographie"
  },
  {
    id: "dem-s-027",
    type: "simple",
    question: "Combien de décès sont enregistrés chaque année en France ?",
    correctAnswer: 613000,
    unit: "décès",
    explanation: "Environ 613 000 décès sont enregistrés chaque année en France.",
    theme: "demographie"
  },
  {
    id: "dem-s-028",
    type: "simple",
    question: "Quelle est la proportion de personnes vivant sous le seuil de pauvreté en France ?",
    correctAnswer: 14.5,
    unit: "%",
    explanation: "Environ 14,5% de la population française vit sous le seuil de pauvreté.",
    theme: "demographie"
  },
  {
    id: "dem-s-029",
    type: "simple",
    question: "Quel est le nombre moyen d'enfants par famille en France ?",
    correctAnswer: 1.8,
    unit: "enfant(s)",
    explanation: "Les familles françaises comptent en moyenne 1,8 enfant.",
    theme: "demographie"
  },
  {
    id: "dem-s-030",
    type: "simple",
    question: "Combien y a-t-il de naissances multiples (jumeaux, triplés...) chaque année en France ?",
    correctAnswer: 22750,
    unit: "naissances",
    explanation: "La France enregistre environ 22 750 naissances multiples chaque année, principalement des jumeaux.",
    theme: "demographie"
  }
];
