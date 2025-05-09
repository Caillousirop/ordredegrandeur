
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import SearchBar from "./SearchBar";
import { QuizTheme } from "./types";

interface QuizSetupProps {
  onSearch: (query: string) => void;
  onSelectTheme: (theme: QuizTheme) => void;
  onSelectType: (type: "simple" | "multistep" | "all") => void;
  onStartQuiz: () => void;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  filteredQuestionsCount: number;
}

const QuizSetup: React.FC<QuizSetupProps> = ({
  onSearch,
  onSelectTheme,
  onSelectType,
  onStartQuiz,
  selectedTheme,
  selectedType,
  filteredQuestionsCount
}) => {
  return (
    <div className="space-y-6">
      <ThemeSelector 
        onSelectTheme={onSelectTheme} 
        selectedTheme={selectedTheme} 
      />

      <QuestionTypeSelector 
        onSelectType={onSelectType}
        selectedType={selectedType}
      />
      
      <div className="mt-6">
        <SearchBar onSearch={onSearch} />
      </div>
      
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
    </div>
  );
};

export default QuizSetup;
