import React, { useState, useEffect, useCallback } from "react";
import { useQuiz } from "@/hooks/useQuiz";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import ProfileHeader from "@/components/profile/ProfileHeader";
import StatisticsCard from "@/components/profile/StatisticsCard";
import RewardsSystem from "@/components/profile/RewardsSystem";
import { calculateProfileStats } from "@/components/profile/ProfileStatCalculator";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, Trophy, Target, Zap, Crown, RefreshCw } from "lucide-react";

const Profile = () => {
  const { scores, questionsCompleted } = useQuiz();
  const { user } = useAuth();
  const { getCurrentProgress } = useSupabaseProgress();
  
  const [supabaseProgress, setSupabaseProgress] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("");
  
  // Fonction pour charger la progression depuis Supabase
  const loadProgressFromSupabase = useCallback(async () => {
    if (!user) return;
    
    setIsLoading(true);
    console.log("🔄 [PROFILE] Chargement progression Supabase...");
    
    try {
      const progress = await getCurrentProgress();
      if (progress) {
        console.log("✅ [PROFILE] Progression Supabase chargée:", progress);
        setSupabaseProgress(progress);
        setLastSyncTime(new Date().toLocaleString('fr-FR'));
      } else {
        console.log("⚠️ [PROFILE] Aucune progression trouvée dans Supabase");
      }
    } catch (error) {
      console.error("❌ [PROFILE] Erreur chargement progression:", error);
    } finally {
      setIsLoading(false);
      setProgressLoaded(true);
    }
  }, [user, getCurrentProgress]);

  // Charger la progression au montage et quand l'utilisateur change
  useEffect(() => {
    if (user && !progressLoaded) {
      loadProgressFromSupabase();
    } else if (!user) {
      setProgressLoaded(false);
      setSupabaseProgress(null);
      setLastSyncTime("");
    }
  }, [user, progressLoaded, loadProgressFromSupabase]);

  // Recharger périodiquement les données (toutes les 30 secondes)
  useEffect(() => {
    if (user && progressLoaded) {
      const interval = setInterval(() => {
        console.log("🔄 [PROFILE] Rechargement automatique progression...");
        loadProgressFromSupabase();
      }, 30000);
      
      return () => clearInterval(interval);
    }
  }, [user, progressLoaded, loadProgressFromSupabase]);

  // Utiliser les données Supabase si disponibles, sinon calculer localement
  const finalStats = supabaseProgress ? {
    correctPercentage: supabaseProgress.correct_percentage || 0,
    totalPoints: supabaseProgress.total_points || 0,
    userLevel: supabaseProgress.user_level || 1
  } : calculateProfileStats(scores, questionsCompleted);

  const { correctPercentage, totalPoints, userLevel } = finalStats;

  console.log("📊 [PROFILE] Stats utilisées:", {
    finalStats,
    isFromSupabase: !!supabaseProgress,
    supabaseProgress,
    scoresCount: scores.length,
    questionsCompleted
  });

  // Fonction pour recharger manuellement
  const handleRefresh = () => {
    setProgressLoaded(false);
    loadProgressFromSupabase();
  };

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
      <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
        <DarkModeToggle />
        <UserSpace questionsCompleted={supabaseProgress?.questions_completed || questionsCompleted} />
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <ProfileHeader />
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
          </div>
        </div>
        
        {isLoading && (
          <div className="text-center py-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200">
                🔄 Synchronisation avec Supabase en cours...
              </p>
            </div>
          </div>
        )}

        {supabaseProgress && lastSyncTime && (
          <div className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200 text-sm">
                ✅ Données synchronisées avec Supabase - Dernière mise à jour : {lastSyncTime}
              </p>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <StatisticsCard
                scores={scores}
                questionsCompleted={supabaseProgress?.questions_completed || questionsCompleted}
                correctPercentage={correctPercentage}
                totalPoints={totalPoints}
                userLevel={userLevel}
              />
            </div>
            
            <div className="lg:col-span-1">
              <RewardsSystem 
                scores={scores} 
                questionsCompleted={supabaseProgress?.questions_completed || questionsCompleted}
                totalPoints={totalPoints}
                correctPercentage={correctPercentage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
