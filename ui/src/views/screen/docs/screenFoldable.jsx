import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenFoldable = () => {
  const content = {
    title: "Pliable (Origine)",
    subtitle: "Dalle flexible avec châssis et charnière",
    recommendation:
      "La seule solution pour garantir le pliage et la solidité d'origine.",
    description:
      "Les écrans pliables sont des pièces très complexes. Nous utilisons uniquement des dalles d'origine car elles sont les seules à supporter réellement des milliers d'ouvertures. La dalle flexible est indissociable de la charnière : nous remplaçons l'ensemble pour garantir que le mécanisme ne force pas et que l'écran ne se fissure pas à l'usage. C'est une réparation de haute précision qui redonne au téléphone son aspect neuf.",
    forWhom: [
      "Propriétaires de Galaxy Z Fold, Z Flip et autres modèles pliables",
      "Besoin de retrouver un pliage fluide et sans bruit",
      "Pour ceux qui veulent une garantie sur la durée de vie de l'écran",
    ],
    features: [
      "Dalle flexible officielle du constructeur",
      "Châssis et charnière inclus pour un alignement parfait",
      "Protection d'écran d'usine déjà posée sur la dalle",
      "Prix élevé dû à la technologie complexe de la pièce",
      "Réparation technique nécessitant un montage spécifique",
    ],
    color: "#5856d6",
  };
  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={5}
    />
  );
};

export default ScreenFoldable;
