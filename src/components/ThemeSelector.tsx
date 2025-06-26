
import React from "react";
import { QuizTheme } from "./types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { Shuffle, Timer } from "lucide-react";

interface ThemeSelectorProps {
  onSelectTheme: (theme: QuizTheme) => void;
  selectedTheme: QuizTheme | null;
  themes: QuizTheme[];
  loading?: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  onSelectTheme, 
  selectedTheme, 
  themes,
  loading = false 
}) => {
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

  // Add a 30s challenge theme
  const challenge30sTheme: QuizTheme = {
    id: "challenge-30s",
    name: "Défi 30s",
    description: "Questions simples avec un chrono de 30 secondes par question",
    color: "from-orange-500 to-red-500",
    icon: "Timer"
  };

  // All themes including the special themes
  const allThemes = [randomTheme, challenge30sTheme, ...themes];

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-medium mb-4">Choisissez un thème</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg h-24"></div>
          ))}
        </div>
      </div>
    );
  }

  if (themes.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-medium mb-4">Choisissez un thème</h2>
        <div className="text-center p-8 text-muted-foreground">
          <p>Aucun thème disponible pour le moment.</p>
          <p className="text-sm mt-2">Les questions sont en cours de chargement...</p>
        </div>
      </div>
    );
  }

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
                {theme.id === "random" && <Shuffle className="h-5 w-5 text-white" />}
                {theme.id === "challenge-30s" && <Timer className="h-5 w-5 text-white" />}
                {theme.id !== "random" && theme.id !== "challenge-30s" && theme.icon && getIconComponent(theme.icon)}
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
