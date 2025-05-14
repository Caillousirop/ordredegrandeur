
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

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
            variant="default"
            className="text-sm flex items-center gap-1"
          >
            Question suivante
            <ArrowRightIcon size={16} />
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
