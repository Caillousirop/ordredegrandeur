
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface LeaderboardEntry {
  id: string;
  username: string | null;
  score: number;
  total_questions: number;
  correct_answers: number;
  created_at: string;
  rank: number;
}

export const useTimedQuizLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadLeaderboard = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('timed_quiz_leaderboard')
        .select('*')
        .limit(50);

      if (error) throw error;

      setLeaderboard(data || []);
      setError(null);
    } catch (err) {
      console.error('Erreur lors du chargement du classement:', err);
      setError("Erreur lors du chargement du classement");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

  return {
    leaderboard,
    loading,
    error,
    refreshLeaderboard: loadLeaderboard
  };
};
