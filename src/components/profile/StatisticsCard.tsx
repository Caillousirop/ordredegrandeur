
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Laugh, Frown, Smile, Star } from "lucide-react";
import UserLevelBadge from "@/components/UserLevelBadge";
import { QuizScore } from "@/components/types";

interface StatisticsCardProps {
  scores: QuizScore[];
  questionsCompleted: number;
  correctPercentage: number;
  totalPoints: number;
  userLevel: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ 
  scores, 
  questionsCompleted, 
  correctPercentage, 
  totalPoints, 
  userLevel 
}) => {
  // Messages basés sur la performance
  const getMessage = () => {
    if (correctPercentage >= 80) return {
      text: "Excellente précision dans vos réponses.",
      icon: <Laugh className="text-green-500" size={20} />
    };
    if (correctPercentage >= 50) return {
      text: "Bonne progression dans l'apprentissage.",
      icon: <Smile className="text-amber-500" size={20} />
    };
    return {
      text: "Continuez à progresser, la statistique demande de la pratique.",
      icon: <Frown className="text-blue-500" size={20} />
    };
  };

  // Titres des niveaux
  const getLevelTitle = () => {
    if (userLevel >= 10) return "Expert en Statistique";
    if (userLevel >= 7) return "Mathématicien Confirmé";
    if (userLevel >= 4) return "Analyste en Progression";
    return "Statisticien Débutant";
  };
  
  const message = getMessage();
  
  return (
    <Card className="col-span-1 md:col-span-2 border-[1px] border-primary/20 shadow-lg shadow-primary/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary/30"></div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="text-gradient">Statistiques</span>
          <UserLevelBadge level={userLevel} />
        </CardTitle>
        <CardDescription className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg animate-pulse-scale">
          {message.icon} {message.text}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 p-4 rounded-lg text-center border border-blue-500/20 shadow-sm">
              <p className="text-muted-foreground text-sm">Questions</p>
              <p className="text-2xl font-bold text-blue-500">{questionsCompleted}</p>
              <p className="text-xs text-muted-foreground">
                {questionsCompleted < 5 ? "Début de parcours" : "Progression constante"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 p-4 rounded-lg text-center border border-green-500/20 shadow-sm">
              <p className="text-muted-foreground text-sm">Précision</p>
              <p className="text-2xl font-bold text-green-500">{correctPercentage}%</p>
              <p className="text-xs text-muted-foreground">
                {correctPercentage > 70 ? "Performance notable" : "En progression"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-400/5 p-4 rounded-lg text-center border border-purple-500/20 shadow-sm">
              <p className="text-muted-foreground text-sm">Points</p>
              <p className="text-2xl font-bold text-purple-500">{totalPoints}</p>
              <p className="text-xs text-muted-foreground">
                Niveau: {getLevelTitle()}
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-secondary/20 p-4 rounded-lg border border-secondary">
            <h3 className="font-medium mb-3 text-primary/80">Détails des réponses</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center bg-white/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-muted-foreground flex items-center">
                  <Trophy size={16} className="mr-2 text-amber-500" />
                  Réponses directes
                </span>
                <Badge variant="outline" className="bg-amber-50 dark:bg-amber-900/30">
                  {scores.filter(s => s.isMultiStep && s.directFinalAnswer).length} 
                  {scores.filter(s => s.isMultiStep && s.directFinalAnswer).length > 5 ? " ★" : ""}
                </Badge>
              </li>
              <li className="flex justify-between items-center bg-white/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-muted-foreground flex items-center">
                  <Award size={16} className="mr-2 text-blue-500" />
                  Réponses étape par étape
                </span>
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30">
                  {scores.filter(s => s.isMultiStep && !s.directFinalAnswer).length}
                </Badge>
              </li>
              <li className="flex justify-between items-center bg-white/50 dark:bg-gray-800/50 p-2 rounded-md">
                <span className="text-muted-foreground flex items-center">
                  <Star size={16} className="mr-2 text-green-500" />
                  Questions simples
                </span>
                <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30">
                  {scores.filter(s => !s.isMultiStep).length}
                </Badge>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg mt-4 border border-primary/10 shadow-inner">
            <p className="text-sm font-medium text-primary">À noter</p>
            <p className="text-xs text-muted-foreground">
              Les réponses directes correctes aux questions à étapes vous rapportent 50% de points bonus. 
              {totalPoints > 100 ? " Votre progression est remarquable." : " Une opportunité d'améliorer votre score global."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
