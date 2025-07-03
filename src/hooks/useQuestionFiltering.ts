
import { useEffect } from "react";
import { Question, MultiStepQuestion, QuizScore, QuizTheme } from "@/components/types";

interface UseQuestionFilteringProps {
  supabaseQuestions: (Question | MultiStepQuestion)[];
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  user: any;
  scores: QuizScore[];
  setFilteredQuestions: (questions: (Question | MultiStepQuestion)[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setCurrentQuestionId: (id: string | null) => void;
  syncCurrentQuestionId: () => void;
}

export const useQuestionFiltering = ({
  supabaseQuestions,
  selectedTheme,
  selectedType,
  user,
  scores,
  setFilteredQuestions,
  setCurrentQuestionIndex,
  setCurrentQuestionId,
  syncCurrentQuestionId
}: UseQuestionFilteringProps) => {
  useEffect(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      console.log("Aucune question disponible depuis Supabase");
      setFilteredQuestions([]);
      setCurrentQuestionId(null);
      return;
    }

    console.log("Filtering with theme:", selectedTheme?.id);
    console.log("Filtering with type:", selectedType);
    console.log("Total questions available:", supabaseQuestions.length);
    console.log("User connected:", !!user);
    console.log("User scores:", scores.length);
    
    // Start with all questions from Supabase
    let filtered = [...supabaseQuestions];
    
    // Filter by theme if selected
    if (selectedTheme && selectedTheme.id !== "random" && selectedTheme.id !== "challenge-30s") {
      console.log(`Filtering for theme: ${selectedTheme.id}`);
      filtered = filtered.filter(q => q.theme.toLowerCase() === selectedTheme.id.toLowerCase());
      console.log(`After theme filter, questions count: ${filtered.length}`);
    }
    
    // Special handling for challenge-30s theme
    if (selectedTheme && selectedTheme.id === "challenge-30s") {
      console.log("Filtering for 30s challenge - simple questions only");
      filtered = filtered.filter(q => q.type === "simple");
      console.log(`After challenge-30s filter, questions count: ${filtered.length}`);
    }
    
    // Filter by question type if selected (except for challenge-30s which is already filtered to simple)
    if (selectedType !== "all" && selectedTheme?.id !== "challenge-30s") {
      filtered = filtered.filter(q => q.type === selectedType);
      console.log(`After type filter, questions count: ${filtered.length}`);
    }
    
    // For logged users, prioritize unanswered questions
    if (user && scores.length > 0) {
      console.log("🎯 [QUIZ] Priorisation des questions non répondues pour l'utilisateur connecté");
      
      // Get IDs of answered questions
      const answeredQuestionIds = new Set(scores.map(score => score.questionId));
      console.log("Questions déjà répondues:", answeredQuestionIds.size);
      
      // Separate answered and unanswered questions
      const unansweredQuestions = filtered.filter(q => !answeredQuestionIds.has(q.id));
      const answeredQuestions = filtered.filter(q => answeredQuestionIds.has(q.id));
      
      console.log("Questions non répondues:", unansweredQuestions.length);
      console.log("Questions déjà répondues:", answeredQuestions.length);
      
      // For random theme, shuffle within each category
      if (selectedTheme && selectedTheme.id === "random") {
        unansweredQuestions.sort(() => Math.random() - 0.5);
        answeredQuestions.sort(() => Math.random() - 0.5);
      }
      
      // Prioritize unanswered questions first, then answered ones
      filtered = [...unansweredQuestions, ...answeredQuestions];
      
      console.log("✅ [QUIZ] Questions réorganisées : non répondues en premier");
    } else if (selectedTheme && selectedTheme.id === "random") {
      // For random theme without user login, just shuffle
      filtered = filtered.sort(() => Math.random() - 0.5);
    }
    
    console.log("Final filtered questions count:", filtered.length);
    setFilteredQuestions(filtered);
    
    // Réinitialiser l'index à 0 et définir l'ID de la première question
    if (filtered.length > 0) {
      setCurrentQuestionIndex(0);
      setCurrentQuestionId(filtered[0].id);
      console.log("🎯 [QUIZ] Question initiale définie - ID:", filtered[0].id);
    } else {
      setCurrentQuestionIndex(0);
      setCurrentQuestionId(null);
    }
    
    // Synchroniser l'ID après un court délai pour s'assurer que tout est bien mis à jour
    setTimeout(() => {
      syncCurrentQuestionId();
    }, 100);
  }, [selectedTheme, selectedType, supabaseQuestions, user, scores, setFilteredQuestions, setCurrentQuestionIndex, setCurrentQuestionId, syncCurrentQuestionId]);
};
