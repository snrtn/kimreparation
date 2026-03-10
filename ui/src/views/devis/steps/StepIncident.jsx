import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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

  // 1. 충격 관련 항목을 선택했는지 체크
  const hasPhysicalShock = selected.some((id) =>
    ["drop_low", "drop_high"].includes(id),
  );
  // 2. 물 관련 항목을 선택했는지 체크
  const hasLiquidDamage = selected.some((id) =>
    ["water_low", "water_high", "bathroom"].includes(id),
  );

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        L'origine du problème
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Que s'est-il passé avec votre téléphone ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 3 }}>
        {options.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            onClick={() => handleToggle(opt.id)}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              justifyContent: "flex-start",
              textAlign: "left",
              borderColor: selected.includes(opt.id) ? "#0071e3" : "#d2d2d7",
              bgcolor: selected.includes(opt.id) ? "#f5faff" : "white",
              textTransform: "none",
              color: "#1d1d1f",
              fontWeight: 600,
              "&:hover": { borderColor: "#0071e3", bgcolor: "#f5faff" },
            }}
          >
            {opt.label}
          </Button>
        ))}
      </Stack>

      {/* 충격을 선택했을 때만 나오는 경고 (메인보드 금 방어용) */}
      <Collapse in={hasPhysicalShock}>
        <Box
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "12px",
            border: "1px solid #ffcccc",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <WarningAmberIcon sx={{ color: "#d32f2f", mr: 1.5, mt: 0.2 }} />
          <Typography
            variant="body2"
            sx={{ color: "#601a1a", lineHeight: 1.5 }}
          >
            <strong>Risque de choc :</strong> Un impact peut créer des
            micro-fissures sur la carte mère qui s'aggravent avec le temps.
          </Typography>
        </Box>
      </Collapse>

      {/* 물/욕실 선택했을 때만 나오는 경고 (부식/녹 방어용) */}
      <Collapse in={hasLiquidDamage}>
        <Box
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#e8f2fc",
            borderRadius: "12px",
            border: "1px solid #b6d4f0",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <InfoOutlinedIcon sx={{ color: "#0071e3", mr: 1.5, mt: 0.2 }} />
          <Typography
            variant="body2"
            sx={{ color: "#004080", lineHeight: 1.5 }}
          >
            <strong>Risque d'oxydation :</strong> L'humidité crée de la rouille
            interne qui continue d'attaquer les composants même après séchage.
          </Typography>
        </Box>
      </Collapse>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "#f5f5f7",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #d2d2d7",
        }}
      >
        <InfoOutlinedIcon
          sx={{ color: "#86868b", mr: 1.5, mt: 0.2, fontSize: 20 }}
        />
        <Typography variant="body2" sx={{ color: "#424245", lineHeight: 1.5 }}>
          <strong>Note :</strong> Ces précisions nous aident à réaliser un
          diagnostic plus sûr pour vos données.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepIncident;
