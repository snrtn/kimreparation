import React, { useRef, useEffect } from "react";
import {
  Stack,
  Typography,
  Box,
  Checkbox,
  TextField,
  Collapse,
} from "@mui/material";

const Step3_2 = ({ selected, onChange, otherText, onOtherTextChange }) => {
  const textFieldRef = useRef(null);

  // ✅ 렌더링 후 타이밍 이슈 해결을 위한 스크롤 함수
  const scrollToOther = () => {
    if (textFieldRef.current) {
      textFieldRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // center보다 nearest가 모바일에서 더 안정적입니다
      });
    }
  };

  const issues = [
    {
      id: "lines",
      label: "Lignes (Verticales ou Horizontales)",
      desc: "Des traits colorés ou blancs apparaissent.",
    },
    {
      id: "spots",
      label: "Taches noires (Pixels morts)",
      desc: "Des zones sombres ou taches d'encre.",
    },
    {
      id: "ghost",
      label: "Tactile capricieux (Ghost Touch)",
      desc: "L'écran réagit tout seul ou ne répond plus.",
    },
    {
      id: "burn",
      label: "Marquage ou Image fantôme",
      desc: "Anciennes applications visibles en fond.",
    },
    {
      id: "flicker",
      label: "Clignotement de l'image",
      desc: "L'image tremble ou saute.",
    },
    {
      id: "other",
      label: "Aucun de ces choix / Autre symptôme",
      desc: "Mon problème n'est pas dans la liste ci-dessus.",
    },
  ];

  const handleToggle = (id) => {
    if (id === "other") {
      if (selected.includes("other")) {
        onChange([]);
      } else {
        onChange(["other"]);
        // ✅ 상태 변경 직후가 아니라, 애니메이션이 시작될 때쯤 스크롤 예약
        setTimeout(scrollToOther, 150);
      }
    } else {
      if (selected.includes("other")) return;
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
          DÉTAILS DES SYMPTÔMES
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Que remarquez-vous d'autre ?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Plusieurs choix possibles.
        </Typography>
      </Box>

      <Stack spacing={1.5}>
        {issues.map((issue) => {
          const isOtherSelected = selected.includes("other");
          const isCurrentSelected = selected.includes(issue.id);
          const isDisabled = isOtherSelected && issue.id !== "other";

          return (
            <Box
              key={issue.id}
              onClick={() => !isDisabled && handleToggle(issue.id)}
              sx={{
                p: 2,
                borderRadius: "16px",
                border: "2px solid",
                borderColor: isCurrentSelected ? "#0071e3" : "#f5f5f7",
                display: "flex",
                alignItems: "center",
                cursor: isDisabled ? "not-allowed" : "pointer",
                bgcolor: isCurrentSelected ? "#f5fbff" : "#f5f5f7",
                opacity: isDisabled ? 0.5 : 1,
                transition: "0.2s",
              }}
            >
              <Checkbox
                checked={isCurrentSelected}
                disabled={isDisabled}
                sx={{ p: 0, mr: 2 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: isDisabled ? "#86868b" : "#1d1d1f",
                  }}
                >
                  {issue.label}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  {issue.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>

      {/* ✅ Collapse 컴포넌트에 직접 스크롤 로직을 연결할 수도 있습니다 */}
      <Collapse
        in={selected.includes("other")}
        timeout="auto"
        onEntered={scrollToOther} // 👈 펼쳐지기가 끝난 직후에 스크롤! (가장 정확함)
      >
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
              fontWeight: 700,
              fontSize: "0.85rem",
              mb: 1,
              color: "#0071e3",
            }}
          >
            Dites-nous en plus sur le problème :
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            autoFocus
            placeholder="Décrivez les symptômes ici..."
            value={otherText}
            onChange={(e) => onOtherTextChange(e.target.value)}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
            }}
          />
        </Box>
      </Collapse>
    </Stack>
  );
};

export default Step3_2;
