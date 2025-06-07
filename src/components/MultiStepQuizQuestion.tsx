
import React from "react";
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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <MultiStepQuizManager
      question={question}
      onNext={onNext}
      onScore={onScore}
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
              </CardTitle>
              <CardDescription className="mt-2">
                Question à étapes multiples - Résolvez chaque étape ou tentez de répondre directement
              </CardDescription>
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
