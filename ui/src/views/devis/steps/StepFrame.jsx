import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FireplaceIcon from "@mui/icons-material/Fireplace";

const StepFrame = ({ selected = [], onUpdate }) => {
  const options = [
    { id: "bent", label: "Le téléphone est tordu ou plié" },
    { id: "dent", label: "Le cadre est abîmé (chocs, coins enfoncés)" },
    { id: "swollen", label: "L'écran se soulève (batterie gonflée)" },
    { id: "none", label: "Le cadre est en parfait état" },
  ];

  const handleToggle = (id) => {
    if (id === "none") return onUpdate({ frame: ["none"] });
    const next = selected.filter((i) => i !== "none");
    onUpdate({
      frame: next.includes(id) ? next.filter((i) => i !== id) : [...next, id],
    });
  };

  const isBent = selected.includes("bent");
  const isSwollen = selected.includes("swollen");

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 1, color: "#1d1d1f" }}
      >
        L'état du cadre
      </Typography>
      <Typography
        sx={{ color: "#424245", fontSize: "1.05rem", mb: 4, lineHeight: 1.6 }}
      >
        Le tour de l'appareil (châssis) est-il déformé ou abîmé ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 3 }}>
        {options.map((opt) => (
          <Button
            key={opt.id}
            variant="outlined"
            onClick={() => handleToggle(opt.id)}
            sx={{
              p: 2.5,
              borderRadius: "16px",
              justifyContent: "flex-start",
              textAlign: "left",
              borderColor: selected.includes(opt.id) ? "#0071e3" : "#d2d2d7",
              bgcolor: selected.includes(opt.id) ? "#f5faff" : "white",
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

      {/* 🚨 배터리 팽창 시: 초긴급 안전 행동 요령 (방패 + 생존 지침) */}
      <Collapse in={isSwollen}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "16px",
            border: "2px solid #d32f2f",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 2 }}>
            <ErrorOutlineIcon sx={{ color: "#d32f2f", fontSize: 28 }} />
            <Typography
              variant="body1"
              sx={{ color: "#d32f2f", fontWeight: 900 }}
            >
              DANGER DE FEU ET D'EXPLOSION !
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            <Typography
              variant="body2"
              sx={{ color: "#601a1a", fontWeight: 700, lineHeight: 1.5 }}
            >
              Votre batterie est instable. Pour votre sécurité, suivez ces
              instructions immédiatement :
            </Typography>

            <Box sx={{ pl: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#601a1a", display: "block", mb: 0.5 }}
              >
                • <strong>NE PAS CHARGER :</strong> Débranchez l'appareil
                immédiatement.
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#601a1a", display: "block", mb: 0.5 }}
              >
                • <strong>STOCKAGE :</strong> Placez l'appareil dans un endroit
                aéré, loin de votre lit et de toute matière inflammable (livres,
                tissus).
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#601a1a", display: "block", mb: 0.5 }}
              >
                • <strong>NE PAS ENFERMER :</strong> Ne le placez pas dans un
                endroit clos ou hermétique.
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#c10000", display: "block", fontWeight: 800 }}
              >
                • <strong>TRANSPORT :</strong> Si vous nous l'apportez,
                transportez-le à l'intérieur d'une casserole métallique (sans
                couvercle scellé).
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      {/* ⚠️ 프레임 휨 경고 */}
      <Collapse in={isBent}>
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
                sx={{ color: "#856404", fontWeight: 700, mb: 0.5 }}
              >
                ATTENTION : CADRE TORDU
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#856404", fontSize: "0.9rem", lineHeight: 1.4 }}
              >
                Un châssis plié exerce une pression sur l'écran. Cela peut
                entraîner une fissure ou un décollement de la nouvelle pièce.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepFrame;
