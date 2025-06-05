
import React from "react";
import { Step } from "../types";

interface FinalExplanationProps {
  finalExplanation?: string;
  steps?: Step[];
  onNextQuestion: () => void;
}

const FinalExplanation: React.FC<FinalExplanationProps> = ({
  finalExplanation,
  steps = [],
  onNextQuestion
}) => {
  return (
    <div className="p-4 mt-4 border-2 border-primary/20 rounded-md">
      <div className="mt-2 text-sm mb-4">
        <p className="font-medium text-base">Explication finale:</p>
        
        {/* Étapes de calcul résumées */}
        {steps && steps.length > 0 && (
          <div className="space-y-2 mt-3 mb-4">
            <p className="font-medium">Calculs:</p>
            {steps.map((step, index) => (
              <div key={index} className="pl-4 border-l-2 border-gray-200">
                <p>
                  <span className="font-medium">Étape {index + 1}:</span> {step.question}
                </p>
                <p className="text-gray-600">
                  Résultat: {step.correctAnswer.toLocaleString()} {step.unit || ""}
                </p>
              </div>
            ))}
          </div>
        )}
        
        {/* Explication finale */}
        {finalExplanation && <p className="text-primary font-medium">{finalExplanation}</p>}
      </div>
    </div>
  );
};

export default FinalExplanation;
