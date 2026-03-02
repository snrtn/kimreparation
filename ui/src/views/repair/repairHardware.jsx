import React, { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairHardware = () => {
  const [content] = useState({
    subTitle: "Problème Caméra & Son",
    mainTitle: "Photos floues, Pas de son, Micro HS, Haut-parleur grésille",
    accentColor: "#f56300",
    criticalColor: "#ff3b30",
    steps: [
      {
        id: "01",
        title: "Nettoyage intensif de l'objectif",
        desc: "La majorité des flous viennent d'un dépôt gras invisible. Le capteur ne peut pas 'voir' à travers cette pellicule. Utilisez un chiffon sec et frottez fermement. Si l'image reste floue après ça, le mécanisme interne est bloqué.",
        tip: "90% des pannes sont des traces.",
      },
      {
        id: "02",
        title: "Forcer le redémarrage (Sans perte de données)",
        desc: "C'est un 'Hard Reset' matériel qui relance les puces audio et caméra. Restez appuyé sur [Power + Volume Bas] pendant 15 secondes. Rassurez-vous : AUCUNE DONNÉE n'est effacée, cela vide juste les erreurs système.",
        tip: "Zéro risque pour vos données.",
      },
      {
        id: "03",
        title: "Test sans accessoires ni coque",
        desc: "Les coques de protection (surtout après un choc) peuvent bouger et boucher les micros secondaires ou le haut-parleur. Enlevez tout et passez un appel. Si le son revient, c'est que votre coque est à changer, pas le téléphone.",
        tip: "Éliminez les obstacles physiques.",
      },
    ],
    alertTitle: "⚠️ PRÉCAUTIONS",
    alertDesc:
      "• MODE SILENCIEUX : Vérifiez toujours le bouton physique (iPhone) ou le mode 'Ne pas déranger' (Android) avant de conclure à une panne de son.\n\n" +
      "• NE JAMAIS PIQUER : Ne tentez pas de nettoyer les grilles avec une aiguille. Vous allez percer la membrane du haut-parleur et perdre l'étanchéité.\n\n" +
      "• VIBRATIONS : L'utilisation sur support moto/vélo détruit les aimants de la caméra. Si l'image vibre toute seule, le remplacement est inévitable.\n\n" +
      "• PAS D'AIR COMPRIMÉ : L'air sous pression détruit les membranes des micros. Utilisez uniquement une brosse souple.",
  });

  return <RepairLayout data={content} />;
};

export default RepairHardware;
