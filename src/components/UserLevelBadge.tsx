
import React from "react";
import { UserRound, Star } from "lucide-react";

interface UserLevelBadgeProps {
  level: number;
}

const UserLevelBadge: React.FC<UserLevelBadgeProps> = ({ level }) => {
  // Determine badge color based on level
  const getBadgeStyles = () => {
    if (level >= 10) return "bg-gradient-to-r from-purple-500 to-pink-500";
    if (level >= 7) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    if (level >= 4) return "bg-gradient-to-r from-green-500 to-emerald-500";
    return "bg-gradient-to-r from-amber-400 to-orange-500";
  };

  // Determine badge icon
  const BadgeIcon = level >= 5 ? Star : UserRound;

  return (
    <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${getBadgeStyles()} text-white`}>
      <BadgeIcon size={16} />
      <span className="text-xs font-bold">Niveau {level}</span>
    </div>
  );
};

export default UserLevelBadge;
