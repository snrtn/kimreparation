import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const SectionExcellence = () => {
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
        <Typography sx={labelStyle}>Engagement & Suivi</Typography>

        <Stack spacing={8}>
          {/* 1. Cadre professionnel */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                color: "#1d1d1f",
              }}
            >
              Cadre Professionnel
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
              }}
            >
              Kim Reparation est une structure enregistrée (SIRET) avec
              assurance RC Pro. Les composants sont sélectionnés auprès de
              grossistes certifiés pour assurer la fiabilité des réparations.
            </Typography>
          </Box>

          {/* 2. Suivi technique */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                color: "#1d1d1f",
              }}
            >
              Suivi Technique
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              {`Un état des lieux photographique de l'appareil est réalisé avant toute intervention.\nL'ouverture peut laisser de très légères traces sur les bordures en raison de la résistance de l'adhésif d'origine.\n\nEn cas de découverte de corrosion ou d'un défaut interne, le client est immédiatement informé par photo. Les clichés d'intervention sont archivés à l'atelier.`}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SectionExcellence;
