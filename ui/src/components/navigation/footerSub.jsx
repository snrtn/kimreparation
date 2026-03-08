import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const FooterSub = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid #f2f2f7",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* 데이터 백업 강조 (정중하고 상세하게) */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#1d1d1f",
                mb: 1.5,
              }}
            >
              AVERTISSEMENT SUR LA SECURITE DE VOS DONNEES PERSONNELLES
            </Typography>
            <Typography
              sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8 }}
            >
              Nous tenons a informer notre aimable clientele que la sauvegarde
              integrale de vos donnees (photographies, contacts, messages) reste
              sous votre responsabilite exclusive avant toute intervention
              technique. Un appareil endommage par un choc ou un liquide peut
              presenter des defaillances imprevisibles.{" "}
              <strong>Kim Reparation</strong> ne pourra etre tenu responsable de
              la perte de vos fichiers numeriques lors du processus de
              maintenance.
            </Typography>
          </Box>

          {/* 기술적 한계 및 투명성 고지 */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#1d1d1f",
                mb: 1.5,
              }}
            >
              TRANSPARENCE SUR LES RISQUES TECHNIQUES ET STRUCTURELS
            </Typography>
            <Typography
              sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8 }}
            >
              Toute intervention materielle comporte des risques intrinseques
              lies a l'etat initial de l'appareil. Des dommages invisibles a
              l'oeil nu, tels que des micro-fissures structurelles, peuvent
              evoluer lors du demontage. De meme, bien que nous installions
              systematiquement de nouveaux joints, l'impermeabilite d'origine
              (normes IP67 ou IP68) ne peut etre garantie a l'identique apres
              une ouverture. Nous partageons ces informations par souci
              d'honnetete envers nos clients.
            </Typography>
          </Box>

          {/* 독립성 명시 (법적 보호) */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#86868b",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              Note d'independance : Kim Reparation est un prestataire de
              services independant. Nous ne sommes ni affilies ni autorises par
              les societes constructrices (telles que Nintendo, Apple ou
              Samsung). Les noms de marques sont mentionnes uniquement a titre
              informatif.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#86868b",
              pt: 2,
              borderTop: "1px dashed #e5e5e7",
            }}
          >
            © {currentYear} KIM REPARATION. TOUS DROITS RESERVES.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSub;
