const sidemenuData = {
  screen: [
    {
      title: "Apple",
      path: "/screen/apple",
      children: [
        { title: "iPhone", path: "/screen/apple" },
        { title: "iPad", path: "/screen/apple/tablet" },
        { title: "MacBook", path: "/screen/apple/laptop" },
      ],
    },
  ],

  // ✅ 2. 리페어 그룹 (emergency -> repair)
  repair: [
    { title: "Écran & Tactile", path: "/repair" },
    { title: "Tombé dans l'eau", path: "/repair/repairWater" },
    { title: "Batterie & Charge", path: "/repair/repairBattery" },
    { title: "Système & Logiciel", path: "/repair/repairSystem" },
    { title: "Caméra & Son", path: "/repair/repairHardware" },
    { title: "Ordinateur Portable", path: "/repair/repairLaptop" },
  ],

  atelier: [
    {
      title: "L'Atelier",
      path: "/atelier",
    },
    {
      title: "Déplacement",
      path: "/atelier/atelierDomicile",
    },
    {
      title: "Engagement",
      path: "/atelier/atelierWarranty",
    },
    {
      title: "Horaires & Infos",
      path: "/atelier/atelierHoraires",
    },
  ],
};

export default sidemenuData;
