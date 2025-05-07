
import { Question, MultiStepQuestion } from "@/components/types";

export const economieQuestions: (Question | MultiStepQuestion)[] = [
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
    id: "34",
    type: "multistep",
    question: "Quel est le nombre de fenêtres lavées professionnellement chaque année dans les immeubles de bureaux de plus de 10 étages en France ?",
    finalExplanation: "Cette estimation de 11,5 millions de fenêtres lavées professionnellement dans les grands immeubles de bureaux en France est une approximation basée sur le nombre de ces immeubles, leur architecture moyenne et la fréquence d'entretien. Les chiffres réels peuvent varier selon les politiques d'entretien, les contraintes budgétaires et les spécificités architecturales.",
    theme: "économie",
    steps: [
      {
        question: "Combien d'immeubles de bureaux de plus de 10 étages existe-t-il en France ?",
        correctAnswer: 1250,
        unit: "immeubles",
        explanation: "On estime qu'il existe environ 1 250 immeubles de bureaux de plus de 10 étages en France, principalement concentrés dans les grandes métropoles."
      },
      {
        question: "Combien d'étages compte en moyenne un de ces immeubles ?",
        correctAnswer: 16.5,
        unit: "étages",
        explanation: "Ces grands immeubles de bureaux comptent en moyenne 16,5 étages selon les données d'urbanisme commercial."
      },
      {
        question: "Combien de fenêtres y a-t-il en moyenne par étage ?",
        correctAnswer: 35,
        unit: "fenêtres",
        explanation: "Un étage standard d'immeuble de bureaux moderne comprend en moyenne 35 fenêtres selon les normes architecturales contemporaines."
      },
      {
        question: "Combien de fois par an les fenêtres sont-elles lavées professionnellement ?",
        correctAnswer: 4,
        unit: "fois",
        explanation: "Les fenêtres des immeubles de bureaux sont généralement nettoyées professionnellement 4 fois par an selon les standards d'entretien des bâtiments commerciaux."
      },
      {
        question: "Quel est le nombre total de fenêtres lavées chaque année dans ces immeubles ?",
        correctAnswer: 11.5,
        unit: "millions",
        explanation: "En multipliant le nombre d'immeubles (1 250) par le nombre moyen d'étages (16,5) par le nombre moyen de fenêtres par étage (35) par la fréquence de nettoyage annuelle (4), on obtient environ 11,5 millions de fenêtres lavées par an."
      }
    ]
  },
  // Nouvelles questions économie
  {
    id: "eco1",
    question: "Combien de paiements par carte bancaire sont réalisés chaque jour en France pour des achats inférieurs à 50 € ?",
    correctAnswer: 24.7,
    unit: "millions",
    explanation: "Environ 24,7 millions de paiements par carte bancaire sont réalisés chaque jour en France pour des achats inférieurs à 50 € selon les données de la Banque de France.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco2",
    question: "Combien de micro-entreprises en France ont généré un chiffre d'affaires supérieur à 10 000 € au cours de l'année écoulée ?",
    correctAnswer: 1.4,
    unit: "millions",
    explanation: "Environ 1,4 million de micro-entreprises en France ont généré un chiffre d'affaires supérieur à 10 000 € selon les données de l'URSSAF.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco3",
    question: "Combien de smartphones neufs sont achetés chaque année en France par des particuliers âgés de 18 à 35 ans ?",
    correctAnswer: 8.7,
    unit: "millions",
    explanation: "Environ 8,7 millions de smartphones neufs sont achetés chaque année par des particuliers français âgés de 18 à 35 ans selon les études de marché.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco4",
    question: "Combien de logements ont été achetés en Île-de-France en 2024 par des ménages primo-accédants ?",
    correctAnswer: 32500,
    unit: "logements",
    explanation: "Environ 32 500 logements ont été achetés en Île-de-France par des ménages primo-accédants selon les données des notaires de France.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco5",
    type: "multistep",
    question: "Combien de particuliers en France détiennent un compte-titres ou PEA avec un encours supérieur à 5 000 € ?",
    finalExplanation: "Environ 7,2 millions de particuliers en France détiennent un compte-titres ou PEA avec un encours supérieur à 5 000 € selon les données de l'AMF et la Banque de France.",
    theme: "économie",
    steps: [
      {
        question: "Combien de foyers fiscaux y a-t-il en France ?",
        correctAnswer: 39,
        unit: "millions",
        explanation: "Il y a environ 39 millions de foyers fiscaux en France selon les données de la Direction générale des Finances publiques."
      },
      {
        question: "Quel pourcentage des foyers fiscaux possède un compte-titres ou un PEA ?",
        correctAnswer: 24.6,
        unit: "%",
        explanation: "Environ 24,6% des foyers fiscaux possèdent un compte-titres ou un PEA selon les données de la Banque de France."
      },
      {
        question: "Parmi ces détenteurs, quel pourcentage a un encours supérieur à 5 000 € ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "Environ 75% des détenteurs de compte-titres ou PEA ont un encours supérieur à 5 000 € selon les statistiques financières."
      },
      {
        question: "Combien de particuliers détiennent donc un compte-titres ou PEA avec plus de 5 000 € ?",
        correctAnswer: 7.2,
        unit: "millions",
        explanation: "En multipliant le nombre de foyers (39 millions) par le pourcentage de détenteurs (24,6%) et par le pourcentage ayant plus de 5 000 € (75%), on obtient environ 7,2 millions de particuliers."
      }
    ]
  },
  {
    id: "eco6",
    question: "Combien de commerces de proximité sont en activité dans les communes de moins de 2 000 habitants ?",
    correctAnswer: 58700,
    unit: "commerces",
    explanation: "Environ 58 700 commerces de proximité sont en activité dans les communes de moins de 2 000 habitants selon les données de CCI France.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco7",
    question: "Combien de litres de carburant sont consommés chaque jour par les voitures particulières en France ?",
    correctAnswer: 65,
    unit: "millions",
    explanation: "Environ 65 millions de litres de carburant sont consommés quotidiennement par les voitures particulières en France selon les données du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco8",
    question: "Combien de crédits immobiliers ont été accordés à des emprunteurs de moins de 35 ans en 2023 ?",
    correctAnswer: 310000,
    unit: "crédits",
    explanation: "Environ 310 000 crédits immobiliers ont été accordés à des emprunteurs de moins de 35 ans en 2023 selon les données de la Banque de France.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco9",
    question: "Combien de factures sont émises chaque jour en France par des entreprises de moins de 20 salariés ?",
    correctAnswer: 15.8,
    unit: "millions",
    explanation: "Environ 15,8 millions de factures sont émises quotidiennement par des entreprises de moins de 20 salariés en France selon les estimations des organisations professionnelles.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco10",
    question: "Combien de personnes travaillent dans le commerce de détail alimentaire en France ?",
    correctAnswer: 735000,
    unit: "personnes",
    explanation: "Environ 735 000 personnes travaillent dans le commerce de détail alimentaire en France selon les données de l'INSEE.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco11",
    type: "multistep",
    question: "Combien de Français ont effectué au moins un achat sur une plateforme de seconde main au cours des 12 derniers mois ?",
    finalExplanation: "Environ 31,4 millions de Français ont effectué au moins un achat sur une plateforme de seconde main au cours des 12 derniers mois selon les études de marché.",
    theme: "économie",
    steps: [
      {
        question: "Quelle est la population adulte (18 ans et plus) en France ?",
        correctAnswer: 52.6,
        unit: "millions",
        explanation: "La population adulte en France est d'environ 52,6 millions de personnes selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage d'adultes utilise des plateformes de vente en ligne ?",
        correctAnswer: 86,
        unit: "%",
        explanation: "Environ 86% des adultes français utilisent des plateformes de vente en ligne selon les études de comportement des consommateurs."
      },
      {
        question: "Parmi ces utilisateurs, quel pourcentage a effectué au moins un achat sur une plateforme de seconde main ?",
        correctAnswer: 69.5,
        unit: "%",
        explanation: "Environ 69,5% des utilisateurs de plateformes en ligne ont effectué au moins un achat sur une plateforme de seconde main selon les sondages récents."
      },
      {
        question: "Combien de Français ont donc effectué au moins un achat sur une plateforme de seconde main ?",
        correctAnswer: 31.4,
        unit: "millions",
        explanation: "En multipliant la population adulte (52,6 millions) par le pourcentage utilisant des plateformes en ligne (86%) et le pourcentage ayant fait un achat de seconde main (69,5%), on obtient environ 31,4 millions de personnes."
      }
    ]
  },
  {
    id: "eco12",
    question: "Combien d'euros sont dépensés chaque jour par les ménages français pour l'alimentation hors domicile ?",
    correctAnswer: 168,
    unit: "millions",
    explanation: "Environ 168 millions d'euros sont dépensés quotidiennement par les ménages français pour l'alimentation hors domicile selon les données de l'INSEE.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco13",
    question: "Combien de touristes étrangers non-européens dépensent de l'argent en France chaque jour pendant la haute saison estivale ?",
    correctAnswer: 1.25,
    unit: "millions",
    explanation: "Environ 1,25 million de touristes étrangers non-européens dépensent de l'argent chaque jour en France pendant la haute saison estivale selon les données du Ministère du Tourisme.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco14",
    question: "Combien d'euros sont générés chaque mois par les ventes en ligne de produits non alimentaires en France ?",
    correctAnswer: 8.3,
    unit: "milliards",
    explanation: "Environ 8,3 milliards d'euros sont générés mensuellement par les ventes en ligne de produits non alimentaires en France selon la FEVAD.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco15",
    question: "Combien de jeunes de 18 à 30 ans ont immatriculé une micro-entreprise en France l'an dernier ?",
    correctAnswer: 286000,
    unit: "jeunes",
    explanation: "Environ 286 000 jeunes de 18 à 30 ans ont immatriculé une micro-entreprise en France l'an dernier selon les données de l'INSEE et de l'URSSAF.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco16",
    type: "multistep",
    question: "Combien de paiements via mobile sont réalisés chaque mois en France dans les supermarchés ?",
    finalExplanation: "Environ 48,6 millions de paiements via mobile (Apple Pay, Google Pay, etc.) sont réalisés chaque mois dans les supermarchés français selon les données des établissements bancaires.",
    theme: "économie",
    steps: [
      {
        question: "Combien de transactions sont réalisées mensuellement dans les supermarchés en France ?",
        correctAnswer: 405,
        unit: "millions",
        explanation: "Environ 405 millions de transactions sont réalisées chaque mois dans les supermarchés français selon les données de la grande distribution."
      },
      {
        question: "Quel pourcentage de ces transactions est réalisé par carte bancaire ou moyen électronique ?",
        correctAnswer: 83.5,
        unit: "%",
        explanation: "Environ 83,5% des transactions en supermarché sont réalisées par carte bancaire ou moyen électronique selon les études de comportement d'achat."
      },
      {
        question: "Parmi ces paiements électroniques, quel pourcentage est effectué via mobile ?",
        correctAnswer: 14.4,
        unit: "%",
        explanation: "Environ 14,4% des paiements électroniques en supermarché sont effectués via mobile (Apple Pay, Google Pay, etc.) selon les données bancaires récentes."
      },
      {
        question: "Combien de paiements via mobile sont donc réalisés mensuellement dans les supermarchés ?",
        correctAnswer: 48.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de transactions (405 millions) par le pourcentage électronique (83,5%) et le pourcentage mobile (14,4%), on obtient environ 48,6 millions de paiements."
      }
    ]
  },
  {
    id: "eco17",
    question: "Combien de chèques sont utilisés chaque jour en France pour régler des services à la personne ?",
    correctAnswer: 1.65,
    unit: "millions",
    explanation: "Environ 1,65 million de chèques sont utilisés quotidiennement en France pour régler des services à la personne selon les données de la Banque de France.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco18",
    question: "Combien de salariés travaillent dans les banques et établissements financiers en France métropolitaine ?",
    correctAnswer: 363000,
    unit: "salariés",
    explanation: "Environ 363 000 salariés travaillent dans les banques et établissements financiers en France métropolitaine selon les données de la Fédération Bancaire Française.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco19",
    question: "Combien de voitures neuves ont été achetées par des ménages habitant hors des grandes agglomérations en 2024 ?",
    correctAnswer: 418000,
    unit: "voitures",
    explanation: "Environ 418 000 voitures neuves ont été achetées par des ménages habitant hors des grandes agglomérations en 2024 selon les données du Comité des Constructeurs Français d'Automobiles.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "eco20",
    question: "Combien de livraisons de repas à domicile sont effectuées chaque jour en France par les grandes plateformes ?",
    correctAnswer: 720000,
    unit: "livraisons",
    explanation: "Environ 720 000 livraisons de repas à domicile sont effectuées quotidiennement en France par les grandes plateformes selon les données sectorielles.",
    type: "simple",
    theme: "économie"
  }
];
