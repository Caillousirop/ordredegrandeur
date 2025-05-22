
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizContainer from "@/components/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <Link to="/admin">
            <Button variant="outline">Administration</Button>
          </Link>
        </div>
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
