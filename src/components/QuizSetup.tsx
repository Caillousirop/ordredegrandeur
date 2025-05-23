
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import { QuizTheme, Question, MultiStepQuestion } from "./types";

interface QuizSetupProps {
  onSearch: (query: string) => void;
  onSelectTheme: (theme: QuizTheme) => void;
  onSelectType: (type: "simple" | "multistep" | "all") => void;
  onStartQuiz: () => void;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  filteredQuestionsCount: number;
  searchResults: (Question | MultiStepQuestion)[];
  searchQuery: string;
}

const QuizSetup: React.FC<QuizSetupProps> = ({
  onSearch,
  onSelectTheme,
  onSelectType,
  onStartQuiz,
  selectedTheme,
  selectedType,
  filteredQuestionsCount,
  searchResults,
  searchQuery
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Rechercher une question</CardTitle>
          <CardDescription>
            Tapez un mot-clé pour trouver des questions spécifiques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SearchBar onSearch={onSearch} />
          <SearchResults results={searchResults} searchQuery={searchQuery} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuration du quiz</CardTitle>
          <CardDescription>
            Choisissez un thème et un type de question pour commencer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Sélectionnez un thème</h3>
            <ThemeSelector onSelectTheme={onSelectTheme} selectedTheme={selectedTheme} />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Type de questions</h3>
            <QuestionTypeSelector onSelectType={onSelectType} selectedType={selectedType} />
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={onStartQuiz} 
              className="w-full" 
              size="lg"
              disabled={!selectedTheme || filteredQuestionsCount === 0}
            >
              <Play className="mr-2 h-4 w-4" />
              Commencer le quiz ({filteredQuestionsCount} questions)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSetup;
