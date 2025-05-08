import { Question, MultiStepQuestion } from "@/components/types";

export const transportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "14",
    question: "Quelle est la distance moyenne parcourue par un Français en voiture chaque année ?",
    correctAnswer: 12200,
    unit: "km",
    explanation: "Selon les données de l'INSEE, un Français parcourt en moyenne 12 200 kilomètres par an en voiture.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "15",
    question: "Quel est le nombre de voyageurs dans le métro parisien par jour ?",
    correctAnswer: 4.16,
    unit: "millions",
    explanation: "Le métro parisien transporte environ 4,16 millions de voyageurs par jour selon les statistiques de la RATP.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "16",
    type: "multistep",
    question: "Combien de kilomètres de pistes cyclables y a-t-il en France ?",
    finalExplanation: "La France compte environ 60 000 km de pistes cyclables et voies vertes selon les données du Ministère de la Transition Écologique.",
    theme: "transport",
    steps: [
      {
        question: "Combien de kilomètres d'itinéraires cyclables nationaux sont aménagés en France ?",
        correctAnswer: 25700,
        unit: "km",
        explanation: "La France compte environ 25 700 km d'itinéraires cyclables nationaux aménagés."
      },
      {
        question: "Quel est le nombre de kilomètres de pistes cyclables urbaines en France ?",
        correctAnswer: 34300,
        unit: "km",
        explanation: "Les pistes cyclables urbaines représentent environ 34 300 km en France."
      },
      {
        question: "Combien de kilomètres de pistes cyclables compte la France au total ?",
        correctAnswer: 60000,
        unit: "km",
        explanation: "En additionnant les itinéraires nationaux et urbains, la France compte environ 60 000 km de pistes cyclables."
      }
    ]
  },
  {
    id: "27",
    type: "multistep",
    question: "Quel pourcentage des déplacements urbains sont effectués à vélo en France ?",
    finalExplanation: "Selon les données de l'INSEE et du Ministère de la Transition Écologique, environ 4% des déplacements urbains sont effectués à vélo en France.",
    theme: "transport",
    steps: [
      {
        question: "Combien de déplacements quotidiens un Français effectue-t-il en moyenne ?",
        correctAnswer: 3.15,
        unit: "déplacements",
        explanation: "Un Français effectue en moyenne 3,15 déplacements quotidiens selon les enquêtes de mobilité."
      },
      {
        question: "Combien de Français se déplacent régulièrement à vélo en zone urbaine ?",
        correctAnswer: 8.3,
        unit: "millions",
        explanation: "Environ 8,3 millions de Français utilisent régulièrement le vélo en zone urbaine."
      },
      {
        question: "Quel pourcentage des déplacements urbains sont effectués à vélo ?",
        correctAnswer: 4,
        unit: "%",
        explanation: "Le vélo représente environ 4% de l'ensemble des déplacements urbains en France."
      }
    ]
  },
  {
    id: "30",
    type: "multistep",
    question: "Quel pourcentage de Français utilisent quotidiennement les transports en commun ?",
    finalExplanation: "Environ 16% des Français utilisent quotidiennement les transports en commun selon les données de l'INSEE.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population française en âge de se déplacer de façon autonome (plus de 12 ans) ?",
        correctAnswer: 61.4,
        unit: "millions",
        explanation: "En France, environ 61,4 millions de personnes ont plus de 12 ans et peuvent se déplacer de façon autonome."
      },
      {
        question: "Combien de personnes utilisent les transports en commun chaque jour ?",
        correctAnswer: 9.8,
        unit: "millions",
        explanation: "Environ 9,8 millions de Français utilisent les transports en commun quotidiennement."
      },
      {
        question: "Quel pourcentage cela représente-t-il par rapport à la population en âge de se déplacer ?",
        correctAnswer: 16,
        unit: "%",
        explanation: "En divisant 9,8 millions par 61,4 millions, on obtient environ 16% de la population."
      }
    ]
  },
  {
    id: "32",
    type: "multistep",
    question: "Quel est le nombre total d'heures passées dans les embouteillages chaque année par les habitants de la métropole de Lyon ?",
    finalExplanation: "Cette estimation de 14,6 millions d'heures passées dans les embouteillages par les habitants de la métropole lyonnaise est une approximation qui se base sur la population active, le taux de déplacement en voiture et le temps moyen perdu dans les embouteillages. Les chiffres réels peuvent varier selon les saisons, les travaux routiers et les évolutions des modes de transport.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population de la métropole de Lyon ?",
        correctAnswer: 1.4,
        unit: "millions",
        explanation: "La métropole de Lyon compte environ 1,4 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population utilise la voiture comme moyen de transport principal ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des habitants de la métropole lyonnaise utilisent la voiture comme moyen de transport principal d'après les enquêtes sur les déplacements urbains."
      },
      {
        question: "Combien de déplacements en voiture effectue en moyenne un conducteur par jour ouvré ?",
        correctAnswer: 2.3,
        unit: "déplacements",
        explanation: "En moyenne, un conducteur lyonnais effectue 2,3 déplacements en voiture par jour ouvré selon les études de mobilité urbaine."
      },
      {
        question: "Combien de minutes sont perdues en moyenne dans les embouteillages par déplacement ?",
        correctAnswer: 18,
        unit: "minutes",
        explanation: "Un conducteur perd en moyenne 18 minutes par déplacement dans les embouteillages à Lyon selon les données de congestion routière."
      },
      {
        question: "Combien de jours ouvrés compte une année ?",
        correctAnswer: 220,
        unit: "jours",
        explanation: "Une année compte environ 220 jours ouvrés en France, déduction faite des week-ends et jours fériés."
      },
      {
        question: "Combien d'heures sont passées dans les embouteillages chaque année par les habitants de la métropole de Lyon ?",
        correctAnswer: 14.6,
        unit: "millions d'heures",
        explanation: "En multipliant la population (1,4 millions) par le pourcentage utilisant la voiture (42%) par le nombre de déplacements quotidiens (2,3) par le temps perdu (18 minutes) par le nombre de jours ouvrés (220), puis en convertissant en heures, on obtient environ 14,6 millions d'heures."
      }
    ]
  },
  {
    id: "141",
    type: "multistep",
    question: "Combien de trajets sont effectués chaque jour en France en voiture individuelle ?",
    finalExplanation: "Environ 90 millions de trajets en voiture individuelle sont effectués chaque jour en France, ce qui illustre la place prépondérante de ce mode de transport dans les habitudes de mobilité des Français.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population française en âge de conduire (18 ans et plus) ?",
        correctAnswer: 54,
        unit: "millions",
        explanation: "La France compte environ 54 millions de personnes âgées de 18 ans et plus, donc en âge de conduire."
      },
      {
        question: "Quel pourcentage de la population adulte possède le permis de conduire ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "Environ 83% des adultes français possèdent le permis de conduire selon les données de la Sécurité Routière."
      },
      {
        question: "Parmi les détenteurs du permis, quel pourcentage utilise effectivement une voiture régulièrement ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% des détenteurs du permis utilisent effectivement une voiture de façon régulière."
      },
      {
        question: "Combien de trajets quotidiens en voiture sont effectués en moyenne par conducteur actif ?",
        correctAnswer: 2.3,
        unit: "trajets",
        explanation: "Un conducteur actif effectue en moyenne 2,3 trajets quotidiens en voiture selon les enquêtes de mobilité."
      },
      {
        question: "Combien de trajets sont effectués chaque jour en France en voiture individuelle ?",
        correctAnswer: 90,
        unit: "millions",
        explanation: "En multipliant la population adulte (54 millions) par le taux de possession du permis (83%) par le taux d'utilisation effective (85%) par le nombre de trajets quotidiens (2,3), on obtient environ 90 millions de trajets quotidiens."
      }
    ]
  },
  {
    id: "142",
    type: "multistep",
    question: "Combien de personnes prennent le métro chaque jour en Île-de-France ?",
    finalExplanation: "Environ 4,2 millions de personnes prennent le métro chaque jour en Île-de-France, faisant de ce mode de transport un élément essentiel de la mobilité francilienne.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population de l'Île-de-France ?",
        correctAnswer: 12.2,
        unit: "millions",
        explanation: "L'Île-de-France compte environ 12,2 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de la population francilienne utilise les transports en commun au moins occasionnellement ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des Franciliens utilisent les transports en commun au moins occasionnellement selon les enquêtes de déplacement."
      },
      {
        question: "Parmi les utilisateurs de transports en commun, quel pourcentage emprunte le métro chaque jour ?",
        correctAnswer: 51,
        unit: "%",
        explanation: "Environ 51% des utilisateurs de transports en commun franciliens empruntent le métro chaque jour."
      },
      {
        question: "Combien de personnes prennent le métro chaque jour en Île-de-France ?",
        correctAnswer: 4.2,
        unit: "millions",
        explanation: "En multipliant la population francilienne (12,2 millions) par le taux d'utilisation des transports en commun (68%) puis par le taux d'utilisation du métro (51%), on obtient environ 4,2 millions de personnes."
      }
    ]
  },
  {
    id: "143",
    type: "multistep",
    question: "Combien de vélos électriques sont vendus chaque année en France ?",
    finalExplanation: "Environ 780 000 vélos électriques sont vendus chaque année en France, un marché en forte croissance qui témoigne de l'engouement pour ce mode de transport urbain écologique.",
    theme: "transport",
    steps: [
      {
        question: "Combien de vélos (tous types confondus) sont vendus chaque année en France ?",
        correctAnswer: 2.8,
        unit: "millions",
        explanation: "Environ 2,8 millions de vélos (tous types confondus) sont vendus chaque année en France selon les données de l'Union Sport & Cycle."
      },
      {
        question: "Quel pourcentage des ventes de vélos concernent des vélos à assistance électrique (VAE) ?",
        correctAnswer: 27.8,
        unit: "%",
        explanation: "Les vélos à assistance électrique représentent environ 27,8% des ventes totales de vélos en France, un pourcentage en forte augmentation ces dernières années."
      },
      {
        question: "Combien de vélos électriques sont vendus chaque année en France ?",
        correctAnswer: 780000,
        unit: "vélos électriques",
        explanation: "En multipliant le nombre total de vélos vendus (2,8 millions) par la part des vélos électriques (27,8%), on obtient environ 780 000 vélos électriques vendus par an."
      }
    ]
  },
  {
    id: "144",
    type: "multistep",
    question: "Combien de personnes prennent le train pour un trajet domicile-travail chaque jour ?",
    finalExplanation: "Environ 1,5 million de personnes prennent le train quotidiennement pour un trajet domicile-travail en France, principalement dans les grandes agglomérations et leurs périphéries.",
    theme: "transport",
    steps: [
      {
        question: "Combien de personnes actives travaillent en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées (ayant un emploi)."
      },
      {
        question: "Quel pourcentage des actifs travaillent en dehors de leur commune de résidence ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des actifs français travaillent en dehors de leur commune de résidence et doivent donc effectuer un trajet domicile-travail significatif."
      },
      {
        question: "Parmi ces navetteurs, quel pourcentage utilise principalement le train pour se rendre au travail ?",
        correctAnswer: 8.5,
        unit: "%",
        explanation: "Environ 8,5% des navetteurs utilisent principalement le train (TER, Transilien, RER) comme mode de transport pour se rendre au travail."
      },
      {
        question: "Combien de personnes prennent le train pour un trajet domicile-travail chaque jour ?",
        correctAnswer: 1.5,
        unit: "million",
        explanation: "En multipliant le nombre de personnes actives occupées (28,5 millions) par le pourcentage travaillant hors de leur commune (62%) puis par le taux d'utilisation du train (8,5%), on obtient environ 1,5 million de personnes."
      }
    ]
  },
  {
    id: "145",
    type: "multistep",
    question: "Combien de voitures électriques circulent actuellement en France ?",
    finalExplanation: "Environ 1,1 million de voitures électriques circulent actuellement en France, un chiffre qui augmente rapidement sous l'effet des incitations gouvernementales et de la prise de conscience écologique.",
    theme: "transport",
    steps: [
      {
        question: "Combien de voitures particulières sont en circulation en France ?",
        correctAnswer: 38.7,
        unit: "millions",
        explanation: "Environ 38,7 millions de voitures particulières sont en circulation en France selon les données du Ministère des Transports."
      },
      {
        question: "Quel pourcentage du parc automobile français est constitué de voitures électriques ?",
        correctAnswer: 2.85,
        unit: "%",
        explanation: "Environ 2,85% du parc automobile français est constitué de voitures 100% électriques (hors hybrides) en circulation."
      },
      {
        question: "Combien de voitures électriques circulent actuellement en France ?",
        correctAnswer: 1.1,
        unit: "million",
        explanation: "En multipliant le nombre total de voitures particulières (38,7 millions) par le pourcentage de voitures électriques (2,85%), on obtient environ 1,1 million de voitures électriques."
      }
    ]
  },
  {
    id: "146",
    type: "multistep",
    question: "Combien de trajets BlaBlaCar sont organisés chaque week-end ?",
    finalExplanation: "Environ 330 000 trajets BlaBlaCar sont organisés chaque week-end en France, ce qui en fait un acteur majeur de la mobilité partagée pour les moyennes et longues distances.",
    theme: "transport",
    steps: [
      {
        question: "Combien de trajets BlaBlaCar sont organisés chaque mois en France ?",
        correctAnswer: 3.1,
        unit: "millions",
        explanation: "Environ 3,1 millions de trajets sont organisés chaque mois via la plateforme BlaBlaCar en France selon les données de l'entreprise."
      },
      {
        question: "Quel pourcentage de ces trajets sont effectués pendant les week-ends ?",
        correctAnswer: 42.5,
        unit: "%",
        explanation: "Environ 42,5% des trajets BlaBlaCar sont effectués pendant les week-ends (vendredi soir, samedi et dimanche)."
      },
      {
        question: "Combien y a-t-il de week-ends dans un mois en moyenne ?",
        correctAnswer: 4,
        unit: "week-ends",
        explanation: "Un mois compte en moyenne 4 week-ends."
      },
      {
        question: "Combien de trajets BlaBlaCar sont organisés chaque week-end ?",
        correctAnswer: 330000,
        unit: "trajets",
        explanation: "En multipliant le nombre mensuel de trajets (3,1 millions) par le pourcentage de trajets du week-end (42,5%) puis en divisant par le nombre moyen de week-ends par mois (4), on obtient environ 330 000 trajets par week-end."
      }
    ]
  },
  {
    id: "147",
    type: "multistep",
    question: "Combien de vols domestiques sont réalisés chaque jour au départ de la France ?",
    finalExplanation: "Environ 920 vols domestiques sont réalisés chaque jour au départ de la France, un chiffre en diminution ces dernières années sous l'effet des politiques environnementales et du développement du train à grande vitesse.",
    theme: "transport",
    steps: [
      {
        question: "Combien de vols commerciaux (toutes destinations confondues) décollent de France chaque jour ?",
        correctAnswer: 3700,
        unit: "vols",
        explanation: "Environ 3 700 vols commerciaux décollent quotidiennement des aéroports français selon les données de la DGAC."
      },
      {
        question: "Quel pourcentage de ces vols sont des vols domestiques (ayant pour destination un autre aéroport français) ?",
        correctAnswer: 24.8,
        unit: "%",
        explanation: "Environ 24,8% des vols au départ de la France sont des vols domestiques, les autres étant des vols internationaux ou intercontinentaux."
      },
      {
        question: "Combien de vols domestiques sont réalisés chaque jour au départ de la France ?",
        correctAnswer: 920,
        unit: "vols",
        explanation: "En multipliant le nombre total de vols quotidiens (3 700) par le pourcentage de vols domestiques (24,8%), on obtient environ 920 vols domestiques par jour."
      }
    ]
  },
  {
    id: "148",
    type: "multistep",
    question: "Combien de trottinettes électriques en libre-service sont utilisées chaque jour à Paris ?",
    finalExplanation: "Environ 62 000 trajets en trottinettes électriques en libre-service sont effectués chaque jour à Paris, illustrant l'engouement mais aussi les défis posés par ce nouveau mode de mobilité urbaine.",
    theme: "transport",
    steps: [
      {
        question: "Combien de trottinettes électriques en libre-service sont disponibles à Paris ?",
        correctAnswer: 15000,
        unit: "trottinettes",
        explanation: "Paris compte environ 15 000 trottinettes électriques en libre-service déployées par les différents opérateurs autorisés par la ville."
      },
      {
        question: "Combien de trajets en moyenne une trottinette est-elle utilisée par jour ?",
        correctAnswer: 4.13,
        unit: "trajets",
        explanation: "Une trottinette électrique en libre-service à Paris est utilisée en moyenne pour 4,13 trajets par jour."
      },
      {
        question: "Combien de trottinettes électriques en libre-service sont utilisées chaque jour à Paris ?",
        correctAnswer: 62000,
        unit: "trajets",
        explanation: "En multipliant le nombre de trottinettes disponibles (15 000) par le nombre moyen de trajets quotidiens par trottinette (4,13), on obtient environ 62 000 trajets par jour."
      }
    ]
  },
  {
    id: "149",
    type: "multistep",
    question: "Combien de livraisons de colis sont effectuées chaque jour en France par camion ?",
    finalExplanation: "Environ 3,5 millions de livraisons de colis sont effectuées chaque jour en France par camion, un volume qui a connu une forte augmentation avec le développement du commerce en ligne.",
    theme: "transport",
    steps: [
      {
        question: "Combien de colis sont livrés chaque jour en France (tous modes de livraison confondus) ?",
        correctAnswer: 3.8,
        unit: "millions",
        explanation: "Environ 3,8 millions de colis sont livrés chaque jour en France, tous modes de transport confondus (camions, utilitaires, vélos, etc.)."
      },
      {
        question: "Quel pourcentage de ces colis sont livrés par camion ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des colis sont livrés par camion (poids lourds et véhicules utilitaires légers), les autres étant livrés à pied, à vélo ou par d'autres moyens plus écologiques principalement en zone urbaine dense."
      },
      {
        question: "Combien de livraisons de colis sont effectuées chaque jour en France par camion ?",
        correctAnswer: 3.5,
        unit: "millions",
        explanation: "En multipliant le nombre total de colis livrés quotidiennement (3,8 millions) par le pourcentage de livraisons par camion (92%), on obtient environ 3,5 millions de livraisons par camion chaque jour."
      }
    ]
  },
  {
    id: "150",
    type: "multistep",
    question: "Combien d'autobus sont en circulation dans les réseaux urbains en France ?",
    finalExplanation: "Environ 32 000 autobus sont en circulation dans les réseaux urbains en France, assurant une part importante de la mobilité collective dans les villes de toutes tailles.",
    theme: "transport",
    steps: [
      {
        question: "Combien de réseaux de transport urbain existe-t-il en France ?",
        correctAnswer: 320,
        unit: "réseaux",
        explanation: "La France compte environ 320 réseaux de transport urbain répartis sur l'ensemble du territoire."
      },
      {
        question: "Combien d'autobus compte en moyenne un réseau urbain français ?",
        correctAnswer: 100,
        unit: "autobus",
        explanation: "Un réseau de transport urbain français compte en moyenne 100 autobus, avec de grandes disparités selon la taille de l'agglomération."
      },
      {
        question: "Combien d'autobus sont en circulation dans les réseaux urbains en France ?",
        correctAnswer: 32000,
        unit: "autobus",
        explanation: "En multipliant le nombre de réseaux (320) par le nombre moyen d'autobus par réseau (100), on obtient environ 32 000 autobus en circulation."
      }
    ]
  },
  {
    id: "151",
    type: "multistep",
    question: "Combien de personnes utilisent une carte d'abonnement mensuel de transports en commun ?",
    finalExplanation: "Environ 12,5 millions de personnes utilisent une carte d'abonnement mensuel aux transports en commun en France, illustrant l'importance de ce mode de transport dans les zones urbaines.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population française vivant en zone urbaine ?",
        correctAnswer: 52.7,
        unit: "millions",
        explanation: "Environ 52,7 millions de Français vivent en zone urbaine selon la définition de l'INSEE (communes appartenant à une unité urbaine)."
      },
      {
        question: "Quel pourcentage de la population urbaine a accès à un réseau de transport en commun ?",
        correctAnswer: 87,
        unit: "%",
        explanation: "Environ 87% de la population urbaine française a accès à un réseau de transport en commun à proximité de son domicile."
      },
      {
        question: "Parmi les personnes ayant accès aux transports en commun, quel pourcentage possède un abonnement mensuel ou annuel ?",
        correctAnswer: 27.3,
        unit: "%",
        explanation: "Environ 27,3% des personnes ayant accès aux transports en commun possèdent un abonnement mensuel ou annuel."
      },
      {
        question: "Combien de personnes utilisent une carte d'abonnement mensuel de transports en commun ?",
        correctAnswer: 12.5,
        unit: "millions",
        explanation: "En multipliant la population urbaine (52,7 millions) par le taux d'accès aux transports en commun (87%) puis par le taux d'abonnement (27,3%), on obtient environ 12,5 millions de personnes."
      }
    ]
  },
  {
    id: "152",
    type: "multistep",
    question: "Combien de voyageurs passent par les gares TGV françaises un lundi moyen ?",
    finalExplanation: "Environ 450 000 voyageurs passent par les gares TGV françaises un lundi moyen, faisant du train à grande vitesse un des piliers de la mobilité interurbaine en France.",
    theme: "transport",
    steps: [
      {
        question: "Combien de voyages en TGV sont effectués chaque année en France ?",
        correctAnswer: 125,
        unit: "millions",
        explanation: "Environ 125 millions de voyages sont effectués chaque année en TGV en France selon les données de la SNCF."
      },
      {
        question: "Comment ces voyages se répartissent-ils sur la semaine ?",
        correctAnswer: 14,
        unit: "% le lundi",
        explanation: "La répartition hebdomadaire est approximativement de 17% le vendredi, 17% le dimanche, 14% le lundi, 13% le samedi, et 12% les mardi, mercredi et jeudi."
      },
      {
        question: "Combien de jours d'exploitation TGV y a-t-il par an ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les TGV circulent tous les jours de l'année, soit 365 jours."
      },
      {
        question: "Combien de lundis y a-t-il dans une année ?",
        correctAnswer: 52,
        unit: "lundis",
        explanation: "Une année compte 52 lundis."
      },
      {
        question: "Combien de voyageurs passent par les gares TGV françaises un lundi moyen ?",
        correctAnswer: 450000,
        unit: "voyageurs",
        explanation: "En calculant le nombre de voyages un lundi moyen ((125 millions × 14%) ÷ 52), on obtient environ 450 000 voyageurs."
      }
    ]
  },
  {
    id: "153",
    type: "multistep",
    question: "Combien de voitures diesel circulent encore en France ?",
    finalExplanation: "Environ 17,8 millions de voitures diesel circulent encore en France, bien que leur proportion dans le parc automobile soit en diminution constante depuis 2015.",
    theme: "transport",
    steps: [
      {
        question: "Combien de voitures particulières sont en circulation en France ?",
        correctAnswer: 38.7,
        unit: "millions",
        explanation: "Environ 38,7 millions de voitures particulières sont en circulation en France."
      },
      {
        question: "Quel pourcentage du parc automobile français est constitué de voitures diesel ?",
        correctAnswer: 46,
        unit: "%",
        explanation: "Environ 46% du parc automobile français est encore constitué de voitures diesel, un pourcentage en baisse depuis plusieurs années."
      },
      {
        question: "Combien de voitures diesel circulent encore en France ?",
        correctAnswer: 17.8,
        unit: "millions",
        explanation: "En multipliant le nombre total de voitures particulières (38,7 millions) par le pourcentage de voitures diesel (46%), on obtient environ 17,8 millions de voitures diesel."
      }
    ]
  },
  {
    id: "154",
    type: "multistep",
    question: "Combien de stations de recharge électrique sont disponibles sur les autoroutes françaises ?",
    finalExplanation: "Environ 2 800 points de recharge pour véhicules électriques sont disponibles sur les autoroutes françaises, un nombre en croissance rapide pour répondre à la demande croissante.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la longueur totale du réseau autoroutier français ?",
        correctAnswer: 11610,
        unit: "km",
        explanation: "Le réseau autoroutier français s'étend sur environ 11 610 kilomètres."
      },
      {
        question: "Combien d'aires de service y a-t-il sur les autoroutes françaises ?",
        correctAnswer: 370,
        unit: "aires",
        explanation: "On compte environ 370 aires de service sur le réseau autoroutier français."
      },
      {
        question: "Quel pourcentage de ces aires sont équipées de bornes de recharge électrique ?",
        correctAnswer: 86,
        unit: "%",
        explanation: "Environ 86% des aires de service autoroutières sont désormais équipées de bornes de recharge pour véhicules électriques."
      },
      {
        question: "Combien de bornes de recharge y a-t-il en moyenne par aire équipée ?",
        correctAnswer: 8.8,
        unit: "bornes",
        explanation: "On compte en moyenne 8,8 bornes de recharge par aire de service équipée."
      },
      {
        question: "Combien de stations de recharge électrique sont disponibles sur les autoroutes françaises ?",
        correctAnswer: 2800,
        unit: "points de recharge",
        explanation: "En multipliant le nombre d'aires de service (370) par le taux d'équipement (86%) puis par le nombre moyen de bornes par aire (8,8), on obtient environ 2 800 points de recharge."
      }
    ]
  },
  {
    id: "155",
    type: "multistep",
    question: "Combien d'étudiants prennent le train pour rentrer chez leurs parents le week-end ?",
    finalExplanation: "Environ 320 000 étudiants prennent le train chaque week-end pour rentrer chez leurs parents, un phénomène qui explique en partie les pics de fréquentation des TER et TGV le vendredi soir et le dimanche soir.",
    theme: "transport",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage de ces étudiants étudient dans une ville différente de celle où vivent leurs parents ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des étudiants étudient dans une ville différente de celle où vivent leurs parents."
      },
      {
        question: "Parmi ces étudiants, quel pourcentage rentre régulièrement chez leurs parents le week-end ?",
        correctAnswer: 41,
        unit: "%",
        explanation: "Environ 41% des étudiants vivant loin de chez leurs parents rentrent régulièrement (au moins deux fois par mois) au domicile familial le week-end."
      },
      {
        question: "Parmi ceux qui rentrent régulièrement, quel pourcentage utilise le train comme moyen de transport principal ?",
        correctAnswer: 39,
        unit: "%",
        explanation: "Environ 39% des étudiants rentrant régulièrement chez leurs parents utilisent le train comme moyen de transport principal, les autres utilisant la voiture, le covoiturage ou le bus."
      },
      {
        question: "Combien d'étudiants prennent le train pour rentrer chez leurs parents le week-end ?",
        correctAnswer: 320000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage étudiant loin de chez eux (67%) puis par le taux de retour régulier (41%) et enfin par le taux d'utilisation du train (39%), on obtient environ 320 000 étudiants."
      }
    ]
  },
  {
    id: "156",
    type: "multistep",
    question: "Combien de taxis ou VTC sont en activité dans les grandes villes françaises ?",
    finalExplanation: "Environ 105 000 taxis et VTC sont en activité dans
