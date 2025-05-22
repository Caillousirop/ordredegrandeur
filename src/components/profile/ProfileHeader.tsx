
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
      
      <div className="flex items-center gap-2">
        <Sun size={18} className="text-muted-foreground" />
        <Switch 
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
        <Moon size={18} className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default ProfileHeader;
