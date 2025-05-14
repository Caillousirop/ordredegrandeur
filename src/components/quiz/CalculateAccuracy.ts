
// Utility function extracted from MultiStepQuizQuestion
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
  
  // For very large numbers (billions or more), be more lenient
  const isVeryLargeNumber = correctMagnitude >= 9; // 1 billion or more
  const isLargeNumber = correctMagnitude >= 6; // 1 million or more
  
  let calculatedAccuracy = 0;
  
  // Same order of magnitude
  if (orderOfMagnitudeDifference === 0) {
    if (relativeDifference < 0.05) {
      calculatedAccuracy = 99; // Very close but not exact
    } else if (relativeDifference < 0.1) {
      calculatedAccuracy = 95; // Very close
    } else if (relativeDifference < 0.25) {
      calculatedAccuracy = 90;
    } else if (relativeDifference < 0.5) {
      calculatedAccuracy = 85;
    } else if (relativeDifference < 1) {
      calculatedAccuracy = 75;
    } else {
      calculatedAccuracy = 70; // Higher base score even if quite off
    }
  } 
  // One order of magnitude difference
  else if (orderOfMagnitudeDifference === 1) {
    // Be more lenient for very large numbers
    if (isVeryLargeNumber) {
      calculatedAccuracy = 80; // Good score for being only one order off with billions
    } else if (isLargeNumber) {
      calculatedAccuracy = 70; // Good score for being only one order off with millions
    } else {
      calculatedAccuracy = 50; // Increased from 40
    }
  } 
  // Two orders of magnitude difference
  else if (orderOfMagnitudeDifference === 2) {
    if (isVeryLargeNumber) {
      calculatedAccuracy = 60; // Still decent for billions
    } else if (isLargeNumber) {
      calculatedAccuracy = 50; // Still decent for millions
    } else {
      calculatedAccuracy = 30;
    }
  }
  // More than two orders of magnitude difference
  else {
    // Even for very large numbers, more than 2 orders of magnitude off is quite inaccurate
    calculatedAccuracy = Math.max(10, 40 - (orderOfMagnitudeDifference - 2) * 10);
  }
  
  return Math.min(100, Math.max(0, calculatedAccuracy));
};
