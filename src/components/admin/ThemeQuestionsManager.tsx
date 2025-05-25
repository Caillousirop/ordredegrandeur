
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash, Eye } from "lucide-react";
import { useThemeQuestions } from "@/hooks/useThemeQuestions";
import { useAuth } from "@/hooks/useAuth";
import { Question, MultiStepQuestion } from "@/components/types";
import { themes } from "@/data/themes";
import QuestionForm from "@/components/quiz/QuestionForm";
import QuestionImporter from "./QuestionImporter";

const ThemeQuestionsManager: React.FC = () => {
  const { questions, loading, deleteQuestion } = useThemeQuestions();
  const { user } = useAuth();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<"all" | "simple" | "multistep">("all");
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | MultiStepQuestion | null>(null);
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // Filter questions based on selected filters
  const filteredQuestions = questions.filter(question => {
    const themeMatch = !selectedTheme || question.theme === selectedTheme;
    const typeMatch = selectedType === "all" || question.type === selectedType;
    return themeMatch && typeMatch;
  });

  const getThemeName = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    return theme ? theme.name : themeId;
  };

  const handleEdit = (question: Question | MultiStepQuestion) => {
    setEditingQuestion(question);
    setShowQuestionForm(true);
  };

  const handleDelete = async (questionId: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette question ?")) {
      await deleteQuestion(questionId);
    }
  };

  const handleAddNew = () => {
    setEditingQuestion(null);
    setShowQuestionForm(true);
  };

  const toggleExpand = (questionId: string) => {
    setExpandedQuestionId(expandedQuestionId === questionId ? null : questionId);
  };

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gestionnaire des Questions</CardTitle>
          <CardDescription>
            Vous devez être connecté pour gérer les questions
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gestionnaire des Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Import Section - Show only if there are no questions in database */}
      {questions.length === 0 && (
        <QuestionImporter />
      )}

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gestionnaire des Questions des Thèmes</CardTitle>
              <CardDescription>
                Gérez les questions stockées dans Supabase ({questions.length} questions)
              </CardDescription>
            </div>
            <Button onClick={handleAddNew} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Ajouter une question
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Show importer button even when there are questions */}
          {questions.length > 0 && (
            <div className="mb-4">
              <QuestionImporter />
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTheme === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTheme(null)}
              >
                Tous les thèmes
              </Badge>
              {themes.map(theme => (
                <Badge
                  key={theme.id}
                  variant={selectedTheme === theme.id ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTheme(theme.id)}
                >
                  {theme.name}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Badge
                variant={selectedType === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("all")}
              >
                Tous types
              </Badge>
              <Badge
                variant={selectedType === "simple" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("simple")}
              >
                Simple
              </Badge>
              <Badge
                variant={selectedType === "multistep" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType("multistep")}
              >
                Multi-étapes
              </Badge>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map(question => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2">
                      <Badge variant="outline">{getThemeName(question.theme)}</Badge>
                      <Badge>{question.type === "simple" ? "Simple" : "Multi-étapes"}</Badge>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleExpand(question.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(question)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(question.id)}
                        className="text-destructive"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="font-medium mb-2">{question.question}</p>
                  
                  {question.type === "simple" && (
                    <p className="text-sm text-muted-foreground">
                      Réponse: {question.correctAnswer}
                      {question.unit && ` ${question.unit}`}
                    </p>
                  )}

                  {expandedQuestionId === question.id && (
                    <div className="mt-4 p-3 bg-muted/30 rounded">
                      {question.type === "simple" ? (
                        <div>
                          {question.explanation && (
                            <div>
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
                              <p>Réponse: {step.correctAnswer}{step.unit && ` ${step.unit}`}</p>
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
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Aucune question trouvée pour les filtres sélectionnés</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question Form Modal */}
      {showQuestionForm && (
        <QuestionForm
          isOpen={showQuestionForm}
          onClose={() => setShowQuestionForm(false)}
          onSave={() => setShowQuestionForm(false)}
          initialQuestion={editingQuestion || undefined}
        />
      )}
    </div>
  );
};

export default ThemeQuestionsManager;
