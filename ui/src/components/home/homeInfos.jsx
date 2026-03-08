import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const infoContent = {
  label: "Informations",
  title: "L'Atelier",

  hours: [
    {
      day: "Lundi, Mardi, Jeudi, Vendredi",
      time: "09h00 - 18h00 (Sur rendez-vous)",
    },
    {
      day: "Mercredi, Soirées & Week-ends",
      time: "Selon mes disponibilités (Sur demande)",
    },
  ],

  location: {
    label: "Localisation",
    detail: "Beaumetz-lès-Loges, France",
    sub: "Kim Reparation • Réparation d'appareils",
  },

  contact: {
    label: "Demande de Devis",
    quote: "Devis Gratuits",
    email: "contact@kimreparation.fr",
  },

  // ✅ 더 쉽고, 더 정중하며, 절대 나대지 않는 3줄 요약
  note: [
    "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
    "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  ],
};

const HomeInfos = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 8, md: 12 }}>
          {/* 좌측 섹션: 영업 시간 및 안내 */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  color: "#86868b",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  mb: 1.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {infoContent.label}
              </Typography>
              <Typography
                sx={{
                  color: "#1d1d1f",
                  fontWeight: 700,
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  letterSpacing: "-0.04em",
                  whiteSpace: "pre-line",
                }}
              >
                {infoContent.title}
              </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 6 }}>
              {infoContent.hours.map((item, index) => (
                <Box
                  key={index}
                  sx={{ borderBottom: "1px solid #f5f5f7", pb: 2 }}
                >
                  <Typography
                    sx={{
                      color: "#86868b",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      mb: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.day}
                  </Typography>
                  <Typography
                    sx={{
                      color: index === 1 ? "#0066cc" : "#1d1d1f",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.time}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* 안내 박스: 톤이 아주 차분해졌습니다. */}
            <Stack
              spacing={2.5}
              sx={{
                p: 4,
                bgcolor: "#f9f9fb",
                borderRadius: "20px",
                borderLeft: "4px solid #ff0000",
              }}
            >
              {infoContent.note.map((text, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "#424245",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  • {text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* 우측 섹션: 위치 및 연락처 */}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeInfos;
