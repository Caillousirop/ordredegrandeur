
import { Question, MultiStepQuestion } from "@/components/types";

// Questions simples sur des faits insolites
export const questionsInsolitesSimples: Question[] = [
  {
    id: "insolite-1",
    question: "Combien de moutons y a-t-il en moyenne pour chaque habitant en Nouvelle-Zélande ?",
    correctAnswer: 5,
    unit: "moutons par habitant",
    explanation: "La Nouvelle-Zélande compte environ 5 moutons par habitant, un des ratios les plus élevés au monde.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-2",
    question: "Quelle est la durée moyenne d'un éternuement humain ?",
    correctAnswer: 0.5,
    unit: "secondes",
    explanation: "Un éternuement dure en moyenne 0,5 seconde, pendant lequel l'air est expulsé à environ 160 km/h.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-3",
    question: "Combien de fois par jour un humain cligne des yeux en moyenne ?",
    correctAnswer: 20000,
    unit: "fois",
    explanation: "Une personne moyenne cligne des yeux environ 20 000 fois par jour, ce qui représente environ 10% du temps d'éveil les yeux fermés.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-4",
    question: "Quelle est la vitesse maximale atteinte par un éternuement ?",
    correctAnswer: 160,
    unit: "km/h",
    explanation: "Un éternuement peut atteindre la vitesse impressionnante de 160 km/h, répandant des gouttelettes jusqu'à 8 mètres.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-5",
    question: "Combien de fois par jour un bébé pleure en moyenne durant son premier mois ?",
    correctAnswer: 113,
    unit: "fois",
    explanation: "Un nouveau-né pleure en moyenne 113 fois par jour durant son premier mois de vie.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-6",
    question: "À quelle vitesse maximale une goutte de pluie peut-elle tomber ?",
    correctAnswer: 32,
    unit: "km/h",
    explanation: "Les gouttes de pluie atteignent généralement une vitesse terminale de 32 km/h à cause de la résistance de l'air.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-7",
    question: "Combien de fois par jour Google est-il consulté dans le monde entier ?",
    correctAnswer: 5600000000,
    unit: "recherches",
    explanation: "Google traite plus de 5,6 milliards de recherches par jour, soit environ 63 000 recherches par seconde.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-8",
    question: "Quelle est la longueur totale de tous les vaisseaux sanguins dans le corps humain ?",
    correctAnswer: 100000,
    unit: "km",
    explanation: "Si on mettait tous les vaisseaux sanguins d'un adulte bout à bout, ils s'étendraient sur environ 100 000 km, soit plus de deux fois le tour de la Terre.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-9",
    question: "À quelle vitesse un cheveu humain pousse-t-il en moyenne par mois ?",
    correctAnswer: 1.25,
    unit: "cm",
    explanation: "Un cheveu humain pousse en moyenne d'environ 1,25 cm par mois, soit environ 15 cm par an.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-10",
    question: "Combien de muscles sont impliqués quand une personne sourit ?",
    correctAnswer: 17,
    unit: "muscles",
    explanation: "Un sourire utilise 17 muscles du visage, tandis qu'une expression de colère en utilise 43.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-11",
    question: "Quelle est la durée moyenne pendant laquelle un humain rêve chaque nuit ?",
    correctAnswer: 2,
    unit: "heures",
    explanation: "Les humains passent en moyenne 2 heures par nuit à rêver, principalement pendant le sommeil paradoxal (REM).",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-12",
    question: "Combien de pas faut-il à une fourmi pour parcourir un kilomètre ?",
    correctAnswer: 1000000,
    unit: "pas",
    explanation: "Une fourmi a besoin d'environ un million de pas pour parcourir un kilomètre.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-13",
    question: "Quelle est la vitesse maximale d'un éternuement d'ours ?",
    correctAnswer: 110,
    unit: "km/h",
    explanation: "Un éternuement d'ours peut atteindre jusqu'à 110 km/h.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-14",
    question: "Combien d'heures de sa vie un humain passe-t-il en moyenne aux toilettes ?",
    correctAnswer: 3650,
    unit: "heures",
    explanation: "Au cours de sa vie, un humain passe en moyenne 3 650 heures (ou environ 152 jours) aux toilettes.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-15",
    question: "Combien de litres d'eau la Tour Eiffel perd-elle chaque année à cause de la rouille ?",
    correctAnswer: 50,
    unit: "litres",
    explanation: "La Tour Eiffel perd environ 50 litres d'eau chaque année à cause de la rouille, malgré ses repeints réguliers.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-16",
    question: "Combien de fois par jour un humain vérifie-t-il son téléphone en moyenne ?",
    correctAnswer: 96,
    unit: "fois",
    explanation: "En moyenne, une personne consulte son téléphone 96 fois par jour, soit environ toutes les 10 minutes.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-17",
    question: "Quelle longueur de barbe un homme peut-il faire pousser au maximum au cours de sa vie ?",
    correctAnswer: 9,
    unit: "mètres",
    explanation: "Si un homme ne se rasait jamais de sa vie, sa barbe pourrait théoriquement atteindre 9 mètres de long.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-18",
    question: "Combien de pizzas sont consommées chaque seconde dans le monde ?",
    correctAnswer: 350,
    unit: "pizzas",
    explanation: "Environ 350 tranches de pizza sont consommées chaque seconde dans le monde entier.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-19",
    question: "À quelle vitesse la langue d'un caméléon peut-elle se déployer pour attraper une proie ?",
    correctAnswer: 95,
    unit: "km/h",
    explanation: "La langue d'un caméléon peut se déployer à une vitesse phénoménale de 95 km/h pour capturer ses proies.",
    type: "simple",
    theme: "insolite"
  },
  {
    id: "insolite-20",
    question: "Combien d'heures de sa vie un humain passe-t-il en moyenne à chercher des objets égarés ?",
    correctAnswer: 3680,
    unit: "heures",
    explanation: "Au cours de sa vie, un humain passe en moyenne 3 680 heures (soit environ 153 jours) à chercher des objets égarés.",
    type: "simple",
    theme: "insolite"
  }
];

