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
          {/* Garantie Légale & Qualité */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                letterSpacing: "-0.03em",
              }}
            >
              Votre Sérénité : Garantie Légale & Qualité
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              Conformément aux dispositions légales, nous garantissons la
              conformité des pièces installées et notre main-d'œuvre.{"\n\n"}
              Notre engagement de fiabilité :{"\n"}• Batterie : Les tests de
              cycle et de tension permettent de valider le bon fonctionnement
              dès la pose.{"\n"}• Écran : Grâce à un double contrôle technique
              rigoureux avant installation, nous assurons une conformité totale
              du matériel.
              {"\n"}• Expertise Préalable : Un examen visuel systématique
              détecte toute anomalie (choc, oxydation) avant intervention.{"\n"}
              • Preuve Numérique : Chaque étape de l'ouverture et du montage est
              filmée (Body-cam).
            </Typography>
          </Box>

          {/* Étanchéité */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                mb: 2,
                letterSpacing: "-0.03em",
              }}
            >
              Préservation de l'Étanchéité
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "1rem",
                whiteSpace: "pre-line",
              }}
            >
              Lors de chaque fermeture, nous prenons soin d'installer un nouveau
              joint d'étanchéité. Cependant, une fois ouvert, un appareil ne
              peut plus garantir une imperméabilité identique aux normes
              constructeur (IP67/68). Par précaution, évitez toute immersion.
            </Typography>
          </Box>

          {/* Conseils 유지 보증 */}
          <Box sx={{ p: 4, bgcolor: "#f5f5f7", borderRadius: "20px" }}>
            <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", mb: 2 }}>
              Conseils pour maintenir votre Garantie
            </Typography>
            <Typography
              sx={{
                color: "#424245",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              La garantie reste valide hors incidents du quotidien :{"\n"}•
              Dommages accidentels : Fissures, chocs sur le châssis.{"\n"}•
              Signes de pression interne : Lignes/taches sur l'affichage
              (pression excessive).{"\n"}• Exposition aux liquides : L'oxydation
              exclut la garantie.{"\n"}• Sceau de garantie : Ne retirez pas
              notre Seal et ne faites pas ouvrir l'appareil par un tiers.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SectionConditions;
