
import React, { useState, useEffect } from "react";
import { Question } from "../types";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Timer, Play, ArrowLeft } from "lucide-react";
import { Input } from "../ui/input";
import { calculateAccuracy } from "../quiz/CalculateAccuracy";
import { toast } from "sonner";

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
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Filter only simple questions
  const simpleQuestions = questions.filter(q => q.type === "simple");

  useEffect(() => {
    setTotalQuestions(simpleQuestions.length);
  }, [simpleQuestions]);

  // Timer logic
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
  };

  const handleTimeUp = () => {
    if (!isAnswered) {
      toast.error("Temps écoulé !");
      handleNextQuestion();
    }
  };

  const handleAnswerSubmit = () => {
    if (!userAnswer.trim()) return;

    const numericAnswer = parseFloat(userAnswer.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    if (isNaN(numericAnswer)) {
      toast.error("Veuillez entrer une réponse numérique valide");
      return;
    }

    const accuracy = calculateAccuracy(numericAnswer, currentQuestion.correctAnswer);
    
    if (accuracy >= 50) {
      setScore(prev => prev + 1);
      toast.success(`Bonne réponse ! Précision: ${accuracy}%`);
    } else {
      toast.error(`Réponse incorrecte. Précision: ${accuracy}%`);
    }

    setIsAnswered(true);
    setIsTimerRunning(false);
    
    // Show correct answer
    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < simpleQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(30);
      setUserAnswer("");
      setIsAnswered(false);
      setIsTimerRunning(true);
    } else {
      // End of quiz
      setIsTimerRunning(false);
      toast.success(`Quiz terminé ! Score: ${score}/${totalQuestions}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnswered && hasStarted) {
      handleAnswerSubmit();
    }
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

  // Quiz finished
  if (currentQuestionIndex >= simpleQuestions.length) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-6 w-6" />
              Défi 30s - Terminé !
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="text-4xl font-bold text-primary mb-2">
                {score}/{totalQuestions}
              </div>
              <p className="text-lg text-muted-foreground">
                Score final: {Math.round((score / totalQuestions) * 100)}%
              </p>
            </div>
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
                Question {currentQuestionIndex + 1}/{simpleQuestions.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Score: {score}/{currentQuestionIndex}
              </div>
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
                  Vous avez 30 secondes par question. Cliquez pour commencer !
                </p>
              </div>
              <Button onClick={startTimer} size="lg" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Lancer le chrono
              </Button>
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
                  <Input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Votre réponse..."
                    disabled={isAnswered || !isTimerRunning}
                    className="flex-1"
                  />
                  {currentQuestion.unit && (
                    <div className="flex items-center px-3 bg-muted rounded-md">
                      <span className="text-sm text-muted-foreground">{currentQuestion.unit}</span>
                    </div>
                  )}
                </div>
                
                {!isAnswered && isTimerRunning && (
                  <Button 
                    onClick={handleAnswerSubmit} 
                    className="w-full mt-4"
                    disabled={!userAnswer.trim()}
                  >
                    Valider
                  </Button>
                )}
              </div>

              {/* Show correct answer when answered */}
              {isAnswered && (
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Réponse correcte :</p>
                  <p className="text-lg font-semibold">
                    {currentQuestion.correctAnswer.toLocaleString()} {currentQuestion.unit}
                  </p>
                  {currentQuestion.explanation && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Challenge30sContainer;
