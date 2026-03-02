import React from "react";
import { Stack, Typography, Box, Checkbox } from "@mui/material";

const Step4 = ({ selected, onChange }) => {
  const options = [
    {
      id: "dent",
      label: "Chocs sur le châssis (Frame)",
      desc: "Le cadre de l'écran ou les bords présentent des impacts.",
    },
    {
      id: "bent",
      label: "Châssis tordu / Courbé",
      desc: "Le téléphone n'est plus droit ou est plié.",
    },
    {
      id: "back_crack",
      label: "Vitre arrière cassée",
      desc: "Le dos de l'appareil est fissuré ou brisé.",
    },
    {
      id: "camera_crack",
      label: "Vitre caméra cassée",
      desc: "La lentille ou le verre de protection de la caméra est brisé.",
    },
    {
      id: "perfect",
      label: "Bon état (Rayures d'usure seulement)",
      desc: "Pas de casse, juste des traces d'utilisation normale.",
    },
  ];

  const handleToggle = (id) => {
    if (id === "perfect") {
      // ✅ "멀쩡함" 선택 시: 나머지는 다 버리고 "perfect"만 남김
      if (selected.includes("perfect")) {
        onChange([]);
      } else {
        onChange(["perfect"]);
      }
    } else {
      // ✅ 다른 증상 선택 시: "멀쩡함"이 이미 선택되어 있으면 무시 (또는 해제 후 선택)
      if (selected.includes("perfect")) return;

      onChange(
        selected.includes(id)
          ? selected.filter((i) => i !== id)
          : [...selected, id],
      );
    }
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          ÉTAT EXTÉRIEUR
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Quel est l'état du châssis et du dos ?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Plusieurs choix possibles.
        </Typography>
      </Box>

      <Stack spacing={1.5}>
        {options.map((opt) => {
          const isPerfectSelected = selected.includes("perfect");
          const isCurrentSelected = selected.includes(opt.id);
          const isDisabled = isPerfectSelected && opt.id !== "perfect"; // 멀쩡함 선택 시 나머지 비활성화

          return (
            <Box
              key={opt.id}
              onClick={() => !isDisabled && handleToggle(opt.id)}
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
                  {opt.label}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  {opt.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Step4;
