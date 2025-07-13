
import React from "react";
import { Input } from "@/components/ui/input";
import { formatNumberInput, cleanNumberInput, parseNumberInput } from "@/utils/numberFormatter";

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
    
    // Nettoyer la valeur (enlever tous les espaces)
    const cleanValue = cleanNumberInput(newValue);
    
    // Vérifier si c'est un nombre valide (chiffres + une virgule ou un point maximum)
    const decimalRegex = /^\d*[.,]?\d*$/;
    
    if (decimalRegex.test(cleanValue)) {
      // Formater automatiquement l'affichage
      const formatted = formatNumberInput(cleanValue);
      setDisplayValue(formatted);
      
      // Envoyer la valeur propre (sans espaces, avec point décimal)
      const cleanForBackend = cleanValue.replace(',', '.');
      onChange(cleanForBackend);
    }
    // Si ce n'est pas numérique, on ignore la saisie
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
