
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
  
  // Calculate the accuracy with much better order of magnitude handling
  useEffect(() => {
    if (answerSubmitted) {
      // Check for exact match first
      const exactMatch = userAnswer === correctAnswer;
      
      // Compute order of magnitude for both answers
      const userMagnitude = Math.abs(userAnswer) === 0 ? 0 : Math.floor(Math.log10(Math.abs(userAnswer)));
      const correctMagnitude = Math.abs(correctAnswer) === 0 ? 0 : Math.floor(Math.log10(Math.abs(correctAnswer)));
      
      // Calculate the difference in order of magnitude
      const orderOfMagnitudeDifference = Math.abs(userMagnitude - correctMagnitude);
      
      // Calculate relative difference (as a fraction of the correct answer)
      const relativeDifference = Math.abs(userAnswer - correctAnswer) / Math.abs(correctAnswer);
      
      let calculatedAccuracy = 0;
      
      // Exact match gets 100%
      if (exactMatch) {
        calculatedAccuracy = 100;
      }
      // Same order of magnitude - very good!
      else if (orderOfMagnitudeDifference === 0) {
        // More generous scoring for same order of magnitude
        if (relativeDifference < 0.05) {
          calculatedAccuracy = 98; // Within 5% - excellent
        } else if (relativeDifference < 0.1) {
          calculatedAccuracy = 95; // Within 10% - very good
        } else if (relativeDifference < 0.2) {
          calculatedAccuracy = 90; // Within 20% - good
        } else if (relativeDifference < 0.5) {
          calculatedAccuracy = 85; // Within 50% - still good
        } else if (relativeDifference < 1) {
          calculatedAccuracy = 80; // Within 100% but same magnitude - decent
        } else {
          calculatedAccuracy = 75; // Same order of magnitude but quite off
        }
      } 
      // One order of magnitude off - still decent for large numbers
      else if (orderOfMagnitudeDifference === 1) {
        // Be more generous for very large numbers (billions, trillions)
        if (correctMagnitude >= 9) { // Billions or more
          calculatedAccuracy = 70; // Good effort for billions
        } else if (correctMagnitude >= 6) { // Millions
          calculatedAccuracy = 60; // Decent for millions
        } else {
          calculatedAccuracy = 45; // Less forgiving for smaller numbers
        }
      } 
      // Two orders of magnitude off
      else if (orderOfMagnitudeDifference === 2) {
        if (correctMagnitude >= 9) { // Billions or more
          calculatedAccuracy = 50; // Still some credit for billions
        } else if (correctMagnitude >= 6) { // Millions
          calculatedAccuracy = 35; // Some credit for millions
        } else {
          calculatedAccuracy = 25;
        }
      }
      // Three orders of magnitude off
      else if (orderOfMagnitudeDifference === 3) {
        if (correctMagnitude >= 9) { // Billions or more
          calculatedAccuracy = 30; // Minimal credit for billions
        } else {
          calculatedAccuracy = 15;
        }
      }
      // More than three orders of magnitude off - very poor
      else {
        calculatedAccuracy = Math.max(5, 20 - (orderOfMagnitudeDifference - 3) * 5);
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
