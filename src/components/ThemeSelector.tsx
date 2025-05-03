
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { themes } from "@/data/questions";
import { QuizTheme } from "./types";

interface ThemeSelectorProps {
  onSelectTheme: (theme: QuizTheme) => void;
  selectedTheme: QuizTheme | null;
  language: 'fr' | 'en';
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  onSelectTheme,
  selectedTheme,
  language = 'fr'
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        {language === 'fr' ? 'Choisissez un thème' : 'Choose a theme'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Card 
            key={theme.id}
            className={`cursor-pointer transition-all hover:shadow-md overflow-hidden h-full
              ${selectedTheme?.id === theme.id 
                ? "border-2 border-primary shadow-lg" 
                : "hover:-translate-y-1"}`}
            onClick={() => onSelectTheme(theme)}
          >
            <div className={`h-2 bg-gradient-to-r ${theme.color}`}></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                {language === 'fr' ? theme.name : theme.nameEn || theme.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4 pt-0">
              <p className="text-sm text-muted-foreground">
                {language === 'fr' ? theme.description : theme.descriptionEn || theme.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
