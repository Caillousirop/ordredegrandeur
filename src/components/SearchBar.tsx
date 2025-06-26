
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  
  // Function to format numbers with thousand separators
  const formatNumber = (value: string): string => {
    // Remove all non-digit characters except spaces (which we use as separators)
    const cleanValue = value.replace(/[^\d]/g, '');
    
    if (!cleanValue) return value;
    
    // Check if the input is purely numeric
    if (/^\d+$/.test(cleanValue)) {
      // Add spaces every 3 digits from the right
      return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    
    return value;
  };
  
  // Apply debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (onSearch) {
        // Send the clean query (without spaces) for search
        const cleanQuery = query.replace(/\s/g, '');
        onSearch(cleanQuery);
      }
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send the clean query (without spaces) for search
    const cleanQuery = query.replace(/\s/g, '');
    onSearch(cleanQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Check if the input looks like a number (digits with potential separators)
    const maybeNumber = newValue.replace(/\s/g, '');
    
    if (/^\d+$/.test(maybeNumber) && maybeNumber.length > 3) {
      // Format as number with separators
      const formatted = formatNumber(newValue);
      setDisplayValue(formatted);
      setQuery(maybeNumber); // Store clean value for search
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
