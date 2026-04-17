import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairWater = () => {
  const [content] = useState({
    subTitle: "Tombé dans l'eau",
    mainTitle: "Ce qui se passe quand l'eau entre dans le téléphone.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "L'eau et la batterie",
        desc: "L'eau fait circuler l'électricité là où il ne faut pas. Si l'appareil reste allumé, la batterie crée des micro-étincelles qui brûlent les composants de la carte mère.",
        tip: "Éteindre l'appareil est la première chose à faire.",
      },
      {
        id: "02",
        title: "Le danger du chargeur",
        desc: "Ne branchez jamais un téléphone humide. Le courant du chargeur peut griller des circuits déjà fragilisés. L'eau reste souvent piégée sous les puces, même si l'extérieur est sec.",
        tip: "Le chargeur peut aggraver des dégâts invisibles.",
      },
      {
        id: "03",
        title: "Le riz et le sèche-cheveux",
        desc: "Le riz crée une poussière collante qui bouche tout. Le sèche-cheveux, lui, pousse l'eau encore plus loin et fait fondre les colles internes. Laissez-le plutôt à l'air libre.",
        tip: "Ces méthodes abîment souvent plus l'appareil.",
      },
      {
        id: "04",
        title: "Les pannes après réparation",
        desc: "La rouille (oxydation) peut laisser des traces invisibles. Même après un nettoyage, de petits problèmes peuvent apparaître plus tard à cause du premier contact avec l'eau.",
        tip: "L'humidité peut laisser des séquelles sur le long terme.",
      },
      {
        id: "05",
        title: "Le tiroir SIM bloqué",
        desc: "Si le tiroir SIM résiste, c'est que la rouille l'a collé à l'intérieur. Ne forcez surtout pas : vous risquez de casser définitivement le lecteur sur la carte mère.",
        tip: "Forcer l'ouverture peut détruire le lecteur de carte.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "• L'étanchéité s'use : Les joints s'abîment avec le temps et la chaleur. Un téléphone n'est jamais étanche pour toujours, même avec l'indice IP68.\n" +
      "• Eau de mer et chlore : Le sel et les produits chimiques attaquent le métal très vite. Ils font rouiller les circuits presque immédiatement.\n" +
      "• Batterie instable : Une batterie qui a pris l'eau peut gonfler avec le temps. Nous recommandons souvent de la changer pour éviter qu'elle ne casse l'écran.",
  });

  return <RepairLayout data={content} />;
};

export default RepairWater;
