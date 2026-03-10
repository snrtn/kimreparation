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

const Step0Intro = ({ onUpdate, onNext }) => {
  const [agreed, setAgreed] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null); // 어떤 버튼을 눌렀는지 기억하는 상태

  // 시작 버튼을 눌렀을 때 실행되는 함수 (전체화면 + 다음 단계)
  // 시작 버튼을 눌렀을 때 실행되는 함수 (전체화면 + 다음 단계)
  const handleStart = () => {
    if (!agreed || !selectedStatus) return;

    const elem = document.documentElement;

    // 1. 네이티브 전체화면 시도 (PC, 안드로이드, 호환 브라우저용)
    try {
      if (elem.requestFullscreen) {
        // catch를 비워둬서 에러 로그도 안 뜨게 조용히 처리합니다.
        elem.requestFullscreen().catch(() => {});
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } catch (error) {
      // 2. 전체화면을 지원하지 않는 기기(아이폰 등)는
      // 에러를 무시하고 그냥 아래 코드로 넘어갑니다.
      console.log("null", error);
    }

    // 3. 🔥 상태 업데이트 및 다음 스텝 이동
    // 이 코드가 실행되면 부모 컴포넌트의 <Dialog fullScreen>이 켜지면서
    // 전체화면 미지원 기기라도 브라우저 화면을 100% 꽉 채우게 됩니다!
    onUpdate({ status: selectedStatus });
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

      {/* 🛡️ 법적 방어막 : '투명한 안내'로 친절하게 포장 */}
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

      {/* 📌 상황 선택 버튼 (동의해야 클릭 가능) */}
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
          {/* 🔥 화면 켜짐 버튼 */}
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

          {/* 🔥 화면 꺼짐 버튼 */}
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

      {/* ==========================================
          🔥 전체화면 안내 (크게 강조) 및 시작 버튼 (항상 렌더링되나 조건부 활성화)
          ========================================== */}
      <Box sx={{ mt: 2, textAlign: "center" }}>
        {/* 경고 박스 크게 강조 */}
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
              fontSize: "1.1rem",
              color: "#664d03",
              fontWeight: 800,
              lineHeight: 1.4,
            }}
          >
            ⚠️ Note : L'interface va basculer en plein écran pour une meilleure
            expérience. Ne soyez pas surpris !
          </Typography>
        </Paper>

        {/* 시작 버튼 (선택 안 하면 회색 비활성화, 선택 시 파란색 활성화) */}
        <Button
          variant="contained"
          fullWidth
          disabled={!selectedStatus} // 카드를 선택해야 활성화됨
          onClick={handleStart}
          sx={{
            py: 2.5,
            borderRadius: "12px",
            bgcolor: "#0071e3", // 튀는 검은색 대신 전문적인 파란색 적용
            color: "white",
            fontWeight: 800,
            fontSize: "1.1rem",
            "&:hover": { bgcolor: "#005bb5" },
            "&.Mui-disabled": { bgcolor: "#e5e5e7", color: "#a1a1a6" }, // 비활성화 스타일
          }}
        >
          COMMENCER LE DIAGNOSTIC
        </Button>
      </Box>

      {!agreed && (
        <Typography
          sx={{
            mt: 3,
            color: "#ff3b30",
            fontSize: "0.85rem",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Veuillez accepter les conditions pour lancer le diagnostic.
        </Typography>
      )}
    </Box>
  );
};

export default Step0Intro;
