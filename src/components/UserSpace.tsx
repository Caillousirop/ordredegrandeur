
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings, BarChart3 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthButton from "./AuthButton";
import UserLevelBadge from "./UserLevelBadge";
import QuestionStats from "./QuestionStats";

interface UserSpaceProps {
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ questionsCompleted }) => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <QuestionStats className="w-80" />
        <AuthButton />
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center gap-3">
      <QuestionStats className="w-80" />
      
      <UserLevelBadge questionsCompleted={questionsCompleted} />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User size={16} />
            <span className="hidden sm:inline">
              {user.email?.split('@')[0] || 'Utilisateur'}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="flex items-center gap-2 p-2">
            <User size={16} />
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.email?.split('@')[0] || 'Utilisateur'}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2" 
            onClick={handleSignOut}
          >
            <LogOut size={16} />
            Se déconnecter
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserSpace;
