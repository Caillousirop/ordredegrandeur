
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import QuestionTypeSelector from "./QuestionTypeSelector";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import DailyQuestion from "./DailyQuestion";
import { QuizTheme, Question, MultiStepQuestion } from "./types";

interface QuizSetupProps {
  onSearch: (query: string) => void;
  onSelectTheme: (theme: QuizTheme) => void;
  onSelectType: (type: "simple" | "multistep" | "all") => void;
  onStartQuiz: () => void;
  selectedTheme: QuizTheme | null;
  selectedType: "simple" | "multistep" | "all";
  filteredQuestionsCount: number;
  searchQuery: string;
  searchResults: (Question | MultiStepQuestion)[];
  questionsLoading?: boolean;
  questionsError?: string | null;
  themes: QuizTheme[];
}

const QuizSetup: React.FC<QuizSetupProps> = ({
  onSearch,
  onSelectTheme,
  onSelectType,
  onStartQuiz,
  selectedTheme,
  selectedType,
  filteredQuestionsCount,
  searchQuery,
  searchResults,
  questionsLoading = false,
  questionsError = null,
  themes
}) => {
  // État pour contrôler quelle étape afficher: 'theme' ou 'type-and-start'
  const [currentStep, setCurrentStep] = React.useState<'theme' | 'type-and-start'>('theme');

  // Réinitialiser à l'étape type quand le thème change
  React.useEffect(() => {
    if (selectedTheme && currentStep === 'theme') {
      setCurrentStep('type-and-start');
    }
  }, [selectedTheme, currentStep]);

  const handleThemeSelect = (theme: QuizTheme) => {
    onSelectTheme(theme);
    setCurrentStep('type-and-start');
  };

  return (
    <div className="space-y-6">
      {/* Daily Question Section - toujours visible en haut */}
      <DailyQuestion />

      {/* Étape 1: Sélection du thème */}
      {currentStep === 'theme' && (
        <div className="space-y-6">
          {/* Error message si les questions ont échoué à charger */}
          {questionsError && (
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="text-red-800 dark:text-red-200 font-medium">Erreur de chargement</h3>
              <p className="text-red-600 dark:text-red-300 text-sm mt-1">
                Impossible de charger les questions depuis la base de données: {questionsError}
              </p>
            </div>
          )}

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Choisissez un thème</h2>
            <p className="text-muted-foreground">Sélectionnez le domaine qui vous intéresse</p>
          </div>

          <ThemeSelector 
            onSelectTheme={handleThemeSelect} 
            selectedTheme={selectedTheme}
            themes={themes}
            loading={questionsLoading}
          />
        </div>
      )}

      {/* Étape 2: Sélection du type de question + Commencer */}
      {currentStep === 'type-and-start' && (
        <div className="space-y-6">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep('theme')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Changer de thème
            </Button>
            
            {selectedTheme && (
              <div className="text-sm text-muted-foreground">
                Thème sélectionné: <span className="font-medium">{selectedTheme.name}</span>
              </div>
            )}
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Type de questions</h2>
            <p className="text-muted-foreground">Choisissez le format qui vous convient</p>
          </div>

          <QuestionTypeSelector 
            onSelectType={onSelectType}
            selectedType={selectedType}
          />

          {/* Section commencer le test */}
          {selectedType && (
            <div className="text-center space-y-4 mt-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Récapitulatif de votre sélection</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-medium">Thème:</span> {selectedTheme?.name}</p>
                  <p><span className="font-medium">Type:</span> {
                    selectedType === 'simple' ? 'Questions simples' : 
                    selectedType === 'multistep' ? 'Questions à étapes' : 
                    'Tous les types'
                  }</p>
                  <p><span className="font-medium">Questions disponibles:</span> {filteredQuestionsCount}</p>
                </div>
              </div>

              <Button 
                onClick={onStartQuiz}
                disabled={filteredQuestionsCount === 0 || questionsLoading}
                size="lg"
                className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80 font-semibold text-lg py-6"
              >
                {questionsLoading ? "Chargement..." : `Commencer le test`}
                {!questionsLoading && <ArrowRight className="ml-2" />}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Search bar - toujours visible en bas */}
      <div className="mt-8 border-t pt-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium mb-2">Recherche personnalisée</h3>
          <p className="text-sm text-muted-foreground">Trouvez des questions spécifiques</p>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      
      {/* Search results */}
      <SearchResults 
        searchQuery={searchQuery}
        searchResults={searchResults}
      />
    </div>
  );
};

export default QuizSetup;
