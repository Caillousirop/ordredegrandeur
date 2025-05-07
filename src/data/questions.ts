
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
    id: "7",
    type: "multistep",
    question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens français de la région Île-de-France ?",
    finalExplanation: "Cette estimation de 511 millions d'heures passées sur les réseaux sociaux par les lycéens d'Île-de-France chaque année est une approximation basée sur la population lycéenne, le taux d'utilisation des réseaux sociaux et le temps moyen passé quotidiennement. Les chiffres réels peuvent varier en fonction des évolutions technologiques, des tendances sociales et des politiques éducatives.",
    theme: "technologie",
    steps: [
      {
        question: "Combien y a-t-il de lycéens en Île-de-France ?",
        correctAnswer: 500000,
        unit: "lycéens",
        explanation: "L'Île-de-France compte environ 500 000 lycéens selon les données du Rectorat et de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces lycéens utilise régulièrement les réseaux sociaux ?",
        correctAnswer: 93.5,
        unit: "%",
        explanation: "Environ 93,5% des lycéens utilisent régulièrement les réseaux sociaux d'après les enquêtes sur les pratiques numériques des adolescents."
      },
      {
        question: "Combien d'heures par jour un lycéen passe-t-il en moyenne sur les réseaux sociaux ?",
        correctAnswer: 3,
        unit: "heures",
        explanation: "Un lycéen passe en moyenne 3 heures par jour sur les réseaux sociaux selon les études sur les usages numériques des adolescents."
      },
      {
        question: "Combien de jours par an les lycéens utilisent-ils les réseaux sociaux ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les lycéens utilisent les réseaux sociaux pratiquement tous les jours de l'année, soit 365 jours."
      },
      {
        question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens d'Île-de-France ?",
        correctAnswer: 511,
        unit: "millions d'heures",
        explanation: "En multipliant le nombre de lycéens (500 000) par le pourcentage utilisant les réseaux sociaux (93,5%) par le temps quotidien (3 heures) par le nombre de jours (365), on obtient environ 511 millions d'heures."
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
  },
  // Nouvelles questions avec des pourcentages
  {
    id: "23",
    question: "Quel pourcentage des Français vivent en zone urbaine ?",
    correctAnswer: 81,
    unit: "%",
    explanation: "Selon l'INSEE, environ 81% des Français vivent en zone urbaine en 2023.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "24",
    question: "Quel est le pourcentage de jeunes de 18-24 ans poursuivant des études supérieures en France ?",
    correctAnswer: 46.2,
    unit: "%",
    explanation: "Selon les données de l'INSEE, 46,2% des jeunes de 18 à 24 ans poursuivent des études supérieures en France.",
    type: "simple",
    theme: "éducation"
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
    id: "28",
    question: "Quel pourcentage des emplois en France sont dans le secteur tertiaire (services) ?",
    correctAnswer: 76.8,
    unit: "%",
    explanation: "Selon l'INSEE, 76,8% des emplois en France sont dans le secteur tertiaire (services).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "29",
    question: "Quel est le pourcentage de médecins généralistes parmi l'ensemble des médecins en France ?",
    correctAnswer: 44.3,
    unit: "%",
    explanation: "Selon les données de l'Ordre des Médecins et de l'INSEE, 44,3% des médecins en France sont des généralistes.",
    type: "simple",
    theme: "santé"
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
    id: "31",
    type: "multistep",
    question: "Combien de congés payés sont pris en moyenne par les Français de moins de 40 ans en région Bretagne ?",
    finalExplanation: "Cette estimation de 725 000 jours de congés payés est une approximation basée sur la population bretonne de moins de 40 ans, le taux d'activité professionnelle et les habitudes de prise de congés dans cette région. Les chiffres réels peuvent varier selon les secteurs d'activité, les conventions collectives et les pratiques individuelles.",
    theme: "emploi",
    steps: [
      {
        question: "Quelle est la population totale de la Bretagne ?",
        correctAnswer: 3.35,
        unit: "millions",
        explanation: "La Bretagne compte environ 3,35 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population a moins de 40 ans ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% de la population bretonne a moins de 40 ans selon la pyramide des âges régionale."
      },
      {
        question: "Parmi cette population de moins de 40 ans, quel pourcentage est en activité professionnelle ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Le taux d'activité professionnelle des moins de 40 ans en Bretagne est d'environ 72% selon les statistiques de l'emploi régional."
      },
      {
        question: "Combien de jours de congés payés sont pris en moyenne par an par ces personnes ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Les actifs de moins de 40 ans en Bretagne prennent en moyenne 25 jours de congés payés par an, légèrement en-dessous de la moyenne nationale."
      },
      {
        question: "Combien de jours de congés payés sont pris au total par les Bretons de moins de 40 ans ?",
        correctAnswer: 725000,
        unit: "jours",
        explanation: "En multipliant la population totale (3,35 millions) par le pourcentage de moins de 40 ans (43%) par le taux d'activité (72%) par le nombre de jours de congés (25), on obtient environ 725 000 jours de congés payés."
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
    id: "33",
    type: "multistep",
    question: "Combien de yaourts sont consommés annuellement par les enfants de moins de 12 ans dans les écoles primaires des zones rurales françaises ?",
    finalExplanation: "Cette estimation de 98 millions de yaourts consommés par les enfants en milieu scolaire rural est une approximation basée sur la population scolaire rurale, les habitudes alimentaires et le calendrier scolaire. Les chiffres réels peuvent varier selon les politiques alimentaires locales, les préférences des enfants et les approvisionnements des cantines.",
    theme: "santé",
    steps: [
      {
        question: "Combien y a-t-il d'élèves en école primaire en France ?",
        correctAnswer: 6.7,
        unit: "millions",
        explanation: "La France compte environ 6,7 millions d'élèves en école primaire selon les données du Ministère de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves étudient dans des zones rurales ?",
        correctAnswer: 17.5,
        unit: "%",
        explanation: "Environ 17,5% des élèves du primaire sont scolarisés dans des zones rurales d'après les statistiques de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de ces élèves mangent à la cantine ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "En zone rurale, environ 85% des élèves du primaire mangent à la cantine scolaire selon les enquêtes sur la restauration scolaire."
      },
      {
        question: "Combien de jours d'école y a-t-il par an en France ?",
        correctAnswer: 144,
        unit: "jours",
        explanation: "Une année scolaire en France compte environ 144 jours de classe avec restauration scolaire."
      },
      {
        question: "Combien de fois par semaine en moyenne un yaourt est-il servi à la cantine ?",
        correctAnswer: 3,
        unit: "jours",
        explanation: "Dans les cantines scolaires rurales, un yaourt est servi en moyenne 3 jours par semaine selon les plans alimentaires types."
      },
      {
        question: "Combien de yaourts sont consommés annuellement par les enfants dans les écoles primaires rurales ?",
        correctAnswer: 98,
        unit: "millions",
        explanation: "En multipliant le nombre d'élèves (6,7 millions) par le pourcentage en zone rurale (17,5%) par le taux de fréquentation des cantines (85%) par le nombre de jours d'école (144) par le ratio de service de yaourts (3/5), on obtient environ 98 millions de yaourts."
      }
    ]
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
  // Nouvelles questions sur la démographie
  {
    id: "35",
    question: "Combien de jeunes de 16 à 25 ans occupent un emploi en France ?",
    correctAnswer: 3.2,
    unit: "millions",
    explanation: "Environ 3,2 millions de jeunes de 16 à 25 ans occupent un emploi en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "36",
    question: "Combien de femmes âgées de 25 à 54 ans travaillent à temps partiel en France ?",
    correctAnswer: 1.8,
    unit: "millions",
    explanation: "Environ 1,8 millions de femmes âgées de 25 à 54 ans travaillent à temps partiel en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "37",
    type: "multistep",
    question: "Combien d'enfants de moins de 3 ans sont gardés en crèche chaque jour en France ?",
    finalExplanation: "Environ 480 000 enfants de moins de 3 ans sont gardés en crèche chaque jour en France selon les données de la CNAF et de l'INSEE.",
    theme: "démographie",
    steps: [
      {
        question: "Combien d'enfants de moins de 3 ans y a-t-il en France ?",
        correctAnswer: 2.2,
        unit: "millions",
        explanation: "La France compte environ 2,2 millions d'enfants de moins de 3 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces enfants fréquente une structure d'accueil collectif (crèche) ?",
        correctAnswer: 21.8,
        unit: "%",
        explanation: "Environ 21,8% des enfants de moins de 3 ans fréquentent une crèche selon les données de la CNAF."
      },
      {
        question: "Combien d'enfants sont donc gardés en crèche chaque jour ?",
        correctAnswer: 480000,
        unit: "enfants",
        explanation: "En multipliant le nombre d'enfants (2,2 millions) par le pourcentage en crèche (21,8%), on obtient environ 480 000 enfants."
      }
    ]
  },
  {
    id: "38",
    question: "Combien de personnes âgées de plus de 75 ans vivent seules en France ?",
    correctAnswer: 1.7,
    unit: "millions",
    explanation: "Environ 1,7 millions de personnes âgées de plus de 75 ans vivent seules en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "39",
    question: "Combien de cadres travaillent en Île-de-France ?",
    correctAnswer: 1.85,
    unit: "millions",
    explanation: "Environ 1,85 millions de cadres travaillent en Île-de-France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "40",
    type: "multistep",
    question: "Combien de personnes prennent les transports en commun chaque jour pour se rendre au travail ?",
    finalExplanation: "Environ 8,4 millions de personnes utilisent les transports en commun chaque jour pour se rendre au travail en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il d'actifs occupés en France ?",
        correctAnswer: 28,
        unit: "millions",
        explanation: "La France compte environ 28 millions d'actifs occupés selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs utilise principalement les transports en commun pour se rendre au travail ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des actifs utilisent principalement les transports en commun pour leurs trajets domicile-travail."
      },
      {
        question: "Combien de personnes prennent donc les transports en commun pour se rendre au travail ?",
        correctAnswer: 8.4,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs (28 millions) par le pourcentage utilisant les transports en commun (30%), on obtient environ 8,4 millions de personnes."
      }
    ]
  },
  {
    id: "41",
    question: "Combien d'étudiants français travaillent en parallèle de leurs études ?",
    correctAnswer: 1.1,
    unit: "millions",
    explanation: "Environ 1,1 million d'étudiants français travaillent en parallèle de leurs études selon l'Observatoire de la Vie Étudiante.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "42",
    question: "Combien d'apprentis (en alternance) y a-t-il actuellement en France ?",
    correctAnswer: 967000,
    unit: "apprentis",
    explanation: "La France compte environ 967 000 apprentis en alternance selon les données du Ministère du Travail.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "43",
    type: "multistep",
    question: "Combien de personnes travaillent dans le secteur du bâtiment en région Auvergne-Rhône-Alpes ?",
    finalExplanation: "Environ 186 000 personnes travaillent dans le secteur du bâtiment en Auvergne-Rhône-Alpes selon les données de la Fédération Française du Bâtiment.",
    theme: "démographie",
    steps: [
      {
        question: "Combien de personnes travaillent dans le secteur du bâtiment en France ?",
        correctAnswer: 1.2,
        unit: "millions",
        explanation: "En France, environ 1,2 million de personnes travaillent dans le secteur du bâtiment selon la FFB."
      },
      {
        question: "Quelle part de l'économie française représente la région Auvergne-Rhône-Alpes ?",
        correctAnswer: 15.5,
        unit: "%",
        explanation: "La région Auvergne-Rhône-Alpes représente environ 15,5% de l'économie française."
      },
      {
        question: "Combien de personnes travaillent donc dans le bâtiment en Auvergne-Rhône-Alpes ?",
        correctAnswer: 186000,
        unit: "personnes",
        explanation: "En multipliant le nombre total de travailleurs du bâtiment (1,2 million) par la part économique de la région (15,5%), on obtient environ 186 000 personnes."
      }
    ]
  },
  {
    id: "44",
    type: "multistep",
    question: "Combien de femmes de 30 à 45 ans ayant au moins un enfant travaillent à temps plein ?",
    finalExplanation: "Environ 2,6 millions de femmes de 30 à 45 ans ayant au moins un enfant travaillent à temps plein en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de femmes de 30 à 45 ans en France ?",
        correctAnswer: 5.9,
        unit: "millions",
        explanation: "La France compte environ 5,9 millions de femmes âgées de 30 à 45 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces femmes a au moins un enfant ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% des femmes de cette tranche d'âge ont au moins un enfant selon les statistiques démographiques."
      },
      {
        question: "Parmi ces mères, quel pourcentage travaille à temps plein ?",
        correctAnswer: 56,
        unit: "%",
        explanation: "Environ 56% des mères de cette tranche d'âge travaillent à temps plein selon les données du Ministère du Travail."
      },
      {
        question: "Combien de femmes de 30 à 45 ans ayant au moins un enfant travaillent donc à temps plein ?",
        correctAnswer: 2.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de femmes (5,9 millions) par le pourcentage ayant des enfants (78%) par le taux de travail à temps plein (56%), on obtient environ 2,6 millions de femmes."
      }
    ]
  },
  {
    id: "45",
    question: "Combien de personnes cumulent emploi et retraite en France ?",
    correctAnswer: 482000,
    unit: "personnes",
    explanation: "Environ 482 000 personnes cumulent emploi et retraite en France selon les données de la CNAV.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "46",
    question: "Combien d'actifs travaillent régulièrement la nuit en France ?",
    correctAnswer: 3.5,
    unit: "millions",
    explanation: "Environ 3,5 millions d'actifs travaillent régulièrement la nuit en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "47",
    question: "Combien de personnes occupent un emploi à durée déterminée (CDD ou intérim) en France ?",
    correctAnswer: 3.9,
    unit: "millions",
    explanation: "Environ 3,9 millions de personnes occupent un emploi à durée déterminée en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "48",
    type: "multistep",
    question: "Combien de jeunes (15–29 ans) ne sont ni en emploi, ni en études, ni en formation (NEET) en France ?",
    finalExplanation: "Environ 1,6 million de jeunes de 15 à 29 ans sont considérés comme NEET (ni en emploi, ni en études, ni en formation) en France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de jeunes de 15 à 29 ans en France ?",
        correctAnswer: 11.2,
        unit: "millions",
        explanation: "La France compte environ 11,2 millions de jeunes âgés de 15 à 29 ans selon l'INSEE."
      },
      {
        question: "Quel pourcentage de ces jeunes sont des NEET (ni en emploi, ni en études, ni en formation) ?",
        correctAnswer: 14.3,
        unit: "%",
        explanation: "Environ 14,3% des jeunes de 15 à 29 ans sont des NEET selon les données d'Eurostat."
      },
      {
        question: "Combien de jeunes sont donc considérés comme NEET en France ?",
        correctAnswer: 1.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de jeunes (11,2 millions) par le pourcentage de NEET (14,3%), on obtient environ 1,6 million de jeunes."
      }
    ]
  },
  {
    id: "49",
    question: "Combien de personnes travaillent dans le secteur agricole en France ?",
    correctAnswer: 866000,
    unit: "personnes",
    explanation: "Environ 866 000 personnes travaillent dans le secteur agricole en France selon les données du Ministère de l'Agriculture.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "50",
    question: "Combien de salariés télétravaillent au moins un jour par semaine en France ?",
    correctAnswer: 7.4,
    unit: "millions",
    explanation: "Environ 7,4 millions de salariés télétravaillent au moins un jour par semaine en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "51",
    question: "Combien de femmes âgées de 50 à 64 ans sont en recherche d'emploi ?",
    correctAnswer: 384000,
    unit: "femmes",
    explanation: "Environ 384 000 femmes âgées de 50 à 64 ans sont en recherche d'emploi en France selon les données de Pôle Emploi.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "52",
    question: "Combien d'hommes âgés de 18 à 30 ans sont au chômage en France ?",
    correctAnswer: 678000,
    unit: "hommes",
    explanation: "Environ 678 000 hommes âgés de 18 à 30 ans sont au chômage en France selon les données de l'INSEE.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "53",
    question: "Combien de travailleurs sont en situation de handicap et en emploi en France ?",
    correctAnswer: 1.1,
    unit: "millions",
    explanation: "Environ 1,1 million de travailleurs en situation de handicap sont en emploi en France selon les données de l'AGEFIPH.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "54",
    question: "Combien de personnes travaillent dans les services à la personne en France ?",
    correctAnswer: 1.7,
    unit: "millions",
    explanation: "Environ 1,7 million de personnes travaillent dans les services à la personne en France selon les données de la DARES.",
    type: "simple",
    theme: "démographie"
  }
];

export const themes: QuizTheme[] = [
  {
    id: "démographie",
    name: "Démographie",
    description: "Questions sur la population et ses caractéristiques",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "environnement",
    name: "Environnement",
    description: "Questions sur l'écologie et le climat",
    color: "from-green-500 to-green-700"
  },
  {
    id: "économie",
    name: "Économie",
    description: "Questions sur l'argent et l'économie",
    color: "from-amber-500 to-amber-700"
  },
  {
    id: "santé",
    name: "Santé",
    description: "Questions sur la santé et le système médical",
    color: "from-red-500 to-red-700"
  },
  {
    id: "éducation",
    name: "Éducation",
    description: "Questions sur l'enseignement et la formation",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "transport",
    name: "Transport",
    description: "Questions sur les moyens de transport",
    color: "from-orange-500 to-orange-700"
  },
  {
    id: "technologie",
    name: "Technologie",
    description: "Questions sur le numérique et la technologie",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    id: "emploi",
    name: "Emploi",
    description: "Questions sur le travail et l'emploi",
    color: "from-cyan-500 to-cyan-700"
  }
];
