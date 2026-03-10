import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StepBattery = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "no_charge", label: "Il ne charge plus du tout (rien ne se passe)" }, // 충전 아예 안됨
    { id: "intermittent", label: "Le câble bouge ou se déconnecte tout seul" }, // 헐거움, 접촉 불량
    { id: "slow", label: "La charge est anormalement longue" }, // 충전 너무 느림
    { id: "fast_drain", label: "La batterie descend beaucoup trop vite" }, // 배터리 광탈
    { id: "shutdown", label: "Le téléphone s'éteint tout seul (ex: à 20%)" }, // 갑자기 꺼짐
    { id: "hot", label: "Le téléphone chauffe beaucoup en charge" }, // 🔥 추가: 충전 중 발열
    { id: "none", label: "La batterie tient bien la route" }, // 상태 좋음
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
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Batterie & Charge
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Votre téléphone a-t-il du mal à garder son énergie ?
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
              "&:hover": { borderColor: "#0071e3", bgcolor: "#f5faff" },
            }}
          >
            {opt.label}
          </Button>
        ))}
      </Stack>

      {/* ⚠️ 1. 배터리 광탈/꺼짐 선택 시 (보드 문제 가능성 방패) */}
      <Collapse in={isFastDrain}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff9e6",
            borderRadius: "12px",
            border: "1px solid #ffcc00",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <WarningAmberIcon sx={{ color: "#856404" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#856404", fontWeight: 700, mb: 0.5 }}
              >
                INFO : BATTERIE OU CARTE MÈRE ?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#856404", fontSize: "0.9rem", lineHeight: 1.4 }}
              >
                Une batterie qui se vide vite peut aussi être le signe d'un
                <strong> défaut sur la carte mère</strong>. Le test nous dira si
                la batterie doit être changée.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* ⚠️ 2. 충전 불량 선택 시 (정품 케이블 경고) */}
      <Collapse in={isChargingIssue}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#f5f5f7",
            borderRadius: "12px",
            border: "1px solid #d2d2d7",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <InfoOutlinedIcon sx={{ color: "#86868b" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#1d1d1f", fontWeight: 700, mb: 0.5 }}
              >
                VÉRIFICATION DU PORT
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#424245", fontSize: "0.9rem", lineHeight: 1.4 }}
              >
                L'utilisation de câbles non-officiels peut endommager le port de
                charge. Veuillez apporter votre câble habituel pour le test.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepBattery;
