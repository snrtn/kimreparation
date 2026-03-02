import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Step3_1 = ({ value, onChange }) => {
  const options = [
    {
      id: "none",
      label: "L'écran reste totalement noir, Écran cassé",
      desc: "Aucun affichage, même en éclairant l'écran.",
    },
    {
      id: "white",
      label: "Écran blanc ou figé",
      desc: "L'écran s'allume mais reste blanc.",
    },
    {
      id: "black",
      label: "Image sombre / Rétroéclairage HS",
      desc: "On devine l'image avec une lampe torche.",
    },
    {
      id: "cracked",
      label: "Image visible mais écran cassé",
      desc: "Des fissures sont présentes mais l'image est là.",
    },
  ];

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          DIAGNOSTIC VISUEL
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Comment décririez-vous l'affichage ?
        </Typography>
      </Box>
      <Stack spacing={2}>
        {options.map((opt) => (
          <Box
            key={opt.id}
            onClick={() => onChange(opt.id)}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              border: "2px solid",
              borderColor: value === opt.id ? "#0071e3" : "#f5f5f7",
              bgcolor: value === opt.id ? "#f5fbff" : "#f5f5f7",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                color: value === opt.id ? "#0071e3" : "#1d1d1f",
              }}
            >
              {opt.label}
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#86868b", mt: 0.5 }}>
              {opt.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Step3_1;
