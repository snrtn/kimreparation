import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairLimit = () => {
  const [content] = useState({
    // 'Physique' 대신 'Matérielle(재료/물질)'을 사용해 신체 느낌을 완전히 없앴습니다.
    subTitle: "Réalité Technique",
    mainTitle: "Les limites de la matière.",
    description:
      "Informations factuelles sur les contraintes des circuits électroniques de vos appareils.",
    accentColor: "#86868b",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Rigidité de l'alliage sans plomb",
        desc: "Les soudures actuelles utilisent des alliages sans plomb. Ce matériau est structurellement rigide. Contrairement aux anciens métaux, il ne supporte pas les torsions et se fissure comme du verre sous l'effet des chocs ou des vibrations répétées.",
        tip: "C'est une caractéristique mécanique imposée par les matériaux modernes.",
      },
      {
        id: "02",
        title: "Cycles thermiques et micro-fissures",
        desc: "L'usage d'un appareil produit de la chaleur. Ces variations de température dilatent et contractent le métal des circuits. À terme, des fissures microscopiques se forment sous les composants, créant des pannes intermittentes.",
        tip: "L'usure thermique est un processus de vieillissement naturel de la matière.",
      },
      {
        id: "03",
        title: "État de la structure interne (PCB)",
        desc: "Une carte mère possède plusieurs couches de circuits. Si un choc rompt les liaisons de cuivre à l'intérieur de ces couches, la structure devient instable. Une soudure en surface ne peut pas restaurer une base interne endommagée.",
        tip: "La stabilité finale dépend exclusivement de l'état structurel d'origine.",
      },
      {
        id: "04",
        title: "Contrainte thermique de l'intervention",
        desc: "Toute intervention sur les circuits nécessite une exposition locale à des températures supérieures à 350°C. Sur un matériel déjà usé ou oxydé, cette chaleur indispensable peut révéler des faiblesses sur des composants proches.",
        tip: "La chaleur est une condition technique nécessaire à toute réparation.",
      },
      {
        id: "05",
        title: "Différence entre réparation et état neuf",
        desc: "Une intervention restaure une connexion électrique précise, mais ne remplace pas une carte mère neuve. La durabilité dépend de l'état de santé résiduel des composants au moment de l'opération.",
        tip: "Les propriétés des matériaux définissent la viabilité d'un circuit déjà sollicité.",
      },
    ],

    alertTitle: "Note sur les limites matérielles",
    alertDesc:
      "• Séquelles de choc : Un appareil ayant subi un impact garde des tensions internes pouvant générer de nouvelles fissures ultérieurement.\n\n" +
      "• Oxydation : La corrosion chimique peut continuer à dégrader le métal de manière invisible après un nettoyage de surface.\n\n" +
      "• État résiduel : Le succès d'une opération technique est conditionné par la résistance actuelle de vos composants électroniques.",
  });

  return <RepairLayout data={content} />;
};

export default RepairLimit;
