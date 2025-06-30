
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { User, BarChart3, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const ProfileButton: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <User size={16} />
          Profil
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
            <BarChart3 size={16} />
            Mes résultats
          </Link>
        </DropdownMenuItem>
        {!user && (
          <div className="px-2 py-1.5 text-xs text-muted-foreground">
            Connectez-vous pour sauvegarder votre progression
          </div>
        )}
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer">
            <LogOut size={16} />
            Se déconnecter
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem asChild>
            <Link to="/auth" className="flex items-center gap-2 cursor-pointer">
              <LogIn size={16} />
              Se connecter
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
