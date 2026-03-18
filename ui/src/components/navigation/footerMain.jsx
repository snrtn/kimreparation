import React from "react";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  const footerMap = [
    {
      title: "Besoin d'aide ?",
      links: [
        { name: "Écran & Tactile", path: "/repair" },
        { name: "Tombé dans l'eau", path: "/repair/repairWater" },
        { name: "Batterie & Charge", path: "/repair/repairBattery" },
        { name: "Système & Logiciel", path: "/repair/repairSystem" },
        { name: "Caméra & Son", path: "/repair/repairHardware" },
        { name: "Réalité Technique", path: "/repair/repairLimit" },
        { name: "Étanchéité", path: "/repair/waterproof" },
      ],
    },
    {
      title: "Détails des Écrans",
      links: [
        { name: "Écran Origine", path: "/screen" },
        { name: "Écran ECO / Refurb", path: "/screen/eco" },
        { name: "Écran Soft OLED", path: "/screen/soft" },
        { name: "Écran Hard OLED", path: "/screen/hard" },
        { name: "Écran LCD / Incell", path: "/screen/lcd" },
        { name: "Écran Pliable", path: "/screen/foldable" },
      ],
    },
    {
      title: "Diagnostic Personnalisé",
      links: [
        { name: "Diagnostic Téléphone", path: "/devis" },
        { name: "Diagnostic Autres", path: "/devis/other" },
      ],
    },
    {
      title: "Suivi de Dossier",
      links: [
        { name: "Devis & Facture", path: "/client" },
        { name: "Service History", path: "/client/drive" },
      ],
    },
    {
      title: "L'Atelier & Infos",
      links: [
        { name: "Horaires d'ouverture", path: "/atelier" },
        { name: "Excellence & Qualité", path: "/atelier/atelierConditions" },
        { name: "Conditions d'Usage", path: "/atelier/atelierExcellence" },
        { name: "Mentions Légales", path: "/atelier/atelierLegal" },
      ],
    },
    {
      title: "Réparation Jouets",
      links: [
        { name: "Prise en charge", path: "/toy" },
        { name: "Jouets Electroniques", path: "/toy/repair" },
        { name: "Nintendo Switch Joy-Con", path: "/toy/joycon" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#FCFCFC",
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: "1px solid #d2d2d7",
      }}
    >
      <Container maxWidth="lg">
        {/* 상단: 품질 약속 섹션 */}
        <Box sx={{ mb: 8 }}>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ mb: 2, color: "#1d1d1f" }}
          >
            <VerifiedUserOutlinedIcon sx={{ fontSize: "1.3rem" }} />
            <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
              Engagement de qualité et traçabilité des composants
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "#424245",
              lineHeight: 1.8,
              maxWidth: "1000px",
            }}
          >
            Chez <strong>Kim Reparation</strong>, nous apportons une attention
            particulière à la provenance de nos pièces détachées. Nos composants
            sont exclusivement sélectionnés auprès de réseaux de distribution
            agréés garantissant une traçabilité totale. Notre démarche est
            fondée sur la transparence technique et le respect des standards
            constructeurs afin de prolonger la durée de vie de vos appareils.
          </Typography>
        </Box>

        {/* 📌 해결: Flexbox를 사용하여 열의 시작 위치를 완벽하게 고정 */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            mb: 6,
          }}
        >
          {footerMap.map((section) => (
            <Box
              key={section.title}
              sx={{
                flex: {
                  xs: "0 0 50%",
                  sm: "0 0 33.33%",
                  md: "0 0 20%",
                },
                mb: { xs: 5, md: 0 }, // 모바일 줄바꿈 시 간격
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  mb: 2.5,
                  letterSpacing: "0.05em",
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Typography
                    key={link.name}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      fontSize: "0.8rem",
                      color: "#424245",
                      textDecoration: "none",
                      display: "block",
                      "&:hover": {
                        color: "#0066cc",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography
          sx={{ fontSize: "0.75rem", color: "#86868b", textAlign: "center" }}
        >
          Copyright © {currentYear} KIM REPARATION. TOUS DROITS RÉSERVÉS.
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterMain;
