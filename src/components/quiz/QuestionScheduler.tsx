
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { themes } from "@/data/themes";
import { Question, MultiStepQuestion } from "@/components/types";
import { generateId } from "@/utils/questionImporter";

interface QuestionSchedulerProps {
  onNewQuestionsGenerated: (questions: (Question | MultiStepQuestion)[]) => void;
}

const QuestionScheduler: React.FC<QuestionSchedulerProps> = ({ onNewQuestionsGenerated }) => {
  const [lastGenerationDate, setLastGenerationDate] = useState<string | null>(null);
  const [nextGenerationDate, setNextGenerationDate] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Load the last generation date from localStorage
  useEffect(() => {
    const storedDate = localStorage.getItem("last-questions-generation-date");
    if (storedDate) {
      setLastGenerationDate(storedDate);
      
      // Calculate next generation date (1 month after last generation)
      const nextDate = new Date(storedDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      setNextGenerationDate(nextDate.toISOString().split('T')[0]);
    } else {
      // If no stored date, set next generation date to today
      const today = new Date();
      setNextGenerationDate(today.toISOString().split('T')[0]);
    }
  }, []);
  
  // Check if it's time to generate new questions
  useEffect(() => {
    if (!nextGenerationDate) return;
    
    const today = new Date();
    const next = new Date(nextGenerationDate);
    
    if (today >= next) {
      toast.info(
        "Il est temps de générer de nouvelles questions pour ce mois-ci!",
        { duration: 10000 }
      );
    }
  }, [nextGenerationDate]);

  const generateQuestions = async () => {
    setIsGenerating(true);
    
    try {
      // Here we would normally call an API to generate new questions
      // For this demo, we'll create mock questions
      const generatedQuestions = generateMockQuestions();
      
      // Update the last generation date
      const today = new Date();
      setLastGenerationDate(today.toISOString().split('T')[0]);
      localStorage.setItem("last-questions-generation-date", today.toISOString());
      
      // Set next generation date to 1 month from now
      const nextDate = new Date();
      nextDate.setMonth(nextDate.getMonth() + 1);
      setNextGenerationDate(nextDate.toISOString().split('T')[0]);
      
      // Pass the generated questions up to the parent component
      onNewQuestionsGenerated(generatedQuestions);
      
      toast.success("Questions générées avec succès!");
    } catch (error) {
      console.error("Error generating questions:", error);
      toast.error("Erreur lors de la génération des questions");
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Mock function to generate questions - in a real app, this would call an API
  const generateMockQuestions = (): (Question | MultiStepQuestion)[] => {
    const questions: (Question | MultiStepQuestion)[] = [];
    
    // Generate 10 questions for each theme
    themes.forEach(theme => {
      for (let i = 0; i < 10; i++) {
        // Generate a simple question for even numbers and multi-step for odd
        if (i % 2 === 0) {
          questions.push({
            id: generateId(),
            type: "simple",
            question: `Question proposée ${i+1} pour le thème ${theme.name}?`,
            correctAnswer: Math.floor(Math.random() * 1000),
            unit: i % 3 === 0 ? "%" : i % 3 === 1 ? "€" : "",
            explanation: `Explication pour la question ${i+1}`,
            theme: theme.id
          });
        } else {
          // Generate a multi-step question
          questions.push({
            id: generateId(),
            type: "multistep",
            question: `Question à étapes ${i+1} pour le thème ${theme.name}?`,
            steps: [
              {
                question: `Étape 1: Sous-question pour ${theme.name}?`,
                correctAnswer: Math.floor(Math.random() * 100),
                unit: i % 2 === 0 ? "kg" : "",
                explanation: `Explication pour l'étape 1`
              },
              {
                question: `Étape 2: Deuxième sous-question pour ${theme.name}?`,
                correctAnswer: Math.floor(Math.random() * 100),
                unit: i % 2 === 0 ? "kg" : "",
                explanation: `Explication pour l'étape 2`
              }
            ],
            finalExplanation: `Explication finale pour la question à étapes ${i+1}`,
            theme: theme.id
          });
        }
      }
    });
    
    return questions;
  };
  
  return (
    <div className="p-4 border rounded-md mb-6 bg-muted/20">
      <h3 className="text-lg font-medium mb-3">Génération automatique de questions</h3>
      
      <div className="space-y-2 mb-4">
        {lastGenerationDate && (
          <p className="text-sm">
            Dernière génération: <span className="font-medium">{new Date(lastGenerationDate).toLocaleDateString('fr-FR')}</span>
          </p>
        )}
        {nextGenerationDate && (
          <p className="text-sm">
            Prochaine génération prévue: <span className="font-medium">{new Date(nextGenerationDate).toLocaleDateString('fr-FR')}</span>
          </p>
        )}
      </div>
      
      <Button 
        onClick={generateQuestions} 
        disabled={isGenerating}
        className="w-full"
      >
        {isGenerating ? "Génération en cours..." : "Générer de nouvelles questions"}
      </Button>
    </div>
  );
};

export default QuestionScheduler;
