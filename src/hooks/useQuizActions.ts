
import { useCallback } from "react";
import { QuizScore, QuizTheme } from "@/components/types";
import { toast } from "sonner";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { useQuizProgressContext } from "@/contexts/QuizProgressContext";
import { getFeedbackMessage } from "@/utils/feedbackMessages";

interface UseQuizActionsProps {
  scores: QuizScore[];
  setScores: (scores: QuizScore[]) => void;
  questionsCompleted: number;
  setQuestionsCompleted: (count: number) => void;
  setUserProgress: (progress: any) => void;
  setIsProcessingAnswer: (processing: boolean) => void;
  filteredQuestions: any[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  selectedTheme: QuizTheme | null;
  setActiveTab: (tab: string) => void;
}

export const useQuizActions = ({
  scores,
  setScores,
  questionsCompleted,
  setQuestionsCompleted,
  setUserProgress,
  setIsProcessingAnswer,
  filteredQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedTheme,
  setActiveTab
}: UseQuizActionsProps) => {
  const { saveScore, getCurrentProgress } = useSupabaseProgress();
  const { updateQuizProgress } = useQuizProgressContext();

  const handleSearch = useCallback((query: string) => {
    // This will be handled by the parent component
  }, []);

  const handleThemeSelect = useCallback((theme: QuizTheme) => {
    // This will be handled by the parent component
  }, []);

  const handleTypeSelect = useCallback((type: "simple" | "multistep" | "all") => {
    // This will be handled by the parent component
  }, []);

  const handleNext = useCallback(() => {
    if (filteredQuestions.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * filteredQuestions.length);
      } while (newIndex === currentQuestionIndex);
      setCurrentQuestionIndex(newIndex);
    } else if (filteredQuestions.length === 1) {
      setCurrentQuestionIndex(0);
    }
  }, [filteredQuestions, currentQuestionIndex, setCurrentQuestionIndex]);
  
  const handleScore = useCallback(async (score: QuizScore) => {
    console.log("🎯 [QUIZ] Nouveau score reçu:", score);
    
    // Empêcher les changements automatiques de question pendant le traitement
    setIsProcessingAnswer(true);
    
    // Mettre à jour immédiatement les données locales
    const newScores = [...scores];
    const existingIndex = newScores.findIndex(s => s.questionId === score.questionId);
    if (existingIndex >= 0) {
      newScores[existingIndex] = score;
    } else {
      newScores.push(score);
    }
    setScores(newScores);

    // Incrémenter le compteur local immédiatement
    const newQuestionsCompleted = questionsCompleted + 1;
    setQuestionsCompleted(newQuestionsCompleted);
    
    // Mettre à jour le contexte partagé
    await updateQuizProgress({
      scores: newScores,
      questionsCompleted: newQuestionsCompleted,
      lastUpdated: new Date().toISOString()
    });
    
    // Sauvegarder dans Supabase si connecté
    const success = await saveScore(score);
    
    if (success) {
      console.log("✅ [QUIZ] Score sauvegardé avec succès");
      toast.success("Score sauvegardé !");
      
      // Recharger la progression mise à jour
      try {
        const updatedProgress = await getCurrentProgress();
        if (updatedProgress) {
          setUserProgress(updatedProgress);
          setQuestionsCompleted(updatedProgress.questions_completed || 0);
          
          // Mettre à jour le contexte avec les nouvelles données
          await updateQuizProgress({
            userProgress: updatedProgress,
            questionsCompleted: updatedProgress.questions_completed || 0,
            lastUpdated: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error("❌ [QUIZ] Erreur lors du rechargement de la progression:", error);
      }
    } else {
      console.error("❌ [QUIZ] Échec sauvegarde");
      toast.error("Erreur lors de la sauvegarde");
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

    // Réactiver les changements automatiques après traitement
    setIsProcessingAnswer(false);
  }, [scores, setScores, questionsCompleted, setQuestionsCompleted, setIsProcessingAnswer, setUserProgress, saveScore, getCurrentProgress, updateQuizProgress]);

  const startQuiz = useCallback(() => {
    if (filteredQuestions.length > 0) {
      if (selectedTheme?.id === "challenge-30s") {
        setActiveTab("challenge-30s");
      } else {
        setActiveTab("questions");
      }
    } else {
      toast.error("Veuillez sélectionner un thème et un type de question");
    }
  }, [filteredQuestions, selectedTheme, setActiveTab]);

  return {
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
