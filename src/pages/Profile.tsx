
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/hooks/useQuiz";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star, Trophy, Award, Laugh, Frown, Smile } from "lucide-react";
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
  
  // Funny messages based on performance
  const getFunnyMessage = () => {
    if (correctPercentage >= 80) return {
      text: "Einstein serait jaloux de vos compétences !",
      icon: <Laugh className="text-green-500" size={20} />
    };
    if (correctPercentage >= 50) return {
      text: "Pas mal ! Votre cerveau fait de l'exercice.",
      icon: <Smile className="text-amber-500" size={20} />
    };
    return {
      text: "Les statistiques aussi trouvent ça difficile parfois...",
      icon: <Frown className="text-blue-500" size={20} />
    };
  };
  
  const funnyMessage = getFunnyMessage();
  
  // More fun achievements
  const achievements = [
    {
      title: "Débutant Intrépide",
      description: "A survécu à 5 questions sans abandonner",
      unlocked: questionsCompleted >= 5,
      icon: <Star size={18} className="text-yellow-500" />
    },
    {
      title: "Einstein des Temps Modernes",
      description: "5 réponses directes sans calculatrice !",
      unlocked: scores.filter(s => s.isMultiStep && s.directFinalAnswer && s.accuracy >= 70).length >= 5,
      icon: <Trophy size={18} className="text-blue-500" />
    },
    {
      title: "Maître des Chiffres",
      description: "10 questions avec précision >80% (vous trichez ?)",
      unlocked: scores.filter(s => s.accuracy >= 80).length >= 10,
      icon: <Award size={18} className="text-purple-500" />
    }
  ];

  // Funny level titles
  const getLevelTitle = () => {
    if (userLevel >= 10) return "Génie Statistique";
    if (userLevel >= 7) return "Mathématicien Amateur";
    if (userLevel >= 4) return "Compteur de Haricots";
    return "Apprenti Calculateur";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/10 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mr-2 hover:bg-primary/10"
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Mon Profil</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User stats card */}
          <Card className="col-span-1 md:col-span-2 border-[1px] border-primary/20 shadow-lg shadow-primary/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary/30"></div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="text-gradient">Statistiques</span>
                <UserLevelBadge level={userLevel} />
              </CardTitle>
              <CardDescription className="flex items-center gap-2 bg-secondary/30 p-2 rounded-lg animate-pulse-scale">
                {funnyMessage.icon} {funnyMessage.text}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 p-4 rounded-lg text-center border border-blue-500/20 shadow-sm">
                    <p className="text-muted-foreground text-sm">Questions</p>
                    <p className="text-2xl font-bold text-blue-500">{questionsCompleted}</p>
                    <p className="text-xs text-muted-foreground">
                      {questionsCompleted < 5 ? "Vous débutez à peine !" : "Quelle persévérance !"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 p-4 rounded-lg text-center border border-green-500/20 shadow-sm">
                    <p className="text-muted-foreground text-sm">Précision</p>
                    <p className="text-2xl font-bold text-green-500">{correctPercentage}%</p>
                    <p className="text-xs text-muted-foreground">
                      {correctPercentage > 70 ? "Champion !" : "Peut mieux faire..."}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-400/5 p-4 rounded-lg text-center border border-purple-500/20 shadow-sm">
                    <p className="text-muted-foreground text-sm">Points</p>
                    <p className="text-2xl font-bold text-purple-500">{totalPoints}</p>
                    <p className="text-xs text-muted-foreground">
                      Niveau: {getLevelTitle()}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-secondary/20 p-4 rounded-lg border border-secondary">
                  <h3 className="font-medium mb-3 text-primary/80">Détails (pour les curieux)</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center bg-white/50 p-2 rounded-md">
                      <span className="text-muted-foreground flex items-center">
                        <Trophy size={16} className="mr-2 text-amber-500" />
                        Réponses directes
                      </span>
                      <Badge variant="outline" className="bg-amber-50">
                        {scores.filter(s => s.isMultiStep && s.directFinalAnswer).length} 
                        {scores.filter(s => s.isMultiStep && s.directFinalAnswer).length > 5 ? " 🌟" : ""}
                      </Badge>
                    </li>
                    <li className="flex justify-between items-center bg-white/50 p-2 rounded-md">
                      <span className="text-muted-foreground flex items-center">
                        <Award size={16} className="mr-2 text-blue-500" />
                        Réponses étape par étape
                      </span>
                      <Badge variant="outline" className="bg-blue-50">
                        {scores.filter(s => s.isMultiStep && !s.directFinalAnswer).length}
                      </Badge>
                    </li>
                    <li className="flex justify-between items-center bg-white/50 p-2 rounded-md">
                      <span className="text-muted-foreground flex items-center">
                        <Star size={16} className="mr-2 text-green-500" />
                        Questions simples
                      </span>
                      <Badge variant="outline" className="bg-green-50">
                        {scores.filter(s => !s.isMultiStep).length}
                      </Badge>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg mt-4 border border-primary/10 shadow-inner">
                  <p className="text-sm font-medium text-primary">Le saviez-vous ?</p>
                  <p className="text-xs text-muted-foreground">
                    Les réponses directes correctes aux questions à étapes vous rapportent 50% de points bonus. 
                    {totalPoints > 100 ? " À ce rythme, vous serez bientôt recruté par l'INSEE !" : " Essayez pour grimper plus vite dans le classement !"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements card */}
          <Card className="border-[1px] border-primary/20 shadow-lg shadow-primary/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-primary/30"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-gradient">Badges</CardTitle>
              <CardDescription>
                Récompenses débloquées (ou pas encore...)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center p-3 rounded-md transition-all duration-300 hover:translate-y-[-2px] ${
                      achievement.unlocked 
                        ? "bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20" 
                        : "bg-muted/50 opacity-60 border border-muted"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 ${
                      achievement.unlocked ? "bg-white shadow-md" : "bg-muted"
                    }`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    {!achievement.unlocked && (
                      <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Bientôt !</span>
                    )}
                  </li>
                ))}
                {achievements.filter(a => a.unlocked).length === 0 && (
                  <div className="text-center py-6 px-4 bg-muted/20 rounded-lg border border-muted">
                    <Frown className="mx-auto mb-2 text-muted-foreground" size={24} />
                    <p className="text-sm text-muted-foreground">
                      Pas encore de badges ? Ne vous inquiétez pas, même Einstein a commencé quelque part !
                    </p>
                  </div>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
