
import React from "react";
import { Button } from "@/components/ui/button";

interface FinalExplanationProps {
  finalExplanation?: string;
  onNextQuestion: () => void;
}

const FinalExplanation: React.FC<FinalExplanationProps> = ({
  finalExplanation,
  onNextQuestion
}) => {
  return (
    <div className="p-4 mt-4 border-2 border-primary/20 rounded-md">
      {finalExplanation && (
        <div className="mt-2 text-sm mb-4">
          <p className="font-medium">Explication finale:</p>
          <p>{finalExplanation}</p>
        </div>
      )}
      <Button onClick={onNextQuestion} className="w-full mt-2 bg-gradient-to-r from-primary to-primary/80">
        Question suivante
      </Button>
    </div>
  );
};

export default FinalExplanation;
