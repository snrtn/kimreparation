import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairScreen = () => {
  const [content] = useState({
    subTitle: "Écran & Tactile",
    mainTitle: "Vitre brisée, tactile incontrôlable ou affichage noir.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Sécuriser la surface (Vitre brisée)",
        desc: "Une vitre cassée libère de minuscules éclats de verre. Appliquer un ruban adhésif transparent maintient les morceaux en place et évite de se couper les doigts lors de l'utilisation.",
        tip: "Le ruban adhésif : une protection simple pour l'utilisateur.",
      },
      {
        id: "02",
        title: "Dalle LCD/OLED (Affichage interne)",
        desc: "Même si l'affichage semble intact, les débris de verre appuient sur la dalle interne qui est extrêmement fine. Cela finit par créer des taches noires ou des lignes colorées définitives.",
        tip: "Une pression excessive sur le verre brisé détruit l'image.",
      },
      {
        id: "03",
        title: "Tactile incontrôlable (Ghost Touch)",
        desc: "Un écran endommagé peut envoyer des signaux erronés au système. Si l'appareil tape seul des codes faux, il peut se verrouiller définitivement et entraîner la perte totale des données.",
        tip: "Si l'écran devient fou, il est plus prudent d'éteindre l'appareil.",
      },
      {
        // ✅ Étape 04 : Séquelles post-réparation (Pas de métaphore médicale)
        id: "04",
        title: "Séquelles du choc (Dommages invisibles)",
        desc: "Le choc qui brise une vitre se propage jusqu'à la carte mère. Même avec un écran neuf, des micro-fissures internes causées par l'accident peuvent provoquer des pannes secondaires plus tard.",
        tip: "Le choc initial peut laisser des traces cachées sous l'écran neuf.",
      },
      {
        id: "05",
        title: "Torsion du châssis (Cadre plié)",
        desc: "Un cadre légèrement tordu exerce une pression constante sur la nouvelle vitre. Si la structure est déformée, le nouvel écran risque de se décoller ou de se briser à nouveau très rapidement.",
        tip: "Un châssis droit est essentiel pour la survie du nouvel écran.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "• Ne pas appuyer sur les taches : Tenter de 'pousser' une tache noire détruit instantanément les pixels voisins et agrandit la zone morte.\n\n" +
      "• Infiltration d'humidité : Les fissures laissent passer la transpiration et l'humidité ambiante, ce qui oxyde les composants internes en quelques jours.\n\n" +
      "• Capteurs biométriques (Face ID) : Les capteurs de reconnaissance faciale sont couplés à l'écran d'origine. Une vitre brisée à cet endroit peut rendre cette fonction inutilisable.",
  });

  return <RepairLayout data={content} />;
};

export default RepairScreen;