// Questions à étapes sur des faits insolites
export const questionsInsolitesMultiStep: MultiStepQuestion[] = [
  {
    id: "insolite-multi-1",
    question: "Calculez le nombre de papillons de nuit attirés par une lampe urbaine",
    steps: [
      {
        question: "Si une lampe urbaine attire 25 papillons de nuit par heure, combien en attirera-t-elle en 8 heures ?",
        correctAnswer: 200,
        unit: "papillons",
        explanation: "25 papillons/heure × 8 heures = 200 papillons"
      },
      {
        question: "Si 15% des papillons attirés sont des sphinx tête-de-mort, combien y a-t-il de ces papillons particuliers ?",
        correctAnswer: 30,
        unit: "papillons",
        explanation: "200 papillons × 0,15 = 30 sphinx tête-de-mort"
      },
      {
        question: "Si chaque papillon vit en moyenne 3 semaines et reste attiré par la même lampe chaque nuit, combien de papillons différents la lampe attire-t-elle sur une année ?",
        correctAnswer: 3478,
        unit: "papillons",
        explanation: "200 papillons par nuit × 365 jours ÷ 21 jours de vie moyenne = 3 478 papillons différents par an"
      }
    ],
    finalExplanation: "Les lampes urbaines perturbent considérablement les cycles de vie des insectes nocturnes, avec un impact sur la biodiversité locale souvent sous-estimé.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-2",
    question: "Calculez la distance parcourue par une personne qui passe sa vie à chercher ses clés",
    steps: [
      {
        question: "Si une personne cherche ses clés en moyenne 3 minutes par jour, combien d'heures cela représente-t-il sur une année ?",
        correctAnswer: 18.25,
        unit: "heures",
        explanation: "3 minutes × 365 jours ÷ 60 minutes = 18,25 heures par an"
      },
      {
        question: "Si cette personne marche à une vitesse moyenne de 3 km/h pendant qu'elle cherche ses clés, quelle distance parcourt-elle en une année ?",
        correctAnswer: 54.75,
        unit: "km",
        explanation: "18,25 heures × 3 km/h = 54,75 km par an"
      },
      {
        question: "Sur une vie de 80 ans (en commençant à chercher ses clés à 15 ans), quelle distance totale cette personne aura-t-elle parcourue à la recherche de ses clés ?",
        correctAnswer: 3559,
        unit: "km",
        explanation: "54,75 km × 65 ans = 3 559 km, soit l'équivalent d'un voyage de Paris à Istanbul"
      }
    ],
    finalExplanation: "La recherche d'objets égarés comme les clés représente une part non négligeable de notre temps et de notre énergie au cours d'une vie.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-3",
    question: "Calculez le nombre de battements de cils d'une personne au cours de sa vie",
    steps: [
      {
        question: "Si une personne cligne des yeux environ 15 fois par minute quand elle est éveillée, combien de fois cligne-t-elle des yeux en une heure ?",
        correctAnswer: 900,
        unit: "clignements",
        explanation: "15 clignements/minute × 60 minutes = 900 clignements par heure"
      },
      {
        question: "Si cette personne est éveillée 16 heures par jour, combien de fois cligne-t-elle des yeux en une journée ?",
        correctAnswer: 14400,
        unit: "clignements",
        explanation: "900 clignements/heure × 16 heures = 14 400 clignements par jour"
      },
      {
        question: "Sur une vie de 80 ans, combien de fois cette personne aura-t-elle cligné des yeux au total ?",
        correctAnswer: 420480000,
        unit: "clignements",
        explanation: "14 400 clignements/jour × 365 jours × 80 ans = 420 480 000 clignements"
      }
    ],
    finalExplanation: "Les clignements d'yeux sont essentiels pour maintenir l'humidité de la cornée. Nous passons environ 10% de notre temps d'éveil les yeux fermés à cause de nos clignements !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-4",
    question: "Calculez la distance parcourue par la salive d'une personne au cours de sa vie",
    steps: [
      {
        question: "Si une personne produit environ 1 litre de salive par jour, combien de litres produit-elle en une année ?",
        correctAnswer: 365,
        unit: "litres",
        explanation: "1 litre/jour × 365 jours = 365 litres par an"
      },
      {
        question: "Si cette salive parcourt en moyenne 25 cm dans la bouche avant d'être avalée, quelle distance totale la salive parcourt-elle en une journée ?",
        correctAnswer: 250,
        unit: "mètres",
        explanation: "Pour 1 litre de salive, avec 0,25 mètres par déglutition et environ 1000 déglutitions : 0,25 × 1000 = 250 mètres"
      },
      {
        question: "Sur une vie de 80 ans, quelle distance totale la salive de cette personne aura-t-elle parcourue ?",
        correctAnswer: 7300,
        unit: "km",
        explanation: "250 mètres × 365 jours × 80 ans = 7 300 000 mètres = 7 300 km"
      }
    ],
    finalExplanation: "La salive est essentielle à la digestion et à la santé bucco-dentaire. Une personne produit entre 1 et 1,5 litre de salive par jour, ce qui représente une quantité impressionnante sur toute une vie !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-5",
    question: "Calculez le temps passé à attendre aux feux rouges au cours d'une vie",
    steps: [
      {
        question: "Si un conducteur rencontre en moyenne 10 feux rouges par jour et attend 45 secondes à chaque feu, combien de minutes attend-il aux feux rouges chaque jour ?",
        correctAnswer: 7.5,
        unit: "minutes",
        explanation: "10 feux × 45 secondes = 450 secondes = 7,5 minutes par jour"
      },
      {
        question: "Combien d'heures cela représente-t-il sur une année ?",
        correctAnswer: 45.63,
        unit: "heures",
        explanation: "7,5 minutes × 365 jours = 2737,5 minutes = 45,63 heures par an"
      },
      {
        question: "Sur une vie de conduite de 60 ans (de 18 à 78 ans), combien de jours complets cette personne aura-t-elle passés à attendre aux feux rouges ?",
        correctAnswer: 114,
        unit: "jours",
        explanation: "45,63 heures × 60 ans = 2737,8 heures = 114,1 jours"
      }
    ],
    finalExplanation: "L'attente aux feux rouges représente une partie significative du temps de conduite, avec plus de 3 mois de vie passés à attendre le feu vert !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-6",
    question: "Calculez le nombre de fois qu'une personne fait pivoter son téléphone en une année",
    steps: [
      {
        question: "Si une personne consulte son smartphone 80 fois par jour en moyenne, et fait pivoter son téléphone de portrait à paysage 5 fois sur 100 consultations, combien de fois fait-elle pivoter son téléphone par jour ?",
        correctAnswer: 4,
        unit: "pivotements",
        explanation: "80 consultations × 5% = 4 pivotements par jour"
      },
      {
        question: "Combien cela représente-t-il de pivotements en un mois ?",
        correctAnswer: 120,
        unit: "pivotements",
        explanation: "4 pivotements × 30 jours = 120 pivotements par mois"
      },
      {
        question: "Combien cela représente-t-il de pivotements en une année ?",
        correctAnswer: 1460,
        unit: "pivotements",
        explanation: "4 pivotements × 365 jours = 1 460 pivotements par an"
      }
    ],
    finalExplanation: "Nous manipulons nos smartphones des milliers de fois par an, souvent sans y prêter attention. Le simple geste de changer l'orientation de l'écran est répété plus de 1 400 fois par an !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-7",
    question: "Calculez la quantité d'eau évaporée pendant la douche d'une personne sur une année",
    steps: [
      {
        question: "Si une douche moyenne utilise 60 litres d'eau et qu'environ 5% de cette eau s'évapore pendant la douche, combien de litres d'eau s'évaporent lors d'une douche ?",
        correctAnswer: 3,
        unit: "litres",
        explanation: "60 litres × 0,05 = 3 litres évaporés par douche"
      },
      {
        question: "Si cette personne prend une douche par jour, combien de litres d'eau s'évaporent en un mois ?",
        correctAnswer: 90,
        unit: "litres",
        explanation: "3 litres × 30 jours = 90 litres par mois"
      },
      {
        question: "Sur une année complète, quelle quantité d'eau s'évapore pendant les douches de cette personne ?",
        correctAnswer: 1095,
        unit: "litres",
        explanation: "3 litres × 365 jours = 1 095 litres par an"
      }
    ],
    finalExplanation: "L'évaporation de l'eau pendant les douches contribue à l'humidité de la salle de bain. Sur une année, c'est plus d'une tonne d'eau qui s'évapore, soit l'équivalent d'une petite piscine gonflable !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-8",
    question: "Calculez la distance parcourue par le bout du doigt d'une personne sur son écran de smartphone en une année",
    steps: [
      {
        question: "Si une personne fait défiler en moyenne 100 mètres de contenu sur son smartphone chaque jour avec son doigt, quelle distance parcourt son doigt en une semaine ?",
        correctAnswer: 700,
        unit: "mètres",
        explanation: "100 mètres × 7 jours = 700 mètres par semaine"
      },
      {
        question: "Quelle distance cela représente-t-il sur un mois ?",
        correctAnswer: 3000,
        unit: "mètres",
        explanation: "100 mètres × 30 jours = 3 000 mètres = 3 km par mois"
      },
      {
        question: "Sur une année complète, quelle distance totale le bout du doigt de cette personne aura-t-il parcourue sur son écran ?",
        correctAnswer: 36.5,
        unit: "km",
        explanation: "100 mètres × 365 jours = 36 500 mètres = 36,5 km par an"
      }
    ],
    finalExplanation: "Nos doigts parcourent l'équivalent d'un marathon chaque année sur nos écrans tactiles ! C'est une distance surprenante pour un si petit mouvement répété.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-9",
    question: "Calculez la surface d'emballages plastiques utilisée par une famille en un an",
    steps: [
      {
        question: "Si une famille de 4 personnes utilise en moyenne 3 emballages plastiques par jour, d'une surface moyenne de 0,05 m², quelle surface d'emballage utilise-t-elle chaque jour ?",
        correctAnswer: 0.15,
        unit: "m²",
        explanation: "3 emballages × 0,05 m² = 0,15 m² par jour"
      },
      {
        question: "Quelle surface cela représente-t-il sur un mois ?",
        correctAnswer: 4.5,
        unit: "m²",
        explanation: "0,15 m² × 30 jours = 4,5 m² par mois"
      },
      {
        question: "Sur une année complète, quelle surface totale d'emballages plastiques cette famille aura-t-elle utilisée ?",
        correctAnswer: 54.75,
        unit: "m²",
        explanation: "0,15 m² × 365 jours = 54,75 m² par an"
      }
    ],
    finalExplanation: "Les emballages plastiques utilisés par une famille en un an pourraient recouvrir entièrement le sol d'un petit appartement ! Cette visualisation permet de prendre conscience de la quantité de déchets produits.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-10",
    question: "Calculez la quantité de poussière produite par la peau humaine en un an",
    steps: [
      {
        question: "Si un humain perd environ 1,5 gramme de cellules de peau par jour, combien de grammes perd-il en une semaine ?",
        correctAnswer: 10.5,
        unit: "grammes",
        explanation: "1,5 gramme × 7 jours = 10,5 grammes par semaine"
      },
      {
        question: "Quelle quantité cela représente-t-il sur un mois ?",
        correctAnswer: 45,
        unit: "grammes",
        explanation: "1,5 gramme × 30 jours = 45 grammes par mois"
      },
      {
        question: "Sur une année complète, quelle quantité totale de cellules de peau un humain perd-il ?",
        correctAnswer: 547.5,
        unit: "grammes",
        explanation: "1,5 gramme × 365 jours = 547,5 grammes par an"
      }
    ],
    finalExplanation: "Une grande partie de la poussière domestique est composée de cellules de peau morte. Sur une vie, un humain perdra environ 40 kg de cellules de peau, contribuant significativement à la poussière de son environnement !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-11",
    question: "Calculez le nombre de réveils entendus par une personne au cours de sa vie",
    steps: [
      {
        question: "Si une personne règle son réveil à 7h du matin 5 jours par semaine (jours de travail), combien de fois son réveil sonne-t-il en un mois de 4 semaines ?",
        correctAnswer: 20,
        unit: "sonneries",
        explanation: "5 jours par semaine × 4 semaines = 20 sonneries de réveil par mois"
      },
      {
        question: "Si cette personne travaille 11 mois par an, combien de fois son réveil sonne-t-il en une année ?",
        correctAnswer: 220,
        unit: "sonneries",
        explanation: "20 sonneries par mois × 11 mois = 220 sonneries de réveil par an"
      },
      {
        question: "Sur une vie professionnelle de 45 ans, combien de fois cette personne aura-t-elle entendu son réveil sonner ?",
        correctAnswer: 9900,
        unit: "sonneries",
        explanation: "220 sonneries par an × 45 ans = 9 900 sonneries de réveil"
      }
    ],
    finalExplanation: "Le réveil est probablement l'un des sons les plus détestés au monde. Une personne l'entendra près de 10 000 fois au cours de sa vie professionnelle !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-12",
    question: "Calculez le nombre de pas effectués en montant des escaliers sur une vie",
    steps: [
      {
        question: "Si une personne monte en moyenne 10 étages par jour, avec 20 marches par étage, combien de marches monte-t-elle quotidiennement ?",
        correctAnswer: 200,
        unit: "marches",
        explanation: "10 étages × 20 marches = 200 marches par jour"
      },
      {
        question: "Combien de marches cela représente-t-il sur une année ?",
        correctAnswer: 73000,
        unit: "marches",
        explanation: "200 marches × 365 jours = 73 000 marches par an"
      },
      {
        question: "Sur une vie de 70 ans (en considérant qu'on monte des escaliers de 5 à 75 ans), combien de marches cette personne aura-t-elle montées au total ?",
        correctAnswer: 5110000,
        unit: "marches",
        explanation: "73 000 marches × 70 ans = 5 110 000 marches"
      }
    ],
    finalExplanation: "Si toutes ces marches étaient empilées verticalement, elles atteindraient une hauteur d'environ 765 km, soit près de 86 fois la hauteur du mont Everest !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-13",
    question: "Calculez la distance parcourue par les sourcils d'une personne quand elle s'étonne",
    steps: [
      {
        question: "Si les sourcils d'une personne se lèvent d'environ 0,8 cm lorsqu'elle s'étonne, et qu'elle s'étonne en moyenne 20 fois par jour, quelle distance verticale ses sourcils parcourent-ils quotidiennement (en montant et descendant) ?",
        correctAnswer: 32,
        unit: "cm",
        explanation: "0,8 cm (montée) + 0,8 cm (descente) × 20 = 32 cm par jour"
      },
      {
        question: "Quelle distance cela représente-t-il sur une année ?",
        correctAnswer: 116.8,
        unit: "mètres",
        explanation: "32 cm × 365 jours = 11 680 cm = 116,8 mètres par an"
      },
      {
        question: "Sur une vie de 80 ans, quelle distance totale les sourcils de cette personne auront-ils parcourue en s'étonnant ?",
        correctAnswer: 9.34,
        unit: "km",
        explanation: "116,8 mètres × 80 ans = 9 344 mètres = 9,34 km"
      }
    ],
    finalExplanation: "Nos expressions faciales représentent une activité musculaire considérable sur une vie. Juste avec nos sourcils, nous parcourons l'équivalent de la traversée de Paris !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-14",
    question: "Calculez le nombre de fois où l'on dit 'bonjour' dans une vie",
    steps: [
      {
        question: "Si une personne dit 'bonjour' à 15 personnes différentes chaque jour en moyenne, combien de fois dit-elle 'bonjour' en une semaine ?",
        correctAnswer: 105,
        unit: "bonjours",
        explanation: "15 bonjours × 7 jours = 105 bonjours par semaine"
      },
      {
        question: "Combien cela représente-t-il de 'bonjours' sur une année ?",
        correctAnswer: 5475,
        unit: "bonjours",
        explanation: "15 bonjours × 365 jours = 5 475 bonjours par an"
      },
      {
        question: "Sur une vie de 75 ans (en considérant qu'on commence à dire bonjour vers 5 ans), combien de fois cette personne aura-t-elle dit 'bonjour' ?",
        correctAnswer: 383250,
        unit: "bonjours",
        explanation: "5 475 bonjours × 70 ans = 383 250 bonjours"
      }
    ],
    finalExplanation: "Le mot 'bonjour' est probablement l'un des mots les plus prononcés de notre vocabulaire. Sur une vie, c'est près de 400 000 fois que nous le prononçons !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-15",
    question: "Calculez la distance parcourue par la langue d'une personne qui parle beaucoup",
    steps: [
      {
        question: "Si la langue d'une personne parcourt environ 5 mm à chaque syllabe prononcée, et que cette personne prononce 15 000 syllabes par jour (personne bavarde), quelle distance sa langue parcourt-elle quotidiennement ?",
        correctAnswer: 75,
        unit: "mètres",
        explanation: "5 mm × 15 000 syllabes = 75 000 mm = 75 mètres par jour"
      },
      {
        question: "Quelle distance cela représente-t-il sur un mois ?",
        correctAnswer: 2250,
        unit: "mètres",
        explanation: "75 mètres × 30 jours = 2 250 mètres = 2,25 km par mois"
      },
      {
        question: "Sur une vie de 80 ans (en considérant qu'on parle couramment à partir de 3 ans), quelle distance totale la langue de cette personne aura-t-elle parcourue ?",
        correctAnswer: 2130,
        unit: "km",
        explanation: "75 mètres × 365 jours × 77 ans = 2 130 km"
      }
    ],
    finalExplanation: "La langue est l'un des muscles les plus actifs du corps humain. Pour une personne bavarde, elle parcourt une distance équivalente à la traversée de la France sur une vie !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-16",
    question: "Calculez le nombre de bulles produites en ouvrant des bouteilles de soda",
    steps: [
      {
        question: "Si une bouteille de soda de 1 litre contient environ 2,5 litres de CO2 dissous, et que chaque millilitre de CO2 peut former environ 10 000 bulles, combien de bulles contient une bouteille ?",
        correctAnswer: 25000000,
        unit: "bulles",
        explanation: "2,5 litres × 1 000 ml/litre × 10 000 bulles/ml = 25 000 000 bulles"
      },
      {
        question: "Si une personne boit 2 bouteilles de soda par semaine, combien de bulles de CO2 consomme-t-elle en un mois ?",
        correctAnswer: 200000000,
        unit: "bulles",
        explanation: "25 000 000 bulles × 2 bouteilles × 4 semaines = 200 000 000 bulles par mois"
      },
      {
        question: "Sur une année, combien de bulles de soda cette personne aura-t-elle consommées ?",
        correctAnswer: 2600000000,
        unit: "bulles",
        explanation: "25 000 000 bulles × 2 bouteilles × 52 semaines = 2 600 000 000 bulles par an"
      }
    ],
    finalExplanation: "Les sodas contiennent une quantité impressionnante de gaz carbonique dissous. En un an, un consommateur régulier libère plus de 2,5 milliards de bulles en buvant du soda !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-17",
    question: "Calculez la distance parcourue par une touche de clavier au cours d'une vie",
    steps: [
      {
        question: "Si une touche de clavier s'enfonce de 2 mm à chaque frappe, et qu'un utilisateur intensif tape 10 000 caractères par jour, quelle distance verticale la touche parcourt-elle quotidiennement (en s'enfonçant et remontant) ?",
        correctAnswer: 40,
        unit: "mètres",
        explanation: "2 mm (descente) + 2 mm (remontée) × 10 000 frappes = 40 000 mm = 40 mètres par jour"
      },
      {
        question: "Quelle distance cela représente-t-il sur une année (en supposant une utilisation 5 jours par semaine) ?",
        correctAnswer: 10400,
        unit: "mètres",
        explanation: "40 mètres × 5 jours × 52 semaines = 10 400 mètres = 10,4 km par an"
      },
      {
        question: "Sur une carrière professionnelle de 40 ans, quelle distance totale cette touche de clavier aura-t-elle parcourue ?",
        correctAnswer: 416,
        unit: "km",
        explanation: "10,4 km × 40 ans = 416 km"
      }
    ],
    finalExplanation: "Une touche de clavier d'un utilisateur intensif parcourt une distance impressionnante, équivalente à Paris-Lyon, simplement en s'enfonçant de quelques millimètres à chaque frappe !",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-18",
    question: "Calculez le temps passé à attendre que l'eau bouille dans une vie",
    steps: [
      {
        question: "Si une personne fait bouillir de l'eau 3 fois par jour en moyenne, et que chaque fois l'eau met 3 minutes à bouillir, combien de minutes cette personne attend-elle chaque jour ?",
        correctAnswer: 9,
        unit: "minutes",
        explanation: "3 fois × 3 minutes = 9 minutes par jour"
      },
      {
        question: "Combien d'heures cela représente-t-il sur une année ?",
        correctAnswer: 54.75,
        unit: "heures",
        explanation: "9 minutes × 365 jours = 3 285 minutes = 54,75 heures par an"
      },
      {
        question: "Sur une vie de 70 ans (en considérant qu'on commence à faire bouillir de l'eau vers 15 ans), combien de jours complets cette personne aura-t-elle passés à attendre que l'eau bouille ?",
        correctAnswer: 159.5,
        unit: "jours",
        explanation: "54,75 heures × 70 ans = 3 832,5 heures = 159,5 jours"
      }
    ],
    finalExplanation: "L'attente que l'eau bouille représente plus de 5 mois de notre vie ! Cette activité quotidienne simple mais répétitive accumule un temps considérable au fil des années.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-19",
    question: "Calculez la quantité de larmes produites par une personne au cours de sa vie",
    steps: [
      {
        question: "Si un humain produit environ 1,2 ml de larmes par jour pour lubrifier ses yeux (larmes basales), quelle quantité de larmes produit-il en un mois ?",
        correctAnswer: 36,
        unit: "ml",
        explanation: "1,2 ml × 30 jours = 36 ml par mois"
      },
      {
        question: "Quelle quantité de larmes émotionnelles un humain produit-il en moyenne sur une année, s'il pleure une fois par mois à raison de 5 ml par épisode de pleurs ?",
        correctAnswer: 60,
        unit: "ml",
        explanation: "5 ml × 12 mois = 60 ml de larmes émotionnelles par an"
      },
      {
        question: "Sur une vie de 80 ans, quelle quantité totale de larmes (basales et émotionnelles) un humain produit-il ?",
        correctAnswer: 39.64,
        unit: "litres",
        explanation: "(1,2 ml × 365 jours × 80 ans) + (60 ml × 80 ans) = 35 040 ml + 4 800 ml = 39 840 ml = 39,84 litres"
      }
    ],
    finalExplanation: "Nous produisons près de 40 litres de larmes au cours de notre vie, soit l'équivalent d'un petit jerrycan ! La majorité de ces larmes sont des larmes basales qui maintiennent l'hydratation de nos yeux.",
    type: "multistep",
    theme: "insolite"
  },
  {
    id: "insolite-multi-20",
    question: "Calculez le nombre de fois où les portes d'un ascenseur s'ouvrent en un an",
    steps: [
      {
        question: "Si un ascenseur d'immeuble dessert 8 étages, qu'il fait en moyenne 50 trajets par jour, et que ses portes s'ouvrent 2 fois par trajet (départ et arrivée), combien de fois ses portes s'ouvrent-elles chaque jour ?",
        correctAnswer: 100,
        unit: "ouvertures",
        explanation: "50 trajets × 2 ouvertures = 100 ouvertures par jour"
      },
      {
        question: "Combien d'ouvertures cela représente-t-il sur une semaine ?",
        correctAnswer: 700,
        unit: "ouvertures",
        explanation: "100 ouvertures × 7 jours = 700 ouvertures par semaine"
      },
      {
        question: "Sur une année complète, combien de fois les portes de cet ascenseur se seront-elles ouvertes ?",
        correctAnswer: 36500,
        unit: "ouvertures",
        explanation: "100 ouvertures × 365 jours = 36 500 ouvertures par an"
      }
    ],
    finalExplanation: "Les ascenseurs sont parmi les équipements les plus sollicités dans un immeuble. Leurs portes s'ouvrent et se ferment des dizaines de milliers de fois chaque année, ce qui explique pourquoi ils nécessitent une maintenance régulière !",
    type: "multistep",
    theme: "insolite"
  }
];

// Exporter toutes les questions insolites combinées
export const insoliteQuestions = [
  ...questionsInsolitesSimples,
  ...questionsInsolitesMultiStep
];

