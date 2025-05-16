
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  UserRound, 
  Settings, 
  LogOut, 
  Trophy, 
  BookOpen 
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface UserSpaceProps {
  username?: string;
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ 
  username = "Utilisateur", 
  questionsCompleted = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center space-x-2 relative">
      <div 
        className={`flex items-center gap-2 bg-accent/50 text-foreground rounded-full py-1 px-2 pr-3 transition-all duration-200 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="bg-primary rounded-full p-2 text-primary-foreground">
          <UserRound size={16} />
        </div>
        <span className="font-medium text-sm">{username}</span>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          {questionsCompleted} questions
        </span>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <UserRound className="mr-2" size={16} />
            <span>Profil</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Trophy className="mr-2" size={16} />
            <span>Mes résultats</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <BookOpen className="mr-2" size={16} />
            <span>Mes questions sauvegardées</span>
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
