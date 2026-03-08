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
        <Typography sx={labelStyle}>Excellence & Confiance</Typography>

        <Stack spacing={8}>
          {/* Engagement Qualité */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                letterSpacing: "-0.03em",
                color: "#1d1d1f",
              }}
            >
              Engagement Qualité & Partenaires
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              {/* ✅ Kim Reparation 으로 수정 완료 */}
              Kim Reparation est une structure officiellement enregistrée
              (SIRET) et couverte par une assurance RC Pro. Pour vous offrir la
              meilleure fiabilité, nous sélectionnons nos composants auprès de
              fournisseurs certifiés exclusivement basés en France. Cela nous
              permet de vous garantir une traçabilité totale et des pièces de
              Grade Original ou Premium.
            </Typography>
          </Box>

          {/* La Photo 섹션 */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                letterSpacing: "-0.03em",
                color: "#1d1d1f",
              }}
            >
              La Photo : Notre gage de traçabilité
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              Pour une transparence absolue, nous immortalisons chaque étape clé
              de notre intervention (démontage, remplacement des composants,
              nettoyage interne et remontage) par des photographies haute
              résolution. {"\n\n"}
              Ce dispositif de suivi photographique nous permet de vous assurer
              que votre appareil a été traité avec le plus grand respect et
              constitue une base factuelle partagée en cas de question après la
              réparation.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SectionExcellence;
