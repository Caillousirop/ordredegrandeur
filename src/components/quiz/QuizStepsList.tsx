
import React from "react";
import { Step } from "../types";
import QuizStep from "./QuizStep";

interface QuizStepsListProps {
  steps: Step[];
  submitted: boolean[];
  answers: (number | null)[];
  handleInputChange: (stepIndex: number, value: string) => void;
  handleStepSubmit: (e: React.FormEvent, stepIndex: number) => void;
  hintsMode?: boolean;
  hintsRevealed?: boolean[];
  revealHint?: (index: number) => void;
  allHintsRevealed?: boolean;
}

const QuizStepsList: React.FC<QuizStepsListProps> = ({
  steps,
  submitted,
  answers,
  handleInputChange,
  handleStepSubmit,
  hintsMode = false,
  hintsRevealed = [],
  revealHint = () => {},
  allHintsRevealed = false
}) => {
  return (
    <div className="space-y-6 mt-8">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">
          {hintsMode ? "Indices disponibles" : "Résoudre par étapes"}
        </h3>
        {hintsMode && allHintsRevealed && (
          <p className="text-sm text-yellow-600 font-semibold bg-yellow-100 px-2 py-1 rounded-md">
            Tous les indices sont révélés - Aucun point ne sera gagné
          </p>
        )}
      </div>
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
            hintsMode={hintsMode}
            isHintRevealed={hintsRevealed[index]}
            onRevealHint={() => revealHint(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizStepsList;
