
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  LogOut, 
  Trophy, 
  BookOpen,
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
      <Link to="/profile" className="flex items-center gap-2 bg-accent/50 text-foreground rounded-full py-1 px-2 pr-3 transition-all duration-200 hover:bg-accent/70">
        <div className="bg-primary rounded-full p-2 text-primary-foreground">
          <UserRound size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium">{questionsCompleted} questions</span>
          <UserLevelBadge level={userLevel} />
        </div>
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/profile" className="flex items-center w-full">
              <Trophy className="mr-2" size={16} />
              <span>Résultats & Badges</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <BookOpen className="mr-2" size={16} />
            <span>Questions sauvegardées</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-destructive">
            <LogOut className="mr-2" size={16} />
            <span>Déconnexion</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserSpace;
