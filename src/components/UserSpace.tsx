
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings, BarChart3 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AuthButton } from "./AuthButton";
import UserLevelBadge from "./UserLevelBadge";

interface UserSpaceProps {
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ questionsCompleted }) => {
  const { user, signOut } = useAuth();

  const handleProfileClick = () => {
    window.location.href = "/profile";
  };

  const handleStatsClick = () => {
    // TODO: Implement stats page navigation
    console.log("Navigate to stats page");
  };

  const handleSettingsClick = () => {
    // TODO: Implement settings page navigation
    console.log("Navigate to settings page");
  };

  if (!user) {
    return <AuthButton />;
  }

  return (
    <div className="flex items-center gap-3">
      <UserLevelBadge level={Math.floor(questionsCompleted / 5) + 1} />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/40 hover:bg-muted/50 transition-colors">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{user.email?.split("@")[0] || "Utilisateur"}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleProfileClick} className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Mon profil
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleStatsClick} className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Statistiques
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSettingsClick} className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Paramètres
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-red-600">
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserSpace;
