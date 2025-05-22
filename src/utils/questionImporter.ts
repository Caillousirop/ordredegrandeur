
import { Question, MultiStepQuestion } from "@/components/types";

// Fonction pour générer un ID unique
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
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

// Fonction pour parser un JSON contenant des questions
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

// Format d'exemple pour l'import
export const sampleImportFormat = {
  simpleQuestions: [
    {
      question: "Question simple d'exemple ?",
      correctAnswer: 42,
      unit: "%",
      explanation: "Explication de la réponse",
      theme: "insolite"
    }
  ],
  multiStepQuestions: [
    {
      question: "Question à étapes d'exemple ?",
      steps: [
        {
          question: "Étape 1: Sous-question ?",
          correctAnswer: 10,
          unit: "€",
          explanation: "Explication étape 1"
        },
        {
          question: "Étape 2: Sous-question ?",
          correctAnswer: 20,
          unit: "€",
          explanation: "Explication étape 2"
        }
      ],
      finalExplanation: "Explication finale de toutes les étapes",
      theme: "insolite"
    }
  ]
};
