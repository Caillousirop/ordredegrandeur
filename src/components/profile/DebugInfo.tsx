
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useSupabaseProgress } from "@/hooks/useSupabaseProgress";
import { RefreshCw, Database, User, Bug, TestTube } from "lucide-react";

const DebugInfo: React.FC = () => {
  const { user } = useAuth();
  const { loadProgress, testConnection } = useSupabaseProgress();
  const [debugData, setDebugData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);

  const loadDebugData = async () => {
    if (!user) return;
    
    setLoading(true);
    console.log("🔍 [DEBUG] Chargement des données de debug pour:", user.id);
    
    try {
      const data = await loadProgress();
      
      setDebugData({
        userId: user.id,
        email: user.email,
        progress: data?.progress,
        scores: data?.scores || [],
        scoresCount: data?.scores?.length || 0,
        lastUpdated: new Date().toISOString()
      });

      console.log("🔍 [DEBUG] Données récupérées:", {
        userId: user.id,
        scoresCount: data?.scores?.length || 0,
        progressData: data?.progress
      });

    } catch (error) {
      console.error("❌ [DEBUG] Erreur lors du chargement:", error);
      setDebugData({
        error: error.message,
        userId: user.id
      });
    } finally {
      setLoading(false);
    }
  };

  const runConnectionTest = async () => {
    if (!user) return;
    
    setLoading(true);
    console.log("🧪 [DEBUG] Test de connexion...");
    
    try {
      const result = await testConnection();
      setTestResult(result);
      console.log("🧪 [DEBUG] Résultat test:", result);
    } catch (error) {
      console.error("❌ [DEBUG] Erreur test:", error);
      setTestResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadDebugData();
    }
  }, [user]);

  if (!user) return null;

  return (
    <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="h-5 w-5" />
          Informations de Debug
        </CardTitle>
        <CardDescription>
          Données techniques pour identifier les problèmes de sauvegarde
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadDebugData}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Recharger données
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={runConnectionTest}
            disabled={loading}
          >
            <TestTube className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Test connexion
          </Button>
        </div>

        {testResult && (
          <div className="space-y-2">
            <h4 className="font-medium">Résultat du test de connexion</h4>
            <div className={`p-2 rounded border ${testResult.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              {testResult.success ? (
                <p className="text-green-700">✅ Connexion et permissions OK</p>
              ) : (
                <p className="text-red-700">❌ Erreur: {testResult.error}</p>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              Utilisateur
            </h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              <p><strong>ID:</strong> {debugData.userId}</p>
              <p><strong>Email:</strong> {debugData.email}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-1">
              <Database className="h-4 w-4" />
              Base de données
            </h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              <p><strong>Scores:</strong> {debugData.scoresCount}</p>
              <p><strong>Progression:</strong> {debugData.progress ? 'Trouvée' : 'Aucune'}</p>
              {debugData.error && (
                <p className="text-red-500"><strong>Erreur:</strong> {debugData.error}</p>
              )}
            </div>
          </div>
        </div>

        {debugData.scores && debugData.scores.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Derniers scores (5 max)</h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border max-h-40 overflow-y-auto">
              {debugData.scores.slice(0, 5).map((score: any, index: number) => (
                <div key={index} className="text-xs border-b border-gray-200 dark:border-gray-600 pb-1 mb-1">
                  <p><strong>Question:</strong> {score.questionId}</p>
                  <p><strong>Précision:</strong> {score.accuracy}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {debugData.progress && (
          <div className="space-y-2">
            <h4 className="font-medium">Progression actuelle</h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              <div className="text-xs">
                <p><strong>Points:</strong> {debugData.progress.total_points}</p>
                <p><strong>Questions:</strong> {debugData.progress.questions_completed}</p>
                <p><strong>Niveau:</strong> {debugData.progress.user_level}</p>
                <p><strong>Précision:</strong> {debugData.progress.correct_percentage}%</p>
                <p><strong>Mis à jour:</strong> {new Date(debugData.progress.last_updated).toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500">
          Dernière actualisation: {debugData.lastUpdated && new Date(debugData.lastUpdated).toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
};

export default DebugInfo;
