import { useState, useEffect } from "react";
import { questions, themes } from "@/data/themes";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";
import { toast } from "sonner";

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<(Question | MultiStepQuestion)[]>([]);

  // Filter questions based on theme and type (not search)
  useEffect(() => {
    console.log("Filtering with theme:", selectedTheme?.id);
    console.log("Filtering with type:", selectedType);
    console.log("Total questions available:", questions.length);
    
    // Start with all questions
    let filtered = [...questions];
    
    // Filter by theme if selected (except for random theme)
    if (selectedTheme && selectedTheme.id !== "random") {
      console.log(`Filtering for theme: ${selectedTheme.id}`);
      filtered = filtered.filter(q => q.theme === selectedTheme.id);
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
  }, [selectedTheme, selectedType]);

  // Handle search separately
  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      const results = questions.filter(q => 
        q.question.toLowerCase().includes(lowerCaseQuery)
      );
      console.log("Search results for:", searchQuery, "found:", results.length);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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
    setQuestionsCompleted(prev => prev + 1);
  };
  
  const handleScore = (score: QuizScore) => {
    // Update scores
    setScores(prevScores => {
      // Check if we already have a score for this question
      const existingScoreIndex = prevScores.findIndex(s => s.questionId === score.questionId);
      
      if (existingScoreIndex >= 0) {
        // Replace existing score
        const newScores = [...prevScores];
        newScores[existingScoreIndex] = score;
        return newScores;
      } else {
        // Add new score
        return [...prevScores, score];
      }
    });
    
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
    
    // Show toast with score feedback
    if (displayAccuracy >= 90) {
      toast.success("Excellente réponse ! 🎯");
    } else if (displayAccuracy >= 70) {
      toast.success("Très bonne réponse ! 👍");
    } else if (displayAccuracy >= 50) {
      toast.info("Pas mal ! 😊");
    } else if (displayAccuracy >= 30) {
      toast.info("Vous pouvez faire mieux ! 🤔");
    } else {
      toast.error("Essayez encore ! 📚");
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
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  };
};
