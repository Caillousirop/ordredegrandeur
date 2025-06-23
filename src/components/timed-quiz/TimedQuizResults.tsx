
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Clock } from "lucide-react";
import { useTimedQuiz } from "@/hooks/useTimedQuiz";

interface TimedQuizResultsProps {
  onRestart: () => void;
  onViewLeaderboard: () => void;
}

const TimedQuizResults: React.FC<TimedQuizResultsProps> = ({
  onViewLeaderboard
}) => {
  const { questionsAnswered, correctAnswers, currentScore } = useTimedQuiz();

  const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

  const getPerformanceMessage = () => {
    if (currentScore >= 100) return "🔥 Performance exceptionnelle !";
    if (currentScore >= 50) return "🎯 Très bien joué !";
    if (currentScore >= 25) return "👍 Bon travail !";
    return "💪 Continuez à vous entraîner !";
  };

  const getScoreColor = () => {
    if (currentScore >= 100) return "text-purple-600 dark:text-purple-400";
    if (currentScore >= 50) return "text-green-600 dark:text-green-400";
    if (currentScore >= 25) return "text-blue-600 dark:text-blue-400";
    return "text-gray-600 dark:text-gray-400";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Quiz Terminé !</CardTitle>
        <p className="text-lg font-medium">{getPerformanceMessage()}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className={`text-3xl font-bold ${getScoreColor()}`}>
              {currentScore}
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Trophy className="h-4 w-4" />
              Points totaux
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {questionsAnswered}
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Target className="h-4 w-4" />
              Questions répondues
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {accuracy}%
            </div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Clock className="h-4 w-4" />
              Précision
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 text-center space-y-2">
          <h4 className="font-medium">Détail des performances</h4>
          <p className="text-sm text-muted-foreground">
            {correctAnswers} réponses correctes sur {questionsAnswered} tentatives
          </p>
          {questionsAnswered > 0 && (
            <p className="text-xs text-muted-foreground">
              Temps moyen par question : {Math.round(30 / questionsAnswered)}s
            </p>
          )}
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Merci d'avoir participé ! Chaque utilisateur ne peut participer qu'une seule fois pour garantir l'équité du classement.
          </p>
        </div>

        <div className="flex justify-center">
          <Button onClick={onViewLeaderboard} className="w-full max-w-md">
            <Trophy className="mr-2 h-4 w-4" />
            Voir le classement
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimedQuizResults;
