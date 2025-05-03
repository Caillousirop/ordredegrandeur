
import { Question, MultiStepQuestion } from "@/components/types";

export const questions: (Question | MultiStepQuestion)[] = [
  {
    id: "1",
    question: "Quel est le pourcentage de femmes en France en 2023 ?",
    questionEn: "What was the percentage of women in France in 2023?",
    correctAnswer: 51.7,
    unit: "%",
    explanation: "En France, les femmes représentent environ 51,7% de la population selon les dernières estimations de l'INSEE.",
    explanationEn: "In France, women represent approximately 51.7% of the population according to the latest INSEE estimates.",
    type: "simple",
    theme: "démographie"
  },
  {
    id: "2",
    question: "Quelle est la température moyenne mondiale en 2023 (en degrés Celsius) ?",
    questionEn: "What was the global average temperature in 2023 (in degrees Celsius)?",
    correctAnswer: 14.8,
    unit: "°C",
    explanation: "La température moyenne mondiale en 2023 était d'environ 14,8°C, ce qui est plus élevé que la moyenne pré-industrielle.",
    explanationEn: "The global average temperature in 2023 was around 14.8°C, which is higher than the pre-industrial average.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "3",
    question: "Quel était le taux de chômage en France en 2023 ?",
    questionEn: "What was the unemployment rate in France in 2023?",
    correctAnswer: 7.1,
    unit: "%",
    explanation: "Le taux de chômage en France en 2023 était d'environ 7,1% selon l'INSEE.",
    explanationEn: "The unemployment rate in France in 2023 was around 7.1% according to INSEE.",
    type: "simple",
    theme: "économie"
  },
  {
    id: "4",
    question: "Quel est le pourcentage de la surface terrestre couverte par les océans ?",
    questionEn: "What percentage of the Earth's surface is covered by oceans?",
    correctAnswer: 71,
    unit: "%",
    explanation: "Les océans couvrent environ 71% de la surface terrestre.",
    explanationEn: "Oceans cover approximately 71% of the Earth's surface.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "5",
    question: "Combien de litres d'eau consomme en moyenne un Français par jour ?",
    questionEn: "How many liters of water does the average French person consume per day?",
    correctAnswer: 148,
    unit: "litres",
    explanation: "Un Français consomme en moyenne 148 litres d'eau par jour pour son usage domestique.",
    explanationEn: "A French person consumes an average of 148 liters of water per day for domestic use.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "6",
    type: "multistep",
    question: "Combien de femmes de plus de 50 ans ont un diplôme Bac+5 en France ?",
    questionEn: "How many women over 50 years old have a Master's degree in France?",
    finalExplanation: "D'après les statistiques de l'INSEE, environ 420 000 femmes de plus de 50 ans possèdent un diplôme de niveau Bac+5 ou plus en France.",
    finalExplanationEn: "According to INSEE statistics, approximately 420,000 women over 50 years old have a Master's degree or higher in France.",
    theme: "démographie",
    steps: [
      {
        question: "Combien y a-t-il de femmes de plus de 50 ans en France ?",
        questionEn: "How many women over 50 years old are there in France?",
        correctAnswer: 13.2,
        unit: "millions",
        explanation: "En France, il y a environ 13,2 millions de femmes âgées de plus de 50 ans selon les dernières données démographiques.",
        explanationEn: "In France, there are approximately 13.2 million women over 50 years old according to the latest demographic data."
      },
      {
        question: "Quel pourcentage de la population française possède un diplôme Bac+5 ?",
        questionEn: "What percentage of the French population has a Master's degree?",
        correctAnswer: 10.5,
        unit: "%",
        explanation: "Environ 10,5% de la population française détient un diplôme de niveau Bac+5 ou plus.",
        explanationEn: "Approximately 10.5% of the French population holds a Master's degree or higher."
      },
      {
        question: "Parmi les femmes de plus de 50 ans, combien possèdent un diplôme Bac+5 ?",
        questionEn: "Among women over 50 years old, how many have a Master's degree?",
        correctAnswer: 420000,
        unit: "personnes",
        explanation: "Le croisement des données démographiques et éducatives montre qu'environ 420 000 femmes de plus de 50 ans ont un diplôme Bac+5.",
        explanationEn: "Combining demographic and educational data shows that approximately 420,000 women over 50 years old have a Master's degree."
      }
    ]
  },
  {
    id: "7",
    type: "multistep",
    question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants en France ?",
    questionEn: "How many electric cars are there in cities with over 100,000 inhabitants in France?",
    finalExplanation: "En croisant les données d'immatriculation et d'urbanisme, on estime qu'environ 210 000 voitures électriques circulent dans les grandes villes françaises de plus de 100 000 habitants.",
    finalExplanationEn: "By cross-referencing registration and urban planning data, it is estimated that approximately 210,000 electric cars are in use in major French cities with over 100,000 inhabitants.",
    theme: "environnement",
    steps: [
      {
        question: "Combien y a-t-il de voitures électriques en France au total ?",
        questionEn: "How many electric cars are there in France in total?",
        correctAnswer: 620000,
        unit: "véhicules",
        explanation: "La France compte environ 620 000 voitures électriques immatriculées selon les dernières statistiques.",
        explanationEn: "France has approximately 620,000 registered electric cars according to the latest statistics."
      },
      {
        question: "Quel pourcentage de la population française vit dans des villes de plus de 100 000 habitants ?",
        questionEn: "What percentage of the French population lives in cities with over 100,000 inhabitants?",
        correctAnswer: 34,
        unit: "%",
        explanation: "Environ 34% de la population française vit dans des villes de plus de 100 000 habitants.",
        explanationEn: "Approximately 34% of the French population lives in cities with over 100,000 inhabitants."
      },
      {
        question: "Combien de voitures électriques circulent dans les villes de plus de 100 000 habitants ?",
        questionEn: "How many electric cars are in use in cities with over 100,000 inhabitants?",
        correctAnswer: 210000,
        unit: "véhicules",
        explanation: "En appliquant la répartition démographique et les taux d'adoption plus élevés en zones urbaines, on estime ce nombre à 210 000 véhicules.",
        explanationEn: "Applying demographic distribution and higher adoption rates in urban areas, this number is estimated at 210,000 vehicles."
      }
    ]
  },
  {
    id: "8",
    question: "Quel est le pourcentage de matières plastiques recyclées en France ?",
    questionEn: "What percentage of plastic materials are recycled in France?",
    correctAnswer: 24.5,
    unit: "%",
    explanation: "Environ 24,5% des matières plastiques sont recyclées en France, ce qui reste en dessous des objectifs européens.",
    explanationEn: "Approximately 24.5% of plastic materials are recycled in France, which remains below European targets.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "9",
    question: "Combien d'heures en moyenne un Français passe-t-il sur son smartphone par jour ?",
    questionEn: "How many hours on average does a French person spend on their smartphone per day?",
    correctAnswer: 3.4,
    unit: "heures",
    explanation: "Les Français passent en moyenne 3,4 heures par jour sur leur smartphone selon les études récentes.",
    explanationEn: "French people spend an average of 3.4 hours per day on their smartphones according to recent studies.",
    type: "simple",
    theme: "société"
  },
  {
    id: "10",
    question: "Quelle est la part des énergies renouvelables dans la production d'électricité en France ?",
    questionEn: "What is the share of renewable energies in electricity production in France?",
    correctAnswer: 22.3,
    unit: "%",
    explanation: "Les énergies renouvelables représentent environ 22,3% de la production d'électricité en France.",
    explanationEn: "Renewable energies account for approximately 22.3% of electricity production in France.",
    type: "simple",
    theme: "environnement"
  },
  {
    id: "11",
    type: "multistep",
    question: "Combien de calories sont consommées par jour par personne en France ?",
    questionEn: "How many calories are consumed per day per person in France?",
    finalExplanation: "En tenant compte de tous les facteurs (âge, sexe, activité), la consommation moyenne est de 2380 calories par jour par personne en France.",
    finalExplanationEn: "Taking into account all factors (age, gender, activity), the average consumption is 2,380 calories per day per person in France.",
    theme: "santé",
    steps: [
      {
        question: "Combien de calories sont recommandées pour un homme adulte par jour ?",
        questionEn: "How many calories are recommended for an adult man per day?",
        correctAnswer: 2500,
        unit: "calories",
        explanation: "Les recommandations nutritionnelles indiquent environ 2500 calories par jour pour un homme adulte avec une activité modérée.",
        explanationEn: "Nutritional recommendations indicate approximately 2,500 calories per day for an adult man with moderate activity."
      },
      {
        question: "Combien de calories sont recommandées pour une femme adulte par jour ?",
        questionEn: "How many calories are recommended for an adult woman per day?",
        correctAnswer: 2000,
        unit: "calories",
        explanation: "Les recommandations nutritionnelles indiquent environ 2000 calories par jour pour une femme adulte avec une activité modérée.",
        explanationEn: "Nutritional recommendations indicate approximately 2,000 calories per day for an adult woman with moderate activity."
      },
      {
        question: "Quelle est la consommation moyenne de calories par jour par personne en France ?",
        questionEn: "What is the average calorie consumption per day per person in France?",
        correctAnswer: 2380,
        unit: "calories",
        explanation: "En tenant compte de tous les facteurs (âge, sexe, niveau d'activité), la consommation moyenne est de 2380 calories par jour par personne.",
        explanationEn: "Taking into account all factors (age, gender, activity level), the average consumption is 2,380 calories per day per person."
      }
    ]
  },
  {
    id: "12",
    type: "multistep",
    question: "Combien d'arbres faut-il pour absorber les émissions CO2 d'une voiture moyenne pendant un an ?",
    questionEn: "How many trees are needed to absorb the CO2 emissions of an average car for one year?",
    finalExplanation: "Il faut environ 30 arbres pour absorber les 4,6 tonnes de CO2 émises par une voiture moyenne pendant un an.",
    finalExplanationEn: "It takes about 30 trees to absorb the 4.6 tons of CO2 emitted by an average car over one year.",
    theme: "environnement",
    steps: [
      {
        question: "Combien de tonnes de CO2 une voiture moyenne émet-elle par an ?",
        questionEn: "How many tons of CO2 does an average car emit per year?",
        correctAnswer: 4.6,
        unit: "tonnes",
        explanation: "Une voiture moyenne qui parcourt environ 15 000 km par an émet approximativement 4,6 tonnes de CO2.",
        explanationEn: "An average car that travels about 15,000 km per year emits approximately 4.6 tons of CO2."
      },
      {
        question: "Combien de kg de CO2 un arbre adulte absorbe-t-il par an ?",
        questionEn: "How many kg of CO2 does an adult tree absorb per year?",
        correctAnswer: 150,
        unit: "kg",
        explanation: "Un arbre adulte absorbe en moyenne environ 150 kg de CO2 par an, bien que cela varie selon l'espèce et l'âge.",
        explanationEn: "An adult tree absorbs on average about 150 kg of CO2 per year, although this varies by species and age."
      },
      {
        question: "Combien d'arbres seraient nécessaires pour absorber les émissions annuelles d'une voiture ?",
        questionEn: "How many trees would be needed to absorb the annual emissions of a car?",
        correctAnswer: 30,
        unit: "arbres",
        explanation: "Pour absorber 4,6 tonnes (4600 kg) de CO2 avec des arbres absorbant 150 kg chacun, il faudrait 4600 ÷ 150 = environ 30 arbres.",
        explanationEn: "To absorb 4.6 tons (4,600 kg) of CO2 with trees absorbing 150 kg each, you would need 4,600 ÷ 150 = approximately 30 trees."
      },
      {
        question: "Quelle surface forestière cela représente-t-il ?",
        questionEn: "What forest area does this represent?",
        correctAnswer: 0.15,
        unit: "hectares",
        explanation: "Avec une densité moyenne de 200 arbres par hectare dans une forêt mature, 30 arbres représentent environ 0,15 hectares.",
        explanationEn: "With an average density of 200 trees per hectare in a mature forest, 30 trees represent approximately 0.15 hectares."
      }
    ]
  },
  {
    id: "13",
    question: "Quel est le taux d'alphabétisation mondiale en 2023 ?",
    questionEn: "What is the global literacy rate in 2023?",
    correctAnswer: 86.3,
    unit: "%",
    explanation: "Le taux d'alphabétisation mondial est d'environ 86,3% selon les dernières données de l'UNESCO.",
    explanationEn: "The global literacy rate is approximately 86.3% according to the latest UNESCO data.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "14",
    question: "Quelle est l'espérance de vie moyenne en France en 2023 ?",
    questionEn: "What is the average life expectancy in France in 2023?",
    correctAnswer: 82.7,
    unit: "ans",
    explanation: "L'espérance de vie moyenne en France est d'environ 82,7 ans (tous sexes confondus).",
    explanationEn: "The average life expectancy in France is approximately 82.7 years (all genders combined).",
    type: "simple",
    theme: "santé"
  },
  {
    id: "15",
    question: "Quel pourcentage des ménages français possède au moins une voiture ?",
    questionEn: "What percentage of French households own at least one car?",
    correctAnswer: 81.5,
    unit: "%",
    explanation: "Environ 81,5% des ménages français possèdent au moins une voiture selon les dernières statistiques.",
    explanationEn: "Approximately 81.5% of French households own at least one car according to the latest statistics.",
    type: "simple",
    theme: "société"
  }
];

