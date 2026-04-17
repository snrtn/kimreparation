import React from "react";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
        { name: "Étanchéité", path: "/repair/waterproof" },
        { name: "Réalité Technique", path: "/repair/repairLimit" },
      ],
    },
    {
      title: "Détails des Écrans",
      links: [
        { name: "Écran Origine", path: "/screen" },
        { name: "Écran ÉCO", path: "/screen/eco" },
        { name: "Écran Soft OLED", path: "/screen/soft" },
        { name: "Écran Hard OLED", path: "/screen/hard" },
        { name: "Écran In-Cell LCD", path: "/screen/lcd" },
        { name: "Écran Pliable", path: "/screen/foldable" },
        { name: "Écran iPhone", path: "/screen/iphone" },
      ],
    },
    // {
    //   title: "Diagnostic",
    //   links: [
    //     { name: "Diagnostic Téléphone", path: "/devis" },
    //     // { name: "Diagnostic Autres", path: "/devis/other" },
    //   ],
    // },
    // {
    //   title: "Suivi de Dossier",
    //   links: [
    //     { name: "Devis & Facture", path: "/client" },
    //     { name: "Service History", path: "/client/drive" },
    //   ],
    // },
    {
      title: "L'Atelier & Infos",
      links: [
        { name: "Horaires d'ouverture", path: "/atelier" },
        { name: "Garanties", path: "/atelier/atelierConditions" },
        { name: "Engagement & Suivi", path: "/atelier/atelierExcellence" },
        { name: "Mentions Légales", path: "/atelier/atelierLegal" },
      ],
    },
    // {
    //   title: "Réparation Jouets",
    //   links: [
    //     { name: "Prise en charge", path: "/toy" },
    //     { name: "Jouets Electroniques", path: "/toy/repair" },
    //     { name: "Nintendo Switch Joy-Con", path: "/toy/joycon" },
    //   ],
    // },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#FCFCFC",
        pt: { xs: 8, md: 10 },
        px: { xs: 2, md: 0 },
        pb: 4,
        // borderTop: "1px solid #d2d2d7",
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
            <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
              Provenance et Traçabilité des Composants
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
            Les pièces de rechange (OLED, LCD, etc.) utilisées à l'atelier
            proviennent exclusivement de fournisseurs professionnels certifiés.
            Ce choix permet de contrôler la qualité et l'origine de chaque écran
            avant son installation. En utilisant des composants issus de réseaux
            de distribution sérieux, nous assurons le bon fonctionnement et la
            stabilité technique de votre appareil. Cette approche garantit un
            service honnête et fiable pour votre matériel.
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
                  xs: "0 0 50%", // 모바일: 한 줄에 2개씩 (50% x 2 = 100%)
                  sm: "0 0 33.33%", // 태블릿: 한 줄에 3개씩 (33.33% x 3 = 100%)
                  md: "0 0 16.66%", // 📍 PC: 한 줄에 6개씩 (16.66% x 6 = 100%)
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
