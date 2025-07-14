
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { toast } from "sonner";
import { useQuizState } from "@/hooks/useQuizState";
import { useQuizData } from "@/hooks/useQuizData";
import { useQuizActions } from "@/hooks/useQuizActions";

export const useQuiz = () => {
  const { user } = useAuth();
  const { syncing } = useSupabaseProgress();
  
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    activeTab,
    setActiveTab,
    scores,
    setScores,
    questionsCompleted,
    setQuestionsCompleted,
    selectedTheme,
    setSelectedTheme,
    selectedType,
    setSelectedType,
    searchQuery,
    setSearchQuery,
    userProgress,
    setUserProgress,
    isProcessingAnswer,
    setIsProcessingAnswer
  } = useQuizState();

  const {
    filteredQuestions,
    searchResults,
    themes,
    questionsLoading,
    questionsError
  } = useQuizData({ 
    selectedTheme, 
    selectedType, 
    searchQuery, 
    isProcessingAnswer // Passer l'état pour empêcher les changements pendant le traitement
  });

  const {
    handleNext,
    handleScore,
    startQuiz
  } = useQuizActions({
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
  });

  // Afficher les erreurs de chargement des questions
  useEffect(() => {
    if (questionsError) {
      toast.error(`Erreur lors du chargement des questions: ${questionsError}`);
    }
  }, [questionsError]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isMultiStep = currentQuestion?.type === "multistep";

  // Reset current question index when filtered questions change - SEULEMENT si on ne traite pas une réponse ET si on a pas de question courante
  useEffect(() => {
    if (!isProcessingAnswer && filteredQuestions.length > 0 && !currentQuestion) {
      setCurrentQuestionIndex(0);
      console.log("🔄 [QUIZ] Reset index question à 0 (pas de question courante)");
    }
  }, [filteredQuestions.length, isProcessingAnswer, setCurrentQuestionIndex, currentQuestion]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: any) => {
    setSelectedTheme(theme);
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  return {
    filteredQuestions,
    currentQuestionIndex,
    currentQuestion,
    isMultiStep,
    activeTab,
    setActiveTab,
    selectedTheme,
    selectedType,
    questionsCompleted,
    scores,
    searchQuery,
    searchResults,
    syncing,
    questionsLoading,
    questionsError,
    themes,
    userProgress,
    isProcessingAnswer,
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
