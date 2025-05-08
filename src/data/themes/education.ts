
import { Question, MultiStepQuestion } from "@/components/types";

export const educationQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "edu1",
    type: "multistep",
    question: "Combien d'élèves sont scolarisés dans des établissements privés en France ?",
    finalExplanation: "Environ 2,2 millions d'élèves sont scolarisés dans des établissements privés en France, ce qui représente environ 17% des effectifs scolaires totaux.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés en France (tous établissements confondus) ?",
        correctAnswer: 12.8,
        unit: "millions",
        explanation: "Environ 12,8 millions d'élèves sont scolarisés en France dans l'enseignement primaire et secondaire."
      },
      {
        question: "Quel pourcentage de ces élèves fréquente des établissements privés ?",
        correctAnswer: 17,
        unit: "%",
        explanation: "Environ 17% des élèves français sont scolarisés dans le secteur privé."
      },
      {
        question: "Combien d'élèves sont donc scolarisés dans des établissements privés ?",
        correctAnswer: 2.2,
        unit: "millions",
        explanation: "En multipliant le nombre total d'élèves (12,8 millions) par le pourcentage dans le privé (17%), on obtient environ 2,2 millions d'élèves."
      }
    ]
  },
  {
    id: "edu2",
    type: "multistep",
    question: "Combien d'enseignants du secondaire préparent des copies à corriger chaque soir en semaine ?",
    finalExplanation: "Environ 280 000 enseignants du secondaire préparent des copies à corriger chaque soir de semaine, une charge de travail importante qui s'ajoute à leurs heures de cours.",
    theme: "education",
    steps: [
      {
        question: "Combien d'enseignants travaillent dans l'enseignement secondaire en France ?",
        correctAnswer: 400000,
        unit: "enseignants",
        explanation: "Environ 400 000 enseignants travaillent dans l'enseignement secondaire (collèges et lycées) en France."
      },
      {
        question: "Quel pourcentage de ces enseignants enseigne des matières nécessitant des corrections régulières de copies ?",
        correctAnswer: 80,
        unit: "%",
        explanation: "Environ 80% des enseignants du secondaire enseignent des matières nécessitant des corrections régulières (français, mathématiques, histoire-géographie, langues, sciences...)."
      },
      {
        question: "Parmi ces enseignants, quel pourcentage a des copies à corriger un soir donné en semaine ?",
        correctAnswer: 70,
        unit: "%", 
        explanation: "En moyenne, 70% des enseignants concernés ont des copies à corriger un soir donné en semaine."
      },
      {
        question: "Combien d'enseignants du secondaire préparent donc des copies à corriger chaque soir en semaine ?",
        correctAnswer: 280000,
        unit: "enseignants",
        explanation: "En multipliant le nombre total d'enseignants du secondaire (400 000) par le pourcentage enseignant des matières avec copies (80%) puis par le pourcentage ayant des copies un soir donné (70%), on obtient environ 280 000 enseignants."
      }
    ]
  },
  {
    id: "edu3",
    type: "multistep",
    question: "Combien d'étudiants sont inscrits en licence dans des universités publiques ?",
    finalExplanation: "Environ 1,1 million d'étudiants sont inscrits en licence dans les universités publiques françaises, constituant la majorité des effectifs universitaires.",
    theme: "education",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France selon les données du Ministère de l'Enseignement Supérieur."
      },
      {
        question: "Quel pourcentage de ces étudiants fréquente les universités publiques ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des étudiants de l'enseignement supérieur sont inscrits dans des universités publiques."
      },
      {
        question: "Parmi les étudiants universitaires, quel pourcentage est inscrit en licence ?",
        correctAnswer: 60,
        unit: "%",
        explanation: "Environ 60% des étudiants universitaires sont inscrits en licence (L1, L2, L3)."
      },
      {
        question: "Combien d'étudiants sont donc inscrits en licence dans des universités publiques ?",
        correctAnswer: 1.1,
        unit: "million",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage en université publique (62%) puis par le pourcentage en licence (60%), on obtient environ 1,1 million d'étudiants."
      }
    ]
  },
  {
    id: "edu4",
    type: "multistep",
    question: "Combien d'heures de cours un lycéen reçoit-il en moyenne par semaine ?",
    finalExplanation: "Un lycéen français reçoit en moyenne 30 heures de cours par semaine, avec des variations selon les filières et les options choisies.",
    theme: "education",
    steps: [
      {
        question: "Combien d'heures de cours hebdomadaires sont prévues pour un lycéen en filière générale ?",
        correctAnswer: 28,
        unit: "heures",
        explanation: "Un lycéen en filière générale reçoit environ 28 heures de cours hebdomadaires selon les programmes officiels de l'Éducation nationale."
      },
      {
        question: "Combien d'heures de cours hebdomadaires sont prévues pour un lycéen en filière technologique ?",
        correctAnswer: 30,
        unit: "heures",
        explanation: "Un lycéen en filière technologique reçoit environ 30 heures de cours hebdomadaires."
      },
      {
        question: "Combien d'heures de cours hebdomadaires sont prévues pour un lycéen en filière professionnelle ?",
        correctAnswer: 33,
        unit: "heures",
        explanation: "Un lycéen en filière professionnelle reçoit environ 33 heures de cours et d'ateliers pratiques hebdomadaires."
      },
      {
        question: "Quelle proportion des lycéens est en filière générale, technologique et professionnelle ?",
        correctAnswer: 60,
        unit: "% en général",
        explanation: "Environ 60% des lycéens sont en filière générale, 16% en filière technologique et 24% en filière professionnelle."
      },
      {
        question: "Combien d'heures de cours un lycéen reçoit-il en moyenne par semaine, toutes filières confondues ?",
        correctAnswer: 30,
        unit: "heures",
        explanation: "En calculant la moyenne pondérée ((28×60% + 30×16% + 33×24%)/100), on obtient environ 30 heures de cours par semaine."
      }
    ]
  },
  {
    id: "edu5",
    type: "multistep",
    question: "Combien de jeunes de moins de 18 ans bénéficient de soutien scolaire privé ?",
    finalExplanation: "Environ 1,3 million de jeunes de moins de 18 ans bénéficient de soutien scolaire privé en France, que ce soit sous forme de cours particuliers, de stages ou d'accompagnement en ligne.",
    theme: "education",
    steps: [
      {
        question: "Combien de jeunes de moins de 18 ans sont scolarisés en France ?",
        correctAnswer: 12,
        unit: "millions",
        explanation: "Environ 12 millions de jeunes de moins de 18 ans sont scolarisés en France."
      },
      {
        question: "Quel pourcentage des familles ayant des enfants scolarisés font appel à du soutien scolaire privé ?",
        correctAnswer: 18,
        unit: "%",
        explanation: "Environ 18% des familles ayant des enfants scolarisés font appel à du soutien scolaire privé sous diverses formes."
      },
      {
        question: "Combien d'enfants en moyenne par famille bénéficient de ce soutien scolaire ?",
        correctAnswer: 1.3,
        unit: "enfants",
        explanation: "En moyenne, 1,3 enfant par famille bénéficie de ce soutien scolaire lorsque la famille y a recours."
      },
      {
        question: "Combien de familles ont des enfants scolarisés en France ?",
        correctAnswer: 6,
        unit: "millions",
        explanation: "Environ 6 millions de familles ont des enfants scolarisés en France."
      },
      {
        question: "Combien de jeunes de moins de 18 ans bénéficient donc de soutien scolaire privé ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre de familles ayant des enfants scolarisés (6 millions) par le pourcentage faisant appel au soutien scolaire (18%) puis par le nombre moyen d'enfants concernés par famille (1,3), on obtient environ 1,3 million de jeunes."
      }
    ]
  },
  {
    id: "edu6",
    type: "multistep",
    question: "Combien de professeurs des écoles exercent dans des zones rurales ?",
    finalExplanation: "Environ 72 000 professeurs des écoles exercent dans des zones rurales en France, contribuant au maintien d'un service public d'éducation de proximité sur l'ensemble du territoire.",
    theme: "education",
    steps: [
      {
        question: "Combien de professeurs des écoles (enseignants du primaire) exercent en France ?",
        correctAnswer: 360000,
        unit: "professeurs",
        explanation: "Environ 360 000 professeurs des écoles exercent en France selon les données du Ministère de l'Éducation nationale."
      },
      {
        question: "Quel pourcentage de la population française vit en zone rurale ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% de la population française vit en zone rurale."
      },
      {
        question: "Quel pourcentage des écoles primaires sont situées en zone rurale ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des écoles primaires sont situées en zone rurale, la proportion étant plus élevée que celle de la population car les écoles rurales ont généralement moins d'élèves par établissement."
      },
      {
        question: "Quelle est la proportion d'enseignants du primaire exerçant en zone rurale ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des professeurs des écoles exercent en zone rurale, une proportion légèrement inférieure à celle des écoles rurales car ces établissements comptent moins d'élèves et donc moins d'enseignants par école."
      },
      {
        question: "Combien de professeurs des écoles exercent donc dans des zones rurales ?",
        correctAnswer: 72000,
        unit: "professeurs",
        explanation: "En multipliant le nombre total de professeurs des écoles (360 000) par le pourcentage exerçant en zone rurale (20%), on obtient environ 72 000 professeurs."
      }
    ]
  },
  {
    id: "edu7",
    type: "multistep",
    question: "Combien d'élèves mangent à la cantine chaque jour en France ?",
    finalExplanation: "Environ 7 millions d'élèves mangent à la cantine chaque jour en France, ce qui représente un service public essentiel pour de nombreuses familles.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France ?",
        correctAnswer: 12.8,
        unit: "millions",
        explanation: "Environ 12,8 millions d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France."
      },
      {
        question: "Quel pourcentage d'élèves du primaire mange à la cantine ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des élèves du primaire mangent à la cantine."
      },
      {
        question: "Quel pourcentage d'élèves du secondaire mange à la cantine ?",
        correctAnswer: 45,
        unit: "%",
        explanation: "Environ 45% des élèves du secondaire mangent à la cantine, un pourcentage plus faible car certains rentrent chez eux ou ont d'autres solutions de restauration."
      },
      {
        question: "Quelle proportion des élèves est au primaire et au secondaire ?",
        correctAnswer: 55,
        unit: "% au primaire",
        explanation: "Environ 55% des élèves sont au primaire et 45% au secondaire."
      },
      {
        question: "Combien d'élèves mangent donc à la cantine chaque jour en France ?",
        correctAnswer: 7,
        unit: "millions",
        explanation: "En calculant ((12,8 millions × 55% × 62%) + (12,8 millions × 45% × 45%)), on obtient environ 7 millions d'élèves."
      }
    ]
  },
  {
    id: "edu8",
    type: "multistep",
    question: "Combien d'étudiants étrangers étudient dans les établissements d'enseignement supérieur français ?",
    finalExplanation: "Environ 370 000 étudiants étrangers étudient dans les établissements d'enseignement supérieur français, contribuant à l'attractivité et au rayonnement international du système éducatif français.",
    theme: "education",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage d'étudiants dans l'enseignement supérieur sont étrangers ?",
        correctAnswer: 12.8,
        unit: "%",
        explanation: "Environ 12,8% des étudiants de l'enseignement supérieur français sont de nationalité étrangère."
      },
      {
        question: "Combien d'étudiants étrangers étudient donc dans les établissements d'enseignement supérieur français ?",
        correctAnswer: 370000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage d'étudiants étrangers (12,8%), on obtient environ 370 000 étudiants étrangers."
      }
    ]
  },
  {
    id: "edu9",
    type: "multistep",
    question: "Combien de manuels scolaires sont vendus à chaque rentrée scolaire ?",
    finalExplanation: "Environ 30 millions de manuels scolaires sont vendus à chaque rentrée scolaire en France, représentant un marché important pour l'édition française.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont concernés par l'achat de manuels scolaires en France ?",
        correctAnswer: 8,
        unit: "millions",
        explanation: "Environ 8 millions d'élèves (principalement collégiens et lycéens, ainsi que certains élèves du primaire) sont concernés par l'achat de manuels scolaires chaque année."
      },
      {
        question: "Combien de manuels différents un élève doit-il acheter en moyenne ?",
        correctAnswer: 6.5,
        unit: "manuels",
        explanation: "Un élève doit acheter en moyenne 6,5 manuels différents par an, selon son niveau et son parcours scolaire."
      },
      {
        question: "Quel pourcentage de ces manuels sont fournis par l'établissement ou la région dans certains cas ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des manuels sont fournis par les établissements ou les régions dans le cadre de programmes de gratuité des manuels dans certaines régions."
      },
      {
        question: "Combien de manuels scolaires sont donc vendus à chaque rentrée scolaire ?",
        correctAnswer: 30,
        unit: "millions",
        explanation: "En calculant le nombre total de manuels nécessaires (8 millions d'élèves × 6,5 manuels) puis en soustrayant la part fournie par les établissements (42%), on obtient environ 30 millions de manuels vendus."
      }
    ]
  },
  {
    id: "edu10",
    type: "multistep",
    question: "Combien d'enseignants-chercheurs publient au moins un article par an ?",
    finalExplanation: "Environ 42 000 enseignants-chercheurs publient au moins un article par an en France, contribuant à la production scientifique nationale.",
    theme: "education",
    steps: [
      {
        question: "Combien d'enseignants-chercheurs sont en poste dans les universités françaises ?",
        correctAnswer: 60000,
        unit: "enseignants-chercheurs",
        explanation: "Environ 60 000 enseignants-chercheurs (maîtres de conférences et professeurs des universités) sont en poste dans les universités françaises."
      },
      {
        question: "Quel pourcentage de ces enseignants-chercheurs publie au moins un article par an ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Environ 70% des enseignants-chercheurs publient au moins un article par an dans des revues scientifiques ou actes de colloques."
      },
      {
        question: "Combien d'enseignants-chercheurs publient donc au moins un article par an ?",
        correctAnswer: 42000,
        unit: "enseignants-chercheurs",
        explanation: "En multipliant le nombre total d'enseignants-chercheurs (60 000) par le pourcentage publiant régulièrement (70%), on obtient environ 42 000 enseignants-chercheurs."
      }
    ]
  },
  {
    id: "edu11",
    type: "multistep",
    question: "Combien de jeunes de 16 à 25 ans sont en apprentissage ?",
    finalExplanation: "Environ 850 000 jeunes de 16 à 25 ans sont en apprentissage en France, un nombre qui a fortement augmenté ces dernières années grâce aux politiques de promotion de cette voie de formation.",
    theme: "education",
    steps: [
      {
        question: "Combien de jeunes ont entre 16 et 25 ans en France ?",
        correctAnswer: 7.6,
        unit: "millions",
        explanation: "Environ 7,6 millions de jeunes ont entre 16 et 25 ans en France selon les données démographiques."
      },
      {
        question: "Quel pourcentage de cette tranche d'âge suit une formation en alternance ou en apprentissage ?",
        correctAnswer: 11.2,
        unit: "%",
        explanation: "Environ 11,2% des jeunes de 16 à 25 ans suivent une formation en alternance ou en apprentissage."
      },
      {
        question: "Combien de jeunes de 16 à 25 ans sont donc en apprentissage ?",
        correctAnswer: 850000,
        unit: "jeunes",
        explanation: "En multipliant le nombre total de jeunes de 16 à 25 ans (7,6 millions) par le pourcentage en apprentissage (11,2%), on obtient environ 850 000 jeunes."
      }
    ]
  },
  {
    id: "edu12",
    type: "multistep",
    question: "Combien de collégiens suivent des cours dans une langue vivante autre que l'anglais ?",
    finalExplanation: "Environ 3,2 millions de collégiens suivent des cours dans une langue vivante autre que l'anglais en France, principalement l'espagnol et l'allemand, mais aussi l'italien, le chinois et d'autres langues.",
    theme: "education",
    steps: [
      {
        question: "Combien de collégiens sont scolarisés en France ?",
        correctAnswer: 3.4,
        unit: "millions",
        explanation: "Environ 3,4 millions de collégiens sont scolarisés en France."
      },
      {
        question: "Quel pourcentage de collégiens apprend l'anglais comme première langue vivante ?",
        correctAnswer: 96,
        unit: "%",
        explanation: "Environ 96% des collégiens apprennent l'anglais comme première langue vivante."
      },
      {
        question: "Quel pourcentage de collégiens apprend une deuxième langue vivante ?",
        correctAnswer: 98,
        unit: "%",
        explanation: "Environ 98% des collégiens apprennent une deuxième langue vivante à partir de la 5ème."
      },
      {
        question: "Combien de collégiens suivent donc des cours dans une langue vivante autre que l'anglais ?",
        correctAnswer: 3.2,
        unit: "millions",
        explanation: "En calculant le nombre total de collégiens qui suivent une LV2 (3,4 millions × 98% × 96%), on obtient environ 3,2 millions de collégiens."
      }
    ]
  },
  {
    id: "edu13",
    type: "multistep",
    question: "Combien de Français passent un concours de la fonction publique chaque année ?",
    finalExplanation: "Environ 1,5 million de Français passent un concours de la fonction publique chaque année, témoignant de l'attractivité des emplois publics dans le pays.",
    theme: "education",
    steps: [
      {
        question: "Combien de postes sont ouverts aux concours de la fonction publique chaque année ?",
        correctAnswer: 60000,
        unit: "postes",
        explanation: "Environ 60 000 postes sont ouverts chaque année aux concours des trois fonctions publiques (d'État, territoriale et hospitalière)."
      },
      {
        question: "Quel est le ratio moyen entre le nombre de candidats et le nombre de postes ?",
        correctAnswer: 25,
        unit: "candidats par poste",
        explanation: "En moyenne, on compte environ 25 candidats pour chaque poste ouvert aux concours de la fonction publique."
      },
      {
        question: "Combien de Français passent donc un concours de la fonction publique chaque année ?",
        correctAnswer: 1.5,
        unit: "million",
        explanation: "En multipliant le nombre de postes ouverts (60 000) par le ratio candidats/postes (25), on obtient environ 1,5 million de candidats."
      }
    ]
  },
  {
    id: "edu14",
    type: "multistep",
    question: "Combien d'étudiants passent le bac pro en France chaque année ?",
    finalExplanation: "Environ 190 000 étudiants passent le baccalauréat professionnel chaque année en France, une voie qui prépare à la fois à l'insertion professionnelle et à la poursuite d'études.",
    theme: "education",
    steps: [
      {
        question: "Combien de candidats passent le baccalauréat (toutes séries) chaque année en France ?",
        correctAnswer: 740000,
        unit: "candidats",
        explanation: "Environ 740 000 candidats passent le baccalauréat chaque année en France."
      },
      {
        question: "Quelle est la répartition des candidats selon les différentes voies du baccalauréat ?",
        correctAnswer: 53,
        unit: "% en général",
        explanation: "Environ 53% des candidats passent le bac général, 21% le bac technologique et 26% le bac professionnel."
      },
      {
        question: "Combien d'étudiants passent donc le bac pro en France chaque année ?",
        correctAnswer: 190000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total de candidats au baccalauréat (740 000) par le pourcentage de candidats au bac pro (26%), on obtient environ 190 000 étudiants."
      }
    ]
  },
  {
    id: "edu15",
    type: "multistep",
    question: "Combien d'élèves suivent une scolarité dans un établissement international ou bilingue ?",
    finalExplanation: "Environ 330 000 élèves suivent une scolarité dans un établissement international ou proposant une section bilingue en France, témoignant d'un intérêt croissant pour ce type d'enseignement.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France ?",
        correctAnswer: 12.8,
        unit: "millions",
        explanation: "Environ 12,8 millions d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France."
      },
      {
        question: "Quel pourcentage d'établissements scolaires proposent des sections internationales ou bilingues ?",
        correctAnswer: 4.2,
        unit: "%",
        explanation: "Environ 4,2% des établissements scolaires en France proposent des sections internationales ou bilingues."
      },
      {
        question: "Dans ces établissements, quel pourcentage moyen d'élèves suit effectivement le programme international ou bilingue ?",
        correctAnswer: 61,
        unit: "%",
        explanation: "En moyenne, 61% des élèves inscrits dans ces établissements suivent effectivement le programme international ou bilingue, les autres suivant le programme classique."
      },
      {
        question: "Combien d'élèves suivent donc une scolarité dans un établissement international ou bilingue ?",
        correctAnswer: 330000,
        unit: "élèves",
        explanation: "En multipliant le nombre total d'élèves (12,8 millions) par le pourcentage d'établissements concernés (4,2%) puis par le taux de participation au programme (61%), on obtient environ 330 000 élèves."
      }
    ]
  },
  {
    id: "edu16",
    type: "multistep",
    question: "Combien de jeunes abandonnent leurs études supérieures après la première année ?",
    finalExplanation: "Environ 155 000 jeunes abandonnent leurs études supérieures après la première année en France, un phénomène qui reste un défi majeur pour le système d'enseignement supérieur.",
    theme: "education",
    steps: [
      {
        question: "Combien d'étudiants entrent chaque année dans l'enseignement supérieur en France ?",
        correctAnswer: 515000,
        unit: "étudiants",
        explanation: "Environ 515 000 étudiants entrent chaque année dans l'enseignement supérieur français après le baccalauréat."
      },
      {
        question: "Quel pourcentage d'étudiants abandonne leurs études supérieures après la première année ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des étudiants abandonnent leurs études supérieures après la première année, que ce soit pour se réorienter ou quitter définitivement l'enseignement supérieur."
      },
      {
        question: "Combien de jeunes abandonnent donc leurs études supérieures après la première année ?",
        correctAnswer: 155000,
        unit: "jeunes",
        explanation: "En multipliant le nombre d'étudiants entrants (515 000) par le taux d'abandon (30%), on obtient environ 155 000 jeunes."
      }
    ]
  },
  {
    id: "edu17",
    type: "multistep",
    question: "Combien de personnes suivent une formation professionnelle financée par le CPF chaque année ?",
    finalExplanation: "Environ 1,3 million de personnes suivent une formation professionnelle financée par le Compte Personnel de Formation (CPF) chaque année en France, un dispositif qui s'est considérablement développé depuis sa réforme en 2019.",
    theme: "education",
    steps: [
      {
        question: "Combien de personnes actives (en emploi ou en recherche d'emploi) y a-t-il en France ?",
        correctAnswer: 30.5,
        unit: "millions",
        explanation: "La France compte environ 30,5 millions de personnes actives (en emploi ou en recherche d'emploi)."
      },
      {
        question: "Quel pourcentage de la population active possède un compte CPF ?",
        correctAnswer: 98,
        unit: "%",
        explanation: "Environ 98% des personnes actives possèdent un compte CPF, automatiquement créé pour toute personne entrant sur le marché du travail."
      },
      {
        question: "Parmi les détenteurs d'un compte CPF, quel pourcentage l'utilise pour financer une formation chaque année ?",
        correctAnswer: 4.3,
        unit: "%",
        explanation: "Environ 4,3% des détenteurs d'un compte CPF l'utilisent pour financer une formation chaque année."
      },
      {
        question: "Combien de personnes suivent donc une formation professionnelle financée par le CPF chaque année ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre de personnes actives (30,5 millions) par le taux de possession d'un CPF (98%) puis par le taux d'utilisation annuel (4,3%), on obtient environ 1,3 million de personnes."
      }
    ]
  },
  {
    id: "edu18",
    type: "multistep",
    question: "Combien d'étudiants vivent en résidence universitaire ?",
    finalExplanation: "Environ 175 000 étudiants vivent en résidence universitaire en France, bien que ce chiffre reste insuffisant par rapport à la demande de logements étudiants abordables.",
    theme: "education",
    steps: [
      {
        question: "Combien d'étudiants sont inscrits dans l'enseignement supérieur en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "Environ 2,9 millions d'étudiants sont inscrits dans l'enseignement supérieur en France."
      },
      {
        question: "Quel pourcentage d'étudiants ne vivent plus chez leurs parents ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des étudiants français ne vivent plus chez leurs parents et doivent donc trouver un logement."
      },
      {
        question: "Parmi les étudiants ayant quitté le domicile parental, quel pourcentage vit en résidence universitaire ?",
        correctAnswer: 9,
        unit: "%",
        explanation: "Environ 9% des étudiants ayant quitté le domicile parental vivent en résidence universitaire (CROUS ou résidence privée)."
      },
      {
        question: "Combien d'étudiants vivent donc en résidence universitaire ?",
        correctAnswer: 175000,
        unit: "étudiants",
        explanation: "En multipliant le nombre total d'étudiants (2,9 millions) par le pourcentage vivant hors du domicile parental (68%) puis par le pourcentage en résidence universitaire (9%), on obtient environ 175 000 étudiants."
      }
    ]
  },
  {
    id: "edu19",
    type: "multistep",
    question: "Combien d'élèves suivent un enseignement à distance ou en école en ligne ?",
    finalExplanation: "Environ 290 000 élèves suivent un enseignement à distance ou en école en ligne en France, une tendance qui s'est accélérée depuis la crise sanitaire.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France ?",
        correctAnswer: 12.8,
        unit: "millions",
        explanation: "Environ 12,8 millions d'élèves sont scolarisés dans l'enseignement primaire et secondaire en France."
      },
      {
        question: "Quel pourcentage d'élèves est inscrit au CNED (Centre National d'Enseignement à Distance) ?",
        correctAnswer: 1.2,
        unit: "%",
        explanation: "Environ 1,2% des élèves sont inscrits au CNED pour suivre un enseignement à distance."
      },
      {
        question: "Quel pourcentage d'élèves suit un enseignement en ligne via d'autres structures (écoles privées en ligne, plateforme d'enseignement virtuel) ?",
        correctAnswer: 1.1,
        unit: "%",
        explanation: "Environ 1,1% des élèves suivent un enseignement en ligne via d'autres structures que le CNED."
      },
      {
        question: "Combien d'élèves suivent donc un enseignement à distance ou en école en ligne ?",
        correctAnswer: 290000,
        unit: "élèves",
        explanation: "En additionnant les pourcentages (1,2% + 1,1%) puis en multipliant par le nombre total d'élèves (12,8 millions), on obtient environ 290 000 élèves."
      }
    ]
  },
  {
    id: "edu20",
    type: "multistep",
    question: "Combien d'élèves bénéficient d'un dispositif d'accompagnement personnalisé au primaire ?",
    finalExplanation: "Environ 680 000 élèves bénéficient d'un dispositif d'accompagnement personnalisé à l'école primaire en France, une mesure importante pour lutter contre les difficultés scolaires précoces.",
    theme: "education",
    steps: [
      {
        question: "Combien d'élèves sont scolarisés à l'école primaire en France ?",
        correctAnswer: 6.8,
        unit: "millions",
        explanation: "Environ 6,8 millions d'élèves sont scolarisés à l'école primaire (maternelle et élémentaire) en France."
      },
      {
        question: "Quel pourcentage d'élèves du primaire rencontre des difficultés d'apprentissage nécessitant un accompagnement personnalisé ?",
        correctAnswer: 12.5,
        unit: "%",
        explanation: "Environ 12,5% des élèves du primaire rencontrent des difficultés d'apprentissage nécessitant un accompagnement personnalisé."
      },
      {
        question: "Parmi ces élèves en difficulté, quel pourcentage bénéficie effectivement d'un dispositif d'accompagnement ?",
        correctAnswer: 80,
        unit: "%",
        explanation: "Environ 80% des élèves identifiés comme étant en difficulté bénéficient effectivement d'un dispositif d'accompagnement personnalisé (RASED, PPRE, APC...)."
      },
      {
        question: "Combien d'élèves bénéficient donc d'un dispositif d'accompagnement personnalisé au primaire ?",
        correctAnswer: 680000,
        unit: "élèves",
        explanation: "En multipliant le nombre d'élèves du primaire (6,8 millions) par le pourcentage en difficulté (12,5%) puis par le taux de couverture des dispositifs (80%), on obtient environ 680 000 élèves."
      }
    ]
  }
];
