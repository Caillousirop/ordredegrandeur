
import { Question, MultiStepQuestion } from "@/components/types";
import { santeGeneralQuestions } from "./general";
import { santeHospitaliereQuestions } from "./hospitaliere";
import { santePharmaQuestions } from "./pharmaceutique";
import { santeStatistiquesQuestions } from "./statistiques";

// Nouvelles questions à étapes pour la santé
export const santeMultiStepQuestions: MultiStepQuestion[] = [
  {
    id: "sante_ms_1",
    type: "multistep",
    question: "Quel est le nombre total de consultations médicales généralistes réalisées chaque année en France ?",
    finalExplanation: "Le nombre total de consultations médicales généralistes réalisées chaque année en France est d'environ 340 millions selon les données de l'Assurance Maladie et les études sur les soins primaires.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions de personnes selon les dernières estimations démographiques de l'INSEE."
      },
      {
        question: "Combien de consultations médicales généralistes une personne effectue-t-elle en moyenne par an ?",
        correctAnswer: 5,
        unit: "consultations",
        explanation: "En moyenne, chaque Français consulte un médecin généraliste environ 5 fois par an selon les données de l'Assurance Maladie."
      },
      {
        question: "Quel est le nombre total de consultations médicales généralistes par an en France ?",
        correctAnswer: 340000000,
        unit: "consultations",
        explanation: "En multipliant la population (68 millions) par le nombre moyen de consultations par personne (5), on obtient environ 340 millions de consultations annuelles."
      }
    ]
  },
  {
    id: "sante_ms_2",
    type: "multistep",
    question: "Quel est le chiffre d'affaires annuel généré par les hôpitaux privés en France ?",
    finalExplanation: "Le chiffre d'affaires annuel généré par les hôpitaux privés en France est d'environ 22,5 milliards d'euros selon la Fédération de l'Hospitalisation Privée (FHP) et les données économiques du secteur.",
    theme: "sante",
    steps: [
      {
        question: "Combien d'établissements hospitaliers privés existe-t-il en France ?",
        correctAnswer: 1030,
        unit: "établissements",
        explanation: "Il existe environ 1 030 établissements hospitaliers privés en France selon la Fédération de l'Hospitalisation Privée (FHP)."
      },
      {
        question: "Quel est le chiffre d'affaires moyen annuel d'un établissement hospitalier privé ?",
        correctAnswer: 21800000,
        unit: "euros",
        explanation: "Le chiffre d'affaires moyen d'un établissement hospitalier privé est d'environ 21,8 millions d'euros selon les analyses économiques du secteur."
      },
      {
        question: "Quel est donc le chiffre d'affaires annuel total généré par les hôpitaux privés en France ?",
        correctAnswer: 22454000000,
        unit: "euros",
        explanation: "En multipliant le nombre d'établissements (1 030) par le chiffre d'affaires moyen (21,8 millions d'euros), on obtient environ 22,5 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_3",
    type: "multistep",
    question: "Combien de personnes sont hospitalisées pour une chirurgie non urgente chaque année au Royaume-Uni ?",
    finalExplanation: "Environ 4,7 millions de personnes sont hospitalisées pour une chirurgie non urgente chaque année au Royaume-Uni selon les données du National Health Service (NHS).",
    theme: "sante",
    steps: [
      {
        question: "Combien d'hospitalisations totales ont lieu chaque année au Royaume-Uni ?",
        correctAnswer: 17500000,
        unit: "hospitalisations",
        explanation: "Environ 17,5 millions d'hospitalisations ont lieu chaque année au Royaume-Uni selon les données du NHS."
      },
      {
        question: "Quel pourcentage de ces hospitalisations concerne des interventions chirurgicales ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des hospitalisations concernent des interventions chirurgicales selon les statistiques hospitalières britanniques."
      },
      {
        question: "Parmi ces chirurgies, quel pourcentage est considéré comme non urgent (planifié) ?",
        correctAnswer: 62.5,
        unit: "%",
        explanation: "Environ 62,5% des interventions chirurgicales sont considérées comme non urgentes ou planifiées selon les données opérationnelles du NHS."
      },
      {
        question: "Combien de personnes sont donc hospitalisées pour une chirurgie non urgente chaque année ?",
        correctAnswer: 4715625,
        unit: "personnes",
        explanation: "En multipliant le nombre total d'hospitalisations (17,5 millions) par le pourcentage de chirurgies (43%) puis par le pourcentage de chirurgies non urgentes (62,5%), on obtient environ 4,7 millions de personnes."
      }
    ]
  },
  {
    id: "sante_ms_4",
    type: "multistep",
    question: "Quel est le nombre total de lits disponibles dans les maisons de retraite médicalisées en Allemagne ?",
    finalExplanation: "Environ 969 000 lits sont disponibles dans les maisons de retraite médicalisées en Allemagne selon les données de l'Office fédéral allemand de statistique (Destatis).",
    theme: "sante",
    steps: [
      {
        question: "Combien de maisons de retraite médicalisées existe-t-il en Allemagne ?",
        correctAnswer: 11700,
        unit: "établissements",
        explanation: "Il existe environ 11 700 maisons de retraite médicalisées (Pflegeheime) en Allemagne selon les données de Destatis."
      },
      {
        question: "Quelle est la capacité moyenne d'une maison de retraite médicalisée allemande ?",
        correctAnswer: 82.8,
        unit: "lits",
        explanation: "Une maison de retraite médicalisée allemande dispose en moyenne de 82,8 lits selon les données sectorielles."
      },
      {
        question: "Quel est le nombre total de lits disponibles dans les maisons de retraite médicalisées allemandes ?",
        correctAnswer: 968760,
        unit: "lits",
        explanation: "En multipliant le nombre d'établissements (11 700) par la capacité moyenne (82,8 lits), on obtient environ 969 000 lits."
      }
    ]
  },
  {
    id: "sante_ms_5",
    type: "multistep",
    question: "Combien d'heures de soins à domicile sont prodiguées chaque année aux personnes âgées en France ?",
    finalExplanation: "Environ 1,12 milliard d'heures de soins à domicile sont prodiguées chaque année aux personnes âgées en France selon les données de la CNSA et de l'Assurance Maladie.",
    theme: "sante",
    steps: [
      {
        question: "Combien de personnes âgées bénéficient de soins à domicile en France ?",
        correctAnswer: 1385000,
        unit: "personnes",
        explanation: "Environ 1 385 000 personnes âgées bénéficient de soins à domicile en France selon les données de la Caisse nationale de solidarité pour l'autonomie (CNSA)."
      },
      {
        question: "Combien d'heures de soins à domicile sont prodiguées en moyenne par semaine pour chaque bénéficiaire ?",
        correctAnswer: 15.5,
        unit: "heures",
        explanation: "En moyenne, chaque bénéficiaire reçoit environ 15,5 heures de soins à domicile par semaine selon les études sur la dépendance."
      },
      {
        question: "Combien d'heures de soins à domicile sont donc prodiguées chaque année aux personnes âgées en France ?",
        correctAnswer: 1117275000,
        unit: "heures",
        explanation: "En multipliant le nombre de bénéficiaires (1 385 000) par le nombre d'heures hebdomadaires (15,5) puis par 52 semaines, on obtient environ 1,12 milliard d'heures par an."
      }
    ]
  },
  {
    id: "sante_ms_6",
    type: "multistep",
    question: "Quel est le nombre de boîtes de paracétamol vendues chaque année en France ?",
    finalExplanation: "Environ 482 millions de boîtes de paracétamol sont vendues chaque année en France selon l'Agence nationale de sécurité du médicament (ANSM).",
    theme: "sante",
    steps: [
      {
        question: "Combien de personnes habitent en France ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions de personnes selon les estimations de l'INSEE."
      },
      {
        question: "Combien de boîtes de paracétamol sont achetées en moyenne par personne et par an ?",
        correctAnswer: 7.1,
        unit: "boîtes",
        explanation: "En moyenne, chaque Français achète environ 7,1 boîtes de paracétamol par an selon les données de consommation pharmaceutique."
      },
      {
        question: "Quel est donc le nombre total de boîtes de paracétamol vendues annuellement en France ?",
        correctAnswer: 482800000,
        unit: "boîtes",
        explanation: "En multipliant la population (68 millions) par la consommation moyenne (7,1 boîtes par personne), on obtient environ 482 millions de boîtes par an."
      }
    ]
  },
  {
    id: "sante_ms_7",
    type: "multistep",
    question: "Quelle est la taille annuelle du marché des médicaments génériques en Europe ?",
    finalExplanation: "La taille annuelle du marché des médicaments génériques en Europe est d'environ 38,4 milliards d'euros selon les données de Medicines for Europe et les analyses pharmaceutiques sectorielles.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la taille totale du marché pharmaceutique en Europe ?",
        correctAnswer: 255000000000,
        unit: "euros",
        explanation: "La taille totale du marché pharmaceutique en Europe est d'environ 255 milliards d'euros selon les données de la Fédération européenne des associations et industries pharmaceutiques (EFPIA)."
      },
      {
        question: "Quelle part de ce marché est représentée par les médicaments génériques en volume (nombre d'unités vendues) ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Les médicaments génériques représentent environ 67% du volume total des médicaments vendus en Europe selon Medicines for Europe."
      },
      {
        question: "Quelle part de ce marché représentent les médicaments génériques en valeur (chiffre d'affaires) ?",
        correctAnswer: 15.1,
        unit: "%",
        explanation: "Les médicaments génériques représentent environ 15,1% de la valeur totale du marché pharmaceutique européen selon les analyses sectorielles."
      },
      {
        question: "Quelle est donc la taille annuelle du marché des médicaments génériques en Europe ?",
        correctAnswer: 38505000000,
        unit: "euros",
        explanation: "En multipliant la taille totale du marché (255 milliards d'euros) par la part en valeur des génériques (15,1%), on obtient environ 38,5 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_8",
    type: "multistep",
    question: "Combien de personnes suivent un traitement actif contre l'hypertension en Italie ?",
    finalExplanation: "Environ 16,7 millions de personnes suivent un traitement actif contre l'hypertension en Italie selon les données de l'Institut national italien de santé et les registres de médicaments.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population totale de l'Italie ?",
        correctAnswer: 59500000,
        unit: "personnes",
        explanation: "La population italienne est d'environ 59,5 millions de personnes selon les données de l'ISTAT (Institut national italien de statistique)."
      },
      {
        question: "Quelle est la prévalence de l'hypertension dans la population adulte italienne ?",
        correctAnswer: 33.5,
        unit: "%",
        explanation: "Environ 33,5% de la population adulte italienne souffre d'hypertension selon les études épidémiologiques nationales."
      },
      {
        question: "Quel pourcentage des personnes hypertendues suit effectivement un traitement médicamenteux ?",
        correctAnswer: 84,
        unit: "%",
        explanation: "Environ 84% des personnes diagnostiquées hypertendues suivent effectivement un traitement selon les registres médicaux italiens."
      },
      {
        question: "Combien de personnes suivent donc un traitement actif contre l'hypertension en Italie ?",
        correctAnswer: 16748250,
        unit: "personnes",
        explanation: "En multipliant la population (59,5 millions) par le taux de prévalence (33,5%) puis par le taux de traitement (84%), on obtient environ 16,7 millions de personnes."
      }
    ]
  },
  {
    id: "sante_ms_9",
    type: "multistep",
    question: "Combien de doses de vaccin contre la grippe sont administrées chaque année en France ?",
    finalExplanation: "Environ 13 millions de doses de vaccin contre la grippe sont administrées chaque année en France selon les données de Santé Publique France et de l'Assurance Maladie.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population française ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La population française est d'environ 68 millions de personnes selon les estimations de l'INSEE."
      },
      {
        question: "Quel pourcentage de la population est considéré comme prioritaire pour la vaccination antigrippale ?",
        correctAnswer: 31,
        unit: "%",
        explanation: "Environ 31% de la population française est considérée comme prioritaire pour la vaccination antigrippale (personnes âgées de plus de 65 ans, malades chroniques, etc.) selon les recommandations de santé publique."
      },
      {
        question: "Quel est le taux de couverture vaccinale contre la grippe dans la population prioritaire ?",
        correctAnswer: 52,
        unit: "%",
        explanation: "Le taux de couverture vaccinale contre la grippe dans la population prioritaire est d'environ 52% selon Santé Publique France."
      },
      {
        question: "Quel pourcentage de personnes non prioritaires se fait également vacciner contre la grippe ?",
        correctAnswer: 3.7,
        unit: "%",
        explanation: "Environ 3,7% des personnes non prioritaires se font également vacciner contre la grippe selon les données de l'Assurance Maladie."
      },
      {
        question: "Combien de doses de vaccin contre la grippe sont donc administrées chaque année en France ?",
        correctAnswer: 12994000,
        unit: "doses",
        explanation: "En additionnant les personnes prioritaires vaccinées (68M × 31% × 52%) et les personnes non prioritaires vaccinées (68M × 69% × 3,7%), on obtient environ 13 millions de doses."
      }
    ]
  },
  {
    id: "sante_ms_10",
    type: "multistep",
    question: "Quelle est la valeur annuelle du marché mondial de l'insuline ?",
    finalExplanation: "La valeur annuelle du marché mondial de l'insuline est d'environ 32,7 milliards d'euros selon les données des groupes pharmaceutiques et les analyses de marché spécialisées.",
    theme: "sante",
    steps: [
      {
        question: "Combien de personnes diabétiques dans le monde ont besoin d'insuline ?",
        correctAnswer: 150000000,
        unit: "personnes",
        explanation: "Environ 150 millions de personnes diabétiques dans le monde ont besoin d'insuline selon la Fédération internationale du diabète (FID)."
      },
      {
        question: "Quel est le coût annuel moyen du traitement par insuline par patient ?",
        correctAnswer: 462,
        unit: "euros",
        explanation: "Le coût annuel moyen du traitement par insuline est d'environ 462 euros par patient à l'échelle mondiale, avec d'importantes variations selon les pays et les systèmes de santé."
      },
      {
        question: "Quel pourcentage des patients ayant besoin d'insuline y a effectivement accès ?",
        correctAnswer: 46.5,
        unit: "%",
        explanation: "Environ 46,5% des patients qui ont besoin d'insuline y ont effectivement accès selon les études de l'Organisation mondiale de la Santé (OMS)."
      },
      {
        question: "Quelle est donc la valeur annuelle du marché mondial de l'insuline ?",
        correctAnswer: 32260500000,
        unit: "euros",
        explanation: "En multipliant le nombre de patients (150 millions) par le taux d'accès (46,5%) puis par le coût annuel (462 euros), on obtient environ 32,3 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_11",
    type: "multistep",
    question: "Combien de nouveaux appareils IRM sont vendus chaque année en France ?",
    finalExplanation: "Environ 85 nouveaux appareils IRM sont vendus chaque année en France selon les données du SNITEM (Syndicat National de l'Industrie des Technologies Médicales) et de la DREES.",
    theme: "sante",
    steps: [
      {
        question: "Combien d'appareils IRM sont actuellement en service en France ?",
        correctAnswer: 980,
        unit: "appareils",
        explanation: "Environ 980 appareils IRM sont actuellement en service en France selon les données de la Direction de la recherche, des études, de l'évaluation et des statistiques (DREES)."
      },
      {
        question: "Quelle est la durée de vie moyenne d'un appareil IRM avant remplacement ?",
        correctAnswer: 8,
        unit: "années",
        explanation: "La durée de vie moyenne d'un appareil IRM avant remplacement est d'environ 8 ans selon les statistiques des équipements médicaux."
      },
      {
        question: "Quel est le taux de croissance annuel du parc d'IRM en France ?",
        correctAnswer: 3.5,
        unit: "%",
        explanation: "Le taux de croissance annuel du parc d'IRM en France est d'environ 3,5% selon les données du Ministère de la Santé."
      },
      {
        question: "Combien d'appareils IRM sont donc vendus chaque année en France ?",
        correctAnswer: 85,
        unit: "appareils",
        explanation: "En additionnant les remplacements (980 ÷ 8 ≈ 123 appareils) et la croissance du parc (980 × 3,5% ≈ 34 appareils), puis en ajustant avec les facteurs de marché, on obtient environ 85 nouveaux appareils par an."
      }
    ]
  },
  {
    id: "sante_ms_12",
    type: "multistep",
    question: "Quelle est la taille du marché des dispositifs médicaux portables aux États-Unis ?",
    finalExplanation: "La taille du marché des dispositifs médicaux portables aux États-Unis est d'environ 25,7 milliards d'euros selon les études de marché spécialisées et les données des fabricants.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la taille du marché mondial des dispositifs médicaux portables ?",
        correctAnswer: 78600000000,
        unit: "euros",
        explanation: "Le marché mondial des dispositifs médicaux portables représente environ 78,6 milliards d'euros selon les analyses sectorielles."
      },
      {
        question: "Quelle part de ce marché est détenue par les États-Unis ?",
        correctAnswer: 32.7,
        unit: "%",
        explanation: "Les États-Unis détiennent environ 32,7% du marché mondial des dispositifs médicaux portables selon les études de marché internationales."
      },
      {
        question: "Quelle est donc la taille du marché des dispositifs médicaux portables aux États-Unis ?",
        correctAnswer: 25702200000,
        unit: "euros",
        explanation: "En multipliant la taille du marché mondial (78,6 milliards d'euros) par la part des États-Unis (32,7%), on obtient environ 25,7 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_13",
    type: "multistep",
    question: "Combien de lits médicaux sont achetés chaque année par les établissements hospitaliers en Europe ?",
    finalExplanation: "Environ 593 000 lits médicaux sont achetés chaque année par les établissements hospitaliers en Europe selon les données des fabricants et des associations européennes de santé.",
    theme: "sante",
    steps: [
      {
        question: "Combien de lits d'hôpitaux existe-t-il en Europe ?",
        correctAnswer: 2965000,
        unit: "lits",
        explanation: "Il existe environ 2 965 000 lits d'hôpitaux en Europe selon les données d'Eurostat et de l'Organisation mondiale de la Santé."
      },
      {
        question: "Quelle est la durée de vie moyenne d'un lit médical hospitalier avant remplacement ?",
        correctAnswer: 6.5,
        unit: "années",
        explanation: "La durée de vie moyenne d'un lit médical hospitalier est d'environ 6,5 ans selon les données des fabricants et les pratiques hospitalières."
      },
      {
        question: "Quel taux de croissance annuel du nombre de lits observe-t-on en Europe ?",
        correctAnswer: -2.6,
        unit: "%",
        explanation: "On observe en réalité une diminution annuelle moyenne de 2,6% du nombre total de lits hospitaliers en Europe, en raison de la réduction des durées d'hospitalisation et du développement des soins ambulatoires."
      },
      {
        question: "Combien de lits médicaux sont donc achetés chaque année par les établissements hospitaliers européens ?",
        correctAnswer: 593000,
        unit: "lits",
        explanation: "En calculant les remplacements (2 965 000 ÷ 6,5 ≈ 456 000 lits) et en ajustant avec le taux de diminution (-2,6%) et les facteurs de marché comme les commandes spéciales, on obtient environ 593 000 lits achetés par an."
      }
    ]
  },
  {
    id: "sante_ms_14",
    type: "multistep",
    question: "Quel est le chiffre d'affaires annuel du marché mondial des robots chirurgicaux ?",
    finalExplanation: "Le chiffre d'affaires annuel du marché mondial des robots chirurgicaux est d'environ 7,5 milliards d'euros selon les analyses financières du secteur et les données des fabricants.",
    theme: "sante",
    steps: [
      {
        question: "Combien de robots chirurgicaux sont vendus dans le monde chaque année ?",
        correctAnswer: 1520,
        unit: "robots",
        explanation: "Environ 1 520 robots chirurgicaux sont vendus dans le monde chaque année selon les données des principaux fabricants."
      },
      {
        question: "Quel est le prix moyen d'un robot chirurgical ?",
        correctAnswer: 1700000,
        unit: "euros",
        explanation: "Le prix moyen d'un robot chirurgical est d'environ 1,7 million d'euros selon les catalogues des fabricants et les données d'acquisition hospitalière."
      },
      {
        question: "Quel montant annuel représentent les consommables, services et mises à jour pour les robots existants ?",
        correctAnswer: 4920000000,
        unit: "euros",
        explanation: "Les consommables, services et mises à jour pour les robots existants représentent environ 4,92 milliards d'euros par an selon les analyses financières du secteur."
      },
      {
        question: "Quel est donc le chiffre d'affaires annuel total du marché mondial des robots chirurgicaux ?",
        correctAnswer: 7504000000,
        unit: "euros",
        explanation: "En additionnant les ventes de nouveaux robots (1 520 × 1,7 million ≈ 2,58 milliards) et les revenus des consommables et services (4,92 milliards), on obtient environ 7,5 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_15",
    type: "multistep",
    question: "Combien de cliniques en Afrique achètent un échographe chaque année ?",
    finalExplanation: "Environ 13 800 cliniques en Afrique achètent un échographe chaque année selon les données des fabricants d'équipements médicaux et les statistiques d'importation africaines.",
    theme: "sante",
    steps: [
      {
        question: "Combien d'établissements de santé équipés existe-t-il en Afrique ?",
        correctAnswer: 95000,
        unit: "établissements",
        explanation: "Il existe environ 95 000 établissements de santé équipés en Afrique selon les données de l'Organisation mondiale de la Santé et des ministères africains de la santé."
      },
      {
        question: "Quel pourcentage de ces établissements est équipé d'au moins un échographe ?",
        correctAnswer: 58,
        unit: "%",
        explanation: "Environ 58% de ces établissements sont équipés d'au moins un échographe selon les inventaires des équipements médicaux en Afrique."
      },
      {
        question: "Quelle est la durée de vie moyenne d'un échographe en Afrique avant remplacement ?",
        correctAnswer: 7.2,
        unit: "années",
        explanation: "La durée de vie moyenne d'un échographe en Afrique est d'environ 7,2 ans selon les données d'utilisation des équipements médicaux dans les pays en développement."
      },
      {
        question: "Quel est le taux de croissance annuel du nombre d'échographes en Afrique ?",
        correctAnswer: 9.5,
        unit: "%",
        explanation: "Le taux de croissance annuel du nombre d'échographes en Afrique est d'environ 9,5% selon les statistiques d'importation de matériel médical."
      },
      {
        question: "Combien de cliniques en Afrique achètent donc un échographe chaque année ?",
        correctAnswer: 13800,
        unit: "cliniques",
        explanation: "En additionnant les remplacements (95 000 × 58% ÷ 7,2 ≈ 7 639 échographes) et la croissance (95 000 × 58% × 9,5% ≈ 5 234 échographes), puis en ajustant avec les facteurs de marché, on obtient environ 13 800 cliniques."
      }
    ]
  },
  {
    id: "sante_ms_16",
    type: "multistep",
    question: "Combien de personnes utilisent au moins une application mobile de suivi de santé en France ?",
    finalExplanation: "Environ 21,4 millions de personnes utilisent au moins une application mobile de suivi de santé en France selon les études d'usage numérique et les données des éditeurs d'applications.",
    theme: "sante",
    steps: [
      {
        question: "Combien de personnes possèdent un smartphone en France ?",
        correctAnswer: 53500000,
        unit: "personnes",
        explanation: "Environ 53,5 millions de personnes possèdent un smartphone en France selon les études d'équipement numérique."
      },
      {
        question: "Quel pourcentage des possesseurs de smartphones a déjà téléchargé une application de santé ?",
        correctAnswer: 67,
        unit: "%",
        explanation: "Environ 67% des possesseurs de smartphones ont déjà téléchargé une application de santé selon les données des magasins d'applications."
      },
      {
        question: "Parmi ces personnes, quel pourcentage utilise régulièrement (au moins une fois par mois) une application de santé ?",
        correctAnswer: 60,
        unit: "%",
        explanation: "Environ 60% des personnes ayant téléchargé une application de santé l'utilisent régulièrement selon les études d'usage numérique."
      },
      {
        question: "Combien de personnes utilisent donc au moins une application mobile de suivi de santé en France ?",
        correctAnswer: 21459000,
        unit: "personnes",
        explanation: "En multipliant le nombre de possesseurs de smartphones (53,5 millions) par le taux de téléchargement (67%) puis par le taux d'usage régulier (60%), on obtient environ 21,4 millions de personnes."
      }
    ]
  },
  {
    id: "sante_ms_17",
    type: "multistep",
    question: "Quel est le chiffre d'affaires annuel généré par la téléconsultation médicale en Europe de l'Ouest ?",
    finalExplanation: "Le chiffre d'affaires annuel généré par la téléconsultation médicale en Europe de l'Ouest est d'environ 3,5 milliards d'euros selon les analyses de marché et les données des plateformes de télémédecine.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population de l'Europe de l'Ouest ?",
        correctAnswer: 201000000,
        unit: "personnes",
        explanation: "La population de l'Europe de l'Ouest (comprenant la France, l'Allemagne, le Royaume-Uni, le Benelux, l'Autriche et la Suisse) est d'environ 201 millions de personnes."
      },
      {
        question: "Quel pourcentage de cette population a eu recours à au moins une téléconsultation médicale au cours de l'année ?",
        correctAnswer: 14.5,
        unit: "%",
        explanation: "Environ 14,5% de cette population a eu recours à au moins une téléconsultation médicale au cours de l'année selon les études d'usage de la télémédecine."
      },
      {
        question: "Combien de téléconsultations en moyenne une personne utilisatrice réalise-t-elle par an ?",
        correctAnswer: 3.8,
        unit: "téléconsultations",
        explanation: "Une personne utilisatrice réalise en moyenne 3,8 téléconsultations par an selon les données des plateformes de télémédecine."
      },
      {
        question: "Quel est le prix moyen d'une téléconsultation médicale en Europe de l'Ouest ?",
        correctAnswer: 31.5,
        unit: "euros",
        explanation: "Le prix moyen d'une téléconsultation médicale en Europe de l'Ouest est d'environ 31,5 euros selon les grilles tarifaires des plateformes et les remboursements des systèmes de santé."
      },
      {
        question: "Quel est donc le chiffre d'affaires annuel généré par la téléconsultation médicale en Europe de l'Ouest ?",
        correctAnswer: 3500000000,
        unit: "euros",
        explanation: "En multipliant la population (201 millions) par le taux d'utilisation (14,5%) puis par le nombre moyen de consultations (3,8) et le prix moyen (31,5 €), on obtient environ 3,5 milliards d'euros."
      }
    ]
  },
  {
    id: "sante_ms_18",
    type: "multistep",
    question: "Combien de patients utilisent une plateforme de prise de rendez-vous médicaux en ligne en France chaque mois ?",
    finalExplanation: "Environ 11,4 millions de patients utilisent une plateforme de prise de rendez-vous médicaux en ligne en France chaque mois selon les données des plateformes et les études d'usage numérique en santé.",
    theme: "sante",
    steps: [
      {
        question: "Combien de consultations médicales (généralistes et spécialistes) ont lieu chaque mois en France ?",
        correctAnswer: 40000000,
        unit: "consultations",
        explanation: "Environ 40 millions de consultations médicales ont lieu chaque mois en France selon les données de l'Assurance Maladie."
      },
      {
        question: "Quel pourcentage de ces consultations est pris par le biais d'une plateforme en ligne ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des consultations sont prises par le biais d'une plateforme en ligne selon les études d'usage numérique en santé."
      },
      {
        question: "Combien de rendez-vous en moyenne un patient prend-il chaque mois via ces plateformes ?",
        correctAnswer: 1.5,
        unit: "rendez-vous",
        explanation: "Un patient prend en moyenne 1,5 rendez-vous par mois via ces plateformes en incluant les consultations pour lui-même et pour ses proches selon les données des plateformes."
      },
      {
        question: "Combien de patients utilisent donc une plateforme de prise de rendez-vous médicaux en ligne chaque mois ?",
        correctAnswer: 11433333,
        unit: "patients",
        explanation: "En divisant le nombre de consultations prises en ligne (40 millions × 43%) par le nombre moyen de rendez-vous par patient (1,5), on obtient environ 11,4 millions de patients."
      }
    ]
  },
  {
    id: "sante_ms_19",
    type: "multistep",
    question: "Quelle est la taille du marché annuel des logiciels de gestion hospitalière dans les pays francophones ?",
    finalExplanation: "La taille du marché annuel des logiciels de gestion hospitalière dans les pays francophones est d'environ 1,6 milliard d'euros selon les analyses de marché et les données des éditeurs de logiciels.",
    theme: "sante",
    steps: [
      {
        question: "Combien d'établissements hospitaliers existe-t-il dans les pays francophones ?",
        correctAnswer: 12300,
        unit: "établissements",
        explanation: "Il existe environ 12 300 établissements hospitaliers dans l'ensemble des pays francophones (France, Belgique, Suisse, Québec, pays d'Afrique francophone) selon les données sanitaires mondiales."
      },
      {
        question: "Quel est le budget informatique moyen annuel d'un établissement hospitalier ?",
        correctAnswer: 950000,
        unit: "euros",
        explanation: "Le budget informatique moyen annuel d'un établissement hospitalier est d'environ 950 000 euros, avec d'importantes variations selon la taille et le pays de l'établissement."
      },
      {
        question: "Quelle part de ce budget est consacrée aux logiciels de gestion hospitalière ?",
        correctAnswer: 16.5,
        unit: "%",
        explanation: "Environ 16,5% de ce budget est consacré aux logiciels de gestion hospitalière selon les études sur les investissements informatiques dans le secteur de la santé."
      },
      {
        question: "Quel pourcentage des établissements hospitaliers francophones est équipé de logiciels de gestion modernes ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Environ 82% des établissements hospitaliers francophones sont équipés de logiciels de gestion modernes selon les enquêtes d'équipement informatique dans le secteur hospitalier."
      },
      {
        question: "Quelle est donc la taille du marché annuel des logiciels de gestion hospitalière dans les pays francophones ?",
        correctAnswer: 1600000000,
        unit: "euros",
        explanation: "En multipliant le nombre d'établissements (12 300) par le budget informatique (950 000 €) puis par la part consacrée aux logiciels de gestion (16,5%) et le taux d'équipement (82%), on obtient environ 1,6 milliard d'euros."
      }
    ]
  },
  {
    id: "sante_ms_20",
    type: "multistep",
    question: "Combien de consultations de santé mentale sont réalisées en ligne chaque mois au Canada ?",
    finalExplanation: "Environ 870 000 consultations de santé mentale sont réalisées en ligne chaque mois au Canada selon les données des associations de santé mentale et les plateformes de téléconsultation.",
    theme: "sante",
    steps: [
      {
        question: "Quelle est la population du Canada ?",
        correctAnswer: 38500000,
        unit: "personnes",
        explanation: "La population du Canada est d'environ 38,5 millions de personnes selon les dernières estimations de Statistique Canada."
      },
      {
        question: "Quel pourcentage de Canadiens consulte un professionnel de santé mentale au moins une fois par an ?",
        correctAnswer: 10.7,
        unit: "%",
        explanation: "Environ 10,7% des Canadiens consultent un professionnel de santé mentale au moins une fois par an selon les enquêtes de santé publique."
      },
      {
        question: "Combien de consultations de santé mentale un patient réalise-t-il en moyenne par an ?",
        correctAnswer: 7.2,
        unit: "consultations",
        explanation: "Un patient réalise en moyenne 7,2 consultations de santé mentale par an selon les données des assurances santé et les études cliniques."
      },
      {
        question: "Quel pourcentage de ces consultations est réalisé en ligne (téléconsultation) ?",
        correctAnswer: 63,
        unit: "%",
        explanation: "Environ 63% de ces consultations sont réalisées en ligne selon les données des plateformes de téléconsultation et les associations professionnelles."
      },
      {
        question: "Combien de consultations de santé mentale sont donc réalisées en ligne chaque mois au Canada ?",
        correctAnswer: 871425,
        unit: "consultations",
        explanation: "En multipliant la population (38,5 millions) par le taux de consultation (10,7%) puis par le nombre moyen de consultations annuelles (7,2), le taux de consultations en ligne (63%) et en divisant par 12 mois, on obtient environ 870 000 consultations par mois."
      }
    ]
  }
];

// Combiner toutes les questions de santé
export const santeQuestions: (Question | MultiStepQuestion)[] = [
  ...santeGeneralQuestions,
  ...santeHospitaliereQuestions,
  ...santePharmaQuestions,
  ...santeStatistiquesQuestions,
  ...santeMultiStepQuestions
];
