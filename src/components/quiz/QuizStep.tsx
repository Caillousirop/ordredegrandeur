
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "../AccuracyGauge";
import { Step } from "../types";

interface QuizStepProps {
  step: Step;
  index: number;
  submitted: boolean;
  answer: number | null;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const QuizStep: React.FC<QuizStepProps> = ({
  step,
  index,
  submitted,
  answer,
  onInputChange,
  onSubmit
}) => {
  return (
    <div className={`p-4 border rounded-md ${submitted ? "bg-muted/20" : ""}`}>
      <div className="mb-2">
        <h3 className="font-medium flex items-center">
          <Badge variant={submitted ? "default" : "outline"} className={`mr-2 ${submitted ? "bg-primary" : ""}`}>
            {index + 1}
          </Badge>
          Étape {index + 1}: {step.question}
        </h3>
      </div>
      
      <div className="mt-2 pt-2 border-t">
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                value={answer?.toString() || ""} 
                onChange={e => onInputChange(e.target.value)} 
                placeholder="Votre réponse" 
                className="flex-grow" 
              />
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
