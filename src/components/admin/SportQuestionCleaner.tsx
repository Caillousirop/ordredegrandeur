
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Trash2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { cleanSportQuestions } from '@/utils/cleanSportQuestions';

const SportQuestionCleaner: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleCleanSportQuestions = async () => {
    setIsProcessing(true);
    setResults(null);
    
    try {
      const result = await cleanSportQuestions();
      
      if (result.success) {
        toast.success(result.message);
        setResults(result.details);
      } else {
        toast.error(`Erreur: ${result.error}`);
      }
    } catch (error) {
      toast.error('Erreur lors du nettoyage des questions sport');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="h-5 w-5" />
          Nettoyage des questions "Sport"
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-800 font-medium">Attention</p>
              <p className="text-sm text-yellow-700 mt-1">
                Cette action va examiner toutes les questions avec le thème "sport" et :
              </p>
              <ul className="text-sm text-yellow-700 mt-2 ml-4 list-disc">
                <li>Changer le thème vers un thème plus approprié si possible</li>
                <li>Supprimer les questions qui ne correspondent à aucun autre thème</li>
              </ul>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleCleanSportQuestions}
          disabled={isProcessing}
          className="w-full"
          variant="destructive"
        >
          {isProcessing ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Nettoyage en cours...
            </>
          ) : (
            <>
              <Trash2 className="h-4 w-4 mr-2" />
              Nettoyer les questions "Sport"
            </>
          )}
        </Button>

        {results && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-800 mb-2">Résultats du nettoyage</h3>
            <div className="space-y-1 text-sm text-green-700">
              <p>✅ Questions changées de thème: {results.changed}</p>
              <p>🗑️ Questions supprimées: {results.deleted}</p>
              {results.errors.length > 0 && (
                <p>❌ Erreurs: {results.errors.length}</p>
              )}
            </div>
            {results.errors.length > 0 && (
              <details className="mt-2">
                <summary className="cursor-pointer text-sm font-medium text-red-600">
                  Voir les erreurs
                </summary>
                <div className="mt-2 text-xs text-red-600">
                  {results.errors.map((error: string, index: number) => (
                    <div key={index}>• {error}</div>
                  ))}
                </div>
              </details>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SportQuestionCleaner;
