import React from "react";
import { Typography, Stack, Button, Box, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepDisplay = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "lines", label: "Il y a des traits ou des lignes sur l'image" },
    { id: "spots", label: "Il y a des taches noires (comme de l'encre)" },
    { id: "flicker", label: "L'image clignote ou l'écran saute" },
    { id: "colors", label: "Les couleurs sont bizarres (tout vert ou rose)" },
    { id: "partial", label: "Une partie de l'écran reste noire" },
    { id: "none", label: "L'image est parfaite, aucun défaut" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ display: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      display: next.includes(id) ? next.filter((i) => i !== id) : [...next, id],
    });
  };

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
        État de l'affichage
      </Typography>

      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 3,
          lineHeight: 1.6,
        }}
      >
        Que voyez-vous une fois l'écran allumé ?
        <br />
        <Typography
          variant="caption"
          sx={{
            color: "#0071e3",
            fontWeight: 700,
            fontSize: { xs: "0.8rem", md: "0.85rem" },
          }}
        >
          (Vous pouvez choisir plusieurs réponses)
        </Typography>
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

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 2.5 },
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
          Un écran présentant des traits ou des taches est extrêmement fragile.
          Ces symptômes visuels peuvent légèrement évoluer lors de l'ouverture
          nécessaire au diagnostic.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepDisplay;
