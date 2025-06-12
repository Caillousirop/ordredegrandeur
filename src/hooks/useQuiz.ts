import { useState, useEffect } from "react";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { useSupabaseQuestions } from "@/hooks/useSupabaseQuestions";
import { getFeedbackMessage } from "@/utils/feedbackMessages";

export const useQuiz = () => {
  const { user } = useAuth();
  const { saveScore, loadProgress, syncing } = useSupabaseProgress();
  const { questions: supabaseQuestions, themes: supabaseThemes, loading: questionsLoading, error: questionsError } = useSupabaseQuestions();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<(Question | MultiStepQuestion)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Afficher les erreurs de chargement des questions
  useEffect(() => {
    if (questionsError) {
      toast.error(`Erreur lors du chargement des questions: ${questionsError}`);
    }
  }, [questionsError]);

  // Charger les données depuis Supabase au démarrage
  useEffect(() => {
    const initializeData = async () => {
      if (user && !isLoaded) {
        console.log("Chargement des données depuis Supabase...");
        const data = await loadProgress();
        
        if (data?.progress) {
          setQuestionsCompleted(data.progress.questions_completed);
          console.log("Progression chargée:", data.progress);
        }
        
        if (data?.scores && data.scores.length > 0) {
          setScores(data.scores);
          console.log("Scores chargés:", data.scores.length);
        }
        
        setIsLoaded(true);
      } else if (!user) {
        setIsLoaded(true);
      }
    };

    initializeData();
  }, [user, loadProgress, isLoaded]);

  // Filter questions based on theme and type (not search)
  useEffect(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      console.log("Aucune question disponible depuis Supabase");
      setFilteredQuestions([]);
      return;
    }

    console.log("Filtering with theme:", selectedTheme?.id);
    console.log("Filtering with type:", selectedType);
    console.log("Total questions available:", supabaseQuestions.length);
    
    // Start with all questions from Supabase
    let filtered = [...supabaseQuestions];
    
    // Filter by theme if selected (except for random theme)
    if (selectedTheme && selectedTheme.id !== "random") {
      console.log(`Filtering for theme: ${selectedTheme.id}`);
      filtered = filtered.filter(q => q.theme.toLowerCase() === selectedTheme.id.toLowerCase());
      console.log(`After theme filter, questions count: ${filtered.length}`);
    }
    
    // Filter by question type if selected
    if (selectedType !== "all") {
      filtered = filtered.filter(q => q.type === selectedType);
      console.log(`After type filter, questions count: ${filtered.length}`);
    }
    
    // For random theme, just shuffle the questions
    if (selectedTheme && selectedTheme.id === "random") {
      filtered = filtered.sort(() => Math.random() - 0.5);
    }
    
    console.log("Final filtered questions count:", filtered.length);
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0);
  }, [selectedTheme, selectedType, supabaseQuestions]);

  // Handle search separately with proper accent handling
  useEffect(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      setSearchResults([]);
      return;
    }

    if (searchQuery && searchQuery.trim() !== "") {
      // Convert to lowercase but preserve accents
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      
      // Use includes() which naturally preserves accents in comparison
      const results = supabaseQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerCaseQuery)
      );
      
      console.log("Search results for:", searchQuery, "found:", results.length);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, supabaseQuestions]);

  const handleSearch = (query: string) => {
    console.log("Search query received:", query);
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: QuizTheme) => {
    setSelectedTheme(theme);
    // Ne pas basculer automatiquement vers l'onglet des questions
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  const handleNext = () => {
    // Get a random question index different from the current one
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
    console.log("Nouveau score reçu:", score);
    
    // Update scores locally first
    setScores(prevScores => {
      // Check if we already have a score for this question
      const existingScoreIndex = prevScores.findIndex(s => s.questionId === score.questionId);
      
      if (existingScoreIndex >= 0) {
        // Replace existing score
        const newScores = [...prevScores];
        newScores[existingScoreIndex] = score;
        console.log("Score remplacé pour la question:", score.questionId);
        return newScores;
      } else {
        // Add new score
        const newScores = [...prevScores, score];
        console.log("Nouveau score ajouté, total scores:", newScores.length);
        return newScores;
      }
    });

    // Incrémenter le nombre de questions complétées localement
    setQuestionsCompleted(prev => {
      const newCount = prev + 1;
      console.log("Questions complétées mises à jour:", newCount);
      return newCount;
    });
    
    // Sauvegarder dans Supabase si l'utilisateur est connecté
    if (user) {
      console.log("Sauvegarde du score dans Supabase...");
      try {
        await saveScore(score);
        console.log("Score sauvegardé dans Supabase:", score);
        
        // Recharger la progression depuis Supabase pour avoir les stats à jour
        console.log("Rechargement de la progression depuis Supabase...");
        const updatedData = await loadProgress();
        if (updatedData?.progress) {
          setQuestionsCompleted(updatedData.progress.questions_completed);
          console.log("Progression mise à jour depuis Supabase:", updatedData.progress);
        }
        if (updatedData?.scores) {
          setScores(updatedData.scores);
          console.log("Scores mis à jour depuis Supabase:", updatedData.scores.length);
        }
      } catch (error) {
        console.error("Erreur lors de la sauvegarde:", error);
        toast.error("Erreur lors de la sauvegarde de votre progression");
      }
    }
    
    // Adjust accuracy based on hints usage
    let displayAccuracy = score.accuracy;
    
    // If all hints were revealed, no points
    if (score.usedHints && score.hintsRevealedCount === 3) {
      displayAccuracy = 0;
    }
    // Otherwise reduce points based on how many hints were used
    else if (score.usedHints && score.hintsRevealedCount) {
      displayAccuracy = Math.max(0, score.accuracy - (score.hintsRevealedCount * 20));
    }
    
    // Show toast with consistent feedback message
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
      setActiveTab("questions");
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
