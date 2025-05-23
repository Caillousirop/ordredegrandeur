
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { useQuiz } from "@/hooks/useQuiz";

const Index = () => {
  const { questionsCompleted } = useQuiz();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
      {/* Header with controls that scrolls with content */}
      <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
        <DarkModeToggle />
        <UserSpace questionsCompleted={questionsCompleted} />
      </div>
      
      <div className="container mx-auto py-8">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
