
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import DailyQuestion from "./DailyQuestion";
import { QuizTheme, Question, MultiStepQuestion } from "./types";

interface QuizSetupProps {
  onSearch: (query: string) => void;
  onSelectTheme: (theme: QuizTheme) => void;
  onSelectType: (type: "simple" | "multistep" | "all") => void;
  onStartQuiz: () => void;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  filteredQuestionsCount: number;
  searchQuery: string;
  searchResults: (Question | MultiStepQuestion)[];
  questionsLoading?: boolean;
  questionsError?: string | null;
  themes: QuizTheme[];
}

const QuizSetup: React.FC<QuizSetupProps> = ({
  onSearch,
  onSelectTheme,
  onSelectType,
  onStartQuiz,
  selectedTheme,
  selectedType,
  filteredQuestionsCount,
  searchQuery,
  searchResults,
  questionsLoading = false,
  questionsError = null,
  themes
}) => {
  return (
    <div className="space-y-6">
      {/* Daily Question Section */}
      <div className="mb-8">
        <DailyQuestion />
      </div>

      {/* Error message if questions failed to load */}
      {questionsError && (
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <h3 className="text-red-800 dark:text-red-200 font-medium">Erreur de chargement</h3>
          <p className="text-red-600 dark:text-red-300 text-sm mt-1">
            Impossible de charger les questions depuis la base de données: {questionsError}
          </p>
        </div>
      )}

      <ThemeSelector 
        onSelectTheme={onSelectTheme} 
        selectedTheme={selectedTheme}
        themes={themes}
        loading={questionsLoading}
      />

      <QuestionTypeSelector 
        onSelectType={onSelectType}
        selectedType={selectedType}
      />
      
      {/* Bouton Commencer le test */}
      <div className="flex justify-center mt-8">
        <Button 
          onClick={onStartQuiz}
          disabled={filteredQuestionsCount === 0 || questionsLoading}
          size="lg"
          className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80 font-semibold text-lg py-6"
        >
          {questionsLoading ? "Chargement..." : `Commencer le test (${filteredQuestionsCount} questions)`}
          {!questionsLoading && <ArrowRight className="ml-2" />}
        </Button>
      </div>
      
      {/* Search bar below the button */}
      <div className="mt-4 flex justify-center">
        <SearchBar onSearch={onSearch} />
      </div>
      
      {/* Search results below the search bar */}
      <SearchResults 
        searchQuery={searchQuery}
        searchResults={searchResults}
      />
    </div>
  );
};

export default QuizSetup;
