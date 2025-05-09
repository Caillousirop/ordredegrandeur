import { Question, MultiStepQuestion } from "@/components/types";

export const technologieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "7",
    type: "multistep",
    question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens français de la région Île-de-France ?",
    finalExplanation: "Cette estimation de 511 millions d'heures passées sur les réseaux sociaux par les lycéens d'Île-de-France chaque année est une approximation basée sur la population lycéenne, le taux d'utilisation des réseaux sociaux et le temps moyen passé quotidiennement. Les chiffres réels peuvent varier en fonction des évolutions technologiques, des tendances sociales et des politiques éducatives.",
    theme: "technologie",
    steps: [
      {
        question: "Combien y a-t-il de lycéens en Île-de-France ?",
        correctAnswer: 500000,
        unit: "lycéens",
        explanation: "L'Île-de-France compte environ 500 000 lycéens selon les données du Rectorat et de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces lycéens utilise régulièrement les réseaux sociaux ?",
        correctAnswer: 93.5,
        unit: "%",
        explanation: "Environ 93,5% des lycéens utilisent régulièrement les réseaux sociaux d'après les enquêtes sur les pratiques numériques des adolescents."
      },
      {
        question: "Combien d'heures par jour un lycéen passe-t-il en moyenne sur les réseaux sociaux ?",
        correctAnswer: 3,
        unit: "heures",
        explanation: "Un lycéen passe en moyenne 3 heures par jour sur les réseaux sociaux selon les études sur les usages numériques des adolescents."
      },
      {
        question: "Combien de jours par an les lycéens utilisent-ils les réseaux sociaux ?",
        correctAnswer: 365,
        unit: "jours",
        explanation: "Les lycéens utilisent les réseaux sociaux pratiquement tous les jours de l'année, soit 365 jours."
      },
      {
        question: "Combien d'heures sont passées sur les réseaux sociaux chaque année par les lycéens d'Île-de-France ?",
        correctAnswer: 511,
        unit: "millions d'heures",
        explanation: "En multipliant le nombre de lycéens (500 000) par le pourcentage utilisant les réseaux sociaux (93,5%) par le temps quotidien (3 heures) par le nombre de jours (365), on obtient environ 511 millions d'heures."
      }
    ]
  },
  {
    id: "17",
    question: "Quel est le pourcentage de foyers français équipés d'une connexion internet ?",
    correctAnswer: 92,
    unit: "%",
    explanation: "Selon l'INSEE, 92% des foyers français sont équipés d'une connexion internet en 2023.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "18",
    question: "Combien d'heures par semaine un Français passe-t-il en moyenne sur son smartphone ?",
    correctAnswer: 27,
    unit: "heures",
    explanation: "Selon les études de l'ARCEP et de l'INSEE, un Français passe en moyenne 27 heures par semaine sur son smartphone.",
    type: "simple",
    theme: "technologie"
  },
  {
    id: "19",
    type: "multistep",
    question: "Combien de données numériques sont produites en France chaque année ?",
    finalExplanation: "La France produit environ 1,3 exaoctets (millions de téraoctets) de données numériques par an selon les estimations de l'INSEE.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de données numériques un Français produit-il en moyenne par jour ?",
        correctAnswer: 2.5,
        unit: "Go",
        explanation: "Un Français produit en moyenne 2,5 gigaoctets de données numériques par jour."
      },
      {
        question: "Quelle est la population française ?",
        correctAnswer: 67.8,
        unit: "millions",
        explanation: "La population française est estimée à 67,8 millions d'habitants selon l'INSEE."
      },
      {
        question: "Combien de données sont produites annuellement en France ?",
        correctAnswer: 1.3,
        unit: "exaoctets",
        explanation: "En multipliant 2,5 Go × 365 jours × 67,8 millions d'habitants, puis en convertissant, on obtient environ 1,3 exaoctets par an."
      }
    ]
  },
  {
    id: "tech1",
    type: "multistep",
    question: "Combien de Français utilisent un assistant vocal (type Siri, Alexa, Google Assistant) chaque semaine ?",
    finalExplanation: "Environ 22 millions de Français utilisent un assistant vocal au moins une fois par semaine, illustrant l'adoption croissante de cette technologie dans la vie quotidienne.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 18 ans) ?",
        correctAnswer: 52.6,
        unit: "millions",
        explanation: "La France compte environ 52,6 millions d'adultes de plus de 18 ans selon les données démographiques de l'INSEE."
      },
      {
        question: "Quel pourcentage de la population adulte possède un smartphone, une enceinte connectée ou un autre appareil équipé d'un assistant vocal ?",
        correctAnswer: 87,
        unit: "%",
        explanation: "Environ 87% des adultes français possèdent au moins un appareil équipé d'un assistant vocal (smartphone, enceinte connectée, etc.)."
      },
      {
        question: "Parmi les propriétaires de ces appareils, quel pourcentage utilise réellement l'assistant vocal au moins une fois par semaine ?",
        correctAnswer: 48,
        unit: "%",
        explanation: "Environ 48% des propriétaires d'appareils équipés utilisent effectivement l'assistant vocal au moins une fois par semaine."
      },
      {
        question: "Combien de Français utilisent donc un assistant vocal chaque semaine ?",
        correctAnswer: 22,
        unit: "millions",
        explanation: "En multipliant la population adulte (52,6 millions) par le taux d'équipement (87%) puis par le taux d'utilisation hebdomadaire (48%), on obtient environ 22 millions de personnes."
      }
    ]
  },
  {
    id: "tech2",
    type: "multistep",
    question: "Combien de PC portables sont achetés chaque année par les étudiants en France ?",
    finalExplanation: "Environ 880 000 PC portables sont achetés chaque année par les étudiants en France, un équipement devenu indispensable pour leurs études.",
    theme: "technologie",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage d'étudiants achète un nouveau PC portable chaque année ?",
        correctAnswer: 30.5,
        unit: "%",
        explanation: "Environ 30,5% des étudiants achètent un nouveau PC portable chaque année, que ce soit pour remplacer un ancien modèle ou pour s'équiper pour la première fois."
      },
      {
        question: "Combien de PC portables sont donc achetés chaque année par les étudiants en France ?",
        correctAnswer: 880000,
        unit: "PC portables",
        explanation: "En multipliant le nombre d'étudiants (2,9 millions) par le pourcentage d'acheteurs annuels (30,5%), on obtient environ 880 000 PC portables achetés par an."
      }
    ]
  },
  {
    id: "tech3",
    type: "multistep",
    question: "Combien de ménages français disposent d'une connexion fibre optique ?",
    finalExplanation: "Environ 17,5 millions de ménages français disposent d'une connexion fibre optique, un chiffre en forte augmentation ces dernières années grâce au plan national de déploiement de la fibre.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de foyers y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de foyers sont éligibles à la fibre optique ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "Environ 83% des foyers français sont éligibles à la fibre optique selon les données de l'ARCEP."
      },
      {
        question: "Parmi les foyers éligibles, quel pourcentage a effectivement souscrit à un abonnement fibre ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Environ 70% des foyers éligibles ont effectivement souscrit à un abonnement fibre optique."
      },
      {
        question: "Combien de ménages français disposent donc d'une connexion fibre optique ?",
        correctAnswer: 17.5,
        unit: "millions",
        explanation: "En multipliant le nombre total de foyers (30,2 millions) par le taux d'éligibilité (83%) puis par le taux de souscription (70%), on obtient environ 17,5 millions de ménages."
      }
    ]
  },
  {
    id: "tech4",
    type: "multistep",
    question: "Combien de personnes utilisent quotidiennement une application de santé connectée (type suivi de sommeil, alimentation, etc.) ?",
    finalExplanation: "Environ 14,3 millions de Français utilisent quotidiennement une application de santé connectée, un marché en forte croissance depuis la démocratisation des smartphones et des objets connectés dédiés à la santé.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 15 ans) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de plus de 15 ans."
      },
      {
        question: "Quel pourcentage de cette population possède un smartphone ou un objet connecté permettant d'utiliser des applications de santé ?",
        correctAnswer: 83,
        unit: "%",
        explanation: "Environ 83% des Français de plus de 15 ans possèdent un smartphone ou un objet connecté permettant d'utiliser des applications de santé."
      },
      {
        question: "Parmi ces possesseurs d'appareils connectés, quel pourcentage utilise quotidiennement une application de santé ?",
        correctAnswer: 30.8,
        unit: "%",
        explanation: "Environ 30,8% des possesseurs d'appareils connectés utilisent quotidiennement une application dédiée à la santé."
      },
      {
        question: "Combien de personnes utilisent donc quotidiennement une application de santé connectée ?",
        correctAnswer: 14.3,
        unit: "millions",
        explanation: "En multipliant la population de plus de 15 ans (55,8 millions) par le taux d'équipement (83%) puis par le taux d'utilisation quotidienne (30,8%), on obtient environ 14,3 millions de personnes."
      }
    ]
  },
  {
    id: "tech5",
    type: "multistep",
    question: "Combien d'imprimantes 3D sont en fonctionnement dans les établissements scolaires et universitaires en France ?",
    finalExplanation: "Environ 12 200 imprimantes 3D sont en fonctionnement dans les établissements scolaires et universitaires en France, un nombre en constante augmentation pour former les élèves aux technologies du futur.",
    theme: "technologie",
    steps: [
      {
        question: "Combien d'établissements scolaires (collèges et lycées) y a-t-il en France ?",
        correctAnswer: 11300,
        unit: "établissements",
        explanation: "La France compte environ 11 300 établissements scolaires de niveau collège et lycée (publics et privés)."
      },
      {
        question: "Quel pourcentage de ces établissements sont équipés d'au moins une imprimante 3D ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des collèges et lycées sont équipés d'au moins une imprimante 3D, principalement dans les sections technologiques et professionnelles."
      },
      {
        question: "Combien d'établissements d'enseignement supérieur y a-t-il en France ?",
        correctAnswer: 3500,
        unit: "établissements",
        explanation: "La France compte environ 3 500 établissements d'enseignement supérieur (universités, écoles d'ingénieurs, IUT, etc.)."
      },
      {
        question: "Quel pourcentage de ces établissements d'enseignement supérieur sont équipés d'imprimantes 3D ?",
        correctAnswer: 78,
        unit: "%",
        explanation: "Environ 78% des établissements d'enseignement supérieur sont équipés d'imprimantes 3D, particulièrement dans les filières scientifiques et techniques."
      },
      {
        question: "Combien d'imprimantes 3D y a-t-il en moyenne par établissement équipé ?",
        correctAnswer: 2.4,
        unit: "imprimantes",
        explanation: "On compte en moyenne 2,4 imprimantes 3D par établissement équipé."
      },
      {
        question: "Combien d'imprimantes 3D sont en fonctionnement dans les établissements scolaires et universitaires en France ?",
        correctAnswer: 12200,
        unit: "imprimantes 3D",
        explanation: "En additionnant les imprimantes dans les établissements scolaires (11 300 × 42% × 2,4) et dans l'enseignement supérieur (3 500 × 78% × 2,4), on obtient environ 12 200 imprimantes 3D."
      }
    ]
  },
  {
    id: "tech6",
    type: "multistep",
    question: "Combien d'abonnements à des services de streaming (vidéo et musique) sont actifs en France ?",
    finalExplanation: "Environ 38 millions d'abonnements à des services de streaming vidéo et musique sont actifs en France, reflétant la transformation profonde des modes de consommation des contenus culturels.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de foyers y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers."
      },
      {
        question: "Quel pourcentage de foyers sont abonnés à au moins un service de streaming vidéo (Netflix, Disney+, etc.) ?",
        correctAnswer: 63,
        unit: "%",
        explanation: "Environ 63% des foyers français sont abonnés à au moins un service de streaming vidéo."
      },
      {
        question: "Combien d'abonnements à des services de streaming vidéo y a-t-il en moyenne par foyer abonné ?",
        correctAnswer: 1.8,
        unit: "abonnements",
        explanation: "Les foyers abonnés possèdent en moyenne 1,8 abonnement à des services de streaming vidéo différents."
      },
      {
        question: "Combien d'individus sont abonnés à un service de streaming musical (Spotify, Deezer, etc.) ?",
        correctAnswer: 14.5,
        unit: "millions",
        explanation: "Environ 14,5 millions de Français sont abonnés à un service de streaming musical payant."
      },
      {
        question: "Combien d'abonnements à des services de streaming (vidéo et musique) sont actifs en France ?",
        correctAnswer: 38,
        unit: "millions",
        explanation: "En additionnant les abonnements vidéo (30,2 millions × 63% × 1,8) et les abonnements musicaux (14,5 millions), on obtient environ 38 millions d'abonnements actifs."
      }
    ]
  },
  {
    id: "tech7",
    type: "multistep",
    question: "Combien de développeurs travaillent dans des start-up tech en France ?",
    finalExplanation: "Environ 86 000 développeurs travaillent dans des start-up tech en France, un nombre en croissance constante qui témoigne du dynamisme de l'écosystème technologique français.",
    theme: "technologie",
    steps: [
      {
        question: "Combien y a-t-il de start-up tech en France ?",
        correctAnswer: 15200,
        unit: "start-up",
        explanation: "La France compte environ 15 200 start-up technologiques selon les chiffres de la French Tech et de Bpifrance."
      },
      {
        question: "Combien d'employés une start-up tech compte-t-elle en moyenne ?",
        correctAnswer: 12.5,
        unit: "employés",
        explanation: "Une start-up tech française compte en moyenne 12,5 employés, avec de grandes variations selon le stade de développement."
      },
      {
        question: "Quel pourcentage des effectifs d'une start-up tech est constitué de développeurs ?",
        correctAnswer: 45,
        unit: "%",
        explanation: "En moyenne, 45% des effectifs d'une start-up tech sont des développeurs ou des ingénieurs travaillant sur le code."
      },
      {
        question: "Combien de développeurs travaillent donc dans des start-up tech en France ?",
        correctAnswer: 86000,
        unit: "développeurs",
        explanation: "En multipliant le nombre de start-up (15 200) par la taille moyenne (12,5) puis par le pourcentage de développeurs (45%), on obtient environ 86 000 développeurs."
      }
    ]
  },
  {
    id: "tech8",
    type: "multistep",
    question: "Combien de Français utilisent une messagerie instantanée autre que SMS ou iMessage (WhatsApp, Telegram, etc.) ?",
    finalExplanation: "Environ 42 millions de Français utilisent régulièrement une messagerie instantanée autre que les SMS ou iMessage, un usage qui s'est généralisé dans toutes les tranches d'âge.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française ayant accès à un smartphone ?",
        correctAnswer: 53.5,
        unit: "millions",
        explanation: "Environ 53,5 millions de Français ont accès à un smartphone selon l'ARCEP et le Baromètre du Numérique."
      },
      {
        question: "Quel pourcentage de ces utilisateurs de smartphone utilise régulièrement des applications de messagerie instantanée alternatives aux SMS ?",
        correctAnswer: 78.5,
        unit: "%",
        explanation: "Environ 78,5% des utilisateurs de smartphone en France utilisent régulièrement des applications de messagerie instantanée comme WhatsApp, Telegram, Signal ou Messenger."
      },
      {
        question: "Combien de Français utilisent donc une messagerie instantanée autre que SMS ou iMessage ?",
        correctAnswer: 42,
        unit: "millions",
        explanation: "En multipliant le nombre d'utilisateurs de smartphone (53,5 millions) par le pourcentage utilisant des messageries alternatives (78,5%), on obtient environ 42 millions de personnes."
      }
    ]
  },
  {
    id: "tech9",
    type: "multistep",
    question: "Combien de montres connectées ont été vendues en France en 2024 ?",
    finalExplanation: "Environ 3,8 millions de montres connectées ont été vendues en France en 2024, un marché qui continue de croître grâce à l'intérêt pour le suivi de la santé et des activités physiques.",
    theme: "technologie",
    steps: [
      {
        question: "Combien d'objets connectés portables (wearables) ont été vendus en France en 2024 ?",
        correctAnswer: 8.2,
        unit: "millions",
        explanation: "Environ 8,2 millions d'objets connectés portables ont été vendus en France en 2024 selon les estimations du marché."
      },
      {
        question: "Quel pourcentage de ces wearables sont des montres connectées (par opposition aux bracelets, écouteurs et autres appareils portables) ?",
        correctAnswer: 46.5,
        unit: "%",
        explanation: "Les montres connectées représentent environ 46,5% du marché des objets connectés portables en France."
      },
      {
        question: "Combien de montres connectées ont donc été vendues en France en 2024 ?",
        correctAnswer: 3.8,
        unit: "millions",
        explanation: "En multipliant le nombre total d'objets connectés portables vendus (8,2 millions) par la part des montres connectées (46,5%), on obtient environ 3,8 millions de montres connectées."
      }
    ]
  },
  {
    id: "tech10",
    type: "multistep",
    question: "Combien d'entreprises françaises utilisent un logiciel CRM ou ERP ?",
    finalExplanation: "Environ 860 000 entreprises françaises utilisent un logiciel CRM ou ERP, reflétant la transformation numérique progressive du tissu économique national.",
    theme: "technologie",
    steps: [
      {
        question: "Combien d'entreprises sont actives en France ?",
        correctAnswer: 4.1,
        unit: "millions",
        explanation: "Environ 4,1 millions d'entreprises sont actives en France selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces entreprises ont au moins un salarié ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des entreprises françaises ont au moins un salarié, les autres étant des auto-entrepreneurs ou des structures sans employé."
      },
      {
        question: "Parmi les entreprises avec salariés, quel pourcentage utilise un logiciel CRM ou ERP ?",
        correctAnswer: 49,
        unit: "%",
        explanation: "Environ 49% des entreprises avec salariés utilisent un logiciel de gestion de la relation client (CRM) ou de planification des ressources (ERP)."
      },
      {
        question: "Combien d'entreprises françaises utilisent donc un logiciel CRM ou ERP ?",
        correctAnswer: 860000,
        unit: "entreprises",
        explanation: "En multipliant le nombre total d'entreprises (4,1 millions) par le pourcentage ayant des salariés (43%) puis par le taux d'utilisation de CRM/ERP (49%), on obtient environ 860 000 entreprises."
      }
    ]
  },
  {
    id: "tech11",
    type: "multistep",
    question: "Combien de foyers français utilisent au moins un objet connecté dans leur logement ?",
    finalExplanation: "Environ 17,8 millions de foyers français utilisent au moins un objet connecté dans leur logement, marquant l'essor de la maison intelligente dans le pays.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de foyers y a-t-il en France ?",
        correctAnswer: 30.2,
        unit: "millions",
        explanation: "La France compte environ 30,2 millions de foyers."
      },
      {
        question: "Quel pourcentage de ces foyers sont équipés d'au moins un objet connecté pour la maison ?",
        correctAnswer: 59,
        unit: "%",
        explanation: "Environ 59% des foyers français sont équipés d'au moins un objet connecté pour la maison (enceinte connectée, thermostat intelligent, ampoule connectée, etc.)."
      },
      {
        question: "Combien de foyers français utilisent donc au moins un objet connecté dans leur logement ?",
        correctAnswer: 17.8,
        unit: "millions",
        explanation: "En multipliant le nombre total de foyers (30,2 millions) par le taux d'équipement en objets connectés (59%), on obtient environ 17,8 millions de foyers."
      }
    ]
  },
  {
    id: "tech12",
    type: "multistep",
    question: "Combien de personnes participent à des visioconférences au moins une fois par semaine en France ?",
    finalExplanation: "Environ 16,2 millions de personnes participent à des visioconférences au moins une fois par semaine en France, une pratique qui s'est largement répandue avec l'essor du télétravail et des réunions à distance.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de personnes sont en activité professionnelle en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes en activité professionnelle (salariés et indépendants)."
      },
      {
        question: "Quel pourcentage de ces actifs travaille dans un secteur ou à un poste susceptible d'utiliser des visioconférences ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des actifs français travaillent dans un secteur ou à un poste susceptible d'utiliser des visioconférences (secteur tertiaire, fonctions administratives, management, etc.)."
      },
      {
        question: "Parmi ces travailleurs, quel pourcentage participe effectivement à au moins une visioconférence par semaine ?",
        correctAnswer: 83.5,
        unit: "%",
        explanation: "Environ 83,5% de ces travailleurs participent effectivement à au moins une visioconférence par semaine dans le cadre professionnel."
      },
      {
        question: "Combien de personnes participent donc à des visioconférences au moins une fois par semaine en France ?",
        correctAnswer: 16.2,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs (28,5 millions) par le pourcentage dans des secteurs utilisant la visio (68%) puis par le taux d'utilisation hebdomadaire (83,5%), on obtient environ 16,2 millions de personnes."
      }
    ]
  },
  {
    id: "tech13",
    type: "multistep",
    question: "Combien d'abonnements à des jeux vidéo en ligne sont actifs en France ?",
    finalExplanation: "Environ 8,9 millions d'abonnements à des jeux vidéo en ligne sont actifs en France, témoignant de l'importance économique et culturelle du secteur dans le pays.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de joueurs réguliers (au moins une fois par semaine) y a-t-il en France ?",
        correctAnswer: 23.4,
        unit: "millions",
        explanation: "La France compte environ 23,4 millions de joueurs réguliers qui jouent au moins une fois par semaine selon les études du SELL (Syndicat des Éditeurs de Logiciels de Loisirs)."
      },
      {
        question: "Quel pourcentage de ces joueurs réguliers joue principalement en ligne ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des joueurs réguliers jouent principalement à des jeux en ligne, qu'ils soient sur console, PC ou mobile."
      },
      {
        question: "Parmi les joueurs en ligne, quel pourcentage possède un abonnement payant à au moins un jeu ou service de jeux ?",
        correctAnswer: 57,
        unit: "%",
        explanation: "Environ 57% des joueurs en ligne possèdent un abonnement payant à au moins un jeu ou service de jeux (Xbox Game Pass, PlayStation Plus, World of Warcraft, etc.)."
      },
      {
        question: "Combien d'abonnements en moyenne possède chaque joueur abonné ?",
        correctAnswer: 1.3,
        unit: "abonnements",
        explanation: "Un joueur abonné possède en moyenne 1,3 abonnement à des services de jeux différents."
      },
      {
        question: "Combien d'abonnements à des jeux vidéo en ligne sont donc actifs en France ?",
        correctAnswer: 8.9,
        unit: "millions",
        explanation: "En multipliant le nombre de joueurs réguliers (23,4 millions) par le pourcentage jouant en ligne (67%) puis par le taux d'abonnement (57%) et par le nombre moyen d'abonnements (1,3), on obtient environ 8,9 millions d'abonnements actifs."
      }
    ]
  },
  {
    id: "tech14",
    type: "multistep",
    question: "Combien de comptes actifs sur ChatGPT ou d'autres IA génératives sont utilisés régulièrement en France ?",
    finalExplanation: "Environ 5,7 millions de comptes sur des services d'IA générative sont utilisés régulièrement en France, un phénomène en forte croissance qui transforme de nombreux domaines professionnels et personnels.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 15 ans) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de plus de 15 ans."
      },
      {
        question: "Quel pourcentage de cette population a déjà essayé au moins une fois un service d'IA générative ?",
        correctAnswer: 31,
        unit: "%",
        explanation: "Environ 31% des Français de plus de 15 ans ont déjà essayé au moins une fois un service d'IA générative comme ChatGPT, Midjourney ou DALL-E."
      },
      {
        question: "Parmi ces utilisateurs, quel pourcentage utilise ces outils régulièrement (au moins une fois par mois) ?",
        correctAnswer: 33,
        unit: "%",
        explanation: "Environ 33% des personnes ayant essayé ces services les utilisent régulièrement (au moins une fois par mois)."
      },
      {
        question: "Combien de comptes actifs sur des IA génératives sont donc utilisés régulièrement en France ?",
        correctAnswer: 5.7,
        unit: "millions",
        explanation: "En multipliant la population adulte (55,8 millions) par le pourcentage ayant essayé ces services (31%) puis par le taux d'utilisation régulière (33%), on obtient environ 5,7 millions de comptes actifs."
      }
    ]
  },
  {
    id: "tech15",
    type: "multistep",
    question: "Combien d'élèves du secondaire utilisent un ordinateur ou une tablette pour leurs devoirs chaque semaine ?",
    finalExplanation: "Environ 4,3 millions d'élèves du secondaire utilisent un ordinateur ou une tablette pour leurs devoirs chaque semaine, illustrant la place croissante du numérique dans l'éducation.",
    theme: "technologie",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés dans l'enseignement secondaire (collèges et lycées) en France ?",
        correctAnswer: 5.4,
        unit: "millions",
        explanation: "Environ 5,4 millions d'élèves sont scolarisés dans l'enseignement secondaire en France (collèges et lycées, publics et privés)."
      },
      {
        question: "Quel pourcentage de ces élèves a accès à un ordinateur ou une tablette à domicile ?",
        correctAnswer: 92,
        unit: "%",
        explanation: "Environ 92% des élèves du secondaire ont accès à un ordinateur ou une tablette à domicile."
      },
      {
        question: "Parmi les élèves équipés, quel pourcentage utilise effectivement ces outils pour leurs devoirs au moins une fois par semaine ?",
        correctAnswer: 86,
        unit: "%",
        explanation: "Environ 86% des élèves équipés utilisent effectivement un ordinateur ou une tablette pour leurs devoirs au moins une fois par semaine."
      },
      {
        question: "Combien d'élèves du secondaire utilisent donc un ordinateur ou une tablette pour leurs devoirs chaque semaine ?",
        correctAnswer: 4.3,
        unit: "millions",
        explanation: "En multipliant le nombre total d'élèves du secondaire (5,4 millions) par le taux d'équipement (92%) puis par le taux d'utilisation hebdomadaire (86%), on obtient environ 4,3 millions d'élèves."
      }
    ]
  },
  {
    id: "tech16",
    type: "multistep",
    question: "Combien de Français stockent leurs fichiers personnels sur un cloud payant (Google Drive, iCloud, etc.) ?",
    finalExplanation: "Environ 11,6 millions de Français stockent leurs fichiers personnels sur un service de cloud payant, une pratique qui s'est démocratisée avec l'augmentation du volume de photos et vidéos stockées.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 15 ans) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de plus de 15 ans."
      },
      {
        question: "Quel pourcentage de cette population utilise des services de stockage en ligne (gratuits ou payants) ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des Français adultes utilisent des services de stockage en ligne pour leurs fichiers personnels."
      },
      {
        question: "Parmi ces utilisateurs de cloud, quel pourcentage a souscrit à une offre payante pour augmenter leur espace de stockage ?",
        correctAnswer: 33.5,
        unit: "%",
        explanation: "Environ 33,5% des utilisateurs de services cloud ont souscrit à une offre payante pour augmenter leur espace de stockage au-delà des limites gratuites."
      },
      {
        question: "Combien de Français stockent donc leurs fichiers personnels sur un cloud payant ?",
        correctAnswer: 11.6,
        unit: "millions",
        explanation: "En multipliant la population adulte (55,8 millions) par le pourcentage utilisant des services cloud (62%) puis par le taux de souscription à des offres payantes (33,5%), on obtient environ 11,6 millions de personnes."
      }
    ]
  },
  {
    id: "tech17",
    type: "multistep",
    question: "Combien de personnes travaillent dans la cybersécurité en France ?",
    finalExplanation: "Environ 58 000 personnes travaillent dans la cybersécurité en France, un secteur en forte tension où la demande de professionnels dépasse largement l'offre disponible.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de personnes travaillent dans le secteur numérique en France ?",
        correctAnswer: 925000,
        unit: "personnes",
        explanation: "Environ 925 000 personnes travaillent dans le secteur numérique en France selon les données de l'INSEE et de la DARES."
      },
      {
        question: "Quel pourcentage de ces professionnels du numérique travaille spécifiquement dans des postes liés à la cybersécurité ?",
        correctAnswer: 6.3,
        unit: "%",
        explanation: "Environ 6,3% des professionnels du numérique travaillent spécifiquement dans des postes liés à la cybersécurité."
      },
      {
        question: "Combien de personnes travaillent donc dans la cybersécurité en France ?",
        correctAnswer: 58000,
        unit: "personnes",
        explanation: "En multipliant le nombre de professionnels du numérique (925 000) par le pourcentage travaillant dans la cybersécurité (6,3%), on obtient environ 58 000 personnes."
      }
    ]
  },
  {
    id: "tech18",
    type: "multistep",
    question: "Combien de TPE/PME françaises externalisent leur hébergement web ou leur maintenance informatique ?",
    finalExplanation: "Environ 1,7 million de TPE/PME françaises externalisent leur hébergement web ou leur maintenance informatique, une pratique courante pour se concentrer sur leur cœur de métier.",
    theme: "technologie",
    steps: [
      {
        question: "Combien de TPE/PME (moins de 250 salariés) y a-t-il en France ?",
        correctAnswer: 3.9,
        unit: "millions",
        explanation: "La France compte environ 3,9 millions de TPE/PME (entreprises de moins de 250 salariés)."
      },
      {
        question: "Quel pourcentage de ces TPE/PME ont une présence en ligne nécessitant un hébergement web ?",
        correctAnswer: 71,
        unit: "%",
        explanation: "Environ 71% des TPE/PME françaises ont une présence en ligne nécessitant un hébergement web (site vitrine, e-commerce, etc.)."
      },
      {
        question: "Parmi ces entreprises ayant une présence en ligne, quel pourcentage externalise leur hébergement web ou leur maintenance informatique ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des TPE/PME ayant une présence en ligne externalisent leur hébergement web ou leur maintenance informatique plutôt que de gérer ces aspects en interne."
      },
      {
        question: "Combien de TPE/PME françaises externalisent donc leur hébergement web ou leur maintenance informatique ?",
        correctAnswer: 1.7,
        unit: "million",
        explanation: "En multipliant le nombre total de TPE/PME (3,9 millions) par le pourcentage ayant une présence en ligne (71%) puis par le taux d'externalisation (62%), on obtient environ 1,7 million d'entreprises."
      }
    ]
  },
  {
    id: "tech19",
    type: "multistep",
    question: "Combien de personnes utilisent des outils de traduction automatique au moins une fois par mois ?",
    finalExplanation: "Environ 31 millions de Français utilisent des outils de traduction automatique au moins une fois par mois, illustrant la globalisation des échanges et l'importance croissante des langues étrangères au quotidien.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 15 ans) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de plus de 15 ans."
      },
      {
        question: "Quel pourcentage de cette population utilise internet régulièrement ?",
        correctAnswer: 88,
        unit: "%",
        explanation: "Environ 88% des Français de plus de 15 ans utilisent internet régulièrement."
      },
      {
        question: "Parmi ces internautes, quel pourcentage utilise des outils de traduction automatique au moins une fois par mois ?",
        correctAnswer: 63,
        unit: "%",
        explanation: "Environ 63% des internautes français utilisent des outils de traduction automatique (Google Translate, DeepL, etc.) au moins une fois par mois."
      },
      {
        question: "Combien de personnes utilisent donc des outils de traduction automatique au moins une fois par mois ?",
        correctAnswer: 31,
        unit: "millions",
        explanation: "En multipliant la population adulte (55,8 millions) par le taux d'utilisation d'internet (88%) puis par le taux d'utilisation des outils de traduction (63%), on obtient environ 31 millions de personnes."
      }
    ]
  },
  {
    id: "tech20",
    type: "multistep",
    question: "Combien de Français ont déjà utilisé un casque de réalité virtuelle au moins une fois ?",
    finalExplanation: "Environ 12,3 millions de Français ont déjà utilisé un casque de réalité virtuelle au moins une fois, bien que l'adoption régulière de cette technologie reste encore limitée au grand public.",
    theme: "technologie",
    steps: [
      {
        question: "Quelle est la population française adulte (plus de 15 ans) ?",
        correctAnswer: 55.8,
        unit: "millions",
        explanation: "La France compte environ 55,8 millions d'habitants de plus de 15 ans."
      },
      {
        question: "Quel pourcentage de cette population a déjà essayé un casque de réalité virtuelle au moins une fois ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Environ 22% des Français adultes ont déjà essayé un casque de réalité virtuelle au moins une fois, que ce soit dans un cadre personnel, professionnel ou dans un lieu public."
      },
      {
        question: "Combien de Français ont donc déjà utilisé un casque de réalité virtuelle au moins une fois ?",
        correctAnswer: 12.3,
        unit: "millions",
        explanation: "En multipliant la population adulte (55,8 millions) par le pourcentage ayant essayé la réalité virtuelle (22%), on obtient environ 12,3 millions de personnes."
      }
    ]
  },
  {
    id: "tech-101",
    type: "simple",
    question: "Quel est le pourcentage de Français possédant un smartphone ?",
    correctAnswer: 84,
    unit: "%",
    explanation: "Environ 84% des Français possèdent un smartphone selon les dernières études sur l'équipement numérique des ménages.",
    theme: "technologie"
  },
  {
    id: "tech-102",
    type: "simple",
    question: "Quel est le temps moyen passé par jour sur Internet par les Français ?",
    correctAnswer: 4.8,
    unit: "heures",
    explanation: "Les Français passent en moyenne 4,8 heures par jour sur Internet, tous appareils confondus.",
    theme: "technologie"
  },
  {
    id: "tech-103",
    type: "simple",
    question: "Quel est le taux d'équipement des ménages français en ordinateurs ?",
    correctAnswer: 77,
    unit: "%",
    explanation: "Environ 77% des ménages français possèdent au moins un ordinateur à leur domicile.",
    theme: "technologie"
  },
  {
    id: "tech-104",
    type: "simple",
    question: "Quelle est la proportion de Français abonnés à une plateforme de streaming vidéo ?",
    correctAnswer: 62,
    unit: "%",
    explanation: "Environ 62% des Français sont abonnés à au moins une plateforme de streaming vidéo payante.",
    theme: "technologie"
  },
  {
    id: "tech-105",
    type: "simple",
    question: "Quel est le nombre moyen d'applications installées sur le smartphone d'un Français ?",
    correctAnswer: 28,
    unit: "applications",
    explanation: "Un utilisateur français a en moyenne 28 applications installées sur son smartphone, bien qu'il n'en utilise régulièrement qu'une dizaine.",
    theme: "technologie"
  },
  {
    id: "tech-106",
    type: "simple",
    question: "Quel pourcentage des achats en ligne en France est réalisé via un appareil mobile ?",
    correctAnswer: 41,
    unit: "%",
    explanation: "Environ 41% des achats en ligne en France sont réalisés via un appareil mobile (smartphone ou tablette).",
    theme: "technologie"
  },
  {
    id: "tech-107",
    type: "simple",
    question: "Quel est le pourcentage de foyers français équipés d'une enceinte connectée ?",
    correctAnswer: 15.6,
    unit: "%",
    explanation: "Environ 15,6% des foyers français sont équipés d'au moins une enceinte connectée avec assistant vocal.",
    theme: "technologie"
  },
  {
    id: "tech-108",
    type: "simple",
    question: "Quelle est la part du trafic internet mondial générée par les vidéos en streaming ?",
    correctAnswer: 65,
    unit: "%",
    explanation: "Les vidéos en streaming représentent environ 65% du trafic internet mondial.",
    theme: "technologie"
  },
  {
    id: "tech-109",
    type: "simple",
    question: "Quelle est la couverture du territoire français en 4G ?",
    correctAnswer: 98,
    unit: "%",
    explanation: "Environ 98% du territoire français est couvert par la 4G, suite aux efforts déployés dans le cadre du plan France Très Haut Débit.",
    theme: "technologie"
  },
  {
    id: "tech-110",
    type: "simple",
    question: "Quel pourcentage des adultes français utilisent au moins un réseau social ?",
    correctAnswer: 79,
    unit: "%",
    explanation: "Environ 79% des adultes français utilisent au moins un réseau social régulièrement.",
    theme: "technologie"
  }
];
