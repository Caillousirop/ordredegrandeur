
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/hooks/useQuiz";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, Trophy, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserLevelBadge from "@/components/UserLevelBadge";

const Profile = () => {
  const navigate = useNavigate();
  const { scores, questionsCompleted } = useQuiz();
  
  // Calculate statistics
  const totalAnswers = scores.length;
  const correctAnswers = scores.filter(score => score.accuracy >= 50).length;
  const correctPercentage = totalAnswers > 0 
    ? Math.round((correctAnswers / totalAnswers) * 100) 
    : 0;
    
  // Calculate points based on scores
  const totalPoints = scores.reduce((total, score) => {
    // Give bonus points for direct answers on multi-step questions
    const basePoints = Math.round(score.accuracy / 10);
    const bonusPoints = score.isMultiStep && score.directFinalAnswer ? 5 : 0;
    return total + basePoints + bonusPoints;
  }, 0);
  
  // Calculate user level based on points
  const userLevel = Math.floor(totalPoints / 25) + 1;
  
  // Achievements logic
  const achievements = [
    {
      title: "Débutant",
      description: "A complété 5 questions",
      unlocked: questionsCompleted >= 5,
      icon: <Star size={18} className="text-yellow-500" />
    },
    {
      title: "Penseur Rapide",
      description: "5 réponses directes correctes",
      unlocked: scores.filter(s => s.isMultiStep && s.directFinalAnswer && s.accuracy >= 70).length >= 5,
      icon: <Trophy size={18} className="text-blue-500" />
    },
    {
      title: "Expert",
      description: "10 questions avec précision >80%",
      unlocked: scores.filter(s => s.accuracy >= 80).length >= 10,
      icon: <Award size={18} className="text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mr-2"
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Mon Profil</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User stats card */}
          <Card className="col-span-1 md:col-span-2 border-[1px] border-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Statistiques</span>
                <UserLevelBadge level={userLevel} />
              </CardTitle>
              <CardDescription>
                Récapitulatif de vos performances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Questions</p>
                    <p className="text-2xl font-bold">{questionsCompleted}</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Précision</p>
                    <p className="text-2xl font-bold">{correctPercentage}%</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Points</p>
                    <p className="text-2xl font-bold">{totalPoints}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Détails</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Réponses directes</span>
                      <span>{scores.filter(s => s.isMultiStep && s.directFinalAnswer).length}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Réponses étape par étape</span>
                      <span>{scores.filter(s => s.isMultiStep && !s.directFinalAnswer).length}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Questions simples</span>
                      <span>{scores.filter(s => !s.isMultiStep).length}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements card */}
          <Card className="border-[1px] border-secondary/50">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                Récompenses débloquées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center p-2 rounded-md ${
                      achievement.unlocked ? "bg-primary/10" : "bg-muted/50 opacity-60"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${
                      achievement.unlocked ? "bg-background" : "bg-muted"
                    } flex items-center justify-center mr-3`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
