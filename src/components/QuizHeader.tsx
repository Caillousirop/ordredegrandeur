
import React from "react";
import { Link } from "react-router-dom";

const QuizHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center">
        <span className="text-2xl font-bold text-primary">O</span>
        <span className="text-2xl font-bold text-primary">r</span>
        <span className="text-2xl font-bold text-primary">d</span>
        <span className="text-2xl font-bold text-primary">r</span>
        <span className="text-2xl font-bold text-primary">e</span>
        <span className="text-3xl font-bold text-primary"> d</span>
        <span className="text-3xl font-bold text-primary">e</span>
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"> G</span>
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">r</span>
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">a</span>
        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">n</span>
        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">d</span>
        <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">e</span>
        <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">u</span>
        <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">r</span>
      </h1>
      <p className="text-center text-muted-foreground max-w-lg mx-auto">
        Testez vos connaissances statistiques ! Répondez directement ou décomposez le problème en étapes pour gagner des points.
      </p>
    </div>
  );
};

export default QuizHeader;
