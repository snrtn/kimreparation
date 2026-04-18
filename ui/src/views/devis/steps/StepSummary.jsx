/* eslint-disable react-hooks/static-components */
import React, { useState, useRef, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import HomeIcon from "@mui/icons-material/Home";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

const hasValue = (val) => {
  if (!val) return false;
  if (Array.isArray(val) && val.length === 0) return false;
  return true;
};

const StepSummary = ({ data, sigCanvasRef, onUpdate, isSubmitted }) => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const [refNumber] = useState(() => Math.floor(Math.random() * 90000));
  const [pdfLoading, setPdfLoading] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(600);
  const pdfRef = useRef();
  const sigWrapperRef = useRef();

  useEffect(() => {
    const el = sigWrapperRef.current;
    if (!el) return;
    const update = () => setCanvasWidth(el.offsetWidth || 600);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;
    setPdfLoading(true);
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        ignoreElements: (el) => el.classList.contains("hide-on-print"),
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgH = (canvas.height * pageW) / canvas.width;
      let remaining = imgH;
      let yOffset = 0;
      pdf.addImage(imgData, "PNG", 0, yOffset, pageW, imgH);
      remaining -= pageH;
      while (remaining > 0) {
        yOffset -= pageH;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, yOffset, pageW, imgH);
        remaining -= pageH;
      }
      pdf.save(`devis-${refNumber}.pdf`);
    } finally {
      setPdfLoading(false);
    }
  };

  const Row = ({ label, value, category }) => {
    if (!hasValue(value)) return null;
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

  const techCategories = [
    {
      title: "Écran & Tactile",
      items: [
        { label: "État écran", val: data.status, cat: "status" },
        { label: "Aspect ext.", val: data.appearance, cat: "appearance" },
        { label: "Affichage", val: data.display, cat: "display" },
        { label: "Tactile", val: data.touchWorks, cat: "touchWorks" },
        { label: "Détails", val: data.touchIssues, cat: "touchIssues" },
      ],
    },
    {
      title: "Batterie & Châssis",
      items: [
        { label: "Batterie", val: data.battery, cat: "battery" },
        { label: "Châssis", val: data.frame, cat: "frame" },
      ],
    },
    {
      title: "Incident & Historique",
      items: [
        { label: "Incident", val: data.incident, cat: "incident" },
        { label: "Liquide", val: data.waterType, cat: "waterType" },
        { label: "Délai eau", val: data.waterTime, cat: "waterTime" },
        {
          label: "Quel est votre objectif ?",
          val: data.waterGoal,
          cat: "waterGoal",
        },
        { label: "Vibrations", val: data.environment, cat: "environment" },
      ],
    },
    {
      title: "Autres Fonctionnalités",
      items: [
        { label: "Caméras", val: data.camera, cat: "camera" },
        { label: "Audio", val: data.audio, cat: "audio" },
        { label: "Connectivité", val: data.connection, cat: "connection" },
        { label: "Stockage", val: data.storage, cat: "storage" },
      ],
    },
  ];

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
          p: { xs: 2, md: 5 },
          bgcolor: "#fff",
          borderRadius: "0px",
          border: "2px solid #1d1d1f",
          fontFamily: "monospace",
          mb: 4,
          margin: "0 auto",
          overflowX: "hidden",
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

        <Box className="avoid-break" sx={{ mb: 5 }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 900,
              color: "#1d1d1f",
              borderBottom: "2px solid #1d1d1f",
              pb: 0.5,
              mb: 2,
            }}
          >
            1. INFORMATIONS CLIENT & APPAREIL
          </Typography>
          <Row label="PROPRIÉTAIRE" value={data.userName} />
          <Row
            label="CONTACT"
            value={
              data.contactType === "phone"
                ? data.userPhone
                : data.emailDomain === "custom"
                  ? `${data.emailUser || ""}@${data.customDomain || ""}`
                  : `${data.emailUser || ""}${data.emailDomain || ""}`
            }
          />
          <Row label="MARQUE" value={data.brand} category="brand" />
          <Row label="MODÈLE" value={data.modelName} />
          <Row label="N° MODÈLE" value={data.modelNumber} />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            className="avoid-break"
            sx={{
              fontSize: "1rem",
              fontWeight: 900,
              color: "#1d1d1f",
              borderBottom: "2px solid #1d1d1f",
              pb: 0.5,
              mb: 1,
            }}
          >
            2. BILAN TECHNIQUE DÉTAILLÉ
          </Typography>

          {techCategories.map((group, idx) => {
            const validItems = group.items.filter((item) => hasValue(item.val));
            if (validItems.length === 0) return null;
            return (
              <Box
                className="avoid-break"
                key={idx}
                sx={{ mb: 3, pl: { xs: 0, md: 1 } }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#636366",
                    borderBottom: "1px solid #e5e5e7",
                    pb: 0.5,
                    mb: 1.5,
                    mt: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {group.title}
                </Typography>
                {validItems.map((item, i) => (
                  <Row
                    key={i}
                    label={item.label}
                    value={item.val}
                    category={item.cat}
                  />
                ))}
              </Box>
            );
          })}
        </Box>

        <Box
          className="avoid-break"
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

        <Box className="avoid-break">
          <Typography sx={{ fontWeight: 900, fontSize: "1rem", mb: 1 }}>
            Signature du Client :
          </Typography>
          <Box
            ref={sigWrapperRef}
            sx={{
              border: "2px dashed #0066cc",
              borderRadius: "12px",
              bgcolor: "#f0f8ff",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="#0000ff"
              canvasProps={{
                width: canvasWidth,
                height: 160,
                className: "sigCanvas",
                style: { width: "100%", height: "160px" },
              }}
              onEnd={() => onUpdate({ signatureDone: true })}
            />
          </Box>
          <Button
            className="hide-on-print"
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

        {/* ── FooterSub ── */}
        <Box
          sx={{
            mt: 5,
            pt: 4,
            borderTop: "1px solid #f2f2f7",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#1d1d1f", mb: 1.5 }}
            >
              SÉCURITÉ DES DONNÉES PERSONNELLES
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8 }}>
              La sauvegarde intégrale des données (photos, contacts, messages)
              relève de la responsabilité exclusive du client avant toute
              intervention. Un appareil endommagé par un choc ou un liquide peut
              présenter des défaillances imprévisibles. Kim Reparation ne peut
              être tenu responsable de la perte de fichiers numériques survenant
              durant le processus de maintenance.
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8, mt: 2 }}>
              <strong>Cas d'écran noir ou tactile HS :</strong> Le client est
              libre de ne pas communiquer son code de déverrouillage. Dans ce
              cas, l'atelier réalise uniquement les tests accessibles sans accès
              au système. Les vérifications nécessitant le code (Wi-Fi,
              Bluetooth, capteurs, etc.) seront effectuées en présence du client
              lors de la récupération de l'appareil. Si un défaut est identifié
              durant cette phase conjointe, une nouvelle intervention pourra être
              réalisée. Toutefois, si le client choisit de ne pas faire corriger
              une anomalie détectée lors de ces tests, la garantie ne pourra
              s'appliquer aux fonctions concernées.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#1d1d1f", mb: 1.5 }}
            >
              RISQUES TECHNIQUES ET ÉTANCHÉITÉ
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8, mb: 2 }}>
              Toute intervention matérielle comporte des risques liés à l'état
              initial de l'appareil. Des dommages invisibles, comme des
              micro-fissures structurelles, peuvent évoluer lors du démontage.
              Après l'ouverture de l'appareil, l'étanchéité d'origine (normes
              IP67 ou IP68) n'est plus garantie, même avec l'installation
              systématique d'un nouveau joint de protection.
            </Typography>
            <Typography
              sx={{ fontSize: "0.8rem", color: "#86868b", lineHeight: 1.8, fontStyle: "italic" }}
            >
              Note d'indépendance : Kim Reparation est un prestataire de
              services indépendant, non affilié aux sociétés constructrices
              (Apple, Samsung, Xiaomi, Oppo, Google Pixel, Huawei, PlayStation,
              Xbox, Nintendo, Tesla, etc). Les noms de marques sont mentionnés
              uniquement à titre informatif pour identifier la compatibilité des
              services proposés.
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#86868b",
              pt: 2,
              borderTop: "1px dashed #e5e5e7",
            }}
          >
            © {new Date().getFullYear()} KIM REPARATION. TOUS DROITS RESERVES.
          </Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          p: 2.5,
          bgcolor: "#eff7ff",
          borderRadius: "16px",
          border: "2px solid #0071e3",
          my: 5,
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

      {/* 모달창 */}
      <Dialog
        open={isSubmitted}
        PaperProps={{
          sx: {
            borderRadius: "28px",
            p: 3,
            textAlign: "center",
            minWidth: "300px",
          },
        }}
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
              startIcon={
                pdfLoading ? (
                  <CircularProgress size={20} sx={{ color: "#fff" }} />
                ) : (
                  <DownloadIcon sx={{ color: "#fff" }} />
                )
              }
              onClick={handleDownloadPDF}
              disabled={pdfLoading}
              sx={{
                py: 1.8,
                borderRadius: "14px",
                bgcolor: "#0071e3",
                fontWeight: 900,
                fontSize: "1rem",
              }}
            >
              {pdfLoading ? "Génération..." : "Télécharger le PDF"}
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
