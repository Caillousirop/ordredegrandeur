import React, { useState, useEffect } from "react";
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
  const { loadProgress } = useSupabaseProgress();
  
  const [progress, setProgress] = useState<any>(null);
  const [localStats, setLocalStats] = useState({
    total_points: 0,
    user_level: 1,
    questions_completed: 0
  });

  useEffect(() => {
    if (user) {
      const fetchProgress = async () => {
        const data = await loadProgress();
        if (data?.progress) {
          setProgress(data.progress);
        }
      };
      fetchProgress();
    }
  }, [user, loadProgress]);

  useEffect(() => {
    // Charger le profil depuis le localStorage au montage
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        setLocalStats({
          total_points: parsedProfile.total_points || 0,
          user_level: parsedProfile.user_level || 1,
          questions_completed: parsedProfile.questions_completed || 0
        });
      } catch (error) {
        console.error("Erreur lors de la lecture du profil depuis le localStorage", error);
      }
    }
  }, []);

  const displayStats = progress || localStats;

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-medium">
              <FormattedNumber value={displayStats.total_points} /> points
            </div>
            <div className="text-xs text-muted-foreground">
              Niveau {displayStats.user_level}
            </div>
          </div>
          <UserLevelBadge level={displayStats.user_level} />
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
