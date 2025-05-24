
import { demographieQuestions } from "./demographie";
import { economieQuestions } from "./economie";
import { educationQuestions } from "./education";
import { environnementQuestions } from "./environnement";
import { mondeQuestions } from "./monde";
import { santeQuestions } from "./sante";
import { technologieQuestions } from "./technologie";
import { transportQuestions } from "./transport";
import { insoliteQuestions } from "./insolite";
import { QuizTheme } from "@/components/types";

// Normaliser tous les thèmes pour éviter les doublons et corriger les valeurs abrégées
const normalizeAndFixQuestions = (questions: any[], targetTheme: string) => {
  return questions.map(q => {
    const fixedQuestion = { ...q, theme: targetTheme };
    
    if (q.type === "simple") {
      // Corriger les valeurs abrégées pour les questions simples
      if (q.unit && typeof q.correctAnswer === "number") {
        const unit = q.unit.toLowerCase();
        if ((unit.includes('millions') || unit.includes('million')) && q.correctAnswer < 1000) {
          fixedQuestion.correctAnswer = q.correctAnswer * 1000000;
        } else if ((unit.includes('milliards') || unit.includes('billion')) && q.correctAnswer < 1000) {
          fixedQuestion.correctAnswer = q.correctAnswer * 1000000000;
        } else if ((unit.includes('milliers') || unit.includes('thousand')) && q.correctAnswer < 100) {
          fixedQuestion.correctAnswer = q.correctAnswer * 1000;
        }
      }
    } else if (q.type === "multistep" && q.steps) {
      // Corriger les valeurs abrégées pour les questions multi-étapes
      fixedQuestion.steps = q.steps.map((step: any) => {
        const fixedStep = { ...step };
        if (step.unit && typeof step.correctAnswer === "number") {
          const unit = step.unit.toLowerCase();
          if ((unit.includes('millions') || unit.includes('million')) && step.correctAnswer < 1000) {
            fixedStep.correctAnswer = step.correctAnswer * 1000000;
          } else if ((unit.includes('milliards') || unit.includes('billion')) && step.correctAnswer < 1000) {
            fixedStep.correctAnswer = step.correctAnswer * 1000000000;
          } else if ((unit.includes('milliers') || unit.includes('thousand')) && step.correctAnswer < 100) {
            fixedStep.correctAnswer = step.correctAnswer * 1000;
          }
        }
        return fixedStep;
      });
    }
    
    return fixedQuestion;
  });
};

// Combiner toutes les questions avec normalisation des thèmes et correction des valeurs
export const questions = [
  ...normalizeAndFixQuestions(demographieQuestions, "démographie"),
  ...normalizeAndFixQuestions(economieQuestions, "économie"),
  ...normalizeAndFixQuestions(educationQuestions, "éducation"),
  ...normalizeAndFixQuestions(environnementQuestions, "environnement"), 
  ...normalizeAndFixQuestions(mondeQuestions, "monde"),
  ...normalizeAndFixQuestions(santeQuestions, "santé"),
  ...normalizeAndFixQuestions(technologieQuestions, "technologie"),
  ...normalizeAndFixQuestions(transportQuestions, "transport"),
  ...normalizeAndFixQuestions(insoliteQuestions, "insolite")
];

// Définir les thèmes disponibles avec noms normalisés
export const themes: QuizTheme[] = [
  {
    id: "démographie",
    name: "Démographie",
    description: "Questions sur la population française et les tendances démographiques",
    color: "from-blue-500 to-blue-400",
    icon: "Users"
  },
  {
    id: "économie",
    name: "Économie",
    description: "Questions sur l'économie française, l'emploi et les finances",
    color: "from-green-500 to-green-400",
    icon: "LineChart"
  },
  {
    id: "éducation",
    name: "Éducation",
    description: "Questions sur le système éducatif français",
    color: "from-amber-500 to-amber-400",
    icon: "GraduationCap"
  },
  {
    id: "environnement",
    name: "Environnement",
    description: "Questions sur l'écologie et le développement durable",
    color: "from-emerald-500 to-emerald-400",
    icon: "Leaf"
  },
  {
    id: "monde",
    name: "Monde",
    description: "Questions sur les statistiques et les faits internationaux",
    color: "from-indigo-500 to-indigo-400",
    icon: "Globe"
  },
  {
    id: "santé",
    name: "Santé",
    description: "Questions sur le système de santé et les indicateurs sanitaires",
    color: "from-red-500 to-red-400",
    icon: "Heart"
  },
  {
    id: "technologie",
    name: "Technologie",
    description: "Questions sur l'innovation et les usages numériques",
    color: "from-violet-500 to-violet-400",
    icon: "Smartphone"
  },
  {
    id: "transport",
    name: "Transport",
    description: "Questions sur les moyens de transport et les infrastructures",
    color: "from-orange-500 to-orange-400",
    icon: "Car"
  },
  {
    id: "insolite",
    name: "Insolite",
    description: "Questions surprenantes sur des faits étonnants et inhabituels",
    color: "from-purple-500 to-pink-400",
    icon: "Sparkles"
  }
];
