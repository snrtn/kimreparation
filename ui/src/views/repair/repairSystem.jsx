import React, { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairSystem = () => {
  const [content] = useState({
    subTitle: "Système & Logiciel",
    mainTitle: "Appareil bloqué, mot de passe oublié ou bug système",
    accentColor: "#5856d6",
    criticalColor: "#ff3b30",
    steps: [
      {
        id: "01",
        title: "Forcer le redémarrage",
        desc: `Si l'écran est figé, relancez le cycle électrique :

• Apple (8+) : Vol Up, Vol Down, puis Power maintenu.
• Samsung/Google/Oppo : Power + Vol Bas (15s).
• Xiaomi/Huawei : Power maintenu (15s).

⚠️ STOP : Si le logo s'éteint aussitôt, n'essayez pas plus de 2 fois. Forcer un système corrompu peut griller la puce mémoire définitivement.`,
        tip: "N'insistez pas au-delà de 2 essais.",
      },
      {
        id: "02",
        title: "Retrait SIM & Carte SD",
        desc: `Une carte SD défectueuse ou une SIM oxydée suffit à bloquer tout le démarrage d'un smartphone (Bootloop).

Avant de tenter une restauration, retirez le tiroir SIM/SD et la coque. Cela élimine les conflits matériels et les pressions fantômes sur les boutons qui empêchent le système de se charger correctement.`,
        tip: "Testez l'appareil 'nu' sans accessoires.",
      },
      {
        id: "03",
        title: "Repos thermique et Charge murale",
        desc: `Un système crashé a besoin d'un courant 'propre' pour redémarrer. 

Laissez l'appareil refroidir 30 min. Branchez-le ensuite sur une prise murale avec un câble d'origine. Les ports USB d'ordinateur ou de voiture ne délivrent pas assez de tension pour réamorcer un processeur bloqué.`,
        tip: "Évitez les ports USB de PC.",
      },
    ],
    alertTitle: "⚠️ DIAGNOSTIC EXPERT : RÉCUPÉRATION ET MÉMOIRE",
    alertDesc: `Note importante sur nos interventions de haute précision :

1. Stockage saturé (100% plein) :
Ne tentez rien seul si l'appareil est déjà bloqué. Sans espace libre, le système ne peut plus déchiffrer vos photos. 
Forcer un "flash" amateur effacera tout définitivement.

⚠️ SI VOTRE APPAREIL S'ALLUME ENCORE (PROCÉDURE D'URGENCE) :
• ÉTAPE 1 : Supprimez immédiatement vos JEUX MOBILES (ce sont les apps les plus lourdes).
• ÉTAPE 2 : Supprimez ensuite toutes les applications que vous n'utilisez pas quotidiennement.
• ÉTAPE 3 : Une fois que vous avez libéré au moins 5 Go d'espace, connectez l'appareil à un ORDINATEUR pour transférer vos VIDÉOS LOURDES.
• ÉTAPE 4 : Transférez les petites vidéos et photos vers le CLOUD.

📺 [C'est le symptôme quand la capacité est à 100% (Référence)]
• Vidéo : iPhone Storage Full Fix (Error 1110)
• Source : Phone Repair Guru
• Lien : https://www.youtube.com/shorts/uc6aSLTunKA


2. Mot de passe et Sécurité :
Sachez qu'en Apple Store ou centre officiel, sans code, ils formatent tout.
AUCUNE récupération n'est possible chez eux. De notre côté, l'opération de clonage nécessite impérativement que vous connaissiez votre mot de passe pour déverrouiller les données après l'intervention.

⚠️ ATTENTION :
Sans vos identifiants iCloud ou Google, l'appareil restera bloqué par le serveur après la réparation.`,
  });

  return <RepairLayout data={content} />;
};

export default RepairSystem;
