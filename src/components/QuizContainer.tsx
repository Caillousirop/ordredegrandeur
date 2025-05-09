
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import MultiStepQuizQuestion from "./MultiStepQuizQuestion";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import { Button } from "./ui/button";
import { questions, themes } from "@/data/themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "./types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, HelpCircle } from "lucide-react";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter questions based on theme, type, and search query
  useEffect(() => {
    let filtered = [...questions];
    
    // Filter by theme if selected (except for random theme)
    if (selectedTheme && selectedTheme.id !== "random") {
      filtered = filtered.filter(q => q.theme === selectedTheme.id);
    }
    
    // Filter by question type if selected
    if (selectedType !== "all") {
      filtered = filtered.filter(q => q.type === selectedType);
    }
    
    // Apply search filter if there's a query
    if (searchQuery) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // For random theme, just shuffle the questions
    if (selectedTheme && selectedTheme.id === "random") {
      filtered = filtered.sort(() => Math.random() - 0.5);
    }
    
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0);
  }, [selectedTheme, selectedType, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: QuizTheme) => {
    setSelectedTheme(theme);
    // Automatically show questions if a theme is selected
    if (theme) {
      setActiveTab("questions");
    }
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
  };

  const handleNext = () => {
    // Get a random question index different from the current one
    if (filteredQuestions.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * filteredQuestions.length);
      } while (newIndex === currentQuestionIndex);
      setCurrentQuestionIndex(newIndex);
    } else if (filteredQuestions.length === 1) {
      setCurrentQuestionIndex(0);
    }
    setQuestionsCompleted(prev => prev + 1);
  };
  
  const handleScore = (score: QuizScore) => {
    // Update scores
    setScores(prevScores => {
      // Check if we already have a score for this question
      const existingScoreIndex = prevScores.findIndex(s => s.questionId === score.questionId);
      
      if (existingScoreIndex >= 0) {
        // Replace existing score
        const newScores = [...prevScores];
        newScores[existingScoreIndex] = score;
        return newScores;
      } else {
        // Add new score
        return [...prevScores, score];
      }
    });
    
    // Show toast with score feedback
    if (score.accuracy >= 90) {
      toast.success("Excellente réponse ! 🎯");
    } else if (score.accuracy >= 70) {
      toast.success("Très bonne réponse ! 👍");
    } else if (score.accuracy >= 50) {
      toast.info("Pas mal ! 😊");
    } else if (score.accuracy >= 30) {
      toast.info("Vous pouvez faire mieux ! 🤔");
    } else {
      toast.error("Essayez encore ! 📚");
    }
  };

  const startQuiz = () => {
    if (filteredQuestions.length > 0) {
      setActiveTab("questions");
    } else {
      toast.error("Veuillez sélectionner un thème et un type de question");
    }
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isMultiStep = currentQuestion?.type === "multistep";

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
            <div className="space-y-6">
              <ThemeSelector 
                onSelectTheme={handleThemeSelect} 
                selectedTheme={selectedTheme} 
              />

              <QuestionTypeSelector 
                onSelectType={handleTypeSelect}
                selectedType={selectedType}
              />
              
              <div className="mt-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              
              {/* Bouton Commencer le test */}
              <div className="flex justify-center mt-8">
                <Button 
                  onClick={startQuiz}
                  disabled={filteredQuestions.length === 0}
                  size="lg"
                  className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80 font-semibold text-lg py-6"
                >
                  Commencer le test <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="questions" className="mt-8">
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {isMultiStep ? (
                  <MultiStepQuizQuestion 
                    question={currentQuestion as MultiStepQuestion} 
                    onNext={handleNext} 
                    onScore={handleScore}
                  />
                ) : (
                  <QuizQuestion 
                    question={currentQuestion as Question} 
                    onNext={handleNext} 
                    onScore={handleScore}
                  />
                )}
                
                <div className="flex items-center justify-between text-sm text-muted-foreground px-2">
                  <p>Question {questionsCompleted + 1}</p>
                  
                  {isMultiStep && (
                    <Badge variant="outline" className="bg-primary/10">
                      Question à étapes
                    </Badge>
                  )}
                </div>
              </div>
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
