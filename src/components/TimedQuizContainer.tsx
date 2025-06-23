
import React, { useState } from "react";
import TimedQuizStart from "./timed-quiz/TimedQuizStart";
import TimedQuizGame from "./timed-quiz/TimedQuizGame";
import TimedQuizResults from "./timed-quiz/TimedQuizResults";
import TimedQuizLeaderboard from "./timed-quiz/TimedQuizLeaderboard";
import { useTimedQuiz } from "@/hooks/useTimedQuiz";

type ViewState = 'start' | 'game' | 'results' | 'leaderboard';

const TimedQuizContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('start');
  const { 
    isActive, 
    currentSession, 
    hasPlayedBefore,
    checkingPreviousAttempt 
  } = useTimedQuiz();

  // Détermine automatiquement la vue à afficher
  React.useEffect(() => {
    if (checkingPreviousAttempt) {
      return; // Attendre la fin de la vérification
    }
    
    if (isActive) {
      setCurrentView('game');
    } else if (currentSession?.is_completed || hasPlayedBefore) {
      setCurrentView('results');
    } else {
      setCurrentView('start');
    }
  }, [isActive, currentSession, hasPlayedBefore, checkingPreviousAttempt]);

  const handleRestart = () => {
    // On ne peut pas redémarrer car chaque utilisateur ne peut jouer qu'une fois
    setCurrentView('start');
  };

  const handleViewLeaderboard = () => {
    setCurrentView('leaderboard');
  };

  const handleBackFromLeaderboard = () => {
    if (currentSession?.is_completed || hasPlayedBefore) {
      setCurrentView('results');
    } else {
      setCurrentView('start');
    }
  };

  switch (currentView) {
    case 'game':
      return <TimedQuizGame />;
      
    case 'results':
      return (
        <TimedQuizResults 
          onRestart={handleRestart}
          onViewLeaderboard={handleViewLeaderboard}
        />
      );
      
    case 'leaderboard':
      return <TimedQuizLeaderboard onBack={handleBackFromLeaderboard} />;
      
    default:
      return <TimedQuizStart />;
  }
};

export default TimedQuizContainer;
