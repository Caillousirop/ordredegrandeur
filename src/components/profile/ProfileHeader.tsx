
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };
  
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mr-2 hover:bg-primary/10"
        >
          <ArrowLeft size={18} />
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Mon Profil</h1>
      </div>
      
      {user && (
        <Button 
          variant="outline" 
          onClick={handleSignOut}
          className="flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
        >
          <LogOut size={16} />
          Se déconnecter
        </Button>
      )}
    </div>
  );
};

export default ProfileHeader;
