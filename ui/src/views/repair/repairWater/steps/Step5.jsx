import React, { useRef, useState } from "react";
import {
  Stack,
  Typography,
  Box,
  Checkbox,
  TextField,
  Collapse,
  Alert,
  AlertTitle,
} from "@mui/material";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";

const Step5 = ({
  selected,
  onChange,
  otherText,
  onOtherTextChange,
  batteryAck,
  setBatteryAck,
  scrollBoxRef,
}) => {
  const textFieldRef = useRef(null);
  const batteryAlertRef = useRef(null);

  const causes = [
    {
      id: "battery",
      label: "Batterie gonflée",
      desc: "L'écran se soulève ou le dos de l'appareil est bombé sous la pression.",
    },
    {
      id: "drop",
      label: "Chute accidentelle",
      desc: "L'appareil est tombé ou a subi un choc physique important récemment.",
    },
    {
      id: "vibration",
      label: "Vibrations intenses",
      desc: "Utilisation fréquente sur un support moto ou vélo (vibrations continues).",
    },
    {
      id: "none",
      label: "Aucun de ces choix",
      desc: "L'oxydation est le seul problem, aucune chute ou gonflement constaté.",
    },
  ];

  // 💡 스크롤 실행 횟수 관리 (0: 미실행, 1: 실행 완료)
  const [scrollCount, setScrollCount] = useState(0);

  const handleToggle = (id) => {
    // 1. 기존 데이터 처리 로직 (토씨 하나 안 틀리고 유지)
    if (id === "none") {
      const isNoneSelected = selected.includes("none");
      onChange(isNoneSelected ? [] : ["none"]);
      setBatteryAck(false);
    } else {
      let newSelected = selected.filter((item) => item !== "none");
      const isCurrentlySelected = newSelected.includes(id);

      if (id === "battery" && isCurrentlySelected) {
        setBatteryAck(false);
      }

      onChange(
        isCurrentlySelected
          ? newSelected.filter((i) => i !== id)
          : [...newSelected, id],
      );
    }

    // 2. 💡 스크롤 부분: scrollCount가 0일 때 딱 한 번만 수행
    if (scrollCount === 0) {
      setTimeout(() => {
        if (scrollBoxRef && scrollBoxRef.current) {
          const currentScroll = scrollBoxRef.current.scrollTop;

          // 배터리나 없음을 눌렀을 때만 상세 내용이 보이게 스크롤
          if (id === "battery" || id === "none") {
            scrollBoxRef.current.scrollTo({
              top: currentScroll + 300, // 👈 살짝만 내려서 아래 내용 유도
              behavior: "smooth",
            });
            // 💡 봉인!
            setScrollCount(1);
          }
        }
      }, 150); // Collapse 애니메이션 시간을 고려해 살짝 넉넉히 줌
    }
  };
  return (
    <Stack spacing={3} sx={{ pb: 5 }}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          AUTRES DOMMAGES
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          État général de l'appareil
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Signalez toute anomalie supplémentaire pour un diagnostic complet.
        </Typography>
      </Box>

      <Stack spacing={1.5}>
        {causes.map((item) => {
          const isSelected = selected.includes(item.id);
          const isDisabled = selected.includes("none") && item.id !== "none";
          const isBattery = item.id === "battery";

          return (
            <Box
              key={item.id}
              onClick={() => !isDisabled && handleToggle(item.id)}
              sx={{
                p: 2,
                borderRadius: "16px",
                border: "2px solid",
                cursor: isDisabled ? "not-allowed" : "pointer",
                borderColor: isSelected
                  ? isBattery
                    ? "#ff3b30"
                    : "#0071e3"
                  : "#f5f5f7",
                bgcolor: isSelected
                  ? isBattery
                    ? "#fff5f5"
                    : "#f5fbff"
                  : "#f5f5f7",
                display: "flex",
                alignItems: "flex-start",
                opacity: isDisabled ? 0.5 : 1,
                transition: "0.2s",
              }}
            >
              <Checkbox
                checked={isSelected}
                disabled={isDisabled}
                sx={{
                  p: 0,
                  mr: 2,
                  mt: 0.3,
                  color: isBattery ? "#ff3b30" : "default",
                  "&.Mui-checked": {
                    color: isBattery ? "#ff3b30" : "#0071e3",
                  },
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mb: 0.5,
                    color: isSelected && isBattery ? "#ff3b30" : "#1d1d1f",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.4 }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>

      <Collapse in={selected.includes("battery")}>
        <Box ref={batteryAlertRef}>
          <Alert
            severity="error"
            variant="outlined"
            icon={
              <BatteryAlertIcon sx={{ fontSize: "2.5rem", color: "#ff3b30" }} />
            }
            sx={{
              borderRadius: "16px",
              bgcolor: "#fff5f5",
              mt: 1,
              py: 2,
              px: 2,
              "& .MuiAlert-icon": {
                display: "flex",
                alignItems: "flex-start",
                pt: 0.5,
                mr: 2,
              },
              "& .MuiAlert-message": { padding: 0, width: "100%" },
            }}
          >
            <AlertTitle sx={{ fontWeight: 900, fontSize: "1rem" }}>
              Alerte de sécurité : Batterie déformée
            </AlertTitle>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.6, fontWeight: 600, whiteSpace: "pre-line" }}
            >
              {"Éteignez l'appareil immédiatement. \n" +
                "Ne le mettez surtout pas en charge. \n" +
                "Placez-le dans un endroit sec et frais, loin de la chaleur. \n" +
                "Ne pressez pas sur l'écran et retirez la coque si possible. \n" +
                "Pour le transport, utilisez un récipient métallique épais (ex: une casserole)."}
            </Typography>
          </Alert>

          <Box
            onClick={() => setBatteryAck(!batteryAck)}
            sx={{
              mt: 2,
              p: 2,
              borderRadius: "12px",
              border: "2px solid",
              cursor: "pointer",
              borderColor: batteryAck ? "#ff3b30" : "#d2d2d7",
              bgcolor: batteryAck ? "#fff5f5" : "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={batteryAck}
              color="error"
              sx={{ p: 0, mr: 1.5 }}
            />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 800,
                color: batteryAck ? "#ff3b30" : "#1d1d1f",
                fontSize: "0.85rem",
              }}
            >
              J'ai lu les consignes de sécurité et je comprends les risques.
            </Typography>
          </Box>
        </Box>
      </Collapse>

      <Collapse in={selected.includes("none")}>
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
              whiteSpace: "pre-line",
            }}
          >
            {"Autres dommages constatés \n(Sans allumer l'écran) :"}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Ex : Bouton Volume/Power bloqué, tiroir SIM coincé, vis manquantes..."
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

export default Step5;
