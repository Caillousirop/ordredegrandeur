
import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import { useAuth } from "@/hooks/useAuth";
import ProfileHeader from "@/components/profile/ProfileHeader";
import StatisticsCard from "@/components/profile/StatisticsCard";
import AchievementsCard from "@/components/profile/AchievementsCard";
import { calculateProfileStats } from "@/components/profile/ProfileStatCalculator";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, Trophy, Target, Zap, Crown } from "lucide-react";

const Profile = () => {
  const { scores, questionsCompleted } = useQuiz();
  const { user } = useAuth();
  
  // Calculate all statistics
  const { correctPercentage, totalPoints, userLevel } = calculateProfileStats(scores, questionsCompleted);

  // If user is not logged in, show rewards preview
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/10 dark:from-primary/10 dark:to-primary/5">
        <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
          <DarkModeToggle />
          <UserSpace questionsCompleted={0} />
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 py-10">
          <ProfileHeader />
          
          <div className="space-y-6">
            {/* Welcome card for non-authenticated users */}
            <Card className="border-2 border-orange-200 dark:border-orange-700 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
                  <Crown className="h-6 w-6" />
                  Débloquez votre potentiel !
                </CardTitle>
                <CardDescription className="text-orange-700 dark:text-orange-300">
                  Connectez-vous pour suivre vos progrès et débloquer des récompenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    ✨ Suivi des statistiques • 🏆 Système de niveaux • 📊 Classements quotidiens
                  </div>
                  <Button asChild className="bg-orange-600 hover:bg-orange-700">
                    <Link to="/auth" className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Se connecter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview of rewards system */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Levels preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Système de niveaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <span className="text-sm">Niveau 1 - Statisticien Débutant</span>
                      <span className="text-xs text-muted-foreground">0+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm">Niveau 4 - Analyste en Progression</span>
                      <span className="text-xs text-muted-foreground">100+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm">Niveau 7 - Mathématicien Confirmé</span>
                      <span className="text-xs text-muted-foreground">175+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                      <span className="text-sm">Niveau 10+ - Expert en Statistique</span>
                      <span className="text-xs text-muted-foreground">250+ points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Récompenses à débloquer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded bg-muted/50">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Premier pas (1ère question)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-muted/30 opacity-70">
                      <Trophy className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">Persévérant (10 questions)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-muted/30 opacity-70">
                      <Crown className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Expert (50 questions)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-muted/30 opacity-70">
                      <Target className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Précision (80%+ de réussite)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to action */}
            <Card className="text-center bg-gradient-to-r from-primary/5 to-purple-500/5">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Prêt à commencer votre parcours ?</h3>
                <p className="text-muted-foreground mb-4">
                  Créez un compte pour débloquer toutes ces fonctionnalités et bien plus encore !
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600">
                  <Link to="/auth">
                    Créer un compte gratuitement
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/10 dark:from-primary/10 dark:to-primary/5">
      {/* Header with controls that scrolls with content */}
      <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
        <DarkModeToggle />
        <UserSpace questionsCompleted={questionsCompleted} />
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User stats card */}
          <StatisticsCard
            scores={scores}
            questionsCompleted={questionsCompleted}
            correctPercentage={correctPercentage}
            totalPoints={totalPoints}
            userLevel={userLevel}
          />
          
          {/* Achievements card */}
          <AchievementsCard 
            scores={scores} 
            questionsCompleted={questionsCompleted} 
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
