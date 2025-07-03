
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { useSupabaseQuestions } from "@/hooks/useSupabaseQuestions";
import { useQuizState } from "@/hooks/useQuizState";
import { useQuestionFiltering } from "@/hooks/useQuestionFiltering";
import { useQuizSearch } from "@/hooks/useQuizSearch";
import { useQuizProgress } from "@/hooks/useQuizProgress";

export const useQuiz = () => {
  const { user } = useAuth();
  const { syncing } = useSupabaseProgress();
  const { questions: supabaseQuestions, themes: supabaseThemes, loading: questionsLoading, error: questionsError } = useSupabaseQuestions();
  
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    filteredQuestions,
    setFilteredQuestions,
    activeTab,
    setActiveTab,
    scores,
    setScores,
    questionsCompleted,
    setQuestionsCompleted,
    selectedTheme,
    selectedType,
    isLoaded,
    setIsLoaded,
    currentQuestionId,
    setCurrentQuestionId,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    startQuiz: baseStartQuiz,
    syncCurrentQuestionId
  } = useQuizState();

  const { searchQuery, searchResults, handleSearch } = useQuizSearch({ 
    supabaseQuestions 
  });

  const { handleScore } = useQuizProgress({
    scores,
    setScores,
    questionsCompleted,
    setQuestionsCompleted,
    isLoaded,
    setIsLoaded,
    currentQuestionId
  });

  // Use the question filtering hook
  useQuestionFiltering({
    supabaseQuestions,
    selectedTheme,
    selectedType,
    user,
    scores,
    setFilteredQuestions,
    setCurrentQuestionIndex,
    setCurrentQuestionId,
    syncCurrentQuestionId
  });

  // Synchroniser l'ID de la question courante à chaque changement d'index
  useEffect(() => {
    if (filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length) {
      const currentQuestion = filteredQuestions[currentQuestionIndex];
      if (currentQuestion && currentQuestion.id !== currentQuestionId) {
        console.log("🔄 [QUIZ] Mise à jour de l'ID de question courante:", currentQuestion.id);
        setCurrentQuestionId(currentQuestion.id);
      }
    }
  }, [currentQuestionIndex, filteredQuestions, currentQuestionId, setCurrentQuestionId]);

  // Afficher les erreurs de chargement des questions
  useEffect(() => {
    if (questionsError) {
      toast.error(`Erreur lors du chargement des questions: ${questionsError}`);
    }
  }, [questionsError]);

  const startQuiz = () => {
    if (filteredQuestions.length > 0) {
      baseStartQuiz();
    } else {
      toast.error("Veuillez sélectionner un thème et un type de question");
    }
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isMultiStep = currentQuestion?.type === "multistep";

  // Log pour le débogage
  useEffect(() => {
    if (currentQuestion) {
      console.log("🎯 [QUIZ] Question courante:", {
        index: currentQuestionIndex,
        id: currentQuestion.id,
        question: currentQuestion.question.substring(0, 50) + "...",
        currentQuestionId
      });
    }
  }, [currentQuestion, currentQuestionIndex, currentQuestionId]);

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
    themes: supabaseThemes,
    currentQuestionId,
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
