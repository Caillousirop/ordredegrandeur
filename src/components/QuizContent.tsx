
import React from "react";
import QuizQuestion from "./QuizQuestion";
import MultiStepQuizQuestion from "./MultiStepQuizQuestion";
import { Question, MultiStepQuestion, QuizScore } from "./types";

interface QuizContentProps {
  question: Question | MultiStepQuestion;
  isMultiStep: boolean;
  questionsCompleted: number;
  onNext: () => void;
  onScore: (score: QuizScore) => void;
  onGoHome: () => void;
}

const QuizContent: React.FC<QuizContentProps> = ({
  question,
  isMultiStep,
  onNext,
  onScore,
  onGoHome
}) => {
  return (
    <div className="w-full flex justify-center">
      {isMultiStep ? (
        <MultiStepQuizQuestion
          question={question as MultiStepQuestion}
          onNext={onNext}
          onScore={onScore}
          onGoHome={onGoHome}
        />
      ) : (
        <QuizQuestion
          question={question as Question}
          onNext={onNext}
          onScore={onScore}
          onGoHome={onGoHome}
        />
      )}
    </div>
  );
};

export default QuizContent;
