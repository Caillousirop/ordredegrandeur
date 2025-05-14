
import React from "react";
import { Button } from "@/components/ui/button";

interface QuizModeSwitcherProps {
  directFinalMode: boolean;
  onToggle: () => void;
  anyStepSubmitted: boolean;
  onNextQuestion: () => void;
}

const QuizModeSwitcher: React.FC<QuizModeSwitcherProps> = ({
  directFinalMode,
  onToggle,
  anyStepSubmitted,
  onNextQuestion
}) => {
  return (
    <div className="flex justify-between">
      <div>
        {anyStepSubmitted && (
          <Button 
            onClick={onNextQuestion} 
            variant="outline" 
            className="text-sm"
          >
            Question suivante
          </Button>
        )}
      </div>
      <Button onClick={onToggle} variant={directFinalMode ? "secondary" : "outline"} size="sm">
        {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
      </Button>
    </div>
  );
};

export default QuizModeSwitcher;
