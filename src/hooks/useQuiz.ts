
import { useState, useEffect, useCallback, useMemo } from "react";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { useSupabaseQuestions } from "@/hooks/useSupabaseQuestions";
import { useQuizProgressContext } from "@/contexts/QuizProgressContext";
import { getFeedbackMessage } from "@/utils/feedbackMessages";

export const useQuiz = () => {
  const { user } = useAuth();
  const { saveScore, getCurrentProgress, syncing } = useSupabaseProgress();
  const { questions: supabaseQuestions, themes: supabaseThemes, loading: questionsLoading, error: questionsError } = useSupabaseQuestions();
  const { quizProgress, updateQuizProgress } = useQuizProgressContext();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userProgress, setUserProgress] = useState<any>(null);
  
  // États pour éviter les re-initialisations
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Afficher les erreurs de chargement des questions
  useEffect(() => {
    if (questionsError) {
      toast.error(`Erreur lors du chargement des questions: ${questionsError}`);
    }
  }, [questionsError]);

  // Charger les données depuis le contexte partagé
  useEffect(() => {
    if (user && quizProgress && !isDataLoaded) {
      console.log("🔄 [QUIZ] Chargement des données depuis le contexte partagé...");
      
      if (quizProgress.scores) {
        setScores(quizProgress.scores);
      }
      
      if (quizProgress.questionsCompleted) {
        setQuestionsCompleted(quizProgress.questionsCompleted);
      }
      
      if (quizProgress.userProgress) {
        setUserProgress(quizProgress.userProgress);
      }
      
      setIsDataLoaded(true);
      console.log("✅ [QUIZ] Données chargées depuis le contexte");
    } else if (!user && !isDataLoaded) {
      setIsDataLoaded(true);
    }
  }, [user, quizProgress, isDataLoaded]);

  // Filtrer les questions basé sur le thème et type sélectionnés
  const filteredQuestions = useMemo(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      return [];
    }

    let filtered = [...supabaseQuestions];
    
    // Filter by theme if selected
    if (selectedTheme && selectedTheme.id !== "random" && selectedTheme.id !== "challenge-30s") {
      filtered = filtered.filter(q => q.theme.toLowerCase() === selectedTheme.id.toLowerCase());
    }
    
    // Special handling for challenge-30s theme
    if (selectedTheme && selectedTheme.id === "challenge-30s") {
      filtered = filtered.filter(q => q.type === "simple");
    }
    
    // Filter by question type if selected (except for challenge-30s which is already filtered to simple)
    if (selectedType !== "all" && selectedTheme?.id !== "challenge-30s") {
      filtered = filtered.filter(q => q.type === selectedType);
    }
    
    // For random theme, just shuffle the questions
    if (selectedTheme && selectedTheme.id === "random") {
      filtered = filtered.sort(() => Math.random() - 0.5);
    }
    
    return filtered;
  }, [selectedTheme, selectedType, supabaseQuestions]);

  // Handle search separately with proper accent handling
  const searchResults = useMemo(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      return [];
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      return supabaseQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerCaseQuery)
      );
    } else {
      return [];
    }
  }, [searchQuery, supabaseQuestions]);

  // Reset current question index when filtered questions change
  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [filteredQuestions]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: QuizTheme) => {
    setSelectedTheme(theme);
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  const handleNext = () => {
    if (filteredQuestions.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * filteredQuestions.length);
      } while (newIndex === currentQuestionIndex);
      setCurrentQuestionIndex(newIndex);
    } else if (filteredQuestions.length === 1) {
      setCurrentQuestionIndex(0);
    }
  };
  
  const handleScore = async (score: QuizScore) => {
    console.log("🎯 [QUIZ] Nouveau score reçu:", score);
    
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
    if (user) {
      console.log("💾 [QUIZ] Sauvegarde dans Supabase...");
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

  const startQuiz = () => {
    if (filteredQuestions.length > 0) {
      if (selectedTheme?.id === "challenge-30s") {
        setActiveTab("challenge-30s");
      } else {
        setActiveTab("questions");
      }
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
    userProgress,
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
