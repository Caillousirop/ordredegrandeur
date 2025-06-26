
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export const AuthButton: React.FC = () => {
  return (
    <Button asChild variant="outline" size="sm">
      <Link to="/auth" className="flex items-center gap-2">
        <LogIn size={16} />
        Se connecter
      </Link>
    </Button>
  );
};
