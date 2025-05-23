
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { useQuiz } from "@/hooks/useQuiz";

const Index = () => {
  const { questionsCompleted } = useQuiz();
  
  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-primary/5 to-accent/10 dark:from-primary/10 dark:to-primary/5">
      {/* Sticky controls at the top with higher z-index and backdrop blur */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full p-4 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div>
          <DarkModeToggle />
        </div>
        <div>
          <UserSpace questionsCompleted={questionsCompleted} />
        </div>
      </div>
      
      {/* Add top padding to account for fixed header */}
      <div className="container mx-auto pt-16">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
