
import { Question, MultiStepQuestion } from "@/components/types";

export const usageTransportQuestions: (Question | MultiStepQuestion)[] = [
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
        question: "En plus des trajets domicile-travail, combien de personnes utilisent les transports en commun pour d'autres motifs ?",
        correctAnswer: 6.25,
        unit: "millions",
        explanation: "Environ 6,25 millions de personnes utilisent les transports en commun pour d'autres motifs que le trajet domicile-travail."
      },
      {
        question: "Combien de personnes utilisent donc les transports en commun chaque jour en France ?",
        correctAnswer: 16,
        unit: "millions",
        explanation: "En additionnant les utilisateurs pour les trajets domicile-travail (environ 4,78 millions) et les utilisateurs pour d'autres motifs (6,25 millions), et en tenant compte des personnes qui font plusieurs trajets, on arrive à environ 16 millions d'utilisateurs quotidiens."
      }
    ]
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
  }
];
