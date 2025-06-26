
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
    
    // Nettoyer la valeur (enlever tous les espaces)
    const cleanValue = cleanNumberInput(newValue);
    
    // Vérifier si c'est un nombre valide (uniquement des chiffres)
    if (/^\d+$/.test(cleanValue)) {
      // Formater automatiquement avec des espaces si le nombre a plus de 3 chiffres
      const formatted = cleanValue.length > 3 ? formatNumberInput(cleanValue) : cleanValue;
      setDisplayValue(formatted);
      onChange(cleanValue); // Envoyer la valeur propre (sans espaces)
    } else if (/^\d*$/.test(cleanValue)) {
      // Autoriser les nombres partiels pendant la saisie
      setDisplayValue(cleanValue);
      onChange(cleanValue);
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
