import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepTouchIssues = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "intermittent", label: "L'écran ne répond pas bien par moments" },
    { id: "ghost", label: "« Ghost Touch » (L'écran clique tout seul)" },
    { id: "dead_zones", label: "Certaines zones de l'écran ne marchent pas" },
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
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        Détails du Tactile
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Quels sont les défauts constatés ?
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

      <Collapse in={isGhost}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "12px",
            border: "1px solid #ffcccc",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5 }}>
            <WarningAmberIcon
              sx={{ color: "#d32f2f", fontSize: { xs: 22, md: 24 } }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#d32f2f",
                fontWeight: 800,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
              }}
            >
              Mesure de précaution
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "#601a1a",
              lineHeight: 1.5,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            Un écran qui clique tout seul peut saisir un mauvais code de
            déverrouillage à plusieurs reprises. Pour éviter que votre appareil
            ne se bloque définitivement (Indisponible) et de perdre vos données,
            il est vivement conseillé de{" "}
            <strong>l'éteindre jusqu'à la réparation</strong>.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepTouchIssues;
