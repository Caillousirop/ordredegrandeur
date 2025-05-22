import { Question, MultiStepQuestion } from "@/components/types";

export const emploiQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "20",
    question: "Quel est le nombre d'heures travaillées en moyenne par semaine en France ?",
    correctAnswer: 35.6,
    unit: "heures",
    explanation: "Selon l'INSEE, les Français travaillent en moyenne 35,6 heures par semaine (tous types de contrats confondus).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "21",
    question: "Quel est le salaire médian mensuel net en France en 2023 ?",
    correctAnswer: 1940,
    unit: "€",
    explanation: "Le salaire médian mensuel net en France est d'environ 1 940 euros selon les données de l'INSEE.",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "22",
    type: "multistep",
    question: "Combien de jours de congés payés sont pris en moyenne par les Français chaque année ?",
    finalExplanation: "Les Français prennent en moyenne 37 jours de congés payés par an (incluant RTT et congés payés standards).",
    theme: "emploi",
    steps: [
      {
        question: "Quel est le nombre minimum légal de jours de congés payés en France ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Le minimum légal de congés payés en France est de 25 jours ouvrés (5 semaines)."
      },
      {
        question: "Combien de jours RTT un salarié français reçoit-il en moyenne par an ?",
        correctAnswer: 12,
        unit: "jours",
        explanation: "Un salarié français reçoit en moyenne 12 jours RTT par an, selon les statistiques du Ministère du Travail."
      },
      {
        question: "Combien de jours de congés payés (RTT inclus) sont pris en moyenne par an ?",
        correctAnswer: 37,
        unit: "jours",
        explanation: "En moyenne, les Français prennent 37 jours de congés par an, en additionnant les congés payés standards et les RTT."
      }
    ]
  },
  {
    id: "28",
    question: "Quel pourcentage des emplois en France sont dans le secteur tertiaire (services) ?",
    correctAnswer: 76.8,
    unit: "%",
    explanation: "Selon l'INSEE, 76,8% des emplois en France sont dans le secteur tertiaire (services).",
    type: "simple",
    theme: "emploi"
  },
  {
    id: "31",
    type: "multistep",
    question: "Combien de congés payés sont pris en moyenne par les Français de moins de 40 ans en région Bretagne ?",
    finalExplanation: "Cette estimation de 725 000 jours de congés payés est une approximation basée sur la population bretonne de moins de 40 ans, le taux d'activité professionnelle et les habitudes de prise de congés dans cette région. Les chiffres réels peuvent varier selon les secteurs d'activité, les conventions collectives et les pratiques individuelles.",
    theme: "emploi",
    steps: [
      {
        question: "Quelle est la population totale de la Bretagne ?",
        correctAnswer: 3.35,
        unit: "millions",
        explanation: "La Bretagne compte environ 3,35 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Quel pourcentage de cette population a moins de 40 ans ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% de la population bretonne a moins de 40 ans selon la pyramide des âges régionale."
      },
      {
        question: "Parmi cette population de moins de 40 ans, quel pourcentage est en activité professionnelle ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Le taux d'activité professionnelle des moins de 40 ans en Bretagne est d'environ 72% selon les statistiques de l'emploi régional."
      },
      {
        question: "Combien de jours de congés payés sont pris en moyenne par an par ces personnes ?",
        correctAnswer: 25,
        unit: "jours",
        explanation: "Les actifs de moins de 40 ans en Bretagne prennent en moyenne 25 jours de congés payés par an, légèrement en-dessous de la moyenne nationale."
      },
      {
        question: "Combien de jours de congés payés sont pris au total par les Bretons de moins de 40 ans ?",
        correctAnswer: 725000,
        unit: "jours",
        explanation: "En multipliant la population totale (3,35 millions) par le pourcentage de moins de 40 ans (43%) par le taux d'activité (72%) par le nombre de jours de congés (25), on obtient environ 725 000 jours de congés payés."
      }
    ]
  },
  {
    id: "emp1",
    type: "multistep",
    question: "Combien de personnes travaillent en télétravail au moins un jour par semaine en France ?",
    finalExplanation: "Environ 8,4 millions de personnes travaillent en télétravail au moins un jour par semaine en France, une pratique qui s'est considérablement développée depuis la crise sanitaire.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (ayant un emploi) y a-t-il en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs occupent un poste compatible avec le télétravail ?",
        correctAnswer: 41,
        unit: "%",
        explanation: "Environ 41% des actifs français occupent un poste dont les tâches sont compatibles avec le télétravail (principalement dans le secteur tertiaire)."
      },
      {
        question: "Parmi ces travailleurs ayant un poste compatible, quel pourcentage pratique effectivement le télétravail au moins un jour par semaine ?",
        correctAnswer: 72,
        unit: "%",
        explanation: "Environ 72% des travailleurs ayant un poste compatible pratiquent effectivement le télétravail au moins un jour par semaine."
      },
      {
        question: "Combien de personnes travaillent en télétravail au moins un jour par semaine en France ?",
        correctAnswer: 8.4,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs occupés (28,5 millions) par le pourcentage de postes compatibles (41%) puis par le taux de pratique effective (72%), on obtient environ 8,4 millions de personnes."
      }
    ]
  },
  {
    id: "emp2",
    type: "multistep",
    question: "Combien de salariés français ont un contrat à temps partiel ?",
    finalExplanation: "Environ 4,6 millions de salariés français ont un contrat à temps partiel, une forme d'emploi qui concerne principalement les femmes et certains secteurs d'activité comme les services à la personne.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de salariés en France ?",
        correctAnswer: 25.4,
        unit: "millions",
        explanation: "La France compte environ 25,4 millions de salariés (hors indépendants et non-salariés) selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces salariés travaille à temps partiel ?",
        correctAnswer: 18.1,
        unit: "%",
        explanation: "Environ 18,1% des salariés français travaillent à temps partiel selon les statistiques de l'emploi."
      },
      {
        question: "Combien de salariés français ont un contrat à temps partiel ?",
        correctAnswer: 4.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de salariés (25,4 millions) par le pourcentage à temps partiel (18,1%), on obtient environ 4,6 millions de salariés."
      }
    ]
  },
  {
    id: "emp3",
    type: "multistep",
    question: "Combien de jeunes de moins de 25 ans occupent un emploi en CDI ?",
    finalExplanation: "Environ 1,3 million de jeunes de moins de 25 ans occupent un emploi en CDI en France, une proportion relativement faible qui illustre les difficultés d'insertion professionnelle stable pour cette tranche d'âge.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de jeunes de moins de 25 ans sont en emploi (tous types de contrats confondus) ?",
        correctAnswer: 2.1,
        unit: "millions",
        explanation: "Environ 2,1 millions de jeunes de moins de 25 ans sont en emploi en France selon les données de l'INSEE et de la DARES."
      },
      {
        question: "Quel pourcentage de ces jeunes en emploi bénéficient d'un contrat à durée indéterminée (CDI) ?",
        correctAnswer: 62,
        unit: "%",
        explanation: "Environ 62% des jeunes de moins de 25 ans en emploi bénéficient d'un contrat à durée indéterminée, les autres étant en CDD, intérim, apprentissage ou autres formes de contrats."
      },
      {
        question: "Combien de jeunes de moins de 25 ans occupent un emploi en CDI ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre de jeunes en emploi (2,1 millions) par le pourcentage en CDI (62%), on obtient environ 1,3 million de jeunes."
      }
    ]
  },
  {
    id: "emp4",
    type: "multistep",
    question: "Combien d'offres d'emploi sont publiées chaque jour sur les grandes plateformes françaises (Pôle emploi, Indeed, Apec…) ?",
    finalExplanation: "Environ 52 000 offres d'emploi sont publiées chaque jour sur les grandes plateformes françaises, un chiffre qui fluctue selon les saisons et la conjoncture économique.",
    theme: "emploi",
    steps: [
      {
        question: "Combien d'offres d'emploi sont publiées chaque mois sur l'ensemble des plateformes de recherche d'emploi en France ?",
        correctAnswer: 1.56,
        unit: "million",
        explanation: "Environ 1,56 million d'offres d'emploi sont publiées chaque mois sur l'ensemble des plateformes de recherche d'emploi en France."
      },
      {
        question: "Quel est le nombre moyen de jours ouvrés dans un mois ?",
        correctAnswer: 21,
        unit: "jours",
        explanation: "Un mois compte en moyenne 21 jours ouvrés en France (hors week-ends et jours fériés)."
      },
      {
        question: "Combien d'offres d'emploi sont publiées chaque jour sur les grandes plateformes françaises ?",
        correctAnswer: 52000,
        unit: "offres",
        explanation: "En divisant le nombre mensuel d'offres (1,56 million) par le nombre de jours ouvrés (21), puis en arrondissant légèrement pour tenir compte des fluctuations, on obtient environ 52 000 offres par jour."
      }
    ]
  },
  {
    id: "emp5",
    type: "multistep",
    question: "Combien de Français changent d'employeur chaque année ?",
    finalExplanation: "Environ 4,2 millions de Français changent d'employeur chaque année, illustrant une mobilité professionnelle en hausse dans un marché de l'emploi en constante évolution.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de salariés en France ?",
        correctAnswer: 25.4,
        unit: "millions",
        explanation: "La France compte environ 25,4 millions de salariés selon les données de l'INSEE."
      },
      {
        question: "Quel est le taux de rotation annuel moyen de l'emploi en France (pourcentage de salariés changeant d'employeur) ?",
        correctAnswer: 16.5,
        unit: "%",
        explanation: "Le taux de rotation annuel moyen de l'emploi en France est d'environ 16,5%, ce qui inclut les changements volontaires et involontaires d'employeur."
      },
      {
        question: "Combien de Français changent d'employeur chaque année ?",
        correctAnswer: 4.2,
        unit: "millions",
        explanation: "En multipliant le nombre total de salariés (25,4 millions) par le taux de rotation annuel (16,5%), on obtient environ 4,2 millions de personnes."
      }
    ]
  },
  {
    id: "emp6",
    type: "multistep",
    question: "Combien de personnes exercent un métier dans le numérique en France ?",
    finalExplanation: "Environ 925 000 personnes exercent un métier dans le numérique en France, un secteur en forte croissance qui continue de recruter malgré les tensions économiques.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (ayant un emploi) y a-t-il en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs occupés travaille dans le secteur du numérique au sens large ?",
        correctAnswer: 3.25,
        unit: "%",
        explanation: "Environ 3,25% des actifs occupés travaillent dans le secteur du numérique au sens large (développement, infrastructure, data, cybersécurité, etc.)."
      },
      {
        question: "Combien de personnes exercent un métier dans le numérique en France ?",
        correctAnswer: 925000,
        unit: "personnes",
        explanation: "En multipliant le nombre d'actifs occupés (28,5 millions) par le pourcentage travaillant dans le numérique (3,25%), on obtient environ 925 000 personnes."
      }
    ]
  },
  {
    id: "emp7",
    type: "multistep",
    question: "Combien de femmes travaillent dans le secteur du bâtiment et des travaux publics ?",
    finalExplanation: "Environ 316 000 femmes travaillent dans le secteur du bâtiment et des travaux publics en France, un chiffre en progression mais qui reste minoritaire dans ce secteur traditionnellement masculin.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes travaillent dans le secteur du bâtiment et des travaux publics (BTP) en France ?",
        correctAnswer: 1.58,
        unit: "million",
        explanation: "Environ 1,58 million de personnes travaillent dans le secteur du BTP en France selon les données de la Fédération Française du Bâtiment."
      },
      {
        question: "Quel pourcentage de ces travailleurs du BTP sont des femmes ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% des travailleurs du secteur du BTP sont des femmes, un pourcentage qui a augmenté ces dernières années mais reste minoritaire."
      },
      {
        question: "Combien de femmes travaillent dans le secteur du bâtiment et des travaux publics ?",
        correctAnswer: 316000,
        unit: "femmes",
        explanation: "En multipliant le nombre total de travailleurs du BTP (1,58 million) par le pourcentage de femmes (20%), on obtient environ 316 000 femmes."
      }
    ]
  },
  {
    id: "emp8",
    type: "multistep",
    question: "Combien de cadres franciliens prennent les transports en commun pour aller travailler ?",
    finalExplanation: "Environ 1,2 million de cadres franciliens prennent les transports en commun pour aller travailler, une proportion nettement plus élevée que dans le reste du pays grâce à la densité du réseau de transports en Île-de-France.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de cadres travaillent en Île-de-France ?",
        correctAnswer: 1.85,
        unit: "million",
        explanation: "Environ 1,85 million de cadres travaillent en Île-de-France selon les données de l'INSEE et de l'APEC."
      },
      {
        question: "Quel pourcentage de ces cadres franciliens utilisent principalement les transports en commun pour se rendre au travail ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% des cadres franciliens utilisent principalement les transports en commun pour se rendre au travail, un taux nettement supérieur à la moyenne nationale."
      },
      {
        question: "Combien de cadres franciliens prennent les transports en commun pour aller travailler ?",
        correctAnswer: 1.2,
        unit: "million",
        explanation: "En multipliant le nombre de cadres en Île-de-France (1,85 million) par le pourcentage utilisant les transports en commun (65%), on obtient environ 1,2 million de cadres."
      }
    ]
  },
  {
    id: "emp9",
    type: "multistep",
    question: "Combien de personnes cumulent emploi et retraite en France ?",
    finalExplanation: "Environ 520 000 personnes cumulent emploi et retraite en France, un phénomène qui tend à se développer avec l'allongement de l'espérance de vie et les réformes des retraites.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de retraités en France ?",
        correctAnswer: 16.8,
        unit: "millions",
        explanation: "La France compte environ 16,8 millions de retraités selon les données de la CNAV et de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces retraités exerce une activité professionnelle tout en percevant une pension ?",
        correctAnswer: 3.1,
        unit: "%",
        explanation: "Environ 3,1% des retraités exercent une activité professionnelle tout en percevant leur pension de retraite."
      },
      {
        question: "Combien de personnes cumulent emploi et retraite en France ?",
        correctAnswer: 520000,
        unit: "personnes",
        explanation: "En multipliant le nombre total de retraités (16,8 millions) par le pourcentage exerçant une activité professionnelle (3,1%), on obtient environ 520 000 personnes."
      }
    ]
  },
  {
    id: "emp10",
    type: "multistep",
    question: "Combien de personnes exercent un métier manuel en France ?",
    finalExplanation: "Environ 8,7 millions de personnes exercent un métier manuel en France, soit près d'un tiers des actifs occupés, dans des secteurs aussi variés que l'artisanat, l'industrie, le BTP ou l'agriculture.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (ayant un emploi) y a-t-il en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs occupés exerce un métier considéré comme manuel ?",
        correctAnswer: 30.5,
        unit: "%",
        explanation: "Environ 30,5% des actifs occupés exercent un métier considéré comme manuel (ouvriers, artisans, agriculteurs et certaines professions intermédiaires techniques)."
      },
      {
        question: "Combien de personnes exercent un métier manuel en France ?",
        correctAnswer: 8.7,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs occupés (28,5 millions) par le pourcentage exerçant un métier manuel (30,5%), on obtient environ 8,7 millions de personnes."
      }
    ]
  },
  {
    id: "emp11",
    type: "multistep",
    question: "Combien de salariés français travaillent le week-end ?",
    finalExplanation: "Environ 7,6 millions de salariés français travaillent régulièrement le week-end, principalement dans les secteurs du commerce, de l'hôtellerie-restauration, de la santé et des transports.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de salariés en France ?",
        correctAnswer: 25.4,
        unit: "millions",
        explanation: "La France compte environ 25,4 millions de salariés selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces salariés travaille régulièrement (au moins deux fois par mois) le week-end ?",
        correctAnswer: 30,
        unit: "%",
        explanation: "Environ 30% des salariés français travaillent régulièrement (au moins deux fois par mois) le week-end."
      },
      {
        question: "Combien de salariés français travaillent le week-end ?",
        correctAnswer: 7.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de salariés (25,4 millions) par le pourcentage travaillant le week-end (30%), on obtient environ 7,6 millions de salariés."
      }
    ]
  },
  {
    id: "emp12",
    type: "multistep",
    question: "Combien de personnes en France exercent une activité freelance ou indépendante ?",
    finalExplanation: "Environ 3,8 millions de personnes en France exercent une activité freelance ou indépendante, un statut qui attire de plus en plus d'actifs à la recherche d'autonomie professionnelle.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives (en emploi ou en recherche d'emploi) y a-t-il en France ?",
        correctAnswer: 30.5,
        unit: "millions",
        explanation: "La France compte environ 30,5 millions de personnes actives selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs exerce une activité en tant que travailleur indépendant ou freelance ?",
        correctAnswer: 12.5,
        unit: "%",
        explanation: "Environ 12,5% des actifs français exercent une activité en tant que travailleur indépendant ou freelance, que ce soit à titre principal ou complémentaire."
      },
      {
        question: "Combien de personnes en France exercent une activité freelance ou indépendante ?",
        correctAnswer: 3.8,
        unit: "millions",
        explanation: "En multipliant le nombre de personnes actives (30,5 millions) par le pourcentage d'indépendants/freelances (12,5%), on obtient environ 3,8 millions de personnes."
      }
    ]
  },
  {
    id: "emp13",
    type: "multistep",
    question: "Combien de contrats d'apprentissage ont été signés en France en 2023 ?",
    finalExplanation: "Environ 783 000 contrats d'apprentissage ont été signés en France en 2023, un record historique qui témoigne du succès croissant de cette voie de formation.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de contrats d'apprentissage ont été signés en France en 2022 ?",
        correctAnswer: 732000,
        unit: "contrats",
        explanation: "Environ 732 000 contrats d'apprentissage ont été signés en France en 2022 selon les données du Ministère du Travail."
      },
      {
        question: "Quelle a été l'évolution du nombre de contrats d'apprentissage entre 2022 et 2023 ?",
        correctAnswer: 7,
        unit: "% d'augmentation",
        explanation: "Le nombre de contrats d'apprentissage a augmenté d'environ 7% entre 2022 et 2023, poursuivant la tendance à la hausse observée ces dernières années."
      },
      {
        question: "Combien de contrats d'apprentissage ont été signés en France en 2023 ?",
        correctAnswer: 783000,
        unit: "contrats",
        explanation: "En appliquant l'augmentation de 7% au nombre de contrats de 2022 (732 000), on obtient environ 783 000 contrats d'apprentissage signés en 2023."
      }
    ]
  },
  {
    id: "emp14",
    type: "multistep",
    question: "Combien de personnes travaillent dans des métiers en tension (secteurs en pénurie de main-d'œuvre) ?",
    finalExplanation: "Environ 4,5 millions de personnes travaillent dans des métiers en tension en France, des secteurs qui peinent à recruter malgré les besoins croissants.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (ayant un emploi) y a-t-il en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces actifs occupés travaille dans des métiers officiellement reconnus comme étant en tension ?",
        correctAnswer: 15.8,
        unit: "%",
        explanation: "Environ 15,8% des actifs occupés travaillent dans des métiers officiellement reconnus comme étant en tension par Pôle Emploi et la DARES."
      },
      {
        question: "Combien de personnes travaillent dans des métiers en tension (secteurs en pénurie de main-d'œuvre) ?",
        correctAnswer: 4.5,
        unit: "millions",
        explanation: "En multipliant le nombre d'actifs occupés (28,5 millions) par le pourcentage travaillant dans des métiers en tension (15,8%), on obtient environ 4,5 millions de personnes."
      }
    ]
  },
  {
    id: "emp15",
    type: "multistep",
    question: "Combien de personnes perçoivent l'assurance chômage en France ?",
    finalExplanation: "Environ 2,9 millions de personnes perçoivent l'assurance chômage en France, un chiffre qui fluctue en fonction de la conjoncture économique et des réformes du système d'indemnisation.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de demandeurs d'emploi inscrits à Pôle Emploi (toutes catégories confondues) ?",
        correctAnswer: 5.7,
        unit: "millions",
        explanation: "Environ 5,7 millions de demandeurs d'emploi sont inscrits à Pôle Emploi, toutes catégories confondues (A, B, C, D et E)."
      },
      {
        question: "Quel pourcentage de ces demandeurs d'emploi perçoit effectivement une allocation chômage ?",
        correctAnswer: 51,
        unit: "%",
        explanation: "Environ 51% des demandeurs d'emploi inscrits perçoivent effectivement une allocation chômage, les autres n'ayant pas ou plus de droits à l'indemnisation."
      },
      {
        question: "Combien de personnes perçoivent l'assurance chômage en France ?",
        correctAnswer: 2.9,
        unit: "millions",
        explanation: "En multipliant le nombre total de demandeurs d'emploi inscrits (5,7 millions) par le pourcentage percevant une allocation (51%), on obtient environ 2,9 millions de personnes."
      }
    ]
  },
  {
    id: "emp16",
    type: "multistep",
    question: "Combien d'employeurs proposent un dispositif de participation/intéressement à leurs salariés ?",
    finalExplanation: "Environ 320 000 employeurs proposent un dispositif de participation ou d'intéressement à leurs salariés en France, principalement des moyennes et grandes entreprises.",
    theme: "emploi",
    steps: [
      {
        question: "Combien d'entreprises employeuses (ayant au moins un salarié) y a-t-il en France ?",
        correctAnswer: 1.76,
        unit: "million",
        explanation: "La France compte environ 1,76 million d'entreprises employeuses selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces entreprises propose un dispositif de participation et/ou d'intéressement à leurs salariés ?",
        correctAnswer: 18.2,
        unit: "%",
        explanation: "Environ 18,2% des entreprises employeuses proposent un dispositif de participation et/ou d'intéressement à leurs salariés."
      },
      {
        question: "Combien d'employeurs proposent un dispositif de participation/intéressement à leurs salariés ?",
        correctAnswer: 320000,
        unit: "employeurs",
        explanation: "En multipliant le nombre total d'entreprises employeuses (1,76 million) par le pourcentage proposant des dispositifs de participation/intéressement (18,2%), on obtient environ 320 000 employeurs."
      }
    ]
  },
  {
    id: "emp17",
    type: "multistep",
    question: "Combien de travailleurs exercent dans des zones rurales en France ?",
    finalExplanation: "Environ 6,3 millions de travailleurs exercent dans des zones rurales en France, contribuant à la vitalité économique des territoires en dehors des grandes agglomérations.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (ayant un emploi) y a-t-il en France ?",
        correctAnswer: 28.5,
        unit: "millions",
        explanation: "La France compte environ 28,5 millions de personnes actives occupées selon les données de l'INSEE."
      },
      {
        question: "Quelle est la part de la population française vivant en zone rurale ?",
        correctAnswer: 20,
        unit: "%",
        explanation: "Environ 20% de la population française vit en zone rurale selon la définition de l'INSEE."
      },
      {
        question: "Quel est le taux d'emploi dans les zones rurales par rapport à la moyenne nationale ?",
        correctAnswer: 110,
        unit: "%",
        explanation: "Le taux d'emploi dans les zones rurales est d'environ 110% de la moyenne nationale, ce qui signifie qu'il y a proportionnellement plus de personnes en emploi dans ces zones que dans l'ensemble du pays."
      },
      {
        question: "Combien de travailleurs exercent dans des zones rurales en France ?",
        correctAnswer: 6.3,
        unit: "millions",
        explanation: "En multipliant le nombre total d'actifs occupés (28,5 millions) par la part de population en zone rurale (20%) puis en ajustant par le taux d'emploi relatif (110%), on obtient environ 6,3 millions de travailleurs."
      }
    ]
  },
  {
    id: "emp18",
    type: "multistep",
    question: "Combien de Français occupent un emploi dans une entreprise de moins de 10 salariés ?",
    finalExplanation: "Environ 4,6 millions de Français occupent un emploi dans une entreprise de moins de 10 salariés, illustrant l'importance des très petites entreprises (TPE) dans le tissu économique national.",
    theme: "emploi",
    steps: [
      {
        question: "Combien de personnes actives occupées (salariées) y a-t-il en France ?",
        correctAnswer: 25.4,
        unit: "millions",
        explanation: "La France compte environ 25,4 millions de personnes actives occupées salariées (hors indépendants) selon les données de l'INSEE."
      },
      {
        question: "Quel pourcentage de ces salariés travaille dans une entreprise de moins de 10 salariés ?",
        correctAnswer: 18.1,
        unit: "%",
        explanation: "Environ 18,1% des salariés français travaillent dans une entreprise de moins de 10 salariés (très petite entreprise ou TPE)."
      },
      {
        question: "Combien de Français occupent un emploi dans une entreprise de moins de 10 salariés ?",
        correctAnswer: 4.6,
        unit: "millions",
        explanation: "En multipliant le nombre total de salariés (25,4 millions) par le pourcentage travaillant dans des TPE (18,1%), on obtient environ 4,6 millions de personnes."
      }
    ]
  },
  {
    id: "emp19",
    type: "multistep",
    question: "Combien de personnes exercent un emploi de service à la personne (aide à domicile, garde d'enfant, etc.) ?",
    finalExplanation: "Environ 1,8 million de personnes exercent un emploi de service à la personne en France, un secteur important qui répond aux besoins d'accompagnement des enfants, des personnes âgées et des ménages.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de particuliers employeurs (employant directement du personnel à domicile) en France ?",
        correctAnswer: 3.3,
        unit: "millions",
        explanation: "La France compte environ 3,3 millions de particuliers employeurs selon les données de l'URSSAF."
      },
      {
        question: "Combien de personnes sont employées en moyenne par chaque particulier employeur ?",
        correctAnswer: 0.4,
        unit: "personne",
        explanation: "Chaque particulier employeur emploie en moyenne 0,4 personne (beaucoup d'employés travaillant pour plusieurs particuliers employeurs)."
      },
      {
        question: "Combien de personnes sont employées par des organismes prestataires de services à la personne (associations, entreprises) ?",
        correctAnswer: 0.5,
        unit: "million",
        explanation: "Environ 0,5 million de personnes sont employées par des organismes prestataires de services à la personne."
      },
      {
        question: "Combien de personnes exercent un emploi de service à la personne (aide à domicile, garde d'enfant, etc.) ?",
        correctAnswer: 1.8,
        unit: "million",
        explanation: "En additionnant les employés directs des particuliers (3,3 millions × 0,4) et les employés des organismes prestataires (0,5 million), on obtient environ 1,8 million de personnes."
      }
    ]
  },
  {
    id: "emp20",
    type: "multistep",
    question: "Combien de personnes travaillent dans une start-up ou une entreprise innovante en France ?",
    finalExplanation: "Environ 780 000 personnes travaillent dans une start-up ou une entreprise innovante en France, témoignant du dynamisme de cet écosystème porté par les politiques de soutien à l'innovation.",
    theme: "emploi",
    steps: [
      {
        question: "Combien y a-t-il de start-up et d'entreprises reconnues comme innovantes en France ?",
        correctAnswer: 26500,
        unit: "entreprises",
        explanation: "La France compte environ 26 500 start-up et entreprises reconnues comme innovantes selon les données de Bpifrance et de la French Tech."
      },
      {
        question: "Combien d'employés compte en moyenne une entreprise innovante ?",
        correctAnswer: 29.4,
        unit: "employés",
        explanation: "Une entreprise innovante compte en moyenne 29,4 employés, avec une grande disparité entre les jeunes start-up et les scale-up plus matures."
      },
      {
        question: "Combien de personnes travaillent dans une start-up ou une entreprise innovante en France ?",
        correctAnswer: 780000,
        unit: "personnes",
        explanation: "En multipliant le nombre d'entreprises innovantes (26 500) par leur taille moyenne (29,4 employés), on obtient environ 780 000 personnes."
      }
    ]
  },
  {
    id: "emp-101",
    type: "simple",
    question: "Quel est le taux de chômage en France selon la définition du BIT ?",
    correctAnswer: 7.4,
    unit: "%",
    explanation: "Le taux de chômage en France selon la définition du Bureau International du Travail est d'environ 7,4% de la population active.",
    theme: "emploi"
  },
  {
    id: "emp-102",
    type: "simple",
    question: "Quelle est la durée moyenne d'un contrat à durée déterminée (CDD) en France ?",
    correctAnswer: 46,
    unit: "jours",
    explanation: "La durée moyenne d'un CDD en France est d'environ 46 jours, tous secteurs confondus.",
    theme: "emploi"
  },
  {
    id: "emp-103",
    type: "simple",
    question: "Quel pourcentage des salariés français travaille à temps partiel ?",
    correctAnswer: 17.9,
    unit: "%",
    explanation: "Environ 17,9% des salariés français travaillent à temps partiel, avec une surreprésentation des femmes.",
    theme: "emploi"
  },
  {
    id: "emp-104",
    type: "simple",
    question: "Quel est le nombre moyen de jours de congés payés pris par an par un salarié français ?",
    correctAnswer: 26,
    unit: "jours",
    explanation: "Un salarié français prend en moyenne 26 jours de congés payés par an sur les 30 jours ouvrables légaux (5 semaines).",
    theme: "emploi"
  },
  {
    id: "emp-105",
    type: "simple",
    question: "Quelle est la durée légale du travail hebdomadaire en France ?",
    correctAnswer: 35,
    unit: "heures",
    explanation: "La durée légale du travail en France est fixée à 35 heures par semaine depuis 2000.",
    theme: "emploi"
  },
  {
    id: "emp-106",
    type: "simple",
    question: "Quel est le taux de syndicalisation des salariés en France ?",
    correctAnswer: 10.3,
    unit: "%",
    explanation: "Le taux de syndicalisation en France est d'environ 10,3%, l'un des plus faibles parmi les pays industrialisés.",
    theme: "emploi"
  },
  {
    id: "emp-107",
    type: "simple",
    question: "Quelle est la part du travail intérimaire dans l'emploi total en France ?",
    correctAnswer: 3.2,
    unit: "%",
    explanation: "L'intérim représente environ 3,2% de l'emploi total en France.",
    theme: "emploi"
  },
  {
    id: "emp-108",
    type: "simple",
    question: "Quel est le pourcentage de télétravailleurs réguliers parmi les actifs occupés en France ?",
    correctAnswer: 22,
    unit: "%",
    explanation: "Environ 22% des actifs occupés pratiquent le télétravail de façon régulière en France, un chiffre qui a fortement augmenté depuis la pandémie de COVID-19.",
    theme: "emploi"
  },
  {
    id: "emp-109",
    type: "simple",
    question: "Quel est le taux d'emploi des personnes handicapées en France ?",
    correctAnswer: 36,
    unit: "%",
    explanation: "Le taux d'emploi des personnes en situation de handicap est d'environ 36% en France, bien inférieur à celui de la population générale.",
    theme: "emploi"
  },
  {
    id: "emp-110",
    type: "simple",
    question: "Quelle est la durée moyenne de recherche d'emploi pour un chômeur en France ?",
    correctAnswer: 13.4,
    unit: "mois",
    explanation: "Un chômeur en France met en moyenne 13,4 mois pour retrouver un emploi.",
    theme: "emploi"
  }
];
