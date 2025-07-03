
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { QuizScore } from "@/components/types";

export const useSupabaseProgress = () => {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  // Charger la progression utilisateur avec la fonction RPC
  const loadProgress = async () => {
    if (!user) {
      console.log("❌ [LOAD] Utilisateur non connecté");
      return null;
    }

    try {
      setSyncing(true);
      console.log("📥 [LOAD] Chargement progression avec RPC pour:", user.id);
      
      // Utiliser la fonction RPC get_user_progress
      const { data: progress, error: progressError } = await supabase
        .rpc('get_user_progress');

      if (progressError) {
        console.error('❌ [LOAD] Erreur RPC progression:', progressError);
        return null;
      }

      // Charger les scores existants
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('❌ [LOAD] Erreur scores:', scoresError);
        return null;
      }

      // Transformer les scores pour le format attendu
      const transformedScores = scores?.map(score => ({
        questionId: score.question_id,
        accuracy: score.accuracy,
        isMultiStep: score.is_multi_step,
        directFinalAnswer: score.direct_final_answer,
        skippedSteps: score.skipped_steps,
        usedHints: score.used_hints,
        hintsRevealedCount: score.hints_revealed_count
      })) || [];

      console.log("✅ [LOAD] Données chargées avec RPC:", {
        progress,
        scoresCount: transformedScores.length
      });

      return {
        progress,
        scores: transformedScores
      };
    } catch (error) {
      console.error('❌ [LOAD] Erreur inattendue:', error);
      return null;
    } finally {
      setSyncing(false);
    }
  };

  // Sauvegarder un score et mettre à jour la progression
  const saveScore = async (score: QuizScore) => {
    if (!user) {
      console.log("❌ [SAVE] Utilisateur non connecté");
      return false;
    }

    try {
      console.log("💾 [SAVE] Début sauvegarde du score:", score);
      setSyncing(true);
      
      // D'abord, sauvegarder le score
      const { data: existingScore } = await supabase
        .from('user_quiz_scores')
        .select('id')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      let scoreResult;
      if (existingScore) {
        // Mettre à jour le score existant
        console.log("🔄 [SAVE] Mise à jour du score existant");
        scoreResult = await supabase
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
        console.log("➕ [SAVE] Insertion d'un nouveau score");
        scoreResult = await supabase
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

      if (scoreResult.error) {
        console.error('❌ [SAVE] Erreur sauvegarde score:', scoreResult.error);
        return false;
      }

      // Calculer les points d'expérience basés sur la précision
      let experiencePoints = Math.round(score.accuracy / 10);
      
      // Bonus pour les réponses directes sur questions multi-étapes
      if (score.isMultiStep && score.directFinalAnswer) {
        experiencePoints += 5;
      }

      // Mettre à jour la progression avec la fonction RPC
      const { data: progressData, error: progressError } = await supabase
        .rpc('update_user_progress', {
          p_experience_points: experiencePoints
        });

      if (progressError) {
        console.error('❌ [SAVE] Erreur RPC progression:', progressError);
        return false;
      }

      console.log('✅ [SAVE] Score et progression sauvegardés:', {
        score: scoreResult.data,
        progress: progressData,
        experiencePoints
      });
      
      return true;
    } catch (error) {
      console.error('❌ [SAVE] Erreur inattendue:', error);
      return false;
    } finally {
      setSyncing(false);
    }
  };

  // Fonction pour obtenir la progression actuelle
  const getCurrentProgress = async () => {
    if (!user) return null;

    try {
      const { data, error } = await supabase.rpc('get_user_progress');
      
      if (error) {
        console.error('❌ [PROGRESS] Erreur RPC:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('❌ [PROGRESS] Erreur inattendue:', error);
      return null;
    }
  };

  return {
    saveScore,
    loadProgress,
    getCurrentProgress,
    syncing
  };
};
