import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const SectionLegal = () => {
  const labelStyle = {
    fontSize: "0.7rem",
    fontWeight: 800,
    color: "#1d1d1f",
    mb: 4,
    letterSpacing: "0.2em",
  };

  const itemLabelStyle = { fontSize: "0.8rem", color: "#86868b" };
  const itemValueStyle = { fontSize: "0.85rem", fontWeight: 700 };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 16, xl: 20 }, borderTop: "1px solid #e5e5e7" }}>
        {/* --- 법적 책임 조항들 --- */}
        <Stack spacing={8} sx={{ mb: 15 }}>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Protection des Données
            </Typography>
            <Typography
              sx={{ color: "#424245", lineHeight: 1.6, fontSize: "0.95rem" }}
            >
              La sauvegarde de vos données (photos, contacts, messages) reste à
              votre charge exclusive. Kim Reparation ne pourra être tenu
              responsable de la perte de données (limitation de responsabilité
              contractuelle).
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Expertise : Oxydation & Court-circuit
            </Typography>
            <Typography
              sx={{ color: "#424245", lineHeight: 1.6, fontSize: "0.95rem" }}
            >
              En cas de corrosion (Oxydation), l'intervention se limite à une
              'obligation de moyens' (Art. 1231-1 du Code civil). Kim Réparation
              n'est pas responsable d'une panne ultérieure liée à la propagation
              de la corrosion.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
              Garantie de Conformité & Vices Cachés
            </Typography>
            <Typography
              sx={{ color: "#424245", lineHeight: 1.6, fontSize: "0.95rem" }}
            >
              Conformément aux articles L. 217-3 (Consommation) et 1641 (Code
              civil). ⚠️ Non applicable si le défaut résulte d'une chute, choc,
              pression ou humidité. Médiateur : CM2C.
            </Typography>
          </Box>
        </Stack>

        {/* --- 형님이 주신 섹션 3: Mentions Légales (ÉDITEUR & SYSTEM) --- */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            pt: 10,
            borderTop: "1px solid #f2f2f2",
            gap: { xs: 8, md: 0 },
          }}
        >
          {/* [좌측] ÉDITEUR */}
          <Box sx={{ pr: { md: 8 }, borderRight: { md: "1px solid #f2f2f2" } }}>
            <Typography sx={labelStyle}>ÉDITEUR</Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Structure</Typography>
                <Typography sx={itemValueStyle}>Kim Reparation (EI)</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Dirigeant</Typography>
                <Typography sx={itemValueStyle}>KIM Hanjun</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>SIRET</Typography>
                <Typography sx={itemValueStyle}>
                  00 00 00 00 00 00 00
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Siège social</Typography>
                <Typography sx={{ ...itemValueStyle, textAlign: "right" }}>
                  00 00 00 00 00 00 00
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Contact</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>
                    00 00 00 00 00 00 00
                  </Typography>
                  <Typography sx={itemValueStyle}>
                    00 00 00 00 00 00 00
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* [우측] SYSTEM */}
          <Box sx={{ pl: { md: 8 } }}>
            <Typography sx={labelStyle}>SYSTEM & HÉBERGEMENT</Typography>
            <Stack spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>DNS / Domain</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>Hostinger</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#c1c1c1" }}>
                    Larnaca, Chypre
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={itemLabelStyle}>Hébergeur</Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={itemValueStyle}>GitHub, Inc.</Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#86868b" }}>
                    San Francisco, CA, USA
                  </Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "#86868b",
                  textAlign: "center",
                  mt: 4,
                  fontStyle: "italic",
                }}
              >
                Ce site web a été entièrement conçu et réalisé par nos soins.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SectionLegal;
