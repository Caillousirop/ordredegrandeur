
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuizHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
        Quantifiz
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Testez vos connaissances en estimation de grandeurs. Évaluez vos réponses et découvrez des faits fascinants !
      </p>
      
      {/* Bouton Quiz Chronométré */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={() => navigate('/timed-quiz')}
          variant="outline"
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none hover:from-orange-600 hover:to-red-600"
        >
          <Clock className="mr-2 h-4 w-4" />
          Quiz Chronométré 30s
        </Button>
      </div>
    </div>
  );
};

export default QuizHeader;
