import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenSoft = () => {
  const content = {
    title: "Soft OLED (Copie)",
    subtitle: "Technologie d'affichage flexible",
    recommendation:
      "Une solution technique reconnue pour sa robustesse au quotidien.",
    description:
      "L'écran Soft OLED repose sur une structure flexible (souple) qui lui permet d'absorber les pressions et les chocs physiques sans interrompre l'affichage interne. Cette technologie permet d'obtenir des bordures fines pour un ajustement précis avec le châssis du téléphone. Il offre une restitution vive des couleurs et des contrastes profonds, assurant une expérience visuelle fluide et une grande fiabilité lors d'un usage intensif.",
    forWhom: [
      "Utilisateurs recherchant une résistance accrue aux chocs",
      "Besoin d'un ajustement esthétique précis des bordures",
      "Usage quotidien sollicitant régulièrement l'appareil",
    ],
    features: [
      "Structure flexible absorbant les contraintes mécaniques",
      "Bordures fines pour une intégration parfaite",
      "Technologie OLED offrant des contrastes élevés",
      "Grande stabilité de l'affichage sur le long terme",
      "Réactivité tactile optimale pour une navigation fluide",
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
