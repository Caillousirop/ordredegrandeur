
import { useState } from "react";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";

export const useQuizState = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

  const handleThemeSelect = (theme: QuizTheme) => {
    setSelectedTheme(theme);
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  const handleNext = () => {
    console.log("🔄 [QUIZ] Passage à la question suivante");
    console.log("Questions filtrées disponibles:", filteredQuestions.length);
    console.log("Index actuel:", currentQuestionIndex);
    
    if (filteredQuestions.length > 1) {
      let newIndex;
      let attempts = 0;
      const maxAttempts = 10;
      
      // Éviter de retomber sur la même question
      do {
        newIndex = Math.floor(Math.random() * filteredQuestions.length);
        attempts++;
      } while (newIndex === currentQuestionIndex && attempts < maxAttempts);
      
      console.log("🎯 [QUIZ] Nouveau index sélectionné:", newIndex);
      console.log("🎯 [QUIZ] Nouvelle question ID:", filteredQuestions[newIndex]?.id);
      
      setCurrentQuestionIndex(newIndex);
      setCurrentQuestionId(filteredQuestions[newIndex]?.id || null);
    } else if (filteredQuestions.length === 1) {
      console.log("🎯 [QUIZ] Une seule question disponible, on reste sur l'index 0");
      setCurrentQuestionIndex(0);
      setCurrentQuestionId(filteredQuestions[0]?.id || null);
    }
  };

  const startQuiz = () => {
    console.log("🚀 [QUIZ] Démarrage du quiz");
    console.log("Questions filtrées:", filteredQuestions.length);
    
    if (filteredQuestions.length > 0) {
      // S'assurer que l'index est valide
      const safeIndex = Math.min(currentQuestionIndex, filteredQuestions.length - 1);
      setCurrentQuestionIndex(safeIndex);
      setCurrentQuestionId(filteredQuestions[safeIndex]?.id || null);
      
      console.log("🎯 [QUIZ] Question initiale - Index:", safeIndex, "ID:", filteredQuestions[safeIndex]?.id);
      
      if (selectedTheme?.id === "challenge-30s") {
        setActiveTab("challenge-30s");
      } else {
        setActiveTab("questions");
      }
    } else {
      console.error("❌ [QUIZ] Aucune question disponible pour démarrer le quiz");
    }
  };

  // Fonction pour s'assurer que l'ID de la question courante est synchronisé
  const syncCurrentQuestionId = () => {
    if (filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length) {
      const currentQuestion = filteredQuestions[currentQuestionIndex];
      if (currentQuestion && currentQuestion.id !== currentQuestionId) {
        console.log("🔄 [QUIZ] Synchronisation de l'ID de question:", currentQuestion.id);
        setCurrentQuestionId(currentQuestion.id);
      }
    }
  };

  return {
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
    startQuiz,
    syncCurrentQuestionId
  };
};
