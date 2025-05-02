
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface AccuracyGaugeProps {
  userAnswer: number;
  correctAnswer: number;
  answerSubmitted: boolean;
}

const AccuracyGauge: React.FC<AccuracyGaugeProps> = ({
  userAnswer,
  correctAnswer,
  answerSubmitted,
}) => {
  const [progress, setProgress] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  
  // Calculate the accuracy as a percentage of how close the user's answer is to the correct one
  useEffect(() => {
    if (answerSubmitted) {
      const maxDifference = correctAnswer; // Assuming this is a reasonable max difference
      const actualDifference = Math.abs(userAnswer - correctAnswer);
      const calculatedAccuracy = Math.max(0, 100 - (actualDifference / maxDifference) * 100);
      
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
        <div className="flex justify-between text-sm pt-1">
          <span className="text-muted-foreground">Votre réponse: {userAnswer}</span>
          <span className="font-medium">Réponse correcte: {correctAnswer}</span>
        </div>
      )}
    </div>
  );
};

export default AccuracyGauge;
