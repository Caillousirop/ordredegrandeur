
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { useQuiz } from "@/hooks/useQuiz";

const Index = () => {
  const { questionsCompleted } = useQuiz();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
      {/* Fixed header with controls */}
      <div className="sticky top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/30">
        <div className="flex justify-between items-center w-full px-4 py-3">
          <DarkModeToggle />
          <UserSpace questionsCompleted={questionsCompleted} />
        </div>
      </div>
      
      <div className="container mx-auto py-8">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
