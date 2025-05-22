
import { Question, MultiStepQuestion } from "@/components/types";
import { v4 as uuidv4 } from "uuid";

// Fonction pour générer un ID unique
const generateId = () => {
  return uuidv4();
};

// Interface pour le format d'import simplifié
interface SimpleQuestionImport {
  question: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
  theme: string;
}

interface SimpleMultiStepQuestionImport {
  question: string;
  steps: {
    question: string;
    correctAnswer: number;
    unit?: string;
    explanation?: string;
  }[];
  finalExplanation?: string;
  theme: string;
}

// Fonction pour convertir les questions importées au format de l'application
export const convertSimpleQuestions = (questions: SimpleQuestionImport[]): Question[] => {
  return questions.map(q => ({
    id: generateId(),
    question: q.question,
    correctAnswer: q.correctAnswer,
    unit: q.unit,
    explanation: q.explanation,
    type: "simple" as const,
    theme: q.theme
  }));
};

// Fonction pour convertir les questions à étapes importées
export const convertMultiStepQuestions = (questions: SimpleMultiStepQuestionImport[]): MultiStepQuestion[] => {
  return questions.map(q => ({
    id: generateId(),
    question: q.question,
    steps: q.steps,
    finalExplanation: q.finalExplanation,
    type: "multistep" as const,
    theme: q.theme
  }));
};

// Nouvelle fonction pour parser du texte formaté simplement
export const parseFormattedText = (text: string): { 
  simpleQuestions: Question[],
  multiStepQuestions: MultiStepQuestion[] 
} => {
  const simpleQuestionPattern = /\((\w+)\)\s*Question simple\s*:\s*(.*?)(?=\n\(|$)/gs;
  const multiStepQuestionPattern = /\((\w+)\)\s*Question à étapes?\s*:\s*(.*?)(?=\n\(|$)/gs;
  
  const simpleQuestionMatches = [...text.matchAll(simpleQuestionPattern)];
  const multiStepQuestionMatches = [...text.matchAll(multiStepQuestionPattern)];
  
  const simpleQuestionsImport: SimpleQuestionImport[] = [];
  const multiStepQuestionsImport: SimpleMultiStepQuestionImport[] = [];
  
  // Parser les questions simples
  simpleQuestionMatches.forEach(match => {
    const theme = match[1].toLowerCase();
    const content = match[2].trim();
    
    // Format attendu: Question ? Réponse: X [Unité]. [Explication]
    const questionMatch = content.match(/^(.*?)\?\s*Réponse\s*:\s*(\d+(\.\d+)?)\s*(?:\[([^\]]+)\])?\s*(?:\.?\s*(.*))?$/s);
    
    if (questionMatch) {
      const question = questionMatch[1].trim();
      const correctAnswer = parseFloat(questionMatch[2]);
      const unit = questionMatch[4]?.trim();
      const explanation = questionMatch[5]?.trim();
      
      simpleQuestionsImport.push({
        question,
        correctAnswer,
        unit,
        explanation,
        theme
      });
    }
  });
  
  // Parser les questions à étapes
  multiStepQuestionMatches.forEach(match => {
    const theme = match[1].toLowerCase();
    const content = match[2].trim();
    
    // Séparer la question principale et les étapes
    const mainQuestionMatch = content.match(/^(.*?)\?\s*(?:Explications?\s*finales?\s*:\s*(.*?))?(?:\n|$)/s);
    
    if (mainQuestionMatch) {
      const mainQuestion = mainQuestionMatch[1].trim();
      const finalExplanation = mainQuestionMatch[2]?.trim();
      
      // Récupérer les étapes
      const stepsContent = content.substring(mainQuestionMatch[0].length).trim();
      const stepPattern = /Étape\s*\d+\s*:\s*(.*?)\?\s*Réponse\s*:\s*(\d+(\.\d+)?)\s*(?:\[([^\]]+)\])?\s*(?:\.?\s*Explications?\s*:\s*(.*?))?(?=\n*Étape|$)/gs;
      const stepMatches = [...stepsContent.matchAll(stepPattern)];
      
      const steps = stepMatches.map(stepMatch => ({
        question: stepMatch[1].trim(),
        correctAnswer: parseFloat(stepMatch[2]),
        unit: stepMatch[4]?.trim(),
        explanation: stepMatch[5]?.trim()
      }));
      
      if (steps.length > 0) {
        multiStepQuestionsImport.push({
          question: mainQuestion,
          steps,
          finalExplanation,
          theme
        });
      }
    }
  });
  
  // Convertir les imports en objets Question et MultiStepQuestion
  const simpleQuestions = convertSimpleQuestions(simpleQuestionsImport);
  const multiStepQuestions = convertMultiStepQuestions(multiStepQuestionsImport);
  
  return { simpleQuestions, multiStepQuestions };
};

