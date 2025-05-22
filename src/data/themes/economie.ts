
import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur l'économie
export const economieQuestionsOriginal: (Question | MultiStepQuestion)[] = [
  {
    id: "13",
    question: "Quel est le PIB de la France en milliards d'euros ?",
    correctAnswer: 2500,
    unit: "milliards €",
    explanation: "Le PIB de la France est d'environ 2 500 milliards d'euros en 2023.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "14",
    question: "Quel est le montant moyen d'un salaire mensuel net en France ?",
    correctAnswer: 2520,
    unit: "€",
    explanation: "Le salaire moyen net en France est d'environ 2 520 euros par mois.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "15",
    question: "Quel est le taux de chômage en France ?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France est d'environ 7,1% de la population active.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "16",
    question: "Combien y a-t-il d'entreprises en France ?",
    correctAnswer: 4000000,
    unit: "entreprises",
    explanation: "Il y a environ 4 millions d'entreprises en France (incluant auto-entrepreneurs, TPE, PME et grandes entreprises).",
    type: "simple",
    theme: "economie"
  },
  {
    id: "17",
    question: "Quel est le montant de la dette publique de la France en % du PIB ?",
    correctAnswer: 112.9,
    unit: "% du PIB",
    explanation: "La dette publique de la France représente environ 112,9% du PIB.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "18",
    question: "Combien coûte une baguette de pain en moyenne en France ?",
    correctAnswer: 1.29,
    unit: "€",
    explanation: "Le prix moyen d'une baguette de pain en France est d'environ 1,29€.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "19",
    type: "multistep",
    question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
    finalExplanation: "Un ménage français dépense en moyenne 2 570 € par mois, tous postes de dépenses confondus (logement, alimentation, transport, loisirs, etc.)",
    theme: "economie",
    steps: [
      {
        question: "Quel est le revenu moyen disponible d'un ménage français par mois ?",
        correctAnswer: 3100,
        unit: "€",
        explanation: "Le revenu disponible moyen d'un ménage français est d'environ 3 100 € par mois."
      },
      {
        question: "Quel pourcentage de ce revenu est dépensé en moyenne ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "En moyenne, un ménage français dépense environ 83% de son revenu disponible."
      },
      {
        question: "Combien d'euros un ménage français dépense-t-il en moyenne par mois ?",
        correctAnswer: 2570,
        unit: "€",
        explanation: "3 100 € × 83% = 2 570 €"
      }
    ]
  },
  {
    id: "eco1",
    type: "multistep",
    question: "Combien d'impôts sur le revenu sont collectés chaque année en France ?",
    finalExplanation: "Environ 97 milliards d'euros d'impôts sur le revenu sont collectés chaque année en France, ce qui représente une part importante des recettes fiscales de l'État.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de foyers fiscaux en France ?",
        correctAnswer: 39,
        unit: "millions",
        explanation: "Il y a environ 39 millions de foyers fiscaux en France selon la Direction Générale des Finances Publiques."
      },
      {
        question: "Parmi ces foyers fiscaux, quel pourcentage est effectivement imposable ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des foyers fiscaux sont effectivement imposables en France, les autres étant non imposables en raison de revenus insuffisants ou d'exonérations."
      },
      {
        question: "Quel est le montant moyen d'impôt sur le revenu payé par foyer imposable par an ?",
        correctAnswer: 5800,
        unit: "€",
        explanation: "Le montant moyen d'impôt sur le revenu payé par foyer imposable est d'environ 5 800 € par an."
      },
      {
        question: "Combien d'impôts sur le revenu sont collectés chaque année en France ?",
        correctAnswer: 97,
        unit: "milliards €",
        explanation: "En multipliant le nombre de foyers fiscaux imposables (39 millions × 43% = 16,77 millions) par le montant moyen d'impôt (5 800 €), on obtient environ 97 milliards d'euros d'impôts sur le revenu collectés annuellement."
      }
    ]
  },
  {
    id: "eco2",
    type: "multistep",
    question: "Combien d'argent les Français épargnent-ils chaque année ?",
    finalExplanation: "Les Français épargnent environ 208 milliards d'euros chaque année, soit un des taux d'épargne les plus élevés d'Europe.",
    theme: "economie",
    steps: [
      {
        question: "Quel est le revenu disponible total des ménages français par an ?",
        correctAnswer: 1600,
        unit: "milliards €",
        explanation: "Le revenu disponible total des ménages français est d'environ 1 600 milliards d'euros par an."
      },
      {
        question: "Quel est le taux d'épargne moyen des ménages français (pourcentage du revenu disponible) ?",
        correctAnswer: 13,
        unit: "%",
        explanation: "Le taux d'épargne moyen des ménages français est d'environ 13% du revenu disponible, un des plus élevés d'Europe."
      },
      {
        question: "Combien d'argent les Français épargnent-ils chaque année ?",
        correctAnswer: 208,
        unit: "milliards €",
        explanation: "En multipliant le revenu disponible total (1 600 milliards €) par le taux d'épargne (13%), on obtient environ 208 milliards d'euros épargnés chaque année."
      }
    ]
  },
  {
    id: "eco3",
    type: "multistep",
    question: "Quel est le chiffre d'affaires total de la grande distribution alimentaire en France par an ?",
    finalExplanation: "La grande distribution alimentaire en France génère environ 234 milliards d'euros de chiffre d'affaires par an, un secteur économique majeur dans le pays.",
    theme: "economie",
    steps: [
      {
        question: "Combien chaque ménage français dépense-t-il en moyenne dans la grande distribution alimentaire par mois ?",
        correctAnswer: 650,
        unit: "€",
        explanation: "Chaque ménage français dépense en moyenne 650 € par mois dans la grande distribution alimentaire."
      },
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "Il y a environ 30 millions de ménages en France selon l'INSEE."
      },
      {
        question: "Quel est le chiffre d'affaires total de la grande distribution alimentaire en France par an ?",
        correctAnswer: 234,
        unit: "milliards €",
        explanation: "En multipliant la dépense moyenne par ménage (650 €) par le nombre de ménages (30 millions) puis par 12 mois, on obtient environ 234 milliards d'euros de chiffre d'affaires annuel."
      }
    ]
  },
  {
    id: "eco4",
    type: "multistep",
    question: "Combien de transactions sont réalisées par carte bancaire en France chaque jour ?",
    finalExplanation: "Environ 34 millions de transactions sont réalisées par carte bancaire en France chaque jour, reflétant l'importance croissante des paiements électroniques dans l'économie française.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de cartes bancaires en circulation en France ?",
        correctAnswer: 72,
        unit: "millions",
        explanation: "Il y a environ 72 millions de cartes bancaires en circulation en France."
      },
      {
        question: "Combien de transactions une carte bancaire moyenne réalise-t-elle par semaine ?",
        correctAnswer: 3.3,
        unit: "transactions",
        explanation: "Une carte bancaire moyenne en France réalise environ 3,3 transactions par semaine."
      },
      {
        question: "Combien de transactions sont réalisées par carte bancaire en France chaque jour ?",
        correctAnswer: 34,
        unit: "millions",
        explanation: "En multipliant le nombre de cartes (72 millions) par le nombre de transactions hebdomadaires (3,3) puis en divisant par 7 jours, on obtient environ 34 millions de transactions quotidiennes."
      }
    ]
  },
  {
    id: "eco5",
    type: "multistep",
    question: "Quel est le montant total des achats en ligne réalisés en France chaque année ?",
    finalExplanation: "Les Français réalisent environ 129 milliards d'euros d'achats en ligne chaque année, un marché en constante progression depuis plusieurs années.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il d'acheteurs en ligne en France ?",
        correctAnswer: 43,
        unit: "millions",
        explanation: "Il y a environ 43 millions d'acheteurs en ligne en France."
      },
      {
        question: "Combien chaque acheteur en ligne dépense-t-il en moyenne par an sur internet ?",
        correctAnswer: 3000,
        unit: "€",
        explanation: "Chaque acheteur en ligne français dépense en moyenne 3 000 € par an sur internet."
      },
      {
        question: "Quel est le montant total des achats en ligne réalisés en France chaque année ?",
        correctAnswer: 129,
        unit: "milliards €",
        explanation: "En multipliant le nombre d'acheteurs en ligne (43 millions) par la dépense moyenne annuelle (3 000 €), on obtient environ 129 milliards d'euros d'achats en ligne par an."
      }
    ]
  },
  {
    id: "eco6",
    type: "multistep",
    question: "Combien d'euros sont dépensés dans les restaurants en France chaque jour ?",
    finalExplanation: "Environ 186 millions d'euros sont dépensés dans les restaurants en France chaque jour, illustrant l'importance de la gastronomie et de la restauration dans l'économie française.",
    theme: "economie",
    steps: [
      {
        question: "Combien de repas sont servis dans les restaurants français chaque jour ?",
        correctAnswer: 6.2,
        unit: "millions",
        explanation: "Environ 6,2 millions de repas sont servis dans les restaurants français chaque jour."
      },
      {
        question: "Quel est le montant moyen dépensé par repas au restaurant en France ?",
        correctAnswer: 30,
        unit: "€",
        explanation: "Le montant moyen dépensé par repas au restaurant en France est d'environ 30 € par personne."
      },
      {
        question: "Combien d'euros sont dépensés dans les restaurants en France chaque jour ?",
        correctAnswer: 186,
        unit: "millions €",
        explanation: "En multipliant le nombre de repas servis (6,2 millions) par la dépense moyenne (30 €), on obtient environ 186 millions d'euros dépensés quotidiennement dans les restaurants."
      }
    ]
  },
  {
    id: "eco7",
    type: "multistep",
    question: "Quel est le montant total des loyers payés en France chaque mois ?",
    finalExplanation: "Environ 11,2 milliards d'euros de loyers sont payés en France chaque mois, représentant une part importante des dépenses des ménages et un secteur économique majeur.",
    theme: "economie",
    steps: [
      {
        question: "Combien de logements locatifs y a-t-il en France ?",
        correctAnswer: 14,
        unit: "millions",
        explanation: "Il y a environ 14 millions de logements locatifs en France selon les données de l'INSEE."
      },
      {
        question: "Quel est le loyer moyen mensuel en France (tous types de logements confondus) ?",
        correctAnswer: 800,
        unit: "€",
        explanation: "Le loyer moyen mensuel en France est d'environ 800 € tous types de logements confondus."
      },
      {
        question: "Quel est le montant total des loyers payés en France chaque mois ?",
        correctAnswer: 11.2,
        unit: "milliards €",
        explanation: "En multipliant le nombre de logements locatifs (14 millions) par le loyer moyen (800 €), on obtient environ 11,2 milliards d'euros de loyers payés mensuellement."
      }
    ]
  },
  {
    id: "eco8",
    type: "multistep",
    question: "Combien de voitures neuves sont vendues en France chaque année ?",
    finalExplanation: "Environ 1,6 million de voitures neuves sont vendues en France chaque année, un marché qui évolue avec les nouvelles technologies et les préoccupations environnementales.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de ménages en France ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "Il y a environ 30 millions de ménages en France selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces ménages achète une voiture neuve chaque année ?",
        correctAnswer: 5.3,
        unit: "%",
        explanation: "Environ 5,3% des ménages français achètent une voiture neuve chaque année."
      },
      {
        question: "Combien de voitures neuves sont vendues en France chaque année ?",
        correctAnswer: 1.6,
        unit: "million",
        explanation: "En multipliant le nombre de ménages (30 millions) par le pourcentage achetant une voiture neuve (5,3%), on obtient environ 1,6 million de voitures neuves vendues annuellement."
      }
    ]
  },
  {
    id: "eco9",
    type: "multistep",
    question: "Combien d'argent est dépensé en médicaments en France chaque année ?",
    finalExplanation: "Environ 37 milliards d'euros sont dépensés en médicaments en France chaque année, un poste important des dépenses de santé.",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la dépense de santé totale en France par an ?",
        correctAnswer: 185,
        unit: "milliards €",
        explanation: "La dépense de santé totale en France est d'environ 185 milliards d'euros par an."
      },
      {
        question: "Quel pourcentage de ces dépenses de santé est consacré aux médicaments ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des dépenses de santé en France sont consacrés aux médicaments."
      },
      {
        question: "Combien d'argent est dépensé en médicaments en France chaque année ?",
        correctAnswer: 37,
        unit: "milliards €",
        explanation: "En multipliant les dépenses de santé totales (185 milliards €) par le pourcentage consacré aux médicaments (20%), on obtient environ 37 milliards d'euros de dépenses annuelles en médicaments."
      }
    ]
  },
  {
    id: "eco10",
    type: "multistep",
    question: "Combien de billets de train sont vendus en France chaque jour ?",
    finalExplanation: "Environ 380 000 billets de train sont vendus en France chaque jour, permettant la mobilité de millions de Français à travers le territoire.",
    theme: "economie",
    steps: [
      {
        question: "Combien de voyages en train sont effectués en France par an ?",
        correctAnswer: 138,
        unit: "millions",
        explanation: "Environ 138 millions de voyages en train sont effectués en France chaque année."
      },
      {
        question: "Quelle part de ces voyages correspond à des billets vendus individuellement (hors abonnements) ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% de ces voyages correspondent à des billets vendus individuellement, le reste étant couvert par des abonnements."
      },
      {
        question: "Combien de billets de train sont vendus en France chaque jour ?",
        correctAnswer: 380000,
        unit: "billets",
        explanation: "En multipliant le nombre annuel de voyages (138 millions) par la part des billets individuels (78%) puis en divisant par 365 jours, on obtient environ 380 000 billets vendus quotidiennement."
      }
    ]
  },
  {
    id: "eco11",
    type: "multistep",
    question: "Combien d'euros les Français jouent-ils en paris sportifs chaque année ?",
    finalExplanation: "Les Français misent environ 12 milliards d'euros en paris sportifs chaque année, un secteur en forte croissance depuis la légalisation des paris en ligne.",
    theme: "economie",
    steps: [
      {
        question: "Combien de parieurs sportifs actifs y a-t-il en France ?",
        correctAnswer: 3.6,
        unit: "millions",
        explanation: "On compte environ 3,6 millions de parieurs sportifs actifs en France."
      },
      {
        question: "Quelle somme un parieur moyen mise-t-il chaque année ?",
        correctAnswer: 3300,
        unit: "€",
        explanation: "Un parieur sportif français mise en moyenne 3 300 € par an."
      },
      {
        question: "Combien d'euros les Français jouent-ils en paris sportifs chaque année ?",
        correctAnswer: 12,
        unit: "milliards €",
        explanation: "En multipliant le nombre de parieurs (3,6 millions) par la mise moyenne annuelle (3 300 €), on obtient environ 12 milliards d'euros misés chaque année."
      }
    ]
  },
  {
    id: "eco12",
    type: "multistep",
    question: "Quel est le chiffre d'affaires du e-commerce en France sur une journée moyenne ?",
    finalExplanation: "Le e-commerce en France génère environ 353 millions d'euros de chiffre d'affaires sur une journée moyenne, témoignant de l'importance croissante de ce canal de vente.",
    theme: "economie",
    steps: [
      {
        question: "Quel est le chiffre d'affaires annuel du e-commerce en France ?",
        correctAnswer: 129,
        unit: "milliards €",
        explanation: "Le chiffre d'affaires annuel du e-commerce en France est d'environ 129 milliards d'euros."
      },
      {
        question: "Comment se répartit ce chiffre d'affaires entre les jours de la semaine ? Quel coefficient multiplicateur faut-il appliquer pour obtenir le CA d'une journée moyenne à partir du CA annuel divisé par 365 ?",
        correctAnswer: 1,
        unit: "(coefficient)",
        explanation: "Le coefficient est d'environ 1, car le chiffre d'affaires quotidien moyen est relativement stable sur l'année malgré des pics saisonniers."
      },
      {
        question: "Quel est le chiffre d'affaires du e-commerce en France sur une journée moyenne ?",
        correctAnswer: 353,
        unit: "millions €",
        explanation: "En divisant le chiffre d'affaires annuel (129 milliards €) par 365 jours et en appliquant le coefficient (129 milliards ÷ 365 × 1), on obtient environ 353 millions d'euros par jour."
      }
    ]
  },
  {
    id: "eco13",
    type: "multistep",
    question: "Combien de repas sont livrés à domicile chaque jour en France ?",
    finalExplanation: "Environ 950 000 repas sont livrés à domicile chaque jour en France, un marché qui a connu une croissance exponentielle ces dernières années, notamment avec l'essor des plateformes de livraison.",
    theme: "economie",
    steps: [
      {
        question: "Combien de personnes en France utilisent régulièrement (au moins une fois par mois) des services de livraison de repas ?",
        correctAnswer: 15.2,
        unit: "millions",
        explanation: "Environ 15,2 millions de Français utilisent régulièrement des services de livraison de repas."
      },
      {
        question: "Combien de fois par mois en moyenne ces utilisateurs commandent-ils un repas livré ?",
        correctAnswer: 1.9,
        unit: "commandes",
        explanation: "Ces utilisateurs commandent en moyenne 1,9 repas livré par mois."
      },
      {
        question: "Combien de repas sont livrés à domicile chaque jour en France ?",
        correctAnswer: 950000,
        unit: "repas",
        explanation: "En multipliant le nombre d'utilisateurs (15,2 millions) par le nombre moyen de commandes mensuelles (1,9) puis en divisant par 30,4 jours (moyenne mensuelle), on obtient environ 950 000 repas livrés quotidiennement."
      }
    ]
  },
  {
    id: "eco14",
    type: "multistep",
    question: "Quel est le montant moyen sur un Livret A en France ?",
    finalExplanation: "Le montant moyen sur un Livret A en France est d'environ 6 000 €, bien que ce chiffre cache d'importantes disparités entre les détenteurs.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de Livrets A ouverts en France ?",
        correctAnswer: 55,
        unit: "millions",
        explanation: "Il y a environ 55 millions de Livrets A ouverts en France, soit plus que le nombre d'habitants car certains possèdent plusieurs livrets (notamment des enfants)."
      },
      {
        question: "Quel est l'encours total (somme totale déposée) sur l'ensemble des Livrets A ?",
        correctAnswer: 330,
        unit: "milliards €",
        explanation: "L'encours total sur l'ensemble des Livrets A en France est d'environ 330 milliards d'euros."
      },
      {
        question: "Quel est le montant moyen sur un Livret A en France ?",
        correctAnswer: 6000,
        unit: "€",
        explanation: "En divisant l'encours total (330 milliards €) par le nombre de livrets (55 millions), on obtient un montant moyen d'environ 6 000 € par Livret A."
      }
    ]
  }
];

