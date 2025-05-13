import { Question, MultiStepQuestion } from "@/components/types";

export const transportQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Combien de kilomètres de pistes cyclables y a-t-il en France ?",
    correctAnswer: 50000,
    unit: "km",
    explanation: "La France compte environ 50 000 km de pistes cyclables selon le Ministère de la Transition écologique.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "2",
    question: "Quel est le nombre de voitures en circulation en France ?",
    correctAnswer: 39000000,
    unit: "voitures",
    explanation: "Il y a environ 39 millions de voitures en circulation en France selon l'INSEE.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "3",
    question: "Combien de gares SNCF y a-t-il en France ?",
    correctAnswer: 3000,
    unit: "gares",
    explanation: "La France compte environ 3 000 gares SNCF ouvertes aux voyageurs.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "4",
    question: "Quelle est la longueur du réseau autoroutier français ?",
    correctAnswer: 12000,
    unit: "km",
    explanation: "Le réseau autoroutier français s'étend sur environ 12 000 km.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "5",
    question: "Combien d'aéroports accueillent des vols commerciaux en France ?",
    correctAnswer: 150,
    unit: "aéroports",
    explanation: "Environ 150 aéroports en France accueillent des vols commerciaux réguliers.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "6",
    question: "Quel est le nombre de ports de commerce en France ?",
    correctAnswer: 70,
    unit: "ports",
    explanation: "La France compte environ 70 ports de commerce actifs.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "7",
    question: "Combien de deux-roues motorisés sont immatriculés en France ?",
    correctAnswer: 3000000,
    unit: "deux-roues",
    explanation: "Environ 3 millions de deux-roues motorisés sont immatriculés en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "8",
    question: "Quelle est la part du transport ferroviaire dans le transport de marchandises en France ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Le transport ferroviaire représente environ 10% du transport de marchandises en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "9",
    question: "Combien de véhicules électriques sont en circulation en France ?",
    correctAnswer: 600000,
    unit: "véhicules",
    explanation: "Plus de 600 000 véhicules électriques circulent en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "10",
    question: "Quelle est la fréquentation annuelle du métro parisien ?",
    correctAnswer: 1500000000,
    unit: "voyageurs",
    explanation: "Le métro parisien accueille environ 1,5 milliard de voyageurs chaque année.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "11",
    question: "Combien de permis de conduire sont délivrés chaque année en France ?",
    correctAnswer: 800000,
    unit: "permis",
    explanation: "Environ 800 000 permis de conduire sont délivrés chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "12",
    question: "Quelle est la longueur totale des lignes de tramway en France ?",
    correctAnswer: 800,
    unit: "km",
    explanation: "Les lignes de tramway en France représentent une longueur totale d'environ 800 km.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "13",
    question: "Combien de bus circulent dans les réseaux de transport urbain en France ?",
    correctAnswer: 60000,
    unit: "bus",
    explanation: "Environ 60 000 bus circulent dans les réseaux de transport urbain en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "14",
    question: "Quelle est la part des énergies renouvelables dans la consommation d'énergie du secteur des transports en France ?",
    correctAnswer: 10,
    unit: "%",
    explanation: "Les énergies renouvelables représentent environ 10% de la consommation d'énergie du secteur des transports en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "15",
    question: "Combien de stations de recharge pour véhicules électriques sont accessibles au public en France ?",
    correctAnswer: 50000,
    unit: "stations",
    explanation: "Plus de 50 000 stations de recharge pour véhicules électriques sont accessibles au public en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr1",
    type: "multistep",
    question: "Combien de trajets sont effectués chaque jour en France en voiture individuelle ?",
    finalExplanation: "Environ 38,5 millions de trajets sont effectués quotidiennement en voiture individuelle en France, selon les études de mobilité nationales.",
    theme: "transport",
    steps: [
      {
        question: "Combien de véhicules particuliers sont en circulation en France ?",
        correctAnswer: 40.7,
        unit: "millions",
        explanation: "Environ 40,7 millions de véhicules particuliers sont actuellement en circulation en France selon les données du Ministère des Transports."
      },
      {
        question: "Quel pourcentage de ces véhicules est utilisé chaque jour ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des véhicules particuliers immatriculés sont utilisés quotidiennement selon les enquêtes de mobilité."
      },
      {
        question: "Combien de trajets distincts un automobiliste réalise-t-il en moyenne par jour ?",
        correctAnswer: 1.4,
        unit: "trajets",
        explanation: "Un automobiliste réalise en moyenne 1,4 trajet distinct par jour (aller-retour domicile-travail, courses, etc.) selon les enquêtes de mobilité."
      },
      {
        question: "Combien de trajets sont donc effectués quotidiennement en voiture individuelle ?",
        correctAnswer: 38.5,
        unit: "millions",
        explanation: "En multipliant le nombre de véhicules (40,7 millions) par le taux d'utilisation (68%) et par le nombre moyen de trajets (1,4), on obtient environ 38,5 millions de trajets quotidiens."
      }
    ]
  },
  {
    id: "tr2",
    type: "multistep",
    question: "Combien de personnes prennent le métro chaque jour en Île-de-France ?",
    finalExplanation: "Environ 4,3 millions de personnes prennent le métro chaque jour en Île-de-France selon les données d'Île-de-France Mobilités.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population d'Île-de-France ?",
        correctAnswer: 12.3,
        unit: "millions",
        explanation: "La population d'Île-de-France est d'environ 12,3 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population utilise les transports en commun ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des Franciliens utilisent régulièrement les transports en commun selon les enquêtes de mobilité régionales."
      },
      {
        question: "Parmi les utilisateurs de transports en commun, quel pourcentage emprunte le métro ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "82% des utilisateurs de transports en commun en Île-de-France empruntent le métro au moins une fois dans leur journée selon Île-de-France Mobilités."
      },
      {
        question: "Combien de personnes prennent donc le métro quotidiennement en Île-de-France ?",
        correctAnswer: 4.3,
        unit: "millions",
        explanation: "En multipliant la population francilienne (12,3 millions) par le taux d'utilisation des transports en commun (43%) et par le taux d'utilisation du métro (82%), on obtient environ 4,3 millions de personnes."
      }
    ]
  },
  {
    id: "tr3",
    question: "Combien de kilomètres sont parcourus en moyenne par un train de marchandises en France chaque jour ?",
    correctAnswer: 400,
    unit: "km",
    explanation: "Un train de marchandises parcourt en moyenne 400 km par jour en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr4",
    question: "Quel est le nombre moyen de passagers par vol commercial en France ?",
    correctAnswer: 150,
    unit: "passagers",
    explanation: "Un vol commercial transporte en moyenne 150 passagers en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr5",
    question: "Combien de tonnes de marchandises sont transportées chaque année par voie fluviale en France ?",
    correctAnswer: 50000000,
    unit: "tonnes",
    explanation: "Environ 50 millions de tonnes de marchandises sont transportées chaque année par voie fluviale en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr6",
    question: "Quel est le pourcentage de ménages français possédant au moins un vélo ?",
    correctAnswer: 60,
    unit: "%",
    explanation: "Environ 60% des ménages français possèdent au moins un vélo.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr7",
    question: "Combien de véhicules sont contrôlés chaque année par les forces de l'ordre en France ?",
    correctAnswer: 20000000,
    unit: "véhicules",
    explanation: "Environ 20 millions de véhicules sont contrôlés chaque année par les forces de l'ordre en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr8",
    question: "Quelle est la distance moyenne parcourue quotidiennement par un utilisateur de VTC en France ?",
    correctAnswer: 40,
    unit: "km",
    explanation: "Un utilisateur de VTC parcourt en moyenne 40 km par jour en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr9",
    question: "Combien de tonnes de CO2 sont émises chaque année par le secteur des transports en France ?",
    correctAnswer: 130000000,
    unit: "tonnes",
    explanation: "Le secteur des transports émet environ 130 millions de tonnes de CO2 chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr10",
    question: "Quel est le budget annuel moyen consacré par un ménage français à ses dépenses de transport ?",
    correctAnswer: 6000,
    unit: "euros",
    explanation: "Un ménage français consacre en moyenne 6 000 euros par an à ses dépenses de transport.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr11",
    question: "Combien de personnes utilisent le covoiturage quotidiennement en France ?",
    correctAnswer: 1000000,
    unit: "personnes",
    explanation: "Environ 1 million de personnes utilisent le covoiturage quotidiennement en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr12",
    question: "Quelle est la vitesse moyenne d'un TGV en France ?",
    correctAnswer: 300,
    unit: "km/h",
    explanation: "La vitesse moyenne d'un TGV en France est de 300 km/h.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr13",
    question: "Combien de véhicules sont volés chaque année en France ?",
    correctAnswer: 120000,
    unit: "véhicules",
    explanation: "Environ 120 000 véhicules sont volés chaque année en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr14",
    question: "Quel est le coût moyen d'un trajet en taxi dans une grande ville française ?",
    correctAnswer: 20,
    unit: "euros",
    explanation: "Le coût moyen d'un trajet en taxi dans une grande ville française est de 20 euros.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr15",
    question: "Combien de personnes travaillent dans le secteur des transports en France ?",
    correctAnswer: 1500000,
    unit: "personnes",
    explanation: "Environ 1,5 million de personnes travaillent dans le secteur des transports en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr16",
    type: "multistep",
    question: "Combien de taxis ou VTC sont en activité dans les grandes villes françaises ?",
    finalExplanation: "Environ 105 000 taxis et VTC sont en activité dans les grandes villes françaises selon les données des autorités de régulation du transport.",
    theme: "transport",
    steps: [
      {
        question: "Combien de grandes villes (plus de 100 000 habitants) y a-t-il en France ?",
        correctAnswer: 42,
        unit: "villes",
        explanation: "Il y a environ 42 villes de plus de 100 000 habitants en France selon les dernières données démographiques de l'INSEE."
      },
      {
        question: "Combien y a-t-il de taxis en moyenne par grande ville ?",
        correctAnswer: 1850,
        unit: "taxis",
        explanation: "On compte en moyenne 1 850 taxis par grande ville française, avec une forte variation selon la taille de la ville."
      },
      {
        question: "Quel est le ratio moyen de VTC par rapport aux taxis dans les grandes villes ?",
        correctAnswer: 0.35,
        unit: "ratio",
        explanation: "Le ratio moyen est d'environ 0,35 VTC pour 1 taxi dans les grandes villes françaises selon les données des autorités de régulation."
      },
      {
        question: "Combien de taxis et VTC sont donc en activité dans les grandes villes françaises ?",
        correctAnswer: 105,
        unit: "milliers",
        explanation: "En multipliant le nombre de grandes villes (42) par le nombre moyen de taxis (1 850) et en ajoutant 35% pour les VTC, on obtient environ 105 000 véhicules."
      }
    ]
  },
  {
    id: "tr17",
    question: "Quel est le chiffre d'affaires annuel du secteur de la location de voitures en France ?",
    correctAnswer: 5000000000,
    unit: "euros",
    explanation: "Le chiffre d'affaires annuel du secteur de la location de voitures en France est de 5 milliards d'euros.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr18",
    question: "Combien de kilomètres de voies navigables sont exploitées pour le transport de marchandises en France ?",
    correctAnswer: 8500,
    unit: "km",
    explanation: "Environ 8 500 km de voies navigables sont exploitées pour le transport de marchandises en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr19",
    question: "Quel est le nombre de ports de plaisance en France ?",
    correctAnswer: 450,
    unit: "ports",
    explanation: "La France compte environ 450 ports de plaisance.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "tr20",
    question: "Combien de drones sont utilisés à des fins professionnelles en France ?",
    correctAnswer: 40000,
    unit: "drones",
    explanation: "Environ 40 000 drones sont utilisés à des fins professionnelles en France.",
    type: "simple",
    theme: "transport"
  },
  {
    id: "trans-101",
    type: "simple",
    question: "Quel est le nombre moyen de kilomètres parcourus par an par une voiture particulière en France ?",
    correctAnswer: 12200,
    unit: "km",
    explanation: "Une voiture particulière en France parcourt en moyenne 12 200 kilomètres par an.",
    theme: "transport"
  },
  {
    id: "trans-102",
    type: "simple",
    question: "Quel est le nombre de voitures pour 1000 habitants en France ?",
    correctAnswer: 571,
    unit: "voitures",
    explanation: "On compte environ 571 voitures pour 1000 habitants en France.",
    theme: "transport"
  },
  {
    id: "trans-103",
    type: "simple",
    question: "Quelle est la vitesse moyenne du trafic en heure de pointe à Paris ?",
    correctAnswer: 15.3,
    unit: "km/h",
    explanation: "La vitesse moyenne du trafic en heure de pointe à Paris est d'environ 15,3 km/h.",
    theme: "transport"
  },
  {
    id: "trans-104",
    type: "simple",
    question: "Quel pourcentage des Français utilise les transports en commun pour se rendre au travail ?",
    correctAnswer: 16.2,
    unit: "%",
    explanation: "Environ 16,2% des Français utilisent les transports en commun comme mode principal pour se rendre au travail.",
    theme: "transport"
  },
  {
    id: "trans-105",
    type: "simple",
    question: "Quelle est la longueur totale du réseau ferroviaire français ?",
    correctAnswer: 29000,
    unit: "km",
    explanation: "Le réseau ferroviaire français compte environ 29 000 kilomètres de voies ferrées.",
    theme: "transport"
  },
  {
    id: "trans-106",
    type: "simple",
    question: "Quel est le nombre annuel de passagers transportés par les aéroports français ?",
    correctAnswer: 174,
    unit: "millions",
    explanation: "Les aéroports français accueillent environ 174 millions de passagers par an (avant la crise du COVID-19).",
    theme: "transport"
  },
  {
    id: "trans-107",
    type: "simple",
    question: "Quel pourcentage du transport de marchandises en France est réalisé par la route ?",
    correctAnswer: 88,
    unit: "%",
    explanation: "Environ 88% du transport de marchandises en France (en tonnes-kilomètres) est réalisé par la route.",
    theme: "transport"
  },
  {
    id: "trans-108",
    type: "simple",
    question: "Quelle est la part des véhicules électriques dans les ventes de voitures neuves en France ?",
    correctAnswer: 14.5,
    unit: "%",
    explanation: "Les véhicules électriques représentent environ 14,5% des ventes de voitures neuves en France.",
    theme: "transport"
  },
  {
    id: "trans-109",
    type: "simple",
    question: "Quelle est la longueur totale du réseau d'autoroutes français ?",
    correctAnswer: 11690,
    unit: "km",
    explanation: "Le réseau d'autoroutes français compte environ 11 690 kilomètres.",
    theme: "transport"
  },
  {
    id: "trans-110",
    type: "simple",
    question: "Quel est l'âge moyen du parc automobile français ?",
    correctAnswer: 10.5,
    unit: "ans",
    explanation: "L'âge moyen des véhicules du parc automobile français est d'environ 10,5 ans.",
    theme: "transport"
  },
  
  // Nouvelles questions à étapes
  {
    id: "tr-ms-001",
    type: "multistep",
    question: "Combien de kilomètres de routes y a-t-il en France ?",
    finalExplanation: "Le réseau routier français compte environ 1,1 million de kilomètres, ce qui en fait l'un des plus denses d'Europe.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la superficie de la France métropolitaine ?",
        correctAnswer: 551695,
        unit: "km²",
        explanation: "La France métropolitaine couvre une superficie d'environ 551 695 km²."
      },
      {
        question: "Quelle est la densité moyenne du réseau routier français (kilomètres de route par km²) ?",
        correctAnswer: 1.99,
        unit: "km/km²",
        explanation: "La densité moyenne du réseau routier français est d'environ 1,99 km de route par km²."
      },
      {
        question: "Combien de kilomètres de routes y a-t-il donc en France ?",
        correctAnswer: 1100000,
        unit: "km",
        explanation: "En multipliant la superficie (551 695 km²) par la densité routière (1,99 km/km²), on obtient environ 1,1 million de kilomètres de routes."
      }
    ]
  },
  {
    id: "tr-ms-002",
    type: "multistep",
    question: "Combien de passagers voyagent en TGV chaque jour en France ?",
    finalExplanation: "Environ 350 000 passagers voyagent quotidiennement en TGV en France, ce qui représente une part importante du trafic ferroviaire national.",
    theme: "transport",
    steps: [
      {
        question: "Combien de TGV circulent chaque jour en France ?",
        correctAnswer: 700,
        unit: "trains",
        explanation: "Environ 700 TGV circulent quotidiennement sur le réseau français."
      },
      {
        question: "Combien de sièges compte un TGV en moyenne ?",
        correctAnswer: 510,
        unit: "sièges",
        explanation: "Un TGV compte en moyenne 510 sièges, selon les modèles et les configurations."
      },
      {
        question: "Quel est le taux d'occupation moyen des TGV ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Le taux d'occupation moyen des TGV est d'environ 70%."
      },
      {
        question: "Combien de passagers voyagent donc en TGV chaque jour ?",
        correctAnswer: 350000,
        unit: "passagers",
        explanation: "En multipliant le nombre de TGV (700) par le nombre moyen de sièges (510) et par le taux d'occupation (70%), on obtient environ 350 000 passagers quotidiens."
      }
    ]
  },
  {
    id: "tr-ms-003",
    type: "multistep",
    question: "Combien de litres de carburant sont consommés chaque jour par les automobilistes français ?",
    finalExplanation: "Environ 64 millions de litres de carburant sont consommés quotidiennement par les automobilistes français, ce qui représente un enjeu économique et environnemental majeur.",
    theme: "transport",
    steps: [
      {
        question: "Combien de véhicules particuliers circulent en France ?",
        correctAnswer: 40,
        unit: "millions",
        explanation: "La France compte environ 40 millions de véhicules particuliers en circulation."
      },
      {
        question: "Quelle proportion de ces véhicules est utilisée chaque jour ?",
        correctAnswer: 80,
        unit: "%",
        explanation: "Environ 80% des véhicules particuliers sont utilisés quotidiennement."
      },
      {
        question: "Combien de kilomètres parcourt en moyenne un véhicule par jour d'utilisation ?",
        correctAnswer: 27,
        unit: "km",
        explanation: "Un véhicule parcourt en moyenne 27 km par jour d'utilisation."
      },
      {
        question: "Quelle est la consommation moyenne de carburant (en litres pour 100 km) ?",
        correctAnswer: 7.4,
        unit: "L/100km",
        explanation: "La consommation moyenne des véhicules en France est d'environ 7,4 litres aux 100 km."
      },
      {
        question: "Combien de litres de carburant sont donc consommés chaque jour ?",
        correctAnswer: 64,
        unit: "millions de litres",
        explanation: "En multipliant le nombre de véhicules (40 millions) par le taux d'utilisation (80%) par la distance quotidienne (27 km) par la consommation (7,4 L/100km), on obtient environ 64 millions de litres par jour."
      }
    ]
  },
  {
    id: "tr-ms-004",
    type: "multistep",
    question: "Combien de personnes empruntent le métro parisien chaque année ?",
    finalExplanation: "Environ 1,8 milliard de trajets sont effectués sur le réseau du métro parisien chaque année, ce qui en fait l'un des réseaux les plus fréquentés au monde.",
    theme: "transport",
    steps: [
      {
        question: "Combien de stations composent le réseau du métro parisien ?",
        correctAnswer: 308,
        unit: "stations",
        explanation: "Le métro parisien compte 308 stations réparties sur 16 lignes."
      },
      {
        question: "Combien de personnes en moyenne fréquentent chaque station par jour ?",
        correctAnswer: 16000,
        unit: "personnes",
        explanation: "En moyenne, environ 16 000 personnes fréquentent chaque station du métro parisien quotidiennement."
      },
      {
        question: "Combien de jours par an le métro parisien est-il en service ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Le métro parisien fonctionne 365 jours par an, même si les horaires peuvent varier selon les jours."
      },
      {
        question: "Combien de trajets sont donc effectués sur le métro parisien chaque année ?",
        correctAnswer: 1.8,
        unit: "milliard",
        explanation: "En multipliant le nombre de stations (308) par la fréquentation moyenne (16 000 personnes) par le nombre de jours d'exploitation (365), on obtient environ 1,8 milliard de trajets annuels."
      }
    ]
  },
  {
    id: "tr-ms-005",
    type: "multistep",
    question: "Combien de kilomètres sont parcourus par les trains de marchandises en France chaque année ?",
    finalExplanation: "Les trains de marchandises parcourent environ 36 millions de kilomètres chaque année en France, contribuant significativement au transport de fret du pays.",
    theme: "transport",
    steps: [
      {
        question: "Combien de trains de marchandises circulent quotidiennement en France ?",
        correctAnswer: 700,
        unit: "trains",
        explanation: "Environ 700 trains de marchandises circulent chaque jour sur le réseau ferroviaire français."
      },
      {
        question: "Quelle distance parcourt en moyenne un train de marchandises par jour ?",
        correctAnswer: 140,
        unit: "km",
        explanation: "Un train de marchandises parcourt en moyenne 140 km par jour en France."
      },
      {
        question: "Combien de jours par an les trains de marchandises circulent-ils ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les trains de marchandises circulent 365 jours par an, bien que le volume puisse varier selon les périodes."
      },
      {
        question: "Combien de kilomètres sont donc parcourus par les trains de marchandises chaque année ?",
        correctAnswer: 36,
        unit: "millions",
        explanation: "En multipliant le nombre de trains (700) par la distance moyenne quotidienne (140 km) par le nombre de jours d'exploitation (365), on obtient environ 36 millions de kilomètres par an."
      }
    ]
  },
  {
    id: "tr-ms-006",
    type: "multistep",
    question: "Combien de kilomètres sont parcourus par les Français en avion chaque année ?",
    finalExplanation: "Les Français parcourent environ 174 milliards de kilomètres en avion chaque année, reflétant l'importance du transport aérien dans les déplacements nationaux et internationaux.",
    theme: "transport",
    steps: [
      {
        question: "Combien de voyages en avion les Français effectuent-ils en moyenne chaque année ?",
        correctAnswer: 145,
        unit: "millions",
        explanation: "Les Français effectuent environ 145 millions de voyages en avion par an (vols nationaux et internationaux)."
      },
      {
        question: "Quelle est la distance moyenne d'un voyage en avion pour un Français ?",
        correctAnswer: 1200,
        unit: "km",
        explanation: "La distance moyenne d'un voyage en avion pour un Français est d'environ 1 200 km."
      },
      {
        question: "Combien de kilomètres sont donc parcourus par les Français en avion chaque année ?",
        correctAnswer: 174,
        unit: "milliards",
        explanation: "En multipliant le nombre de voyages (145 millions) par la distance moyenne (1 200 km), on obtient environ 174 milliards de kilomètres par an."
      }
    ]
  },
  {
    id: "tr-ms-007",
    type: "multistep",
    question: "Combien de vélos sont vendus chaque année en France ?",
    finalExplanation: "Environ 2,7 millions de vélos sont vendus chaque année en France, un chiffre en augmentation avec l'intérêt croissant pour les mobilités douces.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population de la France ?",
        correctAnswer: 68,
        unit: "millions",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Quel est le taux de renouvellement annuel du parc de vélos en France (pourcentage de la population qui achète un vélo neuf chaque année) ?",
        correctAnswer: 3.97,
        unit: "%",
        explanation: "Environ 3,97% de la population française achète un vélo neuf chaque année."
      },
      {
        question: "Combien de vélos sont donc vendus chaque année en France ?",
        correctAnswer: 2.7,
        unit: "millions",
        explanation: "En multipliant la population (68 millions) par le taux d'achat annuel (3,97%), on obtient environ 2,7 millions de vélos vendus par an."
      }
    ]
  },
  {
    id: "tr-ms-008",
    type: "multistep",
    question: "Combien de voyageurs utilisent les transports en commun en France chaque jour ?",
    finalExplanation: "Environ 16 millions de voyageurs utilisent les transports en commun chaque jour en France, une part significative de la mobilité quotidienne.",
    theme: "transport",
    steps: [
      {
        question: "Quelle est la population active de la France ?",
        correctAnswer: 29,
        unit: "millions",
        explanation: "La France compte environ 29 millions d'actifs (personnes en emploi ou cherchant un emploi)."
      },
      {
        question: "Quel pourcentage des actifs utilise les transports en commun pour se rendre au travail ?",
        correctAnswer: 16.5,
        unit: "%",
        explanation: "Environ 16,5% des actifs utilisent les transports en commun comme mode principal pour se rendre au travail."
      },
      {
        question: "En plus des trajets domicile-travail, combien
