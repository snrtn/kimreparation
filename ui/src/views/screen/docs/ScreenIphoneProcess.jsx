import React from "react";
import ScreenTemplate from "../screenTemplate";
import { SCREEN_NAV } from "./screenNav";

const ScreenIphoneProcess = () => {
  const content = {
    title: "iPhone",
    subtitle: "Synchronisation de la Puce IC",
    recommendation:
      "Action requise pour TOUS les types d'écrans (Origine, Éco, OLED, LCD).",
    description:
      "Sur iPhone, chaque écran possède une puce IC unique enregistrée par Apple. Si vous changez l'écran sans synchroniser cette puce, le système affiche une erreur 'Pièce inconnue' et coupe le True Tone. Cela arrive avec n'importe quel écran : même un écran 100% d'origine.\n\nNous utilisons un programmateur pour copier les données de série de votre ancien écran. Si cela ne suffit pas, nous ajoutons un connecteur 'Tag-on' (nappe intermédiaire) pour valider l'identifiant auprès du système. En dernier recours, nous dessoudons la puce IC d'origine pour la transplanter physiquement sur la nouvelle dalle.",
    forWhom: [
      "Indispensable pour iPhone (série 11 et modèles suivants)",
      "Nécessaire pour les écrans Origine, Éco, OLED et LCD",
      "Restauration technique du True Tone et des fonctions système",
    ],
    features: [
      "Puce IC : Mémoire contenant le numéro de série d'origine",
      "Programmation : Copie numérique des données via outil externe",
      "Connecteur Tag-on : Nappe interface de validation matérielle",
      "Transfert IC : Microsoudure de la puce d'origine sur le nouvel écran",
    ],
    color: "#515154",
  };

  return (
    <ScreenTemplate
      navData={SCREEN_NAV}
      currentData={content}
      currentIndex={6}
    />
  );
};

export default ScreenIphoneProcess;
