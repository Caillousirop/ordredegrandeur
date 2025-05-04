
import { Question, MultiStepQuestion, QuizTheme } from "@/components/types";

export const questions: (Question | MultiStepQuestion)[] = [
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
    id: "2",
    question: "Quelle est la température moyenne mondiale en 2023 (en degrés Celsius) ?",
    correctAnswer: 14.8,
    unit: "°C",
    explanation: "La température moyenne mondiale en 2023 était d'environ 14,8°C, ce qui est plus élevé que la moyenne pré-industrielle.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "3",
    question: "Quel était le taux de chômage en France en 2023 ?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France en 2023 était d'environ 7,1% selon l'INSEE.",
    type: "simple",
    theme: "économie"
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
    question: "Combien de femmes de plus de 50 ans ont un diplôme Bac+5 en France ?",
    finalExplanation: "D'après les statistiques de l'INSEE, environ 420 000 femmes de plus de 50 ans possèdent un diplôme de niveau Bac+5 ou plus en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de femmes de plus de 50 ans en France ?",
        correctAnswer: 13.2,
        unit: "millions",
        explanation: "En France, il y a environ 13,2 millions de femmes âgées de plus de 50 ans selon les dernières données démographiques."
      },
      {
        question: "Quel pourcentage de la population française possède un diplôme Bac+5 ?",
        correctAnswer: 10.5,
        unit: "%",
        explanation: "Environ 10,5% de la population française détient un diplôme de niveau Bac+5 ou plus."
      },
      {
        question: "Parmi les femmes de plus de 50 ans, combien possèdent un diplôme Bac+5 ?",
        correctAnswer: 420000,
        unit: "personnes",
        explanation: "Le croisement des données démographiques et éducatives montre qu'environ 420 000 femmes de plus de 50 ans ont un diplôme Bac+5."
      }
    ]
  },
  {
    id: "7",
    type: "multistep",
    question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants en France ?",
    finalExplanation: "En croisant les données d'immatriculation et d'urbanisme, on estime qu'environ 210 000 voitures électriques circulent dans les grandes villes françaises de plus de 100 000 habitants.",
    theme: "environnement",
    steps: [
      {
        question: "Combien y a-t-il de voitures électriques en France au total ?",
        correctAnswer: 620000,
        unit: "véhicules",
        explanation: "La France compte environ 620 000 voitures électriques immatriculées selon les dernières statistiques."
      },
      {
        question: "Quel pourcentage de la population française vit dans des villes de plus de 100 000 habitants ?",
        correctAnswer: 34,
        unit: "%",
        explanation: "Environ 34% de la population française vit dans des villes de plus de 100 000 habitants."
      },
      {
        question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants ?",
        correctAnswer: 210000,
        unit: "véhicules",
        explanation: "En appliquant la répartition démographique et les taux d'adoption plus élevés en zones urbaines, on estime ce nombre à 210 000 véhicules."
      }
    ]
  },
  // Nouveaux thèmes et questions - Santé
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
  // Éducation
  {
    id: "11",
    question: "Quel est le budget annuel moyen par élève dans l'enseignement primaire ?",
    correctAnswer: 7840,
    unit: "€",
    explanation: "Selon le Ministère de l'Éducation nationale et l'INSEE, le budget annuel moyen consacré à un élève du primaire est d'environ 7 840 euros.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "12",
    question: "Quel est le pourcentage d'une génération obtenant le baccalauréat en France ?",
    correctAnswer: 80.1,
    unit: "%",
    explanation: "Selon les chiffres de l'INSEE, environ 80,1% d'une génération obtient le baccalauréat en France.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "13",
    type: "multistep",
    question: "Combien d'heures d'enseignement un élève français reçoit-il entre 6 et 18 ans ?",
    finalExplanation: "Un élève français reçoit environ 10 800 heures d'enseignement entre 6 et 18 ans selon les données du Ministère de l'Éducation nationale.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'heures de cours un élève reçoit-il en moyenne par semaine ?",
        correctAnswer: 27,
        unit: "heures",
        explanation: "Un élève reçoit en moyenne 27 heures de cours par semaine dans le système éducatif français."
      },
      {
        question: "Combien de semaines d'école y a-t-il par an en France ?",
        correctAnswer: 36,
        unit: "semaines",
        explanation: "L'année scolaire en France compte environ 36 semaines de cours."
      },
      {
        question: "Combien d'années d'enseignement obligatoire y a-t-il entre 6 et 18 ans ?",
        correctAnswer: 12,
        unit: "années",
        explanation: "Entre 6 et 18 ans, il y a 12 années d'enseignement obligatoire en France."
      },
      {
        question: "Quel est le nombre total d'heures d'enseignement reçues entre 6 et 18 ans ?",
        correctAnswer: 10800,
        unit: "heures",
        explanation: "En multipliant 27 heures par semaine × 36 semaines par an × 12 années, on obtient un total d'environ 10 800 heures."
      }
    ]
  },
  // Transport
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
  // Technologie
  {
    id: "17",
    question: "Quel est le pourcentage de foyers français équipés d'une connexion internet ?",
    correctAnswer: 92,
    unit: "%",
    explanation: "Selon l'INSEE, 92% des foyers français sont équipés d'une connexion internet en 2023.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "18",
    question: "Combien d'heures par semaine un Français passe-t-il en moyenne sur son smartphone ?",
    correctAnswer: 27,
    unit: "heures",
    explanation: "Selon les études de l'ARCEP et de l'INSEE, un Français passe en moyenne 27 heures par semaine sur son smartphone.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "19",
    type: "multistep",
    question: "Combien de données numériques sont produites en France chaque année ?",
    finalExplanation: "La France produit environ 1,3 exaoctets (millions de téraoctets) de données numériques par an selon les estimations de l'INSEE.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de données numériques un Français produit-il en moyenne par jour ?",
        correctAnswer: 2.5,
        unit: "Go",
        explanation: "Un Français produit en moyenne 2,5 gigaoctets de données numériques par jour."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La population française est estimée à 67,8 millions d'habitants selon l'INSEE."
      },
      {
        question: "Combien de données sont produites annuellement en France ?",
        correctAnswer: 1.3,
        unit: "exaoctets",
        explanation: "En multipliant 2,5 Go × 365 jours × 67,8 millions d'habitants, puis en convertissant, on obtient environ 1,3 exaoctets par an."
      }
    ]
  },
  // Emploi
  {
    id: "20",
    question: "Quel est le nombre d'heures travaillées en moyenne par semaine en France ?",
    correctAnswer: 35.6,
    unit: "heures",
    explanation: "Selon l'INSEE, les Français travaillent en moyenne 35,6 heures par semaine (tous types de contrats confondus).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "21",
    question: "Quel est le salaire médian mensuel net en France en 2023 ?",
    correctAnswer: 1940,
    unit: "€",
    explanation: "Le salaire médian mensuel net en France est d'environ 1 940 euros selon les données de l'INSEE.",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "22",
    type: "multistep",
    question: "Combien de jours de congés payés sont pris en moyenne par les Français chaque année ?",
    finalExplanation: "Les Français prennent en moyenne 37 jours de congés payés par an (incluant RTT et congés payés standards).",
    theme: "emploi",
    steps: [
      {
        question: "Quel est le nombre minimum légal de jours de congés payés en France ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Le minimum légal de congés payés en France est de 25 jours ouvrés (5 semaines)."
      },
      {
        question: "Combien de jours RTT un salarié français reçoit-il en moyenne par an ?",
        correctAnswer: 12,
        unit: "jours",
        explanation: "Un salarié français reçoit en moyenne 12 jours RTT par an, selon les statistiques du Ministère du Travail."
      },
      {
        question: "Combien de jours de congés payés (RTT inclus) sont pris en moyenne par an ?",
        correctAnswer: 37,
        unit: "jours",
        explanation: "En moyenne, les Français prennent 37 jours de congés par an, en additionnant les congés payés standards et les RTT."
      }
    ]
  }
];

