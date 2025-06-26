
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export const ProfileButton: React.FC = () => {
  return (
    <Button asChild variant="outline" size="sm">
      <Link to="/profile" className="flex items-center gap-2">
        <User size={16} />
        Profil
      </Link>
    </Button>
  );
};
