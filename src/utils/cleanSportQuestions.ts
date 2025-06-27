
import { supabase } from "@/integrations/supabase/client";

// Mapping des questions sport vers d'autres thèmes ou suppression
const sportQuestionMapping: Record<string, { action: 'change' | 'delete', newTheme?: string }> = {
  // Exemple de mappings - à adapter selon les vraies questions
  'football': { action: 'change', newTheme: 'culture' },
  'tennis': { action: 'change', newTheme: 'culture' },
  'basketball': { action: 'change', newTheme: 'culture' },
  'natation': { action: 'change', newTheme: 'santé' },
  'cyclisme': { action: 'change', newTheme: 'transport' },
  'marathon': { action: 'change', newTheme: 'santé' },
  'jeux olympiques': { action: 'change', newTheme: 'monde' },
  'stade': { action: 'change', newTheme: 'culture' },
  'équipe de france': { action: 'change', newTheme: 'culture' }
};

export const cleanSportQuestions = async () => {
  try {
    console.log("🧹 Nettoyage des questions avec le thème 'sport'...");
    
    // Récupérer toutes les questions avec le thème "sport"
    const { data: sportQuestions, error: fetchError } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('theme', 'sport');

    if (fetchError) {
      console.error('❌ Erreur lors de la récupération des questions sport:', fetchError);
      return { success: false, error: fetchError.message };
    }

    if (!sportQuestions || sportQuestions.length === 0) {
      console.log('ℹ️ Aucune question avec le thème "sport" trouvée');
      return { success: true, message: 'Aucune question sport à nettoyer' };
    }

    console.log(`📊 ${sportQuestions.length} questions sport trouvées`);

    const results = {
      changed: 0,
      deleted: 0,
      errors: [] as string[]
    };

    for (const question of sportQuestions) {
      try {
        // Analyser la question pour déterminer le nouveau thème
        const questionText = question.question.toLowerCase();
        let newTheme = null;
        
        // Chercher des mots-clés pour déterminer le nouveau thème
        for (const [keyword, mapping] of Object.entries(sportQuestionMapping)) {
          if (questionText.includes(keyword)) {
            if (mapping.action === 'change') {
              newTheme = mapping.newTheme;
            }
            break;
          }
        }

        // Si on trouve un thème approprié, changer la question
        if (newTheme) {
          const { error: updateError } = await supabase
            .from('quiz_questions')
            .update({ theme: newTheme })
            .eq('id', question.id);

          if (updateError) {
            results.errors.push(`Erreur mise à jour ${question.id}: ${updateError.message}`);
          } else {
            results.changed++;
            console.log(`✅ Question "${question.question.substring(0, 50)}..." changée vers "${newTheme}"`);
          }
        } else {
          // Si aucun thème approprié, supprimer la question
          const { error: deleteError } = await supabase
            .from('quiz_questions')
            .delete()
            .eq('id', question.id);

          if (deleteError) {
            results.errors.push(`Erreur suppression ${question.id}: ${deleteError.message}`);
          } else {
            results.deleted++;
            console.log(`🗑️ Question "${question.question.substring(0, 50)}..." supprimée`);
          }
        }
      } catch (error) {
        results.errors.push(`Erreur traitement ${question.id}: ${error}`);
      }
    }

    console.log(`✅ Nettoyage terminé: ${results.changed} modifiées, ${results.deleted} supprimées`);
    
    return { 
      success: true, 
      message: `Nettoyage terminé: ${results.changed} questions changées de thème, ${results.deleted} supprimées`,
      details: results
    };

  } catch (error) {
    console.error('❌ Erreur lors du nettoyage des questions sport:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erreur inconnue' };
  }
};
