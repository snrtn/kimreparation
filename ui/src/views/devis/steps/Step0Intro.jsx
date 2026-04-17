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
  Modal,
  IconButton,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MobileOffIcon from "@mui/icons-material/MobileOff";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ✅ 추가됨: 체크 아이콘 임포트

const Step0Intro = ({ onUpdate, onNext }) => {
  const [agreed, setAgreed] = useState(false);
  const [scrollConfirmed, setScrollConfirmed] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openProcess, setOpenProcess] = useState(false); // 새로운 안내 세션 상태
  const [openGuide, setOpenGuide] = useState(false); // 모달 상태 추가됨

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
        sx={{ fontWeight: 800, mb: 2, fontSize: "2rem", color: "#1d1d1f" }}
      >
        Diagnostic Téléphone
      </Typography>

      <Typography
        sx={{ color: "#424245", fontSize: "0.9rem", mb: 4, lineHeight: 1.6 }}
      >
        Afin d'évaluer avec précision l'état de votre Téléphone, nous vous
        invitons à réaliser ce diagnostic. Dans une démarche de totale
        transparence, veuillez prendre connaissance de nos conditions
        d'intervention avant de commencer.
      </Typography>

      {/* 🛡️ 기존 법적 방어막 섹션 */}
      <Box
        sx={{
          p: 3,
          mb: 2,
          bgcolor: "#fbfbfd",
          borderRadius: "16px",
          border: "1px solid #d2d2d7",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <FactCheckOutlinedIcon sx={{ fontSize: 22, color: "#0071e3" }} />
          <Typography
            sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1d1d1f" }}
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
            <EngineeringIcon sx={{ fontSize: 20, color: "#0071e3" }} />
            <Typography
              sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#1d1d1f" }}
            >
              Comment se déroule votre réparation de précision ? (Cliquez)
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
              p: 3,
              bgcolor: "#ffffff",
              border: "1px solid #f5f5f7",
              borderTop: 0,
              borderRadius: "0 0 14px 14px",
            }}
          >
            <Stack spacing={2.5}>
              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block", lineHeight: 1.6 }}
              >
                <strong>1. Diagnostic & Devis :</strong> Envoyez votre
                diagnostic en ligne. Après analyse de vos données, un{" "}
                <strong>devis personnalisé</strong> vous sera transmis. La prise
                en charge officielle débute une fois ce devis approuvé par vos
                soins.
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block", lineHeight: 1.6 }}
              >
                <strong>2. Expertise & Ajustement :</strong> Nous privilégions
                la <strong>micro-soudure</strong> pour sauver vos composants
                d'origine. Le montant final est arrêté après expertise réelle de
                l'appareil et peut être{" "}
                <strong>réajusté selon la complexité</strong> (souvent à votre
                avantage).
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block", lineHeight: 1.6 }}
              >
                <strong>3. Choix de la Qualité :</strong> Du LCD standard à
                l'écran <strong>Pliable</strong>, vous décidez de la gamme. Nous
                vous conseillons l'option idéale selon votre usage pour garantir
                la longévité de l'appareil.{" "}
                <a
                  href="/screen"
                  target="_blank" // 👈 새 탭(창)으로 열기
                  rel="noopener noreferrer" // 👈 보안 및 성능을 위한 국룰
                  style={{
                    color: "#0071e3",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  [En savoir plus]
                </a>
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "#424245",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  whiteSpace: "pre-line",
                  lineHeight: 1.6,
                }}
              >
                <strong>4. Logistique (Après approbation du devis) :</strong>
                <span>
                  • <strong>Par Correspondance :</strong> Expédiez votre
                  appareil en toute sécurité (Colissimo/Chronopost).{" "}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenGuide(true);
                    }}
                    style={{
                      color: "#0071e3",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    [Guide d'envoi]
                  </span>
                </span>
                <span>
                  • <strong>À l'Atelier :</strong> Un créneau de rendez-vous
                  vous sera proposé pour un dépôt physique à Beaumetz-lès-Loges.
                </span>
              </Typography>
            </Stack>
          </Box>
        </Collapse>
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
            {/* ✅ 추가됨: 선택 시 우측 끝에 체크 아이콘 표시 */}
            {selectedStatus === "working" && (
              <CheckCircleIcon
                sx={{ ml: "auto", color: "#0071e3", fontSize: 28 }}
              />
            )}
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
            {/* ✅ 추가됨: 선택 시 우측 끝에 체크 아이콘 표시 */}
            {selectedStatus === "broken" && (
              <CheckCircleIcon
                sx={{ ml: "auto", color: "#ff3b30", fontSize: 28 }}
              />
            )}
          </Button>
        </Stack>
      </Box>

      {/* 스크롤 확인 안내 섹션 */}
      <Box sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            px: 8,
            bgcolor: "#f0f7ff",
            border: "1px solid #cce3ff",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <InfoOutlinedIcon sx={{ color: "#0071e3", mr: 1.5 }} /> */}
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
            2 heures
          </Typography>
        </Stack>
      </Box>

      {/* 📦 [Guide d'envoi] 모달창 */}
      <Modal
        open={openGuide}
        onClose={() => setOpenGuide(false)}
        closeAfterTransition
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 500 },
            bgcolor: "background.paper",
            borderRadius: "24px",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <WarningAmberIcon sx={{ color: "#ff3b30" }} /> Guide d'Expédition
              Sécurisée
            </Typography>
            <IconButton onClick={() => setOpenGuide(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack spacing={3}>
            {/* 배터리 경고 */}
            <Box
              sx={{
                p: 2,
                bgcolor: "#fff1f0",
                borderRadius: "12px",
                border: "1px solid #ffccc7",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#d32f2f", fontWeight: 800, mb: 0.5 }}
              >
                ⚠️ ATTENTION : SÉCURITÉ BATTERIE
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#cf1322", display: "block", fontWeight: 500 }}
              >
                INTERDICTION STRICTE d'envoyer une batterie gonflée. L'Atelier
                décline toute responsabilité en cas d'incident postal lié à
                votre batterie.
              </Typography>
            </Box>

            {/* 포장 방법 (철제통) */}
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", mb: 1 }}>
                📦 Protocole d'emballage (3 Couches)
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#424245", display: "block", lineHeight: 1.6 }}
              >
                1. Enveloppez l'appareil dans du <strong>papier bulle</strong>.
                <br />
                2. Placez-le dans une <strong>boîte métallique</strong> (type
                boîte à biscuits).
                <br />
                3. Fixez la boîte dans un carton rigide avec du rembourrage.
              </Typography>
            </Box>

            {/* 택배사 팁 */}
            <Box sx={{ p: 2, bgcolor: "#f5f5f7", borderRadius: "12px" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "0.8rem", mb: 1 }}>
                📮 Recommandations postales
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#1d1d1f", display: "block", lineHeight: 1.5 }}
              >
                • <strong>Colissimo :</strong> Option "Remise contre signature"
                OBLIGATOIRE.
                <br />• <strong>Assurance :</strong> Option "Ad Valorem"
                vivement conseillée pour couvrir la valeur de l'appareil.
              </Typography>
            </Box>

            {/* 형님의 명언 */}
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#1d1d1f",
                textAlign: "center",
                pt: 2,
                borderTop: "1px solid #eee",
              }}
            >
              "Nous vous remercions de votre vigilance concernant la préparation
              de votre colis."
            </Typography>
          </Stack>

          <Button
            fullWidth
            onClick={() => setOpenGuide(false)}
            sx={{
              mt: 3,
              bgcolor: "#1d1d1f",
              color: "white",
              borderRadius: "12px",
              py: 1.5,
              "&:hover": { bgcolor: "#000" },
            }}
          >
            J'ai compris
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Step0Intro;
