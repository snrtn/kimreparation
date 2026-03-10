// StepTouchCheck.jsx
import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";

const StepTouchCheck = ({ selected, onUpdate }) => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Test du Tactile
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Le tactile répond-il correctement à vos commandes ?
      </Typography>
      <Stack spacing={1.5}>
        <Button
          variant="outlined"
          onClick={() => onUpdate({ touchWorks: "yes" })}
          sx={{
            p: 2.5,
            borderRadius: "16px",
            justifyContent: "flex-start",
            borderColor: selected === "yes" ? "#0071e3" : "#d2d2d7",
            bgcolor: selected === "yes" ? "#f5faff" : "white",
            textTransform: "none",
            color: "#1d1d1f",
            fontWeight: 600,
          }}
        >
          Oui, le tactile fonctionne normalement
        </Button>
        <Button
          variant="outlined"
          onClick={() => onUpdate({ touchWorks: "no" })}
          sx={{
            p: 2.5,
            borderRadius: "16px",
            justifyContent: "flex-start",
            borderColor: selected === "no" ? "#ff3b30" : "#d2d2d7",
            bgcolor: selected === "no" ? "#fff1f0" : "white",
            textTransform: "none",
            color: "#1d1d1f",
            fontWeight: 600,
          }}
        >
          Non, le tactile présente des dysfonctionnements
        </Button>
      </Stack>
    </Box>
  );
};

export default StepTouchCheck;
