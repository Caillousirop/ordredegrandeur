
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { toast } from "sonner";

export interface Question {
  id: string;
  question: string;
  correctAnswer: number;
  unit?: string;
  explanation?: string;
}

interface QuizQuestionProps {
  question: Question;
  onNext?: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onNext }) => {
  const [answer, setAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [userAnswer, setUserAnswer] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAnswer = parseFloat(answer);
    
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide.");
      return;
    }
    
    setUserAnswer(numAnswer);
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    setAnswer("");
    setSubmitted(false);
    setUserAnswer(0);
    if (onNext) onNext();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">{question.question}</CardTitle>
        <CardDescription>
          {question.unit ? `Répondez avec un nombre (${question.unit})` : "Répondez avec un nombre"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
              {question.unit && (
                <span className="text-sm text-muted-foreground">{question.unit}</span>
              )}
            </div>
            <Button type="submit" className="w-full">Valider</Button>
          </form>
        ) : (
          <div className="space-y-4">
            <AccuracyGauge 
              userAnswer={userAnswer} 
              correctAnswer={question.correctAnswer} 
              answerSubmitted={submitted} 
            />
            
            {question.explanation && (
              <div className="mt-4 p-3 bg-accent rounded-md text-sm">
                <p className="font-medium">Explication:</p>
                <p>{question.explanation}</p>
              </div>
            )}
            
            <Button onClick={handleNextQuestion} className="w-full">
              {onNext ? "Question suivante" : "Réessayer"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
