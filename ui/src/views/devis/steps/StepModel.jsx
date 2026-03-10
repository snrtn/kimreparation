import React from "react";
import {
  Typography,
  Box,
  TextField,
  Collapse,
  Paper,
  FormControlLabel,
  Checkbox,
  Stack,
  Divider,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StepModel = ({
  brand = "",
  customBrand = "",
  modelName = "",
  modelNumber = "",
  unknownName = false,
  unknownNumber = false,
  onUpdate,
}) => {
  const showGuide = unknownName || unknownNumber;

  const displayBrand =
    brand === "other" && customBrand
      ? customBrand
      : brand
        ? brand.charAt(0).toUpperCase() + brand.slice(1)
        : "votre marque";

  // 💡 브랜드별 스마트 Placeholder 로직
  const getPlaceholders = (brandId) => {
    switch (brandId) {
      case "apple":
        return {
          name: "Ex: iPhone 13, iPad Pro 11...",
          number: "Ex: A2633, A2377...",
        };
      case "samsung":
        return {
          name: "Ex: Galaxy S22, Galaxy A54...",
          number: "Ex: SM-S901B, SM-A546B...",
        };
      case "xiaomi":
        return {
          name: "Ex: Redmi Note 11, Poco X3...",
          number: "Ex: 2201117TY, M2007J20CG...",
        };
      case "google":
        return {
          name: "Ex: Pixel 7, Pixel 6a...",
          number: "Ex: GVU6C, GX7AS...",
        };
      case "oppo":
        return {
          name: "Ex: Find X5, Reno 8...",
          number: "Ex: CPH2307, CPH2359...",
        };
      case "huawei":
        return {
          name: "Ex: P30 Pro, Mate 40...",
          number: "Ex: VOG-L29, NOH-NX9...",
        };
      default:
        return {
          name: "Ex: iPhone 13, Galaxy S22...",
          number: "Ex: A2633, SM-S901B...",
        };
    }
  };

  const placeholders = getPlaceholders(brand);

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        Modèle de l'appareil
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Indiquez le modèle exact de votre {displayBrand}.
      </Typography>

      {/* 📱 모델명 입력 */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            color: "#1d1d1f",
            fontWeight: 700,
            fontSize: "0.95rem",
            mb: 1.5,
          }}
        >
          Nom du modèle
        </Typography>
        <TextField
          fullWidth
          disabled={unknownName}
          placeholder={unknownName ? "Non renseigné" : placeholders.name}
          value={modelName}
          onChange={(e) => onUpdate({ modelName: e.target.value })}
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              bgcolor: unknownName ? "#f5f5f7" : "#fbfbfd",
              "&.Mui-focused fieldset": {
                borderColor: "#0071e3",
                borderWidth: "2px",
              },
            },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={unknownName}
              onChange={(e) => {
                onUpdate({ unknownName: e.target.checked });
                if (e.target.checked) onUpdate({ modelName: "" });
              }}
              sx={{ color: "#d2d2d7", "&.Mui-checked": { color: "#0071e3" } }}
            />
          }
          label={
            <Typography
              sx={{ fontSize: "0.9rem", color: "#424245", fontWeight: 600 }}
            >
              Je ne connais pas le nom exact
            </Typography>
          }
        />
      </Box>

      {/* 🔢 모델번호 입력 */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            color: "#1d1d1f",
            fontWeight: 700,
            fontSize: "0.95rem",
            mb: 1.5,
          }}
        >
          Numéro de modèle
        </Typography>
        <TextField
          fullWidth
          disabled={unknownNumber}
          placeholder={unknownNumber ? "Non renseigné" : placeholders.number}
          value={modelNumber}
          onChange={(e) => onUpdate({ modelNumber: e.target.value })}
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              bgcolor: unknownNumber ? "#f5f5f7" : "#fbfbfd",
              "&.Mui-focused fieldset": {
                borderColor: "#0071e3",
                borderWidth: "2px",
              },
            },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={unknownNumber}
              onChange={(e) => {
                onUpdate({ unknownNumber: e.target.checked });
                if (e.target.checked) onUpdate({ modelNumber: "" });
              }}
              sx={{ color: "#d2d2d7", "&.Mui-checked": { color: "#0071e3" } }}
            />
          }
          label={
            <Typography
              sx={{ fontSize: "0.9rem", color: "#424245", fontWeight: 600 }}
            >
              Je ne connais pas le numéro de modèle
            </Typography>
          }
        />
      </Box>

      {/* 🔵 "모르겠어요" 체크 시 나타나는 브랜드 맞춤형 가이드 + 영수증/박스 안내 */}
      <Collapse in={showGuide}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 3 },
            bgcolor: "#f0f7ff",
            borderRadius: "16px",
            border: "1px solid #0071e3",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 2 }}>
            <InfoOutlinedIcon
              sx={{ color: "#0071e3", fontSize: { xs: 24, md: 28 } }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#004080",
                fontWeight: 800,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Où trouver votre modèle {displayBrand} ?
            </Typography>
          </Stack>

          <Stack spacing={2.5}>
            {/* 🍏 애플 전용 가이드 */}
            {brand === "apple" && (
              <Box>
                <Typography
                  sx={{
                    color: "#004080",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    mb: 0.5,
                  }}
                >
                  📱 Dans les paramètres :
                </Typography>
                <Typography
                  sx={{
                    color: "#004080",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    pl: 1,
                  }}
                >
                  Allez dans{" "}
                  <strong>Réglages &gt; Général &gt; Informations</strong>.
                  <br />
                  <em>
                    *Astuce : Touchez une fois la ligne "Numéro de modèle" pour
                    révéler le code court (ex: A2633).
                  </em>
                </Typography>
              </Box>
            )}

            {/* 🤖 삼성 전용 가이드 */}
            {brand === "samsung" && (
              <Box>
                <Typography
                  sx={{
                    color: "#004080",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    mb: 0.5,
                  }}
                >
                  📱 Dans les paramètres :
                </Typography>
                <Typography
                  sx={{
                    color: "#004080",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    pl: 1,
                  }}
                >
                  Allez dans{" "}
                  <strong>Paramètres &gt; À propos du téléphone</strong>.<br />
                  Le nom et le numéro (qui commence souvent par SM-...) s'y
                  trouvent.
                </Typography>
              </Box>
            )}

            {/* 📱 기타 안드로이드 전용 가이드 (샤오미, 오포, 구글 등) */}
            {["xiaomi", "google", "oppo", "huawei", "other"].includes(
              brand,
            ) && (
              <Box>
                <Typography
                  sx={{
                    color: "#004080",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    mb: 0.5,
                  }}
                >
                  📱 Dans les paramètres :
                </Typography>
                <Typography
                  sx={{
                    color: "#004080",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    pl: 1,
                  }}
                >
                  Allez dans{" "}
                  <strong>Paramètres &gt; À propos de l'appareil</strong> (ou "À
                  propos du téléphone").
                </Typography>
              </Box>
            )}

            <Divider sx={{ borderColor: "#b6d4f0" }} />

            {/* 🧾 박스 및 영수증(Facture) 확인 안내 */}
            <Box>
              <Typography
                sx={{
                  color: "#004080",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  mb: 0.5,
                }}
              >
                📦 Si l'appareil ne s'allume pas :
              </Typography>
              <Typography
                sx={{
                  color: "#004080",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  pl: 1,
                }}
              >
                • <strong>Sur votre facture :</strong> Regardez sur la facture
                d'achat ou le ticket de caisse.
                <br />• <strong>Sur la boîte :</strong> Vérifiez l'étiquette
                code-barres de la boîte d'origine.
                <br />• <strong>Au dos du téléphone :</strong> Lisez les
                minuscules inscriptions en bas au dos de l'appareil.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepModel;
