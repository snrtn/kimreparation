import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenOrigine = () => {
  const content = {
    title: "Origine (Pull)",
    subtitle: "Pièce originale extraite d'un matériel identique",
    recommendation:
      "Maintien des composants d'usine et de la structure matérielle du fabricant.",
    description:
      "Un écran 'Pull' est une pièce authentique récupérée sur un autre appareil. Il s'agit de la dalle et du verre utilisés lors de l'assemblage en usine. Ce composant possède les propriétés physiques (rendu visuel, tactile, robustesse) définies par le constructeur. C'est l'option la plus coûteuse du marché en raison de la rareté des pièces et de la complexité de l'extraction.\n\nNote technique Apple : Le système lie l'écran à la carte mère par un numéro de série. Lors d'un remplacement, qu'il s'agisse d'un écran Original, Éco ou Copie, un message 'Pièce inconnue' s'affiche systématiquement car les identifiants ne concordent plus. Nous utilisons un programmateur pour transférer les données (ex: True Tone). Si la puce IC de votre écran d'origine est défaillante, le transfert de données est impossible et la notification restera visible malgré l'authenticité de la pièce.",
    forWhom: [
      "Utilisateurs exigeant les composants de série du constructeur",
      "Besoin de retrouver la densité et la résistance du verre d'origine",
      "Maintien des spécifications énergétiques d'usine",
    ],
    // 🔥 키포인트에서 애플 관련 내용 싹 뺐습니다. 오직 하드웨어 팩트만 남김.
    features: [
      "Dalle d'affichage et tactile d'origine (OEM)",
      "Verre de protection certifié par le fabricant",
      "Consommation électrique conforme aux normes d'usine",
      "Coût élevé lié à la rareté et au processus de démontage",
      "Disponibilité soumise aux stocks de pièces de retrait",
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
