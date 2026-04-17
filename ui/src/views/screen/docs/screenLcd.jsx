import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenLcd = () => {
  const content = {
    title: "In-Cell LCD (Copie)",
    subtitle: "Technologie LCD avec rétroéclairage",
    recommendation:
      "Une solution économique pour une remise en état fonctionnelle de base.",
    description:
      "L'écran In-Cell LCD repose sur une technologie de cristaux liquides avec un système de rétroéclairage intégré. En raison de sa structure multicouche, cette dalle présente une épaisseur physique plus importante, ce qui peut légèrement modifier l'ajustement avec le châssis. \n\nCe mode de fonctionnement nécessite une gestion d'énergie constante pour éclairer l'affichage, ce qui peut solliciter davantage la batterie et générer une légère chaleur interne. Le rendu visuel offre des couleurs naturelles, bien que la profondeur des noirs soit différente des dalles auto-émissives.",
    forWhom: [
      "Budgets priorisant le coût de réparation le plus bas",
      "Utilisation de secours ou téléphone secondaire",
      "Usage basique axé sur les appels et les messages",
    ],
    features: [
      "Technologie à cristaux liquides (LCD)",
      "Gestion d'énergie liée au rétroéclairage permanent",
      "Structure légèrement plus épaisse (ajustement mécanique)",
      "Luminosité adaptée à un usage quotidien standard",
      "Solution de remplacement la plus accessible du marché",
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
