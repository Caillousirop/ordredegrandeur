
import React from "react";
import { QuizStep } from "../types";

interface FinalExplanationProps {
  finalExplanation?: string;
  steps: QuizStep[];
  onNextQuestion: () => void;
}

const FinalExplanation: React.FC<FinalExplanationProps> = ({
  finalExplanation,
  steps
}) => {
  return (
    <div className="space-y-6">
      {finalExplanation && (
        <div className="bg-primary/5 rounded-lg p-4">
          <h4 className="font-medium mb-2">Explication complète</h4>
          <p className="text-sm">{finalExplanation}</p>
        </div>
      )}
      
      <div className="space-y-3">
        <h4 className="font-medium">Récapitulatif des étapes</h4>
        {steps.map((step, index) => (
          <div key={index} className="bg-muted/30 rounded-lg p-3">
            <p className="text-sm font-medium">{step.question}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Réponse : {step.correctAnswer} {step.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalExplanation;
