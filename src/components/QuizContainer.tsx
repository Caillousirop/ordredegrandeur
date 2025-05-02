
import React, { useState } from "react";
import QuizQuestion, { Question } from "./QuizQuestion";
import SearchBar from "./SearchBar";
import { questions } from "@/data/questions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(questions);
  const [activeTab, setActiveTab] = useState("toutes");

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredQuestions(questions);
      return;
    }
    
    const filtered = questions.filter(q => 
      q.question.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filtered.length === 0) {
      toast.info("Aucune question ne correspond à votre recherche.");
      return;
    }
    
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      toast.success("Vous avez terminé toutes les questions !");
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Truth Gauge Quiz
        </h1>
        <p className="text-center text-muted-foreground">
          Testez vos connaissances et voyez à quel point vous êtes proche de la vérité !
        </p>
        
        <SearchBar onSearch={handleSearch} />
        
        <Tabs 
          defaultValue="toutes" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="toutes">Toutes les questions</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
          </TabsList>
          <TabsContent value="toutes" className="mt-6">
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                <QuizQuestion 
                  question={filteredQuestions[currentQuestionIndex]} 
                  onNext={handleNext} 
                />
                <p className="text-center text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} sur {filteredQuestions.length}
                </p>
              </div>
            ) : (
              <div className="text-center p-8">
                <p>Aucune question disponible.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="stats" className="mt-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
                <CardDescription>
                  Fonctionnalité à venir dans une future mise à jour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Les statistiques de vos résultats seront disponibles prochainement.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default QuizContainer;
