
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

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
    <div className="sticky top-4 left-4 z-10 flex items-center gap-1 bg-background/80 backdrop-blur-sm p-1.5 rounded-full shadow-md">
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
