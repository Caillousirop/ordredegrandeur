
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { MultiStepQuestion, Step, QuizScore } from "./types";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { themes } from "@/data/questions";

interface MultiStepQuizQuestionProps {
  question: MultiStepQuestion;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
}

const MultiStepQuizQuestion: React.FC<MultiStepQuizQuestionProps> = ({ 
  question, 
  onNext,
  onScore 
}) => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(question.steps.length).fill(null));
  const [submitted, setSubmitted] = useState<boolean[]>(Array(question.steps.length).fill(false));
  const [directFinalMode, setDirectFinalMode] = useState(false);
  const [directFinalAnswer, setDirectFinalAnswer] = useState<string>("");
  const [finalSubmitted, setFinalSubmitted] = useState(false);
  const [finalAccuracy, setFinalAccuracy] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  
  // Find theme color
  const themeColor = themes.find(t => t.id === question.theme)?.color || "from-primary to-primary/70";

  useEffect(() => {
    // By default, make all steps active
    setActiveSteps(Array.from({ length: question.steps.length }, (_, i) => i));
  }, [question.steps.length]);

  const handleDirectFinalToggle = () => {
    setDirectFinalMode(!directFinalMode);
  };

  const handleStepSubmit = (e: React.FormEvent, stepIndex: number) => {
    e.preventDefault();
    
    if (answers[stepIndex] === null) {
      toast.error("Veuillez entrer une réponse valide");
      return;
    }

    const newSubmitted = [...submitted];
    newSubmitted[stepIndex] = true;
    setSubmitted(newSubmitted);

    // Calculate accuracy for this step
    const step = question.steps[stepIndex];
    const accuracy = calculateAccuracy(answers[stepIndex]!, step.correctAnswer);
    
    if (onScore) {
      onScore({
        questionId: question.id,
        accuracy,
        isMultiStep: true,
        directFinalAnswer: false
      });
    }
  };

  const handleDirectFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAnswer = parseFloat(directFinalAnswer);
    
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide");
      return;
    }
    
    setFinalSubmitted(true);
    
    // Calculate accuracy compared to the last step's correct answer
    const finalStep = question.steps[question.steps.length - 1];
    const accuracy = calculateAccuracy(numAnswer, finalStep.correctAnswer);
    setFinalAccuracy(accuracy);
    
    // Award bonus points for direct final answer
    if (onScore) {
      onScore({
        questionId: question.id,
        // Give 50% bonus for direct final answer if accurate
        accuracy: accuracy * 1.5 > 100 ? 100 : accuracy * 1.5, 
        isMultiStep: true,
        directFinalAnswer: true
      });
    }
  };

  const calculateAccuracy = (userAnswer: number, correctAnswer: number): number => {
    const maxDifference = correctAnswer;
    const actualDifference = Math.abs(userAnswer - correctAnswer);
    const accuracy = Math.max(0, 100 - (actualDifference / maxDifference) * 100);
    return Math.min(100, Math.max(0, accuracy));
  };

  const handleInputChange = (stepIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[stepIndex] = parseFloat(value) || null;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (onNext) onNext();
  };

  const allStepsCompleted = submitted.every(step => step === true);
  const completionPercentage = (submitted.filter(Boolean).length / question.steps.length) * 100;

  return (
    <Card className="w-full max-w-4xl mx-auto border-2 border-secondary/50">
      <CardHeader className={`bg-gradient-to-r ${themeColor} border-b border-border/50`}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl md:text-2xl font-bold text-white">
              {question.question}
            </CardTitle>
            <CardDescription className="mt-2 text-white/90">
              Question à étapes multiples - Résolvez chaque étape ou tentez de répondre directement
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Progression</h3>
            <div className="flex items-center gap-2">
              <Progress value={completionPercentage} className="h-2 w-24" />
              <span className="text-xs text-muted-foreground">
                {Math.round(completionPercentage)}%
              </span>
            </div>
          </div>
          
          <Button
            onClick={handleDirectFinalToggle}
            variant={directFinalMode ? "secondary" : "outline"}
            size="sm"
          >
            {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
          </Button>
        </div>

        {directFinalMode ? (
          <div className="space-y-4 p-4 bg-accent/20 rounded-lg">
            <h3 className="font-medium">Réponse directe <Badge variant="secondary" className="ml-1">+50% points</Badge></h3>
            {!finalSubmitted ? (
              <form onSubmit={handleDirectFinalSubmit} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={directFinalAnswer}
                    onChange={(e) => setDirectFinalAnswer(e.target.value)}
                    placeholder="Votre réponse finale"
                    className="flex-grow"
                  />
                  {question.steps[question.steps.length - 1].unit && (
                    <span className="text-sm text-muted-foreground">
                      {question.steps[question.steps.length - 1].unit}
                    </span>
                  )}
                </div>
                <Button type="submit" className="w-full">Valider</Button>
              </form>
            ) : (
              <div className="space-y-4">
                <AccuracyGauge 
                  userAnswer={parseFloat(directFinalAnswer)} 
                  correctAnswer={question.steps[question.steps.length - 1].correctAnswer} 
                  answerSubmitted={finalSubmitted} 
                />
                
                {question.finalExplanation && (
                  <div className="mt-4 p-3 bg-accent/20 rounded-md text-sm">
                    <p className="font-medium">Explication finale:</p>
                    <p>{question.finalExplanation}</p>
                  </div>
                )}
                
                <Button onClick={handleNextQuestion} className="w-full mt-4">
                  Question suivante
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {question.steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`p-4 border rounded-md ${submitted[index] ? "bg-accent/10" : "bg-card/50"}`}
                >
                  <h3 className="font-medium mb-3">
                    Étape {index + 1}: {step.question}
                  </h3>
                  
                  {!submitted[index] ? (
                    <form onSubmit={(e) => handleStepSubmit(e, index)} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Input
                          type="text"
                          value={answers[index]?.toString() || ""}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          placeholder="Votre réponse"
                          className="flex-grow"
                        />
                        {step.unit && (
                          <span className="text-sm text-muted-foreground">
                            {step.unit}
                          </span>
                        )}
                      </div>
                      <Button type="submit" className="w-full">Valider</Button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <AccuracyGauge 
                        userAnswer={answers[index]!} 
                        correctAnswer={step.correctAnswer} 
                        answerSubmitted={true} 
                      />
                      
                      {step.explanation && (
                        <div className="mt-4 p-3 bg-accent/20 rounded-md text-sm">
                          <p className="font-medium">Explication:</p>
                          <p>{step.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {allStepsCompleted && (
              <div className="p-4 mt-4 border-2 border-primary/20 rounded-md bg-accent/10">
                <h3 className="font-medium">Félicitations ! Vous avez complété toutes les étapes.</h3>
                {question.finalExplanation && (
                  <div className="mt-2 text-sm">
                    <p className="font-medium">Conclusion finale:</p>
                    <p>{question.finalExplanation}</p>
                  </div>
                )}
                <Button 
                  onClick={handleNextQuestion} 
                  className="w-full mt-4 bg-gradient-to-r from-primary to-primary/80"
                >
                  Question suivante
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MultiStepQuizQuestion;
