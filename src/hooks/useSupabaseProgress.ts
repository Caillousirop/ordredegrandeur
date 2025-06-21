
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
      const { data: existingScore, error: checkError } = await supabase
        .from('user_quiz_scores')
        .select('id')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      if (checkError) {
        console.error("❌ Erreur lors de la vérification:", checkError);
        throw checkError;
      }

      // Préparer les données exactement selon le schéma de la table
      const scoreData = {
        user_id: user.id,
        question_id: score.questionId,
        accuracy: score.accuracy,
        is_multi_step: score.isMultiStep || false,
        direct_final_answer: score.directFinalAnswer || false,
        skipped_steps: score.skippedSteps || false,
        used_hints: score.usedHints || false,
        hints_revealed_count: score.hintsRevealedCount || 0
      };

      console.log("📝 Données préparées:", scoreData);

      let result;
      
      if (existingScore) {
        // Mettre à jour le score existant
        console.log("🔄 Mise à jour du score existant");
        result = await supabase
          .from('user_quiz_scores')
          .update({
            accuracy: scoreData.accuracy,
            is_multi_step: scoreData.is_multi_step,
            direct_final_answer: scoreData.direct_final_answer,
            skipped_steps: scoreData.skipped_steps,
            used_hints: scoreData.used_hints,
            hints_revealed_count: scoreData.hints_revealed_count
          })
          .eq('id', existingScore.id)
          .select();
      } else {
        // Insérer un nouveau score
        console.log("➕ Insertion d'un nouveau score");
        result = await supabase
          .from('user_quiz_scores')
          .insert([scoreData])
          .select();
      }

      if (result.error) {
        console.error('❌ Erreur lors de la sauvegarde:', result.error);
        throw result.error;
      }

      console.log('✅ Score sauvegardé avec succès:', result.data);
      
      // Attendre un peu pour que le trigger de progression s'exécute
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
      return false;
    } finally {
      setSyncing(false);
    }
  };

  // Charger la progression depuis Supabase
  const loadProgress = async () => {
    if (!user) {
      console.log("❌ Utilisateur non connecté");
      return null;
    }

    try {
      setSyncing(true);
      console.log("📥 Chargement de la progression");
      
      // Charger la progression globale
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError) {
        console.error('❌ Erreur progression:', progressError);
      }

      // Charger tous les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('❌ Erreur scores:', scoresError);
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
      
      console.log('📦 Données chargées:', result);
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
