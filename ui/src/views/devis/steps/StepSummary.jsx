/* eslint-disable react-hooks/static-components */
import React, { useState, useRef } from "react";
import {
  Typography,
  Box,
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
    intermittent: "Le câble bouge ou se déconnecte tout seul",
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
  if (Array.isArray(val)) return val.map((v) => labels[cat]?.[v] || v);
  return labels[cat]?.[val] || labels.global[val] || val;
};

const StepSummary = ({ data, sigCanvasRef, onUpdate, isSubmitted }) => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const [refNumber] = useState(() => Math.floor(Math.random() * 90000));
  const pdfRef = useRef();

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
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
    pdf.save(`Diagnostic_KIM_REPARATION_${refNumber}.pdf`);
  };

  const Row = ({ label, value, category }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    const content = getLabel(category, value);
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 1.2,
          borderBottom: "1px dotted #e5e5e7",
          pb: 1,
        }}
      >
        <Typography
          sx={{
            width: "25%",
            fontSize: "0.75rem",
            color: "#636366",
            fontWeight: 700,
            pr: 1,
            flexShrink: 0,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
        <Box sx={{ width: "75%", pl: 0.5 }}>
          {Array.isArray(content) ? (
            content.map((item, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: "0.95rem",
                  color: "#1d1d1f",
                  fontWeight: 800,
                  lineHeight: 1.4,
                }}
              >
                • {item}
              </Typography>
            ))
          ) : (
            <Typography
              sx={{
                fontSize: "0.95rem",
                color: "#1d1d1f",
                fontWeight: 800,
                lineHeight: 1.4,
              }}
            >
              {content}
            </Typography>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 900, mb: 3, fontSize: "1.8rem", color: "#1d1d1f" }}
      >
        Récapitulatif & Signature
      </Typography>

      <Paper
        ref={pdfRef}
        elevation={4}
        sx={{
          p: { xs: 3, md: 5 },
          bgcolor: "#fff",
          borderRadius: "0px",
          border: "2px solid #1d1d1f",
          fontFamily: "monospace",
          mb: 4,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            borderBottom: "2.5px solid #1d1d1f",
            pb: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: 900, fontSize: "1.3rem", letterSpacing: "1px" }}
          >
            RÉCAPITULATIF DE VOTRE PANNE
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#636366" }}
          >
            Réf: #{refNumber} | Date: {todayDate}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 900,
              bgcolor: "#1d1d1f",
              color: "#fff",
              px: 1.5,
              py: 0.5,
              mb: 2,
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

        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 900,
              bgcolor: "#1d1d1f",
              color: "#fff",
              px: 1.5,
              py: 0.5,
              mb: 2,
            }}
          >
            2. BILAN TECHNIQUE
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
          <Row label="Châssis" value={data.frame} category="frame" />
          <Row label="Batterie" value={data.battery} category="battery" />
          <Row label="Tactile" value={data.touchWorks} category="touchWorks" />
          <Row
            label="Détails"
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
          <Row
            label="Vibrations"
            value={data.environment}
            category="environment"
          />
        </Box>

        <Box
          sx={{
            p: 2,
            mb: 4,
            bgcolor: "#fbfbfd",
            borderRadius: "12px",
            border: "1px solid #d2d2d7",
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ mb: 1.5 }}
          >
            <FactCheckOutlinedIcon sx={{ fontSize: 22, color: "#0071e3" }} />
            <Typography
              sx={{ fontWeight: 900, fontSize: "1rem", color: "#1d1d1f" }}
            >
              Notre engagement de transparence :
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "#424245",
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            • <strong>Données :</strong> Une sauvegarde préalable est
            recommandée. L'Atelier décline toute responsabilité en cas de perte
            de données.
            <br />
            <br />• <strong>Fragilité :</strong> L'ouverture d'un appareil
            endommagé comporte un risque de panne définitive inhérent à son état
            initial.
            <br />
            <br />• <strong>Garantie :</strong> Notre intervention annule la
            garantie constructeur. Un forfait diagnostic s'applique même si
            l'appareil est irréparable.
          </Typography>
          <Box
            sx={{
              p: 1,
              bgcolor: "white",
              borderRadius: "10px",
              border: "1.5px solid #e5e5e7",
            }}
          >
            <FormControlLabel
              sx={{ ml: 0.5 }}
              control={
                <Checkbox
                  checked={data.finalTermsAgreed || false}
                  onChange={(e) =>
                    onUpdate({ finalTermsAgreed: e.target.checked })
                  }
                  size="small"
                  sx={{
                    color: "#0071e3",
                    "&.Mui-checked": { color: "#0071e3" },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#1d1d1f",
                  }}
                >
                  J'accepte ces conditions et j'autorise le diagnostic.
                </Typography>
              }
            />
          </Box>
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 900, fontSize: "1rem", mb: 1 }}>
            Signature du Client :
          </Typography>
          <Box
            sx={{
              border: "2px dashed #0066cc",
              borderRadius: "12px",
              bgcolor: "#f0f8ff",
              overflow: "hidden",
            }}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="#0000ff"
              canvasProps={{ width: 600, height: 160, className: "sigCanvas" }}
              onEnd={() => onUpdate({ signatureDone: true })}
            />
          </Box>
          <Button
            data-html2canvas-ignore
            size="small"
            onClick={() => {
              sigCanvasRef.current.clear();
              onUpdate({ signatureDone: false });
            }}
            sx={{
              mt: 1,
              color: "#d32f2f",
              fontSize: "0.75rem",
              fontWeight: 800,
            }}
          >
            Effacer et recommencer
          </Button>
        </Box>
      </Paper>

      {/* ✅ 추가 요청하신 최종 전송 확인 체크박스 (강력 추천 가시성) */}
      <Box
        sx={{
          p: 2.5,
          bgcolor: "#eff7ff",
          borderRadius: "16px",
          border: "2px solid #0071e3",
          mb: 5,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={data.finalConfirm || false}
              onChange={(e) => onUpdate({ finalConfirm: e.target.checked })}
              sx={{ color: "#0071e3", "&.Mui-checked": { color: "#0071e3" } }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 900,
                color: "#004080",
                lineHeight: 1.4,
              }}
            >
              Je confirme que ces informations sont exactes et j'envoie ma
              demande de devis
            </Typography>
          }
        />
      </Box>

      {/* 완료 모달 */}
      <Dialog
        open={isSubmitted}
        PaperProps={{ sx: { borderRadius: "28px", p: 3, textAlign: "center" } }}
      >
        <DialogContent>
          <CheckCircleIcon sx={{ fontSize: 70, color: "#34c759", mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
            Demande Envoyée !
          </Typography>
          <Typography sx={{ color: "#424245", fontSize: "1rem", mb: 4 }}>
            Merci ! Nous vous recontacterons <strong>très rapidement</strong>.
          </Typography>
          <Stack spacing={2}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              onClick={handleDownloadPDF}
              sx={{
                py: 1.8,
                borderRadius: "14px",
                bgcolor: "#0071e3",
                fontWeight: 900,
                fontSize: "1rem",
              }}
            >
              Sauvegarder en PDF
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<HomeIcon />}
              onClick={() => window.location.reload()}
              sx={{
                py: 1.5,
                borderRadius: "14px",
                color: "#1d1d1f",
                fontWeight: 700,
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
