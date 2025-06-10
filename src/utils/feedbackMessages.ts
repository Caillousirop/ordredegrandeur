
// Utility function to generate consistent feedback messages based on accuracy
export const getFeedbackMessage = (accuracy: number): { 
  message: string; 
  emoji: string; 
  type: 'success' | 'info' | 'error' 
} => {
  if (accuracy >= 90) {
    return {
      message: "Excellente réponse ! 🎯",
      emoji: "🎯",
      type: 'success'
    };
  } else if (accuracy >= 75) {
    return {
      message: "Très bonne réponse ! 👍",
      emoji: "👍",
      type: 'success'
    };
  } else if (accuracy >= 60) {
    return {
      message: "Bonne réponse ! 😊",
      emoji: "😊",
      type: 'info'
    };
  } else if (accuracy >= 40) {
    return {
      message: "Pas mal ! 😐",
      emoji: "😐",
      type: 'info'
    };
  } else if (accuracy >= 25) {
    return {
      message: "Vous pouvez faire mieux ! 😕",
      emoji: "😕",
      type: 'info'
    };
  } else {
    return {
      message: "Essayez encore ! 😢",
      emoji: "😢",
      type: 'error'
    };
  }
};
