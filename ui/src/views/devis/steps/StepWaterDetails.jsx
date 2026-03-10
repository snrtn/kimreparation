import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const StepWaterDetails = ({
  timeSelected,
  goalSelected,
  waterType,
  onUpdate,
}) => {
  const isSaltyOrChlorine = waterType === "sea" || waterType === "pool";
  const isOverWeek = timeSelected === "week";

  const timeOptions = [
    { id: "day", label: "Il y a moins de 24h" }, // 24시간 이내
    { id: "days", label: "Il y a 2 à 3 jours" }, // 2~3일 전
    { id: "week", label: "Il y a plus d'une semaine" }, // 일주일 이상
  ];

  const goalOptions = [
    { id: "memory", label: "Sauvegarder mes données en priorité" }, // 데이터 우선
    {
      id: "device",
      label: "Réparer l'appareil pour le réutiliser", // 기기 수리 우선
      disabled: isOverWeek,
    },
    {
      id: "both",
      label: "Sauver l'appareil ET les données", // 둘 다
      disabled: isOverWeek,
    },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Délai et Objectif
      </Typography>

      <Typography sx={{ color: "#424245", fontWeight: 700, mt: 3, mb: 2 }}>
        Quand est-ce arrivé ?
      </Typography>
      <Stack spacing={1.5} sx={{ mb: 2 }}>
        {timeOptions.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            onClick={() => {
              onUpdate({ waterTime: opt.id });
              if (opt.id === "week") onUpdate({ waterGoal: "memory" }); // 일주일 넘으면 자동으로 데이터 구조로 선택 변경
            }}
            sx={{
              p: 2,
              borderRadius: "12px",
              justifyContent: "flex-start",
              textAlign: "left",
              borderColor: timeSelected === opt.id ? "#0071e3" : "#d2d2d7",
              bgcolor: timeSelected === opt.id ? "#f5faff" : "white",
              textTransform: "none",
              color: "#1d1d1f",
              fontWeight: 600,
              "&:hover": { borderColor: "#0071e3" },
            }}
          >
            {opt.label}
          </Button>
        ))}
      </Stack>

      {/* ⚠️ 바닷물/수영장물 긴급 경고 */}
      <Collapse in={isSaltyOrChlorine}>
        <Box
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff9e6",
            borderRadius: "10px",
            border: "1px solid #ffcc00",
            display: "flex",
          }}
        >
          <InfoOutlinedIcon sx={{ color: "#856404", mr: 1.5, fontSize: 22 }} />
          <Typography
            variant="body2"
            sx={{ color: "#856404", lineHeight: 1.4 }}
          >
            <strong>Rappel :</strong> Le sel et le chlore accélèrent
            l'oxydation. Un <strong>nettoyage adapté</strong> est urgent pour
            stopper les dégâts.
          </Typography>
        </Box>
      </Collapse>

      {/* 🚨 일주일 경과 시 경고 (방패) */}
      <Collapse in={isOverWeek}>
        <Box
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "10px",
            border: "1px solid #ffcccc",
            display: "flex",
          }}
        >
          <WarningAmberIcon sx={{ color: "#d32f2f", mr: 1.5, fontSize: 22 }} />
          <Typography
            variant="body2"
            sx={{ color: "#601a1a", lineHeight: 1.4 }}
          >
            <strong>Corrosion avancée :</strong> Après une semaine, les chances
            de réparation complète de l'appareil diminuent fortement. Nous
            privilégions alors la <strong>récupération de vos données</strong>.
          </Typography>
        </Box>
      </Collapse>

      <Typography sx={{ color: "#424245", fontWeight: 700, mt: 3, mb: 2 }}>
        Quel est votre objectif ?
      </Typography>
      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {goalOptions.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            disabled={opt.disabled}
            onClick={() => onUpdate({ waterGoal: opt.id })}
            sx={{
              p: 2,
              borderRadius: "12px",
              justifyContent: "flex-start",
              textAlign: "left",
              borderColor: goalSelected === opt.id ? "#0071e3" : "#d2d2d7",
              bgcolor: goalSelected === opt.id ? "#f5faff" : "white",
              textTransform: "none",
              color: "#1d1d1f",
              fontWeight: 600,
              "&.Mui-disabled": {
                bgcolor: "#f5f5f7",
                color: "#a1a1a6",
                borderColor: "#e5e5e7",
              },
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {opt.label}
              </Typography>
              {opt.disabled && (
                <Typography
                  variant="caption"
                  sx={{ color: "#ff3b30", display: "block" }}
                >
                  Délai trop long pour garantir une réparation fiable.
                </Typography>
              )}
            </Box>
          </Button>
        ))}
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "#f5f5f7",
          borderRadius: "12px",
          display: "flex",
          border: "1px solid #d2d2d7",
        }}
      >
        <AccessTimeIcon sx={{ color: "#86868b", mr: 1.5, fontSize: 20 }} />
        <Typography variant="body2" sx={{ color: "#424245", lineHeight: 1.5 }}>
          Plus vous agissez vite, plus nous avons de chances de sauver vos
          photos et vos contacts.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepWaterDetails;
