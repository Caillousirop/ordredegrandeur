
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
  // État pour contrôler quelle étape afficher
  const [currentStep, setCurrentStep] = React.useState<'daily' | 'theme' | 'type' | 'start'>('daily');

  // Réinitialiser à l'étape thème quand le thème change
  React.useEffect(() => {
    if (selectedTheme && currentStep === 'theme') {
      setCurrentStep('type');
    }
  }, [selectedTheme, currentStep]);

  const handleThemeSelect = (theme: QuizTheme) => {
    onSelectTheme(theme);
    setCurrentStep('type');
  };

  const handleTypeSelect = (type: "simple" | "multistep" | "all") => {
    onSelectType(type);
    setCurrentStep('start');
  };

  const handleBackToTheme = () => {
    setCurrentStep('theme');
  };

  const handleBackToType = () => {
    setCurrentStep('type');
  };

  const handleStartFromDaily = () => {
    setCurrentStep('theme');
  };

  return (
    <div className="space-y-6">
      {/* Daily Question Section - toujours visible en premier */}
      {currentStep === 'daily' && (
        <div className="space-y-6">
          <DailyQuestion />
          
          {/* Bouton pour passer à la sélection de thème */}
          <div className="flex justify-center">
            <Button 
              onClick={handleStartFromDaily}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 font-semibold text-lg py-6"
            >
              Choisir un quiz personnalisé
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Search bar en bas */}
          <div className="mt-8 flex justify-center">
            <SearchBar onSearch={onSearch} />
          </div>
          
          {/* Search results */}
          <SearchResults 
            searchQuery={searchQuery}
            searchResults={searchResults}
          />
        </div>
      )}

      {/* Étape 1: Sélection du thème */}
      {currentStep === 'theme' && (
        <div className="space-y-6">
          {/* Bouton retour */}
          <div className="flex justify-start">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep('daily')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </div>

          {/* Error message si les questions ont échoué à charger */}
          {questionsError && (
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="text-red-800 dark:text-red-200 font-medium">Erreur de chargement</h3>
              <p className="text-red-600 dark:text-red-300 text-sm mt-1">
                Impossible de charger les questions depuis la base de données: {questionsError}
              </p>
            </div>
          )}

          <ThemeSelector 
            onSelectTheme={handleThemeSelect} 
            selectedTheme={selectedTheme}
            themes={themes}
            loading={questionsLoading}
          />
        </div>
      )}

      {/* Étape 2: Sélection du type de question */}
      {currentStep === 'type' && (
        <div className="space-y-6">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handleBackToTheme}
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

          <QuestionTypeSelector 
            onSelectType={handleTypeSelect}
            selectedType={selectedType}
          />
        </div>
      )}

      {/* Étape 3: Commencer le test */}
      {currentStep === 'start' && (
        <div className="space-y-6">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handleBackToType}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Changer le type
            </Button>
            
            <div className="text-sm text-muted-foreground text-right">
              <div>Thème: <span className="font-medium">{selectedTheme?.name}</span></div>
              <div>Type: <span className="font-medium">
                {selectedType === 'simple' ? 'Questions simples' : 
                 selectedType === 'multistep' ? 'Questions à étapes' : 
                 'Tous les types'}
              </span></div>
            </div>
          </div>

          {/* Résumé et bouton commencer */}
          <div className="text-center space-y-4">
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
        </div>
      )}
    </div>
  );
};

export default QuizSetup;
