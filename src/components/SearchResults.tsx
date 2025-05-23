
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Question, MultiStepQuestion } from "./types";

interface SearchResultsProps {
  searchQuery: string;
  searchResults: (Question | MultiStepQuestion)[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchQuery, searchResults }) => {
  if (!searchQuery.trim() || searchResults.length === 0) {
    return null;
  }

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    // Create a regex that preserves accents by escaping special characters
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div className="text-sm text-muted-foreground mb-2">
        {searchResults.length} question{searchResults.length > 1 ? 's' : ''} trouvée{searchResults.length > 1 ? 's' : ''}
      </div>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {searchResults.map((question, index) => (
          <Card key={index} className="text-sm">
            <CardContent className="p-3">
              <p className="mb-2">
                {highlightText(question.question, searchQuery)}
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">
                  {question.theme}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {question.type === "multistep" ? "À étapes" : "Simple"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
