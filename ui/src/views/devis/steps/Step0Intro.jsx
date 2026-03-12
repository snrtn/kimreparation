import React, { useState } from "react";
import {
  Typography,
  Stack,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Collapse,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EngineeringIcon from "@mui/icons-material/Engineering";

const Step0Intro = ({ onUpdate, onNext }) => {
  const [agreed, setAgreed] = useState(false);
  const [scrollConfirmed, setScrollConfirmed] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openProcess, setOpenProcess] = useState(false); // 새로운 안내 세션 상태

  const handleStart = () => {
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

      {/* 🛡️ 기존 법적 방어막 섹션 (형님이 주신 내용 토씨 하나 안 건드림) */}
      <Box
        sx={{
          p: 3,
          mb: 2, // 아래 카드와 간격을 위해 mb 5에서 2로 조정
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

      {/* ✨ [신규] 형님이 말씀하신 절차 안내 드롭다운 섹션 */}
      <Box sx={{ mb: 5 }}>
        <Paper
          elevation={0}
          onClick={() => setOpenProcess(!openProcess)}
          sx={{
            p: 2,
            bgcolor: "#f5f5f7",
            borderRadius: "14px",
            border: "1px dotted #d2d2d7",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <EngineeringIcon sx={{ fontSize: 20, color: "#1d1d1f" }} />
            <Typography
              sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#1d1d1f" }}
            >
              Comment se déroule votre réparation ? (Cliquez)
            </Typography>
          </Stack>
          <ExpandMoreIcon
            sx={{
              transform: openProcess ? "rotate(180deg)" : "none",
              transition: "0.3s",
              fontSize: "1.2rem",
            }}
          />
        </Paper>

        <Collapse in={openProcess}>
          <Box
            sx={{
              p: 2,
              bgcolor: "#ffffff",
              border: "1px solid #f5f5f7",
              borderTop: 0,
              borderRadius: "0 0 14px 14px",
            }}
          >
            <Stack spacing={2}>
              {/* 1. 견적 부분: 부품 교체가 기본값임을 강조 */}
              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block", mb: 1 }}
              >
                <strong>1. Devis & Plan :</strong> Ce devis initial est établi
                sous réserve d'un{" "}
                <strong>remplacement standard de pièces</strong>, basé sur les
                informations fournies.
              </Typography>

              {/* 2. 점검 부분: '할인' 빼고 '최종 확정/변동'으로 수정 */}
              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block" }}
              >
                <strong>2. Expertise & Réparation :</strong> Nous privilégions
                la réparation des composants. Le montant final sera{" "}
                <strong>révisé et arrêté</strong> après diagnostic technique,
                selon la complexité de l'intervention.
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block" }}
              >
                <strong>3. Politique Écrans :</strong> Recommandation selon
                votre style de vie. Aucun stock imposé, vous choisissez le type
                d'écran lors du devis.
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#424245",
                  display: "block",
                  whiteSpace: "pre-line", // 줄바꿈 적용
                  lineHeight: 1.6,
                }}
              >
                <strong>4. Logistique :</strong>
                {"\n"}• <strong>Dépôt à l'atelier :</strong> Sur rendez-vous
                (recommandé pour les réparations de précision).
                {"\n"}• <strong>Service à domicile :</strong> Possible pour les
                remplacements d'écran ou de batterie (selon diagnostic).
                {"\n"}• <strong>Pick-up & Livraison :</strong> Disponible si
                vous ne pouvez pas vous déplacer (frais basés sur le coût réel
                du carburant + frais de service).
              </Typography>
            </Stack>
          </Box>
        </Collapse>
      </Box>

      {/* 📌 상황 선택 버튼 (기존과 동일) */}
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

      {/* 스크롤 확인 안내 섹션 */}
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
                sx={{ color: "#0071e3", "&.Mui-checked": { color: "#0071e3" } }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ color: "#004080", fontWeight: 700, lineHeight: 1.4 }}
              >
                Je m'engage à faire défiler l'écran (scroll) pour vérifier tous
                les choix.
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
            sx={{ fontSize: "0.9rem", color: "#664d03", fontWeight: 600 }}
          >
            ⚠️ Interface plein écran activée pour le diagnostic.
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
          }}
        >
          COMMENCER LE DIAGNOSTIC
        </Button>

        {/* 신뢰 문구 섹션 */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography
            sx={{ fontSize: "0.85rem", color: "#34c759", fontWeight: 700 }}
          >
            ✓ Diagnostic 100% Gratuit
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#86868b",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: "1.1rem", mr: 0.5 }} /> Réponse sous
            1 heure
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Step0Intro;
