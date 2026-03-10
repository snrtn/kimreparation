import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StepConnection = ({ selected = [], onUpdate, touchWorks }) => {
  const isTouchBroken = touchWorks === "no";
  const isUnknown = selected.includes("unknown");

  const options = [
    { id: "wifi", label: "Problème Wi-Fi" },
    { id: "bluetooth", label: "Problème Bluetooth" },
    { id: "unknown", label: "Impossible à vérifier" },
    { id: "none", label: "Connexions parfaites" },
  ];

  const handleToggle = (id) => {
    if (id === "none" || id === "unknown")
      return onUpdate({ connection: [id] });
    const next = selected.filter((i) => i !== "none" && i !== "unknown");
    onUpdate({
      connection: next.includes(id)
        ? next.filter((i) => i !== id)
        : [...next, id],
    });
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 4, color: "#1d1d1f" }}
      >
        Connectivité
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
              Note : Le Wi-Fi et le Bluetooth seront contrôlés lors du
              diagnostic technique en atelier.
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
            <WarningAmberIcon sx={{ color: "#d32f2f" }} />
            <Typography
              variant="body1"
              sx={{ color: "#d32f2f", fontWeight: 900 }}
            >
              TEST RÉSEAU DIFFICILE
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "#601a1a", fontSize: "0.9rem", lineHeight: 1.5 }}
          >
            Accéder aux réglages est complexe sans tactile. Nous testerons la
            connectivité pour vous.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepConnection;
