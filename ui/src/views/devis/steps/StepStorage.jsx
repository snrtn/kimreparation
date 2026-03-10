import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepStorage = ({ selected, onUpdate }) => {
  const options = [
    { id: "yes", label: "Oui, j'ai déjà vu cette alerte de mémoire pleine" },
    { id: "no", label: "Non, je ne l'ai jamais vue" },
    { id: "unsure", label: "Je ne m'en rappelle plus" },
  ];

  const isFull = selected === "yes";

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
        Alerte Stockage
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Avez-vous déjà vu une alerte indiquant que votre stockage est saturé ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => onUpdate({ storage: opt.id })}
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

      <Collapse in={isFull}>
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
            Un stockage totalement saturé peut entraîner un blocage du système
            au démarrage (logo fixe). Cette information nous permet d'adapter
            notre intervention pour mieux protéger vos données.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepStorage;
