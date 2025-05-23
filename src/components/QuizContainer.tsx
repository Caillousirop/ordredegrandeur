
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
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  } = useQuiz();

  console.log("QuizContainer rendered with filtered questions:", filteredQuestions.length);

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto">
      <div className="flex-shrink-0">
        <QuizHeader />
      </div>
      
      <div className="flex-1 min-h-0 my-6">
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
          handleSearch={handleSearch}
          handleThemeSelect={handleThemeSelect}
          handleTypeSelect={handleTypeSelect}
          handleNext={handleNext}
          handleScore={handleScore}
          startQuiz={startQuiz}
        />
      </div>
      
      <div className="flex-shrink-0">
        <QuizFooter />
      </div>
    </div>
  );
};

export default QuizContainer;
