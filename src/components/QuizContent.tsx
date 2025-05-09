
import React from "react";
import QuizQuestion from "./QuizQuestion";
import MultiStepQuizQuestion from "./MultiStepQuizQuestion";
import { Badge } from "./ui/badge";
import { Question, MultiStepQuestion, QuizScore } from "./types";

interface QuizContentProps {
  question: Question | MultiStepQuestion;
  isMultiStep: boolean;
  onNext: () => void;
  onScore: (score: QuizScore) => void;
  questionsCompleted: number;
}

const QuizContent: React.FC<QuizContentProps> = ({
  question,
  isMultiStep,
  onNext,
  onScore,
  questionsCompleted
}) => {
  return (
    <div className="space-y-4">
      {isMultiStep ? (
        <MultiStepQuizQuestion 
          question={question as MultiStepQuestion} 
          onNext={onNext} 
          onScore={onScore}
        />
      ) : (
        <QuizQuestion 
          question={question as Question} 
          onNext={onNext} 
          onScore={onScore}
        />
      )}
      
      <div className="flex items-center justify-between text-sm text-muted-foreground px-2">
        <p>Question {questionsCompleted + 1}</p>
        
        {isMultiStep && (
          <Badge variant="outline" className="bg-primary/10">
            Question à étapes
          </Badge>
        )}
      </div>
    </div>
  );
};

export default QuizContent;
