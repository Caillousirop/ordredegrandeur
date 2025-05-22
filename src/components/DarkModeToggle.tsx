
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-4 left-4 z-10 flex items-center gap-1 bg-background/80 dark:bg-background/80 p-1.5 rounded-full shadow-md">
      <Sun size={14} className="text-muted-foreground" />
      <Switch 
        className="scale-75" 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <Moon size={14} className="text-muted-foreground" />
    </div>
  );
};

export default DarkModeToggle;
