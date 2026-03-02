import React, { useState } from "react";
import RepairLayout from "./repairLayout";
import RepairScreenModal from "./repairScreen/repairScreenModal"; // 👈 모달 임포트

const RepairScreen = () => {
  // ✅ 1. 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [content] = useState({
    subTitle: "Écran & Tactile",
    mainTitle: "Votre écran est cassé, noir ou ne répond plus ?",
    accentColor: "#0071e3",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Sécuriser les fissures",
        desc: "Même si l'écran fonctionne encore, des micro-éclats de verre peuvent se détacher. L'application d'un film ou d'un ruban adhésif transparent permet de protéger vos doigts et d'éviter que des débris ne tombent à l'intérieur des capteurs frontaux.",
        tip: "Une protection simple pour éviter les coupures.",
      },
      {
        id: "02",
        title: "Sauvegarder vos données",
        desc: "Une fissure peut fragiliser la dalle interne (OLED/LCD). Avec le temps, l'affichage peut se dégrader (taches noires, lignes). Si votre écran est encore visible, profitez-en pour lancer une sauvegarde de vos données importantes (iCloud ou Google).",
        tip: "Agissez avant que l'écran ne devienne totalement noir.",
      },
      {
        id: "03",
        title: "Attention au code de verrouillage",
        desc: "Si l'écran s'active tout seul (Ghost Touch), l'appareil peut taper de faux codes plusieurs fois dans votre poche. Cela risque de bloquer définitivement le système par sécurité. Dans ce cas, éteignez l'appareil jusqu'à la réparation.",
        tip: "Éteignez l'appareil pour protéger l'accès à vos données.",
      },
    ],

    alertTitle: "Précautions importantes avant réparation",
    alertDesc:
      "• Ne pressez pas l'écran : Évitez d'appuyer sur les zones sombres ou les lignes colorées. Une pression excessive peut aggraver les dommages internes et rendre l'affichage totalement illisible en quelques secondes.\n\n" +
      "• Évitez l'humidité : Un écran brisé n'est plus étanche. L'humidité (vapeur, pluie) peut s'infiltrer par les fissures et atteindre les circuits internes, causant des pannes bien plus lourdes.\n\n" +
      "• Ne tentez pas de réparation seul : Le remplacement d'un écran moderne demande un matériel spécifique. Une mauvaise manipulation peut endommager définitivement les capteurs de reconnaissance faciale (Face ID) ou de luminosité.\n\n" +
      "• Stockage sécurisé : Évitez de placer l'appareil dans une poche arrière ou un sac trop serré. Une torsion même légère du châssis peut compliquer la pose parfaite de votre nouvel écran.",
  });

  return (
    <>
      {/* ✅ 2. onOpenModal 전달 (buttonType은 유지) */}
      <RepairLayout
        data={content}
        buttonType="screen"
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* ✅ 3. 액정 전용 모달창 배치 */}
      <RepairScreenModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RepairScreen;
