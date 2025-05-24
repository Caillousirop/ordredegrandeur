
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
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Question du Jour
          </CardTitle>
          <CardDescription>
            Aucune question disponible pour aujourd'hui
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Question du Jour
            <Badge variant="outline">{dailyQuestion.theme}</Badge>
          </CardTitle>
          <CardDescription>
            {new Date(dailyQuestion.date).toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">{dailyQuestion.question}</p>

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
                />
                {dailyQuestion.unit && (
                  <div className="flex items-center px-3 bg-muted rounded-md">
                    <span className="text-sm text-muted-foreground">
                      {dailyQuestion.unit}
                    </span>
                  </div>
                )}
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Envoi..." : "Valider ma réponse"}
              </Button>
            </form>
          )}

          {userResponse && (
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Votre réponse: {userResponse.user_answer} {dailyQuestion.unit}</p>
                <p className="text-sm text-muted-foreground">
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
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200">
                Connectez-vous pour participer à la question du jour et voir le classement !
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Leaderboard */}
      {leaderboard.length > 0 && (
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
