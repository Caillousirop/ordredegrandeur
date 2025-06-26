
// Fonction pour formater les nombres avec des espaces comme séparateurs de milliers
export const formatNumber = (value: number | string): string => {
  if (value === null || value === undefined) return '';
  
  // Convertir en nombre si c'est une chaîne
  const num = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(num)) return value.toString();
  
  // Formater avec des espaces comme séparateurs de milliers
  return num.toLocaleString('fr-FR', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).replace(/\s/g, ' '); // S'assurer qu'on utilise des espaces normaux
};

// Fonction pour nettoyer une entrée utilisateur (enlever les espaces)
export const cleanNumberInput = (value: string): string => {
  return value.replace(/\s/g, '');
};

// Fonction pour formater l'affichage d'un nombre pendant la saisie
export const formatNumberInput = (value: string): string => {
  const cleanValue = cleanNumberInput(value);
  
  if (!cleanValue || !/^\d+$/.test(cleanValue)) return cleanValue;
  
  // Formater en ajoutant des espaces tous les 3 chiffres depuis la droite
  return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
