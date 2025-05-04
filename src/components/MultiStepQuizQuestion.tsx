
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { MultiStepQuestion, Step, QuizScore } from "./types";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { themes } from "@/data/questions";
import { CircleCheck, ArrowDown, ArrowUp, EyeIcon } from "lucide-react";

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
  const [directFinalMode, setDirectFinalMode] = useState(true); // Default to direct answer mode
  const [directFinalAnswer, setDirectFinalAnswer] = useState<string>("");
  const [finalSubmitted, setFinalSubmitted] = useState(false);
  const [finalAccuracy, setFinalAccuracy] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [skippedSteps, setSkippedSteps] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Find theme
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  useEffect(() => {
    // By default, only make the first step active
    setActiveSteps([0]);
    setExpandedStep(0);
  }, [question.steps.length]);

  const handleDirectFinalToggle = () => {
    setDirectFinalMode(!directFinalMode);
    if (!directFinalMode) {
      setSkippedSteps(true);
    }
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
    
    // If this isn't the last step, make the next one active
    if (stepIndex < question.steps.length - 1) {
      setActiveSteps(prevActiveSteps => {
        if (!prevActiveSteps.includes(stepIndex + 1)) {
          return [...prevActiveSteps, stepIndex + 1];
        }
        return prevActiveSteps;
      });
      setExpandedStep(stepIndex + 1);
    }
    
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
    
    // Show congratulations message for direct final answers that are accurate
    if (accuracy >= 80) {
      toast.success("🎉 Bravo ! Excellente réponse directe !", {
        duration: 5000,
      });
    }
    
    // Award bonus points for direct final answer
    if (onScore) {
      onScore({
        questionId: question.id,
        // Give 50% bonus for direct final answer if accurate
        accuracy: accuracy * 1.5 > 100 ? 100 : accuracy * 1.5, 
        isMultiStep: true,
        directFinalAnswer: true,
        skippedSteps: true
      });
    }
  };

  const calculateAccuracy = (userAnswer: number, correctAnswer: number): number => {
    // Use the same logic as in AccuracyGauge component
    const orderOfMagnitudeDifference = Math.abs(
      Math.floor(Math.log10(Math.abs(userAnswer))) - 
      Math.floor(Math.log10(Math.abs(correctAnswer)))
    );
    
    const relativeDifference = Math.abs(userAnswer - correctAnswer) / correctAnswer;
    
    let calculatedAccuracy = 0;
    
    if (orderOfMagnitudeDifference === 0) {
      if (relativeDifference < 0.1) {
        calculatedAccuracy = 100;
      } else if (relativeDifference < 0.25) {
        calculatedAccuracy = 90;
      } else if (relativeDifference < 0.5) {
        calculatedAccuracy = 80;
      } else if (relativeDifference < 1) {
        calculatedAccuracy = 70;
      } else {
        calculatedAccuracy = 60;
      }
    } else if (orderOfMagnitudeDifference === 1) {
      calculatedAccuracy = 40;
    } else {
      calculatedAccuracy = Math.max(0, 30 - (orderOfMagnitudeDifference - 1) * 10);
    }
    
    return Math.min(100, Math.max(0, calculatedAccuracy));
  };

  const handleInputChange = (stepIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[stepIndex] = parseFloat(value) || null;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (onNext) onNext();
  };
  
  const toggleStepExpansion = (stepIndex: number) => {
    if (!activeSteps.includes(stepIndex)) {
      // If step isn't active yet, make it active (skipping previous steps)
      setActiveSteps(prev => {
        const newActiveSteps = [...prev];
        if (!newActiveSteps.includes(stepIndex)) {
          newActiveSteps.push(stepIndex);
        }
        return newActiveSteps;
      });
      setSkippedSteps(true);
    }
    
    setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
  };
  
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const allStepsCompleted = submitted.every(step => step === true);

  return (
    <Card className="w-full max-w-4xl mx-auto border-[1px] border-secondary/50 shadow-sm">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${themeColor}`}>
              {question.question}
            </CardTitle>
            <CardDescription className="mt-2">
              Question à étapes multiples - Résolvez chaque étape ou tentez de répondre directement
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-6 bg-transparent">
        <div className="flex justify-end">
          <Button
            onClick={handleDirectFinalToggle}
            variant={directFinalMode ? "secondary" : "outline"}
            size="sm"
          >
            {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
          </Button>
        </div>

        {/* Direct Answer Section - Always shown first */}
        <div className="space-y-4 p-4 rounded-lg border border-border/40">
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
              {!showAnswer ? (
                <div className="space-y-4">
                  <AccuracyGauge 
                    userAnswer={parseFloat(directFinalAnswer)} 
                    correctAnswer={question.steps[question.steps.length - 1].correctAnswer} 
                    answerSubmitted={finalSubmitted}
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
                    userAnswer={parseFloat(directFinalAnswer)} 
                    correctAnswer={question.steps[question.steps.length - 1].correctAnswer} 
                    answerSubmitted={finalSubmitted} 
                  />
                  
                  {finalAccuracy >= 80 && (
                    <div className="mt-4 p-3 rounded-md border border-green-200 bg-green-50 dark:bg-green-900/20 text-sm">
                      <p className="font-medium flex items-center gap-2">
                        <CircleCheck className="h-5 w-5 text-green-500" />
                        Bravo pour cette excellente réponse directe !
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Step-by-Step Section */}
        <div className="space-y-6 mt-8">
          <h3 className="font-medium">Résoudre par étapes</h3>
          <div className="grid grid-cols-1 gap-6">
            {question.steps.map((step, index) => (
              <div 
                key={index} 
                className={`p-4 border rounded-md ${submitted[index] ? "" : ""}`}
              >
                <div 
                  className="flex justify-between items-center cursor-pointer mb-2"
                  onClick={() => toggleStepExpansion(index)}
                >
                  <h3 className="font-medium flex items-center">
                    <Badge 
                      variant={submitted[index] ? "default" : "outline"} 
                      className={`mr-2 ${submitted[index] ? "bg-primary" : ""}`}
                    >
                      {index + 1}
                    </Badge>
                    Étape {index + 1}: {step.question}
                  </h3>
                  <button className="text-muted-foreground">
                    {expandedStep === index ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  </button>
                </div>
                
                {expandedStep === index && (
                  <div className="mt-2 pt-2 border-t">
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
                          <div className="mt-4 p-3 rounded-md border border-primary/20 text-sm">
                            <p className="font-medium">Explication:</p>
                            <p>{step.explanation}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final explanation or next question button */}
        {(allStepsCompleted || (finalSubmitted && showAnswer)) && (
          <div className="p-4 mt-4 border-2 border-primary/20 rounded-md">
            {question.finalExplanation && (
              <div className="mt-2 text-sm mb-4">
                <p className="font-medium">Explication finale:</p>
                <p>{question.finalExplanation}</p>
              </div>
            )}
            <Button 
              onClick={handleNextQuestion} 
              className="w-full mt-2 bg-gradient-to-r from-primary to-primary/80"
            >
              Question suivante
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MultiStepQuizQuestion;
