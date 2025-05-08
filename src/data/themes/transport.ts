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
  }
];
