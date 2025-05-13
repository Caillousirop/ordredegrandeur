
import React from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import CalculatorComponent from "../Calculator";

interface FloatingCalculatorProps {
  calculatorOpen: boolean;
  setCalculatorOpen: (open: boolean) => void;
}

const FloatingCalculator: React.FC<FloatingCalculatorProps> = ({
  calculatorOpen,
  setCalculatorOpen
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={calculatorOpen} onOpenChange={setCalculatorOpen}>
        <PopoverTrigger asChild>
          <Button size="sm" className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-lg border border-orange-300 text-white font-medium px-4">
            <Calculator className="h-4 w-4" /> Calculatrice
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="p-0 w-auto">
          <CalculatorComponent />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingCalculator;
