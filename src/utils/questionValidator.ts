
import { Question, MultiStepQuestion } from "@/components/types";

// Fonction pour détecter si une valeur est probablement abrégée
export const detectAbbreviatedValue = (correctAnswer: number, unit?: string): {
  isAbbreviated: boolean;
  suggestedValue?: number;
  multiplier?: number;
} => {
  if (!unit) return { isAbbreviated: false };

  const unitLower = unit.toLowerCase();
  
  // Détection des unités qui indiquent des grandes valeurs
  if (unitLower.includes('milliards') || unitLower.includes('billion')) {
    if (correctAnswer < 1000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000000,
        multiplier: 1000000000
      };
    }
  }
  
  if (unitLower.includes('millions') || unitLower.includes('million')) {
    if (correctAnswer < 1000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000,
        multiplier: 1000000
      };
    }
  }
  
  if (unitLower.includes('milliers') || unitLower.includes('thousand')) {
    if (correctAnswer < 100) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000,
        multiplier: 1000
      };
    }
  }

  // Cas spéciaux pour les unités monétaires
  if (unitLower.includes('milliards €') || unitLower.includes('milliards d\'euros')) {
    if (correctAnswer < 10000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000000,
        multiplier: 1000000000
      };
    }
  }

  return { isAbbreviated: false };
};

// Fonction pour analyser toutes les questions et détecter les problèmes
export const analyzeQuestions = (questions: (Question | MultiStepQuestion)[]): {
  problematicQuestions: Array<{
    id: string;
    question: string;
    currentValue: number;
    suggestedValue: number;
    unit: string;
    type: 'simple' | 'multistep';
    stepIndex?: number;
  }>;
  totalProblems: number;
} => {
  const problematicQuestions: Array<{
    id: string;
    question: string;
    currentValue: number;
    suggestedValue: number;
    unit: string;
    type: 'simple' | 'multistep';
    stepIndex?: number;
  }> = [];

  questions.forEach(q => {
    if (q.type === 'simple') {
      const detection = detectAbbreviatedValue(q.correctAnswer, q.unit);
      if (detection.isAbbreviated && detection.suggestedValue) {
        problematicQuestions.push({
          id: q.id,
          question: q.question,
          currentValue: q.correctAnswer,
          suggestedValue: detection.suggestedValue,
          unit: q.unit || '',
          type: 'simple'
        });
      }
    } else if (q.type === 'multistep') {
      q.steps.forEach((step, index) => {
        const detection = detectAbbreviatedValue(step.correctAnswer, step.unit);
        if (detection.isAbbreviated && detection.suggestedValue) {
          problematicQuestions.push({
            id: q.id,
            question: `${q.question} - Étape ${index + 1}: ${step.question}`,
            currentValue: step.correctAnswer,
            suggestedValue: detection.suggestedValue,
            unit: step.unit || '',
            type: 'multistep',
            stepIndex: index
          });
        }
      });
    }
  });

  return {
    problematicQuestions,
    totalProblems: problematicQuestions.length
  };
};

// Fonction pour corriger automatiquement une question simple
export const fixSimpleQuestion = (question: Question): Question => {
  const detection = detectAbbreviatedValue(question.correctAnswer, question.unit);
  
  if (detection.isAbbreviated && detection.suggestedValue) {
    return {
      ...question,
      correctAnswer: detection.suggestedValue
    };
  }
  
  return question;
};

// Fonction pour corriger automatiquement une question multi-étapes
export const fixMultiStepQuestion = (question: MultiStepQuestion): MultiStepQuestion => {
  const correctedSteps = question.steps.map(step => {
    const detection = detectAbbreviatedValue(step.correctAnswer, step.unit);
    
    if (detection.isAbbreviated && detection.suggestedValue) {
      return {
        ...step,
        correctAnswer: detection.suggestedValue
      };
    }
    
    return step;
  });

  return {
    ...question,
    steps: correctedSteps
  };
};

// Fonction principale pour corriger toutes les questions
export const fixAllQuestions = (questions: (Question | MultiStepQuestion)[]): (Question | MultiStepQuestion)[] => {
  return questions.map(q => {
    if (q.type === 'simple') {
      return fixSimpleQuestion(q);
    } else {
      return fixMultiStepQuestion(q);
    }
  });
};

// Fonction pour générer un rapport de correction
export const generateCorrectionReport = (questions: (Question | MultiStepQuestion)[]): string => {
  const analysis = analyzeQuestions(questions);
  
  let report = `RAPPORT DE CORRECTION DES QUESTIONS\n`;
  report += `=====================================\n\n`;
  report += `Total de questions analysées: ${questions.length}\n`;
  report += `Questions problématiques détectées: ${analysis.totalProblems}\n\n`;
  
  if (analysis.problematicQuestions.length > 0) {
    report += `DÉTAIL DES CORRECTIONS:\n`;
    report += `-----------------------\n\n`;
    
    analysis.problematicQuestions.forEach((prob, index) => {
      report += `${index + 1}. ID: ${prob.id}\n`;
      report += `   Question: ${prob.question}\n`;
      report += `   Valeur actuelle: ${prob.currentValue}\n`;
      report += `   Valeur corrigée: ${prob.suggestedValue.toLocaleString()}\n`;
      report += `   Unité: ${prob.unit}\n`;
      report += `   Type: ${prob.type}\n`;
      if (prob.stepIndex !== undefined) {
        report += `   Étape: ${prob.stepIndex + 1}\n`;
      }
      report += `\n`;
    });
  } else {
    report += `Aucune correction nécessaire détectée.\n`;
  }
  
  return report;
};
