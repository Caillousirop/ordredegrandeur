
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
        hintsMode,
        hintsRevealed,
        allHintsRevealed,
        handleDirectFinalToggle,
        handleStepSubmit,
        handleInputChange,
        setDirectFinalAnswer,
        handleDirectFinalSubmit,
        setShowAnswer,
        setCalculatorOpen,
        handleNextQuestion,
        toggleHintsMode,
        revealHint
      }) => (
        <Card className="w-full max-w-4xl mx-auto border-[1px] border-secondary/50 shadow-sm">
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${themeColor}`}>
                  {question.question}
                </CardTitle>
                <CardDescription className="mt-2">
                  Question à étapes multiples - Résolvez chaque étape, utilisez des indices, ou tentez de répondre directement
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 bg-transparent">
            <QuizModeSwitcher 
              directFinalMode={directFinalMode} 
              hintsMode={hintsMode}
              onToggle={handleDirectFinalToggle}
              onToggleHints={toggleHintsMode}
              anyStepSubmitted={anyStepSubmitted}
              onNextQuestion={handleNextQuestion}
              allHintsRevealed={allHintsRevealed}
            />
            
            {/* Warning message when all hints are revealed */}
            {hintsMode && allHintsRevealed && !directFinalMode && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm">
                <p className="font-medium">Attention :</p>
                <p>Tous les indices ont été révélés. Vous ne gagnerez pas de points pour cette question.</p>
              </div>
            )}

            {/* Direct Answer Section - only show when not in hints mode */}
            {!hintsMode && directFinalMode && (
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

            {/* Step-by-Step or Hints Section */}
            {((!directFinalMode && !hintsMode) || hintsMode) && (
              <QuizStepsList 
                steps={question.steps}
                submitted={submitted}
                answers={answers}
                handleInputChange={handleInputChange}
                handleStepSubmit={handleStepSubmit}
                hintsMode={hintsMode}
                hintsRevealed={hintsRevealed}
                revealHint={revealHint}
                allHintsRevealed={allHintsRevealed}
              />
            )}

            {/* Final explanation or next question button */}
            {(finalSubmitted && showAnswer) && (
              <FinalExplanation
                finalExplanation={question.finalExplanation}
                onNextQuestion={handleNextQuestion}
              />
            )}
            
            {/* Extra Next Question button at the bottom if any step is submitted */}
            {anyStepSubmitted && (
              <div className="mt-6 flex justify-center">
                <Button 
                  onClick={handleNextQuestion} 
                  variant="outline" 
                  className="px-6"
                >
                  Question suivante
                </Button>
              </div>
            )}
          </CardContent>
          
          {/* Calculatrice flottante */}
          <FloatingCalculator
            calculatorOpen={calculatorOpen}
            setCalculatorOpen={setCalculatorOpen}
          />
        </Card>
      )}
    </MultiStepQuizManager>
  );
};

export default MultiStepQuizQuestion;
