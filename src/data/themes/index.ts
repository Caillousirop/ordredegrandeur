
import { QuizTheme } from "@/components/types";
import { demographieQuestions } from "./demographie";
import { environnementQuestions } from "./environnement";
import { economieQuestions } from "./economie";
import { santeQuestions } from "./sante";
import { educationQuestions } from "./education";
import { transportQuestions } from "./transport";
import { technologieQuestions } from "./technologie";
import { emploiQuestions } from "./emploi";

export const questions = [
  ...demographieQuestions,
  ...environnementQuestions,
  ...economieQuestions,
  ...santeQuestions,
  ...educationQuestions,
  ...transportQuestions,
  ...technologieQuestions,
  ...emploiQuestions
];

export const themes: QuizTheme[] = [
  {
    id: "démographie",
    name: "Démographie",
    description: "Questions sur la population et ses caractéristiques",
    color: "from-blue-500 to-blue-700",
    icon: "Users"
  },
  {
    id: "environnement",
    name: "Environnement",
    description: "Questions sur l'écologie et le climat",
    color: "from-green-500 to-green-700",
    icon: "Leaf"
  },
  {
    id: "économie",
    name: "Économie",
    description: "Questions sur l'argent et l'économie",
    color: "from-amber-500 to-amber-700",
    icon: "Euro"
  },
  {
    id: "santé",
    name: "Santé",
    description: "Questions sur la santé et le système médical",
    color: "from-red-500 to-red-700",
    icon: "HeartPulse"
  },
  {
    id: "éducation",
    name: "Éducation",
    description: "Questions sur l'enseignement et la formation",
    color: "from-purple-500 to-purple-700",
    icon: "GraduationCap"
  },
  {
    id: "transport",
    name: "Transport",
    description: "Questions sur les moyens de transport",
    color: "from-orange-500 to-orange-700",
    icon: "Car"
  },
  {
    id: "technologie",
    name: "Technologie",
    description: "Questions sur le numérique et la technologie",
    color: "from-indigo-500 to-indigo-700",
    icon: "Smartphone"
  },
  {
    id: "emploi",
    name: "Emploi",
    description: "Questions sur le travail et l'emploi",
    color: "from-cyan-500 to-cyan-700",
    icon: "Briefcase"
  }
];
