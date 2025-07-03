
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

  const startQuiz = () => {
    if (filteredQuestions.length > 0) {
      if (selectedTheme?.id === "challenge-30s") {
        setActiveTab("challenge-30s");
      } else {
        setActiveTab("questions");
      }
    } else {
      // This will be handled by the toast in the main hook
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
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    startQuiz
  };
};
