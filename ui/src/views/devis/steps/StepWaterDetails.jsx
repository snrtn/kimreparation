import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepWaterDetails = ({
  timeSelected,
  goalSelected,
  waterType,
  onUpdate,
}) => {
  const isSaltyOrChlorine = waterType === "sea" || waterType === "pool";
  const isOverWeek = timeSelected === "week";

  const timeOptions = [
    { id: "day", label: "Il y a moins de 24h" },
    { id: "days", label: "Il y a 2 à 3 jours" },
    { id: "week", label: "Il y a plus d'une semaine" },
  ];

  const goalOptions = [
    { id: "memory", label: "Sauvegarder mes données en priorité" },
    {
      id: "device",
      label: "Réparer l'appareil pour le réutiliser",
      disabled: isOverWeek,
    },
    {
      id: "both",
      label: "Sauver l'appareil ET les données",
      disabled: isOverWeek,
    },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        Délai et Objectif
      </Typography>

      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          fontWeight: 700,
          mt: 3,
          mb: 2,
        }}
      >
        Quand est-ce arrivé ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {timeOptions.map((opt) => {
          const isSelected = timeSelected === opt.id;
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => {
                onUpdate({ waterTime: opt.id });
                if (opt.id === "week") onUpdate({ waterGoal: "memory" });
              }}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: "16px",
                justifyContent: "space-between",
                textAlign: "left",
                border: isSelected ? "2px solid #0071e3" : "1px solid #d2d2d7",
                bgcolor: isSelected ? "#eff7ff" : "white",
                textTransform: "none",
                color: isSelected ? "#0071e3" : "#1d1d1f",
                fontWeight: 700,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#0071e3",
                  bgcolor: "#eff7ff",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {opt.label}
              </Typography>
              {isSelected && (
                <CheckCircleIcon
                  sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
                />
              )}
            </Button>
          );
        })}
      </Stack>

      <Collapse in={isSaltyOrChlorine}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Le sel et le chlore accélèrent l'oxydation. Un nettoyage adapté en
            atelier est conseillé pour stopper la progression des dégâts.
          </Typography>
        </Paper>
      </Collapse>

      <Collapse in={isOverWeek}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Après une semaine, la corrosion interne est souvent avancée. C'est
            pourquoi nous privilégions la récupération de vos données pour
            sécuriser l'essentiel.
          </Typography>
        </Paper>
      </Collapse>

      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
      >
        Quel est votre objectif ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {goalOptions.map((opt) => {
          const isSelected = goalSelected === opt.id;
          return (
            <Button
              key={opt.id}
              variant="outlined"
              disabled={opt.disabled}
              onClick={() => onUpdate({ waterGoal: opt.id })}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: "16px",
                justifyContent: "space-between",
                textAlign: "left",
                border: isSelected ? "2px solid #0071e3" : "1px solid #d2d2d7",
                bgcolor: isSelected ? "#eff7ff" : "white",
                textTransform: "none",
                color: isSelected ? "#0071e3" : "#1d1d1f",
                fontWeight: 700,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: opt.disabled ? "#e5e5e7" : "#0071e3",
                  bgcolor: opt.disabled ? "#f5f5f7" : "#eff7ff",
                },
                "&.Mui-disabled": {
                  bgcolor: "#f5f5f7",
                  color: "#a1a1a6",
                  borderColor: "#e5e5e7",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {opt.label}
                </Typography>
                {opt.disabled && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#d32f2f",
                      display: "block",
                      mt: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    Délai trop long pour garantir la stabilité de l'appareil.
                  </Typography>
                )}
              </Box>
              {isSelected && !opt.disabled && (
                <CheckCircleIcon
                  sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
                />
              )}
            </Button>
          );
        })}
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 2.5 },
          bgcolor: "#f5f5f7",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #d2d2d7",
        }}
      >
        <AccessTimeIcon
          sx={{
            color: "#86868b",
            mr: 1.5,
            mt: 0.2,
            fontSize: { xs: 20, md: 22 },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#424245",
            lineHeight: 1.5,
            fontSize: { xs: "0.85rem", md: "0.9rem" },
          }}
        >
          Plus vous agissez vite, plus nous avons de chances de sauver vos
          données et composants.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepWaterDetails;