// Parse du JSON pour les imports plus complexes/structurés
export const parseQuestionsFromJSON = (jsonText: string): { 
  simpleQuestions: Question[],
  multiStepQuestions: MultiStepQuestion[] 
} => {
  try {
    const parsed = JSON.parse(jsonText);
    
    let simpleQuestions: Question[] = [];
    let multiStepQuestions: MultiStepQuestion[] = [];
    
    // Si le JSON contient un tableau "simpleQuestions"
    if (Array.isArray(parsed.simpleQuestions)) {
      simpleQuestions = convertSimpleQuestions(parsed.simpleQuestions);
    } 
    // Si le JSON est directement un tableau de questions simples
    else if (Array.isArray(parsed) && parsed.length > 0 && !parsed[0].steps) {
      simpleQuestions = convertSimpleQuestions(parsed);
    }
    
    // Si le JSON contient un tableau "multiStepQuestions"
    if (Array.isArray(parsed.multiStepQuestions)) {
      multiStepQuestions = convertMultiStepQuestions(parsed.multiStepQuestions);
    }
    // Si le JSON est directement un tableau de questions à étapes
    else if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].steps) {
      multiStepQuestions = convertMultiStepQuestions(parsed);
    }
    
    return { simpleQuestions, multiStepQuestions };
  } catch (error) {
    console.error("Erreur lors du parsing du JSON:", error);
    throw new Error("Format JSON invalide");
  }
};

// Fonction pour determiner si l'entrée est du JSON ou du texte formaté
export const parseQuestions = (input: string): { 
  simpleQuestions: Question[],
  multiStepQuestions: MultiStepQuestion[] 
} => {
  input = input.trim();
  
  // Essayer de déterminer si c'est du JSON ou du texte formaté
  if ((input.startsWith('{') && input.endsWith('}')) || 
      (input.startsWith('[') && input.endsWith(']'))) {
    try {
      return parseQuestionsFromJSON(input);
    } catch (error) {
      // Si le parsing JSON échoue, essayer le format texte
      return parseFormattedText(input);
    }
  } else {
    // Par défaut, considérer comme du texte formaté
    return parseFormattedText(input);
  }
};

// Format d'exemple pour l'import en texte formaté
export const sampleTextFormat = `(economie) Question simple: Quel est le taux de croissance du PIB en France pour 2023? Réponse: 0.8 [%]. La croissance économique française en 2023 a été modérée, affectée par l'inflation et les tensions mondiales.

(demographie) Question à étapes: Quelle est l'évolution de l'espérance de vie en France depuis 1950? Explication finale: L'espérance de vie en France a considérablement augmenté depuis 1950 grâce aux progrès médicaux et à l'amélioration des conditions de vie.
Étape 1: Quelle était l'espérance de vie en France en 1950? Réponse: 66.4 [années]. Explication: En 1950, l'espérance de vie moyenne en France était de 66,4 ans, avec un écart important entre hommes et femmes.
Étape 2: Quelle était l'espérance de vie en France en 2000? Réponse: 79.2 [années]. Explication: En 2000, l'espérance de vie a atteint 79,2 ans, soit une augmentation de près de 13 ans en 50 ans.
Étape 3: Quelle est l'espérance de vie actuelle en France? Réponse: 82.3 [années]. Explication: En 2023, l'espérance de vie en France est de 82,3 ans, avec une progression qui ralentit depuis les années 2010.`;

// Format d'exemple pour l'import JSON
export const sampleJSONFormat = {
  simpleQuestions: [
    {
      question: "Quel est le taux de chômage en France en 2023 ?",
      correctAnswer: 7.4,
      unit: "%",
      explanation: "Au dernier trimestre 2023, le taux de chômage s'établit à 7,4% de la population active en France métropolitaine selon l'INSEE.",
      theme: "economie"
    }
  ],
  multiStepQuestions: [
    {
      question: "Quelle est la consommation énergétique moyenne d'un foyer français ?",
      steps: [
        {
          question: "Quelle est la consommation électrique annuelle moyenne d'un foyer français ?",
          correctAnswer: 4679,
          unit: "kWh",
          explanation: "Un foyer français consomme en moyenne 4 679 kWh d'électricité par an selon l'ADEME."
        },
        {
          question: "Quelle est la consommation moyenne de gaz naturel d'un foyer français chauffé au gaz ?",
          correctAnswer: 14370,
          unit: "kWh",
          explanation: "Un logement chauffé au gaz consomme en moyenne 14 370 kWh de gaz par an."
        }
      ],
      finalExplanation: "La consommation énergétique totale moyenne d'un foyer français combine électricité et chauffage, variant selon le type d'habitat et sa localisation.",
      theme: "environnement"
    }
  ]
};
