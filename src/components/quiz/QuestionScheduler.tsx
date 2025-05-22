
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { themes } from "@/data/themes";
import { Question, MultiStepQuestion } from "@/components/types";
import { generateId } from "@/utils/questionImporter";
import { Badge } from "@/components/ui/badge";

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
      // NOTE: Ce code génère actuellement des questions d'exemple
      // Pour une version future, intégrer un service d'IA pour générer des questions pertinentes
      const generatedQuestions = generatePlaceholderQuestions();
      
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
      
      toast.success("Propositions de questions générées avec succès!");
    } catch (error) {
      console.error("Error generating questions:", error);
      toast.error("Erreur lors de la génération des questions");
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Placeholder function to generate example questions - will be replaced by AI integration in the future
  const generatePlaceholderQuestions = (): (Question | MultiStepQuestion)[] => {
    const questions: (Question | MultiStepQuestion)[] = [];
    
    // Generate 3 questions for each theme (just placeholder for now)
    themes.forEach(theme => {
      for (let i = 0; i < 3; i++) {
        // Generate a simple question for even numbers and multi-step for odd
        if (i % 2 === 0) {
          questions.push({
            id: generateId(),
            type: "simple",
            question: `[À REMPLACER] Proposition de question ${i+1} pour le thème ${theme.name}?`,
            correctAnswer: Math.floor(Math.random() * 1000),
            unit: i % 3 === 0 ? "%" : i % 3 === 1 ? "€" : "",
            explanation: `[À REMPLACER] Explication pour la question ${i+1}`,
            theme: theme.id
          });
        } else {
          // Generate a multi-step question
          questions.push({
            id: generateId(),
            type: "multistep",
            question: `[À REMPLACER] Proposition de question à étapes ${i+1} pour le thème ${theme.name}?`,
            steps: [
              {
                question: `[À REMPLACER] Étape 1: Sous-question pour ${theme.name}?`,
                correctAnswer: Math.floor(Math.random() * 100),
                unit: i % 2 === 0 ? "kg" : "",
                explanation: `[À REMPLACER] Explication pour l'étape 1`
              },
              {
                question: `[À REMPLACER] Étape 2: Deuxième sous-question pour ${theme.name}?`,
                correctAnswer: Math.floor(Math.random() * 100),
                unit: i % 2 === 0 ? "kg" : "",
                explanation: `[À REMPLACER] Explication pour l'étape 2`
              }
            ],
            finalExplanation: `[À REMPLACER] Explication finale pour la question à étapes ${i+1}`,
            theme: theme.id
          });
        }
      }
    });
    
    return questions;
  };
  
  return (
    <div className="p-4 border rounded-md mb-6 bg-muted/20">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">Génération automatique de questions</h3>
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Version préliminaire</Badge>
      </div>
      
      <p className="text-sm mb-4 text-muted-foreground">
        Cette fonctionnalité génère actuellement des propositions de questions à compléter manuellement. 
        Une future mise à jour pourra intégrer l'IA pour générer des questions pertinentes par thème.
      </p>
      
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
        {isGenerating ? "Génération en cours..." : "Générer des propositions de questions"}
      </Button>
    </div>
  );
};

export default QuestionScheduler;
