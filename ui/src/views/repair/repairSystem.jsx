import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairSystem = () => {
  const [content] = useState({
    subTitle: "Système & Logiciel",
    mainTitle: "Problèmes de système et sécurité des données.",
    accentColor: "#5856d6",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Messages d'alerte",
        desc: "Si votre téléphone affiche 'Surchauffe' ou 'Humidité', c'est pour se protéger. Ne forcez pas l'utilisation : le système bloque tout pour éviter de griller les composants internes.",
        tip: "Respectez les alertes pour ne pas casser le matériel.",
      },
      {
        id: "02",
        title: "Mises à jour (Updates)",
        desc: "Un nouveau système a souvent des petits bugs au début, peu importe le modèle. Il est plus prudent d'attendre quelques jours avant d'installer une grosse mise à jour pour être sûr qu'elle est stable.",
        tip: "La patience évite souvent des blocages inutiles.",
      },
      {
        id: "03",
        title: "Prise murale obligatoire",
        desc: "Pour une mise à jour, branchez impérativement votre téléphone sur une prise murale. Les ports USB (PC, voiture) ne sont pas assez stables. Une coupure pendant l'écriture peut bloquer le téléphone définitivement.",
        tip: "Le secteur est le seul moyen de garantir une installation sans erreur.",
      },
      {
        id: "04",
        title: "Mémoire 100% pleine",
        desc: "Si votre stockage est saturé, le téléphone ne peut plus démarrer correctement. Cela provoque souvent un blocage sur le logo. Dans ce cas, il faut parfois tout effacer pour que le téléphone reparte.",
        tip: "Gardez toujours 10 Go de libre pour éviter le blocage.",
      },
      {
        id: "05",
        title: "Mots de passe et iCloud",
        desc: "Vos données sont protégées par vos codes. En cas de gros bug, nous aurons besoin de vos identifiants iCloud ou Google. Ce sont les seules clés pour déverrouiller votre appareil après réparation.",
        tip: "Vos codes sont indispensables pour retrouver vos données.",
      },
    ],

    alertTitle: "À savoir avant la réparation",
    alertDesc:
      "• Courant stable : La prise murale est la seule sécurité pour que le logiciel s'installe correctement sans micro-coupures.\n" +
      "• Risque de blocage : Une mise à jour interrompue par manque de puissance peut rendre la puce mémoire inutilisable.\n" +
      "• Prudence : Le système est fragile pendant qu'il se met à jour. Un environnement électrique stable est votre seule garantie.",
  });

  return <RepairLayout data={content} />;
};

export default RepairSystem;
