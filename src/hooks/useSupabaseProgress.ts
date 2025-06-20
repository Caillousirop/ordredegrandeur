
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { QuizScore } from "@/components/types";

export const useSupabaseProgress = () => {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  // Sauvegarder un score dans Supabase
  const saveScore = async (score: QuizScore) => {
    if (!user) {
      console.log("❌ Utilisateur non connecté, impossible de sauvegarder");
      return false;
    }

    try {
      console.log("💾 Début de la sauvegarde du score:", score);
      setSyncing(true);
      
      // D'abord vérifier si un score existe déjà pour cette question
      const { data: existingScore } = await supabase
        .from('user_quiz_scores')
        .select('id')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      let result;
      
      if (existingScore) {
        // Mettre à jour le score existant
        result = await supabase
          .from('user_quiz_scores')
          .update({
            accuracy: score.accuracy,
            is_multi_step: score.isMultiStep || false,
            direct_final_answer: score.directFinalAnswer || false,
            skipped_steps: score.skippedSteps || false,
            used_hints: score.usedHints || false,
            hints_revealed_count: score.hintsRevealedCount || 0
          })
          .eq('id', existingScore.id)
          .select();
      } else {
        // Insérer un nouveau score
        result = await supabase
          .from('user_quiz_scores')
          .insert({
            user_id: user.id,
            question_id: score.questionId,
            accuracy: score.accuracy,
            is_multi_step: score.isMultiStep || false,
            direct_final_answer: score.directFinalAnswer || false,
            skipped_steps: score.skippedSteps || false,
            used_hints: score.usedHints || false,
            hints_revealed_count: score.hintsRevealedCount || 0
          })
          .select();
      }

      if (result.error) {
        console.error('❌ Erreur lors de la sauvegarde du score:', result.error);
        throw result.error;
      }

      console.log('✅ Score sauvegardé avec succès:', result.data);
      
      // Mettre à jour manuellement la progression si le trigger ne fonctionne pas
      await updateProgressManually(user.id);
      
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
      return false;
    } finally {
      setSyncing(false);
    }
  };

  // Mettre à jour manuellement la progression utilisateur
  const updateProgressManually = async (userId: string) => {
    try {
      console.log("🔄 Mise à jour manuelle de la progression pour:", userId);
      
      // Calculer les statistiques depuis les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', userId);

      if (scoresError) {
        console.error('❌ Erreur lors du chargement des scores pour mise à jour:', scoresError);
        return;
      }

      if (!scores || scores.length === 0) {
        console.log("ℹ️ Aucun score trouvé pour calculer la progression");
        return;
      }

      // Calculer les statistiques
      const totalPoints = scores.reduce((total, score) => {
        const basePoints = score.accuracy >= 50 ? Math.round(score.accuracy / 10) : 0;
        const bonusPoints = score.is_multi_step && score.direct_final_answer ? 5 : 0;
        return total + basePoints + bonusPoints;
      }, 0);

      const questionsCompleted = scores.length;
      const userLevel = Math.max(1, Math.floor(totalPoints / 25));
      const correctAnswers = scores.filter(score => score.accuracy >= 50).length;
      const correctPercentage = Math.round((correctAnswers / questionsCompleted) * 100);

      console.log("📊 Statistiques calculées:", {
        totalPoints,
        questionsCompleted,
        userLevel,
        correctPercentage
      });

      // Mettre à jour ou insérer la progression
      const { error: progressError } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          total_points: totalPoints,
          questions_completed: questionsCompleted,
          user_level: userLevel,
          correct_percentage: correctPercentage,
          last_updated: new Date().toISOString()
        });

      if (progressError) {
        console.error('❌ Erreur lors de la mise à jour de la progression:', progressError);
      } else {
        console.log('✅ Progression mise à jour avec succès');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la mise à jour manuelle:', error);
    }
  };

  // Charger la progression depuis Supabase
  const loadProgress = async () => {
    if (!user) {
      console.log("❌ Utilisateur non connecté, impossible de charger la progression");
      return null;
    }

    try {
      setSyncing(true);
      console.log("📥 Chargement de la progression depuis Supabase pour l'utilisateur:", user.id);
      
      // Charger la progression globale
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError) {
        console.error('❌ Erreur lors du chargement de la progression:', progressError);
      } else {
        console.log('📊 Progression chargée:', progress);
      }

      // Charger tous les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('❌ Erreur lors du chargement des scores:', scoresError);
      } else {
        console.log('🏆 Scores chargés:', scores?.length || 0);
      }

      const result = {
        progress,
        scores: scores?.map(score => ({
          questionId: score.question_id,
          accuracy: score.accuracy,
          isMultiStep: score.is_multi_step,
          directFinalAnswer: score.direct_final_answer,
          skippedSteps: score.skipped_steps,
          usedHints: score.used_hints,
          hintsRevealedCount: score.hints_revealed_count
        })) || []
      };
      
      console.log('📦 Données complètes chargées:', result);
      return result;
    } catch (error) {
      console.error('❌ Erreur lors du chargement:', error);
      return null;
    } finally {
      setSyncing(false);
    }
  };

  return {
    saveScore,
    loadProgress,
    syncing
  };
};
