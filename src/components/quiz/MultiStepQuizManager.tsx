
import React, { useState, useEffect } from "react";
import { MultiStepQuestion, QuizScore } from "../types";
import { calculateAccuracy } from "./CalculateAccuracy";
import { themes } from "@/data/themes";
import { toast } from "sonner";

interface MultiStepQuizManagerProps {
  question: MultiStepQuestion;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
  children: (props: MultiStepQuizManagerChildrenProps) => React.ReactNode;
}

export interface MultiStepQuizManagerChildrenProps {
  answers: (number | null)[];
  submitted: boolean[];
  directFinalMode: boolean;
  directFinalAnswer: string;
  finalSubmitted: boolean;
  finalAccuracy: number;
  activeSteps: number[];
  skippedSteps: boolean;
  showAnswer: boolean;
  calculatorOpen: boolean;
  anyStepSubmitted: boolean;
  themeColor: string;
  handleDirectFinalToggle: () => void;
  handleStepSubmit: (e: React.FormEvent, stepIndex: number) => void;
  handleInputChange: (stepIndex: number, value: string) => void;
  setDirectFinalAnswer: (value: string) => void;
  handleDirectFinalSubmit: (e: React.FormEvent) => void;
  setShowAnswer: (value: boolean) => void;
  setCalculatorOpen: (value: boolean) => void;
  handleNextQuestion: () => void;
}

const MultiStepQuizManager: React.FC<MultiStepQuizManagerProps> = ({ 
  question, 
  onNext, 
  onScore,
  children 
}) => {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(question.steps.length).fill(null));
  const [submitted, setSubmitted] = useState<boolean[]>(Array(question.steps.length).fill(false));
  const [directFinalMode, setDirectFinalMode] = useState(true);
  const [directFinalAnswer, setDirectFinalAnswer] = useState<string>("");
  const [finalSubmitted, setFinalSubmitted] = useState(false);
  const [finalAccuracy, setFinalAccuracy] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [skippedSteps, setSkippedSteps] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [anyStepSubmitted, setAnyStepSubmitted] = useState(false);

  // Find theme
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  // Reset all states when question changes
  useEffect(() => {
    console.log("Question changed, resetting states");
    setAnswers(Array(question.steps.length).fill(null));
    setSubmitted(Array(question.steps.length).fill(false));
    setDirectFinalMode(true);
    setDirectFinalAnswer("");
    setFinalSubmitted(false);
    setFinalAccuracy(0);
    setSkippedSteps(false);
    setShowAnswer(false);
    setCalculatorOpen(false);
    setAnyStepSubmitted(false);
    setActiveSteps(Array.from({ length: question.steps.length }, (_, i) => i));
  }, [question.id, question.steps.length]);

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
    setAnyStepSubmitted(true);

    // Calculate accuracy for this step
    const step = question.steps[stepIndex];
    const accuracy = calculateAccuracy(answers[stepIndex]!, step.correctAnswer);

    console.log("Soumission d'une étape:", {
      stepIndex,
      userAnswer: answers[stepIndex],
      correctAnswer: step.correctAnswer,
      accuracy,
      questionId: question.id
    });

    if (onScore) {
      onScore({
        questionId: question.id,
        accuracy,
        isMultiStep: true,
        directFinalAnswer: false
      });
    }
    
    toast.success("Réponse enregistrée ! Vous pouvez passer à la question suivante.", {
      duration: 3000
    });
  };

  const handleDirectFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAnswer = parseFloat(directFinalAnswer);
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide");
      return;
    }
    setFinalSubmitted(true);
    setAnyStepSubmitted(true);

    // Calculate accuracy compared to the last step's correct answer
    const finalStep = question.steps[question.steps.length - 1];
    const accuracy = calculateAccuracy(numAnswer, finalStep.correctAnswer);
    setFinalAccuracy(accuracy);

    console.log("Soumission réponse directe:", {
      userAnswer: numAnswer,
      correctAnswer: finalStep.correctAnswer,
      accuracy,
      questionId: question.id
    });

    if (accuracy >= 80) {
      toast.success("🎉 Bravo ! Excellente réponse directe !", {
        duration: 5000
      });
    } else {
      toast.success("Réponse enregistrée ! Vous pouvez passer à la question suivante.", {
        duration: 3000
      });
    }

    // Award bonus points for direct final answer
    if (onScore) {
      onScore({
        questionId: question.id,
        accuracy: accuracy * 1.5 > 100 ? 100 : accuracy * 1.5,
        isMultiStep: true,
        directFinalAnswer: true,
        skippedSteps: true
      });
    }
  };

  const handleInputChange = (stepIndex: number, value: string) => {
    const newAnswers = [...answers];
    // Utiliser parseFloat pour convertir la valeur (qui peut contenir des décimaux)
    newAnswers[stepIndex] = parseFloat(value) || null;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    console.log("Next question clicked");
    if (onNext) onNext();
  };

  return children({
    answers,
    submitted,
    directFinalMode,
    directFinalAnswer,
    finalSubmitted,
    finalAccuracy,
    activeSteps,
    skippedSteps,
    showAnswer,
    calculatorOpen,
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
  });
};

export default MultiStepQuizManager;
