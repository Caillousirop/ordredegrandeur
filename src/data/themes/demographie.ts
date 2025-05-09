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
  }
];
