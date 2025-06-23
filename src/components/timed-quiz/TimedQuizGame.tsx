
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, Award } from "lucide-react";
import { useTimedQuiz } from "@/hooks/useTimedQuiz";
import { formatUnitDisplay } from "@/utils/unitDisplay";

const TimedQuizGame: React.FC = () => {
  const {
    currentQuestion,
    timeLeft,
    isActive,
    userAnswer,
    setUserAnswer,
    questionsAnswered,
    correctAnswers,
    currentScore,
    hasNextQuestion,
    submitAnswer
  } = useTimedQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitAnswer();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitAnswer();
    }
  };

  if (!isActive || !currentQuestion) {
    return null;
  }

  const progressPercentage = (timeLeft / 30) * 100;
  const unitDisplay = formatUnitDisplay(currentQuestion.unit);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Quiz Chronométré</CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              <span>{questionsAnswered} réponses</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4" />
              <span>{currentScore} pts</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono text-lg">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              Précision: {questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0}%
            </span>
          </div>
          <Progress 
            value={progressPercentage} 
            className={`h-2 ${timeLeft <= 5 ? 'progress-danger' : timeLeft <= 10 ? 'progress-warning' : ''}`}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            {currentQuestion.question}
            {unitDisplay && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                {unitDisplay}
              </span>
            )}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Votre réponse..."
            className="text-lg"
            autoFocus
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={!userAnswer.trim()}
          >
            {hasNextQuestion ? "Question suivante" : "Terminer"}
          </Button>
        </form>

        <div className="text-xs text-muted-foreground text-center">
          Appuyez sur Entrée pour valider rapidement
        </div>
      </CardContent>
    </Card>
  );
};

export default TimedQuizGame;
