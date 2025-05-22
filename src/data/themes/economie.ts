import { Question, MultiStepQuestion } from "@/components/types";
import { emploiQuestions } from "./emploi";

// Exporting all economy questions combined with employment questions
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
  // Nouvelles questions économie transformées en multi-étapes
  {
    id: "eco1",
    type: "multistep",
    question: "Combien de paiements par carte bancaire sont réalisés chaque jour en France pour des achats inférieurs à 50 € ?",
    finalExplanation: "Environ 24,7 millions de paiements par carte bancaire sont réalisés chaque jour en France pour des achats inférieurs à 50 € selon les données de la Banque de France et des réseaux de paiement.",
    theme: "économie",
    steps: [
      {
        question: "Combien de paiements par carte bancaire sont effectués quotidiennement en France (tous montants confondus) ?",
        correctAnswer: 41.2,
        unit: "millions",
        explanation: "Environ 41,2 millions de paiements par carte bancaire sont effectués chaque jour en France selon les données de la Banque de France."
      },
      {
        question: "Quel pourcentage de ces paiements correspond à des montants inférieurs à 50 € ?",
        correctAnswer: 60,
        unit: "%",
        explanation: "Environ 60% des paiements par carte bancaire en France concernent des achats inférieurs à 50 € selon les études des réseaux de paiement."
      },
      {
        question: "Combien de paiements par carte bancaire sont donc réalisés quotidiennement pour des achats inférieurs à 50 € ?",
        correctAnswer: 24.7,
        unit: "millions",
        explanation: "En multipliant le nombre total de paiements quotidiens (41,2 millions) par le pourcentage de paiements inférieurs à 50 € (60%), on obtient environ 24,7 millions de paiements."
      }
    ]
  },
  {
    id: "eco2",
    type: "multistep",
    question: "Combien de micro-entreprises en France ont généré un chiffre d'affaires supérieur à 10 000 € au cours de l'année écoulée ?",
    finalExplanation: "Environ 1,4 million de micro-entreprises en France ont généré un chiffre d'affaires supérieur à 10 000 € au cours de l'année écoulée selon les données de l'URSSAF et de l'INSEE.",
    theme: "économie",
    steps: [
      {
        question: "Combien de micro-entreprises sont actuellement enregistrées en France ?",
        correctAnswer: 2.8,
        unit: "millions",
        explanation: "Environ 2,8 millions de micro-entreprises sont actuellement enregistrées en France selon les données de l'URSSAF."
      },
      {
        question: "Quel pourcentage de ces micro-entreprises est réellement actif (a réalisé au moins une facturation) ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "Environ 75% des micro-entreprises enregistrées sont réellement actives et ont réalisé au moins une facturation dans l'année selon les études de l'INSEE."
      },
      {
        question: "Parmi les micro-entreprises actives, quel pourcentage génère un chiffre d'affaires supérieur à 10 000 € ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des micro-entreprises actives génèrent un chiffre d'affaires annuel supérieur à 10 000 € selon les données fiscales et de l'URSSAF."
      },
      {
        question: "Combien de micro-entreprises ont donc généré un chiffre d'affaires supérieur à 10 000 € ?",
        correctAnswer: 1.4,
        unit: "millions",
        explanation: "En multipliant le nombre total de micro-entreprises (2,8 millions) par le taux d'activité (75%) et par le pourcentage dépassant 10 000 € (67%), on obtient environ 1,4 million de micro-entreprises."
      }
    ]
  },
  {
    id: "eco3",
    type: "multistep",
    question: "Combien de smartphones neufs sont achetés chaque année en France par des particuliers âgés de 18 à 35 ans ?",
    finalExplanation: "Environ 8,7 millions de smartphones neufs sont achetés chaque année par des particuliers français âgés de 18 à 35 ans selon les études de marché et les données des distributeurs.",
    theme: "économie",
    steps: [
      {
        question: "Combien de smartphones neufs sont vendus chaque année en France (tous acheteurs confondus) ?",
        correctAnswer: 21.6,
        unit: "millions",
        explanation: "Environ 21,6 millions de smartphones neufs sont vendus chaque année en France selon les données du marché de la téléphonie mobile."
      },
      {
        question: "Quel pourcentage de ces smartphones est acheté par des particuliers (et non des entreprises) ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% des smartphones neufs sont achetés par des particuliers selon les études de consommation et les données des distributeurs."
      },
      {
        question: "Quelle part des achats de particuliers est réalisée par des personnes âgées de 18 à 35 ans ?",
        correctAnswer: 48,
        unit: "%",
        explanation: "Environ 48% des achats de smartphones par des particuliers sont réalisés par des personnes âgées de 18 à 35 ans selon les analyses démographiques des consommateurs."
      },
      {
        question: "Combien de smartphones neufs sont donc achetés par des particuliers de 18 à 35 ans ?",
        correctAnswer: 8.7,
        unit: "millions",
        explanation: "En multipliant le nombre total de smartphones vendus (21,6 millions) par la part des particuliers (85%) et par la part des 18-35 ans (48%), on obtient environ 8,7 millions de smartphones."
      }
    ]
  },
  {
    id: "eco4",
    type: "multistep",
    question: "Combien de logements ont été achetés en Île-de-France en 2024 par des ménages primo-accédants ?",
    finalExplanation: "Environ 32 500 logements ont été achetés en Île-de-France par des ménages primo-accédants selon les données des notaires de France et les statistiques immobilières régionales.",
    theme: "économie",
    steps: [
      {
        question: "Combien de transactions immobilières résidentielles ont lieu chaque année en Île-de-France ?",
        correctAnswer: 157000,
        unit: "transactions",
        explanation: "Environ 157 000 transactions immobilières résidentielles ont lieu chaque année en Île-de-France selon les données des notaires de France."
      },
      {
        question: "Quel pourcentage de ces transactions concerne des logements (appartements ou maisons) ?",
        correctAnswer: 94,
        unit: "%",
        explanation: "Environ 94% de ces transactions concernent des logements (le reste étant des terrains, locaux commerciaux, etc.) selon les statistiques immobilières."
      },
      {
        question: "Parmi ces achats de logements, quel pourcentage est réalisé par des primo-accédants ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Environ 22% des achats de logements en Île-de-France sont réalisés par des primo-accédants selon les études des organismes de crédit et les données notariales."
      },
      {
        question: "Combien de logements ont donc été achetés par des primo-accédants en Île-de-France ?",
        correctAnswer: 32500,
        unit: "logements",
        explanation: "En multipliant le nombre total de transactions (157 000) par le pourcentage concernant des logements (94%) et par la part des primo-accédants (22%), on obtient environ 32 500 logements."
      }
    ]
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
    type: "multistep",
    question: "Combien de commerces de proximité sont en activité dans les communes de moins de 2 000 habitants ?",
    finalExplanation: "Environ 58 700 commerces de proximité sont en activité dans les communes de moins de 2 000 habitants selon les données de CCI France et de l'INSEE.",
    theme: "économie",
    steps: [
      {
        question: "Combien de communes de moins de 2 000 habitants existe-t-il en France ?",
        correctAnswer: 27850,
        unit: "communes",
        explanation: "Il existe environ 27 850 communes de moins de 2 000 habitants en France selon les données de l'INSEE."
      },
      {
        question: "Combien de ces communes disposent d'au moins un commerce de proximité ?",
        correctAnswer: 64,
        unit: "%",
        explanation: "Environ 64% de ces communes disposent d'au moins un commerce de proximité (boulangerie, épicerie, tabac, etc.) selon les données de CCI France."
      },
      {
        question: "Combien de commerces de proximité y a-t-il en moyenne dans les communes équipées ?",
        correctAnswer: 3.3,
        unit: "commerces",
        explanation: "Il y a en moyenne 3,3 commerces de proximité par commune équipée selon les études sur le commerce rural."
      },
      {
        question: "Combien de commerces de proximité sont donc en activité dans ces communes ?",
        correctAnswer: 58700,
        unit: "commerces",
        explanation: "En multipliant le nombre de communes (27 850) par le pourcentage équipé (64%) et par le nombre moyen de commerces (3,3), on obtient environ 58 700 commerces."
      }
    ]
  },
  {
    id: "eco7",
    type: "multistep",
    question: "Combien de litres de carburant sont consommés chaque jour par les voitures particulières en France ?",
    finalExplanation: "Environ 65 millions de litres de carburant sont consommés quotidiennement par les voitures particulières en France selon les données du Ministère de la Transition Écologique.",
    theme: "économie",
    steps: [
      {
        question: "Combien de voitures particulières circulent en France ?",
        correctAnswer: 40.7,
        unit: "millions",
        explanation: "Environ 40,7 millions de voitures particulières circulent en France selon les données du Ministère des Transports."
      },
      {
        question: "Quel pourcentage de ces voitures est utilisé quotidiennement ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% de ces voitures sont utilisées quotidiennement selon les enquêtes de mobilité."
      },
      {
        question: "Quelle est la distance moyenne parcourue par jour par une voiture en circulation ?",
        correctAnswer: 35,
        unit: "km",
        explanation: "Une voiture en circulation parcourt en moyenne 35 km par jour selon les données de mobilité nationale."
      },
      {
        question: "Quelle est la consommation moyenne de carburant aux 100 km ?",
        correctAnswer: 6.7,
        unit: "litres",
        explanation: "La consommation moyenne de carburant est d'environ 6,7 litres aux 100 km pour le parc automobile français actuel."
      },
      {
        question: "Combien de litres de carburant sont donc consommés quotidiennement ?",
        correctAnswer: 65,
        unit: "millions",
        explanation: "En multipliant le nombre de voitures (40,7 millions) par le taux d'utilisation (68%) par la distance moyenne (35 km) et par la consommation (6,7 l/100 km), on obtient environ 65 millions de litres par jour."
      }
    ]
  },
  {
    id: "eco8",
    type: "multistep",
    question: "Combien de crédits immobiliers ont été accordés à des emprunteurs de moins de 35 ans en 2023 ?",
    finalExplanation: "Environ 310 000 crédits immobiliers ont été accordés à des emprunteurs de moins de 35 ans en 2023 selon les données de la Banque de France.",
    theme: "économie",
    steps: [
      {
        question: "Combien de crédits immobiliers ont été accordés au total en France en 2023 ?",
        correctAnswer: 937000,
        unit: "crédits",
        explanation: "Environ 937 000 crédits immobiliers ont été accordés au total en France en 2023 selon les données de la Banque de France."
      },
      {
        question: "Quel pourcentage de ces crédits a été accordé à des particuliers (et non à des professionnels) ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% de ces crédits ont été accordés à des particuliers selon les statistiques bancaires."
      },
      {
        question: "Parmi ces crédits accordés à des particuliers, quel pourcentage concerne des emprunteurs de moins de 35 ans ?",
        correctAnswer: 36,
        unit: "%",
        explanation: "Environ 36% des crédits immobiliers accordés à des particuliers concernent des emprunteurs de moins de 35 ans selon les études des organismes de crédit."
      },
      {
        question: "Combien de crédits immobiliers ont donc été accordés à des moins de 35 ans ?",
        correctAnswer: 310000,
        unit: "crédits",
        explanation: "En multipliant le nombre total de crédits (937 000) par le pourcentage accordé aux particuliers (92%) et par la part des moins de 35 ans (36%), on obtient environ 310 000 crédits."
      }
    ]
  },
  {
    id: "eco9",
    type: "multistep",
    question: "Combien de factures sont émises chaque jour en France par des entreprises de moins de 20 salariés ?",
    finalExplanation: "Environ 15,8 millions de factures sont émises quotidiennement par des entreprises de moins de 20 salariés en France selon les estimations des organisations professionnelles.",
    theme: "économie",
    steps: [
      {
        question: "Combien d'entreprises de moins de 20 salariés existe-t-il en France ?",
        correctAnswer: 3.85,
        unit: "millions",
        explanation: "Environ 3,85 millions d'entreprises de moins de 20 salariés existent en France selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces entreprises émet régulièrement des factures (activité commerciale réelle) ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Environ 82% de ces entreprises émettent régulièrement des factures, les autres étant des structures dormantes ou sans activité commerciale."
      },
      {
        question: "Combien de factures une entreprise active de moins de 20 salariés émet-elle en moyenne par jour ouvré ?",
        correctAnswer: 5.8,
        unit: "factures",
        explanation: "Une entreprise active de moins de 20 salariés émet en moyenne 5,8 factures par jour ouvré selon les données des logiciels de facturation."
      },
      {
        question: "Combien de factures sont donc émises quotidiennement par ces entreprises ?",
        correctAnswer: 15.8,
        unit: "millions",
        explanation: "En multipliant le nombre d'entreprises (3,85 millions) par le taux d'activité (82%) et par le nombre moyen de factures (5,8), on obtient environ 15,8 millions de factures par jour."
      }
    ]
  },
  {
    id: "eco10",
    type: "multistep",
    question: "Combien de personnes travaillent dans le commerce de détail alimentaire en France ?",
    finalExplanation: "Environ 735 000 personnes travaillent dans le commerce de détail alimentaire en France selon les données de l'INSEE.",
    theme: "économie",
    steps: [
      {
        question: "Combien de points de vente de détail alimentaire existe-t-il en France ?",
        correctAnswer: 73500,
        unit: "points de vente",
        explanation: "Environ 73 500 points de vente de détail alimentaire existent en France selon les données de la Fédération du Commerce et de la Distribution."
      },
      {
        question: "Comment se répartissent ces points de vente entre grandes surfaces et petits commerces ?",
        correctAnswer: 22,
        unit: "% grandes surfaces",
        explanation: "Environ 22% sont des grandes surfaces (supermarchés, hypermarchés) et 78% des petits commerces alimentaires (boulangeries, boucheries, etc.)."
      },
      {
        question: "Combien de salariés compte en moyenne une grande surface alimentaire ?",
        correctAnswer: 45,
        unit: "salariés",
        explanation: "Une grande surface alimentaire compte en moyenne 45 salariés selon les données sociales du secteur."
      },
      {
        question: "Combien de personnes travaillent en moyenne dans un petit commerce alimentaire ?",
        correctAnswer: 4.5,
        unit: "personnes",
        explanation: "Un petit commerce alimentaire emploie en moyenne 4,5 personnes (salariés et gérants) selon les études sectorielles."
      },
      {
        question: "Combien de personnes travaillent donc dans le commerce de détail alimentaire en France ?",
        correctAnswer: 735000,
        unit: "personnes",
        explanation: "En additionnant le nombre de grandes surfaces (73 500 × 22%) × 45 salariés et le nombre de petits commerces (73 500 × 78%) × 4,5 personnes, on obtient environ 735 000 personnes."
      }
    ]
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
    type: "multistep",
    question: "Combien d'euros sont dépensés chaque jour par les ménages français pour l'alimentation hors domicile ?",
    finalExplanation: "Environ 168 millions d'euros sont dépensés quotidiennement par les ménages français pour l'alimentation hors domicile selon les données de l'INSEE.",
    theme: "économie",
    steps: [
      {
        question: "Combien de ménages y a-t-il en France ?",
        correctAnswer: 30.5,
        unit: "millions",
        explanation: "Il y a environ 30,5 millions de ménages en France selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces ménages consomme de l'alimentation hors domicile au moins occasionnellement ?",
        correctAnswer: 87,
        unit: "%",
        explanation: "Environ 87% des ménages français consomme de l'alimentation hors domicile au moins occasionnellement selon les enquêtes de consommation."
      },
      {
        question: "Quelle est la dépense mensuelle moyenne d'un ménage pour l'alimentation hors domicile ?",
        correctAnswer: 210,
        unit: "euros",
        explanation: "Un ménage consommateur dépense en moyenne 210 euros par mois pour l'alimentation hors domicile (restaurants, cantines, etc.) selon les études budgétaires."
      },
      {
        question: "Combien d'euros sont donc dépensés quotidiennement par les ménages pour l'alimentation hors domicile ?",
        correctAnswer: 168,
        unit: "millions",
        explanation: "En multipliant le nombre de ménages (30,5 millions) par le pourcentage consommateur (87%) et par la dépense mensuelle (210 €) divisée par 30 jours, on obtient environ 168 millions d'euros par jour."
      }
    ]
  },
  {
    id: "eco13",
    type: "multistep",
    question: "Combien de touristes étrangers non-européens dépensent de l'argent en France chaque jour pendant la haute saison estivale ?",
    finalExplanation: "Environ 1,25 million de touristes étrangers non-européens dépensent de l'argent chaque jour en France pendant la haute saison estivale selon les données du Ministère du Tourisme.",
    theme: "économie",
    steps: [
      {
        question: "Combien de touristes étrangers visitent la France chaque année ?",
        correctAnswer: 90,
        unit: "millions",
        explanation: "Environ 90 millions de touristes étrangers visitent la France chaque année selon les données d'Atout France et du Ministère du Tourisme."
      },
      {
        question: "Quel pourcentage de ces touristes vient de pays non-européens ?",
        correctAnswer: 32,
        unit: "%",
        explanation: "Environ 32% des touristes étrangers viennent de pays non-européens selon les statistiques d'entrée sur le territoire."
      },
      {
        question: "Quelle part du tourisme annuel a lieu pendant la haute saison estivale (juin-septembre) ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% du tourisme annuel a lieu pendant la haute saison estivale (juin-septembre) selon les données d'occupation."
      },
      {
        question: "Quelle est la durée moyenne de séjour d'un touriste non-européen en France ?",
        correctAnswer: 9.7,
        unit: "jours",
        explanation: "La durée moyenne de séjour d'un touriste non-européen en France est de 9,7 jours selon les enquêtes touristiques."
      },
      {
        question: "Combien de touristes étrangers non-européens sont donc présents chaque jour en haute saison ?",
        correctAnswer: 1.25,
        unit: "millions",
        explanation: "En calculant (90 millions × 32% × 42%) / 365 jours × 9,7 jours, on obtient environ 1,25 million de touristes étrangers non-européens présents chaque jour en haute saison."
      }
    ]
  },
  {
    id: "eco14",
    type: "multistep",
    question: "Combien d'euros sont générés chaque mois par les ventes en ligne de produits non alimentaires en France ?",
    finalExplanation: "Environ 8,3 milliards d'euros sont générés mensuellement par les ventes en ligne de produits non alimentaires en France selon la FEVAD.",
    theme: "économie",
    steps: [
      {
        question: "Quel est le chiffre d'affaires annuel du e-commerce en France (tous produits confondus) ?",
        correctAnswer: 146,
        unit: "milliards",
        explanation: "Le chiffre d'affaires annuel du e-commerce en France est d'environ 146 milliards d'euros selon la Fédération du e-commerce et de la vente à distance (FEVAD)."
      },
      {
        question: "Quelle part de ce chiffre d'affaires concerne des produits non alimentaires ?",
        correctAnswer: 68.5,
        unit: "%",
        explanation: "Environ 68,5% du chiffre d'affaires du e-commerce concerne des produits non alimentaires selon les analyses sectorielles."
      },
      {
        question: "Les ventes en ligne sont-elles réparties uniformément sur l'année ?",
        correctAnswer: 0,
        unit: "non",
        explanation: "Non, les ventes en ligne ne sont pas réparties uniformément sur l'année, avec des pics significatifs lors des périodes promotionnelles et des fêtes."
      },
      {
        question: "Combien d'euros sont donc générés mensuellement par les ventes en ligne de produits non alimentaires ?",
        correctAnswer: 8.3,
        unit: "milliards",
        explanation: "En divisant le chiffre d'affaires annuel (146 milliards) par 12 mois et en le multipliant par la part non alimentaire (68,5%), on obtient environ 8,3 milliards d'euros par mois."
      }
    ]
  },
  {
    id: "eco15",
    type: "multistep",
    question: "Combien de jeunes de 18 à 30 ans ont immatriculé une micro-entreprise en France l'an dernier ?",
    finalExplanation: "Environ 286 000 jeunes de 18 à 30 ans ont immatriculé une micro-entreprise en France l'an dernier selon les données de l'INSEE et de l'URSSAF.",
    theme: "économie",
    steps: [
      {
        question: "Combien de micro-entreprises ont été immatriculées au total en France l'an dernier ?",
        correctAnswer: 650000,
        unit: "micro-entreprises",
        explanation: "Environ 650 000 micro-entreprises ont été immatriculées au total en France l'an dernier selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage des créateurs de micro-entreprises a entre 18 et 30 ans ?",
        correctAnswer: 44,
        unit: "%",
        explanation: "Environ 44% des créateurs de micro-entreprises sont âgés de 18 à 30 ans selon les statistiques démographiques des entrepreneurs."
      },
      {
        question: "Combien de jeunes de 18 à 30 ans ont donc immatriculé une micro-entreprise ?",
        correctAnswer: 286000,
        unit: "jeunes",
        explanation: "En multipliant le nombre total d'immatriculations (650 000) par le pourcentage de jeunes créateurs (44%), on obtient environ 286 000 jeunes entrepreneurs."
      }
    ]
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
    type: "multistep",
    question: "Combien de chèques sont utilisés chaque jour en France pour régler des services à la personne ?",
    finalExplanation: "Environ 1,65 million de chèques sont utilisés quotidiennement en France pour régler des services à la personne selon les données de la Banque de France.",
    theme: "économie",
    steps: [
      {
        question: "Combien de chèques sont émis chaque jour en France (tous usages confondus) ?",
        correctAnswer: 4.7,
        unit: "millions",
        explanation: "Environ 4,7 millions de chèques sont émis chaque jour en France selon les données de la Banque de France."
      },
      {
        question: "Quelle part des paiements par chèque concerne des paiements aux particuliers ?",
        correctAnswer: 53,
        unit: "%",
        explanation: "Environ 53% des paiements par chèque sont destinés à des particuliers (et non à des professionnels ou administrations) selon les études de moyens de paiement."
      },
      {
        question: "Parmi ces paiements aux particuliers, quelle part concerne spécifiquement des services à la personne ?",
        correctAnswer: 66,
        unit: "%",
        explanation: "Environ 66% de ces paiements aux particuliers concernent des services à la personne (aide à domicile, garde d'enfants, etc.) selon les données sociales."
      },
      {
        question: "Combien de chèques sont donc utilisés quotidiennement pour régler des services à la personne ?",
        correctAnswer: 1.65,
        unit: "millions",
        explanation: "En multipliant le nombre total de chèques émis (4,7 millions) par la part destinée aux particuliers (53%) et par la part concernant des services à la personne (66%), on obtient environ 1,65 million de chèques."
      }
    ]
  },
  {
    id: "eco18",
    type: "multistep",
    question: "Combien de salariés travaillent dans les banques et établissements financiers en France métropolitaine ?",
    finalExplanation: "Environ 363 000 salariés travaillent dans les banques et établissements financiers en France métropolitaine selon les données de la Fédération Bancaire Française.",
    theme: "économie",
    steps: [
      {
        question: "Combien d'établissements bancaires et financiers sont implantés en France métropolitaine ?",
        correctAnswer: 385,
        unit: "établissements",
        explanation: "Environ 385 établissements bancaires et financiers sont implantés en France métropolitaine selon les données de l'Autorité de Contrôle Prudentiel et de Résolution."
      },
      {
        question: "Combien d'agences bancaires sont présentes sur le territoire français ?",
        correctAnswer: 35200,
        unit: "agences",
        explanation: "On compte environ 35 200 agences bancaires sur le territoire français selon les données de la Fédération Bancaire Française."
      },
      {
        question: "Combien de salariés travaillent en moyenne dans une agence bancaire ?",
        correctAnswer: 8.4,
        unit: "salariés",
        explanation: "Une agence bancaire emploie en moyenne 8,4 salariés selon les données sociales du secteur."
      },
      {
        question: "Combien de personnes travaillent dans les sièges sociaux et services centraux des établissements financiers ?",
        correctAnswer: 68000,
        unit: "personnes",
        explanation: "Environ 68 000 personnes travaillent dans les sièges sociaux et services centraux des établissements financiers selon les statistiques sectorielles."
      },
      {
        question: "Combien de salariés travaillent donc au total dans les banques et établissements financiers ?",
        correctAnswer: 363000,
        unit: "salariés",
        explanation: "En additionnant le nombre de salariés en agence (35 200 × 8,4) et ceux des sièges et services centraux (68 000), on obtient environ 363 000 salariés."
      }
    ]
  },
  {
    id: "eco19",
    type: "multistep",
    question: "Combien de voitures neuves ont été achetées par des ménages habitant hors des grandes agglomérations en 2024 ?",
    finalExplanation: "Environ 418 000 voitures neuves ont été achetées par des ménages habitant hors des grandes agglomérations en 2024 selon les données du Comité des Constructeurs Français d'Automobiles.",
    theme: "économie",
    steps: [
      {
        question: "Combien de voitures neuves sont vendues chaque année en France ?",
        correctAnswer: 1.76,
        unit: "millions",
        explanation: "Environ 1,76 million de voitures neuves sont vendues chaque année en France selon les données du Comité des Constructeurs Français d'Automobiles."
      },
      {
        question: "Quelle proportion de ces ventes concerne des particuliers (et non des entreprises ou loueurs) ?",
        correctAnswer: 52,
        unit: "%",
        explanation: "Environ 52% des ventes de voitures neuves concernent des particuliers selon les statistiques du marché automobile."
      },
      {
        question: "Parmi ces ménages acheteurs, quel pourcentage habite hors des grandes agglomérations ?",
        correctAnswer: 45.6,
        unit: "%",
        explanation: "Environ 45,6% des ménages achetant une voiture neuve habitent hors des grandes agglomérations selon les études sur la mobilité et la consommation."
      },
      {
        question: "Combien de voitures neuves ont donc été achetées par des ménages hors grandes agglomérations ?",
        correctAnswer: 418000,
        unit: "voitures",
        explanation: "En multipliant le nombre total de voitures neuves (1,76 million) par la part des particuliers (52%) et par le pourcentage vivant hors grandes agglomérations (45,6%), on obtient environ 418 000 voitures."
      }
    ]
  },
  {
    id: "eco20",
    type: "multistep",
    question: "Combien de livraisons de repas à domicile sont effectuées chaque jour en France par les grandes plateformes ?",
    finalExplanation: "Environ 720 000 livraisons de repas à domicile sont effectuées quotidiennement en France par les grandes plateformes selon les données sectorielles.",
    theme: "économie",
    steps: [
      {
        question: "Combien de Français utilisent les applications de livraison de repas au moins occasionnellement ?",
        correctAnswer: 18.4,
        unit: "millions",
        explanation: "Environ 18,4 millions de Français utilisent les applications de livraison de repas au moins occasionnellement selon les études de marché."
      },
      {
        question: "Combien de commandes mensuelles un utilisateur actif réalise-t-il en moyenne ?",
        correctAnswer: 3.5,
        unit: "commandes",
        explanation: "Un utilisateur actif réalise en moyenne 3,5 commandes par mois sur les applications de livraison selon les données d'utilisation."
      },
      {
        question: "Quel pourcentage des utilisateurs inscrits est considéré comme actif (au moins une commande par mois) ?",
        correctAnswer: 37.5,
        unit: "%",
        explanation: "Environ 37,5% des utilisateurs inscrits sont considérés comme actifs selon les statistiques des plateformes."
      },
      {
        question: "Combien de livraisons de repas sont donc effectuées quotidiennement ?",
        correctAnswer: 720000,
        unit: "livraisons",
        explanation: "En calculant (18,4 millions × 37,5% × 3,5 commandes) / 30 jours, on obtient environ 720 000 livraisons quotidiennes."
      }
    ]
  },
  {
    id: "eco-101",
    type: "simple",
    question: "Quel est le PIB par habitant en France ?",
    correctAnswer: 39500,
    unit: "euros",
    explanation: "Le PIB par habitant en France est d'environ 39 500 euros selon les données les plus récentes.",
    theme: "economie"
  },
  {
    id: "eco-102",
    type: "simple",
    question: "Quelle est la part du secteur des services dans le PIB français ?",
    correctAnswer: 78.9,
    unit: "%",
    explanation: "Le secteur des services représente environ 78,9% du PIB français, reflétant la tertiarisation avancée de l'économie.",
    theme: "economie"
  },
  {
    id: "eco-103",
    type: "simple",
    question: "Quel est le taux d'épargne moyen des ménages français en pourcentage du revenu disponible ?",
    correctAnswer: 15.4,
    unit: "%",
    explanation: "Le taux d'épargne moyen des ménages français est d'environ 15,4% du revenu disponible, un des taux les plus élevés d'Europe.",
    theme: "economie"
  },
  {
    id: "eco-104",
    type: "simple",
    question: "Quel est le montant total de la dette publique française en pourcentage du PIB ?",
    correctAnswer: 112.8,
    unit: "%",
    explanation: "La dette publique française représente environ 112,8% du PIB, dépassant largement les critères de Maastricht fixés à 60%.",
    theme: "economie"
  },
  {
    id: "eco-105",
    type: "simple",
    question: "Quel est le salaire médian mensuel net en France (tous emplois confondus) ?",
    correctAnswer: 1940,
    unit: "euros",
    explanation: "Le salaire médian mensuel net en France, tous emplois confondus, est d'environ 1 940 euros.",
    theme: "economie"
  },
  {
    id: "eco-106",
    type: "simple",
    question: "Quel est le pourcentage des exportations françaises destinées aux pays de l'Union Européenne ?",
    correctAnswer: 59,
    unit: "%",
    explanation: "Environ 59% des exportations françaises sont destinées aux pays membres de l'Union Européenne.",
    theme: "economie"
  },
  {
    id: "eco-107",
    type: "simple",
    question: "Quel est le nombre d'entreprises créées chaque année en France ?",
    correctAnswer: 995000,
    unit: "entreprises",
    explanation: "Environ 995 000 entreprises sont créées chaque année en France, incluant les auto-entrepreneurs.",
    theme: "economie"
  },
  {
    id: "eco-108",
    type: "simple",
    question: "Quelle est la part du budget de l'État consacrée à l'éducation ?",
    correctAnswer: 9.6,
    unit: "%",
    explanation: "Environ 9,6% du budget de l'État français est consacré à l'éducation nationale.",
    theme: "economie"
  },
  {
    id: "eco-109",
    type: "simple",
    question: "Quelle est la valeur moyenne du patrimoine net d'un ménage français ?",
    correctAnswer: 239000,
    unit: "euros",
    explanation: "Le patrimoine net moyen d'un ménage français est d'environ 239 000 euros, incluant les biens immobiliers, financiers et professionnels.",
    theme: "economie"
  },
  {
    id: "eco-110",
    type: "simple",
    question: "Quel est le pourcentage de la population française vivant sous le seuil de pauvreté ?",
    correctAnswer: 14.6,
    unit: "%",
    explanation: "Environ 14,6% de la population française vit sous le seuil de pauvreté, défini à 60% du revenu médian.",
    theme: "economie"
  },
  {
    id: "eco-ms-001",
    type: "multistep",
    question: "Quel est le PIB généré par le secteur agricole en France sur une année ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le PIB total de la France ?",
        correctAnswer: 2500000000000,
        unit: "€",
        explanation: "Le PIB de la France est d'environ 2 500 milliards d'euros."
      },
      {
        question: "Quel pourcentage du PIB français est généré par le secteur agricole ?",
        correctAnswer: 1.6,
        unit: "%",
        explanation: "Le secteur agricole représente environ 1,6% du PIB français."
      },
      {
        question: "Quel est donc le PIB généré par le secteur agricole en France sur une année ?",
        correctAnswer: 40000000000,
        unit: "€",
        explanation: "En multipliant le PIB total (2 500 milliards €) par la part du secteur agricole (1,6%), on obtient 40 milliards d'euros."
      }
    ],
    finalExplanation: "Le secteur agricole français génère environ 40 milliards d'euros par an, soit 1,6% du PIB total de la France qui s'élève à environ 2 500 milliards d'euros."
  },
  {
    id: "eco-ms-002",
    type: "multistep",
    question: "Quelle est la valeur annuelle des exportations de biens industriels français vers l'Union européenne ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la valeur totale des exportations françaises par an ?",
        correctAnswer: 540000000000,
        unit: "€",
        explanation: "La France exporte pour environ 540 milliards d'euros de biens et services chaque année."
      },
      {
        question: "Quel pourcentage des exportations françaises est destiné à l'Union européenne ?",
        correctAnswer: 59,
        unit: "%",
        explanation: "Environ 59% des exportations françaises sont destinées à l'Union européenne."
      },
      {
        question: "Quel pourcentage des exportations françaises concerne des biens industriels ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Les biens industriels représentent environ 70% des exportations françaises."
      },
      {
        question: "Quelle est donc la valeur annuelle des exportations de biens industriels français vers l'Union européenne ?",
        correctAnswer: 223000000000,
        unit: "€",
        explanation: "En multipliant les exportations totales (540 milliards €) par la part destinée à l'UE (59%) puis par la part des biens industriels (70%), on obtient 223 milliards d'euros."
      }
    ],
    finalExplanation: "La France exporte chaque année environ 223 milliards d'euros de biens industriels vers l'Union européenne, ce qui représente une part significative de son commerce extérieur."
  },
  {
    id: "eco-ms-003",
    type: "multistep",
    question: "Combien de logements sociaux faut-il construire pour loger 10 % de la population française sous le seuil de pauvreté ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la population française actuelle ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Combien de personnes représentent 10% de la population française ?",
        correctAnswer: 6800000,
        unit: "personnes",
        explanation: "10% de la population française représente 6,8 millions de personnes."
      },
      {
        question: "Combien y a-t-il de personnes en moyenne par ménage en France ?",
        correctAnswer: 2.2,
        unit: "personnes",
        explanation: "Il y a en moyenne 2,2 personnes par ménage en France."
      },
      {
        question: "Combien de logements sociaux faut-il donc construire pour loger 10% de la population française sous le seuil de pauvreté ?",
        correctAnswer: 3090000,
        unit: "logements",
        explanation: "En divisant le nombre de personnes à loger (6,8 millions) par le nombre moyen de personnes par ménage (2,2), on obtient environ 3,09 millions de logements nécessaires."
      }
    ],
    finalExplanation: "Pour loger 10% de la population française sous le seuil de pauvreté, soit environ 6,8 millions de personnes, il faudrait construire environ 3,09 millions de logements sociaux, en considérant une taille moyenne de 2,2 personnes par ménage."
  },
  {
    id: "eco-ms-004",
    type: "multistep",
    question: "Quelle est la masse salariale annuelle totale du secteur public en France ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de fonctionnaires compte la France ?",
        correctAnswer: 5700000,
        unit: "personnes",
        explanation: "La France compte environ 5,7 millions de fonctionnaires (fonction publique d'État, territoriale et hospitalière)."
      },
      {
        question: "Quel est le salaire brut mensuel moyen dans la fonction publique ?",
        correctAnswer: 2700,
        unit: "€",
        explanation: "Le salaire brut mensuel moyen dans la fonction publique est d'environ 2 700 euros."
      },
      {
        question: "Quel est le salaire annuel moyen d'un fonctionnaire (incluant le 13e mois) ?",
        correctAnswer: 32400,
        unit: "€",
        explanation: "Le salaire annuel moyen est de 2 700 € × 12 mois = 32 400 €."
      },
      {
        question: "Quelle est donc la masse salariale annuelle totale du secteur public en France ?",
        correctAnswer: 184680000000,
        unit: "€",
        explanation: "En multipliant le nombre de fonctionnaires (5,7 millions) par le salaire annuel moyen (32 400 €), on obtient 184,68 milliards d'euros."
      }
    ],
    finalExplanation: "La masse salariale annuelle totale du secteur public en France est d'environ 184,68 milliards d'euros, correspondant au salaire des 5,7 millions de fonctionnaires avec un salaire annuel moyen de 32 400 euros."
  },
  {
    id: "eco-ms-005",
    type: "multistep",
    question: "Combien d'emplois seraient nécessaires pour réduire le taux de chômage de 1 point en France ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la population active en France ?",
        correctAnswer: 30000000,
        unit: "personnes",
        explanation: "La population active en France est d'environ 30 millions de personnes."
      },
      {
        question: "À combien de personnes correspond 1 point de chômage en France ?",
        correctAnswer: 300000,
        unit: "personnes",
        explanation: "1 point de chômage correspond à 1% de la population active, soit 300 000 personnes."
      },
      {
        question: "Combien d'emplois seraient donc nécessaires pour réduire le taux de chômage de 1 point en France ?",
        correctAnswer: 300000,
        unit: "emplois",
        explanation: "Il faudrait créer 300 000 emplois pour réduire le taux de chômage de 1 point."
      }
    ],
    finalExplanation: "Pour réduire le taux de chômage de 1 point en France, il faudrait créer environ 300 000 emplois, ce qui correspond à 1% de la population active française estimée à 30 millions de personnes."
  },
  {
    id: "eco-ms-006",
    type: "multistep",
    question: "Quelle est la valeur totale du marché du logement en France (ventes immobilières annuelles) ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de logements sont vendus chaque année en France ?",
        correctAnswer: 1100000,
        unit: "logements",
        explanation: "Environ 1,1 million de logements sont vendus chaque année en France (neuf et ancien confondus)."
      },
      {
        question: "Quel est le prix moyen d'un logement en France ?",
        correctAnswer: 250000,
        unit: "€",
        explanation: "Le prix moyen d'un logement en France est d'environ 250 000 euros (tous types confondus)."
      },
      {
        question: "Quelle est donc la valeur totale du marché du logement en France ?",
        correctAnswer: 275000000000,
        unit: "€",
        explanation: "En multipliant le nombre de logements vendus (1,1 million) par le prix moyen (250 000 €), on obtient 275 milliards d'euros."
      }
    ],
    finalExplanation: "La valeur totale du marché du logement en France, représentée par les ventes immobilières annuelles, est d'environ 275 milliards d'euros, avec 1,1 million de logements vendus à un prix moyen de 250 000 euros."
  },
  {
    id: "eco-ms-007",
    type: "multistep",
    question: "Quelle est la consommation totale d'énergie (en euros) des ménages français chaque année ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de ménages y a-t-il en France ?",
        correctAnswer: 30000000,
        unit: "ménages",
        explanation: "Il y a environ 30 millions de ménages en France."
      },
      {
        question: "Quelle est la facture énergétique moyenne annuelle d'un ménage français (électricité, gaz, carburant...) ?",
        correctAnswer: 3200,
        unit: "€",
        explanation: "La facture énergétique moyenne annuelle d'un ménage français est d'environ 3 200 euros."
      },
      {
        question: "Quelle est donc la consommation totale d'énergie des ménages français chaque année ?",
        correctAnswer: 96000000000,
        unit: "€",
        explanation: "En multipliant le nombre de ménages (30 millions) par la facture moyenne (3 200 €), on obtient 96 milliards d'euros."
      }
    ],
    finalExplanation: "La consommation totale d'énergie des ménages français s'élève à environ 96 milliards d'euros par an, calculée à partir des 30 millions de ménages et d'une facture énergétique moyenne de 3 200 euros par ménage."
  },
  {
    id: "eco-ms-008",
    type: "multistep",
    question: "Quelle est la taille annuelle du marché publicitaire mondial ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le PIB mondial ?",
        correctAnswer: 100000000000000,
        unit: "€",
        explanation: "Le PIB mondial est d'environ 100 000 milliards d'euros."
      },
      {
        question: "Quel pourcentage du PIB mondial est consacré à la publicité ?",
        correctAnswer: 0.7,
        unit: "%",
        explanation: "Environ 0,7% du PIB mondial est consacré à la publicité."
      },
      {
        question: "Quelle est donc la taille annuelle du marché publicitaire mondial ?",
        correctAnswer: 700000000000,
        unit: "€",
        explanation: "En multipliant le PIB mondial (100 000 milliards €) par le pourcentage consacré à la publicité (0,7%), on obtient 700 milliards d'euros."
      }
    ],
    finalExplanation: "La taille annuelle du marché publicitaire mondial est d'environ 700 milliards d'euros, ce qui représente 0,7% du PIB mondial estimé à 100 000 milliards d'euros."
  },
  {
    id: "eco-ms-009",
    type: "multistep",
    question: "Combien de voitures électriques doivent être vendues chaque année pour atteindre 100 % du parc en 2050 ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le nombre total de voitures particulières en France ?",
        correctAnswer: 38000000,
        unit: "voitures",
        explanation: "La France compte environ 38 millions de voitures particulières."
      },
      {
        question: "Quelle est la durée de vie moyenne d'une voiture ?",
        correctAnswer: 12,
        unit: "années",
        explanation: "La durée de vie moyenne d'une voiture est d'environ 12 ans."
      },
      {
        question: "Combien de voitures sont renouvelées chaque année en moyenne ?",
        correctAnswer: 3160000,
        unit: "voitures",
        explanation: "Environ 3,16 millions de voitures sont renouvelées chaque année (38 millions ÷ 12 ans)."
      },
      {
        question: "Combien d'années reste-t-il jusqu'en 2050 ?",
        correctAnswer: 25,
        unit: "années",
        explanation: "Il reste environ 25 ans jusqu'en 2050."
      },
      {
        question: "Combien de voitures électriques doivent être vendues chaque année pour atteindre 100% du parc en 2050 ?",
        correctAnswer: 1520000,
        unit: "voitures",
        explanation: "Pour remplacer l'ensemble du parc d'ici 2050, il faudrait vendre environ 1,52 million de voitures électriques par an (38 millions ÷ 25 ans)."
      }
    ],
    finalExplanation: "Pour atteindre 100% de voitures électriques dans le parc automobile français d'ici 2050, il faudrait vendre environ 1,52 million de voitures électriques par an, en tenant compte du renouvellement naturel du parc et de l'objectif à atteindre sur 25 ans."
  },
  {
    id: "eco-ms-010",
    type: "multistep",
    question: "Quelle est la dépense annuelle totale des administrations publiques françaises ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le PIB de la France ?",
        correctAnswer: 2500000000000,
        unit: "€",
        explanation: "Le PIB de la France est d'environ 2 500 milliards d'euros."
      },
      {
        question: "Quel pourcentage du PIB représentent les dépenses publiques en France ?",
        correctAnswer: 58,
        unit: "%",
        explanation: "Les dépenses publiques représentent environ 58% du PIB français."
      },
      {
        question: "Quelle est donc la dépense annuelle totale des administrations publiques françaises ?",
        correctAnswer: 1450000000000,
        unit: "€",
        explanation: "En multipliant le PIB (2 500 milliards €) par le pourcentage des dépenses publiques (58%), on obtient 1 450 milliards d'euros."
      }
    ],
    finalExplanation: "La dépense annuelle totale des administrations publiques françaises s'élève à environ 1 450 milliards d'euros, ce qui représente 58% du PIB français estimé à 2 500 milliards d'euros."
  },
  {
    id: "eco-ms-011",
    type: "multistep",
    question: "Quelle est la valeur du marché mondial du tourisme ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de touristes voyagent à l'international chaque année ?",
        correctAnswer: 1400000000,
        unit: "personnes",
        explanation: "Environ 1,4 milliard de personnes voyagent à l'international chaque année."
      },
      {
        question: "Quelle est la dépense moyenne par touriste international ?",
        correctAnswer: 1250,
        unit: "€",
        explanation: "La dépense moyenne par touriste international est d'environ 1 250 euros."
      },
      {
        question: "Quelle est la part du tourisme domestique par rapport au tourisme international en termes de valeur ?",
        correctAnswer: 1.5,
        unit: "fois plus",
        explanation: "Le tourisme domestique représente environ 1,5 fois la valeur du tourisme international."
      },
      {
        question: "Quelle est donc la valeur du marché mondial du tourisme ?",
        correctAnswer: 4375000000000,
        unit: "€",
        explanation: "En calculant d'abord la valeur du tourisme international (1,4 milliard × 1 250 € = 1 750 milliards €), puis en ajoutant le tourisme domestique (1,5 × 1 750 milliards € = 2 625 milliards €), on obtient un total de 4 375 milliards d'euros."
      }
    ],
    finalExplanation: "La valeur du marché mondial du tourisme est d'environ 4 375 milliards d'euros, incluant le tourisme international (1 750 milliards €) et le tourisme domestique (2 625 milliards €)."
  },
  {
    id: "eco-ms-012",
    type: "multistep",
    question: "Quel est le budget total des ménages français alloué à l'alimentation par an ?",
    theme: "economie",
    steps: [
      {
        question: "Combien de ménages y a-t-il en France ?",
        correctAnswer: 30000000,
        unit: "ménages",
        explanation: "Il y a environ 30 millions de ménages en France."
      },
      {
        question: "Quel est le revenu disponible moyen d'un ménage français par an ?",
        correctAnswer: 39000,
        unit: "€",
        explanation: "Le revenu disponible moyen d'un ménage français est d'environ 39 000 euros par an."
      },
      {
        question: "Quel pourcentage du revenu disponible les ménages français consacrent-ils à l'alimentation ?",
        correctAnswer: 16,
        unit: "%",
        explanation: "Les ménages français consacrent en moyenne 16% de leur revenu disponible à l'alimentation."
      },
      {
        question: "Quel est donc le budget total des ménages français alloué à l'alimentation par an ?",
        correctAnswer: 187200000000,
        unit: "€",
        explanation: "En multipliant le nombre de ménages (30 millions) par le revenu moyen (39 000 €) puis par le pourcentage consacré à l'alimentation (16%), on obtient 187,2 milliards d'euros."
      }
    ],
    finalExplanation: "Le budget total des ménages français alloué à l'alimentation est d'environ 187,2 milliards d'euros par an, ce qui représente 16% du revenu disponible total des 30 millions de ménages français."
  },
  {
    id: "eco-ms-013",
    type: "multistep",
    question: "Combien de tonnes de marchandises sont transportées chaque année sur le territoire français ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Quelle quantité de marchandises est transportée en moyenne par personne et par an en France ?",
        correctAnswer: 43,
        unit: "tonnes",
        explanation: "En moyenne, environ 43 tonnes de marchandises sont transportées par personne et par an en France."
      },
      {
        question: "Combien de tonnes de marchandises sont donc transportées chaque année sur le territoire français ?",
        correctAnswer: 2924000000,
        unit: "tonnes",
        explanation: "En multipliant la population (68 millions) par la quantité moyenne par personne (43 tonnes), on obtient 2,924 milliards de tonnes."
      }
    ],
    finalExplanation: "Environ 2,924 milliards de tonnes de marchandises sont transportées chaque année sur le territoire français, ce qui correspond à 43 tonnes par personne pour une population de 68 millions d'habitants."
  },
  {
    id: "eco-ms-014",
    type: "multistep",
    question: "Quelle est la taille du marché mondial des énergies renouvelables ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la consommation mondiale d'énergie primaire ?",
        correctAnswer: 14500,
        unit: "Mtep",
        explanation: "La consommation mondiale d'énergie primaire est d'environ 14 500 Mtep (millions de tonnes équivalent pétrole)."
      },
      {
        question: "Quel pourcentage de cette énergie provient des sources renouvelables ?",
        correctAnswer: 14,
        unit: "%",
        explanation: "Environ 14% de l'énergie mondiale provient de sources renouvelables."
      },
      {
        question: "Quel est le prix moyen d'une tonne équivalent pétrole ?",
        correctAnswer: 750,
        unit: "€",
        explanation: "Le prix moyen d'une tonne équivalent pétrole est d'environ 750 euros."
      },
      {
        question: "Quelle est donc la taille du marché mondial des énergies renouvelables ?",
        correctAnswer: 1522000000000,
        unit: "€",
        explanation: "En calculant d'abord la quantité d'énergie renouvelable (14 500 Mtep × 14% = 2 030 Mtep), puis en multipliant par le prix (2 030 millions × 750 € = 1 522,5 milliards €), on obtient environ 1 522 milliards d'euros."
      }
    ],
    finalExplanation: "La taille du marché mondial des énergies renouvelables est d'environ 1 522 milliards d'euros, représentant 14% de la consommation mondiale d'énergie primaire valorisée au prix moyen."
  },
  {
    id: "eco-ms-015",
    type: "multistep",
    question: "Combien de nouveaux logements sont nécessaires par an pour suivre la croissance démographique en France ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le taux de croissance annuel de la population française ?",
        correctAnswer: 0.3,
        unit: "%",
        explanation: "Le taux de croissance annuel de la population française est d'environ 0,3%."
      },
      {
        question: "Quelle est la population française actuelle ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions d'habitants."
      },
      {
        question: "Combien de personnes supplémentaires cela représente-t-il chaque année ?",
        correctAnswer: 204000,
        unit: "personnes",
        explanation: "0,3% de 68 millions représente environ 204 000 personnes supplémentaires par an."
      },
      {
        question: "Combien y a-t-il de personnes en moyenne par ménage en France ?",
        correctAnswer: 2.2,
        unit: "personnes",
        explanation: "Il y a en moyenne 2,2 personnes par ménage en France."
      },
      {
        question: "Combien de nouveaux logements sont donc nécessaires par an pour suivre la croissance démographique en France ?",
        correctAnswer: 92700,
        unit: "logements",
        explanation: "En divisant le nombre de personnes supplémentaires (204 000) par le nombre moyen de personnes par ménage (2,2), on obtient 92 700 nouveaux logements nécessaires."
      }
    ],
    finalExplanation: "Pour suivre la croissance démographique en France, environ 92 700 nouveaux logements sont nécessaires chaque année, calculés à partir d'une croissance annuelle de 0,3% de la population (204 000 personnes) et d'une taille moyenne des ménages de 2,2 personnes."
  },
  {
    id: "eco-ms-016",
    type: "multistep",
    question: "Quelle est la valeur totale des importations françaises de produits électroniques ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la valeur totale des importations françaises ?",
        correctAnswer: 600000000000,
        unit: "€",
        explanation: "La valeur totale des importations françaises est d'environ 600 milliards d'euros par an."
      },
      {
        question: "Quel pourcentage des importations françaises concerne des produits électroniques ?",
        correctAnswer: 9,
        unit: "%",
        explanation: "Les produits électroniques représentent environ 9% des importations françaises."
      },
      {
        question: "Quelle est donc la valeur totale des importations françaises de produits électroniques ?",
        correctAnswer: 54000000000,
        unit: "€",
        explanation: "En multipliant la valeur totale des importations (600 milliards €) par le pourcentage des produits électroniques (9%), on obtient 54 milliards d'euros."
      }
    ],
    finalExplanation: "La valeur totale des importations françaises de produits électroniques s'élève à environ 54 milliards d'euros par an, représentant 9% des importations françaises totales estimées à 600 milliards d'euros."
  },
  {
    id: "eco-ms-017",
    type: "multistep",
    question: "Combien de mètres carrés de bureaux sont utilisés dans la région Île-de-France ?",
    theme: "economie",
    steps: [
      {
        question: "Combien d'entreprises sont implantées en Île-de-France ?",
        correctAnswer: 1300000,
        unit: "entreprises",
        explanation: "Environ 1,3 million d'entreprises sont implantées en Île-de-France."
      },
      {
        question: "Quelle est la surface moyenne de bureaux par entreprise en Île-de-France ?",
        correctAnswer: 120,
        unit: "m²",
        explanation: "La surface moyenne de bureaux par entreprise en Île-de-France est d'environ 120 m²."
      },
      {
        question: "Combien de mètres carrés de bureaux sont donc utilisés dans la région Île-de-France ?",
        correctAnswer: 156000000,
        unit: "m²",
        explanation: "En multipliant le nombre d'entreprises (1,3 million) par la surface moyenne (120 m²), on obtient 156 millions de m²."
      }
    ],
    finalExplanation: "La région Île-de-France compte environ 156 millions de mètres carrés de bureaux utilisés, ce qui correspond aux 1,3 million d'entreprises implantées dans la région avec une surface moyenne de 120 m² par entreprise."
  },
  {
    id: "eco-ms-018",
    type: "multistep",
    question: "Quelle est la valeur du marché mondial de la finance décentralisée (DeFi) ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la capitalisation totale du marché des cryptomonnaies ?",
        correctAnswer: 2000000000000,
        unit: "€",
        explanation: "La capitalisation totale du marché des cryptomonnaies est d'environ 2 000 milliards d'euros."
      },
      {
        question: "Quel pourcentage de cette capitalisation est lié à la finance décentralisée (DeFi) ?",
        correctAnswer: 5,
        unit: "%",
        explanation: "Environ 5% de la capitalisation des cryptomonnaies est liée à la finance décentralisée."
      },
      {
        question: "Quelle est donc la valeur du marché mondial de la finance décentralisée (DeFi) ?",
        correctAnswer: 100000000000,
        unit: "€",
        explanation: "En multipliant la capitalisation totale des cryptomonnaies (2 000 milliards €) par le pourcentage lié à la DeFi (5%), on obtient 100 milliards d'euros."
      }
    ],
    finalExplanation: "La valeur du marché mondial de la finance décentralisée (DeFi) est estimée à environ 100 milliards d'euros, ce qui représente 5% de la capitalisation totale du marché des cryptomonnaies évaluée à 2 000 milliards d'euros."
  },
  {
    id: "eco-ms-019",
    type: "multistep",
    question: "Quel est le montant total des dépenses de santé en France chaque année ?",
    theme: "economie",
    steps: [
      {
        question: "Quel est le PIB de la France ?",
        correctAnswer: 2500000000000,
        unit: "€",
        explanation: "Le PIB de la France est d'environ 2 500 milliards d'euros."
      },
      {
        question: "Quel pourcentage du PIB représentent les dépenses de santé en France ?",
        correctAnswer: 11.2,
        unit: "%",
        explanation: "Les dépenses de santé représentent environ 11,2% du PIB français."
      },
      {
        question: "Quel est donc le montant total des dépenses de santé en France chaque année ?",
        correctAnswer: 280000000000,
        unit: "€",
        explanation: "En multipliant le PIB (2 500 milliards €) par le pourcentage des dépenses de santé (11,2%), on obtient 280 milliards d'euros."
      }
    ],
    finalExplanation: "Le montant total des dépenses de santé en France s'élève à environ 280 milliards d'euros chaque année, ce qui représente 11,2% du PIB français estimé à 2 500 milliards d'euros."
  },
  {
    id: "eco-ms-020",
    type: "multistep",
    question: "Combien de transactions bancaires sont réalisées chaque jour en zone euro ?",
    theme: "economie",
    steps: [
      {
        question: "Quelle est la population de la zone euro ?",
        correctAnswer: 340000000,
        unit: "personnes",
        explanation: "La zone euro compte environ 340 millions d'habitants."
      },
      {
        question: "Combien de transactions bancaires une personne réalise-t-elle en moyenne par jour dans la zone euro ?",
        correctAnswer: 1.8,
        unit: "transactions",
        explanation: "Une personne dans la zone euro réalise en moyenne 1,8 transaction bancaire par jour."
      },
      {
        question: "Combien de transactions bancaires sont donc réalisées chaque jour en zone euro ?",
        correctAnswer: 612000000,
        unit: "transactions",
        explanation: "En multipliant la population (340 millions) par le nombre moyen de transactions par personne (1,8), on obtient 612 millions de transactions par jour."
      }
    ],
    finalExplanation: "Environ 612 millions de transactions bancaires sont réalisées chaque jour dans la zone euro, ce qui correspond à une moyenne de 1,8 transaction quotidienne pour chacun des 340 millions d'habitants de la zone."
  },
  // Adding the employment questions 
  ...emploiQuestions
];
