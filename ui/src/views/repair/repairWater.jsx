import React, { useState } from "react";
import RepairLayout from "./repairLayout";
import RepairWaterModal from "./repairWater/repairWaterModal"; // 👈 모달 임포트 확인!

const RepairWater = () => {
  // ✅ 1. 모달 상태 추가 (RepairScreen과 동일하게)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [content] = useState({
    subTitle: "Tombé dans l'eau",
    mainTitle: "Votre appareil est tombé dans l'eau ?",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Éteignez tout immédiatement",
        desc: "L'eau n'est pas ce qui tue le appareil, c'est l'électricité mélangée à l'eau. Si l'appareil est allumé, l'eau provoque des étincelles invisibles (courts-circuits) qui brûlent les composants de la carte mère. Si l'écran est déjà noir, ne forcez surtout pas le démarrage pour 'vérifier' s'il marche encore.",
        tip: "Coupez le courant pour sauver les circuits.",
      },
      {
        id: "02",
        title: "L'erreur fatale : Ne branchez JAMAIS le chargeur",
        desc: "C'est la cause numéro 1 des appareils irréparables. Envoyer du 220V dans un appareil humide, c'est comme jeter un sèche-cheveux dans une baignoire : tout grille instantanément. Même si vous pensez qu'il est sec en surface, l'humidité reste coincée sous les puces électroniques pendant several jours.",
        tip: "Pas de charge, même pour 1 seconde.",
      },
      {
        id: "03",
        title: "Oubliez le riz et le sèche-cheveux",
        desc: "Le riz ne retire pas l'eau à l'intérieur des composants, il crée juste une poussière collante qui aggrave la situation. Quant au sèche-cheveux, il pousse l'eau encore plus profondément dans les zones critiques et peut faire fondre les joints d'étanchéité. La seule solution efficace est un nettoyage approprié pour stopper l'oxydation.",
        tip: "Le riz est une légende urbaine inutile.",
      },
    ],

    alertTitle: "Cas critique : Eau de mer ou Piscine (Chlore)",
    alertDesc:
      "Le sel et le chlore sont les pires ennemis de l'électronique : ils rongent le métal en quelques minutes.\n\n" +
      "• Retirez le tiroir SIM et la carte SD : Enlevez-les pour laisser l'air circuler. Attention : si le tiroir est bloqué, ne forcez surtout pas pour ne pas endommager le lecteur.\n\n" +
      "• N'essayez pas de démonter l'appareil vous-même : vous risqueriez de percer la batterie humide ou d'endommager des nappes déjà fragilisées.\n\n" +
      "• Agissez rapidement : Un téléphone qui s'allume après une chute dans l'eau peut encore contenir de l'humidité invisible. Pour éviter que des traces d'oxydation ne se développent avec le temps et ne causent des pannes aléatoires, un nettoyage approprié reste la solution la plus sûre pour préserver la durée de vie de votre appareil.",
  });

  return (
    <>
      {/* 💡 2. onOpenModal 함수를 레이아웃에 전달 (이걸 해야 버튼 눌렀을 때 모달이 열림) */}
      <RepairLayout data={content} onOpenModal={() => setIsModalOpen(true)} />

      {/* 💡 3. 침수 전용 모달창 배치 */}
      <RepairWaterModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RepairWater;
