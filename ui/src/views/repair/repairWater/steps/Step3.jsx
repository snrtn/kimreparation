import React, { useRef, useState } from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const Step3 = ({
  waterTime,
  setWaterTime,
  repairGoal,
  setRepairGoal,
  scrollBoxRef,
}) => {
  const goalSectionRef = useRef(null);
  // 💡 스크롤 실행 횟수 관리 (0: 미실행, 1: 실행 완료)
  const [scrollCount, setScrollCount] = useState(0);

  const handleTimeSelect = (id) => {
    setWaterTime(id);
    if (id === "1week" && repairGoal === "both") {
      setRepairGoal("");
    }

    // 💡 딱 한 번만! 처음 시간을 선택했을 때만 스크롤 수행
    if (scrollCount === 0) {
      setTimeout(() => {
        if (scrollBoxRef.current && goalSectionRef.current) {
          const yOffset = -100;
          const element = goalSectionRef.current;
          const targetY = element.offsetTop + yOffset;

          scrollBoxRef.current.scrollTo({
            top: targetY,
            behavior: "smooth",
          });
          // 💡 스크롤 봉인
          setScrollCount(1);
        }
      }, 100);
    }
  };

  const times = [
    {
      id: "24h",
      label: "Moins de 24 heures",
      desc: "Moment idéal pour un nettoyage préventif. \nL'objectif est d'arrêter l'oxydation avant qu'elle ne touche les circuits.",
    },
    {
      id: "3days",
      label: "Entre 1 et 3 jours",
      desc: "L'humidité est installée. \nUn démontage et un contrôle des circuits sont nécessaires pour limiter les dégâts.",
    },
    {
      id: "1week",
      label: "Plus d'une semaine",
      // 💡 선택 여부에 따라 텍스트가 바뀝니다 (산화의 육안 확인 강조)
      desc:
        waterTime === "1week"
          ? "L'oxydation est désormais nettement visible à l'œil nu sur les composants. \nLe nettoyage sert à vérifier si les dommages sont définitifs."
          : "Délai critique, l'oxydation est probablement avancée. \nLe nettoyage permet d'évaluer l'état réel des composants internes.",
    },
  ];

  const goals = [
    {
      id: "data",
      label: "Récupérer mes données uniquement",
      desc: "Priorité à vos fichiers. \nLe but est de stabiliser la carte mère pour extraire vos informations.",
    },
    {
      id: "device",
      label: "Réparer l'appareil uniquement",
      desc: "Remise en état pour une utilisation normale. \nNettoyage et remplacement des pièces défectueuses sans garantie de données.",
    },
    {
      id: "both",
      label: "Données + Appareil",
      desc: "Nettoyage complet pour sauver vos fichiers et le téléphone. \nOption non disponible pour un incident de plus d'une semaine.",
    },
  ];

  return (
    <Stack spacing={4}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          ANALYSE DU DÉLAI ET DES OBJECTIFS
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Détails de l'incident
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Ces informations nous aident à préparer le nettoyage et le contrôle de
          l'appareil.
        </Typography>
      </Box>

      {/* 1. Moment de l'incident */}
      <Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
          <AccessTimeIcon sx={{ fontSize: "1.2rem", color: "#1d1d1f" }} />
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1d1d1f" }}
          >
            Quand l'incident est-il survenu ?
          </Typography>
        </Stack>
        <Stack spacing={1.5}>
          {times.map((t) => (
            <Box
              key={t.id}
              onClick={() => handleTimeSelect(t.id)} //
              sx={{
                p: 2,
                borderRadius: "14px",
                border: "2px solid",
                cursor: "pointer",
                transition: "0.2s",
                borderColor: waterTime === t.id ? "#0071e3" : "#f5f5f7",
                bgcolor: waterTime === t.id ? "#f5fbff" : "#f5f5f7",
                "&:hover": {
                  borderColor: waterTime === t.id ? "#0071e3" : "#d2d2d7",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  color: waterTime === t.id ? "#0071e3" : "#1d1d1f",
                  fontSize: "0.95rem",
                }}
              >
                {t.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  color: "#424245",
                  mt: 0.5,
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {t.desc}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* 2. Objectif de réparation */}
      <Box ref={goalSectionRef}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
          <FactCheckIcon sx={{ fontSize: "1.2rem", color: "#1d1d1f" }} />
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1d1d1f" }}
          >
            Quel est votre objectif ?
          </Typography>
        </Stack>
        <Stack spacing={1.5}>
          {goals.map((g) => {
            const isDisabled = g.id === "both" && waterTime === "1week";

            return (
              <Box
                key={g.id}
                onClick={() => !isDisabled && setRepairGoal(g.id)}
                sx={{
                  p: 2,
                  borderRadius: "14px",
                  border: "2px solid",
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  transition: "0.2s",
                  borderColor: repairGoal === g.id ? "#0071e3" : "#f5f5f7",
                  bgcolor: repairGoal === g.id ? "#f5fbff" : "#f5f5f7",
                  opacity: isDisabled ? 0.4 : 1,
                  "&:hover": {
                    borderColor:
                      !isDisabled &&
                      (repairGoal === g.id ? "#0071e3" : "#d2d2d7"),
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: repairGoal === g.id ? "#0071e3" : "#1d1d1f",
                    fontSize: "0.95rem",
                  }}
                >
                  {g.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "#424245",
                    mt: 0.5,
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}
                >
                  {isDisabled
                    ? "Indisponible : l'oxydation est trop avancée pour garantir une double restauration."
                    : g.desc}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Step3;
