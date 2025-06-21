
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
      console.log("❌ [SAVE] Utilisateur non connecté, impossible de sauvegarder");
      return false;
    }

    try {
      console.log("💾 [SAVE] Début de la sauvegarde du score:", score);
      console.log("👤 [SAVE] User ID:", user.id);
      setSyncing(true);
      
      // Préparer les données pour l'insertion - simplifiées
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

      console.log("📝 [SAVE] Données préparées pour insertion:", scoreData);

      // Insérer directement sans vérifier l'existence (on gère les conflits avec upsert)
      const { data, error } = await supabase
        .from('user_quiz_scores')
        .upsert(scoreData, { 
          onConflict: 'user_id,question_id',
          ignoreDuplicates: false 
        })
        .select();

      if (error) {
        console.error('❌ [SAVE] Erreur lors de la sauvegarde:', error);
        console.error('❌ [SAVE] Détails erreur:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        return false;
      }

      console.log('✅ [SAVE] Score sauvegardé avec succès:', data);
      
      // Attendre que le trigger de progression s'exécute
      console.log('⏱️ [SAVE] Attente de la mise à jour de la progression...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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

      if (progressError) {
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
        console.log('📋 [LOAD] Scores trouvés:', scores?.length || 0, scores);
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

  // Test de connexion à la base
  const testConnection = async () => {
    if (!user) return { error: "Pas d'utilisateur connecté" };
    
    try {
      console.log("🔍 [TEST] Test de la connexion Supabase...");
      
      // Test de lecture sur user_quiz_scores
      const { data: testScores, error: testError } = await supabase
        .from('user_quiz_scores')
        .select('count')
        .eq('user_id', user.id);

      if (testError) {
        console.error("❌ [TEST] Erreur test lecture:", testError);
        return { error: testError.message };
      }

      console.log("✅ [TEST] Lecture OK");

      // Test d'insertion simple
      const testScore = {
        user_id: user.id,
        question_id: `test-${Date.now()}`,
        accuracy: 100,
        is_multi_step: false,
        direct_final_answer: false,
        skipped_steps: false,
        used_hints: false,
        hints_revealed_count: 0
      };

      const { data: insertData, error: insertError } = await supabase
        .from('user_quiz_scores')
        .insert(testScore)
        .select();

      if (insertError) {
        console.error("❌ [TEST] Erreur test insertion:", insertError);
        return { error: insertError.message };
      }

      console.log("✅ [TEST] Insertion OK:", insertData);

      // Nettoyer le test
      await supabase
        .from('user_quiz_scores')
        .delete()
        .eq('question_id', testScore.question_id);

      return { success: true };
    } catch (error) {
      console.error("❌ [TEST] Erreur générale:", error);
      return { error: error.message };
    }
  };

  return {
    saveScore,
    loadProgress,
    testConnection,
    syncing
  };
};
