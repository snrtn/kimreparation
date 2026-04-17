import React from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  Button,
  Tooltip,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const AtelierAtelier = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
  };

  // const infoNotes = [
  //   "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
  //   "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  // ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 12, xl: 16 } }}>
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#0066cc",
              mb: 0.8,
            }}
          >
            Horaires
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.04em",
              mb: 1.5,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#1d1d1f",
            }}
          >
            Horaires d'ouverture.
          </Typography>
        </Box>

        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Stack spacing={2}>
            {/* 📍 1번 섹션: 평일 영업 안내 */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "baseline" }}
              spacing={1}
              sx={{ pb: { xs: 5, md: 0 } }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#86868b",
                    mb: 0.5,
                  }}
                >
                  Lundi, Mardi, Jeudi, Vendredi
                </Typography>
              </Box>
              <Tooltip
                title={
                  <Box sx={{ p: 0.5 }}>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ fontWeight: 700, mb: 0.5, color: "#1d1d1f" }}
                    >
                      Horaires : 09h00 - 18h00
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{
                        mt: 1.5,
                        pt: 1,
                        borderTop: "1px solid #eee",
                        color: "#636366",
                        fontStyle: "italic",
                      }}
                    >
                      Une question ? Écrivez-nous :<br />
                      <strong>contact@kimreparation.fr</strong>
                    </Typography>
                  </Box>
                }
                arrow
                placement="top"
                enterTouchDelay={0}
                slotProps={{
                  popper: {
                    sx: {
                      zIndex: 9999,
                      "& .MuiTooltip-tooltip": {
                        bgcolor: "#ffffff",
                        color: "#1d1d1f",
                        border: "1px solid #d2d2d7",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        p: 1.5,
                        borderRadius: "12px",
                      },
                      "& .MuiTooltip-arrow": { color: "#ffffff" },
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0071e3",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    gap: 0.5,
                    cursor: "help",
                    mt: { xs: 0.5, sm: 0 },
                  }}
                >
                  Uniquement sur RDV
                  <InfoOutlinedIcon
                    sx={{ fontSize: "1rem", color: "#0071e3" }}
                  />
                </Typography>
              </Tooltip>
            </Stack>

            {/* 📍 2번 섹션: 유동 영업 안내 */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "baseline" }}
              spacing={1}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#86868b",
                    mb: 0.5,
                  }}
                >
                  Mercredi, Soirées & Week-ends
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#d32f2f",
                  fontWeight: 700,
                  mt: { xs: 0.5, sm: 0 },
                }}
              >
                Fermé
              </Typography>
            </Stack>
          </Stack>

          {/* <Stack
            spacing={2.5}
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: "#f9f9fb",
              borderRadius: "20px",
              borderLeft: "4px solid #ff0000",
            }}
          >
            {infoNotes.map((text, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#424245",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                • {text}
              </Typography>
            ))}
          </Stack> */}
        </Box>
      </Box>

      {/* --- 섹션 2: 유튜브 브릿지 --- */}
      <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
        <Typography sx={labelStyle}>SUR YOUTUBE</Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
        >
          <Box
            sx={{
              width: { xs: "100%", md: "280px" },
              aspectRatio: "9 / 16",
              borderRadius: "16px",
              overflow: "hidden",
              bgcolor: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              style={{ width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/YOUR_SHORTS_ID"
              title="Kim Reparation Shorts"
              allowFullScreen
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.04em" }}
            >
              Kim <br /> Reparation
            </Typography>
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              href="https://youtube.com/@kimreparation_official"
              target="_blank"
              sx={{
                bgcolor: "#ff0000",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: 700,
                "&:hover": { bgcolor: "#cc0000" },
              }}
            >
              Voir la chaîne
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AtelierAtelier;
