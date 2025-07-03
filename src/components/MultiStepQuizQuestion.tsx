
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MultiStepQuestion, QuizScore } from "./types";
import MultiStepQuizManager from "./quiz/MultiStepQuizManager";
import DirectAnswerSection from "./quiz/DirectAnswerSection";
import QuizStepsList from "./quiz/QuizStepsList";
import FloatingCalculator from "./quiz/FloatingCalculator";
import FinalExplanation from "./quiz/FinalExplanation";
import QuizModeSwitcher from "./quiz/QuizModeSwitcher";
import { Home } from "lucide-react";
import { formatUnitDisplay } from "@/utils/unitDisplay";

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
  const [questionId, setQuestionId] = useState<string>(question.id);

  // Détecter le changement de question et réinitialiser si nécessaire
  useEffect(() => {
    if (question.id !== questionId) {
      console.log("🔄 [MultiStepQuizQuestion] Changement de question détecté");
      console.log("Ancienne question ID:", questionId);
      console.log("Nouvelle question ID:", question.id);
      setQuestionId(question.id);
    }
  }, [question.id, questionId]);

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    }
  };

  const handleScore = (score: QuizScore) => {
    console.log("🎯 [MultiStepQuizQuestion] Score généré pour question ID:", question.id);
    console.log("🎯 [MultiStepQuizQuestion] Score:", score);
    
    // S'assurer que l'ID de la question est correct
    const correctedScore = {
      ...score,
      questionId: question.id
    };
    
    if (onScore) {
      onScore(correctedScore);
    }
  };

  // Obtenir l'unité de la dernière étape (réponse finale)
  const finalStep = question.steps[question.steps.length - 1];
  const unitDisplay = formatUnitDisplay(finalStep?.unit);

  return (
    <MultiStepQuizManager
      question={question}
      onNext={onNext}
      onScore={handleScore}
    >
      {({
        directFinalMode,
        directFinalAnswer,
        finalSubmitted,
        finalAccuracy,
        showAnswer,
        calculatorOpen,
        submitted,
        answers,
        anyStepSubmitted,
        themeColor,
        handleDirectFinalToggle,
        handleStepSubmit,
        handleInputChange,
        setDirectFinalAnswer,
        handleDirectFinalSubmit,
        setShowAnswer,
        setCalculatorOpen,
        handleNextQuestion
      }) => (
        <div className="w-full max-w-4xl mx-auto space-y-4">
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
              <CardTitle className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${themeColor}`}>
                {question.question}
                {unitDisplay && directFinalMode && (
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    {unitDisplay}
                  </div>
                )}
              </CardTitle>
              <CardDescription className="mt-2">
                Question à étapes multiples - Résolvez chaque étape ou tentez de répondre directement
              </CardDescription>
              {/* Debug info en développement */}
              {process.env.NODE_ENV === 'development' && (
                <CardDescription className="text-xs text-muted-foreground">
                  Question ID: {question.id}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-6 space-y-6 bg-transparent">
              <QuizModeSwitcher 
                directFinalMode={directFinalMode} 
                onToggle={handleDirectFinalToggle}
                anyStepSubmitted={anyStepSubmitted}
                onNextQuestion={handleNextQuestion}
              />

              {/* Direct Answer Section */}
              {directFinalMode && (
                <DirectAnswerSection
                  correctAnswer={question.steps[question.steps.length - 1].correctAnswer}
                  finalSubmitted={finalSubmitted}
                  directFinalAnswer={directFinalAnswer}
                  setDirectFinalAnswer={setDirectFinalAnswer}
                  handleDirectFinalSubmit={handleDirectFinalSubmit}
                  showAnswer={showAnswer}
                  setShowAnswer={setShowAnswer}
                  finalAccuracy={finalAccuracy}
                />
              )}

              {/* Step-by-Step Section */}
              {!directFinalMode && (
                <QuizStepsList 
                  steps={question.steps}
                  submitted={submitted}
                  answers={answers}
                  handleInputChange={handleInputChange}
                  handleStepSubmit={handleStepSubmit}
                />
              )}

              {/* Final explanation */}
              {(finalSubmitted && showAnswer) && (
                <FinalExplanation
                  finalExplanation={question.finalExplanation}
                  steps={question.steps}
                  onNextQuestion={handleNextQuestion}
                />
              )}
            </CardContent>
            
            {/* Calculatrice flottante */}
            <FloatingCalculator
              calculatorOpen={calculatorOpen}
              setCalculatorOpen={setCalculatorOpen}
            />
          </Card>
        </div>
      )}
    </MultiStepQuizManager>
  );
};

export default MultiStepQuizQuestion;
