
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
  hintsMode: boolean;
  hintsRevealed: boolean[];
  allHintsRevealed: boolean;
  handleDirectFinalToggle: () => void;
  handleStepSubmit: (e: React.FormEvent, stepIndex: number) => void;
  handleInputChange: (stepIndex: number, value: string) => void;
  setDirectFinalAnswer: (value: string) => void;
  handleDirectFinalSubmit: (e: React.FormEvent) => void;
  setShowAnswer: (value: boolean) => void;
  setCalculatorOpen: (value: boolean) => void;
  handleNextQuestion: () => void;
  toggleHintsMode: () => void;
  revealHint: (index: number) => void;
}

const MultiStepQuizManager: React.FC<MultiStepQuizManagerProps> = ({ 
  question, 
  onNext, 
  onScore,
  children 
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
  const [anyStepSubmitted, setAnyStepSubmitted] = useState(false); // Track if any step has been submitted
  const [hintsMode, setHintsMode] = useState(false); // New state for hints mode
  const [hintsRevealed, setHintsRevealed] = useState<boolean[]>(Array(question.steps.length).fill(false)); // Track revealed hints

  // Find theme
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  // Calculate if all hints are revealed
  const allHintsRevealed = hintsRevealed.every(hint => hint === true);

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

  const toggleHintsMode = () => {
    setHintsMode(!hintsMode);
    if (directFinalMode) {
      setDirectFinalMode(false);
    }
  };

  const revealHint = (index: number) => {
    const newHintsRevealed = [...hintsRevealed];
    newHintsRevealed[index] = true;
    setHintsRevealed(newHintsRevealed);
    
    // Count revealed hints
    const revealedCount = newHintsRevealed.filter(hint => hint).length;
    
    // Show warning toast if many hints are revealed
    if (revealedCount === question.steps.length) {
      toast.warning("Tous les indices sont révélés. Vous ne gagnerez pas de points pour cette question.", {
        duration: 5000
      });
    } else if (revealedCount === question.steps.length - 1) {
      toast.warning("Attention, il ne vous reste qu'un indice à révéler avant de perdre tous les points.", {
        duration: 5000
      });
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
    setAnyStepSubmitted(true); // Mark that at least one step has been submitted

    // Calculate accuracy for this step
    const step = question.steps[stepIndex];
    const accuracy = calculateAccuracy(answers[stepIndex]!, step.correctAnswer);

    if (onScore) {
      onScore({
        questionId: question.id,
        accuracy,
        isMultiStep: true,
        directFinalAnswer: false,
        usedHints: hintsMode,
        hintsRevealedCount: hintsRevealed.filter(hint => hint).length
      });
    }
    
    // Show next question button immediately after answering any step
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
    setAnyStepSubmitted(true); // Mark that an answer has been submitted

    // Calculate accuracy compared to the last step's correct answer
    const finalStep = question.steps[question.steps.length - 1];
    const accuracy = calculateAccuracy(numAnswer, finalStep.correctAnswer);
    setFinalAccuracy(accuracy);

    // Show congratulations message for direct final answers that are accurate
    if (accuracy >= 80) {
      toast.success("🎉 Bravo ! Excellente réponse directe !", {
        duration: 5000
      });
    } else {
      // Show next question notification for other cases
      toast.success("Réponse enregistrée ! Vous pouvez passer à la question suivante.", {
        duration: 3000
      });
    }

    // Award bonus points for direct final answer (except if all hints were revealed)
    if (onScore) {
      onScore({
        questionId: question.id,
        // Give 50% bonus for direct final answer if accurate, but no points if all hints revealed
        accuracy: allHintsRevealed ? 0 : (accuracy * 1.5 > 100 ? 100 : accuracy * 1.5),
        isMultiStep: true,
        directFinalAnswer: true,
        skippedSteps: true,
        usedHints: hintsMode,
        hintsRevealedCount: hintsRevealed.filter(hint => hint).length
      });
    }
  };

  const handleInputChange = (stepIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[stepIndex] = parseFloat(value) || null;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
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
  });
};

export default MultiStepQuizManager;
