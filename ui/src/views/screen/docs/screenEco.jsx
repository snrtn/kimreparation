import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenEco = () => {
  const content = {
    title: "ÉCO",
    subtitle: "Dalle d'origine avec vitre externe remise à neuf",
    recommendation: "Le compromis idéal : l'image d'usine au meilleur prix.",
    description:
      "L'Écran ÉCO est un écran original (OLED/LCD) ayant bénéficié d'une rénovation technique en usine. Ce procédé consiste à conserver le panneau d'affichage initial du fabricant pour garantir une fidélité des couleurs et une luminosité 100% identiques à l'origine. \n\nSur ce modèle, seule la vitre extérieure a été remplacée par un composant neuf de haute précision. Bien que le tactile soit une pièce de remplacement sélectionnée pour sa fiabilité, il permet de retrouver une expérience fluide et robuste. C'est le choix parfait pour ceux qui exigent une image impeccable sans payer le prix fort.",
    forWhom: [
      "Pour ceux qui ne veulent aucun compromis sur la qualité d'image",
      "Besoin de retrouver les couleurs et les contrastes authentiques",
      "Pour un rapport qualité-prix imbattable et un geste pour la planète",
    ],
    features: [
      "Dalle d'origine conservant la qualité visuelle d'usine",
      "Vitre externe neuve de haute précision (Grade A)",
      "Tarif plus accessible que l'option 'Extraction'",
      "Disponibilité stable pour une réparation rapide",
      "Angles de vision et luminosité strictement identiques à l'origine",
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
