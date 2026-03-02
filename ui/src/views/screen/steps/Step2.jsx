/* eslint-disable no-unused-vars */
import React from "react";
import {
  Stack,
  Typography,
  Box,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const Step2 = ({
  category,
  productTitle,
  isBackupChecked,
  onBackupToggle,
  screenWork,
  setScreenWork,
}) => {
  const lowerCat = category?.toLowerCase() || "";
  const isLaptop =
    lowerCat.includes("book") ||
    lowerCat.includes("laptop") ||
    lowerCat.includes("mac");

  const handleSelect = (status) => {
    setScreenWork(status);
    if (isBackupChecked) onBackupToggle();
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          VÉRIFICATION DE SÉCURITÉ
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Est-ce que l'image s'affiche encore ?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          C'est important pour vous aider à protéger vos précieuses données.
        </Typography>
      </Box>

      {/* 버튼 섹션 */}
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          variant={screenWork === true ? "contained" : "outlined"}
          onClick={() => handleSelect(true)}
          sx={{
            borderRadius: "12px",
            py: 1.5,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Oui, je vois l'image
        </Button>
        <Button
          fullWidth
          variant={screenWork === false ? "contained" : "outlined"}
          onClick={() => handleSelect(false)}
          sx={{
            borderRadius: "12px",
            py: 1.5,
            fontWeight: 700,
            textTransform: "none",
            color: screenWork === false ? "#fff" : "#d32f2f",
            borderColor: "#d32f2f",
            bgcolor: screenWork === false ? "#d32f2f" : "transparent",
            "&:hover": {
              borderColor: "#b71c1c",
              bgcolor:
                screenWork === false ? "#b71c1c" : "rgba(211, 47, 47, 0.04)",
            },
          }}
        >
          Non, l'écran reste noir
        </Button>
      </Stack>

      <Divider />

      {/* 상황 1: 화면 나옴 (터치 안 될 때의 조치) */}
      {screenWork === true && (
        <Stack spacing={2}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0071e3" }}
          >
            ✨ Actions recommandées (Écran visible) :
          </Typography>
          <Box
            sx={{
              p: 2,
              bgcolor: "#f5fbff",
              borderRadius: "16px",
              border: "1px solid #c2e0ff",
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="start">
                <MouseIcon
                  sx={{ color: "#0071e3", fontSize: "1.2rem", mt: 0.2 }}
                />
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#1d1d1f",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Utilisez une souris</strong> : Si le tactile est mort,
                  branchez une souris USB (via adaptateur) pour déverrouiller et
                  sauvegarder.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="start">
                <ReportProblemIcon
                  sx={{ color: "#ff9500", fontSize: "1.2rem", mt: 0.2 }}
                />
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#1d1d1f",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Ne redémarrez pas</strong> : Le FaceID/TouchID se
                  désactive au redémarrage. Gardez l'appareil allumé pour ne pas
                  perdre l'accès.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}

      {/* 상황 2: 화면 안 나옴 (이미 늦었을 때의 조치) */}
      {screenWork === false && (
        <Stack spacing={2}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#f5222d" }}
          >
            🛡️ Solutions de secours (Écran noir) :
          </Typography>
          <Box
            sx={{
              p: 2,
              bgcolor: "#fff1f0",
              borderRadius: "16px",
              border: "1px solid #ffa39e",
            }}
          >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="start">
                <CloudDoneIcon
                  sx={{ color: "#f5222d", fontSize: "1.2rem", mt: 0.2 }}
                />
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#820014",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Vérifiez le Cloud</strong> : Connectez-vous sur
                  icloud.com ou google.com/photos depuis un autre PC pour
                  vérifier vos dernières données synchro.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="start">
                <SettingsInputHdmiIcon
                  sx={{ color: "#f5222d", fontSize: "1.2rem", mt: 0.2 }}
                />
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#820014",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Sortie Vidéo</strong> : Pour les Mac/Laptops, branchez
                  un écran externe via HDMI. L'image pourrait s'y afficher pour
                  sauver vos fichiers.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}

      {/* 최종 확인 섹션 (원본 유지) */}
      {screenWork !== null && (
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
            <ReportProblemIcon sx={{ color: "#86868b", fontSize: "1.2rem" }} />
            <Typography
              variant="caption"
              sx={{ color: "#424245", lineHeight: 1.4 }}
            >
              Par sécurité, l'atelier ne peut être tenu responsable des données.
              Merci de votre compréhension.
            </Typography>
          </Box>

          <Box
            onClick={onBackupToggle}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              border: "2px solid",
              borderColor: isBackupChecked ? "#0071e3" : "#d2d2d7",
              bgcolor: isBackupChecked ? "#f5fbff" : "white",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Checkbox checked={isBackupChecked} sx={{ p: 0, mr: 2 }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 800,
                color: isBackupChecked ? "#0071e3" : "#1d1d1f",
              }}
            >
              {screenWork
                ? "J'ai bien compris les conseils de sauvegarde."
                : "Je comprends que mes données sont difficilement accessibles."}
            </Typography>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Step2;
