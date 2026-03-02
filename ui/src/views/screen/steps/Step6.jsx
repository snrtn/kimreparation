import React, { useRef, useEffect, useMemo } from "react";
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

const Step6 = ({
  category,
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
}) => {
  const scrollTargetRef = useRef(null);

  // 둘 중 하나라도 모른다고 체크했으면 빨간 카드를 보여줍니다.
  const showRedCard = dontKnowName || dontKnowNumber;

  // ✅ 빨간 카드가 나타날 때 스크롤 자동 이동
  useEffect(() => {
    if (showRedCard && scrollTargetRef.current) {
      setTimeout(() => {
        scrollTargetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    }
  }, [showRedCard]);

  // 카테고리별 안내 문구
  const info = useMemo(() => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("smartphone") || cat.includes("phone")) {
      return {
        where: "Réglages > Général > Informations",
        format: "Exemple : A3106 (iPhone) ou SM-S911B (Samsung)",
        namePH: "ex: iPhone 15 Pro, Galaxy S23",
        numPH: "ex: A3106, SM-S911B",
      };
    } else if (cat.includes("tablet") || cat.includes("pad")) {
      return {
        where: "Au dos de la tablette, en bas, écrit en tout petit.",
        format: "Exemple : A2270 (iPad) ou SM-X700 (Tab S8)",
        namePH: "ex: iPad Air (5e gén), Galaxy Tab S9",
        numPH: "ex: A2588, SM-X710",
      };
    } else if (
      cat.includes("laptop") ||
      cat.includes("computer") ||
      cat.includes("macbook")
    ) {
      return {
        where: "Sous l'ordinateur (étiquette ou gravure) ou sur la boîte.",
        format:
          "Exemple : A2337 (MacBook), NP950XCJ (Samsung), Model: 82FG (Lenovo)",
        namePH: "ex: MacBook Air M2, Galaxy Book3",
        numPH: "ex: A2337, 82FG015CFR",
      };
    } else {
      return {
        where: "Sur l'étiquette constructeur au dos.",
        format: "Exemple : Model NO / N° de modèle",
        namePH: "ex: Nom de l'appareil",
        numPH: "ex: N° de modèle",
      };
    }
  }, [category]);

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

      {/* 가이드 박스 */}
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

      {/* 카테고리별 입력 필드 */}
      <Stack spacing={3} key={category}>
        {/* 1. 모델 이름 영역 */}
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
                  setDontKnowName(e.target.checked);
                  if (e.target.checked) setModelName(""); // 체크 시 빈칸으로 만듦
                  if (!e.target.checked && !dontKnowNumber)
                    setFinalDontKnow(false); // 둘 다 체크 해제되면 최종 확인도 해제
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

        {/* 2. 모델 번호 영역 */}
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
                  setDontKnowNumber(e.target.checked);
                  if (e.target.checked) setModelNumber(""); // 체크 시 빈칸으로 만듦
                  if (!e.target.checked && !dontKnowName)
                    setFinalDontKnow(false); // 둘 다 체크 해제되면 최종 확인도 해제
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

      {/* 3. 빨간색 경고 카드 (둘 중 하나라도 모르면 등장) */}
      <Collapse in={showRedCard}>
        <Box
          ref={scrollTargetRef}
          sx={{
            p: 2,
            bgcolor: "#fff5f5",
            borderRadius: "12px",
            border: "1px solid #ffcccc",
          }}
        >
          <Typography
            variant="body2"
            sx={{ mb: 1.5, color: "#d32f2f", fontWeight: 700 }}
          >
            💡 Vérifiez sur votre boîte d'origine ou votre facture (e-mail).
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={finalDontKnow}
                onChange={(e) => setFinalDontKnow(e.target.checked)}
                color="error"
              />
            }
            label={
              <Typography
                sx={{ fontSize: "0.85rem", color: "#d32f2f", fontWeight: 800 }}
              >
                Je ne le trouve vraiment pas, continuer.
              </Typography>
            }
          />
        </Box>
      </Collapse>
    </Stack>
  );
};

export default Step6;
