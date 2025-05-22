import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileDown, FileUp, Copy, Trash, Plus, Calendar, ClipboardCheck } from "lucide-react";
import { parseQuestionsFromJSON, sampleImportFormat } from "@/utils/questionImporter";
import { toast } from "sonner";
import { Question, MultiStepQuestion } from "@/components/types";
import AdminQuestionsList from "@/components/quiz/AdminQuestionsList";
import QuestionForm from "@/components/quiz/QuestionForm";
import QuestionScheduler from "@/components/quiz/QuestionScheduler";
import QuestionProposalReview from "@/components/quiz/QuestionProposalReview";

const Admin = () => {
  const navigate = useNavigate();
  const [jsonInput, setJsonInput] = useState("");
  const [simpleQuestions, setSimpleQuestions] = useState<Question[]>([]);
  const [multiStepQuestions, setMultiStepQuestions] = useState<MultiStepQuestion[]>([]);
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [currentEditQuestion, setCurrentEditQuestion] = useState<Question | MultiStepQuestion | undefined>(undefined);
  const [proposedQuestions, setProposedQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [showProposalReview, setShowProposalReview] = useState(false);
  
  // Load questions from localStorage on component mount
  useEffect(() => {
    // Load regular questions
    const storedQuestions = localStorage.getItem("admin-questions");
    if (storedQuestions) {
      try {
        const parsed = JSON.parse(storedQuestions);
        setSimpleQuestions(parsed.simpleQuestions || []);
        setMultiStepQuestions(parsed.multiStepQuestions || []);
        console.log("Loaded questions from localStorage:", parsed);
      } catch (error) {
        console.error("Error parsing stored questions:", error);
      }
    }
    
    // Load proposed questions
    const storedProposedQuestions = localStorage.getItem("proposed-questions");
    if (storedProposedQuestions) {
      try {
        const parsed = JSON.parse(storedProposedQuestions);
        setProposedQuestions(parsed);
        
        // If there are proposed questions, show a toast
        if (parsed.length > 0) {
          toast.info(`Vous avez ${parsed.length} questions proposées à examiner`, {
            action: {
              label: "Examiner",
              onClick: () => setShowProposalReview(true)
            }
          });
        }
      } catch (error) {
        console.error("Error parsing stored proposed questions:", error);
      }
    }
  }, []);

  // Save questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("admin-questions", JSON.stringify({ 
      simpleQuestions, 
      multiStepQuestions 
    }));
    console.log("Saved questions to localStorage:", { simpleQuestions, multiStepQuestions });
  }, [simpleQuestions, multiStepQuestions]);
  
  // Save proposed questions to localStorage
  useEffect(() => {
    localStorage.setItem("proposed-questions", JSON.stringify(proposedQuestions));
  }, [proposedQuestions]);

  const handleImport = () => {
    try {
      const result = parseQuestionsFromJSON(jsonInput);
      
      // Merge with existing questions, avoiding duplicates by ID
      const mergedSimpleQuestions = [
        ...simpleQuestions,
        ...result.simpleQuestions.filter(
          newQ => !simpleQuestions.some(existingQ => existingQ.id === newQ.id)
        )
      ];
      
      const mergedMultiStepQuestions = [
        ...multiStepQuestions,
        ...result.multiStepQuestions.filter(
          newQ => !multiStepQuestions.some(existingQ => existingQ.id === newQ.id)
        )
      ];
      
      setSimpleQuestions(mergedSimpleQuestions);
      setMultiStepQuestions(mergedMultiStepQuestions);
      
      const totalImported = result.simpleQuestions.length + result.multiStepQuestions.length;
      toast.success(`${totalImported} questions importées avec succès!`);
      
      // Clear the input field after successful import
      setJsonInput("");
    } catch (error) {
      toast.error("Erreur lors de l'import: " + (error as Error).message);
    }
  };

  const copyExampleFormat = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleImportFormat, null, 2));
    toast.success("Format d'exemple copié dans le presse-papier");
  };

  const handleExport = () => {
    const exportData = {
      simpleQuestions,
      multiStepQuestions
    };
    
    // Create a download link
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ordredegrandeur_questions.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    toast.success("Questions exportées avec succès!");
  };

  const handleDeleteQuestion = (id: string, type: "simple" | "multistep") => {
    if (type === "simple") {
      setSimpleQuestions(simpleQuestions.filter(q => q.id !== id));
    } else {
      setMultiStepQuestions(multiStepQuestions.filter(q => q.id !== id));
    }
    toast.success("Question supprimée avec succès!");
  };

  const handleDeleteAllQuestions = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer toutes les questions?")) {
      setSimpleQuestions([]);
      setMultiStepQuestions([]);
      toast.success("Toutes les questions ont été supprimées!");
    }
  };
  
  const handleEditQuestion = (question: Question | MultiStepQuestion) => {
    setCurrentEditQuestion(question);
    setIsQuestionFormOpen(true);
  };
  
  const handleAddQuestion = () => {
    setCurrentEditQuestion(undefined);
    setIsQuestionFormOpen(true);
  };
  
  const handleSaveQuestion = (question: Question | MultiStepQuestion) => {
    if (question.type === "simple") {
      // If editing an existing question, update it, otherwise add it as new
      if (currentEditQuestion) {
        setSimpleQuestions(prev => 
          prev.map(q => q.id === question.id ? question as Question : q)
        );
      } else {
        setSimpleQuestions(prev => [...prev, question as Question]);
      }
    } else {
      // Same for multi-step questions
      if (currentEditQuestion) {
        setMultiStepQuestions(prev => 
          prev.map(q => q.id === question.id ? question as MultiStepQuestion : q)
        );
      } else {
        setMultiStepQuestions(prev => [...prev, question as MultiStepQuestion]);
      }
    }
    
    toast.success(currentEditQuestion ? "Question mise à jour avec succès!" : "Question ajoutée avec succès!");
  };

  // Handler for new automatically generated questions
  const handleNewQuestionsGenerated = (questions: (Question | MultiStepQuestion)[]) => {
    setProposedQuestions(questions);
    setShowProposalReview(true);
  };
  
  // Handle approving a proposed question
  const handleApproveQuestion = (question: Question | MultiStepQuestion) => {
    if (question.type === "simple") {
      setSimpleQuestions(prev => [...prev, question as Question]);
    } else {
      setMultiStepQuestions(prev => [...prev, question as MultiStepQuestion]);
    }
    
    // Remove from proposed questions
    setProposedQuestions(prev => prev.filter(q => q.id !== question.id));
    
    toast.success("Question approuvée et ajoutée avec succès!");
  };
  
  // Handle rejecting a proposed question
  const handleRejectQuestion = (questionId: string) => {
    setProposedQuestions(prev => prev.filter(q => q.id !== questionId));
    toast.success("Question rejetée avec succès!");
  };
  
  // Handle finishing the review process
  const handleFinishReview = () => {
    setShowProposalReview(false);
    
    if (proposedQuestions.length > 0) {
      toast.info(`${proposedQuestions.length} questions proposées restantes`, {
        action: {
          label: "Examiner",
          onClick: () => setShowProposalReview(true)
        }
      });
    } else {
      toast.success("Toutes les questions proposées ont été traitées!");
    }
  };

  return (
    <div className="container px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mr-2"
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Administration</h1>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleAddQuestion}
            className="flex items-center gap-1"
          >
            <Plus size={16} />
            Créer une question
          </Button>
          
          {proposedQuestions.length > 0 && (
            <Button 
              variant="default"
              onClick={() => setShowProposalReview(true)}
              className="flex items-center gap-1"
            >
              <ClipboardCheck size={16} />
              Examiner les propositions ({proposedQuestions.length})
            </Button>
          )}
          
          {(simpleQuestions.length > 0 || multiStepQuestions.length > 0) && (
            <Button 
              variant="destructive" 
              onClick={handleDeleteAllQuestions} 
              size="sm"
              className="flex items-center gap-1"
            >
              <Trash size={16} />
              Supprimer tout
            </Button>
          )}
        </div>
      </div>

      {!showProposalReview ? (
        <>
          <QuestionScheduler onNewQuestionsGenerated={handleNewQuestionsGenerated} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Importer des questions</CardTitle>
                <CardDescription>
                  Importez des questions en format JSON
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  className="min-h-[300px] font-mono text-sm"
                  placeholder="Collez votre JSON ici..."
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={copyExampleFormat}>
                  <Copy className="mr-2 h-4 w-4" /> Format d'exemple
                </Button>
                <Button onClick={handleImport}>
                  <FileUp className="mr-2 h-4 w-4" /> Importer
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Résultat</CardTitle>
                <CardDescription>
                  Questions importées: {simpleQuestions.length + multiStepQuestions.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {(simpleQuestions.length > 0 || multiStepQuestions.length > 0) ? (
                  <div className="space-y-4">
                    <p className="font-medium">Questions simples: {simpleQuestions.length}</p>
                    <p className="font-medium">Questions à étapes: {multiStepQuestions.length}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Importez des questions pour voir le résultat</p>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  disabled={simpleQuestions.length === 0 && multiStepQuestions.length === 0}
                  onClick={handleExport}
                >
                  <FileDown className="mr-2 h-4 w-4" /> Exporter
                </Button>
              </CardFooter>
            </Card>
          </div>

          {(simpleQuestions.length > 0 || multiStepQuestions.length > 0) && (
            <AdminQuestionsList 
              simpleQuestions={simpleQuestions}
              multiStepQuestions={multiStepQuestions}
              onDelete={handleDeleteQuestion}
              onEdit={handleEditQuestion}
            />
          )}
        </>
      ) : (
        <QuestionProposalReview 
          proposedQuestions={proposedQuestions}
          onApprove={handleApproveQuestion}
          onReject={handleRejectQuestion}
          onFinishReview={handleFinishReview}
        />
      )}
      
      <QuestionForm 
        isOpen={isQuestionFormOpen}
        onClose={() => setIsQuestionFormOpen(false)}
        onSave={handleSaveQuestion}
        initialQuestion={currentEditQuestion}
      />
    </div>
  );
};

export default Admin;
