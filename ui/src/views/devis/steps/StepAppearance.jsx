import React from "react";
import { Typography, Stack, Button, Box, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StepAppearance = ({ selected = [], onUpdate }) => {
  // 텍스트는 프랑스인이 초등학생도 이해할 수 있는 수준으로 쉽게 썼습니다.
  const options = [
    { id: "front", label: "L'écran est cassé, fendu ou très rayé" }, // 앞유리(화면)가 깨짐/금감/기스심함
    { id: "back", label: "Le dos du téléphone est cassé ou abîmé" }, // 폰 뒷면이 깨지거나 망가짐
    { id: "camera", label: "Le petit verre de l'appareil photo est cassé" }, // 카메라 렌즈 유리가 깨짐
    { id: "buttons", label: "Les boutons sur le côté ne marchent plus" }, // 옆면 버튼들이 안 눌림
    { id: "fog", label: "Il y a de la buée ou de l'eau dans les caméras" }, // 카메라 안에 습기나 물방울이 보임
    { id: "none", label: "Le téléphone est comme neuf, aucun choc" }, // 기스 하나 없이 새것 같음
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ appearance: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      appearance: next.includes(id)
        ? next.filter((i) => i !== id)
        : [...next, id],
    });
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      {/* 제목: 외관 상태 */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        L'état extérieur
      </Typography>

      {/* 안내: 폰을 잘 살펴보고 여러 개 선택 가능하다는 안내 */}
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 3, lineHeight: 1.6 }}
      >
        Regardez bien votre téléphone. Est-ce qu'il y a des traces de chocs ?
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

      {/* 🔥 법적 방어막 박스: "겉이 멀쩡해도 안은 망가졌을 수 있음" 고지 */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "#f5f5f7",
          borderRadius: "12px",
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #d2d2d7",
        }}
      >
        <InfoOutlinedIcon
          sx={{ color: "#86868b", mr: 1.5, mt: 0.2, fontSize: 20 }}
        />
        <Typography variant="body2" sx={{ color: "#424245", lineHeight: 1.5 }}>
          <strong>Attention :</strong> Même si le choc semble petit à
          l'extérieur, l'intérieur du téléphone peut être abîmé. Seule
          l'ouverture de l'appareil permettra de confirmer l'état de vos
          composants.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StepAppearance;
