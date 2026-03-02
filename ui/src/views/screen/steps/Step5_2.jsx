import React from "react";
import { Stack, Typography, Box, Alert, AlertTitle } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";

const Step5_2 = ({ selectedCauses }) => {
  const showWater = selectedCauses.includes("water");
  const showBattery = selectedCauses.includes("battery");

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#d32f2f", display: "block", mb: 0.5 }}
        >
          ATTENTION CONSEILS
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Mesures de sécurité importantes
        </Typography>
      </Box>

      {/* 침수 경고 */}
      {showWater && (
        <Alert
          severity="warning"
          variant="outlined" // 테두리 강조형
          icon={<WaterDropIcon sx={{ fontSize: "2rem" }} />} // 아이콘 크기 고정 및 자름 방지
          sx={{
            borderRadius: "16px",
            bgcolor: "#fffbf2", // 아주 연한 배경색 추가
            "& .MuiAlert-icon": { alignItems: "center", mr: 2 }, // 아이콘 수직 정렬 및 간격
            "& .MuiAlert-message": { width: "100%" },
          }}
        >
          <AlertTitle sx={{ fontWeight: 800, fontSize: "1rem" }}>
            Appareil oxydé (Liquide)
          </AlertTitle>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            N'essayez <b>jamais</b> de charger l'appareil. Éteignez-le
            immédiatement pour éviter tout court-circuit. Le riz n'est pas une
            solution efficace.
          </Typography>
        </Alert>
      )}

      {/* 배터리 경고 */}
      {showBattery && (
        <Alert
          severity="error"
          variant="outlined"
          icon={<BatteryAlertIcon sx={{ fontSize: "2rem" }} />}
          sx={{
            borderRadius: "16px",
            bgcolor: "#fff5f5",
            "& .MuiAlert-icon": { alignItems: "center", mr: 2 },
            "& .MuiAlert-message": { width: "100%" },
          }}
        >
          <AlertTitle sx={{ fontWeight: 800, fontSize: "1rem" }}>
            Batterie instable
          </AlertTitle>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            Une batterie gonflée est <b>dangereuse</b>. Ne pressez pas l'écran
            et tenez l'appareil éloigné de toute source de chaleur intense.
          </Typography>
        </Alert>
      )}

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center", mt: 2, fontWeight: 600 }}
      >
        Veuillez confirmer avoir lu ces avertissements pour continuer.
      </Typography>
    </Stack>
  );
};

export default Step5_2;
