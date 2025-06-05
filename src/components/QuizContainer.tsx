
import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import QuizHeader from "./QuizHeader";
import QuizFooter from "./QuizFooter";
import QuizTabs from "./QuizTabs";

const QuizContainer: React.FC = () => {
  const {
    filteredQuestions,
    currentQuestion,
    isMultiStep,
    activeTab,
    setActiveTab,
    selectedTheme,
    selectedType,
    questionsCompleted,
    searchQuery,
    searchResults,
    questionsLoading,
    questionsError,
    themes,
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  } = useQuiz();

  console.log("QuizContainer rendered with filtered questions:", filteredQuestions.length);
  console.log("Questions loading:", questionsLoading);
  console.log("Questions error:", questionsError);
  console.log("Available themes:", themes.length);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <QuizHeader />
      
      <QuizTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredQuestions={filteredQuestions}
        currentQuestion={currentQuestion}
        isMultiStep={isMultiStep}
        selectedTheme={selectedTheme}
        selectedType={selectedType}
        questionsCompleted={questionsCompleted}
        searchQuery={searchQuery}
        searchResults={searchResults}
        questionsLoading={questionsLoading}
        questionsError={questionsError}
        themes={themes}
        handleSearch={handleSearch}
        handleThemeSelect={handleThemeSelect}
        handleTypeSelect={handleTypeSelect}
        handleNext={handleNext}
        handleScore={handleScore}
        startQuiz={startQuiz}
      />
      
      <QuizFooter />
    </div>
  );
};

export default QuizContainer;
