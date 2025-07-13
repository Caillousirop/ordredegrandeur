
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, CircleCheck } from "lucide-react";
import AccuracyGauge from "../AccuracyGauge";
import NumberInput from "../NumberInput";

interface DirectAnswerSectionProps {
  correctAnswer: number;
  finalSubmitted: boolean;
  directFinalAnswer: string;
  setDirectFinalAnswer: (value: string) => void;
  handleDirectFinalSubmit: (e: React.FormEvent) => void;
  showAnswer: boolean;
  setShowAnswer: (value: boolean) => void;
  finalAccuracy: number;
}

const DirectAnswerSection: React.FC<DirectAnswerSectionProps> = ({
  correctAnswer,
  finalSubmitted,
  directFinalAnswer,
  setDirectFinalAnswer,
  handleDirectFinalSubmit,
  showAnswer,
  setShowAnswer,
  finalAccuracy
}) => {
  return (
    <div className="space-y-4 p-4 rounded-lg border border-border/40">
      <h3 className="font-medium">Réponse directe <Badge variant="secondary" className="ml-1">+50% points</Badge></h3>
      {!finalSubmitted ? (
        <form onSubmit={handleDirectFinalSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <NumberInput 
              value={directFinalAnswer} 
              onChange={setDirectFinalAnswer} 
              placeholder="Réponse" 
              className="flex-grow" 
            />
          </div>
          <Button type="submit" className="w-full">Valider</Button>
        </form>
      ) : (
        <div className="space-y-4">
          <AccuracyGauge userAnswer={parseFloat(directFinalAnswer)} correctAnswer={correctAnswer} answerSubmitted={finalSubmitted} />
          
          {!showAnswer ? (
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setShowAnswer(true)} className="flex items-center gap-2">
                <EyeIcon size={16} />
                Voir la réponse
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {finalAccuracy >= 75 && (
                <div className="mt-4 p-3 rounded-md border border-green-200 bg-green-50 dark:bg-green-900/20 text-sm">
                  <p className="font-medium flex items-center gap-2">
                    <CircleCheck className="h-5 w-5 text-green-500" />
                    Bravo pour cette excellente réponse directe !
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DirectAnswerSection;
