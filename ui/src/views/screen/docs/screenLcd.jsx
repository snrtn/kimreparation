import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenLcd = () => {
  const content = {
    title: "Copie LCD",
    subtitle: "Compatible (In-cell)",
    recommendation:
      "Solution alternative pour un usage principalement fonctionnel.",
    description:
      "Utilise la technologie à cristaux liquides avec un système de lumière arrière. Cette structure est physiquement plus épaisse que les technologies organiques, ce qui peut influencer l'autonomie de la batterie et la température de fonctionnement de l'appareil lors d'un usage prolongé.",
    forWhom: [
      "Utilisateurs privilégiant l'aspect fonctionnel (SMS, appels)",
      "Appareil destiné à un usage secondaire",
      "Utilisation soignée sans contrainte d'épaisseur",
    ],
    features: [
      "Technologie d'affichage à cristaux liquides (In-cell)",
      "Consommation d'énergie supérieure",
      "Épaisseur de dalle plus importante",
      "Rétroéclairage constant",
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
