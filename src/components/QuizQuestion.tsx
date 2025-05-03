
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { toast } from "sonner";
import { Question, QuizScore } from "./types";
import { themes } from "@/data/questions";

interface QuizQuestionProps {
  question: Question;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
  language: 'fr' | 'en';
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onNext,
  onScore,
  language = 'fr'
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Find theme color
  const themeColor = themes.find(t => t.id === question.theme)?.color || "from-primary to-primary/70";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAnswer = parseFloat(answer);
    
    if (isNaN(numAnswer)) {
      toast.error(language === 'fr' ? "Veuillez entrer un nombre valide." : "Please enter a valid number.");
      return;
    }
    
    setUserAnswer(numAnswer);
    setSubmitted(true);

    if (onScore) {
      // Calculate accuracy
      const maxDifference = question.correctAnswer;
      const actualDifference = Math.abs(numAnswer - question.correctAnswer);
      const calculatedAccuracy = Math.max(0, 100 - (actualDifference / maxDifference) * 100);
      const clampedAccuracy = Math.min(100, Math.max(0, calculatedAccuracy));
      
      onScore({
        questionId: question.id,
        accuracy: clampedAccuracy,
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

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-[1px] border-secondary/50 shadow-sm">
      <CardHeader className="text-white bg-transparent">
        <CardTitle className={`text-xl bg-gradient-to-r ${themeColor} bg-clip-text text-transparent`}>{question.question}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {language === 'fr' 
            ? `${question.unit ? `Répondez avec un nombre (${question.unit})` : "Répondez avec un nombre"}`
            : `${question.unit ? `Answer with a number (${question.unit})` : "Answer with a number"}`
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={language === 'fr' ? "Votre réponse" : "Your answer"}
                className="flex-grow"
              />
              {question.unit && (
                <span className="text-sm text-muted-foreground">{question.unit}</span>
              )}
            </div>
            <Button type="submit" className="w-full">
              {language === 'fr' ? "Valider" : "Submit"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <AccuracyGauge 
              userAnswer={userAnswer} 
              correctAnswer={question.correctAnswer} 
              answerSubmitted={submitted}
              showAnswer={showAnswer}
              onToggleShowAnswer={toggleShowAnswer}
            />
            
            {showAnswer && question.explanation && (
              <div className="mt-4 p-3 rounded-md border border-primary/20 text-sm">
                <p className="font-medium">{language === 'fr' ? "Explication:" : "Explanation:"}</p>
                <p>{language === 'fr' ? question.explanation : question.explanationEn || question.explanation}</p>
              </div>
            )}
            
            <Button onClick={handleNextQuestion} className="w-full">
              {onNext ? (language === 'fr' ? "Question suivante" : "Next question") : (language === 'fr' ? "Réessayer" : "Try again")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
