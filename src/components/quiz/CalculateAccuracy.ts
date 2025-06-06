
// Utility function extracted from MultiStepQuizQuestion with improved and stricter accuracy logic
export const calculateAccuracy = (userAnswer: number, correctAnswer: number): number => {
  console.log(`CalculateAccuracy: User answer: ${userAnswer}, Correct answer: ${correctAnswer}`);
  
  // Handle exact match case
  if (userAnswer === correctAnswer) {
    console.log("Exact match - returning 100%");
    return 100;
  }
  
  // Calculate order of magnitude for both answers
  const userMagnitude = Math.abs(userAnswer) === 0 ? 0 : Math.floor(Math.log10(Math.abs(userAnswer)));
  const correctMagnitude = Math.abs(correctAnswer) === 0 ? 0 : Math.floor(Math.log10(Math.abs(correctAnswer)));
  
  // Calculate the difference in order of magnitude
  const orderOfMagnitudeDifference = Math.abs(userMagnitude - correctMagnitude);
  
  // Calculate relative difference (as a fraction of the correct answer)
  const relativeDifference = Math.abs(userAnswer - correctAnswer) / Math.abs(correctAnswer);
  
  let calculatedAccuracy = 0;
  
  // Enhanced percentage detection - values typically between 0 and 100 AND the correct answer suggests it's a percentage
  const isPercentage = correctAnswer <= 100 && correctAnswer >= 0 && (
    correctAnswer % 1 !== 0 || // Has decimals (like 73.5%)
    (correctAnswer >= 1 && correctAnswer <= 100) // Whole numbers between 1-100 are likely percentages
  );
  
  console.log(`Is percentage: ${isPercentage}, Correct answer: ${correctAnswer}`);
  
  if (isPercentage) {
    // For percentages, be much more strict with absolute differences
    const absoluteDifference = Math.abs(userAnswer - correctAnswer);
    
    console.log(`Percentage mode - Absolute difference: ${absoluteDifference}`);
    
    if (absoluteDifference <= 1) {
      calculatedAccuracy = 95; // Within 1% - excellent
    } else if (absoluteDifference <= 2) {
      calculatedAccuracy = 85; // Within 2% - very good (reduced from 90)
    } else if (absoluteDifference <= 5) {
      calculatedAccuracy = 70; // Within 5% - good (reduced from 80)
    } else if (absoluteDifference <= 10) {
      calculatedAccuracy = 55; // Within 10% - decent (reduced from 65)
    } else if (absoluteDifference <= 15) {
      calculatedAccuracy = 40; // Within 15% - not great (reduced from 50)
    } else if (absoluteDifference <= 25) {
      calculatedAccuracy = 25; // Within 25% - poor (reduced from 35)
    } else if (absoluteDifference <= 40) {
      calculatedAccuracy = 15; // Within 40% - very poor (reduced from 20)
    } else if (absoluteDifference <= 50) {
      calculatedAccuracy = 8; // Within 50% - terrible (reduced from 10)
    } else {
      calculatedAccuracy = 3; // More than 50% off - very terrible (reduced from 5)
    }
  } else {
    // Same order of magnitude - be more strict
    if (orderOfMagnitudeDifference === 0) {
      if (relativeDifference < 0.05) {
        calculatedAccuracy = 95; // Within 5% - excellent
      } else if (relativeDifference < 0.1) {
        calculatedAccuracy = 85; // Within 10% - very good (reduced from 95)
      } else if (relativeDifference < 0.2) {
        calculatedAccuracy = 75; // Within 20% - good (reduced from 90)
      } else if (relativeDifference < 0.5) {
        calculatedAccuracy = 65; // Within 50% - still good (reduced from 85)
      } else if (relativeDifference < 1) {
        calculatedAccuracy = 55; // Within 100% but same magnitude - decent (reduced from 80)
      } else {
        calculatedAccuracy = 45; // Same order of magnitude but quite off (reduced from 75)
      }
    } 
    // One order of magnitude off - be more strict
    else if (orderOfMagnitudeDifference === 1) {
      // Be more strict for large numbers too
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 50; // Good effort for billions (reduced from 70)
      } else if (correctMagnitude >= 6) { // Millions
        calculatedAccuracy = 40; // Decent for millions (reduced from 60)
      } else {
        calculatedAccuracy = 30; // Less forgiving for smaller numbers (reduced from 45)
      }
    } 
    // Two orders of magnitude off - much stricter
    else if (orderOfMagnitudeDifference === 2) {
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 30; // Still some credit for billions (reduced from 50)
      } else if (correctMagnitude >= 6) { // Millions
        calculatedAccuracy = 20; // Some credit for millions (reduced from 35)
      } else {
        calculatedAccuracy = 15; // Reduced from 25
      }
    }
    // Three orders of magnitude off - very strict
    else if (orderOfMagnitudeDifference === 3) {
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 15; // Minimal credit for billions (reduced from 30)
      } else {
        calculatedAccuracy = 8; // Reduced from 15
      }
    }
    // More than three orders of magnitude off - extremely strict
    else {
      calculatedAccuracy = Math.max(2, 10 - (orderOfMagnitudeDifference - 3) * 2); // Much more penalizing
    }
  }
  
  const finalAccuracy = Math.min(100, Math.max(0, calculatedAccuracy));
  console.log(`Final calculated accuracy: ${finalAccuracy}`);
  
  return finalAccuracy;
};
