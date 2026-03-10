import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenSoft = () => {
  const content = {
    title: "Soft OLED (Copie)",
    subtitle: "Technologie flexible haute performance",
    recommendation:
      "Le meilleur rapport qualité-prix pour retrouver une structure d'affichage proche de l'originale.",
    description:
      "Un écran 'Soft OLED' utilise un substrat flexible (souple), identique à la technologie utilisée lors de l'assemblage initial par les grands constructeurs. Contrairement aux versions rigides, cette structure permet de mieux absorber les chocs et les pressions mécaniques, réduisant ainsi le risque de fissures internes après un impact. Les bordures d'affichage sont plus fines et la colorimétrie est nettement supérieure aux copies standards. C'est l'option privilégiée pour ceux qui cherchent la durabilité d'une dalle flexible sans le coût d'une pièce d'origine.\n\nNote technique Apple : Comme pour tout écran de remplacement (Original ou Copie), un message 'Pièce inconnue' peut apparaître dans les réglages en raison de la sérialisation logicielle. Le transfert des données (ex: True Tone) est réalisé via programmateur, mais la notification peut persister si la puce IC n'est pas transférée.",
    forWhom: [
      "Utilisateurs recherchant une résistance accrue aux chocs quotidiens",
      "Besoin de bordures d'affichage fines et d'une intégration parfaite",
      "Usage intensif nécessitant une fiabilité proche de l'original",
    ],
    features: [
      "Dalle à technologie organique flexible (Soft OLED)",
      "Haute tolérance aux pressions et aux torsions mécaniques",
      "Bordures d'affichage réduites pour un ajustement précis au châssis",
      "Rendu des couleurs et contrastes supérieurs aux dalles rigides",
      "Alternative économique aux composants d'origine (Pull/Éco)",
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
