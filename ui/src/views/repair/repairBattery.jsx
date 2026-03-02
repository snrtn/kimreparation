import React, { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairBattery = () => {
  const [content] = useState({
    subTitle: "Batterie & Énergie",
    mainTitle: "Batterie qui gonfle, décharge rapide ou problème de charge",
    accentColor: "#32d74b",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Stopper la charge par précaution",
        desc: "Si vous remarquez que votre batterie chauffe anormalement ou qu'elle se décharge très vite, le mieux est de débrancher le chargeur. Une batterie fatiguée a besoin de repos ; continuer à lui envoyer du courant peut accentuer sa fatigue interne et fatiguer prématurément les autres composants de votre smartphone.",
        tip: "Laissez la batterie reposer.",
      },
      {
        id: "02",
        title: "Ne pas forcer sur le boîtier",
        desc: "Si l'écran ou le dos de l'appareil commence à se soulever légèrement, c'est que la batterie prend un peu de volume à cause d'une réaction chimique naturelle. Surtout, ne tentez pas d'appuyer dessus pour le refermer. L'espace créé permet d'évacuer la pression interne sans abîmer les composants fragiles situés juste au-dessus.",
        tip: "Laissez l'appareil tel quel.",
      },
      {
        id: "03",
        title: "Sauvegarde tant que l'affichage est actif",
        desc: "Une batterie instable peut parfois s'arrêter de fournir de l'énergie de manière imprévisible. Si votre écran est allumé, profitez-en pour mettre vos photos et contacts à l'abri sur votre Cloud (Google ou iCloud). Cela permet d'aborder la réparation en toute sérénité, sans crainte pour vos données personnelles.",
        tip: "Assurez la sécurité de vos données.",
      },
    ],

    alertTitle: "Conseils de vigilance pour votre batterie",
    alertDesc:
      "• Odeur inhabituelle : Si vous sentez une odeur douceâtre ou chimique s'échapper de l'appareil, posez-le simplement dans un endroit sec et aéré. C'est le signe qu'il faut nous le confier rapidement pour un diagnostic de sécurité.\n\n" +
      "• Chaleur excessive : Un téléphone qui devient très chaud sans raison (même quand vous ne l'utilisez pas) indique souvent une application qui tourne en boucle ou une cellule de batterie fatiguée. Éteignez-le pour le laisser refroidir naturellement.\n\n" +
      "• Attention au port de charge : Si vous devez bouger le câble pour que la charge démarre, le connecteur est peut-être encrassé ou usé. N'insistez pas trop fort pour éviter d'endommager les soudures internes de la carte mère. Un nettoyage ou un changement de pièce règle souvent le problème très vite.\n\n" +
      "• Températures extrêmes : Ne mettez jamais un téléphone chaud au réfrigérateur. Le changement de température brusque crée de la condensation (de minuscules gouttes d'eau) à l'intérieur, ce qui peut oxyder les circuits électroniques.",
  });

  return <RepairLayout data={content} />;
};

export default RepairBattery;
