
import React from "react";
import TimedQuizContainer from "@/components/TimedQuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { useQuiz } from "@/hooks/useQuiz";

const TimedQuiz = () => {
  const { questionsCompleted } = useQuiz();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-4 py-3 border-b border-border/30">
        <DarkModeToggle />
        <UserSpace questionsCompleted={questionsCompleted} />
      </div>
      
      <div className="container mx-auto py-8">
        <TimedQuizContainer />
      </div>
    </div>
  );
};

export default TimedQuiz;
