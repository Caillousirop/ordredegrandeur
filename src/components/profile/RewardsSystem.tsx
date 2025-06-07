
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Trophy, 
  Award, 
  Target, 
  Zap, 
  Crown, 
  TrendingUp, 
  Flame,
  Gem,
  Medal
} from "lucide-react";
import { QuizScore } from "@/components/types";

interface RewardsSystemProps {
  scores: QuizScore[];
  questionsCompleted: number;
  totalPoints: number;
  correctPercentage: number;
}

const RewardsSystem: React.FC<RewardsSystemProps> = ({ 
  scores, 
  questionsCompleted, 
  totalPoints,
  correctPercentage 
}) => {
  const directAnswers = scores.filter(s => s.isMultiStep && s.directFinalAnswer);
  const highAccuracyAnswers = scores.filter(s => s.accuracy >= 80);
  const perfectAnswers = scores.filter(s => s.accuracy === 100);
  
  const achievements = [
    // Badges de base
    {
      id: "first_steps",
      title: "Premiers Pas",
      description: "Répondre à votre première question",
      unlocked: questionsCompleted >= 1,
      icon: <Star size={18} className="text-yellow-500" />,
      category: "Progression",
      rarity: "common"
    },
    {
      id: "getting_started",
      title: "Démarrage",
      description: "Compléter 5 questions",
      unlocked: questionsCompleted >= 5,
      icon: <Zap size={18} className="text-blue-500" />,
      category: "Progression",
      rarity: "common"
    },
    {
      id: "dedicated",
      title: "Persévérant",
      description: "Compléter 25 questions",
      unlocked: questionsCompleted >= 25,
      icon: <TrendingUp size={18} className="text-green-500" />,
      category: "Progression",
      rarity: "uncommon"
    },
    {
      id: "expert",
      title: "Expert",
      description: "Compléter 100 questions",
      unlocked: questionsCompleted >= 100,
      icon: <Crown size={18} className="text-purple-500" />,
      category: "Progression",
      rarity: "rare"
    },
    
    // Badges de précision
    {
      id: "accurate",
      title: "Précision",
      description: "Maintenir 80% de réussite sur 10+ questions",
      unlocked: correctPercentage >= 80 && questionsCompleted >= 10,
      icon: <Target size={18} className="text-green-500" />,
      category: "Précision",
      rarity: "uncommon"
    },
    {
      id: "perfectionist",
      title: "Perfectionniste",
      description: "Obtenir 5 réponses parfaites (100%)",
      unlocked: perfectAnswers.length >= 5,
      icon: <Gem size={18} className="text-cyan-500" />,
      category: "Précision",
      rarity: "rare"
    },
    
    // Badges de stratégie
    {
      id: "direct_solver",
      title: "Résolution Directe",
      description: "Réussir 10 réponses directes sur questions multi-étapes",
      unlocked: directAnswers.filter(s => s.accuracy >= 70).length >= 10,
      icon: <Flame size={18} className="text-orange-500" />,
      category: "Stratégie",
      rarity: "uncommon"
    },
    {
      id: "master_analyst",
      title: "Maître Analyste",
      description: "Réussir 20 questions avec une précision élevée",
      unlocked: highAccuracyAnswers.length >= 20,
      icon: <Medal size={18} className="text-amber-500" />,
      category: "Précision",
      rarity: "rare"
    },
    
    // Badges exclusifs
    {
      id: "statistics_legend",
      title: "Légende des Statistiques",
      description: "Atteindre le niveau 15 avec 90% de précision",
      unlocked: totalPoints >= 375 && correctPercentage >= 90,
      icon: <Trophy size={18} className="text-gradient" />,
      category: "Légendaire",
      rarity: "legendary"
    }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-50 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700";
      case "uncommon": return "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700";
      case "rare": return "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700";
      case "legendary": return "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-300 dark:border-purple-700";
      default: return "bg-gray-50 dark:bg-gray-900/30 border-gray-300 dark:border-gray-700";
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case "common": return <Badge variant="outline" className="text-xs">Commun</Badge>;
      case "uncommon": return <Badge variant="outline" className="text-xs bg-green-100 dark:bg-green-900/30">Peu commun</Badge>;
      case "rare": return <Badge variant="outline" className="text-xs bg-blue-100 dark:bg-blue-900/30">Rare</Badge>;
      case "legendary": return <Badge variant="outline" className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">Légendaire</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="border-[1px] border-primary/20 shadow-lg shadow-primary/5">
      <CardHeader>
        <CardTitle className="text-gradient flex items-center gap-2">
          <Award className="h-5 w-5" />
          Système de Récompenses
        </CardTitle>
        <CardDescription>
          {unlockedAchievements.length} / {achievements.length} badges débloqués
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Badges débloqués */}
        {unlockedAchievements.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-3 text-green-600 dark:text-green-400">
              🏆 Badges débloqués ({unlockedAchievements.length})
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {unlockedAchievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`flex items-center p-3 rounded-md border ${getRarityColor(achievement.rarity)} transition-all hover:scale-[1.02]`}
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mr-3">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{achievement.title}</p>
                      {getRarityBadge(achievement.rarity)}
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-primary/70 mt-1">{achievement.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Badges à débloquer */}
        {lockedAchievements.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-3 text-muted-foreground">
              🎯 Objectifs à atteindre ({lockedAchievements.length})
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {lockedAchievements.slice(0, 5).map((achievement) => (
                <div 
                  key={achievement.id}
                  className="flex items-center p-3 rounded-md bg-muted/50 opacity-70 border border-muted"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-sm">{achievement.title}</p>
                      {getRarityBadge(achievement.rarity)}
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-primary/70 mt-1">{achievement.category}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">À débloquer</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistiques de récompenses */}
        <div className="bg-secondary/20 p-4 rounded-lg border border-secondary">
          <h4 className="font-medium mb-3 text-primary/80">Résumé des accomplissements</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">{perfectAnswers.length}</p>
              <p className="text-muted-foreground">Réponses parfaites</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">{directAnswers.length}</p>
              <p className="text-muted-foreground">Réponses directes</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsSystem;
