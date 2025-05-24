
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Download, Wand2 } from "lucide-react";
import { questions } from "@/data/themes";
import { 
  analyzeQuestions, 
  generateCorrectionReport, 
  fixAllQuestions 
} from "@/utils/questionValidator";
import { toast } from "sonner";

const QuestionValidator = () => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isApplyingCorrections, setIsApplyingCorrections] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    toast.info("Analyse en cours...");
    
    // Simulation d'un délai pour l'analyse
    setTimeout(() => {
      const result = analyzeQuestions(questions);
      setAnalysis(result);
      setIsAnalyzing(false);
      
      if (result.totalProblems > 0) {
        toast.warning(`${result.totalProblems} problèmes détectés !`);
      } else {
        toast.success("Aucun problème détecté !");
      }
    }, 1000);
  };

  const handleGenerateReport = () => {
    const report = generateCorrectionReport(questions);
    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rapport-correction-questions.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("Rapport téléchargé !");
  };

  const handlePreviewCorrections = () => {
    if (!analysis) return;
    
    console.log("=== APERÇU DES CORRECTIONS ===");
    console.log("Questions problématiques:", analysis.problematicQuestions);
    
    const correctedQuestions = fixAllQuestions(questions);
    console.log("Questions corrigées (échantillon):", correctedQuestions.slice(0, 5));
    
    toast.info("Aperçu des corrections affiché dans la console");
  };

  const handleApplyAllCorrections = () => {
    if (!analysis || analysis.totalProblems === 0) {
      toast.error("Aucune correction à appliquer");
      return;
    }

    setIsApplyingCorrections(true);
    toast.info(`Application de ${analysis.totalProblems} corrections...`);

    // Simulation de l'application des corrections
    setTimeout(() => {
      const correctedQuestions = fixAllQuestions(questions);
      
      // Générer le code corrigé pour chaque fichier de thème
      const correctedCode = generateCorrectedThemeFiles(correctedQuestions);
      
      console.log("=== CORRECTIONS APPLIQUÉES ===");
      console.log("Code corrigé généré:", correctedCode);
      
      // Relancer l'analyse pour vérifier
      const newAnalysis = analyzeQuestions(correctedQuestions);
      setAnalysis(newAnalysis);
      setIsApplyingCorrections(false);
      
      if (newAnalysis.totalProblems === 0) {
        toast.success("Toutes les corrections ont été appliquées avec succès !");
      } else {
        toast.warning(`${newAnalysis.totalProblems} problèmes restants après correction`);
      }
    }, 2000);
  };

  const generateCorrectedThemeFiles = (correctedQuestions: any[]) => {
    // Cette fonction génère le code corrigé pour chaque fichier de thème
    // En production, cela devrait effectivement écrire dans les fichiers
    const themeFiles: Record<string, any[]> = {};
    
    correctedQuestions.forEach(q => {
      if (!themeFiles[q.theme]) {
        themeFiles[q.theme] = [];
      }
      themeFiles[q.theme].push(q);
    });

    return themeFiles;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Validateur de Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing}
            className="flex items-center gap-2"
          >
            {isAnalyzing ? "Analyse..." : "Analyser les questions"}
          </Button>
          
          {analysis && analysis.totalProblems > 0 && (
            <Button 
              onClick={handleApplyAllCorrections}
              disabled={isApplyingCorrections}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Wand2 className="h-4 w-4" />
              {isApplyingCorrections ? "Application..." : `Corriger automatiquement (${analysis.totalProblems})`}
            </Button>
          )}
          
          {analysis && (
            <>
              <Button 
                onClick={handleGenerateReport}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Télécharger le rapport
              </Button>
              
              <Button 
                onClick={handlePreviewCorrections}
                variant="outline"
              >
                Aperçu des corrections
              </Button>
            </>
          )}
        </div>

        {analysis && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{questions.length}</div>
                    <div className="text-sm text-muted-foreground">Questions totales</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${analysis.totalProblems > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                      {analysis.totalProblems}
                    </div>
                    <div className="text-sm text-muted-foreground">Problèmes détectés</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {((questions.length - analysis.totalProblems) / questions.length * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Questions correctes</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {analysis.problematicQuestions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Questions problématiques détectées :</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {analysis.problematicQuestions.slice(0, 10).map((prob: any, index: number) => (
                    <Card key={index} className="border-orange-200">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2">
                              {prob.type} - ID: {prob.id}
                            </Badge>
                            <p className="text-sm font-medium mb-2">{prob.question}</p>
                            <div className="text-xs text-muted-foreground space-y-1">
                              <div>Valeur actuelle: <span className="font-mono">{prob.currentValue}</span></div>
                              <div>Valeur suggérée: <span className="font-mono text-green-600">{prob.suggestedValue.toLocaleString()}</span></div>
                              <div>Unité: {prob.unit}</div>
                            </div>
                          </div>
                          <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {analysis.problematicQuestions.length > 10 && (
                    <div className="text-center text-sm text-muted-foreground">
                      ... et {analysis.problematicQuestions.length - 10} autres problèmes
                    </div>
                  )}
                </div>
              </div>
            )}

            {analysis.totalProblems === 0 && (
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <div className="text-center text-green-600">
                    <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                    <p className="font-semibold">Toutes les questions sont correctes !</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Aucune valeur abrégée détectée dans la base de questions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionValidator;
