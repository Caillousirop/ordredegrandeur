import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur des faits insolites (vide)
export const questionsInsolitesSimples: Question[] = [];

// Questions à étapes sur des faits insolites avec indices
export const questionsInsolitesMultiStep: MultiStepQuestion[] = [
  {
    id: "insolite-1",
    type: "multistep",
    question: "Combien de Tours Eiffel faudrait-il empiler pour atteindre la Lune ?",
    steps: [
      {
        question: "Quelle est la hauteur de la Tour Eiffel ?",
        correctAnswer: 300,
        unit: "m",
        explanation: "La Tour Eiffel mesure environ 300 mètres de hauteur."
      },
      {
        question: "Quelle est la distance Terre-Lune ?",
        correctAnswer: 384000000,
        unit: "m",
        explanation: "La distance moyenne entre la Terre et la Lune est d'environ 384 000 km, soit 384 000 000 m."
      },
      {
        question: "Calculez le nombre de Tours Eiffel nécessaires (distance ÷ hauteur)",
        correctAnswer: 1280000,
        explanation: "Nombre de tours = 384 000 000 ÷ 300 ≈ 1 280 000"
      }
    ],
    finalExplanation: "Il faudrait environ 1,28 million de Tours Eiffel empilées pour atteindre la Lune.",
    theme: "insolite"
  },
  {
    id: "insolite-2",
    type: "multistep",
    question: "Combien de piscines olympiques seraient nécessaires pour contenir toute l'eau d'un orage moyen sur 1 km² ?",
    steps: [
      {
        question: "Quel est le volume d'une piscine olympique ?",
        correctAnswer: 2500,
        unit: "m³",
        explanation: "Une piscine olympique standard mesure 50m × 25m × 2m = 2 500 m³"
      },
      {
        question: "Quel est le volume d'eau de pluie sur 1 km² lors d'un orage moyen (10 mm) ?",
        correctAnswer: 10000,
        unit: "m³",
        explanation: "10 mm de pluie sur 1 km² = 0,01 m × 1 000 000 m² = 10 000 m³"
      },
      {
        question: "Calculez le nombre de piscines olympiques nécessaires",
        correctAnswer: 4,
        explanation: "Nombre de piscines = 10 000 ÷ 2 500 = 4"
      }
    ],
    finalExplanation: "Un orage moyen sur 1 km² libère l'équivalent de 4 piscines olympiques d'eau.",
    theme: "insolite"
  },
  {
    id: "insolite-3",
    type: "multistep",
    question: "Combien de camions remplis de pièces de 1 centime faudrait-il pour faire le poids de la Tour de Pise ?",
    steps: [
      {
        question: "Quel est le poids de la Tour de Pise ?",
        correctAnswer: 14500000,
        unit: "kg",
        explanation: "La Tour de Pise pèse environ 14 500 tonnes, soit 14,5 millions de kg."
      },
      {
        question: "Quel est le poids d'une pièce de 1 centime ?",
        correctAnswer: 0.0023,
        unit: "kg",
        explanation: "Une pièce de 1 centime pèse environ 2,3 g, soit 0,0023 kg."
      },
      {
        question: "Combien de pièces seraient nécessaires pour atteindre ce poids ?",
        correctAnswer: 6300000000,
        explanation: "Nombre de pièces = 14,5 × 10⁶ ÷ 0,0023 ≈ 6,3 milliards"
      },
      {
        question: "Combien de camions de 25 tonnes seraient nécessaires ?",
        correctAnswer: 580,
        explanation: "Nombre de camions = 14,5 × 10⁶ ÷ 25 000 ≈ 580"
      }
    ],
    finalExplanation: "Il faudrait environ 580 camions remplis de pièces de 1 centime pour atteindre le poids de la Tour de Pise.",
    theme: "insolite"
  },
  {
    id: "insolite-4",
    type: "multistep",
    question: "Si on recouvrait la France de briques Lego, combien en faudrait-il ?",
    steps: [
      {
        question: "Quelle est la surface de la France ?",
        correctAnswer: 550000000000,
        unit: "m²",
        explanation: "La France a une surface d'environ 550 000 km², soit 5,5 × 10¹¹ m²."
      },
      {
        question: "Quelle est la surface d'une brique Lego standard (2x4) ?",
        correctAnswer: 0.00205,
        unit: "m²",
        explanation: "Une brique Lego standard mesure environ 3,2 cm × 6,4 cm = 20,5 cm² = 0,00205 m²."
      },
      {
        question: "Calculez le nombre de briques nécessaires",
        correctAnswer: 270000000000000,
        explanation: "Nombre de briques = 5,5 × 10¹¹ ÷ 0,00205 ≈ 2,7 × 10¹⁴ = 270 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 270 000 milliards de briques Lego pour recouvrir la France.",
    theme: "insolite"
  },
  {
    id: "insolite-5",
    type: "multistep",
    question: "Combien d'avions Boeing 747 rempliraient le volume du Grand Canyon ?",
    steps: [
      {
        question: "Quel est le volume approximatif du Grand Canyon ?",
        correctAnswer: 4000000000000,
        unit: "m³",
        explanation: "Le Grand Canyon a un volume approximatif d'environ 4 000 km³, soit 4 × 10¹² m³."
      },
      {
        question: "Quel est le volume d'un Boeing 747 ?",
        correctAnswer: 1000,
        unit: "m³",
        explanation: "Un Boeing 747 a un volume d'environ 1 000 m³."
      },
      {
        question: "Calculez le nombre d'avions nécessaires",
        correctAnswer: 4000000000,
        explanation: "Nombre d'avions = 4 × 10¹² ÷ 1 000 = 4 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 4 milliards de Boeing 747 pour remplir le Grand Canyon.",
    theme: "insolite"
  },
  {
    id: "insolite-6",
    type: "multistep",
    question: "Combien de rouleaux de papier toilette faudrait-il pour faire le tour de la Terre ?",
    steps: [
      {
        question: "Quelle est la circonférence de la Terre ?",
        correctAnswer: 40000000,
        unit: "m",
        explanation: "La circonférence de la Terre est d'environ 40 000 km, soit 40 000 000 m."
      },
      {
        question: "Quelle est la longueur d'un rouleau standard de papier toilette ?",
        correctAnswer: 20,
        unit: "m",
        explanation: "Un rouleau standard de papier toilette fait environ 20 m de long."
      },
      {
        question: "Calculez le nombre de rouleaux nécessaires",
        correctAnswer: 2000000,
        explanation: "Nombre de rouleaux = 40 000 000 ÷ 20 = 2 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 2 millions de rouleaux de papier toilette pour faire le tour de la Terre.",
    theme: "insolite"
  },
  {
    id: "insolite-7",
    type: "multistep",
    question: "Combien de ballons de baudruche seraient nécessaires pour soulever un bus scolaire ?",
    steps: [
      {
        question: "Quel est le poids d'un bus scolaire ?",
        correctAnswer: 10000,
        unit: "kg",
        explanation: "Un bus scolaire pèse environ 10 000 kg."
      },
      {
        question: "Quelle est la poussée d'Archimède générée par un ballon d'hélium ?",
        correctAnswer: 0.014,
        unit: "kg",
        explanation: "Un ballon d'hélium génère une poussée d'environ 14 g, soit 0,014 kg."
      },
      {
        question: "Calculez le nombre de ballons nécessaires",
        correctAnswer: 714000,
        explanation: "Nombre de ballons = 10 000 ÷ 0,014 ≈ 714 000"
      }
    ],
    finalExplanation: "Il faudrait environ 700 000 ballons de baudruche pour soulever un bus scolaire.",
    theme: "insolite"
  },
  {
    id: "insolite-8",
    type: "multistep",
    question: "Combien de pianos à queue rempliraient un stade de football ?",
    steps: [
      {
        question: "Quel est le volume d'un piano à queue ?",
        correctAnswer: 3,
        unit: "m³",
        explanation: "Un piano à queue a un volume d'environ 2 m × 1,5 m × 1 m = 3 m³."
      },
      {
        question: "Quel est le volume approximatif d'un stade de football ?",
        correctAnswer: 140000,
        unit: "m³",
        explanation: "Un stade de football a un volume approximatif de 100 m × 70 m × 20 m = 140 000 m³."
      },
      {
        question: "Calculez le nombre de pianos nécessaires",
        correctAnswer: 46000,
        explanation: "Nombre de pianos = 140 000 ÷ 3 ≈ 46 000"
      }
    ],
    finalExplanation: "On pourrait faire entrer environ 46 000 pianos à queue dans un stade de football.",
    theme: "insolite"
  },
  {
    id: "insolite-9",
    type: "multistep",
    question: "Combien de stylos Bic alignés mesureraient la distance entre Paris et Marseille ?",
    steps: [
      {
        question: "Quelle est la distance entre Paris et Marseille ?",
        correctAnswer: 775000,
        unit: "m",
        explanation: "La distance entre Paris et Marseille est d'environ 775 km, soit 775 000 m."
      },
      {
        question: "Quelle est la longueur d'un stylo Bic ?",
        correctAnswer: 0.14,
        unit: "m",
        explanation: "Un stylo Bic mesure environ 14 cm, soit 0,14 m."
      },
      {
        question: "Calculez le nombre de stylos nécessaires",
        correctAnswer: 5500000,
        explanation: "Nombre de stylos = 775 000 ÷ 0,14 ≈ 5,5 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 5,5 millions de stylos Bic alignés pour relier Paris à Marseille.",
    theme: "insolite"
  },
  {
    id: "insolite-10",
    type: "multistep",
    question: "Combien de canettes de soda empilées verticalement atteindraient la station spatiale internationale ?",
    steps: [
      {
        question: "À quelle hauteur se trouve l'ISS ?",
        correctAnswer: 400000,
        unit: "m",
        explanation: "L'ISS orbite à environ 400 km, soit 400 000 m d'altitude."
      },
      {
        question: "Quelle est la hauteur d'une canette de soda ?",
        correctAnswer: 0.12,
        unit: "m",
        explanation: "Une canette de soda mesure environ 12 cm, soit 0,12 m de hauteur."
      },
      {
        question: "Calculez le nombre de canettes nécessaires",
        correctAnswer: 3330000,
        explanation: "Nombre de canettes = 400 000 ÷ 0,12 ≈ 3,33 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 3,3 millions de canettes empilées pour atteindre l'ISS.",
    theme: "insolite"
  },
  {
    id: "insolite-11",
    type: "multistep",
    question: "Combien de planètes Terre tiendraient dans le Soleil ?",
    steps: [
      {
        question: "Quel est le volume de la Terre ?",
        correctAnswer: 1080000000000,
        unit: "km³",
        explanation: "Le volume de la Terre est d'environ 1,08 × 10¹² km³."
      },
      {
        question: "Quel est le volume du Soleil ?",
        correctAnswer: 1410000000000000000,
        unit: "km³",
        explanation: "Le volume du Soleil est d'environ 1,41 × 10¹⁸ km³."
      },
      {
        question: "Calculez combien de planètes Terre pourraient tenir dans le Soleil",
        correctAnswer: 1300000,
        explanation: "Nombre de Terres = 1,41 × 10¹⁸ ÷ 1,08 × 10¹² ≈ 1,3 million"
      }
    ],
    finalExplanation: "Environ 1,3 million de planètes Terre pourraient tenir dans le Soleil.",
    theme: "insolite"
  },
  {
    id: "insolite-12",
    type: "multistep",
    question: "Combien de feuilles A4 faudrait-il pour couvrir la surface de la Lune ?",
    steps: [
      {
        question: "Quelle est la surface de la Lune ?",
        correctAnswer: 38000000000000,
        unit: "m²",
        explanation: "La surface de la Lune est d'environ 38 millions de km², soit 3,8 × 10¹³ m²."
      },
      {
        question: "Quelle est la surface d'une feuille A4 ?",
        correctAnswer: 0.06237,
        unit: "m²",
        explanation: "Une feuille A4 mesure environ 0,21 m × 0,297 m = 0,06237 m²."
      },
      {
        question: "Calculez le nombre de feuilles nécessaires",
        correctAnswer: 600000000000000,
        explanation: "Nombre de feuilles = 3,8 × 10¹³ ÷ 0,06237 ≈ 6 × 10¹⁴ = 600 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 600 000 milliards de feuilles A4 pour recouvrir toute la Lune.",
    theme: "insolite"
  },
  {
    id: "insolite-13",
    type: "multistep",
    question: "Combien de secondes faut-il pour qu'un humain respire autant de molécules d'air qu'il y a d'étoiles dans la Voie lactée ?",
    steps: [
      {
        question: "Combien y a-t-il de molécules dans une respiration humaine (0,5 L) ?",
        correctAnswer: 12000000000000000000000,
        explanation: "Une respiration contient environ 1,2 × 10²² molécules d'air."
      },
      {
        question: "Combien y a-t-il d'étoiles dans la Voie lactée ?",
        correctAnswer: 100000000000,
        explanation: "La Voie lactée contient environ 100 milliards d'étoiles, soit 1 × 10¹¹."
      },
      {
        question: "Combien de respirations faut-il pour inhaler autant de molécules qu'il y a d'étoiles ?",
        correctAnswer: 0.000000000008333,
        explanation: "Nombre de respirations = (1 × 10¹¹) ÷ (1,2 × 10²²) ≈ 8,333 × 10⁻¹² (bien moins qu'une respiration)"
      }
    ],
    finalExplanation: "Il suffit d'une seule respiration pour inhaler bien plus de molécules qu'il n'y a d'étoiles dans la galaxie.",
    theme: "insolite"
  },
  {
    id: "insolite-14",
    type: "multistep",
    question: "Combien de fusées seraient nécessaires pour transporter toute la population humaine sur Mars ?",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000000000,
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quelle est la capacité d'une fusée de type Starship ?",
        correctAnswer: 100,
        unit: "personnes",
        explanation: "Une fusée de type Starship peut transporter environ 100 personnes."
      },
      {
        question: "Calculez le nombre de fusées nécessaires",
        correctAnswer: 80000000,
        explanation: "Nombre de fusées = 8 × 10⁹ ÷ 100 = 80 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 80 millions de vols de fusée pour transporter l'humanité sur Mars.",
    theme: "insolite"
  },
  {
    id: "insolite-15",
    type: "multistep",
    question: "Combien de grains de riz alignés représenteraient la distance entre la Terre et le Soleil ?",
    steps: [
      {
        question: "Quelle est la distance entre la Terre et le Soleil ?",
        correctAnswer: 150000000000,
        unit: "m",
        explanation: "La distance Terre-Soleil est d'environ 150 millions de km, soit 1,5 × 10¹¹ m."
      },
      {
        question: "Quelle est la longueur moyenne d'un grain de riz ?",
        correctAnswer: 0.007,
        unit: "m",
        explanation: "Un grain de riz mesure environ 7 mm, soit 0,007 m."
      },
      {
        question: "Calculez le nombre de grains nécessaires",
        correctAnswer: 21000000000000,
        explanation: "Nombre de grains = 1,5 × 10¹¹ ÷ 0,007 ≈ 2,1 × 10¹³ = 21 000 milliards"
      }
    ],
    finalExplanation: "Il faudrait environ 21 000 milliards de grains de riz alignés pour atteindre le Soleil.",
    theme: "insolite"
  },
  {
    id: "insolite-16",
    type: "multistep",
    question: "Combien d'éléphants équivaudraient au poids de tous les humains sur Terre ?",
    steps: [
      {
        question: "Quel est le poids total de l'humanité ?",
        correctAnswer: 500000000000,
        unit: "kg",
        explanation: "Avec 8 milliards d'humains à 62 kg en moyenne, le poids total est d'environ 8 × 10⁹ × 62 = 5 × 10¹¹ kg."
      },
      {
        question: "Quel est le poids moyen d'un éléphant ?",
        correctAnswer: 5000,
        unit: "kg",
        explanation: "Un éléphant pèse en moyenne 5 000 kg."
      },
      {
        question: "Calculez le nombre d'éléphants équivalents",
        correctAnswer: 100000000,
        explanation: "Nombre d'éléphants = 5 × 10¹¹ ÷ 5 000 = 100 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 100 millions d'éléphants pour égaler le poids de l'humanité.",
    theme: "insolite"
  },
  {
    id: "insolite-17",
    type: "multistep",
    question: "Combien de battements d'ailes d'un colibri pour parcourir la distance Paris-New York ?",
    steps: [
      {
        question: "Quelle est la distance entre Paris et New York ?",
        correctAnswer: 5800,
        unit: "km",
        explanation: "La distance Paris-New York est d'environ 5 800 km."
      },
      {
        question: "À quelle vitesse vole un colibri et combien de battements d'ailes fait-il par seconde ?",
        correctAnswer: 50,
        unit: "battements/s",
        explanation: "Un colibri bat des ailes environ 50 fois par seconde et vole à environ 50 km/h."
      },
      {
        question: "Calculez le nombre total de battements d'ailes",
        correctAnswer: 20900000,
        explanation: "Temps de vol = 5 800 ÷ 50 = 116 h. Nombre de battements = 50/s × 3600 × 116 = 20,9 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 21 millions de battements d'ailes à un colibri pour traverser l'Atlantique.",
    theme: "insolite"
  },
  {
    id: "insolite-18",
    type: "multistep",
    question: "Combien d'arbres faudrait-il pour produire assez d'oxygène pour la population de Londres pendant une journée ?",
    steps: [
      {
        question: "Quelle est la population de Londres ?",
        correctAnswer: 9000000,
        explanation: "Londres compte environ 9 millions d'habitants."
      },
      {
        question: "Quelle quantité d'oxygène consomme un humain par jour ?",
        correctAnswer: 0.75,
        unit: "kg",
        explanation: "Un humain consomme environ 550 L d'oxygène par jour, soit environ 0,75 kg."
      },
      {
        question: "Quelle quantité d'oxygène produit un arbre par jour ?",
        correctAnswer: 0.27,
        unit: "kg",
        explanation: "Un arbre produit environ 100 kg d'oxygène par an, soit 0,27 kg par jour."
      },
      {
        question: "Calculez le nombre d'arbres nécessaires",
        correctAnswer: 25000000,
        explanation: "Oxygène total/jour = 9 × 10⁶ × 0,75 = 6,75 × 10⁶ kg. Nombre d'arbres = 6,75 × 10⁶ ÷ 0,27 ≈ 25 millions"
      }
    ],
    finalExplanation: "Il faudrait environ 25 millions d'arbres pour oxygéner Londres pendant une journée.",
    theme: "insolite"
  },
  {
    id: "insolite-19",
    type: "multistep",
    question: "Combien de litres de miel produiraient toutes les abeilles de France en un an ?",
    steps: [
      {
        question: "Combien y a-t-il de ruches en France ?",
        correctAnswer: 1000000,
        explanation: "La France compte environ 1 million de ruches."
      },
      {
        question: "Quelle est la production moyenne de miel par ruche par an ?",
        correctAnswer: 20,
        unit: "L",
        explanation: "Une ruche produit en moyenne 20 kg de miel par an, soit environ 20 L (densité ~1 kg/L)."
      },
      {
        question: "Calculez la production totale annuelle",
        correctAnswer: 20000000,
        unit: "L",
        explanation: "Production totale = 1 million × 20 L = 20 millions de litres"
      }
    ],
    finalExplanation: "Les abeilles françaises produisent environ 20 millions de litres de miel par an.",
    theme: "insolite"
  },
  {
    id: "insolite-20",
    type: "multistep",
    question: "Combien de fourmis pèsent autant qu'un être humain moyen ?",
    steps: [
      {
        question: "Quel est le poids moyen d'un être humain ?",
        correctAnswer: 62,
        unit: "kg",
        explanation: "Un être humain pèse en moyenne 62 kg."
      },
      {
        question: "Quel est le poids moyen d'une fourmi ?",
        correctAnswer: 0.000003,
        unit: "kg",
        explanation: "Une fourmi pèse en moyenne 3 mg, soit 0,000003 kg."
      },
      {
        question: "Calculez le nombre de fourmis nécessaires",
        correctAnswer: 21000000,
        explanation: "Nombre de fourmis = 62 ÷ 0,000003 ≈ 21 millions"
      }
    ],
    finalExplanation: "Il faut environ 21 millions de fourmis pour égaler le poids d'un humain.",
    theme: "insolite"
  },
  {
    id: "insolite-21",
    type: "multistep",
    question: "Combien de smartphones empilés feraient la hauteur de l'Everest ?",
    steps: [
      {
        question: "Quelle est la hauteur du mont Everest ?",
        correctAnswer: 8850,
        unit: "m",
        explanation: "Le mont Everest s'élève à environ 8 850 m d'altitude."
      },
      {
        question: "Quelle est l'épaisseur moyenne d'un smartphone ?",
        correctAnswer: 0.008,
        unit: "m",
        explanation: "Un smartphone a une épaisseur moyenne d'environ 8 mm, soit 0,008 m."
      },
      {
        question: "Calculez le nombre de smartphones nécessaires",
        correctAnswer: 1100000,
        explanation: "Nombre de smartphones = 8 850 ÷ 0,008 ≈ 1,1 million"
      }
    ],
    finalExplanation: "Il faudrait environ 1,1 million de smartphones empilés pour atteindre l'Everest.",
    theme: "insolite"
  },
  {
    id: "insolite-22",
    type: "multistep",
    question: "Combien de fois une personne fait-elle le tour du monde en marchant au cours de sa vie ?",
    steps: [
      {
        question: "Quelle distance une personne parcourt-elle en moyenne par jour ?",
        correctAnswer: 5,
        unit: "km",
        explanation: "Une personne fait environ 7 000 pas par jour, soit environ 5 km."
      },
      {
        question: "Quelle distance totale une personne parcourt-elle au cours de sa vie active ?",
        correctAnswer: 110000,
        unit: "km",
        explanation: "Sur 60 ans de vie active : 60 × 365 = 21 900 jours. Distance totale = 5 × 21 900 = 110 000 km."
      },
      {
        question: "Quelle est la circonférence de la Terre ?",
        correctAnswer: 40000,
        unit: "km",
        explanation: "La circonférence de la Terre est d'environ 40 000 km."
      },
      {
        question: "Calculez le nombre de tours du monde",
        correctAnswer: 2.75,
        explanation: "Nombre de tours = 110 000 ÷ 40 000 ≈ 2,75"
      }
    ],
    finalExplanation: "Une personne fait environ 2 à 3 fois le tour de la Terre à pied dans sa vie.",
    theme: "insolite"
  },
  {
    id: "insolite-23",
    type: "multistep",
    question: "Combien de claviers d'ordinateur rempliraient une piscine ?",
    steps: [
      {
        question: "Quel est le volume d'un clavier d'ordinateur ?",
        correctAnswer: 0.00135,
        unit: "m³",
        explanation: "Un clavier mesure environ 45 cm × 15 cm × 2 cm = 0,00135 m³."
      },
      {
        question: "Quel est le volume moyen d'une piscine ?",
        correctAnswer: 50,
        unit: "m³",
        explanation: "Une piscine moyenne a un volume d'environ 50 m³."
      },
      {
        question: "Calculez le nombre de claviers nécessaires",
        correctAnswer: 37000,
        explanation: "Nombre de claviers = 50 ÷ 0,00135 ≈ 37 000"
      }
    ],
    finalExplanation: "Il faudrait environ 37 000 claviers pour remplir une piscine standard.",
    theme: "insolite"
  },
  {
    id: "insolite-24",
    type: "multistep",
    question: "Combien de toasts faudrait-il pour couvrir le sol au pied de la Tour Eiffel ?",
    steps: [
      {
        question: "Quelle est la surface au sol de la Tour Eiffel ?",
        correctAnswer: 15625,
        unit: "m²",
        explanation: "La base carrée de la Tour Eiffel mesure environ 125 m × 125 m = 15 625 m²."
      },
      {
        question: "Quelle est la surface d'un toast ?",
        correctAnswer: 0.01,
        unit: "m²",
        explanation: "Un toast mesure environ 0,1 m × 0,1 m = 0,01 m²."
      },
      {
        question: "Calculez le nombre de toasts nécessaires",
        correctAnswer: 1560000,
        explanation: "Nombre de toasts = 15 625 ÷ 0,01 = 1,56 million"
      }
    ],
    finalExplanation: "Il faudrait environ 1,5 million de toasts pour recouvrir la base de la Tour Eiffel.",
    theme: "insolite"
  },
  {
    id: "insolite-25",
    type: "multistep",
    question: "Combien de cheveux humains alignés mesurent 1 kilomètre ?",
    steps: [
      {
        question: "Quelle est la longueur moyenne d'un cheveu humain ?",
        correctAnswer: 0.00006,
        unit: "m",
        explanation: "Un cheveu a un diamètre moyen d'environ 0,06 mm, soit 6 × 10⁻⁵ m."
      },
      {
        question: "Calculez le nombre de cheveux nécessaires pour atteindre 1 km",
        correctAnswer: 17000000,
        explanation: "Nombre de cheveux = 1 000 ÷ 6 × 10⁻⁵ ≈ 17 millions"
      }
    ],
    finalExplanation: "Il faut environ 17 millions de cheveux mis bout à bout pour atteindre 1 km.",
    theme: "insolite"
  }
];

// Exporter toutes les questions insolites
export const insoliteQuestions: (Question | MultiStepQuestion)[] = [
  ...questionsInsolitesSimples,
  ...questionsInsolitesMultiStep
];
