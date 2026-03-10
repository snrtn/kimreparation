import React from "react";
import { Typography, Stack, Button, Box, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StepDisplay = ({ selected = [], onUpdate }) => {
  // 프랑스인들이 화면 증상을 말할 때 쓰는 가장 쉬운 표현들로 바꿨습니다.
  const options = [
    { id: "lines", label: "Il y a des traits ou des lignes sur l'image" }, // 세로줄/가로줄 있음
    { id: "spots", label: "Il y a des taches noires (comme de l'encre)" }, // 검은 반점(잉크 번짐)
    { id: "flicker", label: "L'image clignote ou l'écran saute" }, // 화면 깜빡임/떨림 (추가)
    { id: "colors", label: "Les couleurs sont bizarres (tout vert ou rose)" }, // 색상 이상(전체 초록/분홍 등) (추가)
    { id: "partial", label: "Une partie de l'écran reste noire" }, // 화면 일부 안 나옴
    { id: "none", label: "L'image est parfaite, aucun défaut" }, // 완벽함
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ display: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      display: next.includes(id) ? next.filter((i) => i !== id) : [...next, id],
    });
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        État de l'affichage
      </Typography>

      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 3, lineHeight: 1.6 }}
      >
        Que voyez-vous une fois l'écran allumé ?
        <br />
        <Typography
          variant="caption"
          sx={{ color: "#0071e3", fontWeight: 700 }}
        >
          (Vous pouvez choisir plusieurs réponses)
        </Typography>
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
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

      {/* 🔥 화면 전용 법적 방어막 : "화면 결함은 건드리면 더 심해질 수 있음" 고지 */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "#fff4f4", // 주의를 주기 위해 살짝 붉은색
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #ffcccc",
        }}
      >
        <InfoOutlinedIcon
          sx={{ color: "#d32f2f", mr: 1.5, mt: 0.2, fontSize: 20 }}
        />
        <Typography variant="body2" sx={{ color: "#424245", lineHeight: 1.5 }}>
          <strong>Attention :</strong> Un écran présentant des traits ou des
          taches est extrêmement fragile. Ces défauts peuvent s'aggraver lors de
          l'ouverture pour le diagnostic.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepDisplay;
