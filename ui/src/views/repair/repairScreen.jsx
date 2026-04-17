import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairScreen = () => {
  const [content] = useState({
    subTitle: "Écran & Tactile",
    mainTitle: "Vitre cassée, tactile qui bugue ou écran noir.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Protéger la vitre (Vitre brisée)",
        desc: "Une vitre cassée lâche de petits éclats de verre. Mettre du ruban adhésif transparent permet de tenir les morceaux et d'éviter de vous couper les doigts.",
        tip: "Le ruban adhésif : une protection simple pour vos mains.",
      },
      {
        id: "02",
        title: "Écran interne (LCD/OLED)",
        desc: "Même si l'image est là, les débris de verre appuient sur l'écran interne qui est très fragile. Cela finit par créer des taches noires ou des lignes colorées.",
        tip: "Appuyer sur le verre brisé détruit l'affichage.",
      },
      {
        id: "03",
        title: "Tactile fou (Ghost Touch)",
        desc: "Un écran cassé peut taper des codes tout seul. Si l'appareil fait trop d'erreurs, il peut se bloquer définitivement et vous perdrez vos données.",
        tip: "Si l'écran devient fou, éteignez vite l'appareil.",
      },
      {
        id: "04",
        title: "Dégâts invisibles (Le choc)",
        desc: "Le choc qui casse la vitre se propage jusqu'à la carte mère. Nous pouvons changer l'écran, mais des micro-fissures internes peuvent créer d'autres pannes plus tard.",
        tip: "Le choc peut laisser des traces cachées sous l'écran neuf.",
      },
      {
        id: "05",
        title: "Châssis tordu (Cadre plié)",
        desc: "Un cadre même légèrement tordu appuie sur la nouvelle vitre. Si la structure est déformée, le nouvel écran risque de se décoller ou de casser très vite.",
        tip: "Un châssis droit est obligatoire pour que l'écran tienne.",
      },
    ],

    alertTitle: "À savoir avant la réparation",
    alertDesc:
      "• Ne pas appuyer sur les taches : Pousser sur une tache noire détruit les pixels et agrandit la zone morte immédiatement.\n" +
      "• Humidité : Les fissures laissent passer la transpiration et l'humidité. Cela fait rouiller les composants en quelques jours.\n" +
      "• Face ID : Les capteurs sont liés à l'écran d'origine. Si la vitre est trop brisée à cet endroit, le Face ID peut ne plus fonctionner.",
  });

  return <RepairLayout data={content} />;
};

export default RepairScreen;
