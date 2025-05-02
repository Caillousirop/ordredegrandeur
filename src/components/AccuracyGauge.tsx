
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
    if (accuracy >= 90) return "bg-gradient-to-r from-green-500 to-green-400";
    if (accuracy >= 70) return "bg-gradient-to-r from-green-400 to-yellow-400";
    if (accuracy >= 50) return "bg-gradient-to-r from-yellow-400 to-orange-400";
    if (accuracy >= 30) return "bg-gradient-to-r from-orange-400 to-red-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span>Précision de votre réponse</span>
        <span>{answerSubmitted ? `${Math.round(accuracy)}%` : ""}</span>
      </div>
      <Progress 
        value={progress} 
        className={cn("h-4 transition-all", answerSubmitted ? getColor() : "")} 
      />
      {answerSubmitted && (
        <div className="flex justify-between text-sm">
          <span>Votre réponse: {userAnswer}</span>
          <span>Réponse correcte: {correctAnswer}</span>
        </div>
      )}
    </div>
  );
};

export default AccuracyGauge;
