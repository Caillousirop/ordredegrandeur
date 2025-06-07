
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { toast } from "sonner";
import { Question, QuizScore } from "./types";
import { themes } from "@/data/themes";
import { EyeIcon, Home } from "lucide-react";
import { calculateAccuracy } from "./quiz/CalculateAccuracy";

interface QuizQuestionProps {
  question: Question;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
  onGoHome?: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onNext,
  onScore,
  onGoHome
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Find theme color
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAnswer = parseFloat(answer);
    
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide.");
      return;
    }
    
    setUserAnswer(numAnswer);
    setSubmitted(true);

    if (onScore) {
      // Use the centralized accuracy calculation
      const calculatedAccuracy = calculateAccuracy(numAnswer, question.correctAnswer);
      
      onScore({
        questionId: question.id,
        accuracy: calculatedAccuracy,
        isMultiStep: false,
        directFinalAnswer: false
      });
    }
  };

  const handleNextQuestion = () => {
    setAnswer("");
    setSubmitted(false);
    setUserAnswer(0);
    setShowAnswer(false);
    if (onNext) onNext();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Bouton retour en haut */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={handleGoHome}
          className="flex items-center gap-2"
        >
          <Home size={16} />
          Retourner à l'accueil
        </Button>
      </div>

      <Card className="border-[1px] border-secondary/50 shadow-sm">
        <CardHeader className="border-b border-border/50">
          <CardTitle className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${themeColor}`}>
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Votre réponse"
                  className="flex-grow"
                />
              </div>
              <Button type="submit" className="w-full">Valider</Button>
            </form>
          ) : (
            <div className="space-y-4">
              {!showAnswer ? (
                <div className="space-y-4">
                  <AccuracyGauge 
                    userAnswer={userAnswer} 
                    correctAnswer={question.correctAnswer} 
                    answerSubmitted={submitted}
                  />
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      onClick={handleShowAnswer} 
                      className="flex items-center gap-2"
                    >
                      <EyeIcon size={16} />
                      Voir la réponse
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <AccuracyGauge 
                    userAnswer={userAnswer} 
                    correctAnswer={question.correctAnswer} 
                    answerSubmitted={submitted} 
                  />
                  
                  {question.explanation && (
                    <div className="mt-4 p-3 rounded-md border border-primary/20 text-sm">
                      <p className="font-medium">Explication:</p>
                      <p>{question.explanation}</p>
                      {question.unit && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Réponse: {question.correctAnswer.toLocaleString()} {question.unit}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
              
              <Button onClick={handleNextQuestion} className="w-full">
                {onNext ? "Question suivante" : "Réessayer"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
