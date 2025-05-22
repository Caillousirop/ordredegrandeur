
import React, { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 shadow-sm hover:shadow-md transition-all duration-300">
          <Sun 
            size={16} 
            className={`${theme === 'light' 
              ? 'text-amber-500 animate-fade-in' 
              : 'text-amber-500/40'} transition-all duration-300`} 
          />
          <Switch 
            className="data-[state=checked]:bg-primary transition-all duration-300" 
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
          />
          <Moon 
            size={16} 
            className={`${theme === 'dark' 
              ? 'text-indigo-400 animate-fade-in' 
              : 'text-indigo-400/40'} transition-all duration-300`} 
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Changer le thème</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default DarkModeToggle;
