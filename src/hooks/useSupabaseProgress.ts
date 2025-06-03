
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
      const { error } = await supabase
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

      if (error) {
        console.error('Erreur lors de la sauvegarde du score:', error);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  // Charger la progression depuis Supabase
  const loadProgress = async () => {
    if (!user) return null;

    try {
      setSyncing(true);
      
      // Charger la progression globale
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (progressError && progressError.code !== 'PGRST116') {
        console.error('Erreur lors du chargement de la progression:', progressError);
        return null;
      }

      // Charger tous les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (scoresError) {
        console.error('Erreur lors du chargement des scores:', scoresError);
        return null;
      }

      return {
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
