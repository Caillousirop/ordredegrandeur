
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, LightbulbIcon } from "lucide-react";

interface QuizModeSwitcherProps {
  directFinalMode: boolean;
  hintsMode?: boolean;
  onToggle: () => void;
  onToggleHints?: () => void;
  anyStepSubmitted: boolean;
  onNextQuestion: () => void;
  allHintsRevealed?: boolean;
}

const QuizModeSwitcher: React.FC<QuizModeSwitcherProps> = ({
  directFinalMode,
  hintsMode = false,
  onToggle,
  onToggleHints = () => {},
  anyStepSubmitted,
  onNextQuestion,
  allHintsRevealed = false
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
      <div className="flex gap-2">
        <Button 
          onClick={onToggleHints} 
          variant={hintsMode ? "secondary" : "outline"} 
          size="sm"
          className={hintsMode ? 
            "bg-amber-500 hover:bg-amber-600 text-white border-amber-300" : 
            "text-amber-700"
          }
        >
          <LightbulbIcon size={16} className="mr-1" />
          Indices
          {allHintsRevealed && hintsMode && (
            <span className="rounded-full bg-yellow-200 text-yellow-800 text-xs ml-1 px-1">!</span>
          )}
        </Button>
        
        {!hintsMode && (
          <Button 
            onClick={onToggle} 
            variant={directFinalMode ? "secondary" : "outline"} 
            size="sm"
            className={!directFinalMode ? 
              "bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 border-purple-300 font-medium shadow-sm" : 
              ""
            }
          >
            {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizModeSwitcher;
