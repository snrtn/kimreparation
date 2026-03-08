import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairWater = () => {
  const [content] = useState({
    subTitle: "Tombé dans l'eau",
    mainTitle: "Ce qui se passe quand un appareil prend l'eau.",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "L'eau et la batterie",
        desc: "L'eau conduit l'électricité là où elle ne devrait pas aller. Si l'appareil reste allumé, le courant de la batterie crée des micro-étincelles qui abîment les composants internes de la carte mère.",
        tip: "Un appareil éteint limite la circulation du courant.",
      },
      {
        id: "02",
        title: "Le risque du chargeur",
        desc: "Brancher un appareil humide envoie une forte tension dans des circuits déjà fragilisés par l'eau. L'humidité reste souvent piégée sous les puces électroniques bien après que l'extérieur semble sec.",
        tip: "L'énergie du chargeur peut aggrave les dommages invisibles.",
      },
      {
        id: "03",
        title: "Le riz et le sèche-cheveux",
        desc: "Le riz crée une poussière collante qui bouche les connecteurs, tandis que le sèche-cheveux pousse l'eau plus loin dans l'appareil et ramollit les colles qui maintiennent les pièces ensemble.",
        tip: "L'air libre est la solution la plus respectueuse du matériel.",
      },
      {
        // ✅ 형님이 강조하신 4번째: 수리 후 잔고장 팩트
        id: "04",
        title: "Les pannes après réparation",
        desc: "L'oxydation est une réaction chimique qui peut laisser des traces invisibles sous les composants. Même après un nettoyage, de petits dysfonctionnements peuvent apparaître plus tard à cause de ce contact initial avec l'eau.",
        tip: "L'humidité initiale peut laisser des séquelles progressives.",
      },
      {
        id: "05",
        title: "L'extraction du tiroir SIM",
        desc: "L'ouverture nécessite l'utilisation d'un outil d'extraction dédié (pin). Si le tiroir résiste, c'est que l'oxydation l'a bloqué ; forcer l'ouverture tord les broches de lecture internes de la carte mère.",
        tip: "Une force excessive déforme définitivement le lecteur de carte.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "L'étanchéité n'est pas éternelle : Les joints en silicone s'usent avec le temps, les chocs et la chaleur. La protection contre l'eau (IP68) diminue donc naturellement et ne garantit plus une sécurité totale.\n\n" +
      "L'eau de mer et le chlore : Le sel et les produits chimiques attaquent le métal beaucoup plus vite que l'eau douce, créant une rouille (oxydation) immédiate sur les circuits.\n\n" +
      "La stabilité de la batterie : Une batterie ayant été exposée à l'humidité peut devenir instable et gonfler avec le temps. Son remplacement est souvent une précaution nécessaire pour protéger l'écran de l'intérieur.",
  });

  return <RepairLayout data={content} />;
};

export default RepairWater;
