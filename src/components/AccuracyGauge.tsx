
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { calculateAccuracy } from "./quiz/CalculateAccuracy";

interface AccuracyGaugeProps {
  userAnswer: number;
  correctAnswer: number;
  answerSubmitted: boolean;
  accuracy?: number;
  size?: "sm" | "md" | "lg";
}

const AccuracyGauge: React.FC<AccuracyGaugeProps> = ({
  userAnswer,
  correctAnswer,
  answerSubmitted,
  accuracy: providedAccuracy,
  size = "md",
}) => {
  const [progress, setProgress] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  
  // Format large numbers to be more readable
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  // Calculate the accuracy using the centralized function or use provided accuracy
  useEffect(() => {
    if (answerSubmitted) {
      const calculatedAccuracy = providedAccuracy !== undefined 
        ? providedAccuracy 
        : calculateAccuracy(userAnswer, correctAnswer);
      
      console.log(`AccuracyGauge: User answer: ${userAnswer}, Correct answer: ${correctAnswer}, Calculated accuracy: ${calculatedAccuracy}`);
      
      // Animate the progress
      setProgress(0);
      const timer = setTimeout(() => {
        setProgress(calculatedAccuracy);
      }, 100);
      
      setAccuracy(calculatedAccuracy);
      
      return () => clearTimeout(timer);
    }
  }, [userAnswer, correctAnswer, answerSubmitted, providedAccuracy]);

  // Determine color based on accuracy
  const getColor = () => {
    if (accuracy >= 90) return "bg-gradient-to-r from-emerald-500 to-emerald-400";
    if (accuracy >= 75) return "bg-gradient-to-r from-green-500 to-lime-400";
    if (accuracy >= 60) return "bg-gradient-to-r from-yellow-400 to-amber-400";
    if (accuracy >= 40) return "bg-gradient-to-r from-orange-400 to-red-400";
    return "bg-gradient-to-r from-red-500 to-rose-400";
  };

  const getEmoji = () => {
    if (accuracy >= 90) return "🎯";
    if (accuracy >= 75) return "👍";
    if (accuracy >= 60) return "😊";
    if (accuracy >= 40) return "😐";
    if (accuracy >= 25) return "😕";
    return "😢";
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm": return "h-2";
      case "lg": return "h-6";
      default: return "h-4";
    }
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
          className={cn(`${getSizeClass()} rounded-full transition-all`, answerSubmitted ? getColor() : "")} 
        />
      </div>
      {answerSubmitted && (
        <div className="flex justify-between text-sm pt-1">
          <span className="text-muted-foreground">Votre réponse: {formatNumber(userAnswer)}</span>
          <span className="font-medium">Réponse correcte: {formatNumber(correctAnswer)}</span>
        </div>
      )}
    </div>
  );
};

export default AccuracyGauge;
