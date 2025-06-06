
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuizSetup from "./QuizSetup";
import QuizContent from "./QuizContent";
import { Question, MultiStepQuestion, QuizTheme } from "./types";

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
  questionsLoading?: boolean;
  questionsError?: string | null;
  themes: QuizTheme[];
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
  questionsLoading = false,
  questionsError = null,
  themes,
  handleSearch,
  handleThemeSelect,
  handleTypeSelect,
  handleNext,
  handleScore,
  startQuiz
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="setup">Configuration</TabsTrigger>
      </TabsList>

      <TabsContent value="setup" className="mt-6">
        <QuizSetup
          selectedTheme={selectedTheme}
          selectedType={selectedType}
          onSelectTheme={handleThemeSelect}
          onSelectType={handleTypeSelect}
          searchQuery={searchQuery}
          searchResults={searchResults}
          onSearch={handleSearch}
          onStartQuiz={startQuiz}
          filteredQuestionsCount={filteredQuestions.length}
          questionsLoading={questionsLoading}
          questionsError={questionsError}
          themes={themes}
        />
      </TabsContent>

      <TabsContent value="questions" className="mt-6">
        {questionsLoading ? (
          <div className="text-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-muted-foreground">Chargement des questions...</p>
          </div>
        ) : questionsError ? (
          <div className="text-center p-8 text-red-600">
            <p>Erreur lors du chargement des questions:</p>
            <p className="text-sm mt-1">{questionsError}</p>
          </div>
        ) : currentQuestion ? (
          <QuizContent
            question={currentQuestion}
            isMultiStep={isMultiStep}
            questionsCompleted={questionsCompleted}
            onNext={handleNext}
            onScore={handleScore}
          />
        ) : (
          <div className="text-center p-8 text-muted-foreground">
            <p>Aucune question disponible pour cette sélection.</p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default QuizTabs;
