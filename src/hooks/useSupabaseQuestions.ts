
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Question, MultiStepQuestion, QuizTheme } from "@/components/types";

interface SupabaseQuestion {
  id: string;
  type: string;
  question: string;
  correct_answer: number;
  unit: string | null;
  explanation: string | null;
  theme: string;
  final_explanation: string | null;
  steps: any;
  priority: number;
  is_active: boolean;
}

export const useSupabaseQuestions = () => {
  const [questions, setQuestions] = useState<(Question | MultiStepQuestion)[]>([]);
  const [themes, setThemes] = useState<QuizTheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour convertir une question Supabase en Question locale
  const convertSupabaseToLocalQuestion = (sq: SupabaseQuestion): Question | MultiStepQuestion => {
    const baseQuestion = {
      id: sq.id,
      theme: sq.theme,
      question: sq.question,
      correctAnswer: sq.correct_answer,
      unit: sq.unit || "",
      explanation: sq.explanation || ""
    };

    if (sq.type === "multistep") {
      return {
        ...baseQuestion,
        type: "multistep" as const,
        steps: sq.steps || [],
        finalExplanation: sq.final_explanation || ""
      } as MultiStepQuestion;
    } else {
      return {
        ...baseQuestion,
        type: "simple" as const
      } as Question;
    }
  };

  // Fonction pour générer les thèmes basés sur les questions
  const generateThemesFromQuestions = (questions: (Question | MultiStepQuestion)[]): QuizTheme[] => {
    const themeMap = new Map<string, QuizTheme>();
    
    // Thèmes prédéfinis avec leurs couleurs et icônes
    const predefinedThemes: Record<string, { color: string; icon: string; description: string }> = {
      "démographie": {
        color: "from-blue-500 to-blue-400",
        icon: "Users",
        description: "Questions sur la population française et les tendances démographiques"
      },
      "économie": {
        color: "from-green-500 to-green-400", 
        icon: "LineChart",
        description: "Questions sur l'économie française, l'emploi et les finances"
      },
      "éducation": {
        color: "from-amber-500 to-amber-400",
        icon: "GraduationCap", 
        description: "Questions sur le système éducatif français"
      },
      "environnement": {
        color: "from-emerald-500 to-emerald-400",
        icon: "Leaf",
        description: "Questions sur l'écologie et le développement durable"
      },
      "monde": {
        color: "from-indigo-500 to-indigo-400",
        icon: "Globe",
        description: "Questions sur les statistiques et les faits internationaux"
      },
      "santé": {
        color: "from-red-500 to-red-400",
        icon: "Heart",
        description: "Questions sur le système de santé et les indicateurs sanitaires"
      },
      "technologie": {
        color: "from-violet-500 to-violet-400",
        icon: "Smartphone",
        description: "Questions sur l'innovation et les usages numériques"
      },
      "transport": {
        color: "from-orange-500 to-orange-400",
        icon: "Car",
        description: "Questions sur les moyens de transport et les infrastructures"
      },
      "insolite": {
        color: "from-purple-500 to-pink-400",
        icon: "Sparkles",
        description: "Questions surprenantes sur des faits étonnants et inhabituels"
      }
    };

    questions.forEach(question => {
      const themeId = question.theme.toLowerCase();
      
      if (!themeMap.has(themeId)) {
        const predefined = predefinedThemes[themeId];
        
        if (predefined) {
          // Utiliser le thème prédéfini
          themeMap.set(themeId, {
            id: themeId,
            name: question.theme.charAt(0).toUpperCase() + question.theme.slice(1),
            description: predefined.description,
            color: predefined.color,
            icon: predefined.icon
          });
        } else {
          // Créer un nouveau thème pour les thèmes non reconnus
          themeMap.set(themeId, {
            id: themeId,
            name: question.theme.charAt(0).toUpperCase() + question.theme.slice(1),
            description: `Questions sur ${question.theme}`,
            color: "from-gray-500 to-gray-400",
            icon: "HelpCircle"
          });
        }
      }
    });

    return Array.from(themeMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  };

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Récupération des questions depuis Supabase...");
      
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('is_active', true)
        .order('priority', { ascending: false })
        .order('theme', { ascending: true });

      if (error) {
        console.error("Erreur lors de la récupération des questions:", error);
        setError(error.message);
        return;
      }

      console.log(`${data?.length || 0} questions récupérées depuis Supabase`);

      if (data && data.length > 0) {
        // Convertir les questions Supabase en format local
        const convertedQuestions = data.map(convertSupabaseToLocalQuestion);
        console.log("Questions converties:", convertedQuestions.length);
        
        // Générer les thèmes basés sur les questions
        const generatedThemes = generateThemesFromQuestions(convertedQuestions);
        console.log("Thèmes générés:", generatedThemes.map(t => t.name));
        
        setQuestions(convertedQuestions);
        setThemes(generatedThemes);
      } else {
        console.warn("Aucune question trouvée dans la base de données");
        setQuestions([]);
        setThemes([]);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des questions:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questions,
    themes,
    loading,
    error,
    refetch: fetchQuestions
  };
};
