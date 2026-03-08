import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenHard = () => {
  const content = {
    title: "Copie Hard OLED",
    subtitle: "Compatible (Rigide)",
    recommendation:
      "Solution d'affichage claire nécessitant une manipulation très soigneuse.",
    description:
      "Cette technologie repose sur un support en verre fixe. Sa structure rigide la rend particulièrement sensible aux pressions internes. En cas de choc, même sans bris de vitre externe, le système d'affichage interne peut présenter des défauts définitifs.",
    forWhom: [
      "Utilisateurs extrêmement soigneux avec leur matériel",
      "Besoin d'une image contrastée sur support fixe",
      "Remise en état fonctionnelle immédiate",
    ],
    features: [
      "Dalle à technologie organique rigide",
      "Affichage net et contrasté",
      "Structure sensible aux impacts directs",
      "Réactivité tactile standard",
    ],
    color: "#515154",
  };
  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={3}
    />
  );
};
export default ScreenHard;
