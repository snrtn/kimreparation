import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenOrigine = () => {
  const content = {
    title: "Origine",
    subtitle: "Composant 100% Officiel (Service Pack & Démontage)",
    recommendation:
      "La référence absolue pour retrouver les performances initiales de l'appareil.",
    description:
      "L'écran 'Origine' désigne la pièce certifiée par le constructeur. Pour les modèles Samsung, il s'agit du 'Service Pack' officiel, un composant livré neuf par la marque dans son emballage d'origine. \n\nConcernant l'iPhone, le fabricant ne vendant pas ses pièces détachées au détail sur le marché, un écran authentique provient nécessairement d'un démontage effectué sur un appareil neuf. C'est l'unique méthode pour obtenir une dalle et un verre tactile officiels avec la colorimétrie, la luminosité et la résistance d'usine.",
    forWhom: [
      "Utilisateurs exigeant la perfection visuelle officielle du fabricant",
      "Maintien de la résistance physique et thermique conforme aux normes",
      "Préservation de l'autonomie de la batterie et de la valeur de l'appareil",
    ],
    features: [
      "Pièce officielle certifiée (Samsung Service Pack / iPhone Démontage)",
      "L'unique solution pour un affichage iPhone 100% authentique",
      "Dalle et vitre tactile strictement identiques à la sortie d'usine",
      "Consommation énergétique optimisée selon les standards officiels",
      "Qualité d'image, contrastes et luminosité d'origine constructeur",
    ],
    color: "#1d1d1f",
  };

  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={0}
    />
  );
};

export default ScreenOrigine;
