
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionTypeSelectorProps {
  onSelectType: (type: "simple" | "multistep" | "all") => void;
  selectedType: "simple" | "multistep" | "all";
  language: 'fr' | 'en';
}

const QuestionTypeSelector: React.FC<QuestionTypeSelectorProps> = ({
  onSelectType,
  selectedType,
  language = 'fr'
}) => {
  return (
    <Card className="border border-secondary/40">
      <CardContent className="pt-6">
        <RadioGroup 
          defaultValue={selectedType} 
          value={selectedType}
          onValueChange={(value) => onSelectType(value as "simple" | "multistep" | "all")}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="cursor-pointer">
              {language === 'fr' ? 'Toutes les questions' : 'All questions'}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="simple" id="simple" />
            <Label htmlFor="simple" className="cursor-pointer">
              {language === 'fr' ? 'Questions simples' : 'Simple questions'}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multistep" id="multistep" />
            <Label htmlFor="multistep" className="cursor-pointer">
              {language === 'fr' ? 'Questions à étapes' : 'Multi-step questions'}
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionTypeSelector;
