// StepEnvironment.jsx
import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

const StepEnvironment = ({ selected = [], onUpdate }) => {
  const options = [
    {
      id: "sport",
      label: "Sport et quotidien (Tapis de course, tir, caisson de basses...)",
    },
    {
      id: "agri",
      label: "Engins agricoles et tout-terrain (Tracteur, quad...)",
    },
    {
      id: "work",
      label: "Chantier et machinerie lourde (Perceuse, chariot...)",
    },
    {
      id: "marine",
      label: "Nautisme et loisirs aquatiques (Jet-ski, bateau...)",
    },
    { id: "none", label: "Aucune exposition aux vibrations fortes" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ environment: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      environment: next.includes(id)
        ? next.filter((i) => i !== id)
        : [...next, id],
    });
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Environnement
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Les vibrations peuvent affecter les composants. Avez-vous une
        utilisation spécifique ?
      </Typography>
      <Stack spacing={1.5}>
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
    </Box>
  );
};

export default StepEnvironment;
