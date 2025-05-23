
import React from "react";
import QuizContainer from "@/components/QuizContainer";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";
import { useQuiz } from "@/hooks/useQuiz";

const Index = () => {
  const { questionsCompleted } = useQuiz();
  
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-primary/5 to-accent/10 dark:from-primary/10 dark:to-primary/5">
      {/* Fixed controls at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full p-4 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div>
          <DarkModeToggle />
        </div>
        <div>
          <UserSpace questionsCompleted={questionsCompleted} />
        </div>
      </div>
      
      {/* Fixed content container */}
      <div className="fixed inset-0 pt-20 pb-4 px-4">
        <div className="h-full overflow-hidden">
          <QuizContainer />
        </div>
      </div>
    </div>
  );
};

export default Index;
