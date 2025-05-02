
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type QuestionType = "simple" | "multistep" | "all";

interface QuestionTypeSelectorProps {
  onSelectType: (type: QuestionType) => void;
  selectedType: QuestionType;
}

const QuestionTypeSelector: React.FC<QuestionTypeSelectorProps> = ({ onSelectType, selectedType }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-medium mb-4">Choisissez un type de question</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          className={cn(
            "cursor-pointer transition-all hover:shadow-md",
            selectedType === "simple" 
              ? "ring-2 ring-primary/70 shadow-md" 
              : "hover:bg-accent/10"
          )}
          onClick={() => onSelectType("simple")}
        >
          <CardHeader className="bg-gradient-to-r from-violet-500 to-violet-300 p-4">
            <CardTitle className="text-white">Questions simples</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Une seule estimation à réaliser par question
            </p>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "cursor-pointer transition-all hover:shadow-md",
            selectedType === "multistep" 
              ? "ring-2 ring-primary/70 shadow-md" 
              : "hover:bg-accent/10"
          )}
          onClick={() => onSelectType("multistep")}
        >
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-300 p-4">
            <CardTitle className="text-white">Questions à étapes</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Plusieurs estimations à réaliser par question
            </p>
            <Badge variant="secondary" className="mt-2">+50% bonus</Badge>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "cursor-pointer transition-all hover:shadow-md",
            selectedType === "all" 
              ? "ring-2 ring-primary/70 shadow-md" 
              : "hover:bg-accent/10"
          )}
          onClick={() => onSelectType("all")}
        >
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-300 p-4">
            <CardTitle className="text-white">Tous les types</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Mélange de questions simples et à étapes
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionTypeSelector;
