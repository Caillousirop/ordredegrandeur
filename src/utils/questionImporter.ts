
import { Question, MultiStepQuestion } from "@/components/types";

// Function to generate a unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Interface for the simplified import format
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

// Function to convert imported questions to the app's format
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

// Function to convert multi-step questions
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

// Function to parse a JSON containing questions
export const parseQuestionsFromJSON = (jsonText: string): { 
  simpleQuestions: Question[],
  multiStepQuestions: MultiStepQuestion[] 
} => {
  try {
    const parsed = JSON.parse(jsonText);
    
    let simpleQuestions: Question[] = [];
    let multiStepQuestions: MultiStepQuestion[] = [];
    
    // If the JSON contains a "simpleQuestions" array
    if (Array.isArray(parsed.simpleQuestions)) {
      simpleQuestions = convertSimpleQuestions(parsed.simpleQuestions);
    } 
    // If the JSON is directly an array of simple questions
    else if (Array.isArray(parsed) && parsed.length > 0 && !parsed[0].steps) {
      simpleQuestions = convertSimpleQuestions(parsed);
    }
    
    // If the JSON contains a "multiStepQuestions" array
    if (Array.isArray(parsed.multiStepQuestions)) {
      multiStepQuestions = convertMultiStepQuestions(parsed.multiStepQuestions);
    }
    // If the JSON is directly an array of multi-step questions
    else if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].steps) {
      multiStepQuestions = convertMultiStepQuestions(parsed);
    }
    
    return { simpleQuestions, multiStepQuestions };
  } catch (error) {
    console.error("Error parsing JSON:", error);
    throw new Error("Format JSON invalide");
  }
};

// Sample format for import
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
