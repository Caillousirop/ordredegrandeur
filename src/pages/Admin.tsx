
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileDown, FileUp, Copy, Check, Trash2 } from "lucide-react";
import { 
  parseQuestions, 
  sampleTextFormat, 
  sampleJSONFormat
} from "@/utils/questionImporter";
import { questions as allQuestions } from "@/data/themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Question, MultiStepQuestion } from "@/components/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { themes } from "@/data/themes";

const Admin = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [parseResult, setParseResult] = useState<{
    simpleQuestions: Question[],
    multiStepQuestions: MultiStepQuestion[]
  } | null>(null);
  const [activeTab, setActiveTab] = useState("import");
  const [selectedFormatType, setSelectedFormatType] = useState<"text" | "json">("text");
  const [selectedThemeFilter, setSelectedThemeFilter] = useState<string>("all");

  const handleImport = () => {
    try {
      const result = parseQuestions(inputText);
      setParseResult(result);
      
      const totalQuestions = result.simpleQuestions.length + result.multiStepQuestions.length;
      toast.success(`${totalQuestions} questions importées avec succès!`);
      
      // Ici, vous pourriez sauvegarder les questions dans votre état global,
      // les envoyer à une API, etc.
      console.log("Questions importées:", result);
    } catch (error) {
      toast.error("Erreur lors de l'import: " + (error as Error).message);
    }
  };

  const copyExampleFormat = () => {
    const exampleFormat = selectedFormatType === "json" 
      ? JSON.stringify(sampleJSONFormat, null, 2)
      : sampleTextFormat;
      
    navigator.clipboard.writeText(exampleFormat);
    toast.success(`Format d'exemple ${selectedFormatType} copié dans le presse-papier`);
  };

  const handleExport = () => {
    // Filtrer les questions par thème si nécessaire
    let questionsToExport = [...allQuestions];
    
    if (selectedThemeFilter !== "all") {
      questionsToExport = questionsToExport.filter(q => q.theme === selectedThemeFilter);
    }
    
    // Séparer les questions simples et à étapes
    const simpleQuestions = questionsToExport.filter(q => q.type === "simple");
    const multiStepQuestions = questionsToExport.filter(q => q.type === "multistep");
    
    // Créer le contenu à exporter selon le format sélectionné
    let exportContent = "";
    
    if (selectedFormatType === "json") {
      exportContent = JSON.stringify({ simpleQuestions, multiStepQuestions }, null, 2);
    } else {
      // Format texte
      exportContent = simpleQuestions.map(q => {
        const question = q as Question;
        return `(${question.theme}) Question simple: ${question.question}? Réponse: ${question.correctAnswer} ${question.unit ? `[${question.unit}]` : ""}. ${question.explanation || ""}`;
      }).join("\n\n");
      
      // Ajouter les questions à étapes
      if (multiStepQuestions.length > 0) {
        if (exportContent) exportContent += "\n\n";
        
        exportContent += multiStepQuestions.map(q => {
          const question = q as MultiStepQuestion;
          let result = `(${question.theme}) Question à étapes: ${question.question}?`;
          
          if (question.finalExplanation) {
            result += ` Explication finale: ${question.finalExplanation}`;
          }
          
          question.steps.forEach((step, index) => {
            result += `\nÉtape ${index + 1}: ${step.question}? Réponse: ${step.correctAnswer} ${step.unit ? `[${step.unit}]` : ""}. Explication: ${step.explanation || ""}`;
          });
          
          return result;
        }).join("\n\n");
      }
    }
    
    // Créer un élément pour télécharger le fichier
    const element = document.createElement("a");
    const file = new Blob([exportContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `questions-${selectedThemeFilter}-${new Date().toISOString().slice(0, 10)}.${selectedFormatType === "json" ? "json" : "txt"}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Questions exportées avec succès");
  };

  const deleteImportedQuestions = () => {
    setParseResult(null);
    toast.info("Questions importées supprimées");
  };

  return (
    <div className="container px-4 py-8">
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mr-2"
        >
          <ArrowLeft size={18} />
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Administration</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full">
          <TabsTrigger value="import" className="flex-1">Importer des questions</TabsTrigger>
          <TabsTrigger value="export" className="flex-1">Exporter des questions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="import">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Importer des questions</CardTitle>
                    <CardDescription>
                      Format {selectedFormatType === "text" ? "texte simple" : "JSON structuré"}
                    </CardDescription>
                  </div>
                  <Select value={selectedFormatType} onValueChange={(value) => setSelectedFormatType(value as "text" | "json")}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Format texte</SelectItem>
                      <SelectItem value="json">Format JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea 
                  className="min-h-[300px] font-mono text-sm"
                  placeholder={selectedFormatType === "text" ? 
                    "(theme) Question simple: Votre question? Réponse: 42 [unité]. Explication..." : 
                    "Collez votre JSON ici..."}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={copyExampleFormat}>
                  <Copy className="mr-2 h-4 w-4" /> Format d'exemple
                </Button>
                <Button onClick={handleImport}>
                  <FileUp className="mr-2 h-4 w-4" /> Importer
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Résultat</CardTitle>
                <CardDescription>
                  Questions importées
                </CardDescription>
              </CardHeader>
              <CardContent>
                {parseResult ? (
                  <div className="space-y-4">
                    <p className="font-medium">Questions simples: {parseResult.simpleQuestions.length}</p>
                    <p className="font-medium">Questions à étapes: {parseResult.multiStepQuestions.length}</p>
                    
                    <details className="mt-4">
                      <summary className="cursor-pointer font-medium text-primary">Afficher le détail</summary>
                      <pre className="mt-2 p-2 bg-muted/50 rounded text-xs overflow-auto max-h-[200px]">
                        {JSON.stringify(parseResult, null, 2)}
                      </pre>
                    </details>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Importez des questions pour voir le résultat</p>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={deleteImportedQuestions} disabled={!parseResult}>
                  <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                </Button>
                <Button variant="default" disabled={!parseResult}>
                  <Check className="mr-2 h-4 w-4" /> Enregistrer
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="export">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Exporter des questions</CardTitle>
                  <CardDescription>
                    Télécharger les questions au format {selectedFormatType === "text" ? "texte simple" : "JSON"}
                  </CardDescription>
                </div>
                <Select value={selectedFormatType} onValueChange={(value) => setSelectedFormatType(value as "text" | "json")}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Format texte</SelectItem>
                    <SelectItem value="json">Format JSON</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Filtrer par thème:</label>
                  <Select value={selectedThemeFilter} onValueChange={setSelectedThemeFilter}>
                    <SelectTrigger className="w-52">
                      <SelectValue placeholder="Tous les thèmes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les thèmes</SelectItem>
                      {themes.map(theme => (
                        <SelectItem key={theme.id} value={theme.id}>{theme.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-md">
                  <p className="font-medium mb-2">Statistiques:</p>
                  <p className="text-sm">Total: {allQuestions.filter(q => selectedThemeFilter === "all" || q.theme === selectedThemeFilter).length} questions</p>
                  <p className="text-sm">Questions simples: {allQuestions.filter(q => (selectedThemeFilter === "all" || q.theme === selectedThemeFilter) && q.type === "simple").length}</p>
                  <p className="text-sm">Questions à étapes: {allQuestions.filter(q => (selectedThemeFilter === "all" || q.theme === selectedThemeFilter) && q.type === "multistep").length}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto" onClick={handleExport}>
                <FileDown className="mr-2 h-4 w-4" /> Exporter
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