export const themes: QuizTheme[] = [
  { 
    id: "démographie", 
    name: "Démographie", 
    description: "Questions sur la population et ses caractéristiques",
    color: "from-blue-500 to-blue-300",
    icon: "users"
  },
  { 
    id: "économie", 
    name: "Économie", 
    description: "Questions sur l'économie et les finances",
    color: "from-green-500 to-green-300",
    icon: "banknote"
  },
  { 
    id: "environnement", 
    name: "Environnement", 
    description: "Questions sur l'écologie et l'environnement",
    color: "from-emerald-500 to-emerald-300",
    icon: "leaf"
  },
  { 
    id: "santé", 
    name: "Santé", 
    description: "Questions sur la santé et les soins médicaux",
    color: "from-red-500 to-red-300",
    icon: "heart-pulse"
  },
  { 
    id: "éducation", 
    name: "Éducation", 
    description: "Questions sur l'enseignement et l'apprentissage",
    color: "from-amber-500 to-amber-300",
    icon: "graduation-cap"
  },
  { 
    id: "transport", 
    name: "Transport", 
    description: "Questions sur la mobilité et les transports",
    color: "from-sky-500 to-sky-300",
    icon: "train-front"
  },
  { 
    id: "technologie", 
    name: "Technologie", 
    description: "Questions sur le numérique et l'innovation",
    color: "from-indigo-500 to-indigo-300",
    icon: "cpu"
  },
  { 
    id: "emploi", 
    name: "Emploi", 
    description: "Questions sur le travail et les carrières",
    color: "from-purple-500 to-purple-300",
    icon: "briefcase"
  }
];
