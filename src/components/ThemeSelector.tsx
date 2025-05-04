
import React from "react";
import { themes } from "@/data/questions";
import { QuizTheme } from "./types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ThemeSelectorProps {
  onSelectTheme: (theme: QuizTheme) => void;
  selectedTheme: QuizTheme | null;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme, selectedTheme }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-medium mb-4">Choisissez un thème</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Card 
            key={theme.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedTheme?.id === theme.id 
                ? "ring-2 ring-primary/70 shadow-md" 
                : "hover:bg-accent/10"
            )}
            onClick={() => onSelectTheme(theme)}
          >
            <CardHeader className={cn("bg-gradient-to-r", theme.color, "p-4")}>
              <CardTitle className="text-white">{theme.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{theme.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
