import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairHardware = () => {
  const [content] = useState({
    subTitle: "Caméra & Son",
    mainTitle: "Problèmes de caméra, de son ou de capteurs.",
    accentColor: "#f56300",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Nettoyage de la caméra",
        desc: "Une photo floue vient souvent de traces de doigts ou de gras sur la vitre. Un coup de chiffon microfibre permet de vérifier si c'est juste de la saleté ou une vraie panne interne.",
        tip: "Un bon nettoyage règle souvent les problèmes d'image.",
      },
      {
        id: "02",
        title: "Redémarrage forcé",
        desc: "Cette manipulation relance les puces du son et de la photo. Cela permet d'effacer les bugs entre le système et le matériel sans toucher à vos données personnelles.",
        tip: "Un redémarrage peut éliminer les petits bugs de reconnaissance.",
      },
      {
        id: "03",
        title: "Coques et protections",
        desc: "Une coque mal mise ou une protection d'écran peut boucher les micros ou les haut-parleurs. Nous devons tester l'appareil sans accessoires pour trouver la vraie panne.",
        tip: "Enlevez vos accessoires avant de diagnostiquer le matériel.",
      },
      {
        id: "04",
        title: "Tests et fissures invisibles",
        desc: "L'appareil peut passer tous nos tests avec succès après la réparation. Cependant, des micro-fissures invisibles dues au choc initial peuvent provoquer des pannes plus tard avec la chaleur ou les vibrations.",
        tip: "Un composant peut fonctionner normalement malgré des failles cachées.",
      },
      {
        id: "05",
        title: "Nettoyage du son",
        desc: "La poussière bloque le son. N'utilisez jamais d'objet pointu (aiguille) ou d'air comprimé : cela déchire les haut-parleurs et détruit l'étanchéité du téléphone.",
        tip: "Un nettoyage doux protège les haut-parleurs fragiles.",
      },
    ],

    alertTitle: "À savoir avant la réparation",
    alertDesc:
      "• Vibrations (Moto) : L'exposition aux vibrations des moteurs de moto casse le stabilisateur de la caméra. L'image devient alors floue de façon permanente.\n" +
      "• Rouille des micros : L'humidité entre par les grilles du son. Une fois les contacts oxydés (rouillés), le son grésille ou se coupe totalement.\n" +
      "• Capteur de proximité : Une vitre rayée ou une protection mal posée bloque le capteur. L'écran ne s'éteint plus quand vous approchez le téléphone de votre oreille.",
  });

  return <RepairLayout data={content} />;
};

export default RepairHardware;
