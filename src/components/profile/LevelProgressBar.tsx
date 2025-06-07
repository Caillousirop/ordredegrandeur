
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Star, Trophy } from "lucide-react";

interface LevelProgressBarProps {
  currentLevel: number;
  totalPoints: number;
  nextLevelPoints: number;
  currentLevelPoints: number;
}

const LevelProgressBar: React.FC<LevelProgressBarProps> = ({
  currentLevel,
  totalPoints,
  nextLevelPoints,
  currentLevelPoints
}) => {
  const progressInCurrentLevel = totalPoints - currentLevelPoints;
  const pointsNeededForNextLevel = nextLevelPoints - currentLevelPoints;
  const progressPercentage = Math.min(100, (progressInCurrentLevel / pointsNeededForNextLevel) * 100);
  const pointsToNext = nextLevelPoints - totalPoints;

  const getLevelIcon = () => {
    if (currentLevel >= 10) return <Trophy className="h-5 w-5 text-purple-500" />;
    if (currentLevel >= 5) return <Star className="h-5 w-5 text-amber-500" />;
    return <Star className="h-5 w-5 text-blue-500" />;
  };

  const getLevelTitle = () => {
    if (currentLevel >= 10) return "Expert en Statistique";
    if (currentLevel >= 7) return "Mathématicien Confirmé";
    if (currentLevel >= 4) return "Analyste en Progression";
    return "Statisticien Débutant";
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-4 rounded-lg border border-primary/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {getLevelIcon()}
          <div>
            <h3 className="font-semibold text-primary">Niveau {currentLevel}</h3>
            <p className="text-xs text-muted-foreground">{getLevelTitle()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{totalPoints} points</p>
          <p className="text-xs text-muted-foreground">
            {pointsToNext > 0 ? `${pointsToNext} pour le niveau suivant` : "Niveau maximum atteint !"}
          </p>
        </div>
      </div>
      
      {pointsToNext > 0 && (
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{progressInCurrentLevel} / {pointsNeededForNextLevel} pts</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelProgressBar;
