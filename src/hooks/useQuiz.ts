
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
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    startQuiz: baseStartQuiz
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
    setIsLoaded
  });

  // Use the question filtering hook
  useQuestionFiltering({
    supabaseQuestions,
    selectedTheme,
    selectedType,
    user,
    scores,
    setFilteredQuestions,
    setCurrentQuestionIndex
  });

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
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
