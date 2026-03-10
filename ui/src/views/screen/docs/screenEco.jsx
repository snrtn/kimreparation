import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenEco = () => {
  const content = {
    title: "Reconditionné (Éco)",
    subtitle: "Dalle d'origine avec vitre externe remplacée",
    recommendation:
      "Le compromis entre la fidélité visuelle du constructeur et un coût maîtrisé.",
    description:
      "Un écran 'Reconditionné' (ou Éco) repose sur une dalle d'affichage (OLED, LCD) 100% originale dont la vitre supérieure a été remplacée suite à une fissure. Cette solution permet de conserver la colorimétrie et la luminosité d'usine. Toutefois, la vitre tactile externe n'est plus celle d'origine, ce qui peut induire une légère différence de sensation au toucher ou de résistance aux chocs par rapport à un composant 'Pull'. C'est une option privilégiant l'expérience visuelle à un prix intermédiaire.\n\nNote technique Apple : Comme pour tout changement d'écran sur les modèles récents, un message 'Pièce inconnue' peut s'afficher en raison de la sérialisation logicielle liée à la carte mère. Le transfert des données via programmateur est effectué pour maintenir les fonctions de base (ex: True Tone), mais la notification peut persister si la puce IC d'origine n'est pas transférée.",
    forWhom: [
      "Utilisateurs exigeant la qualité d'image originale du fabricant",
      "Besoin de couleurs et de contrastes authentiques",
      "Recherche d'un équilibre entre performance visuelle et budget",
    ],
    features: [
      "Dalle d'affichage d'origine conservant la qualité visuelle d'usine",
      "Vitre externe et tactile de remplacement (Grade A)",
      "Coût inférieur à l'option 'Origine Pull'",
      "Disponibilité plus régulière selon les cycles de recyclage",
      "Rendu des couleurs strictement identique au composant initial",
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
