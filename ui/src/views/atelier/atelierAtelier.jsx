import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AtelierAccordion from "./atelierAccordion";

const AtelierAtelier = () => {
  const atelierItems = [
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
      q: "🔧 Diagnostic au microscope",
      a:
        "• **Ouverture et vérification** :\n" +
        "Nous vous informons avant d'ouvrir votre appareil (écran ou vitre arrière).\n" +
        "Une fois ouvert, nous examinons les composants au microscope pour vérifier leur état réel.\n\n" +
        "• **Arrêt immédiat en cas d'anomalie** :\n" +
        "Si nous découvrons de l'oxydation, de la corrosion ou un court-circuit,\n" +
        "nous arrêtons immédiatement le travail.\n" +
        "Nous prenons des photos pour vous montrer le problème sans attendre.\n\n" +
        "• **Accord du client obligatoire** :\n" +
        "Nous vous expliquons la situation et les solutions possibles.\n" +
        "Nous ne continuons la réparation qu'après avoir reçu votre accord et votre validation.",
    },
    {
      q: "Envoi Postal",
      a:
        "Nous vous demandons de suivre ces étapes pour la sécurité de votre appareil :\n\n" +
        "1. Enveloppez l'appareil dans du **papier bulle**.\n" +
        "2. Placez-le dans un **premier carton**.\n" +
        "3. Entourez ce carton de **papier bulle**.\n" +
        "4. Mettez le tout dans un **deuxième carton** plus grand.\n\n" +
        "⚠️ **Attention - Batterie** :\n" +
        "L'envoi d'une batterie gonflée est **strictement INTERDIT** par la poste pour des raisons de sécurité.",
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

  const atelierItems2 = [
    {
      q: "⚠️ Si votre appareil est tombé (Choc)",
      a:
        "• **Le cadre est tordu** :\n" +
        "Si le tour de votre téléphone est tordu ou enfoncé, il appuie déjà sur l'écran.\n" +
        "En ouvrant l'appareil, cette pression peut casser la vitre.\n" +
        "Nous ne pouvons pas éviter ce risque physique.\n\n" +
        "• **Problèmes cachés** :\n" +
        "Même si nous réparons la panne d'aujourd'hui, d'autres soucis peuvent arriver plus tard à cause du choc.\n" +
        "C'est comme une blessure interne qui se réveille après.",
    },
    {
      q: "⚠️ Si votre appareil a pris l'eau (Liquide)",
      a:
        "• **La rouille continue** :\n" +
        "Même après un nettoyage, l'humidité peut avoir déjà abîmé des petites pièces invisibles.\n" +
        "Nous faisons notre maximum, mais l'appareil reste fragile.\n\n" +
        "• **Risque de nouvelle panne** :\n" +
        "Il est possible que d'autres problèmes surgissent dans quelques semaines.\n" +
        "Cela vient de l'accident passé (l'eau) et non de notre travail de réparation.",
    },
    {
      q: "⚠️ À propos du cadre déformé (Châssis)",
      a:
        "• **État du châssis** :\n" +
        "Si le cadre de votre téléphone est enfoncé ou déformé, il exerce une pression sur l'écran et la vitre arrière.\n" +
        "Cela rend l'écran et la vitre arrière très fragile.\n\n" +
        "• **Risque à l'ouverture** :\n" +
        "À cause de cette pression, l'écran et la vitre arrière peuvent se fissurer lors de l'ouverture, même en faisant très attention.\n" +
        "C'est un problème physique lié à l'état de l'appareil.\n\n" +
        "• **Responsabilité** :\n" +
        "Nous faisons le maximum, mais **nous ne pourrons pas remplacer l'écran et la vitre arrière à nos frais s'il se casse à cause de cette déformation.**\n\n" +
        "• **Accord préalable** :\n" +
        "Nous vous informons de ce risque avant de commencer.\n" +
        "Nous n'intervenons qu'avec votre accord.",
    },
    {
      q: "Limites techniques",
      a:
        "• **Complexité interne** :\n" +
        "Un appareil contient des milliers de micro-composants connectés.\n" +
        "Nous réparons les pannes visibles (connecteurs débranchés, corrosion, courts-circuits),\n" +
        "mais nous ne pouvons pas tout voir à l'intérieur des puces.\n\n" +
        "• **Side-effects (Effets secondaires)** :\n" +
        "Un choc ou une immersion laisse des traces invisibles.\n" +
        "Même si nous réglons le problème actuel, un autre composant fragilisé par le passé peut tomber en panne plus tard.\n\n" +
        "• **Engagement et Limite** :\n" +
        "Nous faisons le maximum pour stabiliser votre appareil.\n" +
        "Cependant, nous n'avons pas de boule de cristal :\n" +
        "les pannes futures liées aux anciens dégâts ne dépendent pas de notre intervention.",
    },
    {
      q: "La qualité du remontage",
      a:
        "• **Fermeture de l'écran et de l'appareil** :\n" +
        "À chaque remontage,\n" +
        "nous posons systématiquement un nouveau joint d'étanchéité pour l'écran et des adhésifs de batterie conformes.\n" +
        "C'est une étape essentielle pour que l'ensemble soit bien scellé.\n\n" +
        "• **Soin des soudures (PCB)** :\n" +
        "Pour les réparations sur carte mère, nous appliquons une protection UV si l'état du circuit le nécessite.\n" +
        "Cela permet de stabiliser les composants et de protéger les soudures contre les vibrations.",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: { xs: 16, xl: 20 } }}>
      {/* ✅ 에러 원인 해결: <Container Container ...> 에서 중복된 Container를 지웠습니다 */}
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: "2rem",
            color: "#1d1d1f",
          }}
        >
          L'Atelier
        </Typography>

        <AtelierAccordion items={atelierItems} />

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

        <AtelierAccordion items={atelierItems2} />
      </Container>
    </Box>
  );
};

export default AtelierAtelier;
