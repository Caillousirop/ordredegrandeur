
// Utility function extracted from MultiStepQuizQuestion with improved order of magnitude logic
export const calculateAccuracy = (userAnswer: number, correctAnswer: number): number => {
  // Handle exact match case
  if (userAnswer === correctAnswer) {
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
  
  // Special handling for percentages (values typically between 0 and 100)
  const isPercentage = correctAnswer <= 100 && correctAnswer >= 0;
  
  if (isPercentage) {
    // For percentages, be much more strict
    const absoluteDifference = Math.abs(userAnswer - correctAnswer);
    
    if (absoluteDifference <= 1) {
      calculatedAccuracy = 95; // Within 1% - excellent
    } else if (absoluteDifference <= 2) {
      calculatedAccuracy = 90; // Within 2% - very good
    } else if (absoluteDifference <= 5) {
      calculatedAccuracy = 80; // Within 5% - good
    } else if (absoluteDifference <= 10) {
      calculatedAccuracy = 65; // Within 10% - decent
    } else if (absoluteDifference <= 15) {
      calculatedAccuracy = 50; // Within 15% - not great
    } else if (absoluteDifference <= 25) {
      calculatedAccuracy = 35; // Within 25% - poor
    } else if (absoluteDifference <= 40) {
      calculatedAccuracy = 20; // Within 40% - very poor
    } else {
      calculatedAccuracy = 10; // More than 40% off - terrible
    }
  } else {
    // Same order of magnitude - excellent!
    if (orderOfMagnitudeDifference === 0) {
      if (relativeDifference < 0.05) {
        calculatedAccuracy = 98; // Within 5% - excellent
      } else if (relativeDifference < 0.1) {
        calculatedAccuracy = 95; // Within 10% - very good
      } else if (relativeDifference < 0.2) {
        calculatedAccuracy = 90; // Within 20% - good
      } else if (relativeDifference < 0.5) {
        calculatedAccuracy = 85; // Within 50% - still good
      } else if (relativeDifference < 1) {
        calculatedAccuracy = 80; // Within 100% but same magnitude - decent
      } else {
        calculatedAccuracy = 75; // Same order of magnitude but quite off
      }
    } 
    // One order of magnitude off - still decent for large numbers
    else if (orderOfMagnitudeDifference === 1) {
      // Be more generous for very large numbers (billions, trillions)
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 70; // Good effort for billions
      } else if (correctMagnitude >= 6) { // Millions
        calculatedAccuracy = 60; // Decent for millions
      } else {
        calculatedAccuracy = 45; // Less forgiving for smaller numbers
      }
    } 
    // Two orders of magnitude off
    else if (orderOfMagnitudeDifference === 2) {
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 50; // Still some credit for billions
      } else if (correctMagnitude >= 6) { // Millions
        calculatedAccuracy = 35; // Some credit for millions
      } else {
        calculatedAccuracy = 25;
      }
    }
    // Three orders of magnitude off
    else if (orderOfMagnitudeDifference === 3) {
      if (correctMagnitude >= 9) { // Billions or more
        calculatedAccuracy = 30; // Minimal credit for billions
      } else {
        calculatedAccuracy = 15;
      }
    }
    // More than three orders of magnitude off - very poor
    else {
      calculatedAccuracy = Math.max(5, 20 - (orderOfMagnitudeDifference - 3) * 5);
    }
  }
  
  return Math.min(100, Math.max(0, calculatedAccuracy));
};
