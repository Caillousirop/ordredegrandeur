
import React from "react";
import { Step } from "../types";
import QuizStep from "./QuizStep";

interface QuizStepsListProps {
  steps: Step[];
  submitted: boolean[];
  answers: (number | null)[];
  handleInputChange: (stepIndex: number, value: string) => void;
  handleStepSubmit: (e: React.FormEvent, stepIndex: number) => void;
}

const QuizStepsList: React.FC<QuizStepsListProps> = ({
  steps,
  submitted,
  answers,
  handleInputChange,
  handleStepSubmit
}) => {
  return (
    <div className="space-y-6 mt-8">
      <h3 className="font-medium">Résoudre par étapes</h3>
      <div className="grid grid-cols-1 gap-6">
        {steps.map((step, index) => (
          <QuizStep
            key={index}
            step={step}
            index={index}
            submitted={submitted[index]}
            answer={answers[index]}
            onInputChange={(value) => handleInputChange(index, value)}
            onSubmit={(e) => handleStepSubmit(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizStepsList;
