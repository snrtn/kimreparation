// StepStorage.jsx
import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

const StepStorage = ({ selected, onUpdate }) => {
  const options = [
    { id: "yes", label: "Oui, j'ai déjà vu cette alerte de mémoire pleine" },
    { id: "no", label: "Non, je ne l'ai jamais vue" },
    { id: "unsure", label: "Je ne m'en rappelle plus" },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Alerte Stockage
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Avez-vous déjà vu une alerte de "Stockage saturé" ?
      </Typography>
      <Stack spacing={1.5}>
        {options.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            onClick={() => onUpdate({ storage: opt.id })}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              justifyContent: "flex-start",
              borderColor: selected === opt.id ? "#0071e3" : "#d2d2d7",
              bgcolor: selected === opt.id ? "#f5faff" : "white",
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

export default StepStorage;
