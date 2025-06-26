
import React from "react";
import { Input } from "@/components/ui/input";
import { formatNumberInput, cleanNumberInput } from "@/utils/numberFormatter";

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  placeholder = "Votre réponse",
  className = "",
  disabled = false,
  autoFocus = false,
  onKeyPress
}) => {
  const [displayValue, setDisplayValue] = React.useState(value);

  React.useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Permettre la suppression complète
    if (newValue === "") {
      setDisplayValue("");
      onChange("");
      return;
    }
    
    // Vérifier si c'est un nombre (chiffres avec potentiels séparateurs)
    const cleanValue = cleanNumberInput(newValue);
    
    // Si c'est un nombre valide
    if (/^\d+$/.test(cleanValue)) {
      // Formater avec des espaces
      const formatted = formatNumberInput(newValue);
      setDisplayValue(formatted);
      onChange(cleanValue); // Envoyer la valeur propre
    } else {
      // Pour les entrées non numériques, utiliser tel quel
      setDisplayValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <Input
      type="text"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      autoFocus={autoFocus}
      onKeyPress={onKeyPress}
    />
  );
};

export default NumberInput;
