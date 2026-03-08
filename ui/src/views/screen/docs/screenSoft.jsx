import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenSoft = () => {
  const content = {
    title: "Copie Soft OLED",
    subtitle: "Compatible (Souple)",
    recommendation:
      "Technologie conçue pour une meilleure absorption des pressions mécaniques.",
    description:
      "L'affichage est intégré sur un support souple. Cette propriété physique permet au composant de mieux tolérer les contraintes et les torsions quotidiennes par rapport aux structures fixes, offrant ainsi une durabilité accrue face aux impacts.",
    forWhom: [
      "Utilisateurs recherchant une résistance aux pressions",
      "Usage actif et regulier de l'appareil",
      "Besoin de souplesse structurelle interne",
    ],
    features: [
      "Structure à technologie organique flexible",
      "Meilleure tolérance aux chocs physiques",
      "Navigation fluide et réactive",
      "Dimensions conformes au châssis",
    ],
    color: "#0071e3",
  };
  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={2}
    />
  );
};
export default ScreenSoft;
