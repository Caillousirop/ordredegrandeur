
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useThemeQuestions } from "@/hooks/useThemeQuestions";
import { Question, MultiStepQuestion } from "@/components/types";
import { toast } from "sonner";

// Import all local questions from theme files
import { allQuestions as insoliteQuestions } from "@/data/themes/insolite";
import { allQuestions as mondeQuestions } from "@/data/themes/monde";
import { allQuestions as santeQuestions } from "@/data/themes/sante";
import { allQuestions as transportQuestions } from "@/data/themes/transport";
import { questions as demographieQuestions } from "@/data/themes/demographie";
import { questions as economieQuestions } from "@/data/themes/economie";
import { questions as educationQuestions } from "@/data/themes/education";
import { questions as emploiQuestions } from "@/data/themes/emploi";
import { questions as environnementQuestions } from "@/data/themes/environnement";
import { questions as technologieQuestions } from "@/data/themes/technologie";

const QuestionImporter: React.FC = () => {
  const { addQuestion, questions: existingQuestions } = useThemeQuestions();
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState<{
    success: number;
    failed: number;
    skipped: number;
  } | null>(null);

  // Collect all questions from local files
  const getAllLocalQuestions = (): (Question | MultiStepQuestion)[] => {
    const allLocalQuestions: (Question | MultiStepQuestion)[] = [
      ...insoliteQuestions,
      ...mondeQuestions,
      ...santeQuestions,
      ...transportQuestions,
      ...demographieQuestions,
      ...economieQuestions,
      ...educationQuestions,
      ...emploiQuestions,
      ...environnementQuestions,
      ...technologieQuestions
    ];

    return allLocalQuestions;
  };

  const localQuestions = getAllLocalQuestions();

  const handleImport = async () => {
    setImporting(true);
    setImportResults(null);

    let success = 0;
    let failed = 0;
    let skipped = 0;

    for (const question of localQuestions) {
      // Check if question already exists (by question text)
      const exists = existingQuestions.some(eq => eq.question === question.question);
      
      if (exists) {
        skipped++;
        continue;
      }

      try {
        const result = await addQuestion(question);
        if (result) {
          success++;
        } else {
          failed++;
        }
      } catch (error) {
        console.error("Error importing question:", error);
        failed++;
      }
    }

    setImportResults({ success, failed, skipped });
    setImporting(false);

    if (success > 0) {
      toast.success(`${success} questions importées avec succès`);
    }
    if (failed > 0) {
      toast.error(`${failed} questions ont échoué à l'import`);
    }
    if (skipped > 0) {
      toast.info(`${skipped} questions ignorées (déjà existantes)`);
    }
  };

  const getThemeStats = () => {
    const themeStats: { [key: string]: number } = {};
    localQuestions.forEach(q => {
      themeStats[q.theme] = (themeStats[q.theme] || 0) + 1;
    });
    return themeStats;
  };

  const themeStats = getThemeStats();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Import des Questions Locales
        </CardTitle>
        <CardDescription>
          Importez toutes les questions des fichiers TypeScript locaux vers la base de données Supabase
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {Object.entries(themeStats).map(([theme, count]) => (
            <Badge key={theme} variant="outline" className="justify-center">
              {theme}: {count}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted rounded-md">
          <div>
            <p className="font-medium">Questions disponibles localement</p>
            <p className="text-sm text-muted-foreground">{localQuestions.length} questions trouvées</p>
          </div>
          <div>
            <p className="font-medium">Questions en base</p>
            <p className="text-sm text-muted-foreground">{existingQuestions.length} questions</p>
          </div>
        </div>

        {importResults && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Succès: {importResults.success}</span>
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Échecs: {importResults.failed}</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Ignorées: {importResults.skipped}</span>
            </div>
          </div>
        )}

        <Button 
          onClick={handleImport}
          disabled={importing || localQuestions.length === 0}
          className="w-full"
        >
          {importing ? "Import en cours..." : `Importer ${localQuestions.length} questions`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionImporter;
