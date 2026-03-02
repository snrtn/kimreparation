import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AtelierAccordion from "./atelierAccordion";

const AtelierDomicile = () => {
  const domicileItems = [
    {
      q: "🔧 Service Transparent",
      a:
        "• **Photos de l'appareil** :\n" +
        "Dès la réception, nous prenons des photos précises (distance 2-3 cm).\n" +
        "Cela permet de noter l'état extérieur de votre appareil avant de commencer le travail.\n\n" +
        "• **Enregistrement Vidéo** :\n" +
        "Nous filmons toute l'intervention en **1080p 60fps**.\n" +
        "Cette vidéo sert de suivi pour montrer exactement chaque étape de la réparation effectuée.",
    },
    {
      q: "🔧 Diagnostic au microscope (Sur place)",
      a:
        "• **Vérification et Test Visuel** :\n" +
        "Lors du remplacement de l'écran ou de la batterie, nous vérifions l'état de votre appareil au microscope pour un diagnostic précis.\n\n" +
        "• **Arrêt immédiat en cas d'anomalie** :\n" +
        "Si nous découvrons de l'oxydation, de la corrosion ou un court-circuit,\n" +
        "nous arrêtons immédiatement le travail.\n" +
        "Nous prenons des photos pour vous montrer le problème sans attendre.\n\n" +
        "• **Nous vous informons** :\n" +
        "Nous vous expliquons la situation et les solutions possibles.\n\n" +
        "• Le microscope utilisé ici est un modèle portable personnalisé pour le terrain, et non le modèle de haute précision fixe utilisé en atelier",
    },
    {
      q: "Uniquement Téléphone",
      a:
        "Services disponibles :\n" +
        "• Remplacement d'écran\n" +
        "• Changement de batterie\n\n" +
        "Je répare votre appareil directement dans mon véhicule.\n" +
        "**Pas besoin de me recevoir chez vous.**",
    },
    {
      q: "Frais de déplacement",
      a:
        "Voici les tarifs clairs par commune :\n\n" +
        "• GRATUIT :\n" +
        "Beaumetz-lès-Loges\n\n" +
        "• Zone 3€ :\n" +
        "Basseux, Rivière, Simencourt,\n" +
        "Monchiet, Berneville, Wanquetin,\n" +
        "Habarcq, Hauteville, Fosseux\n\n" +
        "• Zone 6€ :\n" +
        "Gouy-en-Artois, Ficheux, Agny,\n" +
        "Wailly, Dainville, Achicourt,\n" +
        "Beaurains, Blairville, Hendecourt-lès-Ransart,\n" +
        "Adinfer, Duisans, Louez\n\n" +
        "• Zone 9€ :\n" +
        "Sainte-Catherine, Saint-Nicolas, Saint-Laurent-Blangy,\n" +
        "Neuville-Vitasse, Mercatel, Boiry-Becquerelle,\n" +
        "Tilloy-lès-Mofflaines, Feuchy, Anzin-Saint-Aubin, Marœuil\n\n" +
        "• Zone 12€ :\n" +
        "Avesnes-le-Comte, Bapaume, Vitry-en-Artois,\n" +
        "Boiry-Sainte-Rictrude, Bucquoy, Croisilles,\n" +
        "Biache-Saint-Vaast, Roeux, Plouvain, Gavrelle\n\n" +
        "*Au-delà de ces zones (ex: Lens, Douai, Lille) :\n" +
        "Merci d'utiliser notre service par envoi postal.*",
    },
    {
      q: "Vérification de la Garantie",
      a:
        "• **Garantie constructeur** :\n" +
        "Si votre appareil est encore sous garantie, nous vous conseillons de contacter d'abord le Service Après-Vente (SAV).\n\n" +
        "• **Risque d'annulation** :\n" +
        "Nous vous informons que l'ouverture de l'appareil par un réparateur indépendant peut annuler votre garantie.\n" +
        "Nous vous demandons de vérifier ce point avant de nous confier la réparation.",
    },
  ];

  const domicileItems2 = [
    {
      q: "⚠️ Pourquoi le travail s'arrête-t-il en cas d'anomalie ?",
      a:
        "• **Arrêt immédiat (Transparence)** :\n" +
        "Si nous trouvons de la corrosion ou un court-circuit, nous stoppons tout.\n" +
        "Nous prenons des photos pour vous montrer le problème sans attendre.\n\n" +
        "• **Le risque pour la pièce neuve** :\n" +
        "Si vous voulez quand même installer un nouvel écran ou batterie sans réparer la carte mère en atelier :\n" +
        "1. **Ce n'est pas la faute de l'écran** :\n" +
        "Un écran neuf ne peut pas créer de court-circuit.\n" +
        "Si l'écran grille, c'est à cause de l'humidité ou du choc déjà présents dans votre téléphone.\n" +
        "2. **Pas de remboursement** :\n" +
        "Si la pièce neuve tombe en panne à cause de ces problèmes (dommage collatéral), nous ne pouvons pas la rembourser ni la changer gratuitement.\n\n" +
        "• **Conclusion** :\n" +
        "Installer une pièce neuve sur un téléphone « malade » ne le guérit pas.\n" +
        "Vous acceptez de prendre ce risque si vous refusez le passage en atelier.",
    },
    {
      q: "⚠️ À propos du remplacement d'écran",
      a:
        "• **Cause et conséquence** :\n" +
        "Un écran se casse suite à un choc ou à l'humidité.\n" +
        "Le remplacement de l'écran corrige l'affichage,\n" +
        "mais ne peut pas réparer les dommages invisibles subis par les autres composants au moment de l'accident.\n\n" +
        "• **Indépendance technique** :\n" +
        "Changer un écran n'a aucun lien avec le fonctionnement de la caméra, du son ou du réseau.\n" +
        "Si ces fonctions présentent des faiblesses, cela est dû au choc initial et non à l'installation du nouvel écran.\n\n" +
        "• **État général de l'appareil** :\n" +
        "Nous remplaçons uniquement la pièce convenue.\n" +
        "Une pièce neuve ne peut malheureusement pas effacer l'historique de l'appareil ni garantir la réparation de dégâts internes préexistants sur la carte mère.",
    },
    {
      q: "⚠️ À propos du remplacement de batterie",
      a:
        "• **Une qualité vérifiée pour vous** :\n" +
        "Pour votre tranquillité, chaque batterie est testée une nouvelle fois juste avant d'être installée.\n" +
        "Nous nous assurons ainsi que le composant est parfaitement fonctionnel à 100% avant de refermer votre appareil.\n\n" +
        "• **Note importante sur le châssis** :\n" +
        "Si le cadre de votre téléphone est déformé, il exerce une pression constante sur l'écran et la vitre arrière.\n" +
        "Dans ce cas, l'écran et la vitre arrière deviennent extrêmement vulnérables lors de l'ouverture.\n" +
        "C’est une contrainte physique indépendante de notre volonté :\n" +
        "**si l'écran et la vitre arrière viennent à se fissurer malgré nos précautions, nous ne pourrons pas prendre en charge son remplacement.**\n" +
        "Nous vous en informons systématiquement avant de commencer l'intervention.\n\n" +
        "• **Comprendre le fonctionnement technique** :\n" +
        "Un défaut de batterie se remarque immédiatement à l'installation.\n" +
        "Techniquement, une batterie saine ne peut pas causer de panne sur d'autres fonctions (caméra, son) après plusieurs jours.\n" +
        "Tout souci ultérieur est lié à l'usure naturelle ou à l'historique de l'appareil.",
    },
    {
      q: "La qualité du remontage",
      a:
        "• **Fermeture de l'écran et de l'appareil** :\n" +
        "À chaque remontage,\n" +
        "nous posons systématiquement un nouveau joint d'étanchéité pour l'écran et des adhésifs de batterie conformes.\n" +
        "C'est une étape essentielle pour que l'ensemble soit bien scellé.",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: { xs: 16, xl: 20 } }}>
      <Container Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 2, fontSize: "2rem" }}
        >
          Déplacement
        </Typography>
        <AtelierAccordion items={domicileItems} />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: "1.2rem",
            color: "#1d1d1f",
          }}
        >
          À savoir avant
        </Typography>

        <AtelierAccordion items={domicileItems2} />
      </Container>
    </Box>
  );
};

export default AtelierDomicile;
