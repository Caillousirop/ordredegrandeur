import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AccuracyGauge from "./AccuracyGauge";
import { toast } from "sonner";
import { Question, QuizScore } from "./types";
import { themes } from "@/data/themes";
import { EyeIcon, Home } from "lucide-react";
import { calculateAccuracy } from "./quiz/CalculateAccuracy";
import { formatUnitDisplay } from "@/utils/unitDisplay";
import NumberInput from "./NumberInput";
import { useQuestionTracking } from "@/hooks/useQuestionTracking";

interface QuizQuestionProps {
  question: Question;
  onNext?: () => void;
  onScore?: (score: QuizScore) => void;
  onGoHome?: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onNext,
  onScore,
  onGoHome
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Capturer la question au moment de l'affichage pour éviter qu'elle change pendant le traitement
  const [capturedQuestion, setCapturedQuestion] = useState<Question>(question);
  
  const { markQuestionAsViewed, updateQuestionView, isQuestionViewed } = useQuestionTracking();

  // Find theme color - utiliser la question prop pour le thème (ne change pas pendant le traitement)
  const theme = themes.find(t => t.id === question.theme);
  const themeColor = theme?.color || "from-primary to-primary/70";

  const unitDisplay = formatUnitDisplay(capturedQuestion.unit);

  // Capturer une nouvelle question seulement si on n'a pas encore soumis
  useEffect(() => {
    if (!submitted && question.id !== capturedQuestion.id) {
      setCapturedQuestion(question);
      // Reset l'état quand on change de question
      setAnswer("");
      setUserAnswer(0);
      setShowAnswer(false);
    }
  }, [question, submitted, capturedQuestion.id]);

  // Marquer la question comme vue quand elle est affichée
  useEffect(() => {
    if (capturedQuestion && !isQuestionViewed(capturedQuestion.id)) {
      markQuestionAsViewed(capturedQuestion.id);
    }
  }, [capturedQuestion, markQuestionAsViewed, isQuestionViewed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Utiliser parseFloat directement sur la valeur nettoyée
    const numAnswer = parseFloat(answer);
    
    if (isNaN(numAnswer)) {
      toast.error("Veuillez entrer un nombre valide.");
      return;
    }

    // Utiliser la question capturée pour éviter qu'elle change pendant le traitement
    setUserAnswer(numAnswer);
    setSubmitted(true);

    // Use the centralized accuracy calculation avec la question capturée
    const calculatedAccuracy = calculateAccuracy(numAnswer, capturedQuestion.correctAnswer);

    // Mettre à jour la vue de la question avec la réponse
    updateQuestionView(capturedQuestion.id, numAnswer, calculatedAccuracy);

    if (onScore) {
      onScore({
        questionId: capturedQuestion.id,
        accuracy: calculatedAccuracy,
        isMultiStep: false,
        directFinalAnswer: false
      });
    }
  };

  const handleNextQuestion = () => {
    setAnswer("");
    setSubmitted(false);
    setUserAnswer(0);
    setShowAnswer(false);
    if (onNext) onNext();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
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
            {capturedQuestion.question}
            {unitDisplay && (
              <div className="text-sm font-normal text-muted-foreground mt-1">
                {unitDisplay}
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2">
                <NumberInput
                  value={answer}
                  onChange={setAnswer}
                  placeholder="Votre réponse"
                  className="flex-grow"
                />
              </div>
              <Button type="submit" className="w-full">Valider</Button>
            </form>
          ) : (
            <div className="space-y-4">
              {!showAnswer ? (
                <div className="space-y-4">
                  <AccuracyGauge 
                    userAnswer={userAnswer} 
                    correctAnswer={capturedQuestion.correctAnswer} 
                    answerSubmitted={submitted}
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
                    userAnswer={userAnswer} 
                    correctAnswer={capturedQuestion.correctAnswer} 
                    answerSubmitted={submitted} 
                  />
                  
                  {capturedQuestion.explanation && (
                    <div className="mt-4 p-3 rounded-md border border-primary/20 text-sm">
                      <p className="font-medium">Explication:</p>
                      <p>{capturedQuestion.explanation}</p>
                      {capturedQuestion.unit && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Réponse: {capturedQuestion.correctAnswer.toLocaleString()} {capturedQuestion.unit}
                        </p>
                      )}
                    </div>
                  )}
                </div>
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

export default QuizQuestion;
