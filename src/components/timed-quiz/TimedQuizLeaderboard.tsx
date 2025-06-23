
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Trophy, Medal, Award, ArrowLeft, RefreshCw } from "lucide-react";
import { useTimedQuizLeaderboard } from "@/hooks/useTimedQuizLeaderboard";
import { useAuth } from "@/hooks/useAuth";

interface TimedQuizLeaderboardProps {
  onBack: () => void;
}

const TimedQuizLeaderboard: React.FC<TimedQuizLeaderboardProps> = ({ onBack }) => {
  const { leaderboard, loading, error, refreshLeaderboard } = useTimedQuizLeaderboard();
  const { user } = useAuth();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-sm font-medium">#{rank}</span>;
    }
  };

  const getRankBadgeVariant = (rank: number) => {
    switch (rank) {
      case 1:
        return "default";
      case 2:
        return "secondary";
      case 3:
        return "outline";
      default:
        return "outline";
    }
  };

  if (loading) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Chargement du classement...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6 text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <Button onClick={refreshLeaderboard} className="mt-4">
            <RefreshCw className="mr-2 h-4 w-4" />
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  const userEntry = leaderboard.find(entry => 
    user && user.email && entry.username === user.email.split('@')[0]
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Classement Quiz Chronométré
              </CardTitle>
              <p className="text-muted-foreground mt-1">
                Top 50 des meilleurs scores
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={refreshLeaderboard}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {userEntry && (
          <div className="mb-6 p-4 bg-primary/10 rounded-lg">
            <h3 className="font-medium mb-2">Votre position</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant={getRankBadgeVariant(userEntry.rank)}>
                  #{userEntry.rank}
                </Badge>
                <span className="font-medium">{userEntry.username || 'Anonyme'}</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{userEntry.score} pts</div>
                <div className="text-sm text-muted-foreground">
                  {userEntry.total_questions} questions
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Rang</TableHead>
                <TableHead>Joueur</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Questions</TableHead>
                <TableHead className="text-right">Précision</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((entry) => {
                const accuracy = entry.total_questions > 0 
                  ? Math.round((entry.correct_answers / entry.total_questions) * 100) 
                  : 0;
                
                return (
                  <TableRow 
                    key={entry.id}
                    className={userEntry?.id === entry.id ? "bg-primary/5" : ""}
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRankIcon(entry.rank)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {entry.username || 'Anonyme'}
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {entry.score}
                    </TableCell>
                    <TableCell className="text-right">
                      {entry.total_questions}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline">
                        {accuracy}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {new Date(entry.created_at).toLocaleDateString('fr-FR')}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {leaderboard.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun score enregistré pour le moment.</p>
            <p className="text-sm">Soyez le premier à jouer !</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimedQuizLeaderboard;
