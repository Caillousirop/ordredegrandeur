
import { useState, useEffect } from "react";
import { QuizScore, QuizTheme } from "@/components/types";
import { useAuth } from "@/hooks/useAuth";
import { useQuizProgressContext } from "@/contexts/QuizProgressContext";

export const useQuizState = () => {
  const { user } = useAuth();
  const { quizProgress } = useQuizProgressContext();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userProgress, setUserProgress] = useState<any>(null);
  const [isProcessingAnswer, setIsProcessingAnswer] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

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

  return {
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
  };
};
