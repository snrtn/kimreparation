import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const SectionConditions = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
    textTransform: "uppercase",
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, xl: 20 }, borderTop: "1px solid #e5e5e7" }}>
        <Typography sx={labelStyle}>Conditions de Garantie</Typography>

        <Stack spacing={8}>
          {/* 1. Couverture de garantie */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                color: "#1d1d1f",
              }}
            >
              Garantie Légale & Qualité
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              {`Conformément à la loi, les pièces installées et la main-d'œuvre sont couvertes par notre garantie.\n\n• Batterie : Validation du bon fonctionnement dès la pose (tests de cycle).\n• Écran : Double contrôle technique avant installation.\n• Documentation : Chaque étape de l'intervention est photographiée pour assurer la traçabilité.`}
            </Typography>
          </Box>

          {/* 2. Étanchéité */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                color: "#1d1d1f",
              }}
            >
              Étanchéité
            </Typography>
            <Typography
              sx={{ color: "#424245", lineHeight: 1.6, fontSize: "1rem" }}
            >
              Un nouveau joint est systématiquement installé. Toutefois, après
              ouverture, l'étanchéité d'origine (IP67/68) n'est plus garantie.
              Par précaution, toute immersion est à éviter.
            </Typography>
          </Box>

          {/* 3. Exclusions de garantie */}
          <Box sx={{ p: 4, bgcolor: "#f5f5f7", borderRadius: "20px" }}>
            <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", mb: 2 }}>
              Exclusions de Garantie
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              {`La garantie couvre uniquement les défauts de fabrication de la pièce. Elle est annulée en cas de :\n• Dommage physique : Choc, fissure, rayure ou déformation du châssis.\n• Pression interne : Taches noires, lignes colorées ou voile blanc (contrainte mécanique).\n• Humidité : Toute trace d'oxydation ou de liquide.\n• Intervention externe : Toute preuve d'ouverture ou de modification après la réparation à l'atelier.`}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SectionConditions;
