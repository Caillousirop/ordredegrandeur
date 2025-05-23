
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Question, MultiStepQuestion } from "./types";

interface SearchResultsProps {
  results: (Question | MultiStepQuestion)[];
  searchQuery: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, searchQuery }) => {
  if (!searchQuery || searchQuery.trim() === "") {
    return null;
  }

  if (results.length === 0) {
    return (
      <Card className="mt-4">
        <CardContent className="p-4">
          <p className="text-muted-foreground text-center">
            Aucune question trouvée pour "{searchQuery}"
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">
          {results.length} question{results.length > 1 ? 's' : ''} trouvée{results.length > 1 ? 's' : ''} pour "{searchQuery}"
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {results.map((question) => (
            <div key={question.id} className="p-3 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm flex-1">{question.question}</p>
                <div className="flex gap-1 flex-shrink-0">
                  <Badge variant="outline" className="text-xs">
                    {question.theme}
                  </Badge>
                  {question.type === "multistep" && (
                    <Badge variant="secondary" className="text-xs">
                      Étapes
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResults;
