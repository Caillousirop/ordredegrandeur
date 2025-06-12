
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
      
      // Insérer ou mettre à jour le score directement
      const { data, error } = await supabase
        .from('user_quiz_scores')
        .upsert({
          user_id: user.id,
          question_id: score.questionId,
          accuracy: score.accuracy,
          is_multi_step: score.isMultiStep || false,
          direct_final_answer: score.directFinalAnswer || false,
          skipped_steps: score.skippedSteps || false,
          used_hints: score.usedHints || false,
          hints_revealed_count: score.hintsRevealedCount || 0
        }, {
          onConflict: 'user_id,question_id'
        })
        .select();

      if (error) {
        console.error('❌ Erreur lors de la sauvegarde du score:', error);
        throw error;
      }

      console.log('✅ Score sauvegardé avec succès:', data);
      
      // Attendre un peu pour que le trigger se déclenche
      await new Promise(resolve => setTimeout(resolve, 500));
      
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
