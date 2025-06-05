
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
      },
      "alimentation": {
        color: "from-lime-500 to-green-400",
        icon: "Apple",
        description: "Questions sur l'alimentation et les habitudes alimentaires"
      },
      "culture": {
        color: "from-rose-500 to-pink-400",
        icon: "Music",
        description: "Questions sur la culture, les arts et les loisirs"
      },
      "sport": {
        color: "from-cyan-500 to-blue-400",
        icon: "Trophy",
        description: "Questions sur le sport et les activités physiques"
      },
      "géographie": {
        color: "from-teal-500 to-cyan-400",
        icon: "MapPin",
        description: "Questions sur la géographie française et mondiale"
      },
      "histoire": {
        color: "from-amber-600 to-yellow-500",
        icon: "BookOpen",
        description: "Questions sur l'histoire de France et du monde"
      },
      "politique": {
        color: "from-slate-600 to-gray-500",
        icon: "Vote",
        description: "Questions sur la politique et les institutions"
      },
      "justice": {
        color: "from-stone-600 to-slate-500",
        icon: "Scale",
        description: "Questions sur le système judiciaire et la justice"
      },
      "emploi": {
        color: "from-blue-600 to-indigo-500",
        icon: "Briefcase",
        description: "Questions sur l'emploi et le marché du travail"
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
          // Créer un thème avec une couleur par défaut pour les thèmes non prédéfinis
          const colors = [
            "from-indigo-600 to-purple-500",
            "from-pink-600 to-rose-500",
            "from-yellow-600 to-orange-500",
            "from-green-600 to-teal-500",
            "from-blue-600 to-cyan-500",
            "from-purple-600 to-indigo-500"
          ];
          const icons = ["Star", "Zap", "Gem", "Crown", "Rocket", "Shield"];
          
          const colorIndex = Math.abs(themeId.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length;
          
          themeMap.set(themeId, {
            id: themeId,
            name: question.theme.charAt(0).toUpperCase() + question.theme.slice(1),
            description: `Questions sur ${question.theme}`,
            color: colors[colorIndex],
            icon: icons[colorIndex]
          });
        }
      }
    });

    // Convertir en array et trier avec "insolite" en dernier
    const themesArray = Array.from(themeMap.values());
    return themesArray.sort((a, b) => {
      // Mettre "insolite" en dernier
      if (a.id === "insolite") return 1;
      if (b.id === "insolite") return -1;
      // Tri alphabétique pour le reste
      return a.name.localeCompare(b.name);
    });
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
