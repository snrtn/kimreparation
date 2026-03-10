import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepEnvironment = ({ selected = [], onUpdate }) => {
  const options = [
    {
      id: "sport",
      label: "Sport et quotidien (Tapis de course, moto, vélo...)",
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

  const hasVibration = selected.some(
    (id) => id !== "none" && selected.length > 0,
  );

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
        Environnement
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Les vibrations peuvent affecter les composants. Avez-vous une
        utilisation spécifique ?
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

      {/* 🔵 진동 노출에 대한 부드러운 인지 */}
      <Collapse in={hasVibration}>
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
            Les vibrations intenses ou répétées peuvent parfois dérégler les
            lentilles de l'appareil photo ou fragiliser certaines connexions
            internes. Le savoir nous permet d'orienter nos tests en atelier !
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepEnvironment;
