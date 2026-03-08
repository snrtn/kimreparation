const sidemenuData = {
  // ✅ 화면 품질별 메뉴
  screen: [
    { title: "Écran Origine", path: "/screen" },
    { title: "Écran ECO / Refurb", path: "/screen/eco" },
    { title: "Écran Soft OLED", path: "/screen/soft" },
    { title: "Écran Hard OLED", path: "/screen/hard" },
    { title: "Écran LCD / Incell", path: "/screen/lcd" },
    { title: "Écran Pliable", path: "/screen/foldable" },
  ],

  // ✅ 리페어 그룹
  repair: [
    { title: "Écran & Tactile", path: "/repair" },
    { title: "Tombé dans l'eau", path: "/repair/repairWater" },
    { title: "Batterie & Charge", path: "/repair/repairBattery" },
    { title: "Système & Logiciel", path: "/repair/repairSystem" },
    { title: "Caméra & Son", path: "/repair/repairHardware" },
    { title: "Réalité Technique", path: "/repair/repairLimit" },
    { title: "Étanchéité", path: "/repair/waterproof" },
  ],

  devis: [
    { title: "Devis Téléphone", path: "/devis" },
    { title: "Devis Autres", path: "/devis/other" },
  ],

  // ✅ 아뜰리에 그룹
  atelier: [
    { title: "L'Atelier", path: "/atelier" }, // 아뜰리에 정보 (영업시간 등)
    { title: "Excellence & Qualité", path: "/atelier/atelierConditions" }, // 1번: 품질/신뢰/영상
    { title: "Conditions d'Usage", path: "/atelier/atelierExcellence" }, // 2번: 방수/보증주의사항
    { title: "Mentions Légales", path: "/atelier/atelierLegal" }, // 3번: 법적면책/데이터/소비자법
  ],

  // ✅ 장난감 그룹 (💡 toys 가 아니라 toy 로 수정완료!)
  toy: [
    { title: "Prise en charge", path: "/toy" },
    { title: "Réalité Technique", path: "/toy/repair" },
    { title: "Joy-Con", path: "/toy/joycon" },
  ],
};

export default sidemenuData;
