import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // 💡 체크 아이콘 추가

const StepConnection = ({ selected = [], onUpdate }) => {
  const isUnknown = selected.includes("unknown"); // 확인 불가 선택 여부

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
                justifyContent: "space-between", // 💡 텍스트는 왼쪽, 아이콘은 오른쪽 끝
                textAlign: "left",
                // 💡 선택 시 2px 두꺼운 테두리와 파란색 배경
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
              {/* 💡 선택했을 때만 체크 표시 등장 */}
              {isSelected && <CheckCircleIcon sx={{ color: "#0071e3" }} />}
            </Button>
          );
        })}
      </Stack>

      {/* 🔵 "확인 불가"를 눌렀을 때만 나오는 부드러운 안내 (빨간 경고 완전 삭제) */}
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
            Rassurez-vous : le Wi-Fi et le Bluetooth seront contrôlés par nos
            soins lors du diagnostic en atelier.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepConnection;
