
import { useState } from "react";
import QuizContainer from "@/components/QuizContainer";
import { useQuiz } from "@/hooks/useQuiz";
import UserSpace from "@/components/UserSpace";
import DarkModeToggle from "@/components/DarkModeToggle";

const Index = () => {
  const [showDebug, setShowDebug] = useState(false);
  const quizState = useQuiz();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex flex-col items-center py-10">
      {/* Fixed position controls at the top of the screen */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full p-4">
        <div className="bg-background/90 backdrop-blur-lg rounded-full shadow-lg">
          <DarkModeToggle />
        </div>
        <div className="bg-background/90 backdrop-blur-lg rounded-full shadow-lg">
          <UserSpace questionsCompleted={quizState.questionsCompleted} />
        </div>
      </div>
      
      {/* Debug toggle button */}
      <button 
        onClick={() => setShowDebug(!showDebug)} 
        className="fixed bottom-2 right-2 bg-primary/10 text-xs text-muted-foreground rounded px-2 py-1 opacity-50 hover:opacity-100"
      >
        Debug: {showDebug ? "ON" : "OFF"}
      </button>
      
      {showDebug && (
        <div className="fixed bottom-10 right-2 bg-black/90 text-white p-3 rounded text-xs max-w-xs max-h-60 overflow-auto z-50">
          <p>Theme: {quizState.selectedTheme?.id || "none"}</p>
          <p>Type: {quizState.selectedType}</p>
          <p>Questions: {quizState.filteredQuestions.length}</p>
          <p>Active Tab: {quizState.activeTab}</p>
        </div>
      )}
      
      <div className="container px-4 py-8 mt-14">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
