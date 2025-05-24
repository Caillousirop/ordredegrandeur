import { Question, MultiStepQuestion } from "@/components/types";

// Fonction pour normaliser les noms de thèmes (gérer les doublons)
export const normalizeThemeName = (theme: string): string => {
  const normalized = theme.toLowerCase().trim();
  
  // Mappings pour corriger les doublons
  const themeMap: Record<string, string> = {
    'demographie': 'démographie',
    'economie': 'économie',
    'technologie': 'technologie',
    'environnement': 'environnement',
    'education': 'éducation',
    'sante': 'santé',
    'monde': 'monde',
    'transport': 'transport',
    'insolite': 'insolite'
  };
  
  return themeMap[normalized] || theme;
};

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
  if (unitLower.includes('milliards €') || unitLower.includes('milliards d\'euros') || unitLower.includes('milliards euros')) {
    if (correctAnswer < 10000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000000,
        multiplier: 1000000000
      };
    }
  }

  if (unitLower.includes('millions €') || unitLower.includes('millions d\'euros') || unitLower.includes('millions euros')) {
    if (correctAnswer < 10000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000,
        multiplier: 1000000
      };
    }
  }

  // Cas pour les valeurs avec "millions de" dans l'unité
  if (unitLower.includes('millions de') || unitLower.includes('millions d\'')) {
    if (correctAnswer < 1000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000000,
        multiplier: 1000000
      };
    }
  }

  // Cas pour les valeurs avec "milliers de" dans l'unité  
  if (unitLower.includes('milliers de') || unitLower.includes('milliers d\'')) {
    if (correctAnswer < 1000) {
      return {
        isAbbreviated: true,
        suggestedValue: correctAnswer * 1000,
        multiplier: 1000
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
    theme: string;
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
    theme: string;
    stepIndex?: number;
  }> = [];

  questions.forEach(q => {
    const normalizedTheme = normalizeThemeName(q.theme);
    
    if (q.type === 'simple') {
      const detection = detectAbbreviatedValue(q.correctAnswer, q.unit);
      if (detection.isAbbreviated && detection.suggestedValue) {
        problematicQuestions.push({
          id: q.id,
          question: q.question,
          currentValue: q.correctAnswer,
          suggestedValue: detection.suggestedValue,
          unit: q.unit || '',
          type: 'simple',
          theme: normalizedTheme
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
            theme: normalizedTheme,
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
      correctAnswer: detection.suggestedValue,
      theme: normalizeThemeName(question.theme)
    };
  }
  
  return {
    ...question,
    theme: normalizeThemeName(question.theme)
  };
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
    steps: correctedSteps,
    theme: normalizeThemeName(question.theme)
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

// Fonction pour générer un rapport de correction détaillé
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
      report += `   Thème: ${prob.theme}\n`;
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

// Fonction pour appliquer les corrections à un ensemble de questions spécifique
export const applyCorrectionsByTheme = (questions: (Question | MultiStepQuestion)[], theme: string): (Question | MultiStepQuestion)[] => {
  const normalizedTheme = normalizeThemeName(theme);
  
  return questions.map(q => {
    const qNormalizedTheme = normalizeThemeName(q.theme);
    
    if (qNormalizedTheme === normalizedTheme) {
      if (q.type === 'simple') {
        return fixSimpleQuestion(q);
      } else {
        return fixMultiStepQuestion(q);
      }
    }
    return {
      ...q,
      theme: normalizeThemeName(q.theme)
    };
  });
};

// Fonction pour obtenir les statistiques de correction par thème
export const getCorrectionStatsByTheme = (questions: (Question | MultiStepQuestion)[]): Record<string, {
  total: number;
  problematic: number;
  percentage: number;
}> => {
  const stats: Record<string, { total: number; problematic: number; percentage: number }> = {};
  
  questions.forEach(q => {
    const normalizedTheme = normalizeThemeName(q.theme);
    
    if (!stats[normalizedTheme]) {
      stats[normalizedTheme] = { total: 0, problematic: 0, percentage: 0 };
    }
    stats[normalizedTheme].total++;
    
    if (q.type === 'simple') {
      const detection = detectAbbreviatedValue(q.correctAnswer, q.unit);
      if (detection.isAbbreviated) {
        stats[normalizedTheme].problematic++;
      }
    } else if (q.type === 'multistep') {
      let hasProblems = false;
      q.steps.forEach(step => {
        const detection = detectAbbreviatedValue(step.correctAnswer, step.unit);
        if (detection.isAbbreviated) {
          hasProblems = true;
        }
      });
      if (hasProblems) {
        stats[normalizedTheme].problematic++;
      }
    }
  });
  
  Object.keys(stats).forEach(theme => {
    stats[theme].percentage = (stats[theme].problematic / stats[theme].total) * 100;
  });
  
  return stats;
};

// Nouvelle fonction pour corriger les questions et les sauvegarder dans localStorage
export const applyCorrectionsAndSave = (questions: (Question | MultiStepQuestion)[], theme: string): (Question | MultiStepQuestion)[] => {
  const correctedQuestions = applyCorrectionsByTheme(questions, theme);
  
  // Sauvegarder dans localStorage pour persistence
  try {
    const simpleQuestions = correctedQuestions.filter(q => q.type === 'simple') as Question[];
    const multiStepQuestions = correctedQuestions.filter(q => q.type === 'multistep') as MultiStepQuestion[];
    
    const existingData = localStorage.getItem("admin-questions");
    const adminQuestions = existingData ? JSON.parse(existingData) : { simpleQuestions: [], multiStepQuestions: [] };
    
    // Merger les corrections avec les questions admin existantes
    const mergedSimple = [...adminQuestions.simpleQuestions, ...simpleQuestions];
    const mergedMultiStep = [...adminQuestions.multiStepQuestions, ...multiStepQuestions];
    
    localStorage.setItem("admin-questions", JSON.stringify({
      simpleQuestions: mergedSimple,
      multiStepQuestions: mergedMultiStep
    }));
    
    console.log(`Corrections sauvegardées pour le thème: ${theme}`);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde:", error);
  }
  
  return correctedQuestions;
};
