import { useState } from "react";
import RepairLayout from "./repairLayout";

const RepairSystem = () => {
  const [content] = useState({
    subTitle: "Système & Logiciel",
    mainTitle: "Instabilité logicielle et sécurité des données.",
    accentColor: "#5856d6",
    criticalColor: "#ff3b30",

    steps: [
      {
        id: "01",
        title: "Alertes de sécurité (OS)",
        desc: "Les messages 'Surchauffe' ou 'Humidité' sont des protections actives. En respectant ces alertes, vous permettez au système de stabiliser ses composants. Forcer l'utilisation dans ces conditions est la cause principale des pannes matérielles.",
        tip: "Le système bloque les fonctions pour protéger l'électronique interne.",
      },
      {
        // ✅ 업데이트 주의사항 + 구형/신형 모델 리스크 반영
        id: "02",
        title: "Risques des mises à jour majeures",
        desc: "Un nouveau logiciel n'est jamais parfait à sa sortie, que ce soit sur un modèle ancien ou un dernier fleuron. Installer une mise à jour dès son déploiement peut introduire des bugs critiques ; la prudence est de rigueur avant l'installation.",
        tip: "Patienter quelques jours permet d'obtenir une version corrigée et stable.",
      },
      {
        // ✅ 형님이 강조하신 벽면 콘센트 물리기 핵심!
        id: "03",
        title: "Alimentation impérative sur secteur",
        desc: "Toute mise à jour doit impérativement se faire sur une prise murale. Seul le secteur garantit la tension continue nécessaire à l'écriture du système. Les ports USB (PC, voiture) sont instables et peuvent corrompre le logiciel définitivement.",
        tip: "Branchez toujours votre chargeur sur une prise murale avant de lancer une mise à jour.",
      },
      {
        id: "04",
        title: "Saturation du stockage (100%)",
        desc: "Un système sans espace libre ne peut plus traiter les fichiers de démarrage. Ce blocage logique entraîne souvent un 'Bootloop' (blocage au logo), rendant parfois l'accès aux données impossible sans une restauration complète.",
        tip: "Conservez 10 Go d'espace libre pour la survie de votre système de fichiers.",
      },
      {
        id: "05",
        title: "Chiffrement et Identifiants",
        desc: "Les données sont cryptées par une clé matérielle. En cas de blocage sévère, vos accès iCloud ou Google sont techniquement les seuls moyens de déverrouiller l'appareil après une intervention logicielle.",
        tip: "Vos codes sont les uniques clés de votre jardin numérique.",
      },
    ],

    alertTitle: "Réalités techniques à connaître",
    alertDesc:
      "• Courant propre : La charge murale est la seule protection contre les micro-coupures de tension durant les phases d'écriture NAND.\n\n" +
      "• Intégrité logicielle : Une mise à jour interrompue par un manque de puissance peut boucher définitivement l'accès à la puce mémoire.\n\n" +
      "• Vigilance Constructeur : Les logiciels sont déployés par étapes ; l'installation immédiate comporte un risque que seul un environnement électrique stable peut minimiser.",
  });

  return <RepairLayout data={content} />;
};

export default RepairSystem;
