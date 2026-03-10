import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenLcd = () => {
  const content = {
    title: "In-Cell LCD (Copie)",
    subtitle: "Technologie à cristaux liquides avec rétroéclairage",
    recommendation:
      "Solution d'entrée de gamme privilégiant le coût minimal pour une remise en état fonctionnelle.",
    description:
      "L'écran LCD In-Cell est une technologie radicalement différente des dalles organiques. Contrairement à l'OLED, il nécessite un rétroéclairage permanent (Backlight), ce qui rend le composant physiquement plus épais et entraîne une consommation d'énergie nettement supérieure. Sur les appareils conçus à l'origine pour l'OLED, l'installation d'un LCD peut provoquer une légère chauffe de l'appareil et une réduction de l'autonomie de la batterie. Le rendu des noirs est également moins profond car la lumière traverse toute la dalle.\n\nNote technique Apple : Comme pour tout changement d'écran tiers, le message 'Pièce inconnue' apparaîtra en raison de la sérialisation logicielle. Le transfert des données (ex: True Tone) est tenté par programmateur, mais la notification peut persister si la puce IC d'origine n'est pas transférée.",
    forWhom: [
      "Budget restreint cherchant le prix le plus bas possible",
      "Usage basique de l'appareil (appels, SMS, consultation rapide)",
      "Appareil de secours ou destiné à un usage secondaire",
    ],
    features: [
      "Technologie d'affichage In-Cell LCD (Cristaux liquides)",
      "Présence d'un rétroéclairage constant (consommation d'énergie élevée)",
      "Épaisseur de dalle supérieure pouvant affecter l'ajustement au châssis",
      "Luminosité et contrastes inférieurs aux technologies OLED",
      "Possibilité de chauffe accrue de l'appareil lors d'un usage prolongé",
    ],
    color: "#86868b",
  };
  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={4}
    />
  );
};
export default ScreenLcd;
