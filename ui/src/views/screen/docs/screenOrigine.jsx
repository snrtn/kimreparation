import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenOrigine = () => {
  const content = {
    title: "Origine (Pull)",
    subtitle: "Composant authentique issu d'un retrait",
    recommendation:
      "Destiné à conserver l'intégralité des composants du constructeur.",
    description:
      "Cet écran est une pièce d'origine récupérée sur un autre appareil de la même marque. Il s'agit d'un retrait de matériel permettant de retrouver strictement le rendu visuel et la réactivité tactile initialement prévus par le fabricant.",
    forWhom: [
      "Utilisateurs privilégiant les pièces constructeur",
      "Besoin de fidélité absolue des couleurs",
      "Maintien intégral des spécifications d'usine",
    ],
    features: [
      "Dalle de technologie organique authentique",
      "Luminosité et contrastes certifiés constructeur",
      "Tactile d'origine (Digitizer d'usine)",
      "Gestion d'énergie nominale",
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
