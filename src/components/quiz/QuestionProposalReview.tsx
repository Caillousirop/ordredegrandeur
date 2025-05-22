
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ChevronDown, ChevronUp, Edit } from "lucide-react";
import { Question, MultiStepQuestion } from "@/components/types";
import { themes } from "@/data/themes";
import QuestionForm from "@/components/quiz/QuestionForm";

interface QuestionProposalReviewProps {
  proposedQuestions: (Question | MultiStepQuestion)[];
  onApprove: (question: Question | MultiStepQuestion) => void;
  onReject: (questionId: string) => void;
  onFinishReview: () => void;
}

const QuestionProposalReview: React.FC<QuestionProposalReviewProps> = ({
  proposedQuestions,
  onApprove,
  onReject,
  onFinishReview
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [filteredTheme, setFilteredTheme] = useState<string | null>(null);
  const [currentEditingQuestion, setCurrentEditingQuestion] = useState<Question | MultiStepQuestion | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleExpand = (id: string) => {
    if (expandedQuestionId === id) {
      setExpandedQuestionId(null);
    } else {
      setExpandedQuestionId(id);
    }
  };

  const handleFilterChange = (themeId: string | null) => {
    setFilteredTheme(themeId);
  };

  const filteredQuestions = filteredTheme
    ? proposedQuestions.filter(q => q.theme === filteredTheme)
    : proposedQuestions;

  const getThemeName = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme ? theme.name : themeId;
  };

  const handleEdit = (question: Question | MultiStepQuestion) => {
    setCurrentEditingQuestion(question);
    setShowEditModal(true);
  };

  const handleSaveEdit = (editedQuestion: Question | MultiStepQuestion) => {
    onApprove(editedQuestion);
    setShowEditModal(false);
    setCurrentEditingQuestion(null);
  };

  return (
    <div className="space-y-4">
      {showEditModal && currentEditingQuestion && (
        <QuestionForm
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
          initialQuestion={currentEditingQuestion}
        />
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Propositions de questions ({proposedQuestions.length})
        </h2>
        <Button onClick={onFinishReview} variant="outline">
          Terminer la revue
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge
          variant={filteredTheme === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => handleFilterChange(null)}
        >
          Tous
        </Badge>
        {themes.map(theme => (
          <Badge
            key={theme.id}
            variant={filteredTheme === theme.id ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => handleFilterChange(theme.id)}
          >
            {theme.name}
          </Badge>
        ))}
      </div>

      {filteredQuestions.length > 0 ? (
        <div className="space-y-4">
          {filteredQuestions.map(question => (
            <div
              key={question.id}
              className="border rounded-md overflow-hidden"
            >
              <div className="p-4 flex flex-col space-y-3">
                <div className="flex justify-between">
                  <Badge variant="outline">{getThemeName(question.theme)}</Badge>
                  <Badge>{question.type === "simple" ? "Simple" : "Multi-étapes"}</Badge>
                </div>
                
                <h3 className="font-medium text-lg">{question.question}</h3>
                
                {question.type === "simple" && (
                  <p>
                    Réponse: <span className="font-medium">{question.correctAnswer}</span>
                    {question.unit && <span> {question.unit}</span>}
                  </p>
                )}
                
                <div className="flex justify-between items-center mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center"
                    onClick={() => toggleExpand(question.id)}
                  >
                    {expandedQuestionId === question.id ? (
                      <><ChevronUp className="h-4 w-4 mr-1" /> Moins de détails</>
                    ) : (
                      <><ChevronDown className="h-4 w-4 mr-1" /> Plus de détails</>
                    )}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center"
                      onClick={() => handleEdit(question)}
                    >
                      <Edit className="h-4 w-4 mr-1" /> Éditer
                    </Button>
                    <Button 
                      variant="default" 
                      className="flex items-center" 
                      size="sm"
                      onClick={() => onApprove(question)}
                    >
                      <Check className="h-4 w-4 mr-1" /> Approuver
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="flex items-center" 
                      size="sm"
                      onClick={() => onReject(question.id)}
                    >
                      <X className="h-4 w-4 mr-1" /> Rejeter
                    </Button>
                  </div>
                </div>
              </div>
              
              {expandedQuestionId === question.id && (
                <div className="bg-muted/30 p-4 border-t">
                  {question.type === "simple" ? (
                    <div>
                      {question.explanation && (
                        <div className="mb-2">
                          <p className="font-medium">Explication:</p>
                          <p className="text-sm">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="font-medium">Étapes:</p>
                      {question.steps.map((step, index) => (
                        <div key={index} className="ml-4 border-l-2 pl-2">
                          <p className="font-medium">Étape {index + 1}: {step.question}</p>
                          <p>
                            Réponse: {step.correctAnswer}
                            {step.unit && <span> {step.unit}</span>}
                          </p>
                          {step.explanation && (
                            <p className="text-sm text-muted-foreground mt-1">{step.explanation}</p>
                          )}
                        </div>
                      ))}
                      {question.finalExplanation && (
                        <div className="mt-2">
                          <p className="font-medium">Explication finale:</p>
                          <p className="text-sm">{question.finalExplanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-muted-foreground">Aucune question proposée pour ce thème</p>
        </div>
      )}
    </div>
  );
};

export default QuestionProposalReview;
