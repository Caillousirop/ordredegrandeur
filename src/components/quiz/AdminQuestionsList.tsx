
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Trash, Edit } from "lucide-react";
import { Question, MultiStepQuestion } from "@/components/types";

interface AdminQuestionsListProps {
  simpleQuestions: Question[];
  multiStepQuestions: MultiStepQuestion[];
  onDelete: (id: string, type: "simple" | "multistep") => void;
  onEdit: (question: Question | MultiStepQuestion) => void;
}

const AdminQuestionsList: React.FC<AdminQuestionsListProps> = ({
  simpleQuestions,
  multiStepQuestions,
  onDelete,
  onEdit
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<{id: string, type: "simple" | "multistep"} | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedQuestionId === id) {
      setExpandedQuestionId(null);
    } else {
      setExpandedQuestionId(id);
    }
  };

  const handleDeleteClick = (id: string, type: "simple" | "multistep") => {
    setShowDeleteConfirm({id, type});
  };

  const confirmDelete = () => {
    if (showDeleteConfirm) {
      onDelete(showDeleteConfirm.id, showDeleteConfirm.type);
      setShowDeleteConfirm(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  return (
    <div className="mt-6 border rounded-md">
      <h3 className="px-4 py-3 font-medium border-b">Questions importées ({simpleQuestions.length + multiStepQuestions.length})</h3>
      
      {showDeleteConfirm && (
        <div className="p-4 bg-muted/30 border-b">
          <p className="mb-3 font-medium">Êtes-vous sûr de vouloir supprimer cette question ?</p>
          <div className="flex gap-2">
            <Button onClick={confirmDelete} variant="destructive" size="sm">
              Supprimer
            </Button>
            <Button onClick={cancelDelete} variant="outline" size="sm">
              Annuler
            </Button>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Question</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Thème</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {simpleQuestions.map((question) => (
              <TableRow key={question.id} className="group">
                <TableCell className="font-medium">{question.question}</TableCell>
                <TableCell>Simple</TableCell>
                <TableCell>{question.theme}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity"
                      onClick={() => onEdit(question)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity text-destructive"
                      onClick={() => handleDeleteClick(question.id, "simple")}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {multiStepQuestions.map((question) => (
              <React.Fragment key={question.id}>
                <TableRow className="group">
                  <TableCell className="font-medium">
                    <button 
                      onClick={() => toggleExpand(question.id)}
                      className="text-left hover:underline"
                    >
                      {question.question}
                    </button>
                  </TableCell>
                  <TableCell>Multi-étapes ({question.steps.length})</TableCell>
                  <TableCell>{question.theme}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity"
                        onClick={() => onEdit(question)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity text-destructive"
                        onClick={() => handleDeleteClick(question.id, "multistep")}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {expandedQuestionId === question.id && (
                  <TableRow>
                    <TableCell colSpan={4} className="bg-muted/30">
                      <div className="p-3 text-sm">
                        <h4 className="font-medium mb-2">Étapes:</h4>
                        <ul className="space-y-2 ml-5 list-disc">
                          {question.steps.map((step, index) => (
                            <li key={index}>
                              {step.question} ({step.correctAnswer} {step.unit || ''})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
            {simpleQuestions.length === 0 && multiStepQuestions.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  Aucune question importée
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminQuestionsList;
