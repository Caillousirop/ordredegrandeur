
import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import MultiStepQuizQuestion from "./MultiStepQuizQuestion";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import { Button } from "./ui/button";
import { questions, themes } from "@/data/questions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "./types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [activeTab, setActiveTab] = useState("setup");
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [questionsCompleted, setQuestionsCompleted] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);
  const [selectedType, setSelectedType] = useState<"simple" | "multistep" | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter questions based on theme, type, and search query
  useEffect(() => {
    let filtered = [...questions];
    
    // Filter by theme if selected
    if (selectedTheme) {
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
    
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0);
  }, [selectedTheme, selectedType, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleThemeSelect = (theme: QuizTheme) => {
    setSelectedTheme(theme);
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    setSelectedType(type);
    // Automatically start quiz when type is selected
    setActiveTab("toutes");
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionsCompleted(prev => prev + 1);
    } else {
      toast.success("Vous avez terminé toutes les questions !");
      setCurrentQuestionIndex(0);
      setQuestionsCompleted(prev => prev + 1);
    }
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
  
  // Calculate total score whenever scores change
  useEffect(() => {
    if (scores.length === 0) {
      setTotalScore(0);
      return;
    }
    
    const total = scores.reduce((sum, score) => sum + score.accuracy, 0);
    setTotalScore(Math.round(total / scores.length));
  }, [scores]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isMultiStep = currentQuestion?.type === "multistep";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-center">
          <span className="text-3xl font-bold text-primary">Ordre de </span>
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Gran</span>
          <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">deur</span>
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="setup">
              Configuration
            </TabsTrigger>
            <TabsTrigger value="toutes" disabled={filteredQuestions.length === 0}>
              Questions 
              <Badge variant="outline" className="ml-2">{filteredQuestions.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="stats" disabled={scores.length === 0}>
              Statistiques
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="mt-6">
            <div className="space-y-6">
              <ThemeSelector 
                onSelectTheme={handleThemeSelect} 
                selectedTheme={selectedTheme} 
              />
              
              {selectedTheme && (
                <>
                  <QuestionTypeSelector 
                    onSelectType={handleTypeSelect}
                    selectedType={selectedType}
                  />
                  
                  <div className="mt-6">
                    <SearchBar onSearch={handleSearch} />
                  </div>
                </>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="toutes" className="mt-8">
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
                  <p>{currentQuestionIndex + 1}/{filteredQuestions.length}</p>
                  
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
          
          <TabsContent value="stats" className="mt-6">
            <Card className="w-full border-2 border-secondary/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Vos statistiques</CardTitle>
                <CardDescription>
                  Suivez votre progression et vos performances
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score moyen</span>
                    <span className="font-medium">{totalScore}%</span>
                  </div>
                  <Progress value={totalScore} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border border-border/50 bg-card/50">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm">Questions complétées</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 px-4">
                      <p className="text-2xl font-bold">{questionsCompleted}</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border/50 bg-card/50">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm">Réponses directes réussies</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 px-4">
                      <p className="text-2xl font-bold">
                        {scores.filter(s => s.directFinalAnswer && s.accuracy > 70).length}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {scores.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-sm font-medium mb-2">Vos 5 dernières réponses</h3>
                    <div className="space-y-2">
                      {scores.slice(-5).reverse().map((score, index) => (
                        <div key={index} className="flex justify-between items-center px-2 py-1 bg-accent/20 rounded-md">
                          <div className="flex items-center gap-2">
                            {score.accuracy >= 70 ? (
                              <Badge variant="default" className="bg-green-500">✓</Badge>
                            ) : (
                              <Badge variant="outline" className="bg-orange-500/10">×</Badge>
                            )}
                            <span className="text-sm truncate">
                              Question #{score.questionId} 
                              {score.isMultiStep && score.directFinalAnswer && (
                                <Badge variant="secondary" className="ml-2 text-xs">Direct</Badge>
                              )}
                            </span>
                          </div>
                          <span className="font-medium">{Math.round(score.accuracy)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QuizContainer;
