
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, CircleCheck } from "lucide-react";
import AccuracyGauge from "../AccuracyGauge";
import NumberInput from "../NumberInput";

interface DirectAnswerSectionProps {
  directAnswer: string;
  onDirectAnswerChange: (value: string) => void;
  onDirectSubmit: (e: React.FormEvent) => void;
}

const DirectAnswerSection: React.FC<DirectAnswerSectionProps> = ({
  directAnswer,
  onDirectAnswerChange,
  onDirectSubmit
}) => {
  return (
    <div className="space-y-4 p-4 rounded-lg border border-border/40">
      <h3 className="font-medium">Réponse directe <Badge variant="secondary" className="ml-1">+50% points</Badge></h3>
      <form onSubmit={onDirectSubmit} className="space-y-4">
        <div className="flex items-center gap-2">
          <NumberInput 
            value={directAnswer} 
            onChange={onDirectAnswerChange} 
            placeholder="Réponse" 
            className="flex-grow" 
          />
        </div>
        <Button type="submit" className="w-full">Valider</Button>
      </form>
    </div>
  );
};

export default DirectAnswerSection;
