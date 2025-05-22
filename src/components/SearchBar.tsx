
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Apply debounced search
    if (onSearch) {
      // Use a simple debounce to avoid making too many search requests
      const timeoutId = setTimeout(() => {
        onSearch(newQuery);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher une question..."
          value={query}
          onChange={handleChange}
          className="pl-10"
        />
      </div>
      <Button type="submit">Rechercher</Button>
    </form>
  );
};

export default SearchBar;
