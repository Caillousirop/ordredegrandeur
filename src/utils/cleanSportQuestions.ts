
import { supabase } from "@/integrations/supabase/client";

// Mapping étendu des questions sport vers d'autres thèmes ou suppression
const sportQuestionMapping: Record<string, { action: 'change' | 'delete', newTheme?: string }> = {
  // Sports vers culture/loisirs
  'football': { action: 'change', newTheme: 'culture' },
  'tennis': { action: 'change', newTheme: 'culture' },
  'basketball': { action: 'change', newTheme: 'culture' },
  'rugby': { action: 'change', newTheme: 'culture' },
  'handball': { action: 'change', newTheme: 'culture' },
  'volleyball': { action: 'change', newTheme: 'culture' },
  'golf': { action: 'change', newTheme: 'culture' },
  'boxe': { action: 'change', newTheme: 'culture' },
  'escrime': { action: 'change', newTheme: 'culture' },
  'judo': { action: 'change', newTheme: 'culture' },
  'karaté': { action: 'change', newTheme: 'culture' },
  'athlétisme': { action: 'change', newTheme: 'culture' },
  
  // Sports liés à la santé
  'natation': { action: 'change', newTheme: 'santé' },
  'course': { action: 'change', newTheme: 'santé' },
  'marathon': { action: 'change', newTheme: 'santé' },
  'jogging': { action: 'change', newTheme: 'santé' },
  'fitness': { action: 'change', newTheme: 'santé' },
  'musculation': { action: 'change', newTheme: 'santé' },
  'yoga': { action: 'change', newTheme: 'santé' },
  'pilates': { action: 'change', newTheme: 'santé' },
  
  // Sports liés au transport
  'cyclisme': { action: 'change', newTheme: 'transport' },
  'vélo': { action: 'change', newTheme: 'transport' },
  'vtt': { action: 'change', newTheme: 'transport' },
  'moto': { action: 'change', newTheme: 'transport' },
  'f1': { action: 'change', newTheme: 'transport' },
  'formule 1': { action: 'change', newTheme: 'transport' },
  'rallye': { action: 'change', newTheme: 'transport' },
  
  // Événements sportifs vers monde/culture
  'jeux olympiques': { action: 'change', newTheme: 'monde' },
  'coupe du monde': { action: 'change', newTheme: 'monde' },
  'championnat': { action: 'change', newTheme: 'culture' },
  'tournoi': { action: 'change', newTheme: 'culture' },
  
  // Infrastructure sportive vers culture
  'stade': { action: 'change', newTheme: 'culture' },
  'piscine': { action: 'change', newTheme: 'culture' },
  'gymnase': { action: 'change', newTheme: 'culture' },
  'terrain': { action: 'change', newTheme: 'culture' },
  
  // Équipes et clubs vers culture
  'équipe de france': { action: 'change', newTheme: 'culture' },
  'psg': { action: 'change', newTheme: 'culture' },
  'om': { action: 'change', newTheme: 'culture' },
  'club': { action: 'change', newTheme: 'culture' },
  'supporter': { action: 'change', newTheme: 'culture' }
};

// Fonction pour analyser une question et déterminer le nouveau thème
const analyzeQuestionForNewTheme = (questionText: string): string | null => {
  const lowerText = questionText.toLowerCase();
  
  // Chercher des mots-clés directs
  for (const [keyword, mapping] of Object.entries(sportQuestionMapping)) {
    if (lowerText.includes(keyword)) {
      if (mapping.action === 'change') {
        return mapping.newTheme!;
      }
      break;
    }
  }
  
  // Analyse contextuelle supplémentaire
  if (lowerText.includes('santé') || lowerText.includes('médical') || lowerText.includes('blessure')) {
    return 'santé';
  }
  
  if (lowerText.includes('économie') || lowerText.includes('euro') || lowerText.includes('million') || lowerText.includes('budget')) {
    return 'économie';
  }
  
  if (lowerText.includes('français') || lowerText.includes('france') || lowerText.includes('national')) {
    return 'culture';
  }
  
  if (lowerText.includes('mondial') || lowerText.includes('international') || lowerText.includes('pays')) {
    return 'monde';
  }
  
  return null;
};

export const cleanSportQuestions = async () => {
  try {
    console.log("🧹 Début du nettoyage des questions avec le thème 'sport'...");
    
    // Récupérer SEULEMENT les questions avec le thème "sport" (exactement)
    const { data: sportQuestions, error: fetchError } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('theme', 'sport'); // Ne traiter QUE les questions avec theme = 'sport'

    if (fetchError) {
      console.error('❌ Erreur lors de la récupération des questions sport:', fetchError);
      return { success: false, error: fetchError.message };
    }

    if (!sportQuestions || sportQuestions.length === 0) {
      console.log('ℹ️ Aucune question avec le thème "sport" trouvée');
      return { success: true, message: 'Aucune question sport à nettoyer', details: { changed: 0, deleted: 0, errors: [] } };
    }

    console.log(`📊 ${sportQuestions.length} questions sport trouvées`);

    const results = {
      changed: 0,
      deleted: 0,
      errors: [] as string[]
    };

    for (const question of sportQuestions) {
      try {
        console.log(`🔍 Analyse de la question: "${question.question.substring(0, 100)}..."`);
        
        // Analyser la question pour déterminer le nouveau thème
        const newTheme = analyzeQuestionForNewTheme(question.question);

        if (newTheme) {
          // Changer le thème de la question
          const { error: updateError } = await supabase
            .from('quiz_questions')
            .update({ theme: newTheme })
            .eq('id', question.id);

          if (updateError) {
            results.errors.push(`Erreur mise à jour ${question.id}: ${updateError.message}`);
            console.error(`❌ Erreur mise à jour ${question.id}:`, updateError);
          } else {
            results.changed++;
            console.log(`✅ Question changée vers "${newTheme}": "${question.question.substring(0, 50)}..."`);
          }
        } else {
          // Si aucun thème approprié, supprimer la question
          const { error: deleteError } = await supabase
            .from('quiz_questions')
            .delete()
            .eq('id', question.id);

          if (deleteError) {
            results.errors.push(`Erreur suppression ${question.id}: ${deleteError.message}`);
            console.error(`❌ Erreur suppression ${question.id}:`, deleteError);
          } else {
            results.deleted++;
            console.log(`🗑️ Question supprimée: "${question.question.substring(0, 50)}..."`);
          }
        }
      } catch (error) {
        results.errors.push(`Erreur traitement ${question.id}: ${error}`);
        console.error(`❌ Erreur traitement ${question.id}:`, error);
      }
    }

    console.log(`✅ Nettoyage terminé: ${results.changed} questions modifiées, ${results.deleted} supprimées`);
    
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
