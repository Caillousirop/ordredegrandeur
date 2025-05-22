
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "../AccuracyGauge";
import { Step } from "../types";
import { EyeIcon, LightbulbIcon } from "lucide-react";

interface QuizStepProps {
  step: Step;
  index: number;
  submitted: boolean;
  answer: number | null;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  hintsMode?: boolean;
  isHintRevealed?: boolean;
  onRevealHint?: () => void;
}

// Helper function to format large numbers
const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toLocaleString()} milliards`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toLocaleString()} millions`;
  } else if (num >= 1000) {
    return `${(num / 1000).toLocaleString()} milliers`;
  } else {
    return num.toLocaleString();
  }
};

const QuizStep: React.FC<QuizStepProps> = ({
  step,
  index,
  submitted,
  answer,
  onInputChange,
  onSubmit,
  hintsMode = false,
  isHintRevealed = false,
  onRevealHint = () => {}
}) => {
  return (
    <div className={`p-4 border rounded-md ${submitted ? "bg-muted/20" : ""} ${hintsMode && !isHintRevealed ? "bg-amber-50" : ""}`}>
      <div className="mb-2">
        <h3 className="font-medium flex items-center">
          <Badge variant={submitted ? "default" : "outline"} className={`mr-2 ${submitted ? "bg-primary" : ""}`}>
            {index + 1}
          </Badge>
          {hintsMode ? `Indice ${index + 1}` : `Étape ${index + 1}: ${step.question}`}
        </h3>
      </div>
      
      <div className="mt-2 pt-2 border-t">
        {hintsMode && !isHintRevealed ? (
          <div className="text-center py-4">
            <Button 
              onClick={onRevealHint} 
              variant="outline"
              className="flex items-center gap-2 bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200"
            >
              <LightbulbIcon size={18} />
              Révéler cet indice
            </Button>
          </div>
        ) : hintsMode && isHintRevealed ? (
          <div className="space-y-2">
            <p className="font-medium">{step.question}</p>
            <div className="p-3 rounded-md bg-amber-50 border border-amber-200 mt-2">
              <p className="text-amber-800">
                <span className="font-semibold">Réponse:</span> {formatNumber(step.correctAnswer)} {step.unit || ""}
              </p>
              {step.explanation && (
                <p className="text-amber-700 mt-1 text-sm">
                  {step.explanation}
                </p>
              )}
            </div>
          </div>
        ) : !submitted ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                value={answer?.toString() || ""} 
                onChange={e => onInputChange(e.target.value)} 
                placeholder="Votre réponse" 
                className="flex-grow" 
              />
              {step.unit && (
                <span className="text-sm text-muted-foreground">{step.unit}</span>
              )}
            </div>
            <Button type="submit" className="w-full">Valider</Button>
          </form>
        ) : (
          <div className="space-y-4">
            <AccuracyGauge userAnswer={answer!} correctAnswer={step.correctAnswer} answerSubmitted={true} />
            
            {step.explanation && (
              <div className="mt-4 p-3 rounded-md border border-primary/20 text-sm">
                <p className="font-medium">Explication:</p>
                <p>{step.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizStep;
