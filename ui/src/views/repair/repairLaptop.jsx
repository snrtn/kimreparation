import React, { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairLaptop = () => {
  const [content] = useState({
    subTitle: "Ordinateur Portable",
    mainTitle:
      "Liquide renversé, Batterie & Charge, Caméra & Son, Clavier & Trackpad, SSD(Stockage), Écran",
    accentColor: "#5e5e5e",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Écran & Charnières",
        desc: "L'écran a des traits ou des taches ? La dalle interne est brisée. Si le plastique du cadre s'écarte quand vous ouvrez le PC, c'est que la charnière est trop dure et risque de tout casser.",
        tip: "Le modèle exact est écrit sous le PC.",
      },
      {
        id: "02",
        title: "Batterie & Charge",
        desc: "Le PC s'éteint tout seul ? La batterie est fatiguée ou gonflée. Vous devez bouger le chargeur pour qu'il charge ? Le connecteur à l'intérieur est cassé ou dessoudé.",
        tip: "N'utilisez pas de chargeur universel bas de gamme.",
      },
      {
        id: "03",
        title: "Liquide & Oxydation",
        desc: "Le riz ne sert à rien. Le liquide ronge les circuits en cuivre comme de l'acide. Seul un nettoyage professionnel peut arrêter la rouille avant que la carte mère ne soit définitivement morte.",
        tip: "Éteignez tout, ne branchez rien.",
      },
    ],

    alertTitle: "⚙️ INFOS TECHNIQUES & LIMITES DE L'ATELIER",
    alertDesc:
      "• COMPOSANTS SOUDÉS : Techniquement, le remplacement de RAM ou SSD soudés est possible avec des machines industrielles. Cependant, notre atelier ne réalise pas cette prestation pour garantir la fiabilité d'usine de votre carte mère. \n\n" +
      "• DÉBLOCAGE DE SÉCURITÉ : Certains modèles peuvent être contournés techniquement, mais pour des raisons LÉGALES, nous ne pratiquons aucun déblocage. Munissez-vous de votre FACTURE D'ACHAT et contactez le fabricant pour un déblocage officiel. \n\n" +
      "• LIMITE DE RÉPARATION : Pour les PC anciens, si le prix des pièces dépasse 50% de la valeur de l'appareil, nous conseillons l'achat d'un neuf. Nous n'engageons aucune réparation sans intérêt économique pour vous. \n\n" +
      "• PC TROP LENT : Si le processeur sature à 100%, un SSD ne résoudra pas le problème. Si le matériel est techniquement dépassé, nous refusons l'intervention pour vous éviter des frais inutiles. \n\n" +
      "• DONNÉES CHIFFRÉES : Si le disque est protégé (BitLocker/Puce T2) sans mot de passe, les fichiers sont illisibles, même en extraction directe.",
  });

  return <RepairLayout data={content} />;
};

export default RepairLaptop;
