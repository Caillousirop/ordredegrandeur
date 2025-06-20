
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { RefreshCw, Database, User, Bug } from "lucide-react";

const DebugInfo: React.FC = () => {
  const { user } = useAuth();
  const [debugData, setDebugData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const loadDebugData = async () => {
    if (!user) return;
    
    setLoading(true);
    console.log("🔍 [DEBUG] Chargement des données de debug pour:", user.id);
    
    try {
      // Vérifier le statut admin
      const { data: adminCheck } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', user.id);

      // Charger les scores
      const { data: scores, error: scoresError } = await supabase
        .from('user_quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      // Charger la progression
      const { data: progress, error: progressError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      // Test de la fonction admin
      const { data: isAdminResult } = await supabase.rpc('is_user_admin', { 
        check_user_id: user.id 
      });

      setDebugData({
        userId: user.id,
        email: user.email,
        isAdmin: adminCheck && adminCheck.length > 0,
        adminCheckData: adminCheck,
        isAdminFunction: isAdminResult,
        scores: scores || [],
        scoresError: scoresError?.message,
        progress: progress || [],
        progressError: progressError?.message,
        scoresCount: scores?.length || 0,
        lastUpdated: new Date().toISOString()
      });

      console.log("🔍 [DEBUG] Données récupérées:", {
        userId: user.id,
        isAdmin: adminCheck && adminCheck.length > 0,
        scoresCount: scores?.length || 0,
        progressCount: progress?.length || 0,
        scoresError,
        progressError
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
          Données techniques pour identifier les problèmes
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
            Actualiser
          </Button>
          <Badge variant={debugData.isAdmin ? "default" : "secondary"}>
            {debugData.isAdmin ? "Admin" : "Utilisateur"}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              Utilisateur
            </h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              <p><strong>ID:</strong> {debugData.userId}</p>
              <p><strong>Email:</strong> {debugData.email}</p>
              <p><strong>Admin:</strong> {debugData.isAdmin ? 'Oui' : 'Non'}</p>
              <p><strong>Fonction Admin:</strong> {debugData.isAdminFunction ? 'Oui' : 'Non'}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-1">
              <Database className="h-4 w-4" />
              Base de données
            </h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              <p><strong>Scores:</strong> {debugData.scoresCount}</p>
              <p><strong>Progression:</strong> {debugData.progress?.length || 0}</p>
              {debugData.scoresError && (
                <p className="text-red-500"><strong>Erreur scores:</strong> {debugData.scoresError}</p>
              )}
              {debugData.progressError && (
                <p className="text-red-500"><strong>Erreur progression:</strong> {debugData.progressError}</p>
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
                  <p><strong>Question:</strong> {score.question_id}</p>
                  <p><strong>Précision:</strong> {score.accuracy}%</p>
                  <p><strong>Date:</strong> {new Date(score.created_at).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {debugData.progress && debugData.progress.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Progression actuelle</h4>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border">
              {debugData.progress.map((prog: any, index: number) => (
                <div key={index} className="text-xs">
                  <p><strong>Points:</strong> {prog.total_points}</p>
                  <p><strong>Questions:</strong> {prog.questions_completed}</p>
                  <p><strong>Niveau:</strong> {prog.user_level}</p>
                  <p><strong>Précision:</strong> {prog.correct_percentage}%</p>
                  <p><strong>Mis à jour:</strong> {new Date(prog.last_updated).toLocaleString()}</p>
                </div>
              ))}
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
