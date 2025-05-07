
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
  // Nouvelles questions environnement
  {
    id: "env1",
    question: "Combien de tonnes de déchets ménagers sont produits chaque année en France ?",
    correctAnswer: 39,
    unit: "millions",
    explanation: "La France produit environ 39 millions de tonnes de déchets ménagers et assimilés chaque année selon les données de l'ADEME.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env2",
    question: "Combien de foyers français sont équipés de panneaux solaires photovoltaïques ?",
    correctAnswer: 870000,
    unit: "foyers",
    explanation: "Environ 870 000 foyers français sont équipés de panneaux solaires photovoltaïques selon les chiffres du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env3",
    question: "Combien de bouteilles en plastique sont consommées chaque jour en France ?",
    correctAnswer: 25,
    unit: "millions",
    explanation: "Les Français consomment environ 25 millions de bouteilles en plastique chaque jour selon les données de l'ADEME.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env4",
    question: "Combien de Français utilisent quotidiennement leur voiture pour des trajets de moins de 5 km ?",
    correctAnswer: 13.8,
    unit: "millions",
    explanation: "Environ 13,8 millions de Français utilisent quotidiennement leur voiture pour des trajets de moins de 5 km selon l'INSEE.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env5",
    question: "Combien de litres d'eau potable sont consommés par jour dans les foyers français ?",
    correctAnswer: 450,
    unit: "millions",
    explanation: "Les foyers français consomment environ 450 millions de litres d'eau potable par jour selon les données des agences de l'eau.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env6",
    question: "Combien de logements en France sont classés F ou G au DPE (passoires thermiques) ?",
    correctAnswer: 4.8,
    unit: "millions",
    explanation: "Environ 4,8 millions de logements en France sont classés F ou G au Diagnostic de Performance Énergétique, les qualifiant de passoires thermiques.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env7",
    question: "Combien de personnes utilisent le vélo comme principal mode de transport pour aller travailler ?",
    correctAnswer: 2.1,
    unit: "millions",
    explanation: "Environ 2,1 millions de personnes utilisent le vélo comme principal mode de transport pour se rendre au travail en France.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env8",
    question: "Combien de tonnes de CO₂ sont émises chaque année par les vols intérieurs en France ?",
    correctAnswer: 3.4,
    unit: "millions",
    explanation: "Les vols intérieurs en France émettent environ 3,4 millions de tonnes de CO₂ par an selon la Direction générale de l'aviation civile.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env9",
    question: "Combien de Français achètent régulièrement des produits bio ?",
    correctAnswer: 28.3,
    unit: "millions",
    explanation: "Environ 28,3 millions de Français achètent régulièrement des produits biologiques selon l'Agence Bio.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env10",
    question: "Combien de mètres carrés de forêts sont artificialisés chaque année en France ?",
    correctAnswer: 23,
    unit: "millions",
    explanation: "Environ 23 millions de mètres carrés de forêts sont artificialisés chaque année en France selon les données du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "environnement"
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
    question: "Combien de foyers trient correctement leurs déchets en France ?",
    correctAnswer: 18.5,
    unit: "millions",
    explanation: "Environ 18,5 millions de foyers français trient correctement leurs déchets selon les données de l'ADEME.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env13",
    question: "Combien de voitures électriques sont actuellement en circulation en France ?",
    correctAnswer: 1.2,
    unit: "millions",
    explanation: "Environ 1,2 million de voitures électriques sont en circulation en France selon les données du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env14",
    question: "Combien de repas végétariens sont servis chaque semaine dans les cantines scolaires françaises ?",
    correctAnswer: 7.3,
    unit: "millions",
    explanation: "Environ 7,3 millions de repas végétariens sont servis chaque semaine dans les cantines scolaires françaises selon les données du Ministère de l'Éducation.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env15",
    question: "Combien d'entreprises en France mesurent leur empreinte carbone ?",
    correctAnswer: 24700,
    unit: "entreprises",
    explanation: "Environ 24 700 entreprises françaises mesurent leur empreinte carbone, principalement les grandes entreprises et ETI soumises à des obligations réglementaires.",
    type: "simple",
    theme: "environnement"
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
    question: "Combien de foyers utilisent une chaudière au fioul en France ?",
    correctAnswer: 3.1,
    unit: "millions",
    explanation: "Environ 3,1 millions de foyers français utilisent encore une chaudière au fioul selon les données du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env18",
    question: "Combien de Français ont réduit leur consommation de viande sur les 12 derniers mois ?",
    correctAnswer: 31.6,
    unit: "millions",
    explanation: "Environ 31,6 millions de Français déclarent avoir réduit leur consommation de viande au cours des 12 derniers mois selon les sondages récents.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env19",
    question: "Combien de logements ne disposent pas d'une bonne isolation thermique ?",
    correctAnswer: 7.3,
    unit: "millions",
    explanation: "Environ 7,3 millions de logements en France ne disposent pas d'une bonne isolation thermique selon les données du Ministère de la Transition Écologique.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "env20",
    question: "Combien de sacs plastiques à usage unique sont encore utilisés chaque année en France ?",
    correctAnswer: 1.8,
    unit: "milliards",
    explanation: "Environ 1,8 milliard de sacs plastiques à usage unique sont encore utilisés chaque année en France malgré leur interdiction progressive.",
    type: "simple",
    theme: "environnement"
  }
];
