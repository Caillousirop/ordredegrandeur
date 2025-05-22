
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  UserRound
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

interface UserSpaceProps {
  username?: string;
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ 
  username = "Utilisateur", 
  questionsCompleted = 0 
}) => {
  // Mock user level - in a real app, this would come from the user's state
  const userLevel = Math.max(1, Math.floor(questionsCompleted / 5));

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 rounded-full py-1 px-3">
            <UserRound size={18} className="text-primary" />
            <span className="font-medium text-sm">{questionsCompleted}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Niveau {userLevel}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/profile" className="flex items-center w-full">
              <span>Profil & Résultats</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <span>Questions sauvegardées</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link to="/profile">
        <UserLevelBadge level={userLevel} />
      </Link>
    </div>
  );
};

export default UserSpace;
