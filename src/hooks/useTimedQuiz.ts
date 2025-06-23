
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

// IDs spécifiques des 15 questions sélectionnées pour le quiz chronométré
const TIMED_QUIZ_QUESTION_IDS = [
  "0193cf7f-1234-7123-1234-123456789001",
  "0193cf7f-1234-7123-1234-123456789002", 
  "0193cf7f-1234-7123-1234-123456789003",
  "0193cf7f-1234-7123-1234-123456789004",
  "0193cf7f-1234-7123-1234-123456789005",
  "0193cf7f-1234-7123-1234-123456789006",
  "0193cf7f-1234-7123-1234-123456789007",
  "0193cf7f-1234-7123-1234-123456789008",
  "0193cf7f-1234-7123-1234-123456789009",
  "0193cf7f-1234-7123-1234-123456789010",
  "0193cf7f-1234-7123-1234-123456789011",
  "0193cf7f-1234-7123-1234-123456789012",
  "0193cf7f-1234-7123-1234-123456789013",
  "0193cf7f-1234-7123-1234-123456789014",
  "0193cf7f-1234-7123-1234-123456789015"
];

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
  const [hasPlayedBefore, setHasPlayedBefore] = useState(false);
  const [checkingPreviousAttempt, setCheckingPreviousAttempt] = useState(true);

  // Vérifier si l'utilisateur connecté a déjà joué
  const checkPreviousAttempt = useCallback(async () => {
    // Si pas d'utilisateur connecté, pas de vérification nécessaire
    if (!user) {
      setCheckingPreviousAttempt(false);
      setHasPlayedBefore(false);
      return;
    }

    try {
      console.log("Vérification des tentatives précédentes pour:", user.id);
      const { data, error } = await supabase
        .from('timed_quiz_sessions')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_completed', true)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Erreur lors de la vérification des tentatives précédentes:', error);
      }

      const hasPlayed = !!data;
      console.log("A déjà joué:", hasPlayed);
      setHasPlayedBefore(hasPlayed);
      
      // S'il y a une session complétée, la charger pour afficher les résultats
      if (data) {
        setCurrentSession(data);
        setQuestionsAnswered(data.total_questions);
        setCorrectAnswers(data.correct_answers);
        setCurrentScore(data.score);
      }
    } catch (error) {
      console.error('Erreur lors de la vérification des tentatives précédentes:', error);
    } finally {
      setCheckingPreviousAttempt(false);
    }
  }, [user]);

  // Charger les 15 questions spécifiques
  const loadQuestions = useCallback(async () => {
    try {
      console.log("Chargement des questions pour le quiz chronométré...");
      // Pour l'instant, on prend les 15 premières questions simples
      // TODO: remplacer par les IDs spécifiques une fois qu'on les aura
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('type', 'simple')
        .eq('is_active', true)
        .limit(15)
        .order('created_at');

      if (error) {
        console.error("Erreur lors du chargement des questions:", error);
        throw error;
      }

      console.log("Questions chargées:", data?.length || 0);

      if (!data || data.length === 0) {
        console.warn("Aucune question trouvée pour le quiz chronométré");
        toast.error("Aucune question disponible pour le quiz chronométré");
        return;
      }

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

      console.log("Questions formatées:", formattedQuestions.length);
      setQuestions(formattedQuestions);
    } catch (error) {
      console.error('Erreur lors du chargement des questions:', error);
      toast.error("Erreur lors du chargement des questions");
    }
  }, []);

  // Démarrer une nouvelle session
  const startQuiz = useCallback(async () => {
    console.log("Tentative de démarrage du quiz...");
    
    // Pour les utilisateurs connectés, vérifier s'ils ont déjà joué
    if (user && hasPlayedBefore) {
      console.error("Utilisateur connecté a déjà joué");
      toast.error("Vous avez déjà participé au quiz chronométré");
      return;
    }

    if (questions.length === 0) {
      console.error("Aucune question disponible");
      toast.error("Aucune question disponible pour le quiz");
      return;
    }

    try {
      let sessionData = null;
      
      // Créer une session seulement si l'utilisateur est connecté
      if (user) {
        console.log("Création de la session de quiz pour utilisateur connecté...");
        const { data, error } = await supabase
          .from('timed_quiz_sessions')
          .insert({
            user_id: user.id,
            start_time: new Date().toISOString()
          })
          .select()
          .single();

        if (error) {
          console.error("Erreur lors de la création de la session:", error);
          throw error;
        }

        console.log("Session créée avec succès:", data.id);
        sessionData = data;
      } else {
        console.log("Quiz en mode anonyme - pas de session créée");
        // Pour les utilisateurs non connectés, on crée une session temporaire locale
        sessionData = {
          id: `temp-${Date.now()}`,
          total_questions: 0,
          correct_answers: 0,
          score: 0,
          is_completed: false
        };
      }

      setCurrentSession(sessionData);
      setTimeLeft(30);
      setIsActive(true);
      setCurrentQuestionIndex(0);
      setQuestionsAnswered(0);
      setCorrectAnswers(0);
      setCurrentScore(0);
      setUserAnswer("");
      setQuestionStartTime(Date.now());
      
      toast.success("Quiz chronométré démarré !");
    } catch (error) {
      console.error('Erreur lors du démarrage du quiz:', error);
      toast.error("Erreur lors du démarrage du quiz");
    }
  }, [user, hasPlayedBefore, questions.length]);

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
    if (!currentSession) return;

    try {
      // Sauvegarder seulement si l'utilisateur est connecté et la session n'est pas temporaire
      if (user && !currentSession.id.startsWith('temp-')) {
        const updatedSession = {
          end_time: new Date().toISOString(),
          total_questions: questionsAnswered,
          correct_answers: correctAnswers,
          score: currentScore,
          is_completed: true
        };

        await supabase
          .from('timed_quiz_sessions')
          .update(updatedSession)
          .eq('id', currentSession.id);

        setCurrentSession({ ...currentSession, ...updatedSession });
        setHasPlayedBefore(true);
      } else {
        // Pour les sessions temporaires, juste mettre à jour l'état local
        setCurrentSession({
          ...currentSession,
          total_questions: questionsAnswered,
          correct_answers: correctAnswers,
          score: currentScore,
          is_completed: true
        });
      }

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

  // Charger les questions et vérifier les tentatives précédentes au montage
  useEffect(() => {
    console.log("Initialisation du hook useTimedQuiz");
    loadQuestions();
    checkPreviousAttempt();
  }, [loadQuestions, checkPreviousAttempt]);

  const currentQuestion = questions[currentQuestionIndex];
  const hasNextQuestion = currentQuestionIndex < questions.length - 1 && timeLeft > 0;

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
    questions: questions.length,
    hasPlayedBefore,
    checkingPreviousAttempt
  };
};
