import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepBattery = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "no_charge", label: "Il ne charge plus du tout (rien ne se passe)" },
    { id: "intermittent", label: "Le câble bouge ou se déconnecte tout seul" },
    { id: "slow", label: "La charge est anormalement longue" },
    { id: "fast_drain", label: "La batterie descend beaucoup trop vite" },
    { id: "shutdown", label: "Le téléphone s'éteint tout seul (ex: à 20%)" },
    { id: "hot", label: "Le téléphone chauffe beaucoup en charge" },
    { id: "none", label: "La batterie tient bien la route" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ battery: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      battery: next.includes(id) ? next.filter((i) => i !== id) : [...next, id],
    });
  };

  const isFastDrain =
    selected.includes("fast_drain") || selected.includes("shutdown");
  const isChargingIssue =
    selected.includes("no_charge") || selected.includes("intermittent");

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
        Batterie & Charge
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Votre téléphone a-t-il du mal à garder son énergie ?
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

      {/* 🔵 배터리 광탈/꺼짐 방어막 (메인보드 문제 가능성 인지) */}
      <Collapse in={isFastDrain}>
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
            Une batterie qui se vide anormalement vite peut parfois être le
            signe d'une surconsommation de la carte mère. Le test en atelier
            nous permettra d'identifier l'origine exacte du problème.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🔵 충전 불량 방어막 (정품 케이블 지참 안내 및 인지) */}
      <Collapse in={isChargingIssue}>
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
            L'utilisation de câbles non originaux peut parfois fragiliser le
            port de charge. N'hésitez pas à apporter votre câble habituel lors
            de votre visite pour que nous puissions le vérifier.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepBattery;
