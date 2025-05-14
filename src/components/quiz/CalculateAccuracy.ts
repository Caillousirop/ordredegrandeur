
// Utility function extracted from MultiStepQuizQuestion
export const calculateAccuracy = (userAnswer: number, correctAnswer: number): number => {
  // Calculate accuracy based on how close the userAnswer is to correctAnswer
  const exactMatch = userAnswer === correctAnswer;
  
  // Use the same logic as before for other cases
  const orderOfMagnitudeDifference = Math.abs(Math.floor(Math.log10(Math.abs(userAnswer))) - Math.floor(Math.log10(Math.abs(correctAnswer))));
  const relativeDifference = Math.abs(userAnswer - correctAnswer) / correctAnswer;
  
  let calculatedAccuracy = 0;
  
  if (exactMatch) {
    calculatedAccuracy = 100;
  } else if (orderOfMagnitudeDifference === 0) {
    if (relativeDifference < 0.05) {
      calculatedAccuracy = 99; // Very close but not exact
    } else if (relativeDifference < 0.1) {
      calculatedAccuracy = 95; // Very close
    } else if (relativeDifference < 0.25) {
      calculatedAccuracy = 90;
    } else if (relativeDifference < 0.5) {
      calculatedAccuracy = 80;
    } else if (relativeDifference < 1) {
      calculatedAccuracy = 70;
    } else {
      calculatedAccuracy = 60;
    }
  } else if (orderOfMagnitudeDifference === 1) {
    calculatedAccuracy = 40;
  } else {
    calculatedAccuracy = Math.max(0, 30 - (orderOfMagnitudeDifference - 1) * 10);
  }
  
  return Math.min(100, Math.max(0, calculatedAccuracy));
};
