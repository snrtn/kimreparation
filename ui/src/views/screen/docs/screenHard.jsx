import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenHard = () => {
  const content = {
    title: "Hard OLED (Copie)",
    subtitle: "Technologie organique sur substrat rigide",
    recommendation:
      "Solution économique pour un affichage OLED, nécessitant une protection accrue contre les chocs.",
    description:
      "L'écran 'Hard OLED' repose sur un support en verre rigide. Contrairement aux technologies Soft ou Originales, sa structure ne permet aucune flexion. Cette rigidité rend la dalle interne extrêmement vulnérable aux pressions et aux impacts : un choc léger peut briser l'affichage interne (lignes verticales, écran noir) même si la vitre externe reste intacte. Les bordures d'affichage sont généralement plus larges en raison de cette contrainte technique.\n\nNote technique Apple : Comme pour tout écran tiers, un message 'Pièce inconnue' apparaît dans les réglages en raison de la sérialisation logicielle. Le transfert des données (ex: True Tone) est effectué par programmateur, mais la notification peut persister si la puce IC d'origine n'est pas transférée.",
    forWhom: [
      "Budget restreint privilégiant le contraste OLED",
      "Utilisateurs très soigneux protégeant leur appareil avec une coque robuste",
      "Remise en état fonctionnelle au coût le plus bas en OLED",
    ],
    features: [
      "Dalle à technologie organique rigide (substrat verre)",
      "Sensibilité élevée aux pressions internes et aux chutes",
      "Bordures d'affichage (bezels) plus épaisses que l'original",
      "Consommation énergétique supérieure aux dalles Soft/Originales",
      "Option OLED la plus abordable du marché",
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
