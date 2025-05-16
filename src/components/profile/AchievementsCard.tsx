
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, Award, Frown } from "lucide-react";
import { QuizScore } from "@/components/types";

interface AchievementsCardProps {
  scores: QuizScore[];
  questionsCompleted: number;
}

const AchievementsCard: React.FC<AchievementsCardProps> = ({ scores, questionsCompleted }) => {
  // More fun achievements
  const achievements = [
    {
      title: "Débutant Intrépide",
      description: "A survécu à 5 questions sans abandonner",
      unlocked: questionsCompleted >= 5,
      icon: <Star size={18} className="text-yellow-500" />
    },
    {
      title: "Einstein des Temps Modernes",
      description: "5 réponses directes sans calculatrice !",
      unlocked: scores.filter(s => s.isMultiStep && s.directFinalAnswer && s.accuracy >= 70).length >= 5,
      icon: <Trophy size={18} className="text-blue-500" />
    },
    {
      title: "Maître des Chiffres",
      description: "10 questions avec précision >80% (vous trichez ?)",
      unlocked: scores.filter(s => s.accuracy >= 80).length >= 10,
      icon: <Award size={18} className="text-purple-500" />
    }
  ];
  
  return (
    <Card className="border-[1px] border-primary/20 shadow-lg shadow-primary/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary/30"></div>
      <CardHeader className="pb-2">
        <CardTitle className="text-gradient">Badges</CardTitle>
        <CardDescription>
          Récompenses débloquées (ou pas encore...)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li 
              key={index} 
              className={`flex items-center p-3 rounded-md transition-all duration-300 hover:translate-y-[-2px] ${
                achievement.unlocked 
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20" 
                  : "bg-muted/50 opacity-60 border border-muted"
              }`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 ${
                achievement.unlocked ? "bg-white shadow-md" : "bg-muted"
              }`}>
                {achievement.icon}
              </div>
              <div>
                <p className="font-medium text-sm">{achievement.title}</p>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
              {!achievement.unlocked && (
                <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Bientôt !</span>
              )}
            </li>
          ))}
          {achievements.filter(a => a.unlocked).length === 0 && (
            <div className="text-center py-6 px-4 bg-muted/20 rounded-lg border border-muted">
              <Frown className="mx-auto mb-2 text-muted-foreground" size={24} />
              <p className="text-sm text-muted-foreground">
                Pas encore de badges ? Ne vous inquiétez pas, même Einstein a commencé quelque part !
              </p>
            </div>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
