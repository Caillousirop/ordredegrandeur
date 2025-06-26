
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { formatNumberInput, cleanNumberInput } from "@/utils/numberFormatter";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  
  // Apply debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (onSearch) {
        // Send the clean query (without spaces) for search
        const cleanQuery = cleanNumberInput(query);
        onSearch(cleanQuery);
      }
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the clean query (without spaces) for search
    const cleanQuery = cleanNumberInput(query);
    onSearch(cleanQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Check if the input looks like a number (digits with potential separators)
    const cleanValue = cleanNumberInput(newValue);
    
    if (/^\d+$/.test(cleanValue) && cleanValue.length > 3) {
      // Format as number with separators
      const formatted = formatNumberInput(newValue);
      setDisplayValue(formatted);
      setQuery(cleanValue); // Store clean value for search
    } else {
      // For non-numeric input, use as-is
      setDisplayValue(newValue);
      setQuery(newValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher une question..."
          value={displayValue}
          onChange={handleChange}
          className="pl-10"
        />
      </div>
      <Button type="submit">Rechercher</Button>
    </form>
  );
};

export default SearchBar;
