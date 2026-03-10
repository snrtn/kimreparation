import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepAudio = ({ selected = [], onUpdate }) => {
  const isUnknown = selected.includes("unknown"); // 확인 불가 선택 여부

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
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => handleToggle(opt.id)}
              sx={{
                p: 2.5,
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
              <Typography sx={{ fontWeight: 700 }}>{opt.label}</Typography>
              {isSelected && <CheckCircleIcon sx={{ color: "#0071e3" }} />}
            </Button>
          );
        })}
      </Stack>

      {/* 🔵 부드러운 인지 안내 (무서운 빨간 카드 완전 삭제) */}
      <Collapse in={isUnknown}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            border: "1px solid #0071e3",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <InfoOutlinedIcon sx={{ color: "#0071e3" }} />
          <Typography
            variant="body2"
            sx={{ color: "#004080", fontWeight: 600, lineHeight: 1.4 }}
          >
            Rassurez-vous : les fonctions audio seront testées une fois le
            nouvel écran installé.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepAudio;
