import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const infoContent = {
  label: "Informations",
  title: "L'Atelier",
  note: [
    "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
    "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  ],
};

const HomeInfos = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        py: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 8, md: 12 }}>
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
                }}
              >
                {infoContent.title}
              </Typography>
            </Box>

            <Stack spacing={labelStyle.mb}>
              <Typography sx={labelStyle}>HORAIRES D'OUVERTURE</Typography>

              <Stack spacing={5}>
                {/* 📍 1번 섹션: 평일 영업 안내 */}
                <Stack
                  // 모바일은 위아래(column), PC는 양옆(row)
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
                      Lundi, Mardi, Jeudi, Vendredi
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: "#1d1d1f",
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
                              sx={{
                                fontWeight: 700,
                                mb: 0.5,
                                color: "#1d1d1f",
                              }}
                            >
                              Horaires : 09h00 - 18h00
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ color: "#424245" }}
                            >
                              • Uniquement sur RDV
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
                              zIndex: 9999, // 📍 z-index 빡세게 올려서 가려지지 않게 설정
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
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "1.4rem",
                            color: "#86868b",
                            cursor: "help",
                            opacity: 0.7,
                          }}
                        />
                      </Tooltip>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#0071e3",
                      fontWeight: 700,
                      mt: { xs: 0.5, sm: 0 },
                    }}
                  >
                    Disponibilités à confirmer
                  </Typography>
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
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: "#1d1d1f",
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
                            {/* 📍 툴팁 본문: 일정에 따른 기기 접수 안내 */}
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{
                                color: "#424245",
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              • Dépôt d'appareils possible uniquement selon mes
                              disponibilités.
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ color: "#424245" }}
                            >
                              • Uniquement après validation de votre devis.
                            </Typography>

                            {/* 📍 하단: 궁금한 점은 메일로 문의 */}
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
                              Une question ? Écrivez-nous par e-mail :<br />
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
                              zIndex: 9999, // 📍 z-index 보장
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
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "1.4rem",
                            color: "#86868b",
                            cursor: "help",
                            opacity: 0.8,
                          }}
                        />
                      </Tooltip>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#d32f2f",
                      fontWeight: 700,
                      mt: { xs: 0.5, sm: 0 },
                    }}
                  >
                    Après validation du devis
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            {/* 안내 박스 */}
            <Stack
              spacing={2.5}
              sx={{
                p: 4,
                mt: 6,
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
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeInfos;
