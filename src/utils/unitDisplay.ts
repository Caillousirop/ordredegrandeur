
// Fonction pour déterminer si une unité doit être affichée avec la question
export const shouldDisplayUnit = (unit?: string): boolean => {
  if (!unit) return false;
  
  // Unités à ne pas afficher (ordres de grandeur)
  const excludedUnits = [
    'million',
    'millions',
    'millier',
    'milliers',
    'milliard',
    'milliards',
    'k',
    'M',
    'G',
    'T'
  ];
  
  const unitLower = unit.toLowerCase().trim();
  return !excludedUnits.includes(unitLower);
};

// Fonction pour formater l'affichage de l'unité
export const formatUnitDisplay = (unit?: string): string => {
  if (!unit || !shouldDisplayUnit(unit)) return '';
  
  // Ajouter des parenthèses autour de l'unité
  return `(en ${unit})`;
};
