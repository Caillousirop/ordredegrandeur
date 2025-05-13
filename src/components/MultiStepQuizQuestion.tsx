
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MultiStepQuestion, QuizScore } from "./types";
import { toast } from "sonner";
import { themes } from "@/data/themes";
import DirectAnswerSection from "./quiz/DirectAnswerSection";
import QuizStep from "./quiz/QuizStep";
import FloatingCalculator from "./quiz/FloatingCalculator";
import FinalExplanation from "./quiz/FinalExplanation";

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
  const [skippedSteps, setSkippedSteps] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  // Find theme
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  useEffect(() => {
    // By default, make all steps active
    setActiveSteps(Array.from({ length: question.steps.length }, (_, i) => i));
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
        duration: 5000
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
    // Modify the logic to never return 100% unless the answer is exact
    const exactMatch = userAnswer === correctAnswer;
    
    // Use the same logic as before for other cases
    const orderOfMagnitudeDifference = Math.abs(Math.floor(Math.log10(Math.abs(userAnswer))) - Math.floor(Math.log10(Math.abs(correctAnswer))));
    const relativeDifference = Math.abs(userAnswer - correctAnswer) / correctAnswer;
    
    let calculatedAccuracy = 0;
    
    if (exactMatch) {
      calculatedAccuracy = 100;
    } else if (orderOfMagnitudeDifference === 0) {
      if (relativeDifference < 0.05) {
        calculatedAccuracy = 99; // Very close but not exact
      } else if (relativeDifference < 0.1) {
        calculatedAccuracy = 95; // Very close
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
          <Button onClick={handleDirectFinalToggle} variant={directFinalMode ? "secondary" : "outline"} size="sm">
            {directFinalMode ? "Résoudre par étapes" : "Réponse directe"}
          </Button>
        </div>

        {/* Direct Answer Section */}
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

        {/* Step-by-Step Section */}
        <div className="space-y-6 mt-8">
          <h3 className="font-medium">Résoudre par étapes</h3>
          <div className="grid grid-cols-1 gap-6">
            {question.steps.map((step, index) => (
              <QuizStep
                key={index}
                step={step}
                index={index}
                submitted={submitted[index]}
                answer={answers[index]}
                onInputChange={(value) => handleInputChange(index, value)}
                onSubmit={(e) => handleStepSubmit(e, index)}
              />
            ))}
          </div>
        </div>

        {/* Final explanation or next question button */}
        {(allStepsCompleted || finalSubmitted && showAnswer) && (
          <FinalExplanation
            finalExplanation={question.finalExplanation}
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
  );
};

export default MultiStepQuizQuestion;
