
import React from "react";
import { Link } from "react-router-dom";

const QuizFooter: React.FC = () => {
  return (
    <div className="mt-4 border-t pt-4 flex items-center justify-between">
      <p className="text-xs text-muted-foreground">
        Source des données : INSEE et autres organismes officiels. 
      </p>
      <Link to="/sources" className="text-xs text-primary hover:underline">
        Consulter nos sources
      </Link>
    </div>
  );
};

export default QuizFooter;
