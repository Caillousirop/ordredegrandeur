
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
    
    // Utiliser la fonction de calcul pour obtenir les stats en temps réel
    const { data: calculatedStats, error: calcError } = await supabase
      .rpc('calculate_user_progress', { user_uuid: userId });

    if (calcError) {
      console.error('❌ [STATS] Erreur lors du calcul des statistiques:', calcError);
      
      // Fallback: essayer de charger depuis user_progress
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (progressError || !progress) {
        console.log("ℹ️ [STATS] Aucune progression trouvée");
        return null;
      }

      return {
        correctPercentage: progress.correct_percentage,
        totalPoints: progress.total_points,
        userLevel: progress.user_level
      };
    }

    // Les statistiques calculées sont dans un array, prendre le premier élément
    const stats = calculatedStats && calculatedStats.length > 0 ? calculatedStats[0] : null;
    
    if (!stats) {
      console.log("ℹ️ [STATS] Aucune statistique calculée");
      return null;
    }

    console.log("✅ [STATS] Statistiques calculées:", stats);
    
    // Mettre à jour user_progress avec les nouvelles stats (sans trigger pour éviter les boucles)
    const { error: updateError } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        total_points: stats.total_points,
        questions_completed: stats.questions_completed,
        user_level: stats.user_level,
        correct_percentage: stats.correct_percentage,
        last_updated: new Date().toISOString()
      });
      
    if (updateError) {
      console.error('⚠️ [STATS] Erreur mise à jour user_progress:', updateError);
    }

    return {
      correctPercentage: stats.correct_percentage,
      totalPoints: stats.total_points,
      userLevel: stats.user_level
    };
  } catch (error) {
    console.error('❌ [STATS] Erreur lors du chargement des statistiques:', error);
    return null;
  }
};
