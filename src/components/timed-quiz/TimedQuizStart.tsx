
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, Trophy, Zap } from "lucide-react";
import { useTimedQuiz } from "@/hooks/useTimedQuiz";
import { useAuth } from "@/hooks/useAuth";

const TimedQuizStart: React.FC = () => {
  const { startQuiz, questions } = useTimedQuiz();
  const { user } = useAuth();

  const handleStart = () => {
    if (!user) {
      return;
    }
    startQuiz();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Clock className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Quiz Chronométré</CardTitle>
        <p className="text-muted-foreground">
          Testez vos connaissances en 30 secondes et grimpez au classement !
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-medium">30 Secondes</h3>
            <p className="text-sm text-muted-foreground">
              Répondez au maximum de questions
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-medium">Précision</h3>
            <p className="text-sm text-muted-foreground">
              Plus vous êtes précis, plus vous gagnez de points
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="font-medium">Classement</h3>
            <p className="text-sm text-muted-foreground">
              Comparez vos performances
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Système de points
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 1-10 points selon la précision de votre réponse</li>
            <li>• +2 points bonus si vous répondez en moins de 3 secondes</li>
            <li>• Réponse correcte = précision ≥ 50%</li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            {questions} questions disponibles • Questions simples uniquement
          </p>
          
          {!user ? (
            <p className="text-sm text-orange-600 dark:text-orange-400">
              Connectez-vous pour participer au quiz chronométré
            </p>
          ) : (
            <Button 
              onClick={handleStart}
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80"
            >
              <Clock className="mr-2 h-5 w-5" />
              Commencer le défi !
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimedQuizStart;
