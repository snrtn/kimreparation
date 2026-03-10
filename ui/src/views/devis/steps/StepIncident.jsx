import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepIncident = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "drop_low", label: "Petite chute (hauteur de bureau)" },
    { id: "drop_high", label: "Chute d'une hauteur importante (>1m)" },
    { id: "water_low", label: "Immersion légère (moins de 2m)" },
    { id: "water_high", label: "Immersion profonde (plus de 2m)" },
    { id: "bathroom", label: "Utilisation fréquente dans la salle de bain" },
    { id: "none", label: "Aucun incident particulier" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ incident: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      incident: next.includes(id)
        ? next.filter((i) => i !== id)
        : [...next, id],
    });
  };

  // 💡 세 가지로 분리했습니다.
  const hasPhysicalShock = selected.some((id) =>
    ["drop_low", "drop_high"].includes(id),
  );
  const hasLiquidDamage = selected.some((id) =>
    ["water_low", "water_high"].includes(id),
  );
  const hasBathroom = selected.includes("bathroom");

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
        L'origine du problème
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 3,
          lineHeight: 1.6,
        }}
      >
        Que s'est-il passé avec votre téléphone ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => handleToggle(opt.id)}
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

      {/* 🔵 충격 관련 인지 */}
      <Collapse in={hasPhysicalShock}>
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
            Un impact peut créer des micro-fissures sur la carte mère. Ces
            fragilités internes peuvent parfois évoluer avec le temps.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🔵 직접적인 침수(물) 관련 인지 */}
      <Collapse in={hasLiquidDamage}>
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
            L'humidité crée une oxydation qui continue parfois d'affecter les
            composants internes même après un séchage apparent.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🔵 🔥 욕실(습기) 전용 부드러운 인지 추가 🔥 */}
      <Collapse in={hasBathroom}>
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
            La vapeur d'eau d'une salle de bain s'infiltre facilement dans
            l'appareil et peut créer une lente oxydation, même sans contact
            direct avec l'eau.
          </Typography>
        </Paper>
      </Collapse>

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
        <InfoOutlinedIcon
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
          Ces précisions nous aident à réaliser un diagnostic plus sûr et à
          mieux protéger vos données.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepIncident;
