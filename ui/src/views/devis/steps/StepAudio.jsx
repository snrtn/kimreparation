import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const StepAudio = ({ selected = [], onUpdate, touchWorks }) => {
  const isTouchBroken = touchWorks === "no";
  const isUnknown = selected.includes("unknown");

  const options = [
    { id: "mic", label: "On ne m'entend pas (Microphone)" },
    { id: "speaker", label: "Pas de son (Haut-parleur)" },
    { id: "unknown", label: "Impossible à vérifier" },
    { id: "none", label: "Audio parfait" },
  ];

  const handleToggle = (id) => {
    if (id === "none" || id === "unknown") return onUpdate({ audio: [id] });
    const next = selected.filter((i) => i !== "none" && i !== "unknown");
    onUpdate({
      audio: next.includes(id) ? next.filter((i) => i !== id) : [...next, id],
    });
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Son & Micros
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Testez les appels et les haut-parleurs.
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

      {/* 🔵 부드러운 인지 안내 */}
      <Collapse in={isUnknown && !isTouchBroken}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            border: "1px solid #0071e3",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <InfoOutlinedIcon sx={{ color: "#0071e3" }} />
            <Typography
              variant="body2"
              sx={{ color: "#004080", fontWeight: 600 }}
            >
              Note : Les fonctions audio seront testées une fois le nouvel écran
              installé.
            </Typography>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🔴 터치 불량 방패 */}
      <Collapse in={isTouchBroken}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "16px",
            border: "2px solid #d32f2f",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5 }}>
            <ErrorOutlineIcon sx={{ color: "#d32f2f" }} />
            <Typography
              variant="body1"
              sx={{ color: "#d32f2f", fontWeight: 900 }}
            >
              TEST AUDIO COMPLIQUÉ
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#601a1a", fontSize: "0.9rem", lineHeight: 1.5 }}
          >
            Sans tactile, il est difficile de tester les micros. Nous
            vérifierons tout cela lors de l'intervention.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepAudio;
