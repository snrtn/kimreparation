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
  label: "Infos",
  title: "L'Atelier",
  // note: [
  //   "Uniquement sur rendez-vous.",
  //   "Pas d'accueil sans rendez-vous : travail technique en cours.",
  // ],
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
        maxWidth: "100% !important",
        minWidth: "100% !important",
        width: "100% !important",
        bgcolor: "#ffffff",
        py: { xs: 16, md: 20 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Grid spacing={{ xs: 8, md: 12 }}>
        <Grid item xs={12}>
          <Box sx={{ mb: 5 }}>
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

            <Stack spacing={2}>
              {/* 📍 1번 섹션: 평일 영업 안내 */}
              <Stack
                // 모바일은 위아래(column), PC는 양옆(row)
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
                    }}
                  >
                    Uniquement sur RDV
                    <InfoOutlinedIcon
                      sx={{
                        fontSize: "1rem",
                        color: "#0071e3",
                      }}
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
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      color: "#1d1d1f",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    {/* Fermé */}
                    {/*
                    <Tooltip
                      title={
                        <Box sx={{ p: 0.5 }}>
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{ fontWeight: 800, mb: 1, color: "#d32f2f" }}
                          >
                            Sur rendez-vous uniquement
                          </Typography>

                          <Typography
                            variant="caption"
                            display="block"
                            sx={{
                              color: "#424245",
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            Dépôt de l'appareil possible après confirmation du
                            créneau.
                          </Typography>

                          <Typography
                            variant="caption"
                            display="block"
                            sx={{ color: "#424245" }}
                          >
                            Validation du devis nécessaire pour la commande des
                            pièces.
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
                      <InfoOutlinedIcon
                        sx={{
                          fontSize: "1.4rem",
                          color: "#86868b",
                          cursor: "help",
                          opacity: 0.8,
                        }}
                      />
                    </Tooltip>


                    */}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#d32f2f", // 여기도 빨간색 그대로!
                    fontWeight: 700,
                    mt: { xs: 0.5, sm: 0 },
                  }}
                >
                  Fermé
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* <Box
            sx={{
              width: "100%",
              mt: 6,
              p: 4,
              boxSizing: "border-box",
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
                  mt: i > 0 ? 1 : 0,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeInfos;
