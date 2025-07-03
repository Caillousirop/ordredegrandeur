
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
        console.log("🔄 [QUIZ] Synchronisation ID question courante:", currentQuestion.id);
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
      console.log("🚀 [QUIZ] Démarrage du quiz avec", filteredQuestions.length, "questions disponibles");
      baseStartQuiz();
    } else {
      toast.error("Veuillez sélectionner un thème et un type de question");
    }
  };

  // S'assurer qu'on n'affiche qu'UNE SEULE question à la fois
  const currentQuestion = filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length 
    ? filteredQuestions[currentQuestionIndex] 
    : undefined;
    
  const isMultiStep = currentQuestion?.type === "multistep";

  // Log pour le débogage - mais seulement si on a une question
  useEffect(() => {
    if (currentQuestion) {
      console.log("🎯 [QUIZ] Question courante unique:", {
        index: currentQuestionIndex,
        id: currentQuestion.id,
        question: currentQuestion.question.substring(0, 50) + "...",
        currentQuestionId,
        totalFiltered: filteredQuestions.length
      });
    }
  }, [currentQuestion, currentQuestionIndex, currentQuestionId, filteredQuestions.length]);

  return {
    filteredQuestions,
    currentQuestionIndex,
    currentQuestion, // Une seule question
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
