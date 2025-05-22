
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileDown, FileUp, Copy } from "lucide-react";
import { parseQuestionsFromJSON, sampleImportFormat } from "@/utils/questionImporter";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const [jsonInput, setJsonInput] = useState("");
  const [parseResult, setParseResult] = useState<any>(null);

  const handleImport = () => {
    try {
      const result = parseQuestionsFromJSON(jsonInput);
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
    navigator.clipboard.writeText(JSON.stringify(sampleImportFormat, null, 2));
    toast.success("Format d'exemple copié dans le presse-papier");
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Importer des questions</CardTitle>
            <CardDescription>
              Importez des questions en format JSON
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[300px] font-mono text-sm"
              placeholder="Collez votre JSON ici..."
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
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
          <CardFooter>
            <Button variant="outline" disabled={!parseResult}>
              <FileDown className="mr-2 h-4 w-4" /> Exporter
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
