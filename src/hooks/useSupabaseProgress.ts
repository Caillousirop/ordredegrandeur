
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { QuizScore } from "@/components/types";
import { useAuth } from "@/hooks/useAuth";

export const useSupabaseProgress = () => {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  const saveScore = useCallback(async (score: QuizScore): Promise<boolean> => {
    if (!user) {
      console.log("❌ [SAVE] Utilisateur non connecté");
      return false;
    }

    console.log("💾 [SAVE] Début sauvegarde du score:", score);
    setSyncing(true);

    try {
      // Vérifier d'abord si un score existe déjà pour cette question
      const { data: existingScore, error: checkError } = await supabase
        .from('user_quiz_scores')
        .select('id')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      if (checkError) {
        console.error("❌ [SAVE] Erreur vérification score existant:", checkError);
        return false;
      }

      if (existingScore) {
        console.log("🔄 [SAVE] Mise à jour d'un score existant");
        // Mettre à jour le score existant
        const { error: updateError } = await supabase
          .from('user_quiz_scores')
          .update({
            accuracy: score.accuracy,
            is_multi_step: score.isMultiStep || false,
            direct_final_answer: score.directFinalAnswer || false,
            skipped_steps: score.skippedSteps || false,
            used_hints: score.usedHints || false,
            hints_revealed_count: score.hintsRevealedCount || 0
          })
          .eq('id', existingScore.id);

        if (updateError) {
          console.error("❌ [SAVE] Erreur mise à jour score:", updateError);
          return false;
        }
      } else {
        console.log("➕ [SAVE] Insertion d'un nouveau score");
        
        // Insérer un nouveau score avec tous les champs requis
        const { error: insertError } = await supabase
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
          });

        if (insertError) {
          console.error("❌ [SAVE] Erreur sauvegarde score:", insertError);
          return false;
        }
      }

      console.log("✅ [SAVE] Score sauvegardé avec succès");
      return true;

    } catch (error) {
      console.error("❌ [SAVE] Erreur inattendue:", error);
      return false;
    } finally {
      setSyncing(false);
    }
  }, [user]);

  const getCurrentProgress = useCallback(async () => {
    if (!user) return null;

    try {
      const { data, error } = await supabase.rpc('get_user_progress');
      
      if (error) {
        console.error("❌ [PROGRESS] Erreur chargement progression:", error);
        return null;
      }

      return data;
    } catch (error) {
      console.error("❌ [PROGRESS] Erreur inattendue:", error);
      return null;
    }
  }, [user]);

  return {
    saveScore,
    getCurrentProgress,
    syncing
  };
};
