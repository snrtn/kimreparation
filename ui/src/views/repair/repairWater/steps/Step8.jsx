/* eslint-disable react-hooks/static-components */
import React from "react";
import { Stack, Typography, Box, Divider, Checkbox } from "@mui/material";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

const Step8 = ({ summary, confirmed, onConfirm }) => {
  const Row = ({ label, value }) => {
    // On sépare les lignes pour traiter chaque dommage individuellement
    const lines = value ? value.split("\n") : ["Non spécifié"];

    return (
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="caption"
          sx={{ color: "#86868b", fontWeight: 700, display: "block", mb: 0.5 }}
        >
          {label}
        </Typography>
        <Stack spacing={0.5}>
          {lines.map((line, index) => {
            const isBattery = line.includes("⚠️") || line.includes("Batterie");
            return (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "flex-start", gap: 0.5 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    // Seule la ligne batterie devient rouge, le reste (chute, etc.) reste noir
                    color: isBattery ? "#ff3b30" : "#1d1d1f",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                  }}
                >
                  {line}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    );
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          RÉSUMÉ FINAL
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Vérifiez vos informations
        </Typography>
      </Box>

      <Box
        sx={{
          p: 2.5,
          bgcolor: "#f5f5f7",
          borderRadius: "16px",
          border: "1px solid #e5e5e7",
          maxHeight: "35vh",
          overflowY: "auto",
        }}
      >
        <Row label="Appareil & Marque" value={summary.productTitle} />
        <Row label="Modèle / N° de série" value={summary.modelInfo} />
        <Divider sx={{ my: 2.5 }} />
        <Row label="État d'allumage" value={summary.screenStatus} />
        <Row label="Type de liquide" value={summary.liquidType} />
        <Row label="Délai de l'incident" value={summary.waterTime} />
        <Row label="Objectif de réparation" value={summary.repairGoal} />
        <Row label="État du châssis / Dos" value={summary.frame} />
        <Row label="Autres problèmes" value={summary.cause} />
      </Box>

      <Box
        sx={{
          p: 2,
          bgcolor: "#fffaf0",
          borderRadius: "14px",
          border: "1px solid #ffe58f",
          display: "flex",
          gap: 1.5,
        }}
      >
        <GavelOutlinedIcon
          sx={{ color: "#fa8c16", fontSize: "1.4rem", mt: 0.2 }}
        />
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "#d46b08",
              fontWeight: 800,
              display: "block",
              mb: 0.5,
            }}
          >
            Engagement de service (Obligation de moyens)
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#d46b08",
              lineHeight: 1.5,
              display: "block",
              fontWeight: 600,
              whiteSpace: "pre-line",
            }}
          >
            {"Nous mettons tout en œuvre pour redonner vie à votre appareil. \n" +
              "Les frais de désoxydation sont liés au temps passé ainsi qu'aux composants techniques utilisés lors de l'intervention. \n" +
              "Ces frais sont donc conservés même si l'appareil ne peut malheureusement pas être sauvé."}
          </Typography>
        </Box>
      </Box>

      <Box
        onClick={onConfirm}
        sx={{
          p: 2,
          borderRadius: "12px",
          border: "2px solid",
          cursor: "pointer",
          borderColor: confirmed ? "#0071e3" : "#d2d2d7",
          bgcolor: confirmed ? "#f5fbff" : "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox checked={confirmed} sx={{ p: 0, mr: 1.5 }} />
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: confirmed ? "#0071e3" : "#1d1d1f" }}
        >
          Je confirme l'exactitude des informations saisies.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Step8;
