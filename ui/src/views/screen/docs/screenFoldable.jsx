import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenFoldable = () => {
  const content = {
    title: "Écran Pliable",
    subtitle: "Technologie organique articulée haute précision",
    recommendation:
      "Indispensable pour garantir la continuité du mouvement mécanique de votre appareil pliable.",
    description:
      "L'écran pliable repose sur une structure multicouche ultra-flexible conçue pour supporter des milliers de cycles d'ouverture et de fermeture. Contrairement aux dalles rigides, cette technologie utilise des polymères élastiques permettant à l'affichage de suivre précisément la courbure de la charnière. Le remplacement de ce composant exige une précision extrême pour assurer le maintien de la protection d'écran intégrée d'usine et la fluidité du mécanisme articulé sans créer de points de pression interne.",
    forWhom: [
      "Propriétaires de smartphones à écran pliable (Type Z Fold, Z Flip, etc.)",
      "Besoin de restaurer la flexibilité d'origine de l'affichage",
      "Utilisateurs exigeant une intégration parfaite avec le mécanisme de charnière",
    ],
    features: [
      "Dalle à technologie organique flexible (Ultra-Thin Glass / Polymère)",
      "Structure multicouche optimisée pour la répétition des flexions",
      "Film de protection spécifique intégré pour la durabilité de la dalle",
      "Résistance aux contraintes mécaniques liées au mouvement de la charnière",
      "Coût élevé dû à la complexité technologique et à la rareté de la pièce",
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
