
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface AccuracyGaugeProps {
  userAnswer: number;
  correctAnswer: number;
  answerSubmitted: boolean;
  showAnswer?: boolean;
  onToggleShowAnswer?: () => void;
}

const AccuracyGauge: React.FC<AccuracyGaugeProps> = ({
  userAnswer,
  correctAnswer,
  answerSubmitted,
  showAnswer = false,
  onToggleShowAnswer,
}) => {
  const [progress, setProgress] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  
  // Calculate the accuracy with higher rewards for correct order of magnitude
  useEffect(() => {
    if (answerSubmitted) {
      // Compute order of magnitude difference
      const orderOfMagnitudeDifference = Math.abs(
        Math.floor(Math.log10(Math.abs(userAnswer))) - 
        Math.floor(Math.log10(Math.abs(correctAnswer)))
      );
      
      // Calculate relative difference
      const relativeDifference = Math.abs(userAnswer - correctAnswer) / correctAnswer;
      
      let calculatedAccuracy = 0;
      
      // Order of magnitude is correct (or very close)
      if (orderOfMagnitudeDifference === 0) {
        // Give higher scores when the order of magnitude is correct
        if (relativeDifference < 0.05) {
          calculatedAccuracy = 100; // Perfect or very close
        } else if (relativeDifference < 0.15) {
          calculatedAccuracy = 95; // Very good
        } else if (relativeDifference < 0.25) {
          calculatedAccuracy = 90; // Very good
        } else if (relativeDifference < 0.4) {
          calculatedAccuracy = 85; // Very good
        } else if (relativeDifference < 0.5) {
          calculatedAccuracy = 80; // Good
        } else if (relativeDifference < 0.75) {
          calculatedAccuracy = 75; // Acceptable
        } else if (relativeDifference < 1) {
          calculatedAccuracy = 70; // Acceptable
        } else {
          calculatedAccuracy = 65; // Same order of magnitude but quite off
        }
      } 
      // One order of magnitude off
      else if (orderOfMagnitudeDifference === 1) {
        calculatedAccuracy = 45;
      } 
      // More than one order of magnitude off
      else {
        calculatedAccuracy = Math.max(0, 30 - (orderOfMagnitudeDifference - 1) * 10);
      }
      
      // Clamp between 0-100
      const clampedAccuracy = Math.min(100, Math.max(0, calculatedAccuracy));
      
      // Animate the progress
      setProgress(0);
      const timer = setTimeout(() => {
        setProgress(clampedAccuracy);
      }, 100);
      
      setAccuracy(clampedAccuracy);
      
      return () => clearTimeout(timer);
    }
  }, [userAnswer, correctAnswer, answerSubmitted]);

  // Determine color based on accuracy
  const getColor = () => {
    if (accuracy >= 90) return "bg-gradient-to-r from-emerald-500 to-emerald-400";
    if (accuracy >= 70) return "bg-gradient-to-r from-green-500 to-lime-400";
    if (accuracy >= 50) return "bg-gradient-to-r from-yellow-400 to-amber-400";
    if (accuracy >= 30) return "bg-gradient-to-r from-orange-400 to-red-400";
    return "bg-gradient-to-r from-red-500 to-rose-400";
  };

  const getEmoji = () => {
    if (accuracy >= 90) return "🎯";
    if (accuracy >= 70) return "👍";
    if (accuracy >= 50) return "😐";
    if (accuracy >= 30) return "😕";
    return "😢";
  };

  const getFeedbackMessage = () => {
    if (accuracy >= 90) return "Bravo ! Réponse exceptionnelle";
    if (accuracy >= 70) return "Très bonne réponse";
    if (accuracy >= 50) return "Bonne réponse";
    if (accuracy >= 30) return "Pas si loin";
    return "Vous pouvez faire mieux";
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Précision de votre réponse</span>
        <div className="flex items-center gap-1.5">
          {answerSubmitted && <span className="text-xl">{getEmoji()}</span>}
          <span className="text-sm font-semibold">{answerSubmitted ? `${Math.round(accuracy)}%` : ""}</span>
        </div>
      </div>
      <div className="relative">
        <Progress 
          value={progress} 
          className={cn("h-4 rounded-full transition-all", answerSubmitted ? getColor() : "")} 
        />
      </div>
      
      {answerSubmitted && (
        <div className="flex flex-col gap-2">
          <p className="text-center font-medium text-sm mt-2">{getFeedbackMessage()}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Votre réponse: {userAnswer}</span>
            
            {onToggleShowAnswer && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={onToggleShowAnswer}
                className="flex items-center gap-1"
              >
                <Eye size={14} />
                {showAnswer ? "Masquer la réponse" : "Voir la réponse"}
              </Button>
            )}
          </div>
          
          {showAnswer && (
            <div className="text-right font-medium text-sm">
              Réponse correcte: {correctAnswer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccuracyGauge;
