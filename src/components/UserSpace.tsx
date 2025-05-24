
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  UserRound,
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

interface UserSpaceProps {
  questionsCompleted: number;
}

const UserSpace: React.FC<UserSpaceProps> = ({ 
  questionsCompleted = 0 
}) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Mock user level - in a real app, this would come from the user's state
  const userLevel = Math.max(1, Math.floor(questionsCompleted / 5));

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 rounded-full py-1 px-3">
            <UserRound className="h-4 w-4" />
            {user ? (
              <>
                <UserLevelBadge level={userLevel} />
                <span className="font-medium text-sm hidden md:inline">{questionsCompleted} pts</span>
              </>
            ) : (
              <span className="font-medium text-sm">Profil</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {user ? (
            <>
              <DropdownMenuLabel>Niveau {userLevel}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/profile" className="flex items-center w-full">
                  <span>Profil & Résultats</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Se déconnecter</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel>Non connecté</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/auth" className="flex items-center w-full">
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
