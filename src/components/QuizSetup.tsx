
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import DailyQuestion from "./DailyQuestion";
import { QuizTheme, Question, MultiStepQuestion } from "./types";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

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
  searchResults
}) => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Daily Question Section */}
      <div className="mb-8">
        <DailyQuestion />
      </div>

      {/* Auth prompt for non-logged users */}
      {!user && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-200">
                Participez à la question du jour !
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Connectez-vous pour répondre et voir votre classement
              </p>
            </div>
            <Button asChild size="sm">
              <Link to="/auth">Se connecter</Link>
            </Button>
          </div>
        </div>
      )}

      <ThemeSelector 
        onSelectTheme={onSelectTheme} 
        selectedTheme={selectedTheme} 
      />

      <QuestionTypeSelector 
        onSelectType={onSelectType}
        selectedType={selectedType}
      />
      
      {/* Bouton Commencer le test */}
      <div className="flex justify-center mt-8">
        <Button 
          onClick={onStartQuiz}
          disabled={filteredQuestionsCount === 0}
          size="lg"
          className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80 font-semibold text-lg py-6"
        >
          Commencer le test <ArrowRight className="ml-2" />
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
