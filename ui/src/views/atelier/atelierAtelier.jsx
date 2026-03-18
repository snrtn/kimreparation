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

  // ✅ 툴팁 하얀색 테두리 스타일 공통 적용
  const tooltipSlotProps = {
    popper: {
      sx: {
        "& .MuiTooltip-tooltip": {
          bgcolor: "#ffffff",
          color: "#1d1d1f",
          border: "1px solid #d2d2d7",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          p: 1.5,
          borderRadius: "12px",
        },
        "& .MuiTooltip-arrow": {
          color: "#ffffff",
          "&::before": { border: "1px solid #d2d2d7" },
        },
      },
    },
  };

  const infoNotes = [
    "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
    "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 16, xl: 20 } }}>
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
          <Stack spacing={4} sx={{ mb: 6 }}>
            {/* --- 정규 영업일 --- */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2}
            >
              <Box sx={{ flex: 1 }}>
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

                {/* 📍 텍스트 + 아이콘 한 줄 정렬 */}
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  Sur rendez-vous uniquement
                  <Tooltip
                    title={
                      <Box sx={{ p: 0.5 }}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{ fontWeight: 700, mb: 0.5 }}
                        >
                          Horaires : 09h00 - 18h00
                        </Typography>
                        <Typography variant="caption" display="block">
                          • Uniquement sur RDV
                        </Typography>
                        <Typography variant="caption" display="block">
                          • Réservation obligatoire
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
                    slotProps={tooltipSlotProps}
                  >
                    <InfoOutlinedIcon
                      sx={{
                        fontSize: "1.4rem",
                        color: "#86868b",
                        cursor: "help",
                        opacity: 0.7,
                        "&:hover": { opacity: 1, color: "#0071e3" },
                      }}
                    />
                  </Tooltip>
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#0071e3",
                  fontWeight: 700,
                  textAlign: "right",
                  minWidth: { xs: "120px", sm: "auto" },
                }}
              >
                Disponibilités à confirmer
              </Typography>
            </Stack>

            {/* --- 유동 영업일 (문 닫음 강조 버전) --- */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2}
            >
              <Box sx={{ flex: 1 }}>
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
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#0066cc",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  Dépôt sur RDV
                  <Tooltip
                    title={
                      <Box sx={{ p: 0.5 }}>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{ fontWeight: 800, mb: 1, color: "#d32f2f" }}
                        >
                          Horaires : FERMÉ (Pas d'ouverture libre)
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{ fontWeight: 600 }}
                        >
                          • Dépôt d'appareils possible uniquement selon mes
                          disponibilités.
                        </Typography>
                        <Typography variant="caption" display="block">
                          • Uniquement après validation du devis.
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
                          Une question ? Contactez-nous :<br />
                          <strong>contact@kimreparation.fr</strong>
                        </Typography>
                      </Box>
                    }
                    arrow
                    placement="top"
                    slotProps={tooltipSlotProps}
                  >
                    <InfoOutlinedIcon
                      sx={{
                        fontSize: "1.4rem",
                        color: "#86868b",
                        cursor: "help",
                        opacity: 0.8,
                        "&:hover": { opacity: 1, color: "#0071e3" },
                      }}
                    />
                  </Tooltip>
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#d32f2f",
                  fontWeight: 700,
                  textAlign: "right",
                  minWidth: { xs: "130px", sm: "auto" },
                }}
              >
                Sur devis accepté uniquement
              </Typography>
            </Stack>
          </Stack>

          {/* 안내 박스 */}
          <Stack
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
          </Stack>
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
              href="https://youtube.com/@kimreparation-canal"
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
