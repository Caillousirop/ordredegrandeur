
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
      <div>
        <Button 
          onClick={onToggle} 
          variant={directFinalMode ? "secondary" : "default"} 
          size="sm"
          className={!directFinalMode ? 
            "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 border-none font-semibold shadow-md" : 
            "bg-gradient-to-r from-purple-600/40 to-pink-500/40 hover:from-purple-600/60 hover:to-pink-500/60 text-white shadow-sm"
          }
        >
          {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
        </Button>
      </div>
    </div>
  );
};

export default QuizModeSwitcher;
