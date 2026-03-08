import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenEco = () => {
  const content = {
    title: "Reconditionné",
    subtitle: "Dalle d'origine avec vitre externe neuve",
    recommendation:
      "Alternative conservant l'affichage constructeur avec une surface externe rénovée.",
    description:
      "Le cœur de cet écran (la dalle d'affichage) reste un composant d'origine. Seule la vitre supérieure a été remplacée. Cela permet de conserver la qualité d'image initiale tout en utilisant une surface tactile externe de remplacement.",
    forWhom: [
      "Utilisateurs souhaitant garder l'image d'origine",
      "Recherche de couleurs authentiques",
      "Usage quotidien avec une exigence visuelle élevée",
    ],
    features: [
      "Dalle de technologie organique d'origine",
      "Vitre externe remplacée (non-constructeur)",
      "Rendu visuel identique à la pièce neuve",
      "Réponse tactile conforme aux standards",
    ],
    color: "#86868b",
  };
  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={1}
    />
  );
};
export default ScreenEco;
