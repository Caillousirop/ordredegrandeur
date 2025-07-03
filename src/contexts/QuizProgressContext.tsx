
import React, { createContext, useContext, ReactNode } from 'react';
import { useQuizProgress } from '@/hooks/useQuizProgress';

interface QuizProgressContextType {
  quizProgress: any;
  loading: boolean;
  error: string | null;
  updateQuizProgress: (newProgress: any) => Promise<boolean>;
  refreshProgress: () => Promise<void>;
}

const QuizProgressContext = createContext<QuizProgressContextType | null>(null);

interface QuizProgressProviderProps {
  children: ReactNode;
}

export function QuizProgressProvider({ children }: QuizProgressProviderProps) {
  const quizState = useQuizProgress();
  
  return (
    <QuizProgressContext.Provider value={quizState}>
      {children}
    </QuizProgressContext.Provider>
  );
}

export function useQuizProgressContext() {
  const context = useContext(QuizProgressContext);
  if (!context) {
    throw new Error('useQuizProgressContext must be used within a QuizProgressProvider');
  }
  return context;
}
