import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        L'état du cadre
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Le tour de l'appareil (châssis) est-il déformé ou abîmé ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => handleToggle(opt.id)}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: "16px",
                justifyContent: "space-between",
                textAlign: "left",
                border: isSelected ? "2px solid #0071e3" : "1px solid #d2d2d7",
                bgcolor: isSelected ? "#eff7ff" : "white",
                textTransform: "none",
                color: isSelected ? "#0071e3" : "#1d1d1f",
                fontWeight: 700,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#0071e3",
                  bgcolor: "#eff7ff",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {opt.label}
              </Typography>
              {isSelected && (
                <CheckCircleIcon
                  sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
                />
              )}
            </Button>
          );
        })}
      </Stack>

      <Collapse in={isSwollen}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#fff4f4",
            borderRadius: "12px",
            border: "1px solid #ffcccc",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5 }}>
            <WarningAmberIcon
              sx={{ color: "#d32f2f", fontSize: { xs: 22, md: 24 } }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#d32f2f",
                fontWeight: 800,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
              }}
            >
              Mesures de précaution
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography
              variant="body2"
              sx={{
                color: "#601a1a",
                lineHeight: 1.5,
                fontSize: { xs: "0.85rem", md: "0.9rem" },
              }}
            >
              Une batterie qui gonfle indique une usure chimique. Pour votre
              sécurité et celle de l'appareil, voici quelques bons réflexes
              avant votre visite :
            </Typography>

            <Box sx={{ pl: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#601a1a",
                  display: "block",
                  mb: 0.5,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                }}
              >
                • <strong>Ne le chargez plus :</strong> Débranchez l'appareil.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#601a1a",
                  display: "block",
                  mb: 0.5,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                }}
              >
                • <strong>Transport sécurisé :</strong> Si vous vous déplacez
                avec, placez-le idéalement dans un contenant métallique (comme
                une boîte sans couvercle scellé).
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Collapse>

      <Collapse in={isBent}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Un châssis déformé exerce une pression continue sur le verre. Lors
            de la réparation, un redressage de la coque pourra être nécessaire
            pour éviter que le nouvel écran ne se décolle ou ne se fissure par
            la suite.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepFrame;
