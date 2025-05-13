import { Question, MultiStepQuestion } from "@/components/types";

// Questions sur le système hospitalier
export const santeHospitaliereQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "108",
    type: "multistep",
    question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
    finalExplanation: "L'Île-de-France dispose d'environ 1 200 lits de réanimation, une capacité qui peut être augmentée en cas de crise sanitaire majeure comme l'a montré la pandémie de COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'habitants compte la région Île-de-France ?",
        correctAnswer: 12.3,
        unit: "millions",
        explanation: "La région Île-de-France compte environ 12,3 millions d'habitants selon les dernières données de l'INSEE."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en moyenne pour 100 000 habitants en France ?",
        correctAnswer: 10.2,
        unit: "lits",
        explanation: "La France dispose d'environ 10,2 lits de réanimation pour 100 000 habitants, légèrement au-dessus de la moyenne européenne."
      },
      {
        question: "Quel est le ratio de lits de réanimation en Île-de-France par rapport à la moyenne nationale ?",
        correctAnswer: 0.96,
        unit: "",
        explanation: "L'Île-de-France a une densité de lits de réanimation légèrement inférieure à la moyenne nationale, avec un ratio de 0,96."
      },
      {
        question: "Combien de lits de réanimation sont disponibles en Île-de-France ?",
        correctAnswer: 1200,
        unit: "lits",
        explanation: "En multipliant la population francilienne (12,3 millions) par le taux de lits pour 100 000 habitants (10,2) ajusté par le ratio régional (0,96), on obtient environ 1 200 lits."
      }
    ]
  },
  {
    id: "109",
    type: "multistep",
    question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
    finalExplanation: "Environ 20 000 opérations chirurgicales programmées sont réalisées chaque jour en France, sans compter les interventions urgentes, ce qui témoigne de l'activité importante du système chirurgical français.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'opérations chirurgicales sont réalisées chaque année en France ?",
        correctAnswer: 6.5,
        unit: "millions",
        explanation: "Environ 6,5 millions d'interventions chirurgicales sont réalisées chaque année en France, toutes spécialités confondues."
      },
      {
        question: "Quel pourcentage de ces opérations sont des interventions programmées (non urgentes) ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Environ 82% des interventions chirurgicales sont programmées à l'avance, par opposition aux interventions d'urgence."
      },
      {
        question: "Combien de jours par an les blocs opératoires sont-ils actifs ?",
        correctAnswer: 270,
        unit: "jours",
        explanation: "Les blocs opératoires fonctionnent environ 270 jours par an, en tenant compte des week-ends, jours fériés et périodes de maintenance."
      },
      {
        question: "Combien d'opérations chirurgicales programmées ont lieu chaque jour en France ?",
        correctAnswer: 20000,
        unit: "opérations",
        explanation: "En multipliant le nombre total d'opérations annuelles (6,5 millions) par le pourcentage d'interventions programmées (82%) et en divisant par le nombre de jours d'activité (270), on obtient environ 20 000 opérations programmées par jour."
      }
    ]
  },
  {
    id: "113",
    type: "multistep",
    question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
    finalExplanation: "Environ 1,3 million de personnes travaillent dans le secteur hospitalier français, ce qui en fait l'un des plus grands employeurs du pays.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'établissements hospitaliers existe-t-il en France ?",
        correctAnswer: 3000,
        unit: "établissements",
        explanation: "La France compte environ 3 000 établissements hospitaliers, incluant les hôpitaux publics, privés et les établissements privés à but non lucratif."
      },
      {
        question: "Quelle est la taille moyenne d'un établissement hospitalier en nombre d'employés ?",
        correctAnswer: 430,
        unit: "employés",
        explanation: "Un établissement hospitalier français emploie en moyenne 430 personnes, tous métiers confondus (médical, paramédical, administratif, technique, etc.)."
      },
      {
        question: "Combien de personnes travaillent dans le secteur hospitalier en France ?",
        correctAnswer: 1.3,
        unit: "million",
        explanation: "En multipliant le nombre d'établissements (3 000) par la taille moyenne (430 employés), on obtient environ 1,3 million de personnes travaillant dans le secteur hospitalier."
      }
    ]
  },
  {
    id: "105",
    type: "multistep",
    question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
    finalExplanation: "Environ 3,2 millions d'IRM sont réalisées chaque année dans les hôpitaux publics français, représentant environ 60% de l'ensemble des IRM pratiquées en France.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'appareils d'IRM sont installés dans les hôpitaux publics en France ?",
        correctAnswer: 520,
        unit: "appareils",
        explanation: "On compte environ 520 appareils d'IRM installés dans les établissements publics de santé en France."
      },
      {
        question: "Combien d'examens IRM sont réalisés en moyenne par appareil et par jour ?",
        correctAnswer: 18,
        unit: "examens",
        explanation: "Un appareil d'IRM réalise en moyenne 18 examens par jour dans le secteur public."
      },
      {
        question: "Combien de jours par an ces appareils sont-ils opérationnels ?",
        correctAnswer: 340,
        unit: "jours",
        explanation: "Les appareils d'IRM fonctionnent environ 340 jours par an, en tenant compte des maintenances et des jours fériés."
      },
      {
        question: "Combien d'IRM sont réalisées chaque année dans les hôpitaux publics français ?",
        correctAnswer: 3.2,
        unit: "millions",
        explanation: "En multipliant le nombre d'appareils (520) par le nombre d'examens quotidiens (18) par le nombre de jours de fonctionnement (340), on obtient environ 3,2 millions d'IRM par an."
      }
    ]
  },
  {
    id: "h1",
    type: "multistep",
    question: "Combien de chambres individuelles faut-il pour équiper tous les hôpitaux français ?",
    finalExplanation: "Environ 250 000 chambres individuelles seraient nécessaires pour équiper tous les hôpitaux français, ce qui représenterait un investissement considérable pour le système de santé.",
    theme: "santé",
    steps: [
      {
        question: "Combien de lits hospitaliers compte le système de santé français ?",
        correctAnswer: 400000,
        unit: "lits",
        explanation: "Le système hospitalier français dispose d'environ 400 000 lits toutes spécialités confondues (médecine, chirurgie, obstétrique, psychiatrie, soins de suite et réadaptation)."
      },
      {
        question: "Quel pourcentage de ces lits se trouve dans des chambres doubles ou collectives ?",
        correctAnswer: 62.5,
        unit: "%",
        explanation: "Environ 62,5% des lits hospitaliers se trouvent encore dans des chambres doubles ou collectives, bien que la tendance soit à l'augmentation des chambres individuelles."
      },
      {
        question: "Combien de chambres individuelles faut-il donc pour équiper tous les hôpitaux français ?",
        correctAnswer: 250000,
        unit: "chambres",
        explanation: "Si l'on transformait toutes les chambres doubles ou collectives (62,5% de 400 000 lits, soit 250 000 lits) en chambres individuelles, il faudrait créer 250 000 chambres individuelles."
      }
    ]
  },
  {
    id: "h2",
    type: "multistep",
    question: "Combien de litres de solution hydroalcoolique sont utilisés chaque année dans les hôpitaux français ?",
    finalExplanation: "Environ 7,5 millions de litres de solution hydroalcoolique sont utilisés chaque année dans les hôpitaux français, un chiffre qui a considérablement augmenté depuis la pandémie de COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien de journées d'hospitalisation sont comptabilisées chaque année en France ?",
        correctAnswer: 115,
        unit: "millions",
        explanation: "On compte environ 115 millions de journées d'hospitalisation par an en France, tous établissements confondus."
      },
      {
        question: "Combien de soignants interviennent en moyenne auprès d'un patient hospitalisé par jour ?",
        correctAnswer: 12,
        unit: "soignants",
        explanation: "En moyenne, 12 soignants différents (médecins, infirmiers, aides-soignants, etc.) interviennent auprès d'un patient hospitalisé chaque jour."
      },
      {
        question: "Combien de frictions hydroalcooliques sont réalisées en moyenne par soignant et par patient ?",
        correctAnswer: 2,
        unit: "frictions",
        explanation: "Un soignant réalise en moyenne 2 frictions hydroalcooliques par patient (entrée et sortie de la chambre ou avant/après un soin)."
      },
      {
        question: "Quelle quantité de solution est utilisée pour une friction hydroalcoolique ?",
        correctAnswer: 3,
        unit: "ml",
        explanation: "Une friction hydroalcoolique nécessite environ 3 ml de solution pour être efficace."
      },
      {
        question: "Combien de litres de solution hydroalcoolique sont utilisés chaque année dans les hôpitaux français ?",
        correctAnswer: 7.5,
        unit: "millions",
        explanation: "En multipliant le nombre de journées d'hospitalisation (115 millions) par le nombre de soignants (12) par le nombre de frictions (2) par la quantité de solution (3 ml) et en convertissant en litres, on obtient environ 7,5 millions de litres."
      }
    ]
  },
  {
    id: "h3",
    type: "multistep",
    question: "Combien de patients une clinique généraliste moyenne peut-elle traiter par an en France ?",
    finalExplanation: "Une clinique généraliste moyenne en France peut traiter environ 15 000 patients par an, en fonction de sa taille, de ses spécialités et de son taux d'occupation.",
    theme: "santé",
    steps: [
      {
        question: "Combien de lits compte une clinique généraliste moyenne en France ?",
        correctAnswer: 100,
        unit: "lits",
        explanation: "Une clinique généraliste moyenne en France dispose d'environ 100 lits, bien que ce nombre varie considérablement selon les établissements."
      },
      {
        question: "Quel est le taux d'occupation moyen des lits dans une clinique ?",
        correctAnswer: 82,
        unit: "%",
        explanation: "Le taux d'occupation moyen des lits dans une clinique française est d'environ 82%, un chiffre qui reflète une utilisation efficace des ressources tout en gardant une marge pour les urgences."
      },
      {
        question: "Quelle est la durée moyenne de séjour d'un patient en clinique ?",
        correctAnswer: 2,
        unit: "jours",
        explanation: "La durée moyenne de séjour d'un patient en clinique généraliste est d'environ 2 jours, nettement inférieure à celle des hôpitaux publics grâce à la spécialisation dans les interventions programmées."
      },
      {
        question: "Combien de patients une clinique généraliste moyenne peut-elle traiter par an ?",
        correctAnswer: 15000,
        unit: "patients",
        explanation: "En calculant (100 lits × 82% d'occupation × 365 jours) ÷ 2 jours de séjour moyen, on obtient environ 15 000 patients par an."
      }
    ]
  },
  {
    id: "h4",
    type: "multistep",
    question: "Combien de seringues sont utilisées chaque année dans le système de santé français ?",
    finalExplanation: "Environ 800 millions de seringues sont utilisées chaque année dans le système de santé français, incluant les hôpitaux, cliniques, cabinets médicaux et patients en auto-traitement.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'injections médicamenteuses sont réalisées quotidiennement dans les hôpitaux français ?",
        correctAnswer: 1.8,
        unit: "millions",
        explanation: "Environ 1,8 million d'injections médicamenteuses sont réalisées chaque jour dans les hôpitaux français."
      },
      {
        question: "Combien d'injections sont réalisées en ville (hors hôpitaux) quotidiennement ?",
        correctAnswer: 0.4,
        unit: "million",
        explanation: "Environ 400 000 injections sont réalisées quotidiennement en ville par les professionnels de santé libéraux ou par les patients eux-mêmes (diabétiques, par exemple)."
      },
      {
        question: "Combien de seringues sont utilisées chaque année dans le système de santé français ?",
        correctAnswer: 800,
        unit: "millions",
        explanation: "En additionnant les injections hospitalières et ville (2,2 millions par jour) et en multipliant par 365 jours, on obtient environ 800 millions de seringues par an."
      }
    ]
  },
  {
    id: "h5",
    type: "multistep",
    question: "Combien de stéthoscopes sont vendus par an aux nouveaux médecins ?",
    finalExplanation: "Environ 8 500 stéthoscopes sont vendus chaque année aux nouveaux médecins en France, principalement à des étudiants en fin de cursus ou à de jeunes diplômés.",
    theme: "santé",
    steps: [
      {
        question: "Combien de nouveaux médecins sont diplômés chaque année en France ?",
        correctAnswer: 9500,
        unit: "médecins",
        explanation: "Environ 9 500 nouveaux médecins obtiennent leur diplôme chaque année en France, un chiffre en augmentation suite à la hausse progressive du numerus clausus."
      },
      {
        question: "Quel pourcentage de ces nouveaux médecins achète un nouveau stéthoscope à la fin de leurs études ?",
        correctAnswer: 90,
        unit: "%",
        explanation: "Environ 90% des nouveaux médecins achètent un stéthoscope neuf au moment de leur installation ou en fin d'études, les autres utilisant un stéthoscope déjà acquis durant leurs études ou hérité."
      },
      {
        question: "Combien de stéthoscopes sont vendus par an aux nouveaux médecins ?",
        correctAnswer: 8500,
        unit: "stéthoscopes",
        explanation: "En multipliant le nombre de nouveaux médecins (9 500) par le pourcentage d'achat (90%), on obtient environ 8 500 stéthoscopes vendus aux nouveaux médecins chaque année."
      }
    ]
  },
  {
    id: "h6",
    type: "multistep",
    question: "Quel est le besoin annuel en gants jetables dans un hôpital moyen ?",
    finalExplanation: "Un hôpital moyen en France consomme environ 2,1 millions de gants jetables par an, témoignant de l'importance de cet équipement de protection dans la pratique médicale quotidienne.",
    theme: "santé",
    steps: [
      {
        question: "Combien de lits compte un hôpital moyen en France ?",
        correctAnswer: 350,
        unit: "lits",
        explanation: "Un hôpital moyen en France dispose d'environ 350 lits, bien que ce nombre varie selon qu'il s'agit d'un CHU, d'un centre hospitalier général ou d'un établissement spécialisé."
      },
      {
        question: "Combien d'actes nécessitant des gants sont réalisés en moyenne par lit et par jour ?",
        correctAnswer: 18,
        unit: "actes",
        explanation: "Environ 18 actes nécessitant des gants (soins, examens, prélèvements, etc.) sont réalisés par lit et par jour en moyenne dans un hôpital."
      },
      {
        question: "Combien de gants sont utilisés en moyenne par acte ?",
        correctAnswer: 2,
        unit: "gants",
        explanation: "En moyenne, 2 gants sont utilisés par acte (une paire), bien que certaines interventions plus complexes puissent nécessiter plusieurs paires."
      },
      {
        question: "Quel est le besoin annuel en gants jetables dans un hôpital moyen ?",
        correctAnswer: 2.1,
        unit: "millions",
        explanation: "En multipliant le nombre de lits (350) par le nombre d'actes par jour (18) par le nombre de gants par acte (2) par 365 jours, on obtient environ 2,1 millions de gants par an."
      }
    ]
  },
  {
    id: "h7",
    type: "multistep",
    question: "Combien de SMS de rappel de rendez-vous médicaux sont envoyés chaque année ?",
    finalExplanation: "Environ 220 millions de SMS de rappel de rendez-vous médicaux sont envoyés chaque année en France, une pratique qui s'est généralisée pour réduire le taux d'absentéisme aux consultations.",
    theme: "santé",
    steps: [
      {
        question: "Combien de consultations médicales ont lieu chaque année en France (hôpitaux et ville) ?",
        correctAnswer: 440,
        unit: "millions",
        explanation: "Environ 440 millions de consultations médicales sont réalisées chaque année en France, tous professionnels de santé confondus."
      },
      {
        question: "Quel pourcentage des structures médicales utilisent un système de rappel par SMS ?",
        correctAnswer: 75,
        unit: "%",
        explanation: "Environ 75% des structures médicales (cabinets, cliniques, hôpitaux) utilisent désormais un système de rappel de rendez-vous par SMS."
      },
      {
        question: "Pour quel pourcentage des rendez-vous un SMS de rappel est-il envoyé ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Un SMS de rappel est envoyé pour environ 70% des rendez-vous dans les structures qui utilisent ce système (certains patients n'ayant pas de téléphone mobile ou n'ayant pas communiqué leur numéro)."
      },
      {
        question: "Combien de SMS de rappel de rendez-vous médicaux sont envoyés chaque année ?",
        correctAnswer: 220,
        unit: "millions",
        explanation: "En multipliant le nombre total de consultations (440 millions) par le taux d'utilisation du système (75%) par le taux d'envoi effectif (70%), on obtient environ 220 millions de SMS par an."
      }
    ]
  },
  {
    id: "h8",
    type: "multistep",
    question: "Combien de gigaoctets de données médicales sont générés chaque jour en France ?",
    finalExplanation: "Environ 45 téraoctets (45 000 gigaoctets) de données médicales sont générés chaque jour en France par l'ensemble du système de santé.",
    theme: "santé",
    steps: [
      {
        question: "Combien d'examens d'imagerie médicale sont réalisés chaque jour en France ?",
        correctAnswer: 75000,
        unit: "examens",
        explanation: "Environ 75 000 examens d'imagerie médicale (radiographies, scanners, IRM, échographies) sont réalisés quotidiennement en France."
      },
      {
        question: "Quelle est la taille moyenne des données générées par un examen d'imagerie ?",
        correctAnswer: 250,
        unit: "Mo",
        explanation: "Un examen d'imagerie génère en moyenne 250 Mo de données, avec une grande variabilité selon le type d'examen (une IRM complète pouvant générer jusqu'à 1 Go)."
      },
      {
        question: "Combien de dossiers patients électroniques sont mis à jour chaque jour ?",
        correctAnswer: 1.2,
        unit: "millions",
        explanation: "Environ 1,2 million de dossiers patients électroniques sont créés ou mis à jour chaque jour dans l'ensemble du système de santé français."
      },
      {
        question: "Quelle est la taille moyenne des données ajoutées à un dossier patient lors d'une mise à jour ?",
        correctAnswer: 15,
        unit: "Mo",
        explanation: "Une mise à jour de dossier patient ajoute en moyenne 15 Mo de données (texte, petites images, résultats d'analyses)."
      },
      {
        question: "Combien de gigaoctets de données médicales sont générés chaque jour en France ?",
        correctAnswer: 45000,
        unit: "Go",
        explanation: "En additionnant les données d'imagerie (75 000 × 250 Mo = 18 750 Go) et les données de dossiers patients (1,2 million × 15 Mo = 18 000 Go), puis en ajoutant environ 8 250 Go pour les autres types de données médicales (recherche, analyses de laboratoire, etc.), on obtient un total d'environ 45 000 Go (45 To) par jour."
      }
    ]
  },
  {
    id: "h9",
    type: "multistep",
    question: "Quel est le nombre total de consultations chez les généralistes en France chaque année ?",
    finalExplanation: "Environ 340 millions de consultations sont réalisées chaque année chez les médecins généralistes en France, montrant leur rôle central dans le système de santé français.",
    theme: "santé",
    steps: [
      {
        question: "Combien de médecins généralistes exercent en France ?",
        correctAnswer: 55000,
        unit: "médecins",
        explanation: "La France compte environ 55 000 médecins généralistes en exercice."
      },
      {
        question: "Combien de jours par an un médecin généraliste reçoit-il des patients en moyenne ?",
        correctAnswer: 220,
        unit: "jours",
        explanation: "Un médecin généraliste consulte en moyenne 220 jours par an, en tenant compte des congés, formations, et autres absences."
      },
      {
        question: "Combien de patients un généraliste voit-il en moyenne par jour de consultation ?",
        correctAnswer: 28,
        unit: "patients",
        explanation: "Un médecin généraliste voit en moyenne 28 patients par jour de consultation (consultations au cabinet et visites à domicile incluses)."
      },
      {
        question: "Quel est le nombre total de consultations chez les généralistes en France chaque année ?",
        correctAnswer: 340,
        unit: "millions",
        explanation: "En multipliant le nombre de généralistes (55 000) par le nombre de jours de consultation (220) par le nombre moyen de patients par jour (28), on obtient environ 340 millions de consultations par an."
      }
    ]
  },
  {
    id: "h10",
    type: "multistep",
    question: "Combien de téléconsultations sont réalisées chaque mois en France ?",
    finalExplanation: "Environ 2,1 millions de téléconsultations sont réalisées chaque mois en France, un chiffre qui a connu une forte augmentation depuis la pandémie de COVID-19.",
    theme: "santé",
    steps: [
      {
        question: "Combien de consultations médicales ont lieu chaque mois en France, tous modes confondus ?",
        correctAnswer: 37,
        unit: "millions",
        explanation: "Environ 37 millions de consultations médicales (généralistes et spécialistes) ont lieu chaque mois en France."
      },
      {
        question: "Quel pourcentage des consultations médicales sont désormais réalisées en téléconsultation ?",
        correctAnswer: 5.7,
        unit: "%",
        explanation: "Environ 5,7% des consultations médicales sont réalisées en téléconsultation, un chiffre qui s'est stabilisé après avoir fortement augmenté pendant la pandémie."
      },
      {
        question: "Combien de téléconsultations sont réalisées chaque mois en France ?",
        correctAnswer: 2.1,
        unit: "millions",
        explanation: "En multipliant le nombre total de consultations mensuelles (37 millions) par le pourcentage de téléconsultations (5,7%), on obtient environ 2,1 millions de téléconsultations par mois."
      }
    ]
  },
  {
    id: "h11",
    type: "multistep",
    question: "Combien de tensiomètres sont vendus aux particuliers chaque année ?",
    finalExplanation: "Environ 1,8 million de tensiomètres sont vendus aux particuliers chaque année en France, reflétant l'importance croissante du suivi tensionnel à domicile pour les patients hypertendus ou à risque cardiovasculaire.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes souffrent d'hypertension artérielle en France ?",
        correctAnswer: 15,
        unit: "millions",
        explanation: "Environ 15 millions de personnes souffrent d'hypertension artérielle en France, diagnostiquées ou non."
      },
      {
        question: "Quel pourcentage de ces personnes possède déjà un tensiomètre à domicile ?",
        correctAnswer: 40,
        unit: "%",
        explanation: "Environ 40% des personnes hypertendues possèdent déjà un tensiomètre à domicile pour suivre leur tension régulièrement."
      },
      {
        question: "Quel pourcentage des hypertendus achète un tensiomètre chaque année ?",
        correctAnswer: 12,
        unit: "%",
        explanation: "Environ 12% des personnes hypertendues achètent un tensiomètre chaque année (premiers acheteurs ou renouvellement d'appareils obsolètes)."
      },
      {
        question: "Combien de personnes non hypertendues achètent un tensiomètre chaque année ?",
        correctAnswer: 0,
        unit: "million",
        explanation: "Environ 0,6 million de personnes non diagnostiquées comme hypertendues achètent également un tensiomètre chaque année (personnes à risque, personnes âgées, suivi ponctuel)."
      },
      {
        question: "Combien de tensiomètres sont vendus aux particuliers chaque année ?",
        correctAnswer: 1.8,
        unit: "millions",
        explanation: "En additionnant les achats des personnes hypertendues (15 millions × 12% = 1,8 million) et des personnes non hypertendues (0 million), on obtient environ 1,8 million de tensiomètres vendus par an."
      }
    ]
  },
  {
    id: "h12",
    type: "multistep",
    question: "Combien de personnes utilisent une app de suivi de diabète en France ?",
    finalExplanation: "Environ 0.85 million de personnes utilisent une application mobile de suivi du diabète en France, un nombre en constante augmentation avec la démocratisation des outils numériques de santé.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes sont atteintes de diabète en France ?",
        correctAnswer: 4.2,
        unit: "millions",
        explanation: "Environ 4,2 millions de personnes sont atteintes de diabète en France (types 1 et 2 confondus)."
      },
      {
        question: "Quel pourcentage des diabétiques a moins de 75 ans ?",
        correctAnswer: 68,
        unit: "%",
        explanation: "Environ 68% des personnes diabétiques ont moins de 75 ans, une tranche d'âge plus susceptible d'utiliser des applications mobiles."
      },
      {
        question: "Parmi ces patients de moins de 75 ans, quel pourcentage utilise un smartphone régulièrement ?",
        correctAnswer: 70,
        unit: "%",
        explanation: "Environ 70% des patients diabétiques de moins de 75 ans utilisent régulièrement un smartphone."
      },
      {
        question: "Parmi ces utilisateurs de smartphone, quel pourcentage utilise une application de suivi du diabète ?",
        correctAnswer: 43,
        unit: "%",
        explanation: "Environ 43% des patients diabétiques équipés d'un smartphone utilisent une application dédiée au suivi de leur maladie."
      },
      {
        question: "Combien de personnes utilisent une app de suivi de diabète en France ?",
        correctAnswer: 0.85,
        unit: "million",
        explanation: "En multipliant le nombre total de diabétiques (4,2 millions) par le pourcentage de moins de 75 ans (68%) par le taux d'utilisation de smartphone (70%) par le taux d'utilisation d'applications dédiées (43%), on obtient environ 0,85 million de personnes."
      }
    ]
  },
  {
    id: "h13",
    type: "multistep",
    question: "Quel est le marché potentiel des montres connectées santé chez les plus de 60 ans ?",
    finalExplanation: "Le marché potentiel des montres connectées santé chez les plus de 60 ans représente environ 3 millions de personnes en France, un segment en forte croissance avec l'augmentation de l'intérêt pour la santé connectée dans cette population.",
    theme: "santé",
    steps: [
      {
        question: "Combien de personnes de plus de 60 ans compte la population française ?",
        correctAnswer: 17,
        unit: "millions",
        explanation: "La population française compte environ 17 millions de personnes âgées de plus de 60 ans."
      },
      {
        question: "Quel pourcentage de cette population est suffisamment autonome pour utiliser une montre connectée ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% des plus de 60 ans sont suffisamment autonomes et en capacité cognitive et physique d'utiliser une montre connectée."
      },
      {
        question: "Parmi ces personnes, quel pourcentage s'intéresse à sa santé au point d'envisager un suivi numérique ?",
        correctAnswer: 42,
        unit: "%",
        explanation: "Environ 42% des seniors autonomes portent un intérêt suffisant à leur santé pour envisager l'utilisation d'un dispositif de suivi numérique."
      },
      {
        question: "Parmi ces personnes intéressées, quelle proportion possède le pouvoir d'achat nécessaire pour s'offrir une montre connectée de qualité ?",
        correctAnswer: 50,
        unit: "%",
        explanation: "Environ 50% des seniors intéressés par le suivi numérique de santé disposent du pouvoir d'achat nécessaire pour investir dans une montre connectée de qualité."
      },
      {
        question: "Quel est le marché potentiel des montres connectées santé chez les plus de 60 ans ?",
        correctAnswer: 3,
        unit: "millions",
        explanation: "En multipliant le nombre total de personnes de plus de 60 ans (17 millions) par le taux d'autonomie (85%) par le taux d'intérêt pour le suivi de santé (42%) par le taux de pouvoir d'achat suffisant (50%), on obtient environ 3 millions de personnes."
      }
    ]
  },
  {
    id: "h14",
    type: "simple",
    question: "Combien de médecins hospitaliers exercent en France ?",
    correctAnswer: 110000,
    unit: "médecins",
    explanation: "Environ 110 000 médecins exercent dans les hôpitaux français (publics et privés), ce qui représente un peu moins de la moitié du total des médecins en activité dans le pays.",
    theme: "santé"
  },
  {
    id: "h15",
    type: "simple",
    question: "Quel est le nombre moyen de lits par infirmière dans un service de médecine générale ?",
    correctAnswer: 8,
    unit: "lits",
    explanation: "Dans un service de médecine générale, une infirmière s'occupe en moyenne de 8 lits, un ratio qui peut varier selon l'intensité des soins requis et l'organisation du service.",
    theme: "santé"
  },
  {
    id: "h16",
    type: "simple",
    question: "Combien de scanners médicaux sont installés en France ?",
    correctAnswer: 1250,
    unit: "scanners",
    explanation: "La France dispose d'environ 1 250 scanners médicaux (tomodensitomètres) répartis sur l'ensemble du territoire, dans les hôpitaux publics et privés.",
    theme: "santé"
  },
  {
    id: "h17",
    type: "simple",
    question: "Quel est le nombre de lits d'hospitalisation pour 1000 habitants en France ?",
    correctAnswer: 5.8,
    unit: "lits",
    explanation: "La France compte environ 5,8 lits d'hospitalisation pour 1000 habitants, un ratio légèrement supérieur à la moyenne européenne.",
    theme: "santé"
  },
  {
    id: "h18",
    type: "simple",
    question: "Quel est le budget annuel moyen d'un hôpital universitaire en France ?",
    correctAnswer: 750,
    unit: "millions d'euros",
    explanation: "Un Centre Hospitalier Universitaire (CHU) en France dispose en moyenne d'un budget annuel d'environ 750 millions d'euros, mais ce montant varie considérablement selon la taille de l'établissement.",
    theme: "santé"
  },
  {
    id: "h19",
    type: "simple",
    question: "Combien d'heures de bloc opératoire sont réalisées chaque année en France ?",
    correctAnswer: 7.5,
    unit: "millions",
    explanation: "Environ 7,5 millions d'heures de bloc opératoire sont réalisées chaque année en France, tous établissements et toutes spécialités confondus.",
    theme: "santé"
  },
  {
    id: "h20",
    type: "simple",
    question: "Quel est le coût d'une journée d'hospitalisation en service de réanimation ?",
    correctAnswer: 2500,
    unit: "euros",
    explanation: "Une journée d'hospitalisation en service de réanimation coûte environ 2 500 euros, en raison de l'intensité des soins, du personnel nécessaire et des équipements sophistiqués.",
    theme: "santé"
  },
  {
    id: "h21",
    type: "simple",
    question: "Combien d'établissements pratiquent la chirurgie cardiaque en France ?",
    correctAnswer: 65,
    unit: "établissements",
    explanation: "Environ 65 établissements sont autorisés à pratiquer la chirurgie cardiaque en France, reflétant la haute spécialisation de cette activité.",
    theme: "santé"
  },
  {
    id: "h22",
    type: "simple",
    question: "Combien de transplantations d'organes sont réalisées chaque année en France ?",
    correctAnswer: 5900,
    unit: "transplantations",
    explanation: "Environ 5 900 transplantations d'organes sont réalisées chaque année en France, tous organes confondus, mais ce chiffre reste insuffisant face aux besoins.",
    theme: "santé"
  },
  {
    id: "h23",
    type: "simple",
    question: "Quel est le nombre moyen de passages aux urgences par jour en France ?",
    correctAnswer: 52000,
    unit: "passages",
    explanation: "On compte environ 52 000 passages quotidiens dans les services d'urgence français, soit près de 19 millions par an.",
    theme: "santé"
  },
  {
    id: "h24",
    type: "simple",
    question: "Combien de naissances ont lieu chaque jour dans les maternités françaises ?",
    correctAnswer: 2000,
    unit: "naissances",
    explanation: "Environ 2 000 naissances ont lieu chaque jour dans les maternités françaises, soit environ 730 000 par an.",
    theme: "santé"
  },
  {
    id: "h25",
    type: "simple",
    question: "Quel est le nombre de blocs opératoires en France ?",
    correctAnswer: 8200,
    unit: "blocs",
    explanation: "La France compte environ 8 200 blocs opératoires répartis dans les différents établissements de santé du territoire.",
    theme: "santé"
  },
  {
    id: "h26",
    type: "simple",
    question: "Combien de séances de dialyse sont réalisées chaque année en France ?",
    correctAnswer: 6.8,
    unit: "millions",
    explanation: "Environ 6,8 millions de séances de dialyse sont réalisées chaque année en France pour les patients souffrant d'insuffisance rénale chronique.",
    theme: "santé"
  },
  {
    id: "h27",
    type: "simple",
    question: "Quel est le nombre moyen de patients par médecin hospitalier ?",
    correctAnswer: 215,
    unit: "patients",
    explanation: "Un médecin hospitalier prend en charge en moyenne 215 patients différents par an, avec de fortes variations selon les spécialités.",
    theme: "santé"
  },
  {
    id: "h28",
    type: "simple",
    question: "Combien d'hélicoptères sanitaires sont disponibles pour les urgences médicales en France ?",
    correctAnswer: 90,
    unit: "hélicoptères",
    explanation: "La France dispose d'environ 90 hélicoptères sanitaires pour les urgences médicales, répartis sur l'ensemble du territoire.",
    theme: "santé"
  },
  {
    id: "h29",
    type: "simple",
    question: "Quel est le nombre d'unités de soins intensifs en France ?",
    correctAnswer: 405,
    unit: "unités",
    explanation: "On compte environ 405 unités de soins intensifs en France, réparties dans les différents établissements hospitaliers du pays.",
    theme: "santé"
  },
  {
    id: "h30",
    type: "simple",
    question: "Combien de tonnes de linge sont traitées chaque année par les blanchisseries hospitalières ?",
    correctAnswer: 320000,
    unit: "tonnes",
    explanation: "Les blanchisseries hospitalières françaises traitent environ 320 000 tonnes de linge par an, soit près d'une tonne par jour et par établissement en moyenne.",
    theme: "santé"
  }
]
