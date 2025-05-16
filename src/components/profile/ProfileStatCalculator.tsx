
import { QuizScore } from "@/components/types";

export interface ProfileStats {
  correctPercentage: number;
  totalPoints: number;
  userLevel: number;
}

export const calculateProfileStats = (scores: QuizScore[], questionsCompleted: number): ProfileStats => {
  // Calculate statistics
  const totalAnswers = scores.length;
  const correctAnswers = scores.filter(score => score.accuracy >= 50).length;
  const correctPercentage = totalAnswers > 0 
    ? Math.round((correctAnswers / totalAnswers) * 100) 
    : 0;
    
  // Calculate points based on scores
  const totalPoints = scores.reduce((total, score) => {
    // Give bonus points for direct answers on multi-step questions
    const basePoints = Math.round(score.accuracy / 10);
    const bonusPoints = score.isMultiStep && score.directFinalAnswer ? 5 : 0;
    return total + basePoints + bonusPoints;
  }, 0);
  
  // Calculate user level based on points
  const userLevel = Math.floor(totalPoints / 25) + 1;
  
  return {
    correctPercentage,
    totalPoints,
    userLevel
  };
};
