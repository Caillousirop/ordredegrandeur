
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useQuestionTracking } from '@/hooks/useQuestionTracking';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface QuestionStatsProps {
  className?: string;
}

const QuestionStats: React.FC<QuestionStatsProps> = ({ className }) => {
  const { getViewedQuestionsStats, loading } = useQuestionTracking();
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    const loadStats = async () => {
      const data = await getViewedQuestionsStats();
      if (data) {
        setStats(data);
      }
    };

    loadStats();
  }, [getViewedQuestionsStats]);

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Historique des questions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Chargement...</p>
        </CardContent>
      </Card>
    );
  }

  if (stats.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Historique des questions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aucune question répondue pour le moment.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Historique des questions</CardTitle>
        <p className="text-sm text-muted-foreground">
          {stats.length} question{stats.length > 1 ? 's' : ''} répondue{stats.length > 1 ? 's' : ''}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
              <div className="flex-1">
                <p className="text-sm font-medium">Question #{stat.question_id.slice(-8)}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(stat.viewed_at), { 
                    addSuffix: true, 
                    locale: fr 
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {stat.user_answer !== null && (
                  <Badge variant="outline" className="text-xs">
                    Réponse: {stat.user_answer}
                  </Badge>
                )}
                {stat.accuracy !== null && (
                  <Badge 
                    variant={stat.accuracy >= 50 ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {stat.accuracy}%
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionStats;
