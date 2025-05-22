
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
      {/* Fixed position controls at the top of the screen */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full p-4">
        <div className="bg-background/90 backdrop-blur-lg rounded-full shadow-lg">
          <DarkModeToggle />
        </div>
        <div className="bg-background/90 backdrop-blur-lg rounded-full shadow-lg">
          <UserSpace questionsCompleted={questionsCompleted} />
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl mt-14">
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
