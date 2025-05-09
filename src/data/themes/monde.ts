import { Question, MultiStepQuestion } from "@/components/types";

export const mondeQuestions: (Question | MultiStepQuestion)[] = [
  {
    id: "naissances-bresil",
    type: "multistep",
    question: "Combien de naissances ont lieu chaque jour au Brésil ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Brésil ?",
        correctAnswer: 213000000,
        unit: "personnes",
        explanation: "Le Brésil compte environ 213 millions d'habitants."
      },
      {
        question: "Quel est le taux de natalité annuel au Brésil (nombre de naissances pour 1000 habitants) ?",
        correctAnswer: 14,
        unit: "‰",
        explanation: "Le taux de natalité au Brésil est d'environ 14 naissances pour 1000 habitants par an."
      },
      {
        question: "Combien de naissances ont lieu chaque jour au Brésil ?",
        correctAnswer: 8150,
        unit: "naissances",
        explanation: "Environ 8150 naissances ont lieu chaque jour au Brésil."
      }
    ],
    finalExplanation: "Avec une population d'environ 213 millions d'habitants et un taux de natalité de 14 pour 1000, le Brésil enregistre approximativement 8150 naissances par jour."
  },
  {
    id: "cote-maritime-indonesie",
    type: "multistep",
    question: "Combien de personnes vivent à moins de 10 km d'une côte maritime en Indonésie ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale de l'Indonésie ?",
        correctAnswer: 276000000,
        unit: "personnes",
        explanation: "L'Indonésie compte environ 276 millions d'habitants."
      },
      {
        question: "Quel pourcentage de la population indonésienne estimez-vous vivre à moins de 10 km d'une côte maritime ?",
        correctAnswer: 65,
        unit: "%",
        explanation: "Environ 65% de la population indonésienne vit à moins de 10 km d'une côte maritime."
      },
      {
        question: "Combien de personnes vivent à moins de 10 km d'une côte maritime en Indonésie ?",
        correctAnswer: 179000000,
        unit: "personnes",
        explanation: "Environ 179 millions de personnes vivent à moins de 10 km d'une côte maritime en Indonésie."
      }
    ],
    finalExplanation: "L'Indonésie étant un archipel composé de plus de 17 000 îles, une grande partie de sa population vit près des côtes. Environ 179 millions de personnes, soit 65% de sa population totale, vivent à moins de 10 km d'une côte maritime."
  },
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
    id: "eau-egypte",
    type: "multistep",
    question: "Combien de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Égypte ?",
        correctAnswer: 104000000,
        unit: "personnes",
        explanation: "L'Égypte compte environ 104 millions d'habitants."
      },
      {
        question: "Quelle est la consommation moyenne d'eau par personne et par jour pour un usage domestique en Égypte ?",
        correctAnswer: 175,
        unit: "L",
        explanation: "La consommation moyenne d'eau par personne et par jour pour un usage domestique en Égypte est d'environ 175 litres."
      },
      {
        question: "Combien de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique ?",
        correctAnswer: 18200000000,
        unit: "L",
        explanation: "Environ 18,2 milliards de litres d'eau sont consommés chaque jour en Égypte pour un usage domestique."
      }
    ],
    finalExplanation: "Avec une population de 104 millions d'habitants et une consommation moyenne de 175 litres par personne et par jour, environ 18,2 milliards de litres d'eau sont consommés quotidiennement en Égypte pour un usage domestique."
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
    id: "altitude-perou",
    type: "multistep",
    question: "Combien de personnes vivent à plus de 2 000 mètres d'altitude au Pérou ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population totale du Pérou ?",
        correctAnswer: 33000000,
        unit: "personnes",
        explanation: "Le Pérou compte environ 33 millions d'habitants."
      },
      {
        question: "Quel pourcentage du territoire péruvien se trouve à plus de 2 000 mètres d'altitude ?",
        correctAnswer: 35,
        unit: "%",
        explanation: "Environ 35% du territoire péruvien se trouve à plus de 2 000 mètres d'altitude."
      },
      {
        question: "Quel pourcentage de la population péruvienne estimez-vous vivre à plus de 2 000 mètres d'altitude ?",
        correctAnswer: 32,
        unit: "%",
        explanation: "Environ 32% de la population péruvienne vit à plus de 2 000 mètres d'altitude."
      },
      {
        question: "Combien de personnes vivent à plus de 2 000 mètres d'altitude au Pérou ?",
        correctAnswer: 10560000,
        unit: "personnes",
        explanation: "Environ 10,56 millions de personnes vivent à plus de 2 000 mètres d'altitude au Pérou."
      }
    ],
    finalExplanation: "Le Pérou est un pays montagneux avec la cordillère des Andes traversant son territoire. Sur une population totale de 33 millions d'habitants, environ 32% (soit 10,56 millions de personnes) vivent à plus de 2 000 mètres d'altitude."
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
    id: "terres-agricoles-france",
    type: "multistep",
    question: "Combien d'hectares de terres agricoles sont utilisés en France par habitant ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des terres agricoles en France ?",
        correctAnswer: 27000000,
        unit: "hectares",
        explanation: "La superficie totale des terres agricoles en France est d'environ 27 millions d'hectares."
      },
      {
        question: "Quelle est la population de la France ?",
        correctAnswer: 68000000,
        unit: "personnes",
        explanation: "La France compte environ 68 millions d'habitants."
      },
      {
        question: "Combien d'hectares de terres agricoles sont utilisés en France par habitant ?",
        correctAnswer: 0.4,
        unit: "hectares",
        explanation: "Environ 0,4 hectare de terres agricoles est utilisé par habitant en France."
      }
    ],
    finalExplanation: "Avec 27 millions d'hectares de terres agricoles pour une population de 68 millions d'habitants, la France utilise environ 0,4 hectare de terres agricoles par habitant, ce qui est supérieur à la moyenne mondiale."
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
    id: "arbres-urbains-canada",
    type: "multistep",
    question: "Combien d'arbres y a-t-il dans les zones urbaines du Canada ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la superficie totale des zones urbaines au Canada ?",
        correctAnswer: 90000,
        unit: "km²",
        explanation: "Les zones urbaines au Canada représentent environ 90 000 km²."
      },
      {
        question: "Quelle est la densité moyenne d'arbres par km² dans les zones urbaines canadiennes ?",
        correctAnswer: 9500,
        unit: "arbres/km²",
        explanation: "Dans les zones urbaines canadiennes, on trouve en moyenne environ 9 500 arbres par km²."
      },
      {
        question: "Combien d'arbres y a-t-il dans les zones urbaines du Canada ?",
        correctAnswer: 855000000,
        unit: "arbres",
        explanation: "Il y a environ 855 millions d'arbres dans les zones urbaines du Canada."
      }
    ],
    finalExplanation: "Avec une superficie urbaine d'environ 90 000 km² et une densité moyenne de 9 500 arbres par km², on estime qu'il y a environ 855 millions d'arbres dans les zones urbaines du Canada."
  },
  {
    id: "climatisation-arabie-saoudite",
    type: "multistep",
    question: "Combien de logements possèdent une climatisation en Arabie Saoudite ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de l'Arabie Saoudite ?",
        correctAnswer: 35000000,
        unit: "personnes",
        explanation: "L'Arabie Saoudite compte environ 35 millions d'habitants."
      },
      {
        question: "Combien de personnes en moyenne vivent dans un foyer en Arabie Saoudite ?",
        correctAnswer: 5.5,
        unit: "personnes",
        explanation: "En moyenne, 5,5 personnes vivent dans un foyer en Arabie Saoudite."
      },
      {
        question: "Quel pourcentage des logements en Arabie Saoudite possède une climatisation ?",
        correctAnswer: 98,
        unit: "%",
        explanation: "Environ 98% des logements en Arabie Saoudite sont équipés de climatisation."
      },
      {
        question: "Combien de logements possèdent une climatisation en Arabie Saoudite ?",
        correctAnswer: 6240000,
        unit: "logements",
        explanation: "Environ 6,24 millions de logements possèdent une climatisation en Arabie Saoudite."
      }
    ],
    finalExplanation: "Avec une population de 35 millions d'habitants, une moyenne de 5,5 personnes par foyer, et un taux d'équipement en climatisation de 98%, on estime qu'environ 6,24 millions de logements sont équipés de climatisation en Arabie Saoudite."
  },
  {
    id: "dechets-chine",
    type: "multistep",
    question: "Combien de tonnes de déchets sont produites chaque jour en Chine ?",
    theme: "monde",
    steps: [
      {
        question: "Quelle est la population de la Chine ?",
        correctAnswer: 1400000000,
        unit: "personnes",
        explanation: "La Chine compte environ 1,4 milliard d'habitants."
      },
      {
        question: "Combien de kilos de déchets une personne produit-elle en moyenne par jour en Chine ?",
        correctAnswer: 1.1,
        unit: "kg",
        explanation: "En Chine, une personne produit en moyenne 1,1 kg de déchets par jour."
      },
      {
        question: "Combien de tonnes de déchets sont produites chaque jour en Chine ?",
        correctAnswer: 1540000,
        unit: "tonnes",
        explanation: "Environ 1,54 million de tonnes de déchets sont produites chaque jour en Chine."
      }
    ],
    finalExplanation: "Avec une population de 1,4 milliard d'habitants et une production moyenne de 1,1 kg de déchets par personne et par jour, la Chine produit environ 1,54 million de tonnes de déchets quotidiennement."
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
    id: "mon-101",
    type: "simple",
    question: "Quelle est la population mondiale actuelle ?",
    correctAnswer: 8000,
    unit: "millions",
    explanation: "La population mondiale est d'environ 8 milliards d'habitants selon les dernières estimations des Nations Unies.",
    theme: "monde"
  },
  {
    id: "mon-102",
    type: "simple",
    question: "Quel est le PIB mondial total ?",
    correctAnswer: 101000,
    unit: "milliards de dollars",
    explanation: "Le PIB mondial total est d'environ 101 000 milliards de dollars selon les données de la Banque mondiale.",
    theme: "monde"
  },
  {
    id: "mon-103",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vit dans les villes ?",
    correctAnswer: 56.7,
    unit: "%",
    explanation: "Environ 56,7% de la population mondiale vit dans des zones urbaines, une proportion en augmentation constante.",
    theme: "monde"
  },
  {
    id: "mon-104",
    type: "simple",
    question: "Quelle est la durée de vie moyenne mondiale ?",
    correctAnswer: 72.7,
    unit: "ans",
    explanation: "L'espérance de vie moyenne mondiale est de 72,7 ans, tous pays confondus.",
    theme: "monde"
  },
  {
    id: "mon-105",
    type: "simple",
    question: "Quel pourcentage de la population mondiale a accès à Internet ?",
    correctAnswer: 63,
    unit: "%",
    explanation: "Environ 63% de la population mondiale a accès à Internet, avec de fortes disparités entre pays développés et en développement.",
    theme: "monde"
  },
  {
    id: "mon-106",
    type: "simple",
    question: "Quelle part de l'électricité mondiale est produite à partir d'énergies renouvelables ?",
    correctAnswer: 29,
    unit: "%",
    explanation: "Environ 29% de l'électricité mondiale est produite à partir de sources d'énergies renouvelables (hydraulique, éolien, solaire, biomasse, etc.).",
    theme: "monde"
  },
  {
    id: "mon-107",
    type: "simple",
    question: "Quel pourcentage de la population mondiale vit avec moins de 2 dollars par jour ?",
    correctAnswer: 9.2,
    unit: "%",
    explanation: "Environ 9,2% de la population mondiale vit dans l'extrême pauvreté, avec moins de 2 dollars par jour.",
    theme: "monde"
  },
  {
    id: "mon-108",
    type: "simple",
    question: "Quelle est la surface des terres émergées sur Terre ?",
    correctAnswer: 149,
    unit: "millions de km²",
    explanation: "Les terres émergées représentent environ 149 millions de km² sur la surface totale de la Terre qui est de 510 millions de km².",
    theme: "monde"
  },
  {
    id: "mon-109",
    type: "simple",
    question: "Quel est le taux d'alphabétisation mondial des adultes ?",
    correctAnswer: 86.5,
    unit: "%",
    explanation: "Le taux d'alphabétisation mondial des adultes est d'environ 86,5%, selon les données de l'UNESCO.",
    theme: "monde"
  },
  {
    id: "mon-110",
    type: "simple",
    question: "Quelle est la proportion de la population mondiale âgée de moins de 15 ans ?",
    correctAnswer: 25.4,
    unit: "%",
    explanation: "Environ 25,4% de la population mondiale est âgée de moins de 15 ans.",
    theme: "monde"
  }
];
