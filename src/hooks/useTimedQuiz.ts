
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { toast } from "sonner";
import { Question } from "@/components/types";
import { calculateAccuracy } from "@/components/quiz/CalculateAccuracy";

interface TimedQuizSession {
  id: string;
  total_questions: number;
  correct_answers: number;
  score: number;
  is_completed: boolean;
}

export const useTimedQuiz = () => {
  const { user } = useAuth();
  const [currentSession, setCurrentSession] = useState<TimedQuizSession | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);

  // Charger les questions simples
  const loadQuestions = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('type', 'simple')
        .eq('is_active', true)
        .order('created_at');

      if (error) throw error;

      // Convertir les questions de Supabase au format attendu
      const formattedQuestions: Question[] = data.map(q => ({
        id: q.id,
        type: 'simple',
        question: q.question,
        correctAnswer: Number(q.correct_answer),
        unit: q.unit || undefined,
        explanation: q.explanation || undefined,
        theme: q.theme
      }));

      // Mélanger les questions pour plus de variété
      const shuffledQuestions = [...formattedQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions);
    } catch (error) {
      console.error('Erreur lors du chargement des questions:', error);
      toast.error("Erreur lors du chargement des questions");
    }
  }, []);

  // Démarrer une nouvelle session
  const startQuiz = useCallback(async () => {
    if (!user) {
      toast.error("Vous devez être connecté pour jouer au quiz chronométré");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('timed_quiz_sessions')
        .insert({
          user_id: user.id,
          start_time: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      setCurrentSession(data);
      setTimeLeft(30);
      setIsActive(true);
      setCurrentQuestionIndex(0);
      setQuestionsAnswered(0);
      setCorrectAnswers(0);
      setCurrentScore(0);
      setUserAnswer("");
      setQuestionStartTime(Date.now());
    } catch (error) {
      console.error('Erreur lors du démarrage du quiz:', error);
      toast.error("Erreur lors du démarrage du quiz");
    }
  }, [user]);

  // Soumettre une réponse
  const submitAnswer = useCallback(async () => {
    if (!currentSession || !user || currentQuestionIndex >= questions.length) return;

    const currentQuestion = questions[currentQuestionIndex];
    const numAnswer = parseFloat(userAnswer);
    const responseTime = Date.now() - questionStartTime;
    
    let accuracy = 0;
    let isCorrect = false;

    if (!isNaN(numAnswer)) {
      accuracy = calculateAccuracy(numAnswer, currentQuestion.correctAnswer);
      isCorrect = accuracy >= 50; // Considéré comme correct si précision >= 50%
    }

    // Calculer le score (points bonus pour la rapidité et la précision)
    let questionScore = 0;
    if (isCorrect) {
      questionScore = Math.round(accuracy / 10); // 1-10 points selon la précision
      if (responseTime < 3000) questionScore += 2; // Bonus rapidité
    }

    try {
      // Enregistrer la réponse
      await supabase
        .from('timed_quiz_answers')
        .insert({
          session_id: currentSession.id,
          question_id: currentQuestion.id,
          user_answer: isNaN(numAnswer) ? null : numAnswer,
          correct_answer: currentQuestion.correctAnswer,
          accuracy: accuracy,
          response_time_ms: responseTime
        });

      const newQuestionsAnswered = questionsAnswered + 1;
      const newCorrectAnswers = correctAnswers + (isCorrect ? 1 : 0);
      const newScore = currentScore + questionScore;

      setQuestionsAnswered(newQuestionsAnswered);
      setCorrectAnswers(newCorrectAnswers);
      setCurrentScore(newScore);

      // Passer à la question suivante
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer("");
      setQuestionStartTime(Date.now());

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la réponse:', error);
    }
  }, [currentSession, user, currentQuestionIndex, questions, userAnswer, questionStartTime, questionsAnswered, correctAnswers, currentScore]);

  // Terminer le quiz
  const endQuiz = useCallback(async () => {
    if (!currentSession || !user) return;

    try {
      await supabase
        .from('timed_quiz_sessions')
        .update({
          end_time: new Date().toISOString(),
          total_questions: questionsAnswered,
          correct_answers: correctAnswers,
          score: currentScore,
          is_completed: true
        })
        .eq('id', currentSession.id);

      setIsActive(false);
      toast.success(`Quiz terminé ! Score: ${currentScore} points`);
    } catch (error) {
      console.error('Erreur lors de la finalisation du quiz:', error);
      toast.error("Erreur lors de la sauvegarde du score");
    }
  }, [currentSession, user, questionsAnswered, correctAnswers, currentScore]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      endQuiz();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, endQuiz]);

  // Charger les questions au montage
  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const currentQuestion = questions[currentQuestionIndex];
  const hasNextQuestion = currentQuestionIndex < questions.length - 1;

  return {
    currentSession,
    currentQuestion,
    timeLeft,
    isActive,
    userAnswer,
    setUserAnswer,
    questionsAnswered,
    correctAnswers,
    currentScore,
    hasNextQuestion,
    startQuiz,
    submitAnswer,
    endQuiz,
    questions: questions.length
  };
};
