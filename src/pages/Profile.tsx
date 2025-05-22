
import React from "react";
import { useQuiz } from "@/hooks/useQuiz";
import ProfileHeader from "@/components/profile/ProfileHeader";
import StatisticsCard from "@/components/profile/StatisticsCard";
import AchievementsCard from "@/components/profile/AchievementsCard";
import { calculateProfileStats } from "@/components/profile/ProfileStatCalculator";
import DarkModeToggle from "@/components/DarkModeToggle";
import UserSpace from "@/components/UserSpace";

const Profile = () => {
  const { scores, questionsCompleted } = useQuiz();
  
  // Calculate all statistics
  const { correctPercentage, totalPoints, userLevel } = calculateProfileStats(scores, questionsCompleted);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/10 dark:from-primary/10 dark:to-primary/5 py-10 px-4">
      {/* User Space component in the top right - sticky position */}
      <div className="sticky top-4 right-4 z-50 flex justify-end w-full max-w-7xl mx-auto">
        <UserSpace questionsCompleted={questionsCompleted} />
      </div>
      
      {/* Dark Mode toggle */}
      <div className="sticky top-4 left-4 z-50 w-full max-w-7xl mx-auto">
        <DarkModeToggle />
      </div>
      
      <div className="container mx-auto max-w-4xl">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User stats card */}
          <StatisticsCard
            scores={scores}
            questionsCompleted={questionsCompleted}
            correctPercentage={correctPercentage}
            totalPoints={totalPoints}
            userLevel={userLevel}
          />
          
          {/* Achievements card */}
          <AchievementsCard 
            scores={scores} 
            questionsCompleted={questionsCompleted} 
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
