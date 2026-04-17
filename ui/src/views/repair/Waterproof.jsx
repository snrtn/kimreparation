import { useState } from "react";
import RepairLayout from "./repairLayout";

const Waterproof = () => {
  const [content] = useState({
    subTitle: "Étanchéité",
    mainTitle: "La vérité sur l'étanchéité (Waterproof)",
    description:
      "La réalité technique sur l'usure de la protection contre l'eau.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Le joint d'usine",
        desc: "L'étanchéité repose sur un joint adhésif entre l'écran et le châssis. Ce n'est pas une soudure, mais une colle qui a une durée de vie limitée. Avec le temps, elle perd naturellement son adhérence.",
        tip: "L'étanchéité est une barrière temporaire, pas éternelle.",
      },
      {
        id: "02",
        title: "L'effet de la chaleur",
        desc: "La chaleur de l'écran et l'utilisation quotidienne finissent par assécher la colle. Une fois que l'adhésif devient sec, de minuscules trous invisibles se forment et laissent passer l'air et l'humidité.",
        tip: "La chaleur est le premier ennemi de l'étanchéité.",
      },
      {
        id: "03",
        title: "La vapeur d'eau",
        desc: "Même sans faire tomber le téléphone dans l'eau, la vapeur (salle de bain) pénètre par ces micro-fissures. La vapeur est plus fine que les gouttes d'eau et s'infiltre partout dans le châssis.",
        tip: "La vapeur d'eau passe là où l'eau liquide s'arrête.",
      },
      {
        id: "04",
        title: "Rouille lente des circuits",
        desc: "L'humidité piégée à l'intérieur fait rouiller (oxyder) les composants petit à petit. Ce processus affaiblit les contacts sur la carte mère de façon invisible pour vous.",
        tip: "La rouille prépare les pannes de demain.",
      },
      {
        id: "05",
        title: "Soudure cassée après un choc",
        desc: "Sur un circuit fragilisé par l'humidité, un petit choc peut suffire à détacher une soudure déjà instable. C'est souvent pour cela qu'un téléphone s'éteint ou se bloque après une chute légère.",
        tip: "Un choc révèle souvent une fragilité interne causée par l'humidité.",
      },
    ],

    alertTitle: "Précisions importantes sur la réparation",
    alertDesc:
      "• Notre méthode : Pour fermer l'appareil, nous utilisons des presses thermiques et des scellants spéciaux pour boucher les vides microscopiques.\n" +
      "• Limites techniques : Ces mesures renforcent la protection, mais il est impossible de retrouver l'étanchéité d'origine certifiée en usine. Nous ne garantissons pas l'immersion.\n" +
      "• Vigilance : Même après notre intervention, protégez toujours votre appareil des milieux humides et des liquides pour éviter que les soudures ne lâchent.",
  });

  return <RepairLayout data={content} />;
};

export default Waterproof;
