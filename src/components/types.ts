
export interface Question {
  id: string;
  question: string;
  questionEn?: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
  explanationEn?: string;
  type: "simple";
  theme: string;
}

export interface Step {
  question: string;
  questionEn?: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
  explanationEn?: string;
}

export interface MultiStepQuestion {
  id: string;
  type: "multistep";
  question: string;
  questionEn?: string;
  steps: Step[];
  finalExplanation?: string;
  finalExplanationEn?: string;
  theme: string;
}

export type QuizScore = {
  questionId: string;
  accuracy: number;
  isMultiStep: boolean;
  directFinalAnswer: boolean;
  skippedSteps?: boolean;
};

export type QuizTheme = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  color: string;
  icon?: string;
};
