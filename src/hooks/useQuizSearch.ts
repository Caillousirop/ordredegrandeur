
import { useState, useEffect } from "react";
import { Question, MultiStepQuestion } from "@/components/types";

interface UseQuizSearchProps {
  supabaseQuestions: (Question | MultiStepQuestion)[];
}

export const useQuizSearch = ({ supabaseQuestions }: UseQuizSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<(Question | MultiStepQuestion)[]>([]);

  // Handle search separately with proper accent handling
  useEffect(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      setSearchResults([]);
      return;
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      const results = supabaseQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerCaseQuery)
      );
      
      console.log("Search results for:", searchQuery, "found:", results.length);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, supabaseQuestions]);

  const handleSearch = (query: string) => {
    console.log("Search query received:", query);
    setSearchQuery(query);
  };

  return {
    searchQuery,
    searchResults,
    handleSearch
  };
};
