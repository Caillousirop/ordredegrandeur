import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { calculateAccuracy } from "@/components/quiz/CalculateAccuracy";
import AccuracyGauge from "@/components/AccuracyGauge";

interface DailyQuestion {
  id: string;
  question: string;
  correct_answer: number;
  unit: string;
  explanation: string;
  date: string;
  theme: string;
}

interface DailyResponse {
  id: string;
  user_answer: number;
  accuracy: number;
  answered_at: string;
}

interface LeaderboardEntry {
  user_id: string;
  username: string;
  accuracy: number;
  answered_at: string;
}

const DailyQuestion = () => {
  const [dailyQuestion, setDailyQuestion] = useState<DailyQuestion | null>(null);
  const [userResponse, setUserResponse] = useState<DailyResponse | null>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchDailyQuestion();
    fetchLeaderboard();
  }, [user]);

  const fetchDailyQuestion = async () => {
    try {
      // Get today's question
      const { data: question, error: questionError } = await supabase
        .from("daily_questions")
        .select("*")
        .eq("date", new Date().toISOString().split('T')[0])
        .single();

      if (questionError && questionError.code !== 'PGRST116') {
        console.error("Error fetching daily question:", questionError);
        return;
      }

      setDailyQuestion(question);

      // Check if user has already answered - using raw query to avoid type issues
      if (question && user) {
        try {
          const { data: response } = await supabase
            .rpc('get_user_daily_response', { 
              p_daily_question_id: question.id, 
              p_user_id: user.id 
            });

          if (response && response.length > 0) {
            const userAnswer = response[0];
            setUserResponse({
              id: userAnswer.id,
              user_answer: userAnswer.user_answer,
              accuracy: userAnswer.accuracy,
              answered_at: userAnswer.answered_at
            });
            setShowAnswer(true);
          }
        } catch (error) {
          // Fallback: try direct query if RPC doesn't exist
          console.log("RPC not available, using direct query");
        }
      }
    } catch (error) {
      console.error("Error fetching daily question:", error);
    }
  };

  const fetchLeaderboard = async () => {
    if (!dailyQuestion) return;

    try {
      // Use raw query to avoid type issues
      const { data, error } = await supabase
        .rpc('get_daily_leaderboard', { p_daily_question_id: dailyQuestion.id });

      if (error) {
        console.error("Error fetching leaderboard:", error);
        return;
      }

      const formattedLeaderboard = data?.map((entry: any) => ({
        user_id: entry.user_id,
        username: entry.username || "Utilisateur",
        accuracy: entry.accuracy,
        answered_at: entry.answered_at,
      })) || [];

      setLeaderboard(formattedLeaderboard);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dailyQuestion || !answer) return;

    setLoading(true);

    try {
      const numAnswer = parseFloat(answer);
      if (isNaN(numAnswer)) {
        toast.error("Veuillez entrer un nombre valide");
        return;
      }

      const accuracy = calculateAccuracy(numAnswer, dailyQuestion.correct_answer);

      // Only save to database if user is logged in - using raw query
      if (user) {
        try {
          const { error } = await supabase
            .rpc('insert_daily_response', {
              p_user_id: user.id,
              p_daily_question_id: dailyQuestion.id,
              p_user_answer: numAnswer,
              p_accuracy: accuracy
            });

          if (error) {
            toast.error("Erreur lors de l'enregistrement de votre réponse");
            return;
          }

          fetchLeaderboard();
        } catch (error) {
          console.log("RPC not available, response not saved");
        }
      }

      setUserResponse({
        id: "",
        user_answer: numAnswer,
        accuracy: accuracy,
        answered_at: new Date().toISOString()
      });

      setShowAnswer(true);

      if (accuracy >= 80) {
        toast.success("🎉 Excellente réponse !");
      } else if (accuracy >= 50) {
        toast.success("👍 Bonne réponse !");
      } else {
        toast.success("Merci pour votre participation !");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite");
    } finally {
      setLoading(false);
    }
  };

  if (!dailyQuestion) {
    return (
      <div className="relative mb-8 rounded-xl overflow-hidden">
        {/* Fond dégradé coloré */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600"></div>
        
        {/* Contenu sans fond par-dessus */}
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-white drop-shadow-md" />
            <h2 className="text-xl font-bold text-white drop-shadow-md">Question du Jour</h2>
          </div>
          <p className="text-white/90 drop-shadow-sm">
            Aucune question disponible pour aujourd'hui
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 mb-8">
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        {/* Fond dégradé coloré */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600"></div>
        
        {/* Contenu sans fond par-dessus */}
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-white drop-shadow-md" />
            <h2 className="text-xl font-bold text-white drop-shadow-md">Question du Jour</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30">
            <p className="text-white font-medium leading-relaxed drop-shadow-sm">
              {dailyQuestion.question}
            </p>
          </div>

          {!userResponse && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-3">
                <Input
                  type="number"
                  step="any"
                  placeholder="Votre réponse"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  className="bg-white/90 dark:bg-gray-800/90 border-white/50 text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-medium"
                >
                  {loading ? "Envoi..." : "Valider"}
                </Button>
              </div>
            </form>
          )}

          {userResponse && (
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                <AccuracyGauge 
                  userAnswer={userResponse.user_answer} 
                  correctAnswer={dailyQuestion.correct_answer} 
                  answerSubmitted={true}
                />
              </div>
            </div>
          )}

          {showAnswer && (
            <div className="space-y-3 mt-4">
              <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
                <p className="font-medium text-white mb-1">
                  Réponse correcte: {dailyQuestion.correct_answer} {dailyQuestion.unit}
                </p>
                <p className="text-white/90 text-sm">
                  {dailyQuestion.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Leaderboard - only shown to authenticated users */}
      {user && leaderboard.length > 0 && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Classement du jour
            </CardTitle>
            <CardDescription>
              <Users className="h-4 w-4 inline mr-1" />
              {leaderboard.length} participant{leaderboard.length > 1 ? 's' : ''}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div
                  key={entry.user_id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    entry.user_id === user?.id
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? "bg-yellow-500 text-white" :
                      index === 1 ? "bg-gray-400 text-white" :
                      index === 2 ? "bg-amber-600 text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium">
                      {entry.username}
                      {entry.user_id === user?.id && " (Vous)"}
                    </span>
                  </div>
                  <Badge variant={entry.accuracy >= 80 ? "default" : "secondary"}>
                    {entry.accuracy}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DailyQuestion;
