import { Question, MultiStepQuestion } from "@/components/types";

export const environnementQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "2",
    question: "Quelle est la température moyenne mondiale en 2023 (en degrés Celsius) ?",
    correctAnswer: 14.8,
    unit: "°C",
    explanation: "La température moyenne mondiale en 2023 était d'environ 14,8°C, ce qui est plus élevé que la moyenne pré-industrielle.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "4",
    question: "Quel est le pourcentage de la surface terrestre couverte par les océans ?",
    correctAnswer: 71,
    unit: "%",
    explanation: "Les océans couvrent environ 71% de la surface terrestre.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "5",
    question: "Combien de litres d'eau consomme en moyenne un Français par jour ?",
    correctAnswer: 148,
    unit: "litres",
    explanation: "Un Français consomme en moyenne 148 litres d'eau par jour pour son usage domestique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "6",
    type: "multistep",
    question: "Combien de bouteilles d'eau sont consommées en France par an par les touristes sur la Côte d'Azur ?",
    finalExplanation: "Cette estimation de 96 millions de bouteilles d'eau consommées par les touristes sur la Côte d'Azur est une approximation basée sur les flux touristiques, la durée moyenne de séjour et les habitudes de consommation. Les chiffres réels peuvent varier en fonction des saisons, des conditions météorologiques et des changements dans les habitudes de consommation.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de touristes visitent la Côte d'Azur chaque année ?",
        correctAnswer: 10,
        unit: "millions",
        explanation: "Environ 10 millions de touristes visitent la Côte d'Azur annuellement selon les données du Comité Régional du Tourisme."
      },
      {
        question: "Quelle est la durée moyenne de séjour d'un touriste sur la Côte d'Azur ?",
        correctAnswer: 5.5,
        unit: "jours",
        explanation: "La durée moyenne de séjour d'un touriste sur la Côte d'Azur est d'environ 5,5 jours d'après les statistiques touristiques régionales."
      },
      {
        question: "Combien de bouteilles d'eau un touriste consomme-t-il en moyenne par jour en période estivale ?",
        correctAnswer: 1.75,
        unit: "bouteilles",
        explanation: "En période estivale, sous le climat méditerranéen, un touriste consomme en moyenne 1,75 bouteilles d'eau par jour."
      },
      {
        question: "Combien de bouteilles d'eau sont consommées par les touristes sur la Côte d'Azur par an ?",
        correctAnswer: 96,
        unit: "millions",
        explanation: "En multipliant le nombre de touristes (10 millions) par la durée moyenne de séjour (5,5 jours) et par la consommation quotidienne (1,75 bouteilles), on obtient environ 96 millions de bouteilles."
      }
    ]
  },
  {
    id: "25",
    question: "Quel est le pourcentage de logements équipés de chauffage électrique en France ?",
    correctAnswer: 34.7,
    unit: "%",
    explanation: "Selon l'INSEE, 34,7% des logements français sont équipés d'un chauffage électrique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "26",
    type: "multistep",
    question: "Quel est le pourcentage d'électricité produite à partir d'énergies renouvelables en France ?",
    finalExplanation: "D'après les données de RTE et de l'INSEE, environ 24% de l'électricité en France provient des énergies renouvelables en 2023.",
    theme: "environnement",
    steps: [
      {
        question: "Quelle quantité d'électricité est produite annuellement en France ?",
        correctAnswer: 540,
        unit: "TWh",
        explanation: "La France produit environ 540 térawattheures d'électricité par an selon RTE."
      },
      {
        question: "Quelle quantité d'électricité est produite par des énergies renouvelables ?",
        correctAnswer: 129.6,
        unit: "TWh",
        explanation: "Les énergies renouvelables produisent environ 129,6 térawattheures en France."
      },
      {
        question: "Quel pourcentage de l'électricité française est donc renouvelable ?",
        correctAnswer: 24,
        unit: "%",
        explanation: "En divisant la production renouvelable par la production totale, on obtient 24% d'électricité renouvelable."
      }
    ]
  },
  {
    id: "env1",
    type: "multistep",
    question: "Combien de tonnes de déchets ménagers sont produits chaque année en France ?",
    finalExplanation: "Environ 39 millions de tonnes de déchets ménagers sont produits chaque année en France, un chiffre qui reste élevé malgré les efforts de réduction et de sensibilisation.",
    theme: "environnement",
    steps: [
      {
        question: "Combien d'habitants compte la France ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La France compte environ 67,8 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quelle est la quantité moyenne de déchets ménagers produite par habitant et par an ?",
        correctAnswer: 575,
        unit: "kg",
        explanation: "Un Français produit en moyenne 575 kg de déchets ménagers par an selon l'ADEME."
      },
      {
        question: "Combien de tonnes de déchets ménagers sont produits chaque année en France ?",
        correctAnswer: 39,
        unit: "millions",
        explanation: "En multipliant le nombre d'habitants (67,8 millions) par la production annuelle par habitant (575 kg), on obtient environ 39 millions de tonnes de déchets ménagers."
      }
    ]
  },
  {
    id: "env2",
    type: "multistep",
    question: "Combien de foyers français sont équipés de panneaux solaires photovoltaïques ?",
    finalExplanation: "Environ 870 000 foyers français sont équipés de panneaux solaires photovoltaïques, un nombre qui augmente rapidement avec la transition énergétique.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de foyers (résidences principales) y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers (résidences principales) selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces foyers sont équipés de panneaux solaires photovoltaïques ?",
        correctAnswer: 2.88,
        unit: "%",
        explanation: "Environ 2,88% des foyers français sont équipés de panneaux solaires photovoltaïques selon les données du Ministère de la Transition Écologique."
      },
      {
        question: "Combien de foyers français sont équipés de panneaux solaires photovoltaïques ?",
        correctAnswer: 870000,
        unit: "foyers",
        explanation: "En multipliant le nombre total de foyers (30,2 millions) par le taux d'équipement (2,88%), on obtient environ 870 000 foyers."
      }
    ]
  },
  {
    id: "env3",
    type: "multistep",
    question: "Combien de bouteilles en plastique sont consommées chaque jour en France ?",
    finalExplanation: "Environ 25 millions de bouteilles en plastique sont consommées chaque jour en France, ce qui représente un enjeu environnemental majeur en termes de recyclage et de pollution.",
    theme: "environnement",
    steps: [
      {
        question: "Combien d'habitants compte la France ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La France compte environ 67,8 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Combien de bouteilles en plastique un Français consomme-t-il en moyenne par an ?",
        correctAnswer: 135,
        unit: "bouteilles",
        explanation: "Un Français consomme en moyenne 135 bouteilles en plastique par an selon les données de l'ADEME."
      },
      {
        question: "Combien de bouteilles en plastique sont consommées chaque jour en France ?",
        correctAnswer: 25,
        unit: "millions",
        explanation: "En multipliant le nombre d'habitants (67,8 millions) par la consommation annuelle (135 bouteilles) puis en divisant par 365 jours, on obtient environ 25 millions de bouteilles par jour."
      }
    ]
  },
  {
    id: "env4",
    type: "multistep",
    question: "Combien de Français utilisent quotidiennement leur voiture pour des trajets de moins de 5 km ?",
    finalExplanation: "Environ 13,8 millions de Français utilisent quotidiennement leur voiture pour des trajets de moins de 5 km, un comportement qui pourrait évoluer avec le développement des mobilités douces.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de Français adultes (18 ans et plus) sont titulaires du permis de conduire ?",
        correctAnswer: 44.8,
        unit: "millions",
        explanation: "Environ 44,8 millions de Français adultes sont titulaires du permis de conduire selon les statistiques de la Sécurité Routière."
      },
      {
        question: "Quel pourcentage de ces conducteurs utilisent leur voiture quotidiennement ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des titulaires du permis utilisent leur voiture quotidiennement selon les enquêtes sur la mobilité des Français."
      },
      {
        question: "Parmi ces conducteurs quotidiens, quel pourcentage effectue régulièrement des trajets de moins de 5 km en voiture ?",
        correctAnswer: 45.5,
        unit: "%",
        explanation: "Environ 45,5% des conducteurs quotidiens effectuent régulièrement des trajets de moins de 5 km en voiture."
      },
      {
        question: "Combien de Français utilisent donc quotidiennement leur voiture pour des trajets de moins de 5 km ?",
        correctAnswer: 13.8,
        unit: "millions",
        explanation: "En multipliant le nombre de titulaires du permis (44,8 millions) par le pourcentage de conducteurs quotidiens (68%) puis par le pourcentage effectuant des trajets courts (45,5%), on obtient environ 13,8 millions de personnes."
      }
    ]
  },
  {
    id: "env5",
    type: "multistep",
    question: "Combien de litres d'eau potable sont consommés par jour dans les foyers français ?",
    finalExplanation: "Environ 450 millions de litres d'eau potable sont consommés chaque jour dans les foyers français, une ressource précieuse dont la gestion durable représente un enjeu majeur.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de foyers (résidences principales) y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers (résidences principales) selon l'INSEE."
      },
      {
        question: "Combien de personnes vivent en moyenne dans un foyer français ?",
        correctAnswer: 2.2,
        unit: "personnes",
        explanation: "Un foyer français compte en moyenne 2,2 personnes selon les données démographiques récentes."
      },
      {
        question: "Quelle est la consommation moyenne d'eau potable par personne et par jour pour les usages domestiques ?",
        correctAnswer: 148,
        unit: "litres",
        explanation: "Un Français consomme en moyenne 148 litres d'eau potable par jour pour ses usages domestiques selon les données des agences de l'eau."
      },
      {
        question: "Quel pourcentage de cette consommation correspond à de l'eau réellement consommée dans les foyers (hors usages professionnels) ?",
        correctAnswer: 46,
        unit: "%",
        explanation: "Environ 46% de la consommation d'eau potable correspond à de l'eau réellement consommée dans les foyers (hors usages professionnels, industriels et agricoles)."
      },
      {
        question: "Combien de litres d'eau potable sont consommés par jour dans les foyers français ?",
        correctAnswer: 450,
        unit: "millions",
        explanation: "En multipliant le nombre de foyers (30,2 millions) par le nombre moyen de personnes par foyer (2,2) par la consommation journalière (148 litres) par le pourcentage d'eau consommée à domicile (46%), on obtient environ 450 millions de litres."
      }
    ]
  },
  {
    id: "env6",
    type: "multistep",
    question: "Combien de logements en France sont classés F ou G au DPE (passoires thermiques) ?",
    finalExplanation: "Environ 4,8 millions de logements en France sont classés F ou G au Diagnostic de Performance Énergétique, les qualifiant de passoires thermiques et constituant une priorité pour les politiques de rénovation énergétique.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de logements (résidences principales) y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de logements (résidences principales) selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces logements ont fait l'objet d'un Diagnostic de Performance Énergétique (DPE) ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "Environ 75% des logements français ont fait l'objet d'un Diagnostic de Performance Énergétique."
      },
      {
        question: "Parmi les logements ayant un DPE, quel pourcentage est classé F ou G (passoires thermiques) ?",
        correctAnswer: 21.2,
        unit: "%",
        explanation: "Environ 21,2% des logements ayant un DPE sont classés F ou G, ce qui les qualifie de passoires thermiques selon la réglementation."
      },
      {
        question: "Combien de logements en France sont classés F ou G au DPE ?",
        correctAnswer: 4.8,
        unit: "millions",
        explanation: "En multipliant le nombre total de logements (30,2 millions) par le pourcentage ayant un DPE (75%) puis par le pourcentage classé F ou G (21,2%), on obtient environ 4,8 millions de logements."
      }
    ]
  },
  {
    id: "env7",
    type: "multistep",
    question: "Combien de personnes utilisent le vélo comme principal mode de transport pour aller travailler ?",
    finalExplanation: "Environ 2,1 millions de personnes utilisent le vélo comme principal mode de transport pour se rendre au travail en France, un chiffre en augmentation avec le développement des infrastructures cyclables.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de personnes actives travaillent en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées (ayant un emploi)."
      },
      {
        question: "Quel pourcentage de ces actifs se rend au travail à vélo comme mode de transport principal ?",
        correctAnswer: 7.4,
        unit: "%",
        explanation: "Environ 7,4% des actifs français utilisent le vélo comme mode de transport principal pour se rendre au travail selon les enquêtes sur les déplacements domicile-travail."
      },
      {
        question: "Combien de personnes utilisent le vélo comme principal mode de transport pour aller travailler ?",
        correctAnswer: 2.1,
        unit: "millions",
        explanation: "En multipliant le nombre de personnes actives occupées (28,5 millions) par le pourcentage utilisant le vélo (7,4%), on obtient environ 2,1 millions de personnes."
      }
    ]
  },
  {
    id: "env8",
    type: "multistep",
    question: "Combien de tonnes de CO₂ sont émises chaque année par les vols intérieurs en France ?",
    finalExplanation: "Environ 3,4 millions de tonnes de CO₂ sont émises chaque année par les vols intérieurs en France, un secteur visé par les politiques de réduction des émissions de gaz à effet de serre.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de passagers voyagent sur des vols intérieurs en France chaque année ?",
        correctAnswer: 26.8,
        unit: "millions",
        explanation: "Environ 26,8 millions de passagers voyagent sur des vols intérieurs en France chaque année selon les données de la Direction Générale de l'Aviation Civile."
      },
      {
        question: "Quelle est la distance moyenne parcourue lors d'un vol intérieur en France ?",
        correctAnswer: 620,
        unit: "km",
        explanation: "La distance moyenne parcourue lors d'un vol intérieur en France est d'environ 620 kilomètres."
      },
      {
        question: "Quelle quantité de CO₂ est émise par passager et par kilomètre sur un vol intérieur typique ?",
        correctAnswer: 205,
        unit: "grammes",
        explanation: "Un vol intérieur typique émet environ 205 grammes de CO₂ par passager et par kilomètre."
      },
      {
        question: "Combien de tonnes de CO₂ sont émises chaque année par les vols intérieurs en France ?",
        correctAnswer: 3.4,
        unit: "millions",
        explanation: "En multipliant le nombre de passagers (26,8 millions) par la distance moyenne (620 km) puis par les émissions par passager-kilomètre (205 g) et en convertissant en millions de tonnes, on obtient environ 3,4 millions de tonnes de CO₂."
      }
    ]
  },
  {
    id: "env9",
    type: "multistep",
    question: "Combien de Français achètent régulièrement des produits bio ?",
    finalExplanation: "Environ 28,3 millions de Français achètent régulièrement des produits biologiques, témoignant d'une sensibilité croissante aux questions de santé et d'environnement.",
    theme: "environnement",
    steps: [
      {
        question: "Quelle est la population française adulte (18 ans et plus) ?",
        correctAnswer: 52.6,
        unit: "millions",
        explanation: "La France compte environ 52,6 millions d'adultes de 18 ans et plus selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population adulte achète des produits bio au moins une fois par mois ?",
        correctAnswer: 53.8,
        unit: "%",
        explanation: "Environ 53,8% des adultes français achètent des produits biologiques au moins une fois par mois selon les études de l'Agence Bio."
      },
      {
        question: "Combien de Français achètent régulièrement des produits bio ?",
        correctAnswer: 28.3,
        unit: "millions",
        explanation: "En multipliant la population adulte (52,6 millions) par le pourcentage d'acheteurs réguliers de produits bio (53,8%), on obtient environ 28,3 millions de personnes."
      }
    ]
  },
  {
    id: "env10",
    type: "multistep",
    question: "Combien de mètres carrés de forêts sont artificialisés chaque année en France ?",
    finalExplanation: "Environ 23 millions de mètres carrés de forêts sont artificialisés chaque année en France, illustrant la problématique de l'étalement urbain et de la perte d'espaces naturels.",
    theme: "environnement",
    steps: [
      {
        question: "Combien d'hectares de sols sont artificialisés chaque année en France ?",
        correctAnswer: 28000,
        unit: "hectares",
        explanation: "Environ 28 000 hectares de sols sont artificialisés chaque année en France selon les données du Ministère de la Transition Écologique."
      },
      {
        question: "Quel pourcentage de ces surfaces artificialisées était précédemment des forêts ou des zones boisées ?",
        correctAnswer: 8.2,
        unit: "%",
        explanation: "Environ 8,2% des surfaces artificialisées étaient précédemment des forêts ou des zones boisées."
      },
      {
        question: "Combien d'hectares de forêts sont donc artificialisés chaque année ?",
        correctAnswer: 2300,
        unit: "hectares",
        explanation: "En multipliant la surface totale artificialisée (28 000 hectares) par le pourcentage correspondant à des forêts (8,2%), on obtient environ 2 300 hectares de forêts artificialisés."
      },
      {
        question: "Combien de mètres carrés de forêts sont artificialisés chaque année en France ?",
        correctAnswer: 23,
        unit: "millions",
        explanation: "En convertissant 2 300 hectares en mètres carrés (1 hectare = 10 000 m²), on obtient 23 millions de mètres carrés."
      }
    ]
  },
  {
    id: "env11",
    type: "multistep",
    question: "Combien de Français participent activement à une action environnementale (bénévolat, associations, recyclage avancé) ?",
    finalExplanation: "Environ 22 millions de Français participent activement à des actions environnementales, que ce soit par le bénévolat, l'engagement associatif ou des pratiques de recyclage avancées.",
    theme: "environnement",
    steps: [
      {
        question: "Quelle est la population adulte (plus de 18 ans) en France ?",
        correctAnswer: 52.6,
        unit: "millions",
        explanation: "La France compte environ 52,6 millions d'adultes (plus de 18 ans) selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage de la population adulte déclare s'engager activement pour l'environnement ?",
        correctAnswer: 41.8,
        unit: "%",
        explanation: "Environ 41,8% des adultes français déclarent s'engager activement pour l'environnement selon les sondages récents."
      },
      {
        question: "Combien de Français participent activement à une action environnementale ?",
        correctAnswer: 22,
        unit: "millions",
        explanation: "En multipliant la population adulte (52,6 millions) par le pourcentage engagé (41,8%), on obtient environ 22 millions de Français."
      }
    ]
  },
  {
    id: "env12",
    type: "multistep",
    question: "Combien de foyers trient correctement leurs déchets en France ?",
    finalExplanation: "Environ 18,5 millions de foyers français trient correctement leurs déchets, ce qui représente une majorité de la population mais laisse encore une marge de progression importante.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de foyers (résidences principales) y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers (résidences principales) selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces foyers déclarent trier leurs déchets ?",
        correctAnswer: 88,
        unit: "%",
        explanation: "Environ 88% des foyers français déclarent trier leurs déchets selon les enquêtes de l'ADEME."
      },
      {
        question: "Parmi les foyers qui déclarent trier, quel pourcentage trie effectivement correctement ses déchets selon les standards des collectivités locales ?",
        correctAnswer: 69.5,
        unit: "%",
        explanation: "Selon les analyses des erreurs de tri et les études comportementales, environ 69,5% des foyers déclarant trier le font effectivement correctement selon les standards de leur collectivité locale."
      },
      {
        question: "Combien de foyers trient correctement leurs déchets en France ?",
        correctAnswer: 18.5,
        unit: "millions",
        explanation: "En multipliant le nombre total de foyers (30,2 millions) par le pourcentage déclarant trier (88%) puis par le pourcentage triant correctement (69,5%), on obtient environ 18,5 millions de foyers."
      }
    ]
  },
  {
    id: "env13",
    type: "multistep",
    question: "Combien de voitures électriques sont actuellement en circulation en France ?",
    finalExplanation: "Environ 1,2 million de voitures électriques sont en circulation en France, un nombre qui croît rapidement sous l'effet des politiques d'incitation et de la transition énergétique.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de voitures particulières sont en circulation en France ?",
        correctAnswer: 38.7,
        unit: "millions",
        explanation: "Environ 38,7 millions de voitures particulières sont en circulation en France selon les données du Ministère des Transports."
      },
      {
        question: "Quel pourcentage du parc automobile français est constitué de voitures 100% électriques ?",
        correctAnswer: 3.1,
        unit: "%",
        explanation: "Environ 3,1% du parc automobile français est constitué de voitures 100% électriques selon les statistiques récentes."
      },
      {
        question: "Combien de voitures électriques sont actuellement en circulation en France ?",
        correctAnswer: 1.2,
        unit: "million",
        explanation: "En multipliant le nombre total de voitures particulières (38,7 millions) par le pourcentage de voitures électriques (3,1%), on obtient environ 1,2 million de voitures électriques."
      }
    ]
  },
  {
    id: "env14",
    type: "multistep",
    question: "Combien de repas végétariens sont servis chaque semaine dans les cantines scolaires françaises ?",
    finalExplanation: "Environ 7,3 millions de repas végétariens sont servis chaque semaine dans les cantines scolaires françaises, une tendance qui s'inscrit dans les évolutions des habitudes alimentaires et la sensibilisation aux enjeux environnementaux.",
    theme: "environnement",
    steps: [
      {
        question: "Combien d'élèves mangent à la cantine chaque jour en France ?",
        correctAnswer: 7,
        unit: "millions",
        explanation: "Environ 7 millions d'élèves mangent à la cantine chaque jour en France dans les établissements scolaires (écoles, collèges, lycées)."
      },
      {
        question: "Combien de jours par semaine les cantines scolaires sont-elles ouvertes ?",
        correctAnswer: 4.5,
        unit: "jours",
        explanation: "Les cantines scolaires sont ouvertes en moyenne 4,5 jours par semaine (certaines étant fermées le mercredi après-midi)."
      },
      {
        question: "Quel pourcentage des repas servis sont végétariens ?",
        correctAnswer: 23.1,
        unit: "%",
        explanation: "Environ 23,1% des repas servis dans les cantines scolaires sont végétariens, en partie grâce à la loi EGalim qui impose au moins un repas végétarien par semaine."
      },
      {
        question: "Combien de repas végétariens sont servis chaque semaine dans les cantines scolaires françaises ?",
        correctAnswer: 7.3,
        unit: "millions",
        explanation: "En multipliant le nombre d'élèves mangeant à la cantine (7 millions) par le nombre de jours d'ouverture hebdomadaire (4,5) puis par le pourcentage de repas végétariens (23,1%), on obtient environ 7,3 millions de repas végétariens par semaine."
      }
    ]
  },
  {
    id: "env15",
    type: "multistep",
    question: "Combien d'entreprises en France mesurent leur empreinte carbone ?",
    finalExplanation: "Environ 24 700 entreprises françaises mesurent leur empreinte carbone, principalement les grandes entreprises et ETI soumises à des obligations réglementaires.",
    theme: "environnement",
    steps: [
      {
        question: "Combien d'entreprises comptant plus de 50 salariés y a-t-il en France ?",
        correctAnswer: 38000,
        unit: "entreprises",
        explanation: "La France compte environ 38 000 entreprises de plus de 50 salariés selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces moyennes et grandes entreprises mesurent leur empreinte carbone ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% des entreprises de plus de 50 salariés mesurent leur empreinte carbone, soit par obligation légale (pour les plus grandes) soit volontairement."
      },
      {
        question: "Combien d'entreprises de moins de 50 salariés mesurent également leur empreinte carbone ?",
        correctAnswer: 0,
        unit: "entreprises",
        explanation: "Parmi les 4,1 millions d'entreprises françaises, seul un très petit nombre d'entreprises de moins de 50 salariés (moins de 0,1%) mesure leur empreinte carbone, ce qui représente un chiffre négligeable."
      },
      {
        question: "Combien d'entreprises en France mesurent leur empreinte carbone au total ?",
        correctAnswer: 24700,
        unit: "entreprises",
        explanation: "En multipliant le nombre d'entreprises de plus de 50 salariés (38 000) par le pourcentage mesurant leur empreinte (65%), on obtient environ 24 700 entreprises."
      }
    ]
  },
  {
    id: "env16",
    type: "multistep",
    question: "Combien de tonnes de vêtements sont jetées chaque année en France ?",
    finalExplanation: "Environ 624 000 tonnes de vêtements sont jetées chaque année en France selon les données de l'ADEME et de l'éco-organisme Refashion.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de vêtements (en kg) un Français achète-t-il en moyenne par an ?",
        correctAnswer: 9.2,
        unit: "kg",
        explanation: "Un Français achète en moyenne 9,2 kg de vêtements par an selon les données de l'industrie textile."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La population française est d'environ 67,8 millions d'habitants selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces vêtements finit jeté sans être recyclé ou réutilisé ?",
        correctAnswer: 55.7,
        unit: "%",
        explanation: "Environ 55,7% des vêtements achetés finissent jetés sans être recyclés ou réutilisés."
      },
      {
        question: "Combien de tonnes de vêtements sont jetées par an ?",
        correctAnswer: 624000,
        unit: "tonnes",
        explanation: "En multipliant le poids moyen acheté par personne (9,2 kg) par la population (67,8 millions) et le pourcentage jeté (55,7%), on obtient environ 624 000 tonnes."
      }
    ]
  },
  {
    id: "env17",
    type: "multistep",
    question: "Combien de foyers utilisent une chaudière au fioul en France ?",
    finalExplanation: "Environ 3,1 millions de foyers français utilisent encore une chaudière au fioul, un mode de chauffage fortement émetteur de CO₂ dont le remplacement est encouragé par les politiques publiques.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de résidences principales y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de résidences principales selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces résidences sont chauffées principalement au fioul ?",
        correctAnswer: 10.3,
        unit: "%",
        explanation: "Environ 10,3% des résidences principales en France sont encore chauffées principalement au fioul selon les données du Ministère de la Transition Écologique."
      },
      {
        question: "Combien de foyers utilisent une chaudière au fioul en France ?",
        correctAnswer: 3.1,
        unit: "millions",
        explanation: "En multipliant le nombre total de résidences principales (30,2 millions) par le pourcentage chauffé au fioul (10,3%), on obtient environ 3,1 millions de foyers."
      }
    ]
  },
  {
    id: "env18",
    type: "multistep",
    question: "Combien de Français ont réduit leur consommation de viande sur les 12 derniers mois ?",
    finalExplanation: "Environ 31,6 millions de Français ont réduit leur consommation de viande au cours des 12 derniers mois, reflétant une tendance de fond liée aux préoccupations sanitaires, environnementales et éthiques.",
    theme: "environnement",
    steps: [
      {
        question: "Quelle est la population française adulte (15 ans et plus) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de 15 ans et plus."
      },
      {
        question: "Quel pourcentage de cette population déclare avoir réduit sa consommation de viande au cours des 12 derniers mois ?",
        correctAnswer: 56.7,
        unit: "%",
        explanation: "Environ 56,7% des Français de 15 ans et plus déclarent avoir réduit leur consommation de viande au cours des 12 derniers mois selon les sondages récents."
      },
      {
        question: "Combien de Français ont réduit leur consommation de viande sur les 12 derniers mois ?",
        correctAnswer: 31.6,
        unit: "millions",
        explanation: "En multipliant la population adulte (55,8 millions) par le pourcentage déclarant avoir réduit sa consommation (56,7%), on obtient environ 31,6 millions de personnes."
      }
    ]
  },
  {
    id: "env19",
    type: "multistep",
    question: "Combien de logements ne disposent pas d'une bonne isolation thermique ?",
    finalExplanation: "Environ 7,3 millions de logements en France ne disposent pas d'une bonne isolation thermique, ce qui représente un enjeu majeur pour la réduction de la consommation énergétique et des émissions de gaz à effet de serre.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de résidences principales y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de résidences principales selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces résidences a été construit avant 1975 (date de la première réglementation thermique) ?",
        correctAnswer: 45.6,
        unit: "%",
        explanation: "Environ 45,6% des résidences principales en France ont été construites avant 1975, date de la première réglementation thermique."
      },
      {
        question: "Parmi ces logements anciens, quel pourcentage n'a pas bénéficié d'une rénovation thermique significative ?",
        correctAnswer: 53,
        unit: "%",
        explanation: "Environ 53% des logements construits avant 1975 n'ont pas bénéficié d'une rénovation thermique significative et conservent donc une mauvaise isolation."
      },
      {
        question: "Combien de logements ne disposent pas d'une bonne isolation thermique ?",
        correctAnswer: 7.3,
        unit: "millions",
        explanation: "En multipliant le nombre total de résidences principales (30,2 millions) par le pourcentage de logements anciens (45,6%) puis par le pourcentage sans rénovation (53%), on obtient environ 7,3 millions de logements."
      }
    ]
  },
  {
    id: "env20",
    type: "multistep",
    question: "Combien de sacs plastiques à usage unique sont encore utilisés chaque année en France ?",
    finalExplanation: "Environ 1,8 milliard de sacs plastiques à usage unique sont encore utilisés chaque année en France malgré leur interdiction progressive.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de sacs plastiques étaient utilisés annuellement avant les premières restrictions légales en 2016 ?",
        correctAnswer: 8.2,
        unit: "milliards",
        explanation: "Avant les restrictions légales de 2016, environ 8,2 milliards de sacs plastiques à usage unique étaient utilisés chaque année en France."
      },
      {
        question: "De quel pourcentage l'utilisation des sacs plastiques à usage unique a-t-elle diminué depuis l'introduction des restrictions légales ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "L'utilisation des sacs plastiques à usage unique a diminué d'environ 78% depuis l'introduction des restrictions légales."
      },
      {
        question: "Combien de sacs plastiques à usage unique sont encore utilisés chaque année en France ?",
        correctAnswer: 1.8,
        unit: "milliard",
        explanation: "En calculant le nombre initial de sacs (8,2 milliards) moins le pourcentage de réduction (78%), on obtient environ 1,8 milliard de sacs encore utilisés annuellement."
      }
    ]
  },
  {
    id: "env-101",
    type: "simple",
    question: "Quelle est la part des énergies renouvelables dans la production d'électricité en France ?",
    correctAnswer: 25.3,
    unit: "%",
    explanation: "Les énergies renouvelables représentent environ 25,3% de la production d'électricité en France.",
    theme: "environnement"
  },
  {
    id: "env-102",
    type: "simple",
    question: "Quelle est la production annuelle moyenne de déchets ménagers par habitant en France ?",
    correctAnswer: 568,
    unit: "kg",
    explanation: "Un habitant français produit en moyenne 568 kg de déchets ménagers par an.",
    theme: "environnement"
  },
  {
    id: "env-103",
    type: "simple",
    question: "Quel pourcentage du territoire français est couvert de forêts ?",
    correctAnswer: 31,
    unit: "%",
    explanation: "Les forêts couvrent environ 31% du territoire français, soit 17 millions d'hectares.",
    theme: "environnement"
  },
  {
    id: "env-104",
    type: "simple",
    question: "Quelle est la consommation d'eau moyenne par jour et par habitant en France ?",
    correctAnswer: 148,
    unit: "litres",
    explanation: "Un Français consomme en moyenne 148 litres d'eau par jour pour ses usages domestiques.",
    theme: "environnement"
  },
  {
    id: "env-105",
    type: "simple",
    question: "Quel est le taux de recyclage des emballages ménagers en France ?",
    correctAnswer: 68,
    unit: "%",
    explanation: "Environ 68% des emballages ménagers sont recyclés en France.",
    theme: "environnement"
  },
  {
    id: "env-106",
    type: "simple",
    question: "Quelle est l'empreinte carbone moyenne d'un Français par an ?",
    correctAnswer: 9.9,
    unit: "tonnes de CO2",
    explanation: "L'empreinte carbone moyenne d'un Français est d'environ 9,9 tonnes de CO2 équivalent par an.",
    theme: "environnement"
  },
  {
    id: "env-107",
    type: "simple",
    question: "Quelle part du parc automobile français est composée de véhicules électriques ou hybrides ?",
    correctAnswer: 7.8,
    unit: "%",
    explanation: "Environ 7,8% du parc automobile français est composé de véhicules électriques ou hybrides.",
    theme: "environnement"
  },
  {
    id: "env-108",
    type: "simple",
    question: "Quelle est la surface moyenne d'espaces verts par habitant dans les grandes villes françaises ?",
    correctAnswer: 31,
    unit: "m²",
    explanation: "Les grandes villes françaises offrent en moyenne 31 m² d'espaces verts par habitant, avec de fortes disparités.",
    theme: "environnement"
  },
  {
    id: "env-109",
    type: "simple",
    question: "Quel pourcentage de l'agriculture française est en mode biologique ?",
    correctAnswer: 10.3,
    unit: "%",
    explanation: "Environ 10,3% des surfaces agricoles françaises sont cultivées en agriculture biologique.",
    theme: "environnement"
  },
  {
    id: "env-110",
    type: "simple",
    question: "Quel est le pourcentage du littoral français protégé par le Conservatoire du littoral ?",
    correctAnswer: 15.2,
    unit: "%",
    explanation: "Environ 15,2% du littoral français est protégé par le Conservatoire du littoral via des acquisitions foncières.",
    theme: "environnement"
  }
];
