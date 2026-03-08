import { useState } from "react";
import RepairLayout from "./repairLayout";

const Waterproof = () => {
  const [content] = useState({
    subTitle: "Étanchéité",
    mainTitle: "WATERPROOF",
    description:
      "La réalité technique sur l'évolution de l'étanchéité et ses conséquences internes.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "La nature adhésive du joint d'usine",
        desc: "L'étanchéité repose sur un joint adhésif qui assure la liaison entre l'écran et le châssis. Ce n'est pas une soudure permanente, mais une colle qui possède une durée de vie limitée. Avec le temps, ce matériau perd naturellement son adhérence et sa capacité de scellage.",
        tip: "L'étanchéité est une barrière temporaire, pas une structure figée.",
      },
      {
        id: "02",
        title: "L'impact de la chaleur et du quotidien",
        desc: "La chaleur générée par l'écran et le processeur, ainsi que les manipulations quotidiennes, finissent par assécher l'adhésif. Une fois que la colle devient sèche ou poreuse, de micro-espaces invisibles se forment, laissant passer les molécules extérieures.",
        tip: "La chaleur interne est le premier facteur de dégradation du scellage.",
      },
      {
        id: "03",
        title: "La vulnérabilité face à l'humidité ambiante",
        desc: "Même sans immersion, une atmosphère saturée (comme la vapeur d'eau d'une salle de bain) pénètre par ces micro-fissures. Les particules de vapeur, plus fines que les gouttes d'eau, s'infiltrent plus facilement à l'intérieur du châssis.",
        tip: "La vapeur d'eau traverse souvent là où l'eau liquide s'arrête.",
      },
      {
        id: "04",
        title: "Micro-oxydation lente des circuits",
        desc: "L'humidité piégée à l'intérieur déclenche une oxydation progressive. Ce processus chimique fragilise la conductivité des pistes de cuivre et affaiblit les points de contact sur la carte mère de manière invisible pour l'utilisateur.",
        tip: "L'oxydation latente prépare le terrain pour des pannes futures.",
      },
      {
        id: "05",
        title: "Rupture de soudure lors d'un choc",
        desc: "Sur un circuit fragilisé par cette humidité, un choc mécanique même léger peut provoquer le décollement d'une soudure déjà instable. Cela entraîne un court-circuit ou un arrêt du système (écran figé, redémarrage), rendant l'appareil inopérant.",
        tip: "Un impact extérieur révèle souvent une fragilité interne causée par l'usure du joint.",
      },
    ],

    alertTitle: "Précisions sur la durabilité et l'intervention",
    alertDesc:
      "• Mesures techniques : Pour optimiser la fermeture, nous utilisons des protocoles de pressage thermique et des scellants liquides afin de combler les vides microscopiques.\n\n" +
      "• Limites constructeur : Ces mesures constituent une protection renforcée mais ne permettent pas de restaurer l'indice d'étanchéité d'origine certifié en usine. Il s'agit d'une aide à l'isolation et non d'une garantie contre l'immersion.\n\n" +
      "• Vigilance : Une attention constante est requise. Même après intervention, l'appareil doit être protégé des milieux humides et des liquides pour préserver la stabilité des soudures.",
  });

  return <RepairLayout data={content} />;
};

export default Waterproof;
