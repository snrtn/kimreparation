/* eslint-disable react-hooks/static-components */
import React, { useState, useRef } from "react";
import {
  Typography,
  Box,
  Divider,
  Paper,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogContent,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HomeIcon from "@mui/icons-material/Home";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// 💡 형님이 보내주신 파일들에서 직접 추출한 100% 동일한 라벨 텍스트입니다.
const labels = {
  global: {
    none: "Aucun",
    unknown: "Inconnu",
    yes: "Oui",
    no: "Non",
    unsure: "Incertain",
  },
  brand: {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    google: "Google",
    oppo: "Oppo",
    huawei: "Huawei",
    other: "Autre marque (Préciser)",
  },
  status: { working: "L'écran s'allume", broken: "L'écran reste noir" },
  appearance: {
    front: "L'écran est cassé, fendu ou très rayé",
    back: "Le dos du téléphone est cassé ou abîmé",
    camera: "Le petit verre de l'appareil photo est cassé",
    buttons: "Les boutons sur le côté ne marchent plus",
    fog: "Il y a de la buée ou de l'eau dans les caméras",
    none: "Le téléphone est comme neuf, aucun choc",
  },
  display: {
    lines: "Il y a des traits ou des lignes sur l'image",
    spots: "Il y a des taches noires (comme de l'encre)",
    flicker: "L'image clignote ou l'écran saute",
    colors: "Les couleurs sont bizarres (tout vert ou rose)",
    partial: "Une partie de l'écran reste noire",
    none: "L'image est parfaite, aucun défaut",
  },
  incident: {
    drop_low: "Petite chute (hauteur de bureau)",
    drop_high: "Chute d'une hauteur importante (>1m)",
    water_low: "Immersion légère (moins de 2m)",
    water_high: "Immersion profonde (plus de 2m)",
    bathroom: "Utilisation fréquente dans la salle de bain",
    none: "Aucun incident particulier",
  },
  waterType: {
    tap: "Eau douce (Robinet, Pluie, Toilettes)",
    sweet: "Boissons sucrées (Soda, Jus, Café, Alcool)",
    sea: "Eau de mer (Eau salée)",
    pool: "Eau de piscine (Eau chlorée)",
    soap: "Eau savonneuse / Lessive (Lave-linge)",
    nature: "Eau naturelle (Rivière, Étang, Flaque)",
  },
  waterTime: {
    day: "Il y a moins de 24h",
    days: "Il y a 2 à 3 jours",
    week: "Il y a plus d'une semaine",
  },
  waterGoal: {
    memory: "Sauvegarder mes données en priorité",
    device: "Réparer l'appareil pour le réutiliser",
    both: "Sauver l'appareil ET les données",
  },
  frame: {
    bent: "Le téléphone est tordu ou plié",
    dent: "Le cadre est abîmé (chocs, coins enfoncés)",
    swollen: "L'écran se soulève (batterie gonflée)",
    none: "Le cadre est en parfait état",
  },
  battery: {
    no_charge: "Il ne charge plus du tout (rien ne se passe)",
    intermittent: "Le câble bouge ou se 대접necte tout seul",
    slow: "La charge est anormalement longue",
    fast_drain: "La batterie descend beaucoup trop vite",
    shutdown: "Le téléphone s'éteint tout seul (ex: à 20%)",
    hot: "Le téléphone chauffe beaucoup en charge",
    none: "La batterie tient bien la route",
  },
  touchWorks: {
    yes: "Oui, le tactile fonctionne normalement",
    no: "Non, le tactile présente des dysfonctionnements",
  },
  touchIssues: {
    intermittent: "L'écran ne répond pas bien par moments",
    ghost: "« Ghost Touch » (L'écran clique tout seul)",
    dead_zones: "Certaines zones de l'écran ne marchent pas",
    none: "Aucun problème spécifique",
  },
  camera: {
    front: "Caméra avant défectueuse",
    back: "Caméra arrière défectueuse",
    flash: "Flash défectueux",
    unknown: "Impossible à vérifier",
    none: "Tout fonctionne parfaitement",
  },
  audio: {
    mic: "On ne m'entend pas (Microphone)",
    speaker: "Pas de son (Haut-parleur)",
    unknown: "Impossible à vérifier",
    none: "Audio parfait",
  },
  connection: {
    wifi: "Problème Wi-Fi",
    bluetooth: "Problème Bluetooth",
    unknown: "Impossible à vérifier",
    none: "Connexions parfaites",
  },
  storage: {
    yes: "Oui, j'ai déjà vu cette alerte de mémoire pleine",
    no: "Non, je ne l'ai jamais vue",
    unsure: "Je ne m'en rappelle plus",
  },
  environment: {
    sport: "Sport et quotidien (Tapis de course, moto, vélo...)",
    agri: "Engins agricoles et tout-terrain (Tracteur, quad...)",
    work: "Chantier et machinerie lourde (Perceuse, chariot...)",
    marine: "Nautisme et loisirs aquatiques (Jet-ski, bateau...)",
    none: "Aucune exposition aux vibrations fortes",
  },
};

const getLabel = (cat, val) => {
  if (Array.isArray(val))
    return val.map((v) => labels[cat]?.[v] || v).join(", ");
  return labels[cat]?.[val] || labels.global[val] || val;
};

const StepSummary = ({ data, sigCanvasRef, onUpdate, isSubmitted }) => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const [refNumber] = useState(() => Math.floor(Math.random() * 90000));
  const pdfRef = useRef();

  // 🔥 PDF 저장 기능 (짤림 방지: A4 세로 길이에 맞춰 자동 축소)
  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);

    // 💡 세로 길이를 기준으로 비율을 계산해 A4 한 장에 쏙 들어가게 축소 (여백 15mm 제외)
    const ratio = Math.min(
      pdfWidth / imgProps.width,
      (pdfHeight - 15) / imgProps.height,
    );
    const finalWidth = imgProps.width * ratio;
    const finalHeight = imgProps.height * ratio;

    pdf.addImage(
      imgData,
      "PNG",
      (pdfWidth - finalWidth) / 2,
      5,
      finalWidth,
      finalHeight,
    );
    pdf.save(`Devis_KIM_REPARATION_${refNumber}.pdf`);
  };

  const Row = ({ label, value, category }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 0.4,
          borderBottom: "1px dotted #e5e5e7",
        }}
      >
        <Typography
          sx={{ fontSize: "0.6rem", color: "#86868b", fontWeight: 700 }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.65rem",
            color: "#1d1d1f",
            fontWeight: 800,
            textAlign: "right",
            maxWidth: "70%",
          }}
        >
          {getLabel(category, value)}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
        Finalisation du Devis
      </Typography>

      <Paper
        ref={pdfRef}
        elevation={0}
        sx={{
          p: { xs: 1.5, md: 2.5 },
          bgcolor: "#fff",
          borderRadius: "0px",
          border: "1.5px solid #1d1d1f",
          fontFamily: "monospace",
          mb: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 2,
            borderBottom: "1.5px solid #1d1d1f",
            pb: 0.5,
          }}
        >
          <Typography sx={{ fontWeight: 900, fontSize: "1rem" }}>
            BON DE DIAGNOSTIC TECHNIQUE
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            Réf: #{refNumber} | Date: {todayDate}
          </Typography>
        </Box>

        <Box sx={{ mb: 1.5 }}>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: 900,
              bgcolor: "#1d1d1f",
              color: "#fff",
              px: 1,
              mb: 0.5,
            }}
          >
            1. CLIENT & APPAREIL
          </Typography>
          <Row label="PROPRIÉTAIRE" value={data.userName} />
          <Row
            label="CONTACT"
            value={
              data.contactType === "phone"
                ? data.userPhone
                : `${data.emailUser}${data.emailDomain}`
            }
          />
          <Row label="MARQUE" value={data.brand} category="brand" />
          <Row label="MODÈLE" value={data.modelName} />
          <Row label="N° MODÈLE" value={data.modelNumber} />
        </Box>

        <Box sx={{ mb: 1.5 }}>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: 900,
              bgcolor: "#1d1d1f",
              color: "#fff",
              px: 1,
              mb: 0.5,
            }}
          >
            2. DÉTAILS DU DIAGNOSTIC
          </Typography>
          <Row label="État écran" value={data.status} category="status" />
          <Row
            label="Aspect ext."
            value={data.appearance}
            category="appearance"
          />
          <Row label="Affichage" value={data.display} category="display" />
          <Row label="Incident" value={data.incident} category="incident" />
          <Row label="Liquide" value={data.waterType} category="waterType" />
          <Row label="Délai eau" value={data.waterTime} category="waterTime" />
          <Row label="Objectif" value={data.waterGoal} category="waterGoal" />
          <Row label="Châssis" value={data.frame} category="frame" />
          <Row label="Batterie" value={data.battery} category="battery" />
          <Row label="Tactile" value={data.touchWorks} category="touchWorks" />
          <Row
            label="Défauts tactile"
            value={data.touchIssues}
            category="touchIssues"
          />
          <Row label="Caméras" value={data.camera} category="camera" />
          <Row label="Audio" value={data.audio} category="audio" />
          <Row
            label="Connectivité"
            value={data.connection}
            category="connection"
          />
          <Row label="Stockage" value={data.storage} category="storage" />
          <Row label="Usage" value={data.environment} category="environment" />
        </Box>

        <Box
          sx={{
            mb: 1.5,
            p: 1,
            border: "1px solid #1d1d1f",
            bgcolor: "#f9f9f9",
          }}
        >
          <Typography
            sx={{ fontSize: "0.55rem", lineHeight: 1.2, color: "#424245" }}
          >
            • Engagement : Je confirme l'exactitude de ce bilan.
            <br />
            • Garantie : L'ouverture annule la garantie constructeur.
            <br />• Données : Sauvegarde client recommandée.
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "0.6rem", fontWeight: 900, mb: 0.5 }}>
            SIGNATURE CLIENT
          </Typography>
          <Box
            sx={{
              border: "1px solid #1d1d1f",
              height: "90px",
              bgcolor: "#fff",
            }}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="#0000ff"
              canvasProps={{ width: 400, height: 90, className: "sigCanvas" }}
              onEnd={() => onUpdate({ signatureDone: true })}
            />
          </Box>
        </Box>
      </Paper>

      {/* ✅ 체크박스 이름을 finalTermsAgreed로 수정 (DevisPhone 버튼 활성화와 연동) */}
      <FormControlLabel
        control={
          <Checkbox
            checked={data.finalTermsAgreed || false}
            onChange={(e) => onUpdate({ finalTermsAgreed: e.target.checked })}
          />
        }
        label={
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 700 }}>
            J'atteste l'exactitude du diagnostic.
          </Typography>
        }
      />

      <Dialog
        open={isSubmitted}
        PaperProps={{ sx: { borderRadius: "24px", p: 2, textAlign: "center" } }}
      >
        <DialogContent>
          <CheckCircleIcon sx={{ fontSize: 50, color: "#34c759", mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Demande Envoyée !
          </Typography>
          <Typography variant="body2" sx={{ color: "#424245", mb: 3 }}>
            Merci ! Nous vous recontacterons <strong>très rapidement</strong>.
            <br /> Pensez à sauvegarder votre devis.
          </Typography>
          <Stack spacing={1.5}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              onClick={handleDownloadPDF}
              sx={{ py: 1.2, borderRadius: "12px", bgcolor: "#0071e3" }}
            >
              Sauvegarder en PDF
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<HomeIcon />}
              onClick={() => window.location.reload()}
              sx={{
                py: 1.2,
                borderRadius: "12px",
                color: "#1d1d1f",
                borderColor: "#d2d2d7",
              }}
            >
              Retour à l'accueil
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default StepSummary;
