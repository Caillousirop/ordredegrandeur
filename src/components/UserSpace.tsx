
import React, { useState, useEffect, useCallback } from "react";
import { ProfileButton } from "@/components/ProfileButton";
import UserLevelBadge from "@/components/UserLevelBadge";
import FormattedNumber from "@/components/FormattedNumber";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";

interface UserSpaceProps {
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ questionsCompleted }) => {
  const { user, loading: authLoading } = useAuth();
  const { getCurrentProgress } = useSupabaseProgress();
  
  const [progress, setProgress] = useState<any>(null);
  const [isProgressLoaded, setIsProgressLoaded] = useState(false);

  // Fonction stable pour charger la progression via RPC
  const fetchProgress = useCallback(async () => {
    if (!user || isProgressLoaded) return;
    
    try {
      console.log("📊 [USER_SPACE] Chargement progression unique via RPC");
      const data = await getCurrentProgress();
      if (data) {
        console.log("✅ [USER_SPACE] Progression RPC chargée:", data);
        setProgress(data);
      }
    } catch (error) {
      console.error("❌ [USER_SPACE] Erreur lors du chargement de la progression RPC:", error);
    } finally {
      setIsProgressLoaded(true);
    }
  }, [user, getCurrentProgress, isProgressLoaded]);

  useEffect(() => {
    if (user && !isProgressLoaded) {
      fetchProgress();
    } else if (!user) {
      setIsProgressLoaded(false);
      setProgress(null);
    }
  }, [user, isProgressLoaded, fetchProgress]);

  // Utiliser les données RPC si disponibles, sinon afficher les valeurs par défaut
  const displayStats = progress || {
    total_points: 0,
    user_level: 1,
    experience_points: 0,
    level: 1
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-medium">
              <FormattedNumber value={displayStats.total_points || displayStats.experience_points || 0} /> points
            </div>
            <div className="text-xs text-muted-foreground">
              Niveau {displayStats.user_level || displayStats.level || 1}
            </div>
          </div>
          <UserLevelBadge level={displayStats.user_level || displayStats.level || 1} />
          <ProfileButton />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            <FormattedNumber value={questionsCompleted} /> questions
          </span>
          <ProfileButton />
        </div>
      )}
    </div>
  );
};

export default UserSpace;
