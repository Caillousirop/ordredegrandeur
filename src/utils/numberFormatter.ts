
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
    maximumFractionDigits: 10 // Permettre jusqu'à 10 décimales
  }).replace(/\s/g, ' '); // S'assurer qu'on utilise des espaces normaux
};

// Fonction pour nettoyer une entrée utilisateur (enlever les espaces mais garder virgules/points)
export const cleanNumberInput = (value: string): string => {
  return value.replace(/\s/g, '');
};

// Fonction pour formater l'affichage d'un nombre pendant la saisie
export const formatNumberInput = (value: string): string => {
  const cleanValue = cleanNumberInput(value);
  
  if (!cleanValue) return cleanValue;
  
  // Séparer la partie entière et décimale
  const parts = cleanValue.split(/[.,]/);
  const integerPart = parts[0];
  const decimalPart = parts[1];
  
  // Vérifier que la partie entière est valide
  if (!/^\d*$/.test(integerPart)) return cleanValue;
  
  // Si pas de partie décimale, formater seulement la partie entière
  if (decimalPart === undefined) {
    if (integerPart.length > 3) {
      return integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return integerPart;
  }
  
  // Vérifier que la partie décimale est valide
  if (!/^\d*$/.test(decimalPart)) return cleanValue;
  
  // Formater la partie entière avec des espaces
  const formattedInteger = integerPart.length > 3 
    ? integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : integerPart;
  
  // Retourner avec la virgule française
  return `${formattedInteger},${decimalPart}`;
};

// Fonction pour convertir une entrée utilisateur en nombre
export const parseNumberInput = (value: string): number | null => {
  if (!value || value.trim() === '') return null;
  
  // Nettoyer et remplacer virgule par point pour parseFloat
  const cleanValue = cleanNumberInput(value).replace(',', '.');
  const num = parseFloat(cleanValue);
  
  return isNaN(num) ? null : num;
};
