
export interface Question {
  id: string;
  question: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
  type: "simple";
}

export interface Step {
  question: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
}

export interface MultiStepQuestion {
  id: string;
  type: "multistep";
  question: string;
  steps: Step[];
  finalExplanation?: string;
}

export type QuizScore = {
  questionId: string;
  accuracy: number;
  isMultiStep: boolean;
  directFinalAnswer: boolean;
};
