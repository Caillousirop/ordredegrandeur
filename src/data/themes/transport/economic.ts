
import { Question, MultiStepQuestion } from "@/components/types";

export const economicTransportQuestions: (Question | MultiStepQuestion)[] = [
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
    id: "tr8",
    question: "Quelle est la distance moyenne parcourue quotidiennement par un utilisateur de VTC en France ?",
    correctAnswer: 40,
    unit: "km",
    explanation: "Un utilisateur de VTC parcourt en moyenne 40 km par jour en France.",
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
        correctAnswer: 105000,
        unit: "taxis et VTC",
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
    id: "tr-ms-003",
    type: "multistep",
    question: "Combien de litres de carburant sont consommés chaque jour par les automobilistes français ?",
    finalExplanation: "Environ 64 millions de litres de carburant sont consommés quotidiennement par les automobilistes français, ce qui représente un enjeu économique et environnemental majeur.",
    theme: "transport",
    steps: [
      {
        question: "Combien de véhicules particuliers circulent en France ?",
        correctAnswer: 40000000,
        unit: "véhicules",
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
        correctAnswer: 64000000,
        unit: "litres",
        explanation: "En multipliant le nombre de véhicules (40 millions) par le taux d'utilisation (80%) par la distance quotidienne (27 km) par la consommation (7,4 L/100km), on obtient environ 64 millions de litres par jour."
      }
    ]
  },
  {
    id: "trans-106",
    type: "simple",
    question: "Quel est le nombre annuel de passagers transportés par les aéroports français ?",
    correctAnswer: 174000000,
    unit: "passagers",
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
  }
];
