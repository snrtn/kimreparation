import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairLimit = () => {
  const [content] = useState({
    subTitle: "Réalité Technique",
    mainTitle: "Les limites de la matière",
    description:
      "Informations honnêtes sur les contraintes physiques de vos composants électroniques.",
    accentColor: "#86868b",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Soudure sans plomb",
        desc: "Les soudures modernes n'utilisent plus de plomb. Elles sont donc plus rigides. Contrairement aux anciens métaux, cet alliage ne supporte pas les torsions et se fissure comme du verre en cas de choc.",
        tip: "C'est une limite mécanique des matériaux d'aujourd'hui.",
      },
      {
        id: "02",
        title: "Chaleur et micro-fissures",
        desc: "L'utilisation de votre téléphone produit de la chaleur, ce qui fait bouger le métal des circuits. Avec le temps, de minuscules fissures se forment sous les puces et provoquent des pannes aléatoires.",
        tip: "L'usure thermique est un vieillissement naturel du matériel.",
      },
      {
        id: "03",
        title: "Structure interne (PCB)",
        desc: "Une carte mère est composée de plusieurs couches de circuits superposées. Si un choc casse les liaisons à l'intérieur de ces couches, une soudure en surface ne suffira pas à tout réparer.",
        tip: "La réussite dépend de l'état réel de la structure interne.",
      },
      {
        id: "04",
        title: "Chaleur de l'intervention (350°C)",
        desc: "Pour réparer, nous devons chauffer localement les circuits à plus de 350°C. Sur un matériel déjà usé ou rouillé, cette chaleur nécessaire peut parfois révéler des faiblesses sur d'autres composants.",
        tip: "La chaleur est une condition obligatoire pour toute soudure.",
      },
      {
        id: "05",
        title: "Réparé vs État neuf",
        desc: "Nous rétablissons une connexion électrique, mais nous ne remplaçons pas la carte mère entière. La durée de vie de la réparation dépend de la santé générale des composants restants.",
        tip: "L'état de vos composants définit la viabilité de la réparation.",
      },
    ],

    alertTitle: "Note sur les limites matérielles",
    alertDesc:
      "• Traces de chocs : Un appareil tombé garde des tensions internes qui peuvent créer de nouvelles fissures plus tard.\n" +
      "• Rouille (Oxydation) : La corrosion peut continuer à abîmer le métal de façon invisible, même après un nettoyage.\n" +
      "• État général : Le succès d'une intervention dépend avant tout de la résistance actuelle de vos composants électroniques.",
  });

  return <RepairLayout data={content} />;
};

export default RepairLimit;
