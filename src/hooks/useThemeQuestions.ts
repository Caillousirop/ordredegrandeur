
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Question, MultiStepQuestion } from "@/components/types";
import { toast } from "sonner";

export const useThemeQuestions = () => {
  const [questions, setQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("theme_questions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching theme questions:", error);
        toast.error("Erreur lors du chargement des questions");
        return;
      }

      // Convert database format to application format
      const formattedQuestions = data?.map((dbQuestion: any) => {
        if (dbQuestion.type === "multistep") {
          return {
            id: dbQuestion.id,
            type: "multistep",
            question: dbQuestion.question,
            steps: dbQuestion.steps || [],
            finalExplanation: dbQuestion.final_explanation,
            theme: dbQuestion.theme
          } as MultiStepQuestion;
        } else {
          return {
            id: dbQuestion.id,
            type: "simple",
            question: dbQuestion.question,
            correctAnswer: Number(dbQuestion.correct_answer),
            unit: dbQuestion.unit,
            explanation: dbQuestion.explanation,
            theme: dbQuestion.theme
          } as Question;
        }
      }) || [];

      setQuestions(formattedQuestions);
    } catch (error) {
      console.error("Error fetching theme questions:", error);
      toast.error("Erreur lors du chargement des questions");
    } finally {
      setLoading(false);
    }
  };

  const addQuestion = async (question: Question | MultiStepQuestion) => {
    try {
      const dbQuestion = {
        question: question.question,
        theme: question.theme,
        type: question.type,
        correct_answer: question.type === "simple" ? question.correctAnswer : 0,
        unit: question.type === "simple" ? question.unit : null,
        explanation: question.type === "simple" ? question.explanation : null,
        steps: question.type === "multistep" ? question.steps : null,
        final_explanation: question.type === "multistep" ? question.finalExplanation : null,
      };

      const { error } = await supabase
        .from("theme_questions")
        .insert(dbQuestion);

      if (error) {
        console.error("Error adding question:", error);
        toast.error("Erreur lors de l'ajout de la question");
        return false;
      }

      toast.success("Question ajoutée avec succès");
      fetchQuestions(); // Refresh the list
      return true;
    } catch (error) {
      console.error("Error adding question:", error);
      toast.error("Erreur lors de l'ajout de la question");
      return false;
    }
  };

  const updateQuestion = async (question: Question | MultiStepQuestion) => {
    try {
      const dbQuestion = {
        question: question.question,
        theme: question.theme,
        type: question.type,
        correct_answer: question.type === "simple" ? question.correctAnswer : 0,
        unit: question.type === "simple" ? question.unit : null,
        explanation: question.type === "simple" ? question.explanation : null,
        steps: question.type === "multistep" ? question.steps : null,
        final_explanation: question.type === "multistep" ? question.finalExplanation : null,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from("theme_questions")
        .update(dbQuestion)
        .eq("id", question.id);

      if (error) {
        console.error("Error updating question:", error);
        toast.error("Erreur lors de la modification de la question");
        return false;
      }

      toast.success("Question modifiée avec succès");
      fetchQuestions(); // Refresh the list
      return true;
    } catch (error) {
      console.error("Error updating question:", error);
      toast.error("Erreur lors de la modification de la question");
      return false;
    }
  };

  const deleteQuestion = async (questionId: string) => {
    try {
      const { error } = await supabase
        .from("theme_questions")
        .delete()
        .eq("id", questionId);

      if (error) {
        console.error("Error deleting question:", error);
        toast.error("Erreur lors de la suppression de la question");
        return false;
      }

      toast.success("Question supprimée avec succès");
      fetchQuestions(); // Refresh the list
      return true;
    } catch (error) {
      console.error("Error deleting question:", error);
      toast.error("Erreur lors de la suppression de la question");
      return false;
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questions,
    loading,
    fetchQuestions,
    addQuestion,
    updateQuestion,
    deleteQuestion
  };
};
