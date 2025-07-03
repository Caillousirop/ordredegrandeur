
import { useCallback, useEffect } from "react";
import { QuizScore } from "@/components/types";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { getFeedbackMessage } from "@/utils/feedbackMessages";

interface UseQuizProgressProps {
  scores: QuizScore[];
  setScores: React.Dispatch<React.SetStateAction<QuizScore[]>>;
  questionsCompleted: number;
  setQuestionsCompleted: React.Dispatch<React.SetStateAction<number>>;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

export const useQuizProgress = ({
  scores,
  setScores,
  questionsCompleted,
  setQuestionsCompleted,
  isLoaded,
  setIsLoaded
}: UseQuizProgressProps) => {
  const { user } = useAuth();
  const { saveScore, loadProgress } = useSupabaseProgress();

  // Fonction stable pour charger les données
  const loadUserData = useCallback(async () => {
    if (!user || isLoaded) return;
    
    console.log("🔄 [QUIZ] Initialisation des données utilisateur...");
    try {
      const data = await loadProgress();
      
      if (data?.progress) {
        console.log("✅ [QUIZ] Progression chargée:", data.progress);
        setQuestionsCompleted(data.progress.questions_completed || 0);
      }
      
      if (data?.scores && data.scores.length > 0) {
        console.log("✅ [QUIZ] Scores chargés:", data.scores.length);
        setScores(data.scores);
      }
    } catch (error) {
      console.error("❌ [QUIZ] Erreur lors du chargement:", error);
    } finally {
      setIsLoaded(true);
    }
  }, [user, loadProgress, isLoaded, setQuestionsCompleted, setScores, setIsLoaded]);

  // Charger les données depuis Supabase au démarrage UNIQUEMENT
  useEffect(() => {
    if (user && !isLoaded) {
      loadUserData();
    } else if (!user && !isLoaded) {
      setIsLoaded(true);
    }
  }, [user, isLoaded, loadUserData, setIsLoaded]);

  const handleScore = async (score: QuizScore) => {
    console.log("🎯 [QUIZ] Nouveau score reçu:", score);
    
    // Mettre à jour immédiatement les données locales
    setScores(prevScores => {
      const existingIndex = prevScores.findIndex(s => s.questionId === score.questionId);
      if (existingIndex >= 0) {
        const newScores = [...prevScores];
        newScores[existingIndex] = score;
        return newScores;
      }
      return [...prevScores, score];
    });

    // Incrémenter le compteur local immédiatement
    setQuestionsCompleted(prev => prev + 1);
    
    // Sauvegarder dans Supabase si connecté
    if (user) {
      console.log("💾 [QUIZ] Sauvegarde dans Supabase...");
      const success = await saveScore(score);
      
      if (success) {
        console.log("✅ [QUIZ] Score sauvegardé avec succès");
        toast.success("Score sauvegardé !");
      } else {
        console.error("❌ [QUIZ] Échec sauvegarde");
        toast.error("Erreur lors de la sauvegarde");
      }
    }
    
    // Afficher le toast de feedback
    let displayAccuracy = score.accuracy;
    
    if (score.usedHints && score.hintsRevealedCount === 3) {
      displayAccuracy = 0;
    } else if (score.usedHints && score.hintsRevealedCount) {
      displayAccuracy = Math.max(0, score.accuracy - (score.hintsRevealedCount * 20));
    }
    
    const feedback = getFeedbackMessage(displayAccuracy);
    
    if (feedback.type === 'success') {
      toast.success(feedback.message);
    } else if (feedback.type === 'info') {
      toast.info(feedback.message);
    } else {
      toast.error(feedback.message);
    }
  };

  return {
    handleScore
  };
};
