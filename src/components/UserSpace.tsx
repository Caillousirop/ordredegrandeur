
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LogOut,
  LogIn,
  Copy
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
import { toast } from "sonner";

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

  // Charger la progression de l'utilisateur depuis Supabase
  useEffect(() => {
    const loadUserProgress = async () => {
      if (!user) {
        setUserProgress(null);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('total_points, user_level, questions_completed')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Erreur lors du chargement de la progression:', error);
          return;
        }

        setUserProgress(data);
      } catch (error) {
        console.error('Erreur lors du chargement:', error);
      }
    };

    loadUserProgress();
  }, [user]);

  // Utiliser les données Supabase si disponibles, sinon utiliser les données locales
  const effectiveQuestionsCompleted = userProgress?.questions_completed || questionsCompleted;
  const userLevel = userProgress?.user_level || Math.max(1, Math.floor(questionsCompleted / 5));
  const totalPoints = userProgress?.total_points || 0;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const copyUserId = () => {
    if (user?.id) {
      navigator.clipboard.writeText(user.id);
      toast.success("User ID copié dans le presse-papiers !");
    }
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
                  {userProgress ? `${totalPoints} pts` : `${effectiveQuestionsCompleted} pts`}
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
              <DropdownMenuLabel className="text-orange-800 dark:text-orange-200">Niveau {userLevel}</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-orange-200 dark:bg-orange-700" />
              
              {/* Affichage temporaire du User ID */}
              <div className="p-2 bg-orange-200/50 dark:bg-orange-800/30 rounded mx-2 my-2">
                <div className="text-xs text-orange-700 dark:text-orange-300 mb-1">
                  User ID (temporaire) :
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded font-mono text-orange-800 dark:text-orange-200 flex-1 truncate">
                    {user.id}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyUserId}
                    className="h-6 w-6 p-0 hover:bg-orange-300 dark:hover:bg-orange-700"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

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
