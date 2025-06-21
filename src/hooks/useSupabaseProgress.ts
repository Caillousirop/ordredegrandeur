
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
      console.log("💾 [SAVE] Début de la sauvegarde du score:", score);
      setSyncing(true);
      
      // Préparer les données pour l'insertion
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

      console.log("📝 [SAVE] Données préparées:", scoreData);

      // D'abord vérifier si un score existe déjà
      const { data: existingScore, error: checkError } = await supabase
        .from('user_quiz_scores')
        .select('id')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      if (checkError) {
        console.error("❌ [SAVE] Erreur lors de la vérification:", checkError);
        throw checkError;
      }

      let result;
      
      if (existingScore) {
        // Mettre à jour le score existant
        console.log("🔄 [SAVE] Mise à jour du score existant, ID:", existingScore.id);
        result = await supabase
          .from('user_quiz_scores')
          .update(scoreData)
          .eq('id', existingScore.id)
          .select();
      } else {
        // Insérer un nouveau score
        console.log("➕ [SAVE] Insertion d'un nouveau score");
        result = await supabase
          .from('user_quiz_scores')
          .insert(scoreData)
          .select();
      }

      if (result.error) {
        console.error('❌ [SAVE] Erreur lors de la sauvegarde:', result.error);
        throw result.error;
      }

      console.log('✅ [SAVE] Score sauvegardé avec succès:', result.data);
      
      // Attendre que le trigger de progression s'exécute
      console.log('⏱️ [SAVE] Attente de la mise à jour de la progression...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return true;
    } catch (error) {
      console.error('❌ [SAVE] Erreur lors de la sauvegarde:', error);
      return false;
    } finally {
      setSyncing(false);
    }
  };

  // Charger la progression depuis Supabase
  const loadProgress = async () => {
    if (!user) {
      console.log("❌ [LOAD] Utilisateur non connecté");
      return null;
    }

    try {
      setSyncing(true);
      console.log("📥 [LOAD] Chargement de la progression pour:", user.id);
      
      // Charger la progression globale
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError && progressError.code !== 'PGRST116') {
        console.error('❌ [LOAD] Erreur progression:', progressError);
      } else {
        console.log('📊 [LOAD] Progression trouvée:', progress);
      }

      // Charger tous les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('❌ [LOAD] Erreur scores:', scoresError);
      } else {
        console.log('📋 [LOAD] Scores trouvés:', scores?.length || 0);
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
      
      console.log('📦 [LOAD] Données finales:', result);
      return result;
    } catch (error) {
      console.error('❌ [LOAD] Erreur lors du chargement:', error);
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
