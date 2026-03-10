import React, { useState } from "react";
import {
  Typography,
  Stack,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"; // '투명한 확인'을 상징하는 아이콘
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"; // 안내용 아이콘

const Step0Intro = ({ onUpdate, onNext }) => {
  const [agreed, setAgreed] = useState(false);
  const [scrollConfirmed, setScrollConfirmed] = useState(false); // 스크롤 확인 체크 상태
  const [selectedStatus, setSelectedStatus] = useState(null); // 어떤 버튼을 눌렀는지 기억하는 상태

  // 시작 버튼을 눌렀을 때 실행되는 함수
  const handleStart = () => {
    // 모든 조건(동의 + 상태 선택 + 스크롤 확인)이 충족되어야 함
    if (!agreed || !selectedStatus || !scrollConfirmed) return;

    const elem = document.documentElement;

    try {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } catch (error) {
      console.log("null", error);
    }

    onUpdate({ status: selectedStatus, agreedToTerms: true });
    onNext();
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 2, color: "#1d1d1f" }}
      >
        Diagnostic Téléphone
      </Typography>

      <Typography
        sx={{ color: "#424245", fontSize: "1rem", mb: 4, lineHeight: 1.6 }}
      >
        Afin d'évaluer avec précision l'état de votre Téléphone, nous vous
        invitons à réaliser ce diagnostic. Dans une démarche de totale
        transparence, veuillez prendre connaissance de nos conditions
        d'intervention avant de commencer.
      </Typography>

      {/* 🛡️ 법적 방어막 섹션 */}
      <Box
        sx={{
          p: 3,
          mb: 5,
          bgcolor: "#fbfbfd",
          borderRadius: "16px",
          border: "1px solid #d2d2d7",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <FactCheckOutlinedIcon sx={{ fontSize: 22, color: "#0071e3" }} />
          <Typography
            sx={{ fontWeight: 800, fontSize: "1rem", color: "#1d1d1f" }}
          >
            Notre engagement de transparence :
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography
            variant="body2"
            sx={{ color: "#424245", lineHeight: 1.5 }}
          >
            <strong>• Vos données :</strong> Une sauvegarde préalable est
            recommandée. L'Atelier décline toute responsabilité en cas de perte
            de données lors de l'intervention.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#424245", lineHeight: 1.5 }}
          >
            <strong>• Fragilité matérielle :</strong> L'ouverture d'un appareil
            déjà endommagé (choc, oxydation) comporte un risque de panne
            définitive inhérent à son état initial.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#424245", lineHeight: 1.5 }}
          >
            <strong>• Garantie & Frais :</strong> Notre intervention annule la
            garantie constructeur. De plus, un forfait de diagnostic s'applique
            même si l'appareil est techniquement irréparable.
          </Typography>

          {/* 📌 명시적 동의 체크박스 */}
          <Box
            sx={{
              mt: 1,
              p: 1.5,
              bgcolor: "white",
              borderRadius: "10px",
              border: "1px solid #e5e5e7",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  sx={{
                    color: "#0071e3",
                    "&.Mui-checked": { color: "#0071e3" },
                  }}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{ color: "#1d1d1f", fontWeight: 700 }}
                >
                  J'accepte ces conditions et j'autorise le diagnostic.
                </Typography>
              }
            />
          </Box>
        </Stack>
      </Box>

      {/* 📌 상황 선택 버튼 */}
      <Box
        sx={{
          opacity: agreed ? 1 : 0.4,
          transition: "opacity 0.3s",
          pointerEvents: agreed ? "auto" : "none",
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "#86868b", fontWeight: 700, mb: 2, display: "block" }}
        >
          POUR COMMENCER, QUEL EST L'ÉTAT DE L'ÉCRAN ?
        </Typography>

        <Stack spacing={2} sx={{ mb: 4 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setSelectedStatus("working")}
            sx={{
              p: 3,
              borderRadius: "16px",
              justifyContent: "flex-start",
              borderWidth: selectedStatus === "working" ? "2px" : "1px",
              borderColor: selectedStatus === "working" ? "#0071e3" : "#d2d2d7",
              color: "#1d1d1f",
              textTransform: "none",
              bgcolor: selectedStatus === "working" ? "#f5faff" : "white",
              "&:hover": { borderColor: "#0071e3", bgcolor: "#f5faff" },
            }}
          >
            <SmartphoneIcon sx={{ mr: 2, fontSize: 32, color: "#0071e3" }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                L'écran s'allume
              </Typography>
              <Typography variant="caption" sx={{ color: "#86868b" }}>
                Je peux voir le menu et utiliser le tactile.
              </Typography>
            </Box>
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => setSelectedStatus("broken")}
            sx={{
              p: 3,
              borderRadius: "16px",
              justifyContent: "flex-start",
              borderWidth: selectedStatus === "broken" ? "2px" : "1px",
              borderColor: selectedStatus === "broken" ? "#ff3b30" : "#d2d2d7",
              color: "#1d1d1f",
              textTransform: "none",
              bgcolor: selectedStatus === "broken" ? "#fff1f0" : "white",
              "&:hover": { borderColor: "#ff3b30", bgcolor: "#fff1f0" },
            }}
          >
            <MobileOffIcon sx={{ mr: 2, fontSize: 32, color: "#ff3b30" }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                L'écran reste noir
              </Typography>
              <Typography variant="caption" sx={{ color: "#86868b" }}>
                L'image est absente ou le téléphone ne réagit pas.
              </Typography>
            </Box>
          </Button>
        </Stack>
      </Box>

      {/* 🔥 파란색 스크롤 확인 안내 섹션 (진단 단계 명시) */}
      <Box sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            bgcolor: "#f0f7ff",
            border: "1px solid #cce3ff",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InfoOutlinedIcon sx={{ color: "#0071e3", mr: 1.5 }} />
          <FormControlLabel
            control={
              <Checkbox
                checked={scrollConfirmed}
                onChange={(e) => setScrollConfirmed(e.target.checked)}
                sx={{
                  color: "#0071e3",
                  "&.Mui-checked": { color: "#0071e3" },
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ color: "#004080", fontWeight: 700, lineHeight: 1.4 }}
              >
                Je m'engage à faire défiler l'écran (scroll) pour vérifier tous
                les choix et messages d'aide lors des étapes du diagnostic.
              </Typography>
            }
          />
        </Paper>
      </Box>

      {/* 시작 버튼 영역 */}
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 3,
            bgcolor: "#fff3cd",
            border: "1px solid #ffe69c",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "#664d03",
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            ⚠️ Note : L'interface va basculer en plein écran pour une meilleure
            expérience.
          </Typography>
        </Paper>

        <Button
          variant="contained"
          fullWidth
          disabled={!selectedStatus || !agreed || !scrollConfirmed}
          onClick={handleStart}
          sx={{
            py: 2.5,
            borderRadius: "12px",
            bgcolor: "#0071e3",
            color: "white",
            fontWeight: 800,
            fontSize: "1.1rem",
            "&:hover": { bgcolor: "#005bb5" },
            "&.Mui-disabled": { bgcolor: "#e5e5e7", color: "#a1a1a6" },
          }}
        >
          COMMENCER LE DIAGNOSTIC
        </Button>
      </Box>
    </Box>
  );
};

export default Step0Intro;