// Questions d'emploi intégrées dans l'économie
export const emploiQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "emp1",
    question: "Combien y a-t-il de travailleurs en France ?",
    correctAnswer: 30,
    unit: "millions",
    explanation: "La France compte environ 30 millions de personnes en emploi.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "emp2",
    question: "Quel est le salaire minimum (SMIC) horaire brut en France ?",
    correctAnswer: 11.52,
    unit: "€",
    explanation: "Le SMIC horaire brut en France est de 11,52 € en 2024.",
    type: "simple",
    theme: "economie"
  },
  {
    id: "emp3",
    type: "multistep",
    question: "Combien d'heures sont travaillées en France chaque jour ?",
    finalExplanation: "Les Français travaillent environ 237 millions d'heures par jour ouvrable, un chiffre qui montre l'ampleur de l'activité économique du pays.",
    theme: "economie",
    steps: [
      {
        question: "Combien y a-t-il de personnes qui travaillent en France ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "La France compte environ 30 millions de personnes en emploi."
      },
      {
        question: "Combien d'heures un travailleur français travaille-t-il en moyenne par jour ?",
        correctAnswer: 7.9,
        unit: "heures",
        explanation: "Un travailleur français travaille en moyenne 7,9 heures par jour."
      },
      {
        question: "Combien d'heures sont travaillées en France chaque jour ?",
        correctAnswer: 237,
        unit: "millions",
        explanation: "En multipliant le nombre de travailleurs (30 millions) par le nombre moyen d'heures travaillées par jour (7,9), on obtient environ 237 millions d'heures travaillées quotidiennement en France."
      }
    ]
  },
  {
    id: "emp4",
    type: "multistep",
    question: "Combien de jours de congés payés sont pris par les Français chaque année ?",
    finalExplanation: "Les Français prennent environ 770 millions de jours de congés payés par an, ce qui reflète l'importance des vacances et du temps de repos dans la culture française.",
    theme: "economie",
    steps: [
      {
        question: "Combien de jours de congés payés les salariés français ont-ils droit par an ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Les salariés français ont droit à 5 semaines de congés payés par an, soit 25 jours ouvrés."
      },
      {
        question: "Combien y a-t-il de salariés en France ?",
        correctAnswer: 28,
        unit: "millions",
        explanation: "La France compte environ 28 millions de salariés."
      },
      {
        question: "Quel pourcentage des congés payés disponibles sont effectivement pris par les salariés ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des congés payés disponibles sont effectivement pris par les salariés français."
      },
      {
        question: "Combien de jours de congés payés sont pris par les Français chaque année ?",
        correctAnswer: 770,
        unit: "millions",
        explanation: "En multipliant le nombre de salariés (28 millions) par le nombre de jours de congés payés (25) puis par le pourcentage de congés effectivement pris (92%), on obtient environ 770 millions de jours de congés payés pris annuellement."
      }
    ]
  }
];

// Import les questions emploi historiques pour assurer la compatibilité
import { emploiQuestions as originalEmploiQuestions } from "./emploi";

// Combinaison des questions économie et emploi
export const economieQuestions = [
  ...economieQuestionsOriginal,
  ...emploiQuestions,
  ...originalEmploiQuestions // Ajoute également les questions d'emploi historiques
];
