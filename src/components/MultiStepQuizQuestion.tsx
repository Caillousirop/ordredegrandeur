import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AccuracyGauge from "./AccuracyGauge";
import { toast } from "sonner";
import { MultiStepQuestion, QuizScore } from "./types";
import { themes } from "@/data/themes";
import { Home } from "lucide-react";
import { calculateAccuracy } from "./quiz/CalculateAccuracy";
import { formatUnitDisplay } from "@/utils/unitDisplay";
import NumberInput from "./NumberInput";
import QuizStepsList from "./quiz/QuizStepsList";
import DirectAnswerSection from "./quiz/DirectAnswerSection";
import FinalExplanation from "./quiz/FinalExplanation";
import { useQuestionTracking } from "@/hooks/useQuestionTracking";

interface MultiStepQuizQuestionProps {
  question: MultiStepQuestion;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
  onGoHome?: () => void;
}

const MultiStepQuizQuestion: React.FC<MultiStepQuizQuestionProps> = ({ 
  question, 
  onNext,
  onScore,
  onGoHome
}) => {
  const [directAnswer, setDirectAnswer] = useState<string>("");
  const [directAnswerSubmitted, setDirectAnswerSubmitted] = useState(false);
  const [directAnswerValue, setDirectAnswerValue] = useState<number>(0);
  const [stepAnswers, setStepAnswers] = useState<(number | null)[]>(new Array(question.steps.length).fill(null));
  const [stepSubmitted, setStepSubmitted] = useState<boolean[]>(new Array(question.steps.length).fill(false));
  const [finalAnswerFromSteps, setFinalAnswerFromSteps] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState<"direct" | "steps">("direct");
  const [showFinalExplanation, setShowFinalExplanation] = useState(false);
  const [skippedSteps, setSkippedSteps] = useState(false);
  
  const { markQuestionAsViewed, updateQuestionView, isQuestionViewed } = useQuestionTracking();

  // Find theme color
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  // Marquer la question comme vue quand elle est affichée
  useEffect(() => {
    if (question && !isQuestionViewed(question.id)) {
      markQuestionAsViewed(question.id);
    }
  }, [question, markQuestionAsViewed, isQuestionViewed]);

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numAnswer = parseFloat(directAnswer);
    
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide.");
      return;
    }
    
    setDirectAnswerValue(numAnswer);
    setDirectAnswerSubmitted(true);

    // Calculate final answer from all steps for comparison
    const calculatedFinalAnswer = question.steps.reduce((result, step) => {
      return step.correctAnswer;
    }, 0);

    const calculatedAccuracy = calculateAccuracy(numAnswer, calculatedFinalAnswer);

    // Mettre à jour la vue de la question avec la réponse directe
    updateQuestionView(question.id, numAnswer, calculatedAccuracy);

    if (onScore) {
      onScore({
        questionId: question.id,
        accuracy: calculatedAccuracy,
        isMultiStep: true,
        directFinalAnswer: true,
        skippedSteps: false,
        usedHints: false,
        hintsRevealedCount: 0
      });
    }
  };

  const handleStepInputChange = (stepIndex: number, value: string) => {
    const newAnswers = [...stepAnswers];
    const numValue = parseFloat(value);
    newAnswers[stepIndex] = isNaN(numValue) ? null : numValue;
    setStepAnswers(newAnswers);
  };

  const handleStepSubmit = (e: React.FormEvent, stepIndex: number) => {
    e.preventDefault();
    
    if (stepAnswers[stepIndex] === null) {
      toast.error("Veuillez entrer une réponse pour cette étape.");
      return;
    }

    const newSubmitted = [...stepSubmitted];
    newSubmitted[stepIndex] = true;
    setStepSubmitted(newSubmitted);

    // Check if all steps are completed
    const allStepsCompleted = newSubmitted.every(submitted => submitted);
    
    if (allStepsCompleted) {
      // Calculate the final answer from the last step
      const finalAnswer = stepAnswers[stepAnswers.length - 1];
      setFinalAnswerFromSteps(finalAnswer);
      
      if (finalAnswer !== null) {
        const calculatedFinalAnswer = question.steps[question.steps.length - 1].correctAnswer;
        const calculatedAccuracy = calculateAccuracy(finalAnswer, calculatedFinalAnswer);

        // Mettre à jour la vue de la question avec la réponse par étapes
        updateQuestionView(question.id, finalAnswer, calculatedAccuracy);

        if (onScore) {
          onScore({
            questionId: question.id,
            accuracy: calculatedAccuracy,
            isMultiStep: true,
            directFinalAnswer: false,
            skippedSteps: skippedSteps,
            usedHints: false,
            hintsRevealedCount: 0
          });
        }
      }
    }
  };

  const handleModeSwitch = (mode: "direct" | "steps") => {
    setCurrentMode(mode);
    if (mode === "steps" && !directAnswerSubmitted) {
      setSkippedSteps(true);
    }
  };

  const handleShowFinalExplanation = () => {
    setShowFinalExplanation(true);
  };

  const handleNextQuestion = () => {
    // Reset all states
    setDirectAnswer("");
    setDirectAnswerSubmitted(false);
    setDirectAnswerValue(0);
    setStepAnswers(new Array(question.steps.length).fill(null));
    setStepSubmitted(new Array(question.steps.length).fill(false));
    setFinalAnswerFromSteps(null);
    setCurrentMode("direct");
    setShowFinalExplanation(false);
    setSkippedSteps(false);
    
    if (onNext) onNext();
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    }
  };

  const isCompleted = directAnswerSubmitted || stepSubmitted.every(submitted => submitted);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
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
            <Badge variant="secondary" className="mr-2">Multi-étapes</Badge>
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {!isCompleted && (
            <div className="flex gap-2 mb-4">
              <Button
                variant={currentMode === "direct" ? "default" : "outline"}
                onClick={() => handleModeSwitch("direct")}
                size="sm"
              >
                Réponse directe
              </Button>
              <Button
                variant={currentMode === "steps" ? "default" : "outline"}
                onClick={() => handleModeSwitch("steps")}
                size="sm"
              >
                Résoudre par étapes
              </Button>
            </div>
          )}

          {currentMode === "direct" && !directAnswerSubmitted && (
            <DirectAnswerSection
              directAnswer={directAnswer}
              onDirectAnswerChange={setDirectAnswer}
              onDirectSubmit={handleDirectSubmit}
            />
          )}

          {currentMode === "steps" && (
            <QuizStepsList
              steps={question.steps}
              submitted={stepSubmitted}
              answers={stepAnswers}
              handleInputChange={handleStepInputChange}
              handleStepSubmit={handleStepSubmit}
            />
          )}

          {isCompleted && (
            <div className="space-y-4">
              {directAnswerSubmitted && (
                <AccuracyGauge 
                  userAnswer={directAnswerValue} 
                  correctAnswer={question.steps[question.steps.length - 1].correctAnswer}
                  answerSubmitted={true}
                />
              )}

              {finalAnswerFromSteps !== null && (
                <AccuracyGauge 
                  userAnswer={finalAnswerFromSteps} 
                  correctAnswer={question.steps[question.steps.length - 1].correctAnswer}
                  answerSubmitted={true}
                />
              )}

              {!showFinalExplanation ? (
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={handleShowFinalExplanation}
                  >
                    Voir l'explication finale
                  </Button>
                </div>
              ) : (
                <FinalExplanation 
                  finalExplanation={question.finalExplanation}
                  steps={question.steps}
                />
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

export default MultiStepQuizQuestion;
