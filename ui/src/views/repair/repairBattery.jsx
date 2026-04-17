import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairBattery = () => {
  const [content] = useState({
    subTitle: "Batterie & Énergie",
    mainTitle: "Batterie qui gonfle, chauffe ou s'éteint toute seule.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Surchauffe (Chaleur)",
        desc: "Une batterie qui chauffe trop est le signe d'une usure chimique. Forcer la charge dans cet état peut abîmer les composants de gestion d'énergie sur la carte mère.",
        tip: "La chaleur excessive fatigue l'ensemble du téléphone.",
      },
      {
        id: "02",
        title: "Batterie gonflée",
        desc: "Si votre écran se soulève, ne pressez jamais dessus. La pression peut percer l'enveloppe de la batterie et libérer des produits chimiques dangereux.",
        tip: "Un écran qui se soulève = Danger immédiat.",
      },
      {
        id: "03",
        title: "Coupure à 20% ou 30%",
        desc: "Avec le temps, la batterie n'arrive plus à donner une tension stable. C'est pour cela que le téléphone s'éteint soudainement, même s'il reste de l'énergie.",
        tip: "Le pourcentage affiché n'est pas toujours la vérité.",
      },
      {
        id: "04",
        title: "Tests et micro-fissures",
        desc: "Nous testons nos batteries, mais des chocs anciens peuvent avoir créé des fissures invisibles sur la carte mère. Cela peut provoquer des pannes aléatoires plus tard.",
        tip: "Un test réussi n'efface pas les dégâts des chocs passés.",
      },
      {
        id: "05",
        title: "Port de charge instable",
        desc: "Si vous devez bouger le câble pour charger, vous créez des micro-étincelles. Cela finit par arracher les soudures et abîmer votre batterie neuve.",
        tip: "Un mauvais contact fatigue prématurément la batterie.",
      },
    ],

    alertTitle: "À savoir avant la réparation",
    alertDesc:
      "• Condensation : Passer du froid au chaud crée de l'humidité interne. C'est la cause numéro 1 de la rouille (oxydation) des circuits.\n" +
      "• Chargeurs bas de gamme : Les câbles non certifiés envoient un courant instable qui détruit les cellules de la batterie très rapidement.\n" +
      "• Stockage prolongé : Laisser un appareil déchargé pendant des mois peut tuer la batterie définitivement. Elle ne pourra plus jamais reprendre la charge.",
  });

  return <RepairLayout data={content} />;
};

export default RepairBattery;
