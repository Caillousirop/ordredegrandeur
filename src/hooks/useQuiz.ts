
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
  } = useQuizData({ selectedTheme, selectedType, searchQuery });

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

  // Reset current question index when filtered questions change - SAUF si on traite une réponse
  useEffect(() => {
    if (!isProcessingAnswer) {
      setCurrentQuestionIndex(0);
    }
  }, [filteredQuestions, isProcessingAnswer, setCurrentQuestionIndex]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: any) => {
    setSelectedTheme(theme);
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isMultiStep = currentQuestion?.type === "multistep";

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
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
