
import { Question, MultiStepQuestion } from "@/components/types";

// Questions related to world economy and infrastructure
export const mondeEconomieQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "ecole-primaire-nigeria",
    type: "multistep",
    question: "Combien d'élèves entrent chaque année à l'école primaire au Nigeria ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Nigeria ?",
        correctAnswer: 213000000,
        unit: "personnes",
        explanation: "Le Nigeria compte environ 213 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population nigériane est en âge d'entrer à l'école primaire chaque année ?",
        correctAnswer: 3.5,
        unit: "%",
        explanation: "Environ 3,5% de la population nigériane est en âge d'entrer à l'école primaire chaque année."
      },
      {
        question: "Quel est le taux de scolarisation en primaire au Nigeria ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Le taux de scolarisation en primaire au Nigeria est d'environ 65%."
      },
      {
        question: "Combien d'élèves entrent chaque année à l'école primaire au Nigeria ?",
        correctAnswer: 4850000,
        unit: "élèves",
        explanation: "Environ 4,85 millions d'élèves entrent chaque année à l'école primaire au Nigeria."
      }
    ],
    finalExplanation: "Avec une population de 213 millions d'habitants, dont 3,5% sont en âge d'entrer à l'école primaire chaque année, et un taux de scolarisation de 65%, environ 4,85 millions d'élèves entrent chaque année à l'école primaire au Nigeria."
  },
  {
    id: "zones-urbanisees-usa",
    type: "multistep",
    question: "Combien de kilomètres carrés sont urbanisés aux États-Unis ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des États-Unis ?",
        correctAnswer: 9800000,
        unit: "km²",
        explanation: "La superficie totale des États-Unis est d'environ 9,8 millions de kilomètres carrés."
      },
      {
        question: "Quel pourcentage de cette superficie estimez-vous être urbanisé ?",
        correctAnswer: 3.6,
        unit: "%",
        explanation: "Environ 3,6% du territoire américain est urbanisé."
      },
      {
        question: "Combien de kilomètres carrés sont urbanisés aux États-Unis ?",
        correctAnswer: 352800,
        unit: "km²",
        explanation: "Environ 352 800 kilomètres carrés sont urbanisés aux États-Unis."
      }
    ],
    finalExplanation: "Sur les 9,8 millions de kilomètres carrés que comptent les États-Unis, environ 3,6% du territoire est urbanisé, ce qui représente environ 352 800 kilomètres carrés de zones urbaines."
  },
  {
    id: "logements-inde",
    type: "multistep",
    question: "Combien de logements sont construits chaque année en Inde ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Inde ?",
        correctAnswer: 1408000000,
        unit: "personnes",
        explanation: "L'Inde compte environ 1,408 milliard d'habitants."
      },
      {
        question: "Quel est le nombre moyen de personnes par foyer en Inde ?",
        correctAnswer: 4.5,
        unit: "personnes",
        explanation: "En moyenne, il y a 4,5 personnes par foyer en Inde."
      },
      {
        question: "Quelle est la croissance annuelle des besoins en logements en Inde (en pourcentage) ?",
        correctAnswer: 1.8,
        unit: "%",
        explanation: "La croissance annuelle des besoins en logements en Inde est d'environ 1,8%."
      },
      {
        question: "Combien de logements sont construits chaque année en Inde ?",
        correctAnswer: 5600000,
        unit: "logements",
        explanation: "Environ 5,6 millions de logements sont construits chaque année en Inde."
      }
    ],
    finalExplanation: "Avec une population de 1,408 milliard d'habitants, environ 4,5 personnes par foyer en moyenne, et une croissance annuelle des besoins en logements de 1,8%, environ 5,6 millions de nouveaux logements sont construits chaque année en Inde."
  },
  {
    id: "metro-tokyo",
    type: "multistep",
    question: "Combien de personnes prennent le métro chaque jour à Tokyo ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'agglomération de Tokyo ?",
        correctAnswer: 37400000,
        unit: "personnes",
        explanation: "L'agglomération de Tokyo compte environ 37,4 millions d'habitants."
      },
      {
        question: "Quel pourcentage de cette population estimez-vous utiliser le métro quotidiennement ?",
        correctAnswer: 26,
        unit: "%",
        explanation: "Environ 26% de la population de Tokyo utilise le métro quotidiennement."
      },
      {
        question: "Combien de personnes prennent le métro chaque jour à Tokyo ?",
        correctAnswer: 9720000,
        unit: "personnes",
        explanation: "Environ 9,72 millions de personnes prennent le métro chaque jour à Tokyo."
      }
    ],
    finalExplanation: "Le réseau de métro de Tokyo est l'un des plus fréquentés au monde. Avec une population de 37,4 millions d'habitants dans l'agglomération et environ 26% utilisant le métro quotidiennement, environ 9,72 millions de personnes empruntent le métro chaque jour à Tokyo."
  },
  {
    id: "repas-restaurants-italie",
    type: "multistep",
    question: "Combien de repas sont servis chaque jour dans les restaurants en Italie ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Italie ?",
        correctAnswer: 60000000,
        unit: "personnes",
        explanation: "L'Italie compte environ 60 millions d'habitants."
      },
      {
        question: "Combien de touristes visitent l'Italie chaque jour en moyenne ?",
        correctAnswer: 220000,
        unit: "personnes",
        explanation: "En moyenne, environ 220 000 touristes visitent l'Italie chaque jour."
      },
      {
        question: "Quel pourcentage de la population locale et des touristes mange au restaurant chaque jour ?",
        correctAnswer: 22,
        unit: "%",
        explanation: "Environ 22% de la population locale et des touristes mangent au restaurant chaque jour."
      },
      {
        question: "Combien de repas sont servis chaque jour dans les restaurants en Italie ?",
        correctAnswer: 13250000,
        unit: "repas",
        explanation: "Environ 13,25 millions de repas sont servis chaque jour dans les restaurants en Italie."
      }
    ],
    finalExplanation: "Avec une population de 60 millions d'habitants, environ 220 000 touristes quotidiens, et 22% de ces personnes mangeant au restaurant chaque jour, environ 13,25 millions de repas sont servis quotidiennement dans les restaurants italiens."
  },
  {
    id: "hopitaux-afrique-ouest",
    type: "multistep",
    question: "Combien d'hôpitaux faudrait-il pour desservir toute la population de l'Afrique de l'Ouest ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale de l'Afrique de l'Ouest ?",
        correctAnswer: 400000000,
        unit: "personnes",
        explanation: "L'Afrique de l'Ouest compte environ 400 millions d'habitants."
      },
      {
        question: "Combien de personnes en moyenne peut desservir un hôpital standard ?",
        correctAnswer: 200000,
        unit: "personnes",
        explanation: "Un hôpital standard peut desservir en moyenne 200 000 personnes."
      },
      {
        question: "Combien d'hôpitaux faudrait-il pour desservir toute la population de l'Afrique de l'Ouest ?",
        correctAnswer: 2000,
        unit: "hôpitaux",
        explanation: "Il faudrait environ 2 000 hôpitaux pour desservir toute la population de l'Afrique de l'Ouest."
      }
    ],
    finalExplanation: "Pour une population d'environ 400 millions d'habitants en Afrique de l'Ouest, et en considérant qu'un hôpital standard peut desservir environ 200 000 personnes, il faudrait approximativement 2 000 hôpitaux pour couvrir l'ensemble de la région."
  },
  {
    id: "cables-electriques-allemagne",
    type: "multistep",
    question: "Combien de kilomètres de câbles électriques sont nécessaires pour alimenter toute l'Allemagne ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie de l'Allemagne ?",
        correctAnswer: 357000,
        unit: "km²",
        explanation: "La superficie de l'Allemagne est d'environ 357 000 km²."
      },
      {
        question: "Quelle est la densité moyenne de câbles électriques par km² en Allemagne ?",
        correctAnswer: 126,
        unit: "km/km²",
        explanation: "La densité moyenne de câbles électriques en Allemagne est d'environ 126 km par km²."
      },
      {
        question: "Combien de kilomètres de câbles électriques sont nécessaires pour alimenter toute l'Allemagne ?",
        correctAnswer: 45000000,
        unit: "km",
        explanation: "Environ 45 millions de kilomètres de câbles électriques sont nécessaires pour alimenter toute l'Allemagne."
      }
    ],
    finalExplanation: "Avec une superficie de 357 000 km² et une densité moyenne de 126 km de câbles par km², environ 45 millions de kilomètres de câbles électriques sont nécessaires pour alimenter l'ensemble de l'Allemagne, incluant les réseaux à haute tension, moyenne tension et basse tension."
  },
  {
    id: "bidonvilles-bangladesh",
    type: "multistep",
    question: "Combien de personnes vivent dans des bidonvilles au Bangladesh ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Bangladesh ?",
        correctAnswer: 169000000,
        unit: "personnes",
        explanation: "Le Bangladesh compte environ 169 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population vit en zone urbaine au Bangladesh ?",
        correctAnswer: 39,
        unit: "%",
        explanation: "Environ 39% de la population du Bangladesh vit en zone urbaine."
      },
      {
        question: "Parmi la population urbaine du Bangladesh, quel pourcentage vit dans des bidonvilles ?",
        correctAnswer: 40,
        unit: "%",
        explanation: "Environ 40% de la population urbaine du Bangladesh vit dans des bidonvilles."
      },
      {
        question: "Combien de personnes vivent dans des bidonvilles au Bangladesh ?",
        correctAnswer: 26360000,
        unit: "personnes",
        explanation: "Environ 26,36 millions de personnes vivent dans des bidonvilles au Bangladesh."
      }
    ],
    finalExplanation: "Avec une population de 169 millions d'habitants, dont 39% vivent en zone urbaine, et 40% de cette population urbaine vivant dans des bidonvilles, environ 26,36 millions de personnes vivent dans des bidonvilles au Bangladesh."
  },
  {
    id: "frontieres-europe",
    type: "multistep",
    question: "Combien de personnes traversent une frontière terrestre en Europe chaque jour ?",
    theme: "monde",
    steps: [
      {
        question: "Combien de pays composent l'espace Schengen en Europe ?",
        correctAnswer: 27,
        unit: "pays",
        explanation: "L'espace Schengen compte 27 pays européens."
      },
      {
        question: "Combien de frontières terrestres y a-t-il entre les pays européens ?",
        correctAnswer: 86,
        unit: "frontières",
        explanation: "Il y a environ 86 frontières terrestres entre les pays européens."
      },
      {
        question: "Combien de personnes en moyenne traversent chaque frontière terrestre européenne par jour ?",
        correctAnswer: 45000,
        unit: "personnes",
        explanation: "En moyenne, environ 45 000 personnes traversent chaque frontière terrestre européenne par jour."
      },
      {
        question: "Combien de personnes traversent une frontière terrestre en Europe chaque jour ?",
        correctAnswer: 3870000,
        unit: "personnes",
        explanation: "Environ 3,87 millions de personnes traversent une frontière terrestre en Europe chaque jour."
      }
    ],
    finalExplanation: "Avec 86 frontières terrestres en Europe et une moyenne de 45 000 personnes traversant chaque frontière quotidiennement, environ 3,87 millions de personnes traversent une frontière terrestre européenne chaque jour."
  },
  {
    id: "autobus-buenos-aires",
    type: "multistep",
    question: "Combien d'autobus sont nécessaires pour transporter 1 % de la population de Buenos Aires ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de Buenos Aires (agglomération) ?",
        correctAnswer: 15000000,
        unit: "personnes",
        explanation: "L'agglomération de Buenos Aires compte environ 15 millions d'habitants."
      },
      {
        question: "Combien représente 1% de cette population ?",
        correctAnswer: 150000,
        unit: "personnes",
        explanation: "1% de la population de Buenos Aires représente 150 000 personnes."
      },
      {
        question: "Combien de passagers peut transporter un autobus standard en moyenne ?",
        correctAnswer: 75,
        unit: "personnes",
        explanation: "Un autobus standard peut transporter en moyenne 75 personnes."
      },
      {
        question: "Combien d'autobus sont nécessaires pour transporter 1% de la population de Buenos Aires ?",
        correctAnswer: 2000,
        unit: "autobus",
        explanation: "Environ 2 000 autobus sont nécessaires pour transporter 1% de la population de Buenos Aires."
      }
    ],
    finalExplanation: "Pour transporter 1% de la population de Buenos Aires, soit 150 000 personnes, et en considérant qu'un autobus peut accueillir en moyenne 75 passagers, il faudrait environ 2 000 autobus."
  },
  {
    id: "supermarche-australie",
    type: "multistep",
    question: "Combien de personnes vivent à moins de 1 km d'un supermarché en Australie ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Australie ?",
        correctAnswer: 26000000,
        unit: "personnes",
        explanation: "L'Australie compte environ 26 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population australienne vit en zone urbaine ?",
        correctAnswer: 86,
        unit: "%",
        explanation: "Environ 86% de la population australienne vit en zone urbaine."
      },
      {
        question: "Parmi la population urbaine, quel pourcentage vit à moins de 1 km d'un supermarché ?",
        correctAnswer: 73,
        unit: "%",
        explanation: "Environ 73% de la population urbaine australienne vit à moins de 1 km d'un supermarché."
      },
      {
        question: "Combien de personnes vivent à moins de 1 km d'un supermarché en Australie ?",
        correctAnswer: 16300000,
        unit: "personnes",
        explanation: "Environ 16,3 millions de personnes vivent à moins de 1 km d'un supermarché en Australie."
      }
    ],
    finalExplanation: "Avec une population de 26 millions d'habitants, dont 86% vivent en zone urbaine, et 73% de cette population urbaine vivant à moins de 1 km d'un supermarché, environ 16,3 millions d'Australiens vivent à proximité immédiate d'un supermarché."
  },
  {
    id: "carburant-afrique-sud",
    type: "multistep",
    question: "Combien de litres de carburant sont consommés chaque jour en Afrique du Sud ?",
    theme: "monde",
    steps: [
      {
        question: "Combien de véhicules à moteur circulent en Afrique du Sud ?",
        correctAnswer: 12500000,
        unit: "véhicules",
        explanation: "Environ 12,5 millions de véhicules à moteur circulent en Afrique du Sud."
      },
      {
        question: "Quelle est la consommation moyenne de carburant par véhicule et par jour en Afrique du Sud ?",
        correctAnswer: 5.8,
        unit: "L",
        explanation: "La consommation moyenne de carburant par véhicule et par jour en Afrique du Sud est d'environ 5,8 litres."
      },
      {
        question: "Combien de litres de carburant sont consommés chaque jour en Afrique du Sud ?",
        correctAnswer: 72500000,
        unit: "L",
        explanation: "Environ 72,5 millions de litres de carburant sont consommés chaque jour en Afrique du Sud."
      }
    ],
    finalExplanation: "Avec environ 12,5 millions de véhicules à moteur en circulation et une consommation moyenne de 5,8 litres par véhicule et par jour, environ 72,5 millions de litres de carburant sont consommés quotidiennement en Afrique du Sud."
  },
  {
    id: "mon-ms-002",
    type: "multistep",
    question: "Combien d'heures sont travaillées dans le monde chaque jour ?",
    finalExplanation: "Environ 30,4 milliards d'heures sont travaillées dans le monde chaque jour, représentant l'effort collectif de l'humanité.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quel pourcentage de la population mondiale est en âge de travailler (15-64 ans) ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% de la population mondiale est en âge de travailler (15-64 ans)."
      },
      {
        question: "Parmi les personnes en âge de travailler, quel pourcentage occupe effectivement un emploi ?",
        correctAnswer: 58,
        unit: "%",
        explanation: "Environ 58% des personnes en âge de travailler occupent effectivement un emploi selon l'Organisation internationale du travail."
      },
      {
        question: "Combien d'heures une personne travaille-t-elle en moyenne par jour dans le monde ?",
        correctAnswer: 6.4,
        unit: "heures",
        explanation: "En moyenne, une personne travaille environ 6,4 heures par jour dans le monde, tous emplois confondus."
      },
      {
        question: "Combien d'heures sont donc travaillées dans le monde chaque jour ?",
        correctAnswer: 30.4,
        unit: "milliards",
        explanation: "En multipliant la population mondiale (8 milliards) par le pourcentage en âge de travailler (65%) par le taux d'emploi (58%) par le nombre d'heures travaillées par jour (6,4), on obtient environ 30,4 milliards d'heures."
      }
    ]
  },
  {
    id: "mon-ms-004",
    type: "multistep",
    question: "Combien de langues sont parlées dans le monde ?",
    finalExplanation: "Environ 7 100 langues sont parlées dans le monde aujourd'hui, bien que près de la moitié soit menacée d'extinction d'ici la fin du siècle.",
    theme: "monde",
    steps: [
      {
        question: "Combien de pays y a-t-il dans le monde (reconnus par l'ONU) ?",
        correctAnswer: 193,
        unit: "pays",
        explanation: "Il y a 193 pays membres des Nations Unies."
      },
      {
        question: "Combien de langues sont parlées en moyenne dans chaque pays ?",
        correctAnswer: 37,
        unit: "langues",
        explanation: "En moyenne, environ 37 langues sont parlées dans chaque pays, avec d'énormes variations (de 1 à plus de 800)."
      },
      {
        question: "Combien de langues sont donc parlées dans le monde ?",
        correctAnswer: 7100,
        unit: "langues",
        explanation: "Le calcul simple (193 pays × 37 langues) donnerait environ 7 100 langues, ce qui correspond aux estimations des linguistes, bien que le calcul réel soit plus complexe car de nombreuses langues sont parlées dans plusieurs pays."
      }
    ]
  },
  {
    id: "mon-ms-005",
    type: "multistep",
    question: "Combien de personnes vivent avec moins de 2 dollars par jour dans le monde ?",
    finalExplanation: "Environ 736 millions de personnes vivent avec moins de 2 dollars par jour dans le monde, principalement dans les pays en développement d'Afrique subsaharienne et d'Asie du Sud.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quel pourcentage de la population mondiale vit avec moins de 2 dollars par jour ?",
        correctAnswer: 9.2,
        unit: "%",
        explanation: "Environ 9,2% de la population mondiale vit avec moins de 2 dollars par jour selon la Banque mondiale."
      },
      {
        question: "Combien de personnes vivent donc avec moins de 2 dollars par jour ?",
        correctAnswer: 736,
        unit: "millions",
        explanation: "En multipliant la population mondiale (8 milliards) par le pourcentage vivant avec moins de 2 dollars par jour (9,2%), on obtient environ 736 millions de personnes."
      }
    ]
  },
  {
    id: "mon-ms-009",
    type: "multistep",
    question: "Combien d'emplois sont liés au tourisme dans le monde ?",
    finalExplanation: "Environ 289 millions d'emplois sont liés directement ou indirectement au tourisme dans le monde, soit près de 10% de tous les emplois, soulignant l'importance économique de ce secteur.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale active (qui travaille ou cherche un emploi) ?",
        correctAnswer: 3400,
        unit: "millions",
        explanation: "La population active mondiale est d'environ 3,4 milliards de personnes selon l'Organisation internationale du travail."
      },
      {
        question: "Quel pourcentage de la population active travaille dans un emploi lié directement ou indirectement au tourisme ?",
        correctAnswer: 8.5,
        unit: "%",
        explanation: "Environ 8,5% de la population active mondiale travaille dans un emploi lié directement ou indirectement au tourisme selon l'Organisation mondiale du tourisme."
      },
      {
        question: "Combien d'emplois sont donc liés au tourisme dans le monde ?",
        correctAnswer: 289,
        unit: "millions",
        explanation: "En multipliant la population active mondiale (3,4 milliards) par le pourcentage travaillant dans le tourisme (8,5%), on obtient environ 289 millions d'emplois."
      }
    ]
  },
  {
    id: "mon-ms-011",
    type: "multistep",
    question: "Combien d'humains ont vécu sur Terre depuis l'apparition de l'espèce humaine ?",
    finalExplanation: "Environ 108 milliards d'humains ont vécu sur Terre depuis l'apparition de l'espèce humaine il y a environ 300 000 ans.",
    theme: "monde",
    steps: [
      {
        question: "Depuis combien d'années l'espèce humaine existe-t-elle (Homo sapiens) ?",
        correctAnswer: 300000,
        unit: "années",
        explanation: "L'espèce humaine moderne (Homo sapiens) existe depuis environ 300 000 ans selon les découvertes paléoanthropologiques les plus récentes."
      },
      {
        question: "Quelle a été la population mondiale moyenne sur cette période ?",
        correctAnswer: 360,
        unit: "millions",
        explanation: "La population mondiale moyenne sur cette période est estimée à environ 360 millions de personnes, bien que ce chiffre ait considérablement varié au cours du temps."
      },
      {
        question: "Quelle est l'espérance de vie moyenne sur toute cette période ?",
        correctAnswer: 33,
        unit: "années",
        explanation: "L'espérance de vie moyenne sur toute cette période est estimée à environ 33 ans, avec de grandes variations selon les époques."
      },
      {
        question: "Combien d'humains ont donc vécu sur Terre depuis l'apparition de l'espèce humaine ?",
        correctAnswer: 108,
        unit: "milliards",
        explanation: "En divisant la durée d'existence de l'espèce par l'espérance de vie moyenne et en multipliant par la population moyenne, on peut estimer qu'environ 108 milliards d'humains ont vécu sur Terre."
      }
    ]
  },
  {
    id: "mon-ms-013",
    type: "multistep",
    question: "Combien d'automobiles circulent dans le monde ?",
    finalExplanation: "Environ 1,4 milliard d'automobiles circulent dans le monde, un nombre qui continue d'augmenter notamment dans les économies émergentes.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Combien y a-t-il de voitures en moyenne pour 1000 habitants dans le monde ?",
        correctAnswer: 175,
        unit: "voitures",
        explanation: "On compte en moyenne 175 voitures pour 1000 habitants dans le monde, avec d'importantes disparités régionales."
      },
      {
        question: "Combien d'automobiles circulent donc dans le monde ?",
        correctAnswer: 1400,
        unit: "millions",
        explanation: "En multipliant la population mondiale (8 milliards) par le taux de motorisation (175/1000), on obtient environ 1,4 milliard d'automobiles."
      }
    ]
  },
  {
    id: "mon-ms-014",
    type: "multistep",
    question: "Combien de smartphones sont actuellement utilisés dans le monde ?",
    finalExplanation: "Environ 6,8 milliards de smartphones sont actuellement utilisés dans le monde, illustrant la pénétration massive de cette technologie dans la vie quotidienne.",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population mondiale actuelle ?",
        correctAnswer: 8000,
        unit: "millions",
        explanation: "La population mondiale est d'environ 8 milliards de personnes."
      },
      {
        question: "Quel pourcentage de la population mondiale utilise un smartphone ?",
        correctAnswer: 85,
        unit: "%",
        explanation: "Environ 85% de la population mondiale utilise un smartphone, selon les dernières estimations."
      },
      {
        question: "Combien de smartphones sont donc actuellement utilisés dans le monde ?",
        correctAnswer: 6800,
        unit: "millions",
        explanation: "En multipliant la population mondiale (8 milliards) par le taux d'utilisation des smartphones (85%), on obtient environ 6,8 milliards de smartphones."
      }
    ]
  }
];
