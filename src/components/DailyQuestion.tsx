
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

      // Check if user has already answered
      if (question && user) {
        const { data: response } = await supabase
          .from("daily_responses")
          .select("*")
          .eq("daily_question_id", question.id)
          .eq("user_id", user.id)
          .single();

        setUserResponse(response);
        if (response) {
          setShowAnswer(true);
        }
      }
    } catch (error) {
      console.error("Error fetching daily question:", error);
    }
  };

  const fetchLeaderboard = async () => {
    if (!dailyQuestion) return;

    try {
      const { data, error } = await supabase
        .from("daily_responses")
        .select(`
          user_id,
          accuracy,
          answered_at,
          profiles(username)
        `)
        .eq("daily_question_id", dailyQuestion.id)
        .order("accuracy", { ascending: false })
        .order("answered_at", { ascending: true })
        .limit(10);

      if (error) {
        console.error("Error fetching leaderboard:", error);
        return;
      }

      const formattedLeaderboard = data?.map((entry: any) => ({
        user_id: entry.user_id,
        username: entry.profiles?.username || "Utilisateur",
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
    if (!dailyQuestion || !user || !answer) return;

    setLoading(true);

    try {
      const numAnswer = parseFloat(answer);
      if (isNaN(numAnswer)) {
        toast.error("Veuillez entrer un nombre valide");
        return;
      }

      const accuracy = calculateAccuracy(numAnswer, dailyQuestion.correct_answer);

      const { error } = await supabase
        .from("daily_responses")
        .insert({
          user_id: user.id,
          daily_question_id: dailyQuestion.id,
          user_answer: numAnswer,
          accuracy: accuracy
        });

      if (error) {
        toast.error("Erreur lors de l'enregistrement de votre réponse");
        return;
      }

      setUserResponse({
        id: "",
        user_answer: numAnswer,
        accuracy: accuracy,
        answered_at: new Date().toISOString()
      });

      setShowAnswer(true);
      fetchLeaderboard();

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
      <Card className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Calendar className="h-5 w-5" />
            Question du Jour
          </CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-300">
            Aucune question disponible pour aujourd'hui
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200 text-xl">
            <Calendar className="h-6 w-6" />
            Question du Jour
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium text-blue-900 dark:text-blue-100">{dailyQuestion.question}</p>

          {!userResponse && user && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="number"
                  step="any"
                  placeholder="Votre réponse"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  className="bg-white dark:bg-gray-800"
                />
                {dailyQuestion.unit && (
                  <div className="flex items-center px-3 bg-blue-100 dark:bg-blue-800 rounded-md">
                    <span className="text-sm text-blue-700 dark:text-blue-300">
                      {dailyQuestion.unit}
                    </span>
                  </div>
                )}
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                {loading ? "Envoi..." : "Valider ma réponse"}
              </Button>
            </form>
          )}

          {userResponse && (
            <div className="space-y-3">
              <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-lg">
                <p className="font-medium text-blue-900 dark:text-blue-100">Votre réponse: {userResponse.user_answer} {dailyQuestion.unit}</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Précision: {userResponse.accuracy}%
                </p>
              </div>
            </div>
          )}

          {showAnswer && (
            <div className="space-y-3">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="font-medium text-green-800 dark:text-green-200">
                  Réponse correcte: {dailyQuestion.correct_answer} {dailyQuestion.unit}
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  {dailyQuestion.explanation}
                </p>
              </div>
            </div>
          )}

          {!user && (
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-orange-800 dark:text-orange-200 font-medium">
                Vous pouvez répondre sans vous connecter !
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                Connectez-vous pour voir le classement et suivre vos progrès.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

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
