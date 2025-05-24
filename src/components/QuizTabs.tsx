import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuizSetup from "./QuizSetup";
import QuizContent from "./QuizContent";
import { Question, MultiStepQuestion, QuizTheme } from "./types";
import QuestionValidator from "./admin/QuestionValidator";

interface QuizTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filteredQuestions: (Question | MultiStepQuestion)[];
  currentQuestion: Question | MultiStepQuestion | undefined;
  isMultiStep: boolean;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  questionsCompleted: number;
  searchQuery: string;
  searchResults: (Question | MultiStepQuestion)[];
  handleSearch: (query: string) => void;
  handleThemeSelect: (theme: QuizTheme) => void;
  handleTypeSelect: (type: "simple" | "multistep" | "all") => void;
  handleNext: () => void;
  handleScore: (score: any) => void;
  startQuiz: () => void;
}

const QuizTabs: React.FC<QuizTabsProps> = ({
  activeTab,
  setActiveTab,
  filteredQuestions,
  currentQuestion,
  isMultiStep,
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
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="setup">Configuration</TabsTrigger>
        <TabsTrigger value="questions">Questions</TabsTrigger>
        <TabsTrigger value="scores">Scores</TabsTrigger>
        <TabsTrigger value="validator">Validateur</TabsTrigger>
      </TabsList>

      <TabsContent value="setup" className="mt-6">
        <QuizSetup
          selectedTheme={selectedTheme}
          selectedType={selectedType}
          handleThemeSelect={handleThemeSelect}
          handleTypeSelect={handleTypeSelect}
          searchQuery={searchQuery}
          searchResults={searchResults}
          handleSearch={handleSearch}
          startQuiz={startQuiz}
        />
      </TabsContent>

      <TabsContent value="questions" className="mt-6">
        <QuizContent
          currentQuestion={currentQuestion}
          isMultiStep={isMultiStep}
          questionsCompleted={questionsCompleted}
          handleNext={handleNext}
          handleScore={handleScore}
        />
      </TabsContent>

      <TabsContent value="scores" className="mt-6">
        <div>Scores</div>
      </TabsContent>

      <TabsContent value="validator" className="mt-6">
        <QuestionValidator />
      </TabsContent>
    </Tabs>
  );
};

export default QuizTabs;
