
export interface Question {
  id: string;
  question: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
  type: "simple";
  theme: string;
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
  theme: string;
}

export type QuizScore = {
  questionId: string;
  accuracy: number;
  isMultiStep: boolean;
  directFinalAnswer: boolean;
  skippedSteps?: boolean;
  usedHints?: boolean;
  hintsRevealedCount?: number;
};

export type QuizTheme = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon?: string;
};
