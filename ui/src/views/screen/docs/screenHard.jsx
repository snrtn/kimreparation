import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenHard = () => {
  const content = {
    title: "Hard OLED (Copie)",
    subtitle: "Technologie d'affichage rigide",
    recommendation:
      "Une solution OLED accessible pour une remise en état fonctionnelle.",
    description:
      "L'écran Hard OLED repose sur une structure en verre rigide. Cette architecture technique permet de bénéficier des contrastes de la technologie OLED à un tarif très compétitif. En raison de sa composition statique, cette dalle est sensible aux pressions directes et aux contraintes physiques. Elle nécessite une utilisation soignée pour préserver l'affichage interne sur le long terme. Les bordures de l'écran présentent une épaisseur spécifique liée aux contraintes de fabrication de cette technologie.",
    forWhom: [
      "Budgets priorisant l'accès à la technologie OLED",
      "Utilisateurs attentifs et soigneux avec leur matériel",
      "Besoin d'une réparation fonctionnelle au coût le plus maîtrisé",
    ],
    features: [
      "Dalle conçue sur une base de verre rigide",
      "Restitution fidèle des contrastes et des noirs profonds",
      "Bordures d'affichage caractéristiques de la technologie rigide",
      "Consommation énergétique optimisée pour l'affichage",
      "Option la plus économique dans la gamme des dalles OLED",
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