export const themes = [
  { 
    id: "démographie", 
    name: "Démographie",
    nameEn: "Demographics", 
    description: "Questions sur la population et ses caractéristiques",
    descriptionEn: "Questions about population and its characteristics",
    color: "from-blue-500 to-blue-300" 
  },
  { 
    id: "économie", 
    name: "Économie",
    nameEn: "Economy", 
    description: "Questions sur l'économie et les finances",
    descriptionEn: "Questions about economy and finance",
    color: "from-green-500 to-green-300" 
  },
  { 
    id: "environnement", 
    name: "Environnement",
    nameEn: "Environment", 
    description: "Questions sur l'écologie et l'environnement",
    descriptionEn: "Questions about ecology and environment",
    color: "from-emerald-500 to-emerald-300" 
  },
  { 
    id: "santé", 
    name: "Santé",
    nameEn: "Health", 
    description: "Questions sur la santé et le bien-être",
    descriptionEn: "Questions about health and wellness",
    color: "from-red-500 to-red-300" 
  },
  { 
    id: "société", 
    name: "Société",
    nameEn: "Society", 
    description: "Questions sur les tendances et comportements sociaux",
    descriptionEn: "Questions about social trends and behaviors",
    color: "from-orange-500 to-orange-300" 
  },
  { 
    id: "éducation", 
    name: "Éducation",
    nameEn: "Education", 
    description: "Questions sur l'éducation et l'enseignement",
    descriptionEn: "Questions about education and learning",
    color: "from-purple-500 to-purple-300" 
  }
];
