/* eslint-disable react-hooks/static-components */
import React from "react";
import { Stack, Typography, Box, Divider, Checkbox } from "@mui/material";

const Step7 = ({ summary, confirmed, onConfirm }) => {
  const Row = ({ label, value }) => (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="caption"
        sx={{ color: "#86868b", fontWeight: 700, display: "block", mb: 0.5 }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          color: "#1d1d1f",
          whiteSpace: "pre-line",
          lineHeight: 1.5,
        }}
      >
        {value || "Non spécifié"}
      </Typography>
    </Box>
  );

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          RÉSUMÉ
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
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <Row
          label="Produit / Modèle"
          value={`${summary.productTitle}\n${summary.modelInfo}`}
        />
        <Divider sx={{ my: 2 }} />

        <Row label="L'image s'affiche-t-elle ?" value={summary.screenStatus} />
        <Row label="État de l'affichage" value={summary.displayType} />

        {summary.details && (
          <Row label="Symptômes détaillés" value={summary.details} />
        )}

        <Row label="État du châssis" value={summary.frame} />
        <Row label="Cause probable" value={summary.cause} />

        <Divider sx={{ my: 2 }} />

        {/* ✅ Step 1: 기기 선택 확인 (추가됨) */}
        <Row label="Confirmation de sélection" value={summary.step1Consent} />

        {/* ✅ Step 2: 백업 동의 (상황에 따라 텍스트 다름) */}
        <Row label="Sauvegarde des données" value={summary.step2Consent} />
      </Box>

      <Box
        onClick={onConfirm}
        sx={{
          p: 2,
          borderRadius: "12px",
          border: "2px solid",
          borderColor: confirmed ? "#0071e3" : "#d2d2d7",
          bgcolor: confirmed ? "#f5fbff" : "white",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": { borderColor: "#0071e3" },
        }}
      >
        <Checkbox checked={confirmed} sx={{ p: 0, mr: 1.5 }} />
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: confirmed ? "#0071e3" : "#1d1d1f" }}
        >
          Je confirme que ces informations sont exactes.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Step7;
