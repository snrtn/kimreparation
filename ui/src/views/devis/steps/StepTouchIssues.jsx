import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StepTouchIssues = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "intermittent", label: "L'écran ne répond pas bien par moments" }, // 가끔 안 됨
    { id: "ghost", label: "« Ghost Touch » (L'écran clique tout seul)" }, // 고스트 터치
    { id: "dead_zones", label: "Certaines zones de l'écran ne marchent pas" }, // 특정 구역 안 됨
    { id: "none", label: "Aucun problème spécifique" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ touchIssues: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      touchIssues: next.includes(id)
        ? next.filter((i) => i !== id)
        : [...next, id],
    });
  };

  const isGhost = selected.includes("ghost");

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Détails du Tactile
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 3, lineHeight: 1.6 }}
      >
        Quels sont les défauts constatés ?
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
            }}
          >
            {opt.label}
          </Button>
        ))}
      </Stack>

      {/* 🚨 고스트 터치 선택 시: 아이폰 비활성화(데이터 유실) 경고 */}
      <Collapse in={isGhost}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            bgcolor: "#fff4f4",
            borderRadius: "12px",
            border: "2px solid #d32f2f",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 1 }}>
            <WarningAmberIcon sx={{ color: "#d32f2f" }} />
            <Typography
              variant="body2"
              sx={{ color: "#d32f2f", fontWeight: 800 }}
            >
              RISQUE DE VERROUILLAGE DÉFINITIF
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#601a1a", lineHeight: 1.5 }}
          >
            Si votre écran clique seul, il peut taper votre code de
            déverrouillage à votre place. Après plusieurs erreurs,{" "}
            <strong>votre iPhone sera bloqué (Indisponible)</strong> et vos
            données seront perdues.
            <br />
            <br />
            <strong>Éteignez l'appareil immédiatement</strong> jusqu'à la
            réparation.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepTouchIssues;
