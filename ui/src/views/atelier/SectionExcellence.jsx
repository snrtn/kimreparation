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
              (SIRET) et couverte par une assurance RC Pro. Nous sélectionnons
              nos composants auprès de grossistes certifiés afin de vous
              garantir une fiabilité optimale et une traçabilité totale.
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
              Suivi Photographique & Transparence : {"\n"}Avant de commencer, je
              photographie l'état esthétique (rayures ou impacts) pour un
              constat clair. L'ouverture peut laisser de très légères traces sur
              les bordures dues à la résistance des joints d'étanchéité
              d'origine. {"\n\n"}
              Si je découvre de la corrosion ou une anomalie interne dès
              l'ouverture, je vous envoie la photo immédiatement. Les autres
              clichés de l'intervention sont conservés à l'atelier et ne seront
              partagés qu'en cas de question ou sur demande expresse après la
              réparation.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SectionExcellence;
