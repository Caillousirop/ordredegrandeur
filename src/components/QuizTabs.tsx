
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./ui/badge";
import { HelpCircle, Search } from "lucide-react";
import QuizSetup from "./QuizSetup";
import QuizContent from "./QuizContent";
import { QuizTheme } from "./types";

interface QuizTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filteredQuestions: any[];
  currentQuestion: any;
  isMultiStep: boolean;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  questionsCompleted: number;
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
  handleSearch,
  handleThemeSelect,
  handleTypeSelect,
  handleNext,
  handleScore,
  startQuiz
}) => {
  return (
    <Tabs 
      defaultValue="setup" 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="setup" className="flex items-center gap-2">
          <Search size={16} />
          Configuration
        </TabsTrigger>
        <TabsTrigger value="questions" disabled={filteredQuestions.length === 0} className="flex items-center gap-2">
          <HelpCircle size={16} />
          Question aléatoire
          <Badge variant="outline" className="ml-2">{filteredQuestions.length}</Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="setup" className="mt-6">
        <QuizSetup
          onSearch={handleSearch}
          onSelectTheme={handleThemeSelect}
          onSelectType={handleTypeSelect}
          onStartQuiz={startQuiz}
          selectedTheme={selectedTheme}
          selectedType={selectedType}
          filteredQuestionsCount={filteredQuestions.length}
        />
      </TabsContent>
      
      <TabsContent value="questions" className="mt-8">
        {filteredQuestions.length > 0 ? (
          <QuizContent
            question={currentQuestion}
            isMultiStep={isMultiStep}
            onNext={handleNext}
            onScore={handleScore}
            questionsCompleted={questionsCompleted}
          />
        ) : (
          <div className="text-center p-8">
            <p>Aucune question disponible.</p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default QuizTabs;
