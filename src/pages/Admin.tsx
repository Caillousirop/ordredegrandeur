
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, ClipboardCheck } from "lucide-react";
import { toast } from "sonner";
import { Question, MultiStepQuestion } from "@/components/types";
import QuestionForm from "@/components/quiz/QuestionForm";
import QuestionScheduler from "@/components/quiz/QuestionScheduler";
import QuestionProposalReview from "@/components/quiz/QuestionProposalReview";
import QuestionValidator from "@/components/admin/QuestionValidator";
import { supabase } from "@/integrations/supabase/client";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("scheduler");
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [currentEditQuestion, setCurrentEditQuestion] = useState<Question | MultiStepQuestion | undefined>(undefined);
  const [proposedQuestions, setProposedQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [showProposalReview, setShowProposalReview] = useState(false);

  const handleAddQuestion = () => {
    setCurrentEditQuestion(undefined);
    setIsQuestionFormOpen(true);
  };
  
  const handleSaveQuestion = async (question: Question | MultiStepQuestion) => {
    try {
      // Convertir la question locale vers le format Supabase
      const supabaseQuestion = {
        question: question.question,
        type: question.type,
        theme: question.theme,
        correct_answer: question.correctAnswer,
        unit: question.unit || null,
        explanation: question.explanation || null,
        final_explanation: question.type === "multistep" ? (question as MultiStepQuestion).finalExplanation || null : null,
        steps: question.type === "multistep" ? (question as MultiStepQuestion).steps : null,
        is_active: true,
        priority: 0
      };

      if (currentEditQuestion) {
        // Mise à jour d'une question existante
        const { error } = await supabase
          .from('quiz_questions')
          .update(supabaseQuestion)
          .eq('id', question.id);
        
        if (error) throw error;
        toast.success("Question mise à jour avec succès!");
      } else {
        // Création d'une nouvelle question
        const { error } = await supabase
          .from('quiz_questions')
          .insert(supabaseQuestion);
        
        if (error) throw error;
        toast.success("Question ajoutée avec succès!");
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      toast.error("Erreur lors de la sauvegarde de la question");
    }
  };

  // Handler for new automatically generated questions
  const handleNewQuestionsGenerated = (questions: (Question | MultiStepQuestion)[]) => {
    setProposedQuestions(questions);
    setShowProposalReview(true);
  };
  
  // Handle approving a proposed question
  const handleApproveQuestion = async (question: Question | MultiStepQuestion) => {
    try {
      const supabaseQuestion = {
        question: question.question,
        type: question.type,
        theme: question.theme,
        correct_answer: question.correctAnswer,
        unit: question.unit || null,
        explanation: question.explanation || null,
        final_explanation: question.type === "multistep" ? (question as MultiStepQuestion).finalExplanation || null : null,
        steps: question.type === "multistep" ? (question as MultiStepQuestion).steps : null,
        is_active: true,
        priority: 0
      };

      const { error } = await supabase
        .from('quiz_questions')
        .insert(supabaseQuestion);
      
      if (error) throw error;
      
      // Remove from proposed questions
      setProposedQuestions(prev => prev.filter(q => q.id !== question.id));
      toast.success("Question approuvée et ajoutée avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'approbation:", error);
      toast.error("Erreur lors de l'approbation de la question");
    }
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
        </div>
      </div>

      {!showProposalReview ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="scheduler">Planificateur</TabsTrigger>
            <TabsTrigger value="validator">Validateur</TabsTrigger>
          </TabsList>

          <TabsContent value="scheduler" className="mt-6">
            <QuestionScheduler onNewQuestionsGenerated={handleNewQuestionsGenerated} />
          </TabsContent>

          <TabsContent value="validator" className="mt-6">
            <QuestionValidator />
          </TabsContent>
        </Tabs>
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
