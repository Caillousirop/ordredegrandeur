
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import DailyQuestion from "@/components/DailyQuestion";
import { useQuiz } from "@/hooks/useQuiz";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { questionsCompleted } = useQuiz();
  const { loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
      {/* Header with controls that scrolls with content */}
      <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
        <DarkModeToggle />
        <UserSpace questionsCompleted={questionsCompleted} />
      </div>
      
      {/* Question du jour mise en avant */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 p-1">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div className="container mx-auto py-6 px-4">
            <DailyQuestion />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-8">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
