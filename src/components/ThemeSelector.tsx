
import React from "react";
import { themes } from "@/data/themes";
import { QuizTheme } from "./types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { Shuffle } from "lucide-react";

interface ThemeSelectorProps {
  onSelectTheme: (theme: QuizTheme) => void;
  selectedTheme: QuizTheme | null;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme, selectedTheme }) => {
  // Function to get the icon component based on icon name
  const getIconComponent = (iconName: string | undefined) => {
    if (!iconName) return null;
    // Type assertion to ensure compatibility
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-5 w-5 text-white" /> : null;
  };

  // Add a random theme option
  const randomTheme: QuizTheme = {
    id: "random",
    name: "Questions aléatoires",
    description: "Questions issues de tous les thèmes, mélangées aléatoirement",
    color: "from-purple-500 to-indigo-500",
    icon: "Shuffle"
  };

  // All themes including the random theme
  const allThemes = [randomTheme, ...themes];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-medium mb-4">Choisissez un thème</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allThemes.map((theme) => (
          <Card 
            key={theme.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md overflow-hidden min-w-0",
              selectedTheme?.id === theme.id 
                ? "ring-2 ring-primary/70 shadow-md" 
                : "hover:bg-accent/10 dark:hover:bg-gradient-to-br dark:hover:from-slate-700/80 dark:hover:to-slate-600/60"
            )}
            onClick={() => onSelectTheme(theme)}
          >
            <CardHeader className={cn("bg-gradient-to-r", theme.color, "p-3 pb-4")}>
              <div className="flex items-center gap-2 min-w-0">
                {theme.id !== "random" && theme.icon && getIconComponent(theme.icon)}
                <CardTitle className="text-white whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed">{theme.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-3 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/30">
              <p className="text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
