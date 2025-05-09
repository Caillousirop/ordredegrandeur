
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./ui/badge";
import { HelpCircle } from "lucide-react";
import { useQuiz } from "@/hooks/useQuiz";
import QuizSetup from "./QuizSetup";
import QuizContent from "./QuizContent";

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
    handleSearch,
    handleThemeSelect,
    handleTypeSelect,
    handleNext,
    handleScore,
    startQuiz
  } = useQuiz();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-center">
          <span className="text-2xl font-bold text-primary">O</span>
          <span className="text-2xl font-bold text-primary">r</span>
          <span className="text-2xl font-bold text-primary">d</span>
          <span className="text-2xl font-bold text-primary">r</span>
          <span className="text-2xl font-bold text-primary">e</span>
          <span className="text-3xl font-bold text-primary"> d</span>
          <span className="text-3xl font-bold text-primary">e</span>
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"> G</span>
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">r</span>
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">a</span>
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">n</span>
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">d</span>
          <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">e</span>
          <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">u</span>
          <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">r</span>
        </h1>
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Testez vos connaissances statistiques ! Répondez directement ou décomposez le problème en étapes pour gagner des points.
        </p>
        
        <Tabs 
          defaultValue="setup" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="setup">
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
      </div>
      
      <div className="mt-4 border-t pt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Source des données : INSEE et autres organismes officiels. 
        </p>
        <Link to="/sources" className="text-xs text-primary hover:underline">
          Consulter nos sources
        </Link>
      </div>
    </div>
  );
};

export default QuizContainer;
