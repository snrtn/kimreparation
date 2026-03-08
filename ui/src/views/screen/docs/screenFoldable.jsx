import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenFoldable = () => {
  const content = {
    title: "Écran Pliable",
    subtitle: "Technologie organique articulée",
    recommendation:
      "Essentiel pour accompagner le mouvement de flexion de votre appareil.",
    description:
      "Cette technologie repose sur des composants ultra-flexibles capables de supporter des cycles d'ouverture et de fermeture répétés. Sa structure est composée de plusieurs couches élastiques qui permettent à l'affichage de suivre précisément le mouvement de la charnière sans altérer la qualité visuelle.",
    forWhom: [
      "Propriétaires de téléphones avec écran articulé",
      "Besoin de maintenir la souplesse du mécanisme de pliage",
      "Utilisateurs recherchant l'intégrité de l'affichage flexible",
    ],
    features: [
      "Matériaux à haute capacité de flexion (élastomères)",
      "Film de protection spécifique intégré en usine",
      "Résistance aux contraintes mécaniques de la charnière",
      "Conception multicouche pour la continuité de l'image",
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
