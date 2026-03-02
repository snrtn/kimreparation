import React, { useState } from "react";
import { Stack, Typography, Box, Checkbox, Divider } from "@mui/material";
import PhonelinkEraseIcon from "@mui/icons-material/PhonelinkErase";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import CameraIcon from "@mui/icons-material/Camera";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CropFreeIcon from "@mui/icons-material/CropFree";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import WaterIcon from "@mui/icons-material/Water";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

const Step4 = ({
  frameIssues,
  setFrameIssues,
  internalDamageAck,
  setInternalDamageAck,
  scrollBoxRef,
}) => {
  const options = [
    {
      id: "screen",
      label: "Écran cassé",
      desc: "Fissures, taches ou affichage noir.",
      icon: <PhonelinkEraseIcon />,
    },
    {
      id: "bent",
      label: "Châssis / Cadre",
      desc: "Le châssis est tordu, enfoncé ou déformé.",
      icon: <CropFreeIcon />,
    },
    {
      id: "back",
      label: "Vitre arrière",
      desc: "Le dos est brisé ou présente des éclats.",
      icon: <StayCurrentPortraitIcon />,
    },
    {
      id: "camera",
      label: "Vitre caméra",
      desc: "L'objectif photo est fissuré ou rayé.",
      icon: <CameraIcon />,
    },
    {
      id: "fog",
      label: "Buée caméra",
      desc: "Humidité ou gouttes visibles dans l'objectif.",
      icon: <WaterIcon />,
    },
    {
      id: "port",
      label: "Port de charge",
      desc: "Humidité ou résidus dans le connecteur.",
      icon: <ElectricalServicesIcon />,
    },
  ];

  const [scrollCount, setScrollCount] = useState(0);

  /* ... options 배열 동일 ... */

  const handleToggle = (id) => {
    // 1. 💡 기존 데이터 처리 로직 (토씨 하나 안 틀리고 그대로 유지)
    if (id === "none") {
      setFrameIssues(["none"]);
    } else {
      let newIssues = frameIssues.filter((item) => item !== "none");
      const updatedIssues = newIssues.includes(id)
        ? newIssues.filter((i) => i !== id)
        : [...newIssues, id];

      setFrameIssues(updatedIssues);
    }

    // 2. 💡 스크롤 부분: scrollCount가 0일 때 딱 한 번만 수행
    if (scrollCount === 0) {
      setTimeout(() => {
        if (scrollBoxRef && scrollBoxRef.current) {
          const currentScroll = scrollBoxRef.current.scrollTop;
          scrollBoxRef.current.scrollTo({
            top: currentScroll + 200, // 👈 200px만 살짝
            behavior: "smooth",
          });
          // 💡 실행 직후 1로 바꿔서 다음 클릭부터는 스크롤 로직 원천 차단
          setScrollCount(1);
        }
      }, 100);
    }
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          ANALYSE DE L'ÉTAT EXTÉRIEUR
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Dommages visibles à l'œil nu
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Cochez ce que vous voyez sur votre appareil pour nous aider à préparer
          la réparation.
        </Typography>
      </Box>

      {/* 6개 그리드 옵션 */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {options.map((opt) => {
          const isSelected = frameIssues.includes(opt.id);
          return (
            <Box
              key={opt.id}
              onClick={() => handleToggle(opt.id)}
              sx={{
                minHeight: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "24px",
                cursor: "pointer",
                transition: "0.2s",
                bgcolor: isSelected ? "#0071e310" : "#f5f5f7",
                color: isSelected ? "#0071e3" : "#1d1d1f",
                p: 2,
                textAlign: "center",
                border: isSelected
                  ? "2px solid #0071e3"
                  : "2px solid transparent",
              }}
            >
              <Box sx={{ "& svg": { fontSize: "2.1rem", mb: 0.5 } }}>
                {opt.icon}
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", mb: 0.5 }}>
                {opt.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  color: isSelected ? "#0071e3" : "#86868b",
                  lineHeight: 1.2,
                }}
              >
                {opt.desc}
              </Typography>
            </Box>
          );
        })}

        <Box
          onClick={() => handleToggle("none")}
          sx={{
            gridColumn: "span 2",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "0.2s",
            bgcolor: frameIssues.includes("none") ? "#34c75915" : "#f5f5f7",
            color: frameIssues.includes("none") ? "#34c759" : "#86868b",
            border: frameIssues.includes("none")
              ? "2px solid #34c759"
              : "2px solid transparent",
            gap: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <CheckCircleIcon />
            <Typography sx={{ fontWeight: 800, fontSize: "1rem" }}>
              Aucun dégât apparent
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "0.72rem", fontWeight: 500, opacity: 0.8 }}
          >
            (Uniquement des traces d'usure normale ou micro-rayures)
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: -2,
          mb: -2,
          animation: "blinkAndBounce 2s infinite ease-in-out",
          "@keyframes blinkAndBounce": {
            "0%, 100%": { opacity: 0.2, transform: "translateY(0)" },
            "50%": { opacity: 0.6, transform: "translateY(5px)" },
          },
        }}
      >
        <KeyboardDoubleArrowDownIcon
          sx={{ color: "#000000", fontSize: "1.8rem" }}
        />
      </Box>

      <Divider />

      {/* 법적 방어 및 기분 나쁘지 않은 안내 문구 */}
      <Stack spacing={2}>
        <Box
          sx={{
            p: 2,
            bgcolor: "#f5f5f7",
            borderRadius: "14px",
            display: "flex",
            gap: 1.5,
          }}
        >
          <HealingOutlinedIcon
            sx={{ color: "#86868b", fontSize: "1.4rem", mt: 0.2 }}
          />
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "#1d1d1f",
                fontWeight: 800,
                display: "block",
                mb: 0.5,
              }}
            >
              Note sur l'état de l'appareil
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#424245", lineHeight: 1.5 }}
            >
              Le nettoyage d'un appareil oxydé est une étape délicate. <br />
              En raison de la{" "}
              <b>fragilité des circuits après un contact liquide</b>, l'état de
              l'appareil peut varier pendant l'intervention.
              <br /> Nous faisons le nécessaire pour nettoyer et stabiliser
              chaque composant avec prudence.
            </Typography>
          </Box>
        </Box>

        <Box
          onClick={() => setInternalDamageAck(!internalDamageAck)}
          sx={{
            p: 2,
            borderRadius: "12px",
            border: "2px solid",
            cursor: "pointer",
            borderColor: internalDamageAck ? "#0071e3" : "#d2d2d7",
            bgcolor: internalDamageAck ? "#f5fbff" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox checked={internalDamageAck} sx={{ p: 0, mr: 1.5 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              color: internalDamageAck ? "#0071e3" : "#1d1d1f",
              fontSize: "0.82rem",
              lineHeight: 1.4,
            }}
          >
            Je confirme l'état de mon appareil et je comprends que l'oxydation
            peut rendre son fonctionnement instable.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Step4;
