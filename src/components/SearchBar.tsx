
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  language: 'fr' | 'en';
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, language = 'fr' }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={language === 'fr' ? "Rechercher des questions..." : "Search questions..."}
        className="flex-grow rounded-r-none"
      />
      <Button type="submit" variant="secondary" className="rounded-l-none">
        <Search className="h-4 w-4 mr-2" />
        {language === 'fr' ? "Chercher" : "Search"}
      </Button>
    </form>
  );
};

export default SearchBar;
