
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // If scrolled down more than 20px, hide the toggle
        if (window.scrollY > 20 && window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        // Remember last scroll position
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-4 left-4 z-10 flex items-center gap-1 bg-background/80 dark:bg-background/80 p-1.5 rounded-full shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
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
