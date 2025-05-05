
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Calculator as CalculatorIcon } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentOperation, setCurrentOperation] = useState("");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [newInput, setNewInput] = useState(true);

  const handleNumberClick = (num: string) => {
    if (newInput || display === "0") {
      setDisplay(num);
      setNewInput(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperationClick = (operation: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue !== null && !newInput) {
      // Complete the previous operation
      const result = calculateResult(previousValue, currentValue, currentOperation);
      setDisplay(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    
    setCurrentOperation(operation);
    setNewInput(true);
  };

  const calculateResult = (num1: number, num2: number, operation: string): number => {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "×":
        return num1 * num2;
      case "÷":
        return num2 !== 0 ? num1 / num2 : NaN;
      default:
        return num2;
    }
  };

  const handleEqualsClick = () => {
    if (previousValue === null || newInput) return;
    
    const currentValue = parseFloat(display);
    const result = calculateResult(previousValue, currentValue, currentOperation);
    
    setDisplay(String(result));
    setPreviousValue(null);
    setCurrentOperation("");
    setNewInput(true);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setPreviousValue(null);
    setCurrentOperation("");
    setNewInput(true);
  };

  const handleDecimalClick = () => {
    if (newInput) {
      setDisplay("0.");
      setNewInput(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <Card className="w-full max-w-[300px] shadow-lg border-2 border-orange-400">
      <CardHeader className="p-3 pb-0 bg-gradient-to-r from-orange-500 to-orange-400">
        <CardTitle className="text-sm flex items-center gap-2 text-white">
          <CalculatorIcon className="h-4 w-4" /> Calculatrice
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="bg-muted p-2 rounded-md mb-2 text-right">
          <div className="text-xl font-medium">{display}</div>
          {currentOperation && previousValue !== null && (
            <div className="text-xs text-muted-foreground">{previousValue} {currentOperation}</div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-1 mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleClearClick()}
            className="text-destructive"
          >
            AC
          </Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("+/-")}>+/-</Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("%")}>%</Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("÷")}>÷</Button>
          
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("7")}>7</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("8")}>8</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("9")}>9</Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("×")}>×</Button>
          
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("4")}>4</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("5")}>5</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("6")}>6</Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("-")}>−</Button>
          
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("1")}>1</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("2")}>2</Button>
          <Button variant="outline" size="sm" onClick={() => handleNumberClick("3")}>3</Button>
          <Button variant="outline" size="sm" className="text-primary" onClick={() => handleOperationClick("+")}>+</Button>
          
          <Button variant="outline" size="sm" className="col-span-2" onClick={() => handleNumberClick("0")}>0</Button>
          <Button variant="outline" size="sm" onClick={() => handleDecimalClick()}>.</Button>
          <Button variant="outline" size="sm" className="bg-orange-500 text-white hover:bg-orange-600" onClick={() => handleEqualsClick()}>=</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
