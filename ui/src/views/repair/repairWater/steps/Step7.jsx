import React, { useRef, useMemo, useState } from "react";
import {
  Stack,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Collapse,
  Divider,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Step7 = ({
  deviceType,
  brand,
  modelName,
  setModelName,
  modelNumber,
  setModelNumber,
  dontKnowName,
  setDontKnowName,
  dontKnowNumber,
  setDontKnowNumber,
  finalDontKnow,
  setFinalDontKnow,
  scrollBoxRef, // 💡 부모에게 받은 Ref 추가
}) => {
  const scrollTargetRef = useRef(null);
  // 💡 스크롤 실행 횟수 관리 (0: 미실행, 1: 실행 완료)
  const [scrollCount, setScrollCount] = useState(0);

  const showRedCard = dontKnowName || dontKnowNumber;

  const info = useMemo(() => {
    const isTablet = deviceType === "Tablette";
    const isApple = brand === "Apple";
    const isSamsung = brand === "Samsung";

    if (isTablet) {
      if (isApple) {
        return {
          where:
            "Au dos de l'iPad, en bas, écrit en tout petit (commence par A).",
          format: "Exemple : A2588, A2270",
          namePH: "ex: iPad Air (5e gén), iPad Pro",
          numPH: "ex: A2588, A2759",
        };
      } else if (isSamsung) {
        return {
          where: "Au dos de la tablette ou dans Paramètres > À propos.",
          format: "Exemple : SM-X710, SM-T870",
          namePH: "ex: Galaxy Tab S9, Tab S8",
          numPH: "ex: SM-X710, SM-T870",
        };
      } else {
        return {
          where: "Au dos de la tablette ou dans les paramètres de l'appareil.",
          format: "Exemple : N° de modèle exact",
          namePH: "ex: Nom de la tablette",
          numPH: "ex: N° de modèle",
        };
      }
    } else {
      if (isApple) {
        return {
          where:
            "Réglages > Général > Informations (Appuyez sur N° de modèle pour voir le Axxxx).",
          format: "Exemple : A3106, A2890",
          namePH: "ex: iPhone 15 Pro, iPhone 14",
          numPH: "ex: A3106, A2890",
        };
      } else if (isSamsung) {
        return {
          where: "Paramètres > À propos du téléphone.",
          format: "Exemple : SM-S911B, SM-A546B",
          namePH: "ex: Galaxy S23, Galaxy A54",
          numPH: "ex: SM-S911B, SM-A546B",
        };
      } else if (brand === "Xiaomi") {
        return {
          where: "Paramètres > À propos de l'appareil.",
          format: "Exemple : 23049PCD8G",
          namePH: "ex: Xiaomi 13 Pro, Redmi Note 12",
          numPH: "ex: 23049PCD8G",
        };
      } else if (brand === "Google") {
        return {
          where: "Paramètres > À propos du téléphone.",
          format: "Exemple : GC3VE, G020I",
          namePH: "ex: Pixel 8 Pro, Pixel 7a",
          numPH: "ex: GC3VE, G020I",
        };
      } else {
        return {
          where: "Paramètres > À propos du téléphone (ou de l'appareil).",
          format: "Exemple : CPH2371, VOG-L29",
          namePH: `ex: Modèle ${brand !== "Autre" ? brand : "de l'appareil"}`,
          numPH: "ex: N° de modèle",
        };
      }
    }
  }, [deviceType, brand]);

  // 💡 스크롤 실행 함수
  const handleDontKnowCheck = (checked) => {
    if (checked && scrollCount === 0) {
      setTimeout(() => {
        if (scrollBoxRef && scrollBoxRef.current) {
          const currentScroll = scrollBoxRef.current.scrollTop;
          scrollBoxRef.current.scrollTo({
            top: currentScroll + 250,
            behavior: "smooth",
          });
          setScrollCount(1); // 💡 봉인
        }
      }, 100);
    }
  };

  return (
    <Stack spacing={3} sx={{ pb: 6 }}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          IDENTIFICATION
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Détails de l'appareil
        </Typography>
      </Box>

      <Box
        sx={{
          p: 2,
          bgcolor: "#f5f5f7",
          borderRadius: "16px",
          border: "1px solid #e5e5e7",
        }}
      >
        <Stack spacing={1.5}>
          <Box display="flex" alignItems="start" gap={1}>
            <HelpOutlineIcon
              sx={{ color: "#0071e3", fontSize: "1.2rem", mt: 0.2 }}
            />
            <Box>
              <Typography
                sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#1d1d1f" }}
              >
                À quoi ça ressemble ?
              </Typography>
              <Typography
                variant="caption"
                color="#0071e3"
                sx={{ fontWeight: 700, display: "block" }}
              >
                {info.format}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box display="flex" alignItems="start" gap={1}>
            <InfoOutlinedIcon
              sx={{ color: "#86868b", fontSize: "1.2rem", mt: 0.2 }}
            />
            <Box>
              <Typography
                sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#1d1d1f" }}
              >
                Où chercher ?
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {info.where}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack spacing={3} key={deviceType + brand}>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, ml: 0.5 }}>
            Nom du modèle
          </Typography>
          <TextField
            fullWidth
            placeholder={info.namePH}
            variant="outlined"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            disabled={dontKnowName}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              mb: 0.5,
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dontKnowName}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setDontKnowName(checked);
                  if (checked) {
                    setModelName("");
                    handleDontKnowCheck(true); // 💡 스크롤 호출
                  }
                  if (!checked && !dontKnowNumber) setFinalDontKnow(false);
                }}
                sx={{ p: 0.5, ml: 2 }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#86868b",
                  ml: 0.5,
                }}
              >
                Je ne trouve pas cette information.
              </Typography>
            }
          />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, ml: 0.5 }}>
            Numéro de modèle
          </Typography>
          <TextField
            fullWidth
            placeholder={info.numPH}
            variant="outlined"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            disabled={dontKnowNumber}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              mb: 0.5,
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={dontKnowNumber}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setDontKnowNumber(checked);
                  if (checked) {
                    setModelNumber("");
                    handleDontKnowCheck(true); // 💡 스크롤 호출
                  }
                  if (!checked && !dontKnowName) setFinalDontKnow(false);
                }}
                sx={{ p: 0.5, ml: 2 }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#86868b",
                  ml: 0.5,
                }}
              >
                Je ne trouve pas cette information.
              </Typography>
            }
          />
        </Box>
      </Stack>

      <Collapse in={showRedCard}>
        <Box
          ref={scrollTargetRef}
          sx={{
            p: 2,
            bgcolor: "#fffaf0",
            borderRadius: "16px",
            border: "2px solid #fa8c16",
            boxShadow: "0 4px 12px rgba(250, 140, 22, 0.1)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              color: "#d46b08",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <HelpOutlineIcon sx={{ fontSize: "1.1rem", color: "#d46b08" }} />
            Infos manquantes ?
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#d46b08",
              display: "block",
              mb: 1.5,
              lineHeight: 1.4,
              fontWeight: 600,
              whiteSpace: "pre-line",
            }}
          >
            {"Vérifiez sur votre facture d'achat ou sur la boîte d'origine. \n" +
              "Si l'information est introuvable, cochez la case ci-dessous pour débloquer l'étape suivante."}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={finalDontKnow}
                onChange={(e) => setFinalDontKnow(e.target.checked)}
                sx={{
                  color: "#fa8c16",
                  "&.Mui-checked": { color: "#fa8c16" },
                  animation: !finalDontKnow ? "pulse 2s infinite" : "none",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#d46b08",
                  fontWeight: 800,
                  textDecoration: !finalDontKnow ? "underline" : "none",
                }}
              >
                Je confirme ne pas trouver ces informations.
              </Typography>
            }
          />
        </Box>
      </Collapse>
    </Stack>
  );
};

export default Step7;
