import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairHardware = () => {
  const [content] = useState({
    subTitle: "Caméra & Son",
    mainTitle: "Dysfonctionnement optique, audio ou capteurs.",
    accentColor: "#f56300",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Nettoyage des lentilles (Optique)",
        desc: "Une image floue est souvent due à un dépôt gras invisible sur la vitre extérieure. Un nettoyage avec un chiffon microfibre sec permet de vérifier si le problème est logiciel ou lié au mécanisme interne.",
        tip: "L'entretien extérieur règle une grande partie des défauts d'image.",
      },
      {
        id: "02",
        title: "Redémarrage forcé (Réinitialisation matérielle)",
        desc: "Cette procédure relance électriquement les puces audio et les capteurs photo. Elle permet de vider les erreurs de communication entre le système et le matériel sans affecter vos données personnelles.",
        tip: "Une réinitialisation électrique élimine les bugs de reconnaissance matérielle.",
      },
      {
        id: "03",
        title: "Obstructions physiques (Coques et protections)",
        desc: "Les accessoires de protection peuvent se déplacer après un choc et obstruer les micros secondaires ou les haut-parleurs. Un test sans accessoire est nécessaire pour isoler la panne réelle du matériel.",
        tip: "Éliminer les obstacles externes avant tout diagnostic interne.",
      },
      {
        // ✅ 04번: 형님이 말씀하신 "수리 시 정상작동하지만 숨어있는 균열"에 대한 팩트
        id: "04",
        title: "Micro-fissures et tests en atelier",
        desc: "Lors d'une réparation basée sur les symptômes initiaux, l'appareil peut passer tous les tests de contrôle avec succès. Cependant, des micro-fissures invisibles peuvent laisser passer le courant normalement au début, avant de provoquer des pannes intermittentes suite à des variations de température ou des vibrations.",
        tip: "Un composant peut fonctionner normalement en atelier malgré des failles internes.",
      },
      {
        id: "05",
        title: "Entretien des grilles (Audio)",
        desc: "L'accumulation de poussière bloque le son. Il est impératif de ne jamais utiliser d'objet pointu (aiguille) ou d'air comprimé, car cela déchire les membranes des haut-parleurs et détruit l'étanchéité.",
        tip: "Un nettoyage doux préserve les membranes sensibles des micros.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "• Vibrations mécaniques : L'exposition prolongée aux vibrations (supports moto/vélo) désaligne les aimants de stabilisation, rendant l'image floue ou instable de manière permanente.\n\n" +
      "• Oxydation des micros : L'humidité ambiante pénètre par les grilles audio. Une fois les contacts oxydés, le son peut devenir grésillant ou s'éteindre totalement.\n\n" +
      "• Capteurs de proximité : Une vitre d'écran rayée ou une protection mal posée bloque les capteurs de luminosité, empêchant l'écran de s'éteindre lors des appels.",
  });

  return <RepairLayout data={content} />;
};

export default RepairHardware;
