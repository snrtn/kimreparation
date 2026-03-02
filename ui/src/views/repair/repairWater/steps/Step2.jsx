import React from "react";
import {
  Stack,
  Typography,
  Box,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity"; // Eau douce
import WavesIcon from "@mui/icons-material/Waves"; // Eau de mer
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"; // Boisson
import PoolIcon from "@mui/icons-material/Pool"; // Piscine

const Step2 = ({ liquidType, setLiquidType }) => {
  const options = [
    {
      id: "fresh",
      label: "Eau douce",
      desc: "Robinet, Pluie",
      icon: <OpacityIcon />,
      color: "#0071e3",
    },
    {
      id: "salt",
      label: "Eau de mer",
      desc: "Plage, Océan",
      icon: <WavesIcon />,
      color: "#ff3b30",
    },
    {
      id: "sugar",
      label: "Boisson",
      desc: "Café, Soda, Jus",
      icon: <LocalDrinkIcon />,
      color: "#ff9500",
    },
    {
      id: "pool",
      label: "Piscine",
      desc: "Eau chlorée",
      icon: <PoolIcon />,
      color: "#05a660",
    },
  ];

  /* ... 상단 로직 동일 ... */

  const getAdvice = () => {
    switch (liquidType) {
      case "salt":
        return {
          title: "🚨 Action urgente : Eau de mer",
          desc:
            "Le sel corrode les circuits très rapidement. \n" +
            "Ne secouez pas l'appareil pour éviter de propager l'eau à l'intérieur. \n" +
            "Essuyez l'extérieur avec un chiffon sec. \n" +
            "Retirez la coque et le tiroir SIM pour laisser l'humidité s'échapper. \n" +
            "Gardez-le éteint et ne tentez jamais de le charger.",
          severity: "error",
        };
      case "pool":
        return {
          title: "🏊‍♂️ Mesure de sécurité : Chlore",
          desc:
            "Le chlore est un agent chimique agressif pour les composants. \n" +
            "Retirez immédiatement la coque et les accessoires. \n" +
            "Ouvrez le tiroir SIM pour faciliter la ventilation interne. \n" +
            "Posez l'appareil à plat dans un endroit sec et aéré. \n" +
            "Ne tentez pas de le rincer, cela pourrait aggraver la situation.",
          severity: "error",
        };
      case "sugar":
        return {
          title: "🥤 Conseil pratique : Liquide sucré",
          desc:
            "Le sucre peut cristalliser et bloquer les éléments internes. \n" +
            "Essuyez simplement les résidus collants à l'extérieur. \n" +
            "Retirez la coque et laissez le tiroir SIM ouvert. \n" +
            "Ne forcez pas sur les boutons s'ils deviennent durs. \n" +
            "N'utilisez jamais de sèche-cheveux (la chaleur est fatale).",
          severity: "warning",
        };
      case "fresh":
        return {
          title: "💧 Bons réflexes : Eau douce",
          desc:
            "L'humidité reste souvent piégée dans les zones invisibles. \n" +
            "Retirez la coque et le tiroir SIM pour une meilleure aération. \n" +
            "Laissez l'appareil sécher naturellement à l'air libre. \n" +
            "Évitez le sac de riz car la poussière d'amidon peut boucher les ports. \n" +
            "Maintenez l'appareil hors tension par sécurité.",
          severity: "info",
        };
      default:
        return null;
    }
  };

  /* ... 하단 디자인 동일 ... */

  const advice = getAdvice();

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          ANALYSE DE L'INCIDENT
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Quel est le type de liquide ?
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          La composition chimique du liquide détermine la vitesse de corrosion.
        </Typography>
      </Box>

      {/* 액체 선택 박스 */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {options.map((opt) => {
          const isSelected = liquidType === opt.id;
          return (
            <Box
              key={opt.id}
              onClick={() => setLiquidType(opt.id)}
              sx={{
                height: "130px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "0.3s ease",
                bgcolor: isSelected ? `${opt.color}12` : "#f5f5f7",
                color: isSelected ? opt.color : "#86868b",
                border: isSelected
                  ? `2px solid ${opt.color}`
                  : "2px solid transparent",
                "&:hover": {
                  bgcolor: isSelected ? `${opt.color}15` : "#eeeef0",
                },
              }}
            >
              <Box sx={{ "& svg": { fontSize: "2.3rem", display: "block" } }}>
                {opt.icon}
              </Box>
              <Typography
                sx={{ mt: 1.5, fontWeight: 800, fontSize: "0.95rem" }}
              >
                {opt.label}
              </Typography>
              <Typography sx={{ fontSize: "0.75rem", opacity: 0.8, mt: 0.5 }}>
                {opt.desc}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* 💡 진단적 조언 섹션 */}
      <Collapse in={!!liquidType}>
        {advice && (
          <Alert
            severity={advice.severity}
            icon={false}
            sx={{
              borderRadius: "16px",
              py: 2.2,
              px: 2.5,
              border: "1px solid",
              borderColor: "inherit",
              "& .MuiAlert-message": { width: "100%", p: 0 },
            }}
          >
            <AlertTitle sx={{ fontWeight: 900, fontSize: "1.05rem", mb: 0.8 }}>
              {advice.title}
            </AlertTitle>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                fontWeight: 600,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              {advice.desc}
            </Typography>
          </Alert>
        )}
      </Collapse>
    </Stack>
  );
};

export default Step2;
