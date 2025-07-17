import { useMemo } from "react";
import { Question, MultiStepQuestion, QuizTheme } from "@/components/types";
import { useSupabaseQuestions } from "@/hooks/useSupabaseQuestions";
import { useQuestionTracking } from "@/hooks/useQuestionTracking";

interface UseQuizDataProps {
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  searchQuery: string;
}

export const useQuizData = ({ selectedTheme, selectedType, searchQuery }: UseQuizDataProps) => {
  const { questions: supabaseQuestions, themes: supabaseThemes, loading: questionsLoading, error: questionsError } = useSupabaseQuestions();
  const { viewedQuestions, loading: trackingLoading } = useQuestionTracking();
  
  // Calculer les questions filtrées
  const filteredQuestions = useMemo(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      return [];
    }

    let filtered = [...supabaseQuestions];
    
    // Filter by theme if selected
    if (selectedTheme && selectedTheme.id !== "random" && selectedTheme.id !== "challenge-30s") {
      filtered = filtered.filter(q => q.theme.toLowerCase() === selectedTheme.id.toLowerCase());
    }
    
    // Special handling for challenge-30s theme
    if (selectedTheme && selectedTheme.id === "challenge-30s") {
      filtered = filtered.filter(q => q.type === "simple");
    }
    
    // Filter by question type if selected (except for challenge-30s which is already filtered to simple)
    if (selectedType !== "all" && selectedTheme?.id !== "challenge-30s") {
      filtered = filtered.filter(q => q.type === selectedType);
    }
    
    // Filtrer les questions déjà vues
    if (!trackingLoading && viewedQuestions.length > 0) {
      const unviewedQuestions = filtered.filter(q => !viewedQuestions.includes(q.id));
      
      // Si il reste des questions non vues, les utiliser en priorité
      if (unviewedQuestions.length > 0) {
        filtered = unviewedQuestions;
        console.log(`🎯 [QUIZ] ${unviewedQuestions.length} questions non vues disponibles`);
      } else {
        // Sinon, utiliser toutes les questions (reset du cycle)
        console.log("🔄 [QUIZ] Toutes les questions vues, reset du cycle");
      }
    }
    
    // For random theme, just shuffle the questions
    if (selectedTheme && selectedTheme.id === "random") {
      filtered = filtered.sort(() => Math.random() - 0.5);
    }
    
    return filtered;
  }, [selectedTheme, selectedType, supabaseQuestions, viewedQuestions, trackingLoading]);

  // Handle search separately with proper accent handling
  const searchResults = useMemo(() => {
    if (!supabaseQuestions || supabaseQuestions.length === 0) {
      return [];
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase().trim();
      return supabaseQuestions.filter(q => 
        q.question.toLowerCase().includes(lowerCaseQuery)
      );
    } else {
      return [];
    }
  }, [searchQuery, supabaseQuestions]);

  return {
    filteredQuestions,
    searchResults,
    themes: supabaseThemes,
    questionsLoading: questionsLoading || trackingLoading,
    questionsError
  };
};