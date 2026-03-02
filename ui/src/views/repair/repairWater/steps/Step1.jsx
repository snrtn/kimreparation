import React from "react";
import {
  Stack,
  Typography,
  Box,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Step1 = ({
  isBackupChecked,
  onBackupToggle,
  screenWork,
  setScreenWork,
  scrollBoxRef, // 💡 부모에게 전달받은 프롭스 추가
}) => {
  const handleSelect = (status) => {
    setScreenWork(status);
    if (isBackupChecked) onBackupToggle();

    // 💡 버튼 클릭 시 부모의 스크롤 박스를 맨 아래로 스크롤
    setTimeout(() => {
      if (scrollBoxRef && scrollBoxRef.current) {
        scrollBoxRef.current.scrollTo({
          top: scrollBoxRef.current.scrollHeight, // 👈 박스 내부의 맨 바닥 높이로 이동
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          CONSEILS DE SÉCURITÉ
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Vérification de l'alimentation
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Pour mieux protéger vos composants, précisez-nous l'état actuel de
          votre appareil.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          variant={screenWork === true ? "contained" : "outlined"}
          onClick={() => handleSelect(true)}
          startIcon={
            <BoltIcon
              sx={{ color: screenWork === true ? "#fff" : "#0071e3" }}
            />
          }
          sx={{
            borderRadius: "14px",
            py: 1.8,
            fontWeight: 800,
            textTransform: "none",
            borderColor: screenWork === true ? "transparent" : "#d2d2d7",
            bgcolor: screenWork === true ? "#0071e3" : "white",
            color: screenWork === true ? "#fff" : "#1d1d1f",
            boxShadow:
              screenWork === true ? "0 4px 12px rgba(0,113,227,0.2)" : "none",
            transition: "0.2s",
            "&:hover": {
              borderColor: "#0071e3",
              bgcolor: screenWork === true ? "#005bb5" : "#f5fbff",
            },
          }}
        >
          Il s'allume
        </Button>

        <Button
          fullWidth
          variant={screenWork === false ? "contained" : "outlined"}
          onClick={() => handleSelect(false)}
          startIcon={
            <PowerSettingsNewIcon
              sx={{ color: screenWork === false ? "#fff" : "#28a745" }}
            />
          }
          sx={{
            borderRadius: "14px",
            py: 1.8,
            fontWeight: 800,
            textTransform: "none",
            color: screenWork === false ? "#fff" : "#1d1d1f",
            borderColor: screenWork === false ? "transparent" : "#d2d2d7",
            bgcolor: screenWork === false ? "#28a745" : "white",
            boxShadow:
              screenWork === false ? "0 4px 12px rgba(40,167,69,0.2)" : "none",
            transition: "0.2s",
            "&:hover": {
              borderColor: "#28a745",
              bgcolor: screenWork === false ? "#218838" : "#f6ffed",
            },
          }}
        >
          Reste éteint
        </Button>
      </Stack>

      <Divider />

      {screenWork === true && (
        <Box
          sx={{
            p: 2,
            bgcolor: "#fffaf0",
            borderRadius: "16px",
            border: "1px solid #ffe58f",
          }}
        >
          <Stack direction="row" spacing={2}>
            <HealthAndSafetyOutlinedIcon
              sx={{ color: "#fa8c16", fontSize: "1.8rem" }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "#d46b08",
                  mb: 0.5,
                }}
              >
                Précautions immédiates
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  color: "#d46b08",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {"L'appareil est sous tension. \n" +
                  "Veuillez l'éteindre immédiatement pour éviter tout court-circuit. \n" +
                  "Retirez la coque et le tiroir SIM pour l'aération. \n" +
                  "Ne tentez surtout pas de le mettre en charge."}
              </Typography>
            </Box>
          </Stack>
        </Box>
      )}

      {screenWork === false && (
        <Box
          sx={{
            p: 2,
            bgcolor: "#f6ffed",
            borderRadius: "16px",
            border: "1px solid #b7eb8f",
          }}
        >
          <Stack direction="row" spacing={2}>
            <HealthAndSafetyOutlinedIcon
              sx={{ color: "#389e0d", fontSize: "1.8rem" }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: "#237804",
                  mb: 0.5,
                }}
              >
                État de l'appareil
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  color: "#237804",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                }}
              >
                {"L'appareil est hors tension. \n" +
                  "Retirez la coque et le tiroir SIM pour faciliter l'évacuation de l'humidité. \n" +
                  "Laissez-le ainsi dans un endroit sec jusqu'au nettoyage. \n" +
                  "Ne tentez pas de l'allumer pour vérifier son état."}
              </Typography>
            </Box>
          </Stack>
        </Box>
      )}

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
            <GavelOutlinedIcon
              sx={{ color: "#86868b", fontSize: "1.3rem", mt: 0.2 }}
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
                À propos de l'intervention de désoxydation
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#424245",
                  lineHeight: 1.5,
                  display: "block",
                  whiteSpace: "pre-line",
                }}
              >
                {"Le sauvetage d'un appareil oxydé est une procédure de dernière chance. \n" +
                  "En raison de la nature instable de l'oxydation, l'état peut varier. \n" +
                  "L'intervention peut parfois révéler des pannes déjà présentes."}
              </Typography>
            </Box>
          </Box>

          <Box
            onClick={onBackupToggle}
            sx={{
              p: 2,
              borderRadius: "14px",
              border: "2px solid",
              cursor: "pointer",
              transition: "0.2s",
              borderColor: isBackupChecked ? "#0071e3" : "#d2d2d7",
              bgcolor: isBackupChecked ? "#f5fbff" : "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox checked={isBackupChecked} sx={{ p: 0, mr: 1.5 }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                color: isBackupChecked ? "#0071e3" : "#1d1d1f",
                lineHeight: 1.4,
              }}
            >
              Je comprends ces informations et je souhaite lancer le diagnostic.
            </Typography>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Step1;
