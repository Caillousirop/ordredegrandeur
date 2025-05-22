
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
    <div className="flex items-center gap-2 p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity">
      <Sun size={16} className={`${theme === 'light' ? 'text-amber-500' : 'text-amber-500/40'}`} />
      <Switch 
        className="data-[state=checked]:bg-primary" 
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <Moon size={16} className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-400/40'}`} />
    </div>
  );
};

export default DarkModeToggle;
