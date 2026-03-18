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
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";

// 📌 [주의] html2canvas, jsPDF 임포트 제거함! (이제 안 씁니다)

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

// 빈 값 필터링 함수
const hasValue = (val) => {
  if (!val) return false;
  if (Array.isArray(val) && val.length === 0) return false;
  return true;
};

const StepSummary = ({ data, sigCanvasRef, onUpdate, isSubmitted }) => {
  const todayDate = new Date().toLocaleDateString("fr-FR");
  const [refNumber] = useState(() => Math.floor(Math.random() * 90000));
  const pdfRef = useRef();

  const handlePrint = () => {
    const element = pdfRef.current;
    if (!element) return;

    // 1. 스타일 복사
    const styles = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]'),
    )
      .map((s) => s.outerHTML)
      .join("");

    // 2. 캔버스(서명)를 이미지로 변환
    const canvasElements = element.querySelectorAll("canvas");
    const canvasDataUrls = Array.from(canvasElements).map((c) => c.toDataURL());

    // 3. 폼 내용 복제
    const clone = element.cloneNode(true);

    // 4. 서명 이미지 교체
    const clonedCanvases = clone.querySelectorAll("canvas");
    clonedCanvases.forEach((c, i) => {
      const img = document.createElement("img");
      img.src = canvasDataUrls[i];
      img.style.width = "100%";
      img.style.maxWidth = "600px";
      c.parentNode.replaceChild(img, c);
    });

    // 현재 연도 가져오기 (푸터용)
    const currentYear = new Date().getFullYear();

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Veuillez autoriser les pop-ups pour imprimer.");
      return;
    }

    // 5. 새 창에 HTML + 프린트용 CSS + 📌 FooterSub 내용 렌더링
    printWindow.document.write(`
      <html>
        <head>
          <title>Impression - Fiche de Diagnostic</title>
          ${styles}
          <style>
            .hide-on-print { display: none !important; }
            @media print {
              @page { size: A4 portrait; margin: 15mm; }
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white; }
              .avoid-break { page-break-inside: avoid; break-inside: avoid; }
            }
            body { margin: 0; padding: 20px; display: flex; justify-content: center; font-family: sans-serif; }
            #print-container { width: 100%; max-width: 800px; }
            
            /* Footer 전용 스타일 */
            .print-footer {
              width: 100%;
              padding: 40px 0;
              margin-top: 40px;
              border-top: 1px solid #f2f2f7;
              text-align: left;
            }
            .print-footer-section { margin-bottom: 32px; }
            .print-footer-title { font-size: 0.8rem; font-weight: 700; color: #1d1d1f; margin-bottom: 12px; }
            .print-footer-text { font-size: 0.8rem; color: #86868b; line-height: 1.8; margin: 0; }
            .print-footer-italic { font-size: 0.8rem; color: #86868b; line-height: 1.8; font-style: italic; margin: 0; }
            .print-footer-bottom { font-size: 0.75rem; color: #86868b; padding-top: 16px; border-top: 1px dashed #e5e5e7; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div id="print-container">
            ${clone.outerHTML}

            <div class="print-footer avoid-break">
              
              <div class="print-footer-section">
                <div class="print-footer-title">AVERTISSEMENT SUR LA SECURITE DE VOS DONNEES PERSONNELLES</div>
                <p class="print-footer-text">
                  Nous tenons a informer notre aimable clientele que la sauvegarde integrale de vos donnees (photographies, contacts, messages) reste sous votre responsabilite exclusive avant toute intervention technique. Un appareil endommage par un choc ou un liquide peut presenter des defaillances imprevisibles. <strong>Kim Reparation</strong> ne pourra etre tenu responsable de la perte de vos fichiers numeriques lors du processus de maintenance.
                </p>
              </div>

              <div class="print-footer-section">
                <div class="print-footer-title">TRANSPARENCE SUR LES RISQUES TECHNIQUES ET STRUCTURELS</div>
                <p class="print-footer-text">
                  Toute intervention materielle comporte des risques intrinseques lies a l'etat initial de l'appareil. Des dommages invisibles a l'oeil nu, tels que des micro-fissures structurelles, peuvent evoluer lors du demontage. De meme, bien que nous installions systematiquement de nouveaux joints, l'impermeabilite d'origine (normes IP67 ou IP68) ne peut etre garantie a l'identique apres une ouverture. Nous partageons ces informations par souci d'honnetete envers nos clients.
                </p>
              </div>

              <div class="print-footer-section">
                <p class="print-footer-italic">
                  Note d'independance : Kim Reparation est un prestataire de services independant. Nous ne sommes ni affilies ni autorises par les societes constructrices (telles que Nintendo, Apple ou Samsung). Les noms de marques sont mentionnes uniquement a titre informatif.
                </p>
              </div>

              <div class="print-footer-bottom">
                © ${currentYear} KIM REPARATION. TOUS DROITS RESERVES.
              </div>

            </div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.focus();
                window.print();
                window.close();
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
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
          p: { xs: 3, md: 5 },
          bgcolor: "#fff",
          borderRadius: "0px",
          border: "2px solid #1d1d1f",
          fontFamily: "monospace",
          mb: 4,
          margin: "0 auto",
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

        {/* ✅ className="avoid-break" 추가: 이 덩어리는 페이지 넘어갈 때 반갈죽 되지 않게 설정 */}
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
                  ? `${data.emailUser || ""}@${data.customDomain || ""}` // 커스텀 도메인일 때 로직
                  : `${data.emailUser || ""}${data.emailDomain || ""}` // 일반 도메인일 때 로직
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
              // ✅ 그룹 단위로 페이지 잘림 방지 (avoid-break)
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
            sx={{
              border: "2px dashed #0066cc",
              borderRadius: "12px",
              bgcolor: "#f0f8ff",
              overflow: "hidden",
            }}
          >
            {/* 서명 칸 너비를 600으로 고정하여 A4 너비를 초과하지 않도록 안전하게 설정 */}
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="#0000ff"
              canvasProps={{ width: 600, height: 160, className: "sigCanvas" }}
              onEnd={() => onUpdate({ signatureDone: true })}
            />
          </Box>
          <Button
            className="hide-on-print" // ✅ 이 클래스를 추가합니다.
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
            {/* ✅ 새로운 프린트 로직이 연결된 버튼 */}
            <Button
              fullWidth
              variant="contained"
              startIcon={<PrintIcon sx={{ color: "#fff" }} />}
              onClick={handlePrint}
              sx={{
                py: 1.8,
                borderRadius: "14px",
                bgcolor: "#0071e3",
                fontWeight: 900,
                fontSize: "1rem",
              }}
            >
              Imprimer la fiche
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
