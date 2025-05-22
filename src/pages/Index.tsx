
import { useState } from "react";
import QuizContainer from "@/components/QuizContainer";
import { useQuiz } from "@/hooks/useQuiz";
import UserSpace from "@/components/UserSpace";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [showDebug, setShowDebug] = useState(false);
  const quizState = useQuiz();
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex flex-col items-center py-10">
      {/* User Space component in the top right */}
      <div className="fixed top-4 right-4 z-10">
        <UserSpace questionsCompleted={quizState.questionsCompleted} />
      </div>
      
      {/* Dark Mode toggle */}
      <div className="fixed top-4 left-4 z-10 flex items-center gap-2 bg-background/80 dark:bg-background/80 p-2 rounded-full shadow-md">
        <Sun size={18} className="text-muted-foreground" />
        <Switch 
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
        <Moon size={18} className="text-muted-foreground" />
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
      
      <div className="container px-4 py-8">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
