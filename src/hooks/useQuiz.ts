
import { useState, useEffect, useCallback, useMemo } from "react";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { useSupabaseQuestions } from "@/hooks/useSupabaseQuestions";
import { getFeedbackMessage } from "@/utils/feedbackMessages";

export const useQuiz = () => {
  const { user } = useAuth();
  const { saveScore, loadProgress, getCurrentProgress, syncing } = useSupabaseProgress();
  const { questions: supabaseQuestions, themes: supabaseThemes, loading: questionsLoading, error: questionsError } = useSupabaseQuestions();
  
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

  // Fonction stable pour charger les données UNIQUEMENT au démarrage
  const initializeUserData = useCallback(async () => {
    if (!user || isDataLoaded) return;
    
    console.log("🔄 [QUIZ] Initialisation unique des données utilisateur...");
    try {
      const data = await loadProgress();
      
      if (data?.progress) {
        console.log("✅ [QUIZ] Progression chargée:", data.progress);
        setUserProgress(data.progress);
        setQuestionsCompleted(data.progress.questions_completed || 0);
      }
      
      if (data?.scores && data.scores.length > 0) {
        console.log("✅ [QUIZ] Scores chargés:", data.scores.length);
        setScores(data.scores);
      }
    } catch (error) {
      console.error("❌ [QUIZ] Erreur lors du chargement:", error);
    } finally {
      setIsDataLoaded(true);
    }
  }, [user, loadProgress, isDataLoaded]);

  // Charger les données UNIQUEMENT au démarrage
  useEffect(() => {
    if (user && !isDataLoaded) {
      initializeUserData();
    } else if (!user && !isDataLoaded) {
      setIsDataLoaded(true);
    }
  }, [user, isDataLoaded, initializeUserData]);

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
        
        // Recharger la progression mise à jour
        try {
          const updatedProgress = await getCurrentProgress();
          if (updatedProgress) {
            setUserProgress(updatedProgress);
            setQuestionsCompleted(updatedProgress.questions_completed || 0);
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
