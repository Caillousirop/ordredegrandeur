
import { Question, MultiStepQuestion } from "@/components/types";

export const educationQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "11",
    question: "Quel est le budget annuel moyen par élève dans l'enseignement primaire ?",
    correctAnswer: 7840,
    unit: "€",
    explanation: "Selon le Ministère de l'Éducation nationale et l'INSEE, le budget annuel moyen consacré à un élève du primaire est d'environ 7 840 euros.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "12",
    question: "Quel est le pourcentage d'une génération obtenant le baccalauréat en France ?",
    correctAnswer: 80.1,
    unit: "%",
    explanation: "Selon les chiffres de l'INSEE, environ 80,1% d'une génération obtient le baccalauréat en France.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "13",
    type: "multistep",
    question: "Combien d'heures d'enseignement un élève français reçoit-il entre 6 et 18 ans ?",
    finalExplanation: "Un élève français reçoit environ 10 800 heures d'enseignement entre 6 et 18 ans selon les données du Ministère de l'Éducation nationale.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'heures de cours un élève reçoit-il en moyenne par semaine ?",
        correctAnswer: 27,
        unit: "heures",
        explanation: "Un élève reçoit en moyenne 27 heures de cours par semaine dans le système éducatif français."
      },
      {
        question: "Combien de semaines d'école y a-t-il par an en France ?",
        correctAnswer: 36,
        unit: "semaines",
        explanation: "L'année scolaire en France compte environ 36 semaines de cours."
      },
      {
        question: "Combien d'années d'enseignement obligatoire y a-t-il entre 6 et 18 ans ?",
        correctAnswer: 12,
        unit: "années",
        explanation: "Entre 6 et 18 ans, il y a 12 années d'enseignement obligatoire en France."
      },
      {
        question: "Quel est le nombre total d'heures d'enseignement reçues entre 6 et 18 ans ?",
        correctAnswer: 10800,
        unit: "heures",
        explanation: "En multipliant 27 heures par semaine × 36 semaines par an × 12 années, on obtient un total d'environ 10 800 heures."
      }
    ]
  },
  {
    id: "24",
    question: "Quel est le pourcentage de jeunes de 18-24 ans poursuivant des études supérieures en France ?",
    correctAnswer: 46.2,
    unit: "%",
    explanation: "Selon les données de l'INSEE, 46,2% des jeunes de 18 à 24 ans poursuivent des études supérieures en France.",
    type: "simple",
    theme: "éducation"
  },
  {
    id: "121",
    type: "multistep",
    question: "Combien d'élèves sont scolarisés dans des établissements privés en France ?",
    finalExplanation: "Environ 2,2 millions d'élèves sont scolarisés dans des établissements privés en France, soit environ 17% de l'ensemble des élèves du primaire et du secondaire.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés au total dans le primaire et le secondaire en France ?",
        correctAnswer: 12.9,
        unit: "millions",
        explanation: "Environ 12,9 millions d'élèves sont scolarisés dans le primaire et le secondaire en France selon les données du Ministère de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage d'élèves fréquentent l'enseignement privé ?",
        correctAnswer: 17,
        unit: "%",
        explanation: "Environ 17% des élèves français sont scolarisés dans des établissements privés, majoritairement sous contrat avec l'État."
      },
      {
        question: "Combien d'élèves sont scolarisés dans des établissements privés en France ?",
        correctAnswer: 2.2,
        unit: "millions",
        explanation: "En multipliant le nombre total d'élèves (12,9 millions) par le pourcentage dans le privé (17%), on obtient environ 2,2 millions d'élèves."
      }
    ]
  },
  {
    id: "122",
    type: "multistep",
    question: "Combien d'enseignants du secondaire préparent des copies à corriger chaque soir en semaine ?",
    finalExplanation: "Environ 210 000 enseignants du secondaire préparent des copies à corriger chaque soir de semaine, ce qui représente une part importante du temps de travail en dehors des heures de cours.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'enseignants travaillent dans le secondaire en France ?",
        correctAnswer: 390000,
        unit: "enseignants",
        explanation: "Environ 390 000 enseignants travaillent dans l'enseignement secondaire (collèges et lycées) en France."
      },
      {
        question: "Quel pourcentage de ces enseignants enseignent des matières nécessitant régulièrement des corrections de copies (français, mathématiques, histoire-géographie, etc.) ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Environ 72% des enseignants du secondaire enseignent des matières qui nécessitent régulièrement des corrections de copies écrites."
      },
      {
        question: "Parmi ces enseignants, quelle proportion a effectivement des copies à corriger un soir donné de semaine ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "En moyenne, 75% des enseignants concernés ont effectivement des copies à corriger un soir donné de semaine, les autres étant entre deux séries de devoirs ou ayant déjà terminé leurs corrections."
      },
      {
        question: "Combien d'enseignants du secondaire préparent des copies à corriger chaque soir en semaine ?",
        correctAnswer: 210000,
        unit: "enseignants",
        explanation: "En multipliant le nombre total d'enseignants du secondaire (390 000) par le pourcentage concerné par les corrections (72%) puis par le taux d'activité de correction quotidienne (75%), on obtient environ 210 000 enseignants."
      }
    ]
  },
  {
    id: "123",
    type: "multistep",
    question: "Combien d'étudiants sont inscrits en licence dans des universités publiques ?",
    finalExplanation: "Environ 1,1 million d'étudiants sont inscrits en licence dans les universités publiques françaises, soit plus d'un tiers de l'ensemble des étudiants de l'enseignement supérieur.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France selon les données du Ministère de l'Enseignement Supérieur."
      },
      {
        question: "Quel pourcentage de ces étudiants sont inscrits dans des universités publiques ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des étudiants de l'enseignement supérieur sont inscrits dans des universités publiques, les autres étant dans des écoles spécialisées, BTS, CPGE, etc."
      },
      {
        question: "Parmi les étudiants universitaires, quel pourcentage suit un cursus de licence ?",
        correctAnswer: 61,
        unit: "%",
        explanation: "Environ 61% des étudiants universitaires suivent un cursus de licence (L1, L2, L3), les autres étant en master, doctorat ou autres formations."
      },
      {
        question: "Combien d'étudiants sont inscrits en licence dans des universités publiques ?",
        correctAnswer: 1.1,
        unit: "million",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage à l'université publique (62%) puis par le taux d'inscription en licence (61%), on obtient environ 1,1 million d'étudiants."
      }
    ]
  },
  {
    id: "124",
    type: "multistep",
    question: "Combien d'heures de cours un lycéen reçoit-il en moyenne par semaine ?",
    finalExplanation: "Un lycéen français reçoit en moyenne 31 heures de cours par semaine, avec des variations selon les filières et les options choisies.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'heures de cours sont prévues dans l'emploi du temps d'un élève de filière générale ?",
        correctAnswer: 28.5,
        unit: "heures",
        explanation: "Un lycéen en filière générale a en moyenne 28,5 heures inscrites à son emploi du temps hebdomadaire selon les programmes officiels."
      },
      {
        question: "Combien d'heures de cours sont prévues dans l'emploi du temps d'un élève de filière technologique ?",
        correctAnswer: 31,
        unit: "heures",
        explanation: "Un lycéen en filière technologique a en moyenne 31 heures inscrites à son emploi du temps hebdomadaire."
      },
      {
        question: "Combien d'heures de cours sont prévues dans l'emploi du temps d'un élève de filière professionnelle ?",
        correctAnswer: 34,
        unit: "heures",
        explanation: "Un lycéen en filière professionnelle a en moyenne 34 heures inscrites à son emploi du temps hebdomadaire, incluant les enseignements pratiques."
      },
      {
        question: "Quelle est la répartition des lycéens entre les trois filières (générale, technologique, professionnelle) ?",
        correctAnswer: [52, 19, 29],
        unit: "%",
        explanation: "Environ 52% des lycéens sont en filière générale, 19% en filière technologique et 29% en filière professionnelle."
      },
      {
        question: "Combien d'heures de cours un lycéen reçoit-il en moyenne par semaine ?",
        correctAnswer: 31,
        unit: "heures",
        explanation: "En calculant la moyenne pondérée des heures de cours par filière (28,5 × 52% + 31 × 19% + 34 × 29%), on obtient environ 31 heures de cours par semaine."
      }
    ]
  },
  {
    id: "125",
    type: "multistep",
    question: "Combien de jeunes de moins de 18 ans bénéficient de soutien scolaire privé ?",
    finalExplanation: "Environ 1,6 million de jeunes de moins de 18 ans bénéficient de soutien scolaire privé en France, un marché en croissance constante depuis plusieurs années.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés du primaire au lycée en France ?",
        correctAnswer: 12.9,
        unit: "millions",
        explanation: "Environ 12,9 millions d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France."
      },
      {
        question: "Quel pourcentage de familles déclarent avoir recours au soutien scolaire privé pour leurs enfants ?",
        correctAnswer: 18.5,
        unit: "%",
        explanation: "Environ 18,5% des familles avec enfants scolarisés déclarent avoir recours à du soutien scolaire privé (cours particuliers, organismes spécialisés, etc.)."
      },
      {
        question: "Parmi ces familles, combien d'enfants par famille bénéficient en moyenne de ce soutien ?",
        correctAnswer: 1.35,
        unit: "enfant",
        explanation: "Dans les familles ayant recours au soutien scolaire privé, en moyenne 1,35 enfant par famille en bénéficie."
      },
      {
        question: "Combien de jeunes de moins de 18 ans bénéficient de soutien scolaire privé ?",
        correctAnswer: 1.6,
        unit: "million",
        explanation: "En calculant le nombre de familles concernées (12,9 millions d'élèves ÷ 1,5 enfant par famille en moyenne × 18,5%) puis en multipliant par le nombre moyen d'enfants bénéficiaires par famille (1,35), on obtient environ 1,6 million de jeunes."
      }
    ]
  },
  {
    id: "126",
    type: "multistep",
    question: "Combien de professeurs des écoles exercent dans des zones rurales ?",
    finalExplanation: "Environ 67 000 professeurs des écoles exercent dans des zones rurales en France, jouant un rôle essentiel dans le maintien d'un service éducatif de proximité.",
    theme: "éducation",
    steps: [
      {
        question: "Combien de professeurs des écoles exercent en France ?",
        correctAnswer: 372000,
        unit: "professeurs",
        explanation: "Environ 372 000 professeurs des écoles exercent en France selon les données du Ministère de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage de la population française vit en zone rurale ?",
        correctAnswer: 22.4,
        unit: "%",
        explanation: "Environ 22,4% de la population française vit en zone rurale selon les définitions de l'INSEE."
      },
      {
        question: "Quel est le ratio du nombre de professeurs des écoles par rapport au nombre d'élèves en zone rurale comparé aux zones urbaines ?",
        correctAnswer: 0.8,
        unit: "",
        explanation: "En zone rurale, le ratio du nombre de professeurs des écoles par élève est d'environ 0,8 fois celui des zones urbaines, en raison notamment de classes à effectifs plus réduits mais aussi de classes multiniveaux."
      },
      {
        question: "Combien de professeurs des écoles exercent dans des zones rurales ?",
        correctAnswer: 67000,
        unit: "professeurs",
        explanation: "En multipliant le nombre total de professeurs des écoles (372 000) par le pourcentage de population rurale (22,4%) et en ajustant avec le ratio spécifique (0,8), on obtient environ 67 000 professeurs des écoles en zone rurale."
      }
    ]
  },
  {
    id: "127",
    type: "multistep",
    question: "Combien d'élèves mangent à la cantine chaque jour en France ?",
    finalExplanation: "Environ 6,8 millions d'élèves mangent à la cantine chaque jour en France, ce qui en fait un enjeu majeur de restauration collective et de nutrition.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés au total dans le primaire et le secondaire en France ?",
        correctAnswer: 12.9,
        unit: "millions",
        explanation: "Environ 12,9 millions d'élèves sont scolarisés dans le primaire et le secondaire en France."
      },
      {
        question: "Quel pourcentage d'élèves du primaire mangent à la cantine en moyenne ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des élèves du primaire mangent à la cantine en moyenne selon les données de l'Éducation Nationale."
      },
      {
        question: "Quel pourcentage d'élèves du secondaire mangent à la cantine en moyenne ?",
        correctAnswer: 76,
        unit: "%",
        explanation: "Environ 76% des élèves du secondaire (collège et lycée) mangent à la cantine en moyenne."
      },
      {
        question: "Quelle est la répartition des élèves entre primaire et secondaire ?",
        correctAnswer: [55, 45],
        unit: "%",
        explanation: "Environ 55% des élèves sont dans le primaire et 45% dans le secondaire."
      },
      {
        question: "Combien d'élèves mangent à la cantine chaque jour en France ?",
        correctAnswer: 6.8,
        unit: "millions",
        explanation: "En calculant séparément pour le primaire (12,9 millions × 55% × 67%) et le secondaire (12,9 millions × 45% × 76%), puis en additionnant, on obtient environ 6,8 millions d'élèves."
      }
    ]
  },
  {
    id: "128",
    type: "multistep",
    question: "Combien d'étudiants étrangers étudient dans les établissements d'enseignement supérieur français ?",
    finalExplanation: "Environ 400 000 étudiants étrangers étudient dans les établissements d'enseignement supérieur français, faisant de la France l'un des pays les plus attractifs pour la mobilité étudiante internationale.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage des étudiants de l'enseignement supérieur sont de nationalité étrangère ?",
        correctAnswer: 13.8,
        unit: "%",
        explanation: "Environ 13,8% des étudiants inscrits dans l'enseignement supérieur français sont de nationalité étrangère selon les données de Campus France."
      },
      {
        question: "Combien d'étudiants étrangers étudient dans les établissements d'enseignement supérieur français ?",
        correctAnswer: 400000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage d'étudiants étrangers (13,8%), on obtient environ 400 000 étudiants étrangers."
      }
    ]
  },
  {
    id: "129",
    type: "multistep",
    question: "Combien de manuels scolaires sont vendus à chaque rentrée scolaire ?",
    finalExplanation: "Environ 45 millions de manuels scolaires sont vendus à chaque rentrée scolaire en France, un marché important qui connaît des mutations avec le développement des ressources numériques.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont concernés par l'achat de nouveaux manuels scolaires chaque année ?",
        correctAnswer: 7.5,
        unit: "millions",
        explanation: "Environ 7,5 millions d'élèves sont concernés par l'achat de nouveaux manuels scolaires chaque année, principalement en raison des changements de classe ou de réformes des programmes."
      },
      {
        question: "Combien de manuels différents un élève doit-il acquérir en moyenne ?",
        correctAnswer: 6,
        unit: "manuels",
        explanation: "Un élève doit acquérir en moyenne 6 manuels différents par an, avec des variations importantes selon le niveau (plus nombreux au lycée qu'en primaire)."
      },
      {
        question: "Combien de manuels scolaires sont vendus à chaque rentrée scolaire ?",
        correctAnswer: 45,
        unit: "millions",
        explanation: "En multipliant le nombre d'élèves concernés (7,5 millions) par le nombre moyen de manuels par élève (6), on obtient environ 45 millions de manuels vendus à chaque rentrée."
      }
    ]
  },
  {
    id: "130",
    type: "multistep",
    question: "Combien d'enseignants-chercheurs publient au moins un article par an ?",
    finalExplanation: "Environ 45 000 enseignants-chercheurs publient au moins un article scientifique par an en France, témoignant de l'activité de recherche importante menée dans les universités françaises.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'enseignants-chercheurs travaillent dans les universités françaises ?",
        correctAnswer: 66000,
        unit: "enseignants-chercheurs",
        explanation: "Environ 66 000 enseignants-chercheurs (maîtres de conférences et professeurs des universités) travaillent dans les universités françaises selon les données du Ministère de l'Enseignement Supérieur."
      },
      {
        question: "Quel pourcentage des enseignants-chercheurs sont actifs en recherche et publient régulièrement ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des enseignants-chercheurs sont actifs en recherche et publient régulièrement, les autres se consacrant davantage à l'enseignement ou à des responsabilités administratives."
      },
      {
        question: "Combien d'enseignants-chercheurs publient au moins un article par an ?",
        correctAnswer: 45000,
        unit: "enseignants-chercheurs",
        explanation: "En multipliant le nombre total d'enseignants-chercheurs (66 000) par le pourcentage d'actifs en recherche (68%), on obtient environ 45 000 enseignants-chercheurs publiant au moins un article par an."
      }
    ]
  },
  {
    id: "131",
    type: "multistep",
    question: "Combien de jeunes de 16 à 25 ans sont en apprentissage ?",
    finalExplanation: "Environ 850 000 jeunes de 16 à 25 ans sont en apprentissage en France, un chiffre en forte augmentation ces dernières années grâce aux politiques publiques de valorisation de cette voie de formation.",
    theme: "éducation",
    steps: [
      {
        question: "Combien de jeunes âgés de 16 à 25 ans y a-t-il en France ?",
        correctAnswer: 7.6,
        unit: "millions",
        explanation: "La France compte environ 7,6 millions de jeunes âgés de 16 à 25 ans selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population est en formation initiale (études ou formation) ?",
        correctAnswer: 63,
        unit: "%",
        explanation: "Environ 63% des jeunes de 16 à 25 ans sont encore en formation initiale (lycée, études supérieures ou formation professionnelle)."
      },
      {
        question: "Parmi les jeunes en formation, quel pourcentage suit une formation en apprentissage ?",
        correctAnswer: 17.8,
        unit: "%",
        explanation: "Environ 17,8% des jeunes en formation suivent une formation en apprentissage, alternant périodes en entreprise et périodes en centre de formation."
      },
      {
        question: "Combien de jeunes de 16 à 25 ans sont en apprentissage ?",
        correctAnswer: 850000,
        unit: "jeunes",
        explanation: "En multipliant la population des 16-25 ans (7,6 millions) par le taux de jeunes en formation (63%) puis par le taux d'apprentissage (17,8%), on obtient environ 850 000 jeunes."
      }
    ]
  },
  {
    id: "132",
    type: "multistep",
    question: "Combien de collégiens suivent des cours dans une langue vivante autre que l'anglais ?",
    finalExplanation: "Environ 3,2 millions de collégiens suivent des cours dans une langue vivante autre que l'anglais (principalement espagnol, allemand et italien), souvent en tant que deuxième langue vivante.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés au collège en France ?",
        correctAnswer: 3.4,
        unit: "millions",
        explanation: "Environ 3,4 millions d'élèves sont scolarisés au collège (de la 6e à la 3e) en France."
      },
      {
        question: "Quel pourcentage des collégiens étudient l'anglais comme langue vivante ?",
        correctAnswer: 98.5,
        unit: "%",
        explanation: "Environ 98,5% des collégiens étudient l'anglais, que ce soit en première ou en deuxième langue vivante."
      },
      {
        question: "Quel pourcentage des collégiens étudient au moins deux langues vivantes ?",
        correctAnswer: 94.7,
        unit: "%",
        explanation: "Environ 94,7% des collégiens étudient au moins deux langues vivantes, principalement à partir de la 5e où commence généralement la LV2."
      },
      {
        question: "Combien de collégiens suivent des cours dans une langue vivante autre que l'anglais ?",
        correctAnswer: 3.2,
        unit: "millions",
        explanation: "En multipliant le nombre total de collégiens (3,4 millions) par le pourcentage étudiant au moins deux langues (94,7%), on obtient environ 3,2 millions de collégiens étudiant une autre langue que l'anglais."
      }
    ]
  },
  {
    id: "133",
    type: "multistep",
    question: "Combien de Français passent un concours de la fonction publique chaque année ?",
    finalExplanation: "Environ 1,3 million de Français passent un concours de la fonction publique chaque année, témoignant de l'attractivité persistante de l'emploi public en France.",
    theme: "éducation",
    steps: [
      {
        question: "Combien de postes sont ouverts aux concours de la fonction publique chaque année ?",
        correctAnswer: 55000,
        unit: "postes",
        explanation: "Environ 55 000 postes sont ouverts chaque année aux concours des trois fonctions publiques (État, territoriale et hospitalière)."
      },
      {
        question: "Combien de candidats se présentent en moyenne pour un poste ouvert dans la fonction publique ?",
        correctAnswer: 24,
        unit: "candidats",
        explanation: "En moyenne, 24 candidats se présentent pour un poste ouvert aux concours de la fonction publique, avec des variations importantes selon les concours."
      },
      {
        question: "Combien de Français passent un concours de la fonction publique chaque année ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre de postes ouverts (55 000) par le nombre moyen de candidats par poste (24), on obtient environ 1,3 million de candidats aux concours de la fonction publique chaque année."
      }
    ]
  },
  {
    id: "134",
    type: "multistep",
    question: "Combien d'étudiants passent le bac pro en France chaque année ?",
    finalExplanation: "Environ 180 000 étudiants passent le baccalauréat professionnel chaque année en France, représentant près d'un quart des candidats au baccalauréat.",
    theme: "éducation",
    steps: [
      {
        question: "Combien de candidats se présentent au baccalauréat (toutes filières confondues) chaque année ?",
        correctAnswer: 740000,
        unit: "candidats",
        explanation: "Environ 740 000 candidats se présentent au baccalauréat chaque année en France."
      },
      {
        question: "Quel pourcentage des candidats au baccalauréat préparent un baccalauréat professionnel ?",
        correctAnswer: 24.3,
        unit: "%",
        explanation: "Environ 24,3% des candidats au baccalauréat préparent un baccalauréat professionnel, les autres préparant un bac général ou technologique."
      },
      {
        question: "Combien d'étudiants passent le bac pro en France chaque année ?",
        correctAnswer: 180000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total de candidats au baccalauréat (740 000) par le pourcentage de candidats en filière professionnelle (24,3%), on obtient environ 180 000 étudiants."
      }
    ]
  },
  {
    id: "135",
    type: "multistep",
    question: "Combien d'élèves suivent une scolarité dans un établissement international ou bilingue ?",
    finalExplanation: "Environ 420 000 élèves suivent une scolarité dans un établissement international ou proposant des sections bilingues en France, témoignant d'un intérêt croissant pour l'éducation plurilingue.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés au total dans le primaire et le secondaire en France ?",
        correctAnswer: 12.9,
        unit: "millions",
        explanation: "Environ 12,9 millions d'élèves sont scolarisés dans le primaire et le secondaire en France."
      },
      {
        question: "Quel pourcentage des établissements scolaires proposent des sections internationales ou bilingues ?",
        correctAnswer: 4.8,
        unit: "%",
        explanation: "Environ 4,8% des établissements scolaires français proposent des sections internationales ou bilingues (sections européennes, internationales, classes bilingues, etc.)."
      },
      {
        question: "Quel est le ratio moyen d'effectif entre un établissement standard et un établissement proposant des sections internationales ?",
        correctAnswer: 1.36,
        unit: "",
        explanation: "Les établissements proposant des sections internationales ou bilingues ont en moyenne 1,36 fois plus d'élèves que les établissements standards, car ils sont souvent situés dans des zones urbaines denses."
      },
      {
        question: "Combien d'élèves suivent une scolarité dans un établissement international ou bilingue ?",
        correctAnswer: 420000,
        unit: "élèves",
        explanation: "En multipliant la population scolaire totale (12,9 millions) par le pourcentage d'établissements concernés (4,8%) et en ajustant avec le ratio d'effectif (1,36), on obtient environ 420 000 élèves."
      }
    ]
  },
  {
    id: "136",
    type: "multistep",
    question: "Combien de jeunes abandonnent leurs études supérieures après la première année ?",
    finalExplanation: "Environ 95 000 jeunes abandonnent leurs études supérieures après la première année en France, un phénomène qui touche particulièrement les filières universitaires non sélectives.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'étudiants entrent chaque année en première année d'études supérieures ?",
        correctAnswer: 520000,
        unit: "étudiants",
        explanation: "Environ 520 000 étudiants entrent chaque année en première année d'études supérieures en France."
      },
      {
        question: "Quel est le taux d'abandon en première année dans les filières universitaires générales ?",
        correctAnswer: 27.4,
        unit: "%",
        explanation: "Le taux d'abandon en première année dans les filières universitaires générales (licences) est d'environ 27,4% selon les données du Ministère de l'Enseignement Supérieur."
      },
      {
        question: "Quel est le taux d'abandon en première année dans les filières sélectives (BTS, IUT, CPGE, etc.) ?",
        correctAnswer: 9.2,
        unit: "%",
        explanation: "Le taux d'abandon en première année dans les filières sélectives est nettement plus faible, environ 9,2%."
      },
      {
        question: "Quelle est la répartition des nouveaux entrants entre filières universitaires générales et filières sélectives ?",
        correctAnswer: [55, 45],
        unit: "%",
        explanation: "Environ 55% des nouveaux entrants s'inscrivent en filières universitaires générales et 45% dans des filières sélectives."
      },
      {
        question: "Combien de jeunes abandonnent leurs études supérieures après la première année ?",
        correctAnswer: 95000,
        unit: "jeunes",
        explanation: "En calculant séparément pour les filières universitaires (520 000 × 55% × 27,4%) et les filières sélectives (520 000 × 45% × 9,2%), puis en additionnant, on obtient environ 95 000 abandons."
      }
    ]
  },
  {
    id: "137",
    type: "multistep",
    question: "Combien de personnes suivent une formation professionnelle financée par le CPF chaque année ?",
    finalExplanation: "Environ 1,2 million de personnes suivent une formation professionnelle financée par le Compte Personnel de Formation (CPF) chaque année en France, illustrant le succès de ce dispositif de formation continue.",
    theme: "éducation",
    steps: [
      {
        question: "Combien de personnes actives (en emploi ou en recherche d'emploi) y a-t-il en France ?",
        correctAnswer: 29.8,
        unit: "millions",
        explanation: "La France compte environ 29,8 millions de personnes actives (en emploi ou en recherche d'emploi)."
      },
      {
        question: "Quel pourcentage des actifs disposent d'un Compte Personnel de Formation (CPF) actif ?",
        correctAnswer: 94,
        unit: "%",
        explanation: "Environ 94% des actifs disposent d'un Compte Personnel de Formation actif, les autres n'ayant pas encore activé leur compte."
      },
      {
        question: "Parmi les détenteurs d'un CPF, quel pourcentage utilise effectivement ses droits pour suivre une formation chaque année ?",
        correctAnswer: 4.3,
        unit: "%",
        explanation: "Environ 4,3% des détenteurs d'un CPF utilisent effectivement leurs droits pour suivre une formation chaque année."
      },
      {
        question: "Combien de personnes suivent une formation professionnelle financée par le CPF chaque année ?",
        correctAnswer: 1.2,
        unit: "million",
        explanation: "En multipliant la population active (29,8 millions) par le taux de détention d'un CPF actif (94%) puis par le taux d'utilisation annuel (4,3%), on obtient environ 1,2 million de personnes."
      }
    ]
  },
  {
    id: "138",
    type: "multistep",
    question: "Combien d'étudiants vivent en résidence universitaire ?",
    finalExplanation: "Environ 175 000 étudiants vivent en résidence universitaire en France, un chiffre qui reste insuffisant par rapport à la demande de logements étudiants à prix abordable.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage des étudiants ne vivent plus chez leurs parents et ont besoin d'un logement indépendant ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des étudiants ne vivent plus chez leurs parents et ont besoin d'un logement indépendant."
      },
      {
        question: "Parmi ces étudiants ayant besoin d'un logement, quel pourcentage vit en résidence universitaire (CROUS ou résidences privées) ?",
        correctAnswer: 9,
        unit: "%",
        explanation: "Environ 9% des étudiants ayant besoin d'un logement vivent en résidence universitaire, qu'elle soit gérée par le CROUS ou par un opérateur privé."
      },
      {
        question: "Combien d'étudiants vivent en résidence universitaire ?",
        correctAnswer: 175000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage ayant besoin d'un logement (67%) puis par le taux de logement en résidence universitaire (9%), on obtient environ 175 000 étudiants."
      }
    ]
  },
  {
    id: "139",
    type: "multistep",
    question: "Combien d'élèves suivent un enseignement à distance ou en école en ligne ?",
    finalExplanation: "Environ 250 000 élèves suivent un enseignement à distance ou en école en ligne en France, un chiffre qui a augmenté significativement depuis la crise sanitaire.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés au total dans le primaire et le secondaire en France ?",
        correctAnswer: 12.9,
        unit: "millions",
        explanation: "Environ 12,9 millions d'élèves sont scolarisés dans le primaire et le secondaire en France."
      },
      {
        question: "Quel pourcentage des élèves étaient inscrits à l'enseignement à distance avant la crise du COVID-19 ?",
        correctAnswer: 0.8,
        unit: "%",
        explanation: "Avant la crise sanitaire, environ 0,8% des élèves étaient inscrits à l'enseignement à distance (CNED et autres organismes)."
      },
      {
        question: "De combien ce pourcentage a-t-il augmenté depuis la crise sanitaire ?",
        correctAnswer: 1.15,
        unit: "points de pourcentage",
        explanation: "Depuis la crise sanitaire, le pourcentage d'élèves suivant un enseignement à distance a augmenté d'environ 1,15 point de pourcentage, notamment en raison de nouvelles offres d'écoles en ligne."
      },
      {
        question: "Combien d'élèves suivent un enseignement à distance ou en école en ligne ?",
        correctAnswer: 250000,
        unit: "élèves",
        explanation: "En multipliant la population scolaire totale (12,9 millions) par le taux actuel d'enseignement à distance (0,8% + 1,15% = 1,95%), on obtient environ 250 000 élèves."
      }
    ]
  },
  {
    id: "140",
    type: "multistep",
    question: "Combien d'élèves bénéficient d'un dispositif d'accompagnement personnalisé au primaire ?",
    finalExplanation: "Environ 960 000 élèves du primaire bénéficient d'un dispositif d'accompagnement personnalisé en France, que ce soit pour des difficultés d'apprentissage ou pour des besoins éducatifs particuliers.",
    theme: "éducation",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés dans l'enseignement primaire en France ?",
        correctAnswer: 6.8,
        unit: "millions",
        explanation: "Environ 6,8 millions d'élèves sont scolarisés dans l'enseignement primaire (maternelle et élémentaire) en France."
      },
      {
        question: "Quel pourcentage d'élèves du primaire présentent des difficultés d'apprentissage nécessitant un accompagnement ?",
        correctAnswer: 20.4,
        unit: "%",
        explanation: "Environ 20,4% des élèves du primaire présentent des difficultés d'apprentissage nécessitant un accompagnement selon les évaluations nationales."
      },
      {
        question: "Parmi ces élèves en difficulté, quel pourcentage bénéficie effectivement d'un dispositif d'accompagnement personnalisé ?",
        correctAnswer: 69,
        unit: "%",
        explanation: "Environ 69% des élèves en difficulté bénéficient effectivement d'un dispositif d'accompagnement personnalisé (RASED, PPRE, aide personnalisée, etc.)."
      },
      {
        question: "Combien d'élèves bénéficient d'un dispositif d'accompagnement personnalisé au primaire ?",
        correctAnswer: 960000,
        unit: "élèves",
        explanation: "En multipliant le nombre total d'élèves du primaire (6,8 millions) par le taux de difficultés d'apprentissage (20,4%) puis par le taux de prise en charge (69%), on obtient environ 960 000 élèves."
      }
    ]
  }
];

