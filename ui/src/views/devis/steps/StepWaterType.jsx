import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WaterIcon from "@mui/icons-material/Water";

const StepWaterType = ({ selected, onUpdate }) => {
  const options = [
    { id: "tap", label: "Eau douce (Robinet, Pluie, Toilettes)" },
    { id: "sweet", label: "Boissons sucrées (Soda, Jus, Café, Alcool)" },
    { id: "sea", label: "Eau de mer (Eau salée)" },
    { id: "pool", label: "Eau de piscine (Eau chlorée)" },
    { id: "soap", label: "Eau savonneuse / Lessive (Lave-linge)" },
    { id: "nature", label: "Eau naturelle (Rivière, Étang, Flaque)" },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        Type de liquide
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Le type de liquide impacte directement la vitesse de corrosion de vos
        composants.
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 3 }}>
        {options.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            onClick={() => onUpdate({ waterType: opt.id })}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              justifyContent: "flex-start",
              textAlign: "left",
              borderColor: selected === opt.id ? "#0071e3" : "#d2d2d7",
              bgcolor: selected === opt.id ? "#f5faff" : "white",
              textTransform: "none",
              color: "#1d1d1f",
              fontWeight: 600,
              "&:hover": { borderColor: "#0071e3", bgcolor: "#f5faff" },
            }}
          >
            {opt.label}
          </Button>
        ))}
      </Stack>

      {/* 🟢 1. Eau douce */}
      <Collapse in={selected === "tap"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            border: "1px solid #0071e3",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <InfoOutlinedIcon sx={{ color: "#0071e3" }} />
            <Typography
              variant="body2"
              sx={{ color: "#004080", lineHeight: 1.4 }}
            >
              <strong>Avertissement :</strong> Même l'eau douce provoque une
              oxydation lente. Si l'appareil n'est pas traité rapidement, des
              pannes peuvent apparaître sous peu.
            </Typography>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🟠 2. Boissons sucrées - 'nettoyage adapté'로 수정 */}
      <Collapse in={selected === "sweet"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff9e6",
            borderRadius: "12px",
            border: "1px solid #ffcc00",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <WarningAmberIcon sx={{ color: "#856404" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#856404", fontWeight: 700 }}
              >
                DANGER : RÉSIDUS COLLANTS
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#856404", lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                Le sucre crée des courts-circuits permanents.{" "}
                <strong>Un nettoyage adapté</strong> est nécessaire pour éviter
                que les boutons ne se bloquent.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🔴 3. Eau de mer */}
      <Collapse in={selected === "sea"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "12px",
            border: "2px solid #d32f2f",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <ErrorOutlineIcon sx={{ color: "#d32f2f" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#d32f2f", fontWeight: 800 }}
              >
                DANGER CRITIQUE : SEL & CORROSION
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#601a1a", lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                Le sel ronge le métal en quelques heures.{" "}
                <strong>NE JAMAIS CHARGER l'appareil.</strong> Une intervention
                rapide est vitale pour la survie du téléphone.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🟡 4. Eau de piscine - 'rinçage approprié'로 수정 */}
      <Collapse in={selected === "pool"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff9e6",
            borderRadius: "12px",
            border: "1px solid #ffcc00",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <WarningAmberIcon sx={{ color: "#856404" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#856404", fontWeight: 700 }}
              >
                ALERTE : CHLORE OXYDANT
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#856404", lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                Le chlore attaque les joints et les métaux.{" "}
                <strong>Un rinçage approprié</strong> est nécessaire pour
                stopper l'oxydation interne.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🔵 5. Eau savonneuse */}
      <Collapse in={selected === "soap"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#e8f2fc",
            borderRadius: "12px",
            border: "1px solid #b6d4f0",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <WaterIcon sx={{ color: "#0071e3" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#004080", fontWeight: 700 }}
              >
                DANGER : PÉNÉTRATION TOTALE
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#004080", lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                Le savon annule l'étanchéité de l'appareil. Un séchage et{" "}
                <strong>un entretien adapté</strong> sont recommandés au plus
                vite.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* 🟤 6. Eau naturelle */}
      <Collapse in={selected === "nature"}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#f5f5f7",
            borderRadius: "12px",
            border: "1px solid #d2d2d7",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <InfoOutlinedIcon sx={{ color: "#86868b" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "#1d1d1f", fontWeight: 700 }}
              >
                AVERTISSEMENT : MICRO-PARTICULES
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#424245", lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                La boue et les bactéries peuvent causer des dommages après
                séchage. <strong>Un contrôle adapté</strong> est préconisé.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepWaterType;
