
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { QuizScore } from "@/components/types";

export const useSupabaseProgress = () => {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  // Sauvegarder un score dans Supabase
  const saveScore = async (score: QuizScore) => {
    if (!user) {
      console.log("❌ [SAVE] Utilisateur non connecté");
      return false;
    }

    try {
      console.log("💾 [SAVE] Début sauvegarde du score:", score);
      console.log("🔑 [SAVE] User ID:", user.id);
      setSyncing(true);
      
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

      console.log("📝 [SAVE] Données à sauvegarder:", scoreData);

      // Test de connexion à Supabase
      const { data: testData, error: testError } = await supabase
        .from('user_quiz_scores')
        .select('count')
        .limit(1);
        
      if (testError) {
        console.error('❌ [SAVE] Erreur de connexion Supabase:', testError);
        return false;
      }
      
      console.log('✅ [SAVE] Connexion Supabase OK');

      // Vérifier si un score existe déjà pour cette question
      const { data: existingScore, error: checkError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .eq('question_id', score.questionId)
        .maybeSingle();

      if (checkError) {
        console.error('❌ [SAVE] Erreur vérification score existant:', checkError);
        return false;
      }

      console.log('🔍 [SAVE] Score existant:', existingScore);

      let saveResult;
      if (existingScore) {
        // Mettre à jour le score existant
        const { data, error } = await supabase
          .from('user_quiz_scores')
          .update(scoreData)
          .eq('user_id', user.id)
          .eq('question_id', score.questionId)
          .select();
        
        saveResult = { data, error };
        console.log('🔄 [SAVE] Mise à jour du score existant');
      } else {
        // Insérer un nouveau score
        const { data, error } = await supabase
          .from('user_quiz_scores')
          .insert(scoreData)
          .select();
          
        saveResult = { data, error };
        console.log('➕ [SAVE] Insertion nouveau score');
      }

      if (saveResult.error) {
        console.error('❌ [SAVE] Erreur sauvegarde score:', saveResult.error);
        console.error('❌ [SAVE] Détails erreur:', {
          message: saveResult.error.message,
          details: saveResult.error.details,
          hint: saveResult.error.hint,
          code: saveResult.error.code
        });
        return false;
      }

      console.log('✅ [SAVE] Score sauvegardé avec succès:', saveResult.data);
      
      // Attendre que le trigger s'exécute
      console.log('⏳ [SAVE] Attente exécution du trigger...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Vérifier que la progression a été mise à jour
      const { data: progressCheck, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (progressError) {
        console.error('❌ [SAVE] Erreur vérification progression:', progressError);
      } else {
        console.log('📊 [SAVE] Progression après trigger:', progressCheck);
        if (!progressCheck) {
          console.warn('⚠️ [SAVE] Aucune progression trouvée après trigger - le trigger ne s\'est peut-être pas exécuté');
        }
      }
      
      return true;
    } catch (error) {
      console.error('❌ [SAVE] Erreur inattendue:', error);
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
      console.log("📥 [LOAD] Chargement progression pour:", user.id);
      
      // Charger la progression avec logs détaillés
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      console.log("🔍 [LOAD] Requête progression terminée");
      console.log("📊 [LOAD] Données progression:", progress);
      console.log("❓ [LOAD] Erreur progression:", progressError);

      if (progressError && progressError.code !== 'PGRST116') {
        console.error('❌ [LOAD] Erreur progression:', progressError);
        return null;
      }

      // Charger les scores avec logs détaillés
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      console.log("🔍 [LOAD] Requête scores terminée");
      console.log("📋 [LOAD] Données scores:", scores);
      console.log("❓ [LOAD] Erreur scores:", scoresError);

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

      console.log("✅ [LOAD] Données transformées:", {
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

  return {
    saveScore,
    loadProgress,
    syncing
  };
};
