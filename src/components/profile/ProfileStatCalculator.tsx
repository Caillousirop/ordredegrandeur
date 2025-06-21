
import { QuizScore } from "@/components/types";
import { supabase } from "@/integrations/supabase/client";

export interface ProfileStats {
  correctPercentage: number;
  totalPoints: number;
  userLevel: number;
}

export interface LevelInfo {
  currentLevel: number;
  totalPoints: number;
  nextLevelPoints: number;
  currentLevelPoints: number;
}

export const calculateLevelInfo = (totalPoints: number): LevelInfo => {
  const currentLevel = Math.floor(totalPoints / 25) + 1;
  const currentLevelPoints = (currentLevel - 1) * 25;
  const nextLevelPoints = currentLevel * 25;
  
  return {
    currentLevel,
    totalPoints,
    nextLevelPoints,
    currentLevelPoints
  };
};

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

// Fonction pour charger les statistiques depuis Supabase
export const loadSupabaseStats = async (userId: string): Promise<ProfileStats | null> => {
  try {
    console.log("📊 [STATS] Chargement des statistiques pour:", userId);
    
    // Charger la progression globale
    const { data: progress, error: progressError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (progressError && progressError.code !== 'PGRST116') {
      console.error('❌ [STATS] Erreur lors du chargement de la progression:', progressError);
      return null;
    }

    if (progress) {
      console.log("✅ [STATS] Progression trouvée:", progress);
      return {
        correctPercentage: progress.correct_percentage,
        totalPoints: progress.total_points,
        userLevel: progress.user_level
      };
    } else {
      console.log("ℹ️ [STATS] Aucune progression trouvée");
    }

    return null;
  } catch (error) {
    console.error('❌ [STATS] Erreur lors du chargement des statistiques:', error);
    return null;
  }
};
