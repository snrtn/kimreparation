import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairBattery = () => {
  const [content] = useState({
    subTitle: "Batterie & Énergie",
    mainTitle: "Vieillissement chimique, gonflement ou instabilité.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Surchauffe et résistance",
        desc: "Une batterie qui chauffe anormalement indique une forte résistance interne. Dans cet état, forcer la charge ne fait qu'user prématurément les puces de gestion d'énergie situées sur la carte mère.",
        tip: "La chaleur excessive est le premier signe d'usure chimique.",
      },
      {
        id: "02",
        title: "Gonflement (Réaction gazeuse)",
        desc: "L'accumulation de gaz à l'intérieur d'une cellule déforme le boîtier. Il ne faut jamais appuyer sur un écran qui se soulève, car la pression peut percer l'enveloppe et libérer des substances chimiques.",
        tip: "Un boîtier déformé indique une batterie à remplacer d'urgence.",
      },
      {
        id: "03",
        title: "Cycles et chutes de tension",
        desc: "Passé un certain nombre de cycles, la batterie ne peut plus fournir une tension stable. C'est ce qui provoque des extinctions soudaines de l'appareil, même quand il affiche encore 20 ou 30%.",
        tip: "Le pourcentage affiché ne reflète pas toujours la santé réelle.",
      },
      {
        // ✅ 형님의 핵심 팩트: 수리 시 정상이나 잠재적 균열이 존재함
        id: "04",
        title: "Micro-fissures et tests en atelier",
        desc: "Une nouvelle batterie peut passer tous les tests de contrôle avec succès en atelier. Cependant, des micro-fissures sur la carte mère, causées par des chocs anciens, peuvent laisser passer le courant normalement au début avant de provoquer des pannes aléatoires dues aux variations de température.",
        tip: "Un appareil peut fonctionner normalement lors du test malgré des failles internes invisibles.",
      },
      {
        id: "05",
        title: "Usure du port de charge",
        desc: "Un câble qu'il faut bouger pour charger finit par arracher les micro-soudures internes. Ce jeu mécanique crée des arcs électriques invisibles qui peuvent endommager le nouveau cycle de la batterie.",
        tip: "Un connecteur instable fatigue prématurément la batterie.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "• Condensation interne : Passer d'un environnement froid à une pièce chaude crée de l'humidité interne. Ces micro-gouttes d'eau sont la cause principale de l'oxydation lente des circuits.\n\n" +
      "• Qualité du courant : Les chargeurs non certifiés envoient un courant instable qui détruit les cellules de stockage beaucoup plus vite qu'une charge standard.\n\n" +
      "• Décharge profonde : Laisser un appareil éteint pendant plusieurs mois peut vider la batterie sous son seuil de sécurité, rendant toute recharge ultérieure impossible.",
  });

  return <RepairLayout data={content} />;
};

export default RepairBattery;
