
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

// Normaliser tous les thèmes pour éviter les doublons
const normalizeQuestions = (questions: any[]) => {
  return questions.map(q => ({
    ...q,
    theme: q.theme === "demographie" ? "démographie" : 
           q.theme === "economie" ? "économie" : 
           q.theme === "education" ? "éducation" : 
           q.theme === "sante" ? "santé" : 
           q.theme
  }));
};

// Combiner toutes les questions avec normalisation des thèmes
export const questions = [
  ...normalizeQuestions(demographieQuestions),
  ...normalizeQuestions(economieQuestions),
  ...normalizeQuestions(educationQuestions),
  ...normalizeQuestions(environnementQuestions), 
  ...normalizeQuestions(mondeQuestions),
  ...normalizeQuestions(santeQuestions),
  ...normalizeQuestions(technologieQuestions),
  ...normalizeQuestions(transportQuestions),
  ...normalizeQuestions(insoliteQuestions)
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
