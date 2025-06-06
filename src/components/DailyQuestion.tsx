
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import AccuracyGauge from "./AccuracyGauge";
import { calculateAccuracy } from "./quiz/CalculateAccuracy";

interface DailyQuestion {
  id: string;
  question: string;
  correct_answer: number;
  unit?: string;
  explanation?: string;
  theme: string;
  date: string;
}

interface DailyResponse {
  id: string;
  user_answer: number;
  accuracy: number;
}

const DailyQuestion: React.FC = () => {
  const { user } = useAuth();
  const [dailyQuestion, setDailyQuestion] = useState<DailyQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userResponse, setUserResponse] = useState<DailyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadDailyQuestion();
  }, [user]);

  const loadDailyQuestion = async () => {
    try {
      setLoading(true);
      
      // Get today's question
      const today = new Date().toISOString().split('T')[0];
      const { data: question, error: questionError } = await supabase
        .from('daily_questions')
        .select('*')
        .eq('date', today)
        .single();

      if (questionError) {
        console.error('Error loading daily question:', questionError);
        return;
      }

      setDailyQuestion(question);

      // Check if user has already answered today
      if (user && question) {
        const { data: response, error: responseError } = await supabase
          .from('daily_responses')
          .select('*')
          .eq('user_id', user.id)
          .eq('daily_question_id', question.id)
          .maybeSingle();

        if (responseError) {
          console.error('Error loading user response:', responseError);
        } else if (response) {
          setHasAnswered(true);
          setUserResponse(response);
        }
      }
    } catch (error) {
      console.error('Error loading daily question:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!dailyQuestion || !user || !userAnswer.trim()) return;

    try {
      setSubmitting(true);
      const answer = parseFloat(userAnswer);
      
      if (isNaN(answer)) {
        toast.error("Veuillez entrer un nombre valide");
        return;
      }

      const accuracy = calculateAccuracy(answer, dailyQuestion.correct_answer, dailyQuestion.unit);

      const { data, error } = await supabase
        .from('daily_responses')
        .insert({
          user_id: user.id,
          daily_question_id: dailyQuestion.id,
          user_answer: answer,
          accuracy: accuracy
        })
        .select()
        .single();

      if (error) {
        console.error('Error saving response:', error);
        toast.error("Erreur lors de l'enregistrement de votre réponse");
        return;
      }

      setHasAnswered(true);
      setUserResponse(data);
      toast.success("Réponse enregistrée !");
    } catch (error) {
      console.error('Error submitting answer:', error);
      toast.error("Erreur lors de l'enregistrement");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <span className="ml-2 text-muted-foreground">Chargement de la question du jour...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!dailyQuestion) {
    return (
      <Card className="mb-6 border-muted/50">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Aucune question du jour disponible</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Question du jour
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {dailyQuestion.theme}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-base font-medium">{dailyQuestion.question}</p>
        
        {!user ? (
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Connectez-vous pour participer à la question du jour
            </p>
          </div>
        ) : hasAnswered && userResponse ? (
          <div className="space-y-3">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Votre réponse:</span>
                <span className="font-mono">{userResponse.user_answer.toLocaleString()}{dailyQuestion.unit && ` ${dailyQuestion.unit}`}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Réponse correcte:</span>
                <span className="font-mono text-primary">{dailyQuestion.correct_answer.toLocaleString()}{dailyQuestion.unit && ` ${dailyQuestion.unit}`}</span>
              </div>
              <AccuracyGauge accuracy={userResponse.accuracy} size="sm" />
            </div>
            
            {dailyQuestion.explanation && (
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-medium">Explication:</span> {dailyQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Votre estimation..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                className="flex-1"
              />
              <Button 
                onClick={handleSubmit}
                disabled={!userAnswer.trim() || submitting}
                size="sm"
              >
                {submitting ? "..." : "Valider"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyQuestion;
