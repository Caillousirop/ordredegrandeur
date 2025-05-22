
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
  
  // Format large numbers to be more readable
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  // Calculate the accuracy with higher rewards for correct order of magnitude
  useEffect(() => {
    if (answerSubmitted) {
      // Check for exact match first
      const exactMatch = userAnswer === correctAnswer;
      
      // Compute order of magnitude difference
      const orderOfMagnitudeDifference = Math.abs(
        Math.floor(Math.log10(Math.abs(userAnswer) || 1)) - 
        Math.floor(Math.log10(Math.abs(correctAnswer) || 1))
      );
      
      // Calculate relative difference as a percentage
      const relativeDifference = Math.abs(userAnswer - correctAnswer) / correctAnswer;
      
      let calculatedAccuracy = 0;
      
      // Exact match gets 100%
      if (exactMatch) {
        calculatedAccuracy = 100; // Only perfect match gets 100%
      }
      // Order of magnitude is correct
      else if (orderOfMagnitudeDifference === 0) {
        // More granular scaling for better accuracy representation
        if (relativeDifference < 0.01) {
          calculatedAccuracy = 99; // Within 1%
        } else if (relativeDifference < 0.05) {
          calculatedAccuracy = 95; // Within 5%
        } else if (relativeDifference < 0.10) {
          calculatedAccuracy = 90; // Within 10%
        } else if (relativeDifference < 0.15) {
          calculatedAccuracy = 85; // Within 15%
        } else if (relativeDifference < 0.20) {
          calculatedAccuracy = 80; // Within 20%
        } else if (relativeDifference < 0.30) {
          calculatedAccuracy = 70; // Within 30%
        } else if (relativeDifference < 0.50) {
          calculatedAccuracy = 60; // Within 50%
        } else if (relativeDifference < 0.75) {
          calculatedAccuracy = 50; // Within 75%
        } else {
          calculatedAccuracy = 40; // Same order of magnitude but quite off
        }
      } 
      // One order of magnitude off
      else if (orderOfMagnitudeDifference === 1) {
        calculatedAccuracy = Math.max(10, 35 - (relativeDifference * 10));
      } 
      // More than one order of magnitude off
      else {
        calculatedAccuracy = Math.max(0, 20 - (orderOfMagnitudeDifference * 5));
      }
      
      // Clamp between 0-100
      const clampedAccuracy = Math.min(100, Math.max(0, Math.round(calculatedAccuracy)));
      
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
          <span className="text-muted-foreground">Votre réponse: {formatNumber(userAnswer)}</span>
          <span className="font-medium">Réponse correcte: {formatNumber(correctAnswer)}</span>
        </div>
      )}
    </div>
  );
};

export default AccuracyGauge;
