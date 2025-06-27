
import React, { useState, useEffect } from "react";
import { Question } from "../types";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Timer, Play, ArrowLeft } from "lucide-react";
import { Input } from "../ui/input";
import { calculateAccuracy } from "../quiz/CalculateAccuracy";
import { toast } from "sonner";
import NumberInput from "../NumberInput";

interface Challenge30sContainerProps {
  questions: Question[];
  onGoHome: () => void;
}

const Challenge30sContainer: React.FC<Challenge30sContainerProps> = ({
  questions,
  onGoHome
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Filter only simple questions
  const simpleQuestions = questions.filter(q => q.type === "simple");

  // Timer logic - runs continuously during the game
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsTimerRunning(false);
            handleTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const startTimer = () => {
    setHasStarted(true);
    setIsTimerRunning(true);
    setTimeLeft(30);
    setScore(0);
    setQuestionsAnswered(0);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setIsGameFinished(false);
  };

  const handleTimeUp = () => {
    setIsGameFinished(true);
    // Calculer le score final basé sur les bonnes réponses ET le nombre de questions répondues
    const finalScore = Math.round((score / Math.max(questionsAnswered, 1)) * questionsAnswered * 10);
    toast.success(`Temps écoulé ! Score final: ${finalScore} points (${score}/${questionsAnswered} correctes)`);
  };

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim() || isGameFinished) return;

    const numericAnswer = parseFloat(userAnswer.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    if (isNaN(numericAnswer)) {
      toast.error("Réponse invalide");
      return;
    }

    const accuracy = calculateAccuracy(numericAnswer, currentQuestion.correctAnswer);
    
    if (accuracy >= 50) {
      setScore(prev => prev + 1);
      toast.success(`Correct ! (+1 point)`);
    } else {
      toast.error(`Incorrect`);
    }

    setQuestionsAnswered(prev => prev + 1);
    
    // Move to next question immediately
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (simpleQuestions.length > 1) {
      // Get a random question different from current one
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * simpleQuestions.length);
      } while (newIndex === currentQuestionIndex && simpleQuestions.length > 1);
      setCurrentQuestionIndex(newIndex);
    }
    setUserAnswer("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && hasStarted && !isGameFinished) {
      handleAnswerSubmit();
    }
  };

  // Calculer le score final pour l'affichage
  const getFinalScore = () => {
    if (questionsAnswered === 0) return 0;
    return Math.round((score / questionsAnswered) * questionsAnswered * 10);
  };

  if (simpleQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-6 w-6" />
              Défi 30s
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-4">
              Aucune question simple disponible pour ce défi.
            </p>
            <Button onClick={onGoHome} className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-6 w-6" />
              Défi 30s
            </CardTitle>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Score: {score}/{questionsAnswered}
              </div>
              <Button 
                onClick={onGoHome} 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Accueil
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {!hasStarted ? (
            <div className="text-center">
              <div className="mb-6">
                <Timer className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Prêt pour le défi ?</h3>
                <p className="text-muted-foreground mb-4">
                  Répondez au maximum de questions en 30 secondes !
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Système de score :</strong> Votre score final dépend à la fois du pourcentage de bonnes réponses ET du nombre de questions auxquelles vous répondez. Plus vous répondez à de questions correctement, plus votre score sera élevé !
                  </p>
                </div>
              </div>
              <Button onClick={startTimer} size="lg" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Lancer le chrono
              </Button>
            </div>
          ) : isGameFinished ? (
            <div className="text-center">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {getFinalScore()} pts
                </div>
                <p className="text-lg text-muted-foreground mb-2">
                  {score}/{questionsAnswered} bonnes réponses ({questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0}%)
                </p>
                <p className="text-sm text-muted-foreground">
                  Questions répondues en 30 secondes
                </p>
                <div className="bg-muted/50 p-3 rounded-lg mt-4">
                  <p className="text-xs text-muted-foreground">
                    Score calculé : ({score}/{questionsAnswered}) × {questionsAnswered} × 10 = {getFinalScore()} points
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Button onClick={startTimer} className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Rejouer
                </Button>
                <Button onClick={onGoHome} variant="outline" className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Timer display */}
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-primary'}`}>
                  {timeLeft}s
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      timeLeft <= 10 ? 'bg-red-500' : 'bg-primary'
                    }`}
                    style={{ width: `${(timeLeft / 30) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                
                {/* Answer input */}
                <div className="flex gap-2">
                  <NumberInput
                    value={userAnswer}
                    onChange={setUserAnswer}
                    onKeyPress={handleKeyPress}
                    placeholder="Votre réponse..."
                    disabled={isGameFinished}
                    className="flex-1"
                    autoFocus
                  />
                  {currentQuestion.unit && (
                    <div className="flex items-center px-3 bg-muted rounded-md">
                      <span className="text-sm text-muted-foreground">{currentQuestion.unit}</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={handleAnswerSubmit} 
                  className="w-full mt-4"
                  disabled={!userAnswer.trim() || isGameFinished}
                >
                  Valider
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Challenge30sContainer;
