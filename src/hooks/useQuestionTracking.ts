
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

// Générer un ID de session unique pour les utilisateurs non connectés
const getSessionId = () => {
  let sessionId = localStorage.getItem('quiz_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem('quiz_session_id', sessionId);
  }
  return sessionId;
};

export const useQuestionTracking = () => {
  const { user } = useAuth();
  const [viewedQuestions, setViewedQuestions] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Charger les questions déjà vues
  const loadViewedQuestions = useCallback(async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('question_views')
        .select('question_id');

      if (user) {
        // Utilisateur connecté : chercher par user_id
        query = query.eq('user_id', user.id);
      } else {
        // Utilisateur non connecté : chercher par session_id
        const sessionId = getSessionId();
        query = query.eq('session_id', sessionId).is('user_id', null);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Erreur lors du chargement des questions vues:', error);
        return;
      }

      const questionIds = new Set(data?.map(item => item.question_id) || []);
      setViewedQuestions(questionIds);
      
    } catch (error) {
      console.error('Erreur inattendue lors du chargement des questions vues:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Marquer une question comme vue
  const markQuestionAsViewed = useCallback(async (questionId: string, userAnswer?: number, accuracy?: number) => {
    try {
      // Vérifier si la question n'a pas déjà été vue
      if (viewedQuestions.has(questionId)) {
        return;
      }

      const insertData: any = {
        question_id: questionId,
        user_answer: userAnswer,
        accuracy: accuracy
      };

      if (user) {
        insertData.user_id = user.id;
      } else {
        insertData.session_id = getSessionId();
      }

      const { error } = await supabase
        .from('question_views')
        .insert(insertData);

      if (error) {
        console.error('Erreur lors de l\'enregistrement de la question vue:', error);
        return;
      }

      // Mettre à jour l'état local
      setViewedQuestions(prev => new Set([...prev, questionId]));
      
    } catch (error) {
      console.error('Erreur inattendue lors de l\'enregistrement de la question vue:', error);
    }
  }, [user, viewedQuestions]);

  // Mettre à jour une question déjà vue avec la réponse
  const updateQuestionView = useCallback(async (questionId: string, userAnswer: number, accuracy: number) => {
    try {
      let query = supabase
        .from('question_views')
        .update({
          user_answer: userAnswer,
          accuracy: accuracy
        })
        .eq('question_id', questionId);

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        const sessionId = getSessionId();
        query = query.eq('session_id', sessionId).is('user_id', null);
      }

      const { error } = await query;

      if (error) {
        console.error('Erreur lors de la mise à jour de la question vue:', error);
      }
      
    } catch (error) {
      console.error('Erreur inattendue lors de la mise à jour de la question vue:', error);
    }
  }, [user]);

  // Vérifier si une question a été vue
  const isQuestionViewed = useCallback((questionId: string) => {
    return viewedQuestions.has(questionId);
  }, [viewedQuestions]);

  // Obtenir les statistiques des questions vues
  const getViewedQuestionsStats = useCallback(async () => {
    try {
      let query = supabase
        .from('question_views')
        .select('question_id, accuracy, user_answer, viewed_at');

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        const sessionId = getSessionId();
        query = query.eq('session_id', sessionId).is('user_id', null);
      }

      const { data, error } = await query.order('viewed_at', { ascending: false });

      if (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        return null;
      }

      return data;
      
    } catch (error) {
      console.error('Erreur inattendue lors du chargement des statistiques:', error);
      return null;
    }
  }, [user]);

  // Charger les données au démarrage et quand l'utilisateur change
  useEffect(() => {
    loadViewedQuestions();
  }, [loadViewedQuestions]);

  return {
    viewedQuestions: Array.from(viewedQuestions),
    loading,
    markQuestionAsViewed,
    updateQuestionView,
    isQuestionViewed,
    getViewedQuestionsStats,
    refreshViewedQuestions: loadViewedQuestions
  };
};
