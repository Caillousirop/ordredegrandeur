
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { QuizScore } from "@/components/types";

export const useSupabaseProgress = () => {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  // Sauvegarder un score dans Supabase
  const saveScore = async (score: QuizScore) => {
    if (!user) return;

    try {
      console.log("Sauvegarde du score dans Supabase:", score);
      
      // D'abord, vérifier si ce score existe déjà
      const { data: existingScore, error: checkError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      if (checkError) {
        console.error('Erreur lors de la vérification du score existant:', checkError);
      }

      if (existingScore) {
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
          .eq('user_id', user.id)
          .eq('question_id', score.questionId);

        if (updateError) {
          console.error('Erreur lors de la mise à jour du score:', updateError);
        } else {
          console.log('Score mis à jour avec succès');
        }
      } else {
        // Insérer un nouveau score
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
          console.error('Erreur lors de l\'insertion du score:', insertError);
        } else {
          console.log('Nouveau score inséré avec succès');
        }
      }

      // La progression sera automatiquement mise à jour par le trigger update_user_progress()
      console.log('Score traité, la progression devrait être mise à jour automatiquement');
      
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  // Charger la progression depuis Supabase
  const loadProgress = async () => {
    if (!user) return null;

    try {
      setSyncing(true);
      console.log("Chargement de la progression depuis Supabase pour l'utilisateur:", user.id);
      
      // Charger la progression globale
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError) {
        console.error('Erreur lors du chargement de la progression:', progressError);
      } else {
        console.log('Progression chargée:', progress);
      }

      // Charger tous les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('Erreur lors du chargement des scores:', scoresError);
      } else {
        console.log('Scores chargés:', scores?.length || 0);
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
      
      console.log('Données complètes chargées:', result);
      return result;
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
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
