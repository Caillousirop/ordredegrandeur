
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LogOut,
  LogIn
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import UserLevelBadge from "./UserLevelBadge";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

interface UserSpaceProps {
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ 
  questionsCompleted = 0 
}) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState<{
    total_points: number;
    user_level: number;
    questions_completed: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Charger la progression de l'utilisateur depuis Supabase
  useEffect(() => {
    const loadUserProgress = async () => {
      if (!user) {
        setUserProgress(null);
        return;
      }

      setIsLoading(true);
      try {
        console.log("UserSpace: Chargement de la progression pour l'utilisateur:", user.id);
        const { data, error } = await supabase
          .from('user_progress' as any)
          .select('total_points, user_level, questions_completed')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('UserSpace: Erreur lors du chargement de la progression:', error);
          return;
        }

        console.log("UserSpace: Progression chargée:", data);
        if (data && typeof data === 'object' && 'total_points' in data) {
          setUserProgress(data as any);
        }
      } catch (error) {
        console.error('UserSpace: Erreur lors du chargement:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserProgress();
  }, [user]);

  // Recharger la progression périodiquement pour rester synchronisé
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(async () => {
      try {
        const { data, error } = await supabase
          .from('user_progress' as any)
          .select('total_points, user_level, questions_completed')
          .eq('user_id', user.id)
          .maybeSingle();

        if (!error && data && typeof data === 'object' && 'total_points' in data) {
          setUserProgress(data as any);
        }
      } catch (error) {
        console.error('UserSpace: Erreur lors de la synchronisation:', error);
      }
    }, 30000); // Recharger toutes les 30 secondes

    return () => clearInterval(interval);
  }, [user]);

  // Utiliser les données Supabase si disponibles, sinon utiliser les données locales
  const effectiveQuestionsCompleted = userProgress?.questions_completed || questionsCompleted;
  const userLevel = userProgress?.user_level || Math.max(1, Math.floor(questionsCompleted / 5));
  const totalPoints = userProgress?.total_points || 0;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getPointsDisplay = () => {
    if (isLoading) return "...";
    if (userProgress) return `${totalPoints} pts`;
    return `${effectiveQuestionsCompleted} pts`;
  };

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 rounded-full py-1 px-3 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 border-orange-300 dark:border-orange-700 hover:from-orange-200 hover:to-orange-300 dark:hover:from-orange-800/40 dark:hover:to-orange-700/40"
          >
            {user ? (
              <>
                <UserLevelBadge level={userLevel} />
                <span className="font-medium text-sm hidden md:inline text-orange-800 dark:text-orange-200">
                  {getPointsDisplay()}
                </span>
              </>
            ) : (
              <>
                <UserLevelBadge level={1} />
                <span className="font-medium text-sm text-orange-800 dark:text-orange-200">Profil</span>
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
          {user ? (
            <>
              <DropdownMenuLabel className="text-orange-800 dark:text-orange-200">
                Niveau {userLevel}
                {userProgress && (
                  <div className="text-xs text-orange-600 dark:text-orange-400 font-normal">
                    {userProgress.questions_completed} questions • {userProgress.total_points} points
                  </div>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-orange-200 dark:bg-orange-700" />
              
              <DropdownMenuItem className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/30">
                <Link to="/profile" className="flex items-center w-full text-orange-700 dark:text-orange-300">
                  <span>Profil & Résultats</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-orange-200 dark:bg-orange-700" />
              <DropdownMenuItem className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/30" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4 text-orange-700 dark:text-orange-300" />
                <span className="text-orange-700 dark:text-orange-300">Se déconnecter</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel className="text-orange-800 dark:text-orange-200">Niveau 1 (Visiteur)</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-orange-200 dark:bg-orange-700" />
              <DropdownMenuItem className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/30">
                <Link to="/profile" className="flex items-center w-full text-orange-700 dark:text-orange-300">
                  <span>Voir les récompenses</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-orange-200 dark:bg-orange-700" />
              <DropdownMenuItem className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/30">
                <Link to="/auth" className="flex items-center w-full text-orange-700 dark:text-orange-300">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Se connecter</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserSpace;
