import React, { useRef } from "react";
import {
  Stack,
  Typography,
  Box,
  Checkbox,
  TextField,
  Collapse,
} from "@mui/material";

const Step5_1 = ({ selected, onChange, otherText, onOtherTextChange }) => {
  const textFieldRef = useRef(null);

  const causes = [
    {
      id: "water",
      label: "Contact avec un liquide / Immersion",
      desc: "L'appareil est tombé dans l'eau ou a été exposé à l'humidité.",
    },
    {
      id: "battery",
      label: "Batterie gonflée",
      desc: "L'écran se soulève ou le dos est bombé.",
    },
    {
      id: "drop",
      label: "Chute accidentelle",
      desc: "L'appareil est tombé une ou plusieurs fois au sol.",
    },
    {
      id: "vibration",
      label: "Vibrations intenses (Moto/Vélo)",
      desc: "Utilisé comme GPS sur un support exposé aux vibrations.",
    },
    {
      id: "none",
      label: "Aucun de ces choix",
      desc: "Le problème est survenu sans raison apparente.",
    },
  ];

  // ✅ 스크롤 로직 (타이밍 이슈 해결을 위해 함수화)
  const scrollToTextField = () => {
    if (textFieldRef.current) {
      textFieldRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleToggle = (id) => {
    if (id === "none") {
      if (selected.includes("none")) {
        onChange([]);
      } else {
        onChange(["none"]);
        // ✅ "해당 없음" 선택 시 약간의 딜레이 후 스크롤 (Collapse 애니메이션 대응)
        setTimeout(scrollToTextField, 150);
      }
    } else {
      // ✅ 다른걸 누를 때 "none"이 있으면 무시
      if (selected.includes("none")) return;
      onChange(
        selected.includes(id)
          ? selected.filter((i) => i !== id)
          : [...selected, id],
      );
    }
  };

  return (
    <Stack spacing={3} sx={{ pb: 2 }}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          ORIGINE DU PROBLÈME
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Quelle est l'origine du problème ?
        </Typography>
      </Box>

      <Stack spacing={1.5}>
        {causes.map((item) => {
          const isNone = selected.includes("none");
          const isSelected = selected.includes(item.id);
          const isDisabled = isNone && item.id !== "none";

          return (
            <Box
              key={item.id}
              onClick={() => !isDisabled && handleToggle(item.id)}
              sx={{
                p: 2,
                borderRadius: "16px",
                border: "2px solid",
                borderColor: isSelected ? "#0071e3" : "#f5f5f7",
                display: "flex",
                alignItems: "center",
                cursor: isDisabled ? "not-allowed" : "pointer",
                bgcolor: isSelected ? "#f5fbff" : "#f5f5f7",
                opacity: isDisabled ? 0.5 : 1,
                transition: "0.2s",
              }}
            >
              <Checkbox
                checked={isSelected}
                disabled={isDisabled}
                sx={{ p: 0, mr: 2 }}
              />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>

      {/* ✅ "해당 없음" 선택 시에만 텍스트 필드 표시 */}
      <Collapse in={selected.includes("none")} onEntered={scrollToTextField}>
        <Box
          ref={textFieldRef}
          sx={{
            mt: 1,
            p: 2,
            bgcolor: "#f5fbff",
            borderRadius: "16px",
            border: "1px solid #0071e3",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#0071e3",
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Pouvez-vous nous donner plus de détails ?
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            autoFocus
            placeholder="Décrivez comment le problème est survenu..."
            value={otherText}
            onChange={(e) => onOtherTextChange(e.target.value)}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        </Box>
      </Collapse>
    </Stack>
  );
};

export default Step5_1;
