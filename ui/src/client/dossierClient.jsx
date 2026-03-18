/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Divider,
  Grid,
  TextField,
  Avatar,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build"; //
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";

// ==========================================
// 🧩 1. DevisHeader (보안 구역 적용)
// ==========================================
const DevisHeader = ({ devisData }) => (
  <Box className="protected-zone" sx={{ mb: 6 }}>
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
      <Box>
        <Typography
          variant="h4"
          fontWeight="900"
          sx={{ color: "#1976d2", mb: 1 }}
        >
          {devisData.company.name}
        </Typography>
        <Typography variant="body2">{devisData.company.address}</Typography>
        <Typography variant="body2">{devisData.company.city}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {devisData.company.siret}
        </Typography>
        <Typography variant="body2">Tél : {devisData.company.phone}</Typography>
        <Typography variant="body2">
          E-mail : {devisData.company.email}
        </Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "280px",
          bgcolor: "#f9f9f9",
        }}
      >
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
          Dossier Client :
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {devisData.client.name}
        </Typography>
        <Typography variant="body2">{devisData.client.address}</Typography>
        <Typography variant="body2">{devisData.client.city}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Contact : {devisData.client.contact}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#1976d2", fontWeight: 700, mt: 1 }}
        >
          Appareil : {devisData.client.toyName}
        </Typography>
      </Box>
    </Stack>
    <Box sx={{ borderBottom: "2px solid #1976d2", pb: 2 }}>
      <Typography
        variant="h6"
        fontWeight="900"
        sx={{ letterSpacing: 1, mb: 1 }}
      >
        RAPPORT DE DIAGNOSTIC & DEVIS N° {devisData.devisNumber}
        <span style={{ color: "#ff9800", marginLeft: "10px" }}>
          [{devisData.version}]
        </span>
      </Typography>
      <Stack direction="row" spacing={4}>
        <Typography variant="body3">
          <strong>Émis le :</strong> {devisData.date}
        </Typography>
        <Typography variant="body3">
          <strong>Valable jusqu'au :</strong> {devisData.validity}
        </Typography>
      </Stack>
    </Box>
  </Box>
);

// ==========================================
// 🧩 2. DevisItems (보안 구역 적용)
// ==========================================
const DevisItems = ({ items, onImageClick }) => (
  <Stack className="protected-zone" spacing={4} sx={{ mb: 6 }}>
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          pageBreakInside: "avoid",
          breakInside: "avoid",
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          p: 3,
          bgcolor: "#fafafa",
          mb: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#1d1d1f" }}>
            {index + 1}. {item.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {item.previousPrice !== undefined && (
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "line-through" }}
              >
                {item.previousPrice.toFixed(2)} €
              </Typography>
            )}
            <Typography
              variant="h6"
              fontWeight="900"
              sx={{ color: item.price === 0 ? "#2e7d32" : "#1976d2" }}
            >
              {item.price === 0 ? "GRATUIT" : `${item.price.toFixed(2)} € HT`}
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          sx={{ color: "#424245", mb: 2, lineHeight: 1.6 }}
        >
          {item.description}
        </Typography>

        {item.photos && item.photos.length > 0 && (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {item.photos.map((photoUrl, photoIdx) => (
              <Grid item xs={6} sm={4} key={photoIdx}>
                <Box
                  onClick={() => onImageClick(item.photos, photoIdx)}
                  sx={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                    overflow: "hidden",
                    bgcolor: "#eee",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                >
                  <Box
                    component="img"
                    src={photoUrl}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        {(item.modifiedFromVersion || item.helperText) && (
          <Paper
            elevation={0}
            sx={{
              p: 1.5,
              mt: 2,
              bgcolor: "#fff3e0",
              borderLeft: "4px solid #ff9800",
            }}
          >
            {item.modifiedFromVersion && (
              <Typography
                variant="body2"
                sx={{ color: "#e65100", fontWeight: 700 }}
              >
                Modifié depuis la version {item.modifiedFromVersion}
              </Typography>
            )}
            {item.helperText && (
              <Typography variant="body2">{item.helperText}</Typography>
            )}
          </Paper>
        )}
      </Box>
    ))}
  </Stack>
);

// ==========================================
// 🧩 3. DevisFooter (합계 금액 부분만 보안 구역 적용)
// ==========================================
const DevisFooter = ({
  totalHT,
  totalTVA,
  totalTTC,
  devisData,
  sigCanvas,
  signatureData,
  approvedTime,
  onApprove,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSave = () => {
    if (sigCanvas.current.isEmpty())
      return alert("Veuillez signer le document.");
    const canvas = sigCanvas.current.getCanvas();
    const dataUrl = canvas.toDataURL("image/png");
    const now = new Date();
    const timestamp = `${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
    onApprove(dataUrl, timestamp);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 6 }}>
        <Box
          className="protected-zone"
          sx={{
            width: "350px",
            p: 3,
            bgcolor: "#f5f5f5",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1.5 }}
          >
            <Typography variant="body1">Total HT :</Typography>
            <Typography variant="body1" fontWeight="bold">
              {totalHT.toFixed(2)} €
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1.5 }}
          >
            <Typography variant="body1">TVA (20%) :</Typography>
            <Typography variant="body1">{totalTVA.toFixed(2)} €</Typography>
          </Stack>
          <Divider sx={{ my: 2, borderColor: "#000" }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" fontWeight="900" color="#1976d2">
              Total TTC :
            </Typography>
            <Typography variant="h5" fontWeight="900" color="#1976d2">
              {totalTTC.toFixed(2)} €
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* 서명 영역 */}
      <Box sx={{ pt: 4, borderTop: "2px dashed #ccc", mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Validation et Accord du Client
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Signé électroniquement le :
            </Typography>
            <Typography sx={{ color: "#1976d2", fontWeight: 900 }}>
              {new Date().toLocaleDateString("fr-FR")}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            {!signatureData ? (
              <Box className="no-print">
                <Box
                  sx={{
                    border: "2px dashed #1976d2",
                    borderRadius: "8px",
                    bgcolor: "#f0f8ff",
                    mb: 1,
                  }}
                >
                  <SignatureCanvas
                    ref={sigCanvas}
                    penColor="#0000ff"
                    canvasProps={{
                      width: 300,
                      height: 120,
                      className: "sigCanvas",
                    }}
                    onEnd={() => setIsDrawing(true)}
                  />
                </Box>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Button
                    size="small"
                    color="error"
                    onClick={() => {
                      sigCanvas.current.clear();
                      setIsDrawing(false);
                    }}
                  >
                    Effacer
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    disabled={!isDrawing}
                    onClick={handleSave}
                  >
                    Valider
                  </Button>
                </Stack>
              </Box>
            ) : (
              <Box>
                <Box
                  sx={{
                    width: "300px",
                    height: "120px",
                    border: "2px solid #1976d2",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#fff",
                  }}
                >
                  <img
                    src={signatureData}
                    alt="Signature"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Box>
                <Typography
                  variant="caption"
                  color="success.main"
                  sx={{ fontWeight: "900", mt: 1, display: "block" }}
                >
                  ✓ Approuvé le {approvedTime}
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

// ==========================================
// 🧩 4. DevisChat
// ==========================================
const DevisChat = ({ devisData, comments, onAddComment }) => {
  const [msg, setMsg] = useState("");
  return (
    <Box sx={{ mt: 6, pt: 4, borderTop: "2px solid #1976d2" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>
        💬 Historique des échanges
      </Typography>

      <Paper
        className="no-print"
        elevation={0}
        sx={{
          p: 1.5,
          mb: 4,
          bgcolor: "#e3f2fd",
          borderLeft: "4px solid #1976d2",
          borderRadius: "4px",
        }}
      >
        <Stack direction="row" alignItems="flex-start" spacing={1}>
          <InfoIcon sx={{ color: "#1976d2", fontSize: "1.2rem", mt: 0.2 }} />
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "#0d47a1", fontWeight: 700 }}
            >
              Nous faisons de notre mieux pour répondre rapidement.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#0d47a1",
                display: "block",
                mt: 0.5,
                lineHeight: 1.6,
              }}
            >
              • Pour voir notre réponse, veuillez <b>rafraîchir la page</b>{" "}
              après 30 minutes.
              <br />
              • Toujours pas de réponse ? Il se peut que nous soyons très
              occupés par les réparations.
              <br />• Merci de patienter et de rafraîchir la page d'ici 30
              minutes.
            </Typography>
          </Box>
        </Stack>
      </Paper>
      <Stack spacing={3}>
        {comments.map((c) => (
          <Stack
            key={c.id}
            direction={c.isClient ? "row-reverse" : "row"}
            alignItems="flex-start"
            spacing={1.5}
          >
            <Avatar
              sx={{
                bgcolor: c.isClient ? "#1976d2" : "#e0e0e0",
                width: 35,
                height: 35,
                WebkitPrintColorAdjust: "exact",
                printColorAdjust: "exact",
              }}
            >
              {c.isClient ? (
                <PersonIcon fontSize="small" sx={{ color: "#fff" }} />
              ) : (
                <BuildIcon fontSize="small" />
              )}
            </Avatar>
            <Box sx={{ maxWidth: "75%" }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: c.isClient ? "right" : "left",
                  mb: 0.5,
                  fontWeight: 600,
                }}
              >
                {c.author} {c.isClient ? "(vous)" : ""} • {c.date} à {c.time}
              </Typography>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  bgcolor: c.isClient ? "#1976d2" : "#f5f5f5",
                  "@media print": {
                    bgcolor: "transparent",
                    border: "1px solid",
                    borderColor: c.isClient ? "#1976d2" : "#ccc",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: c.isClient ? "#fff" : "#000",
                    "@media print": { color: "#000" },
                  }}
                >
                  {c.text}
                </Typography>
              </Box>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Box
        className="no-print"
        sx={{
          mt: 4,
          p: 2,
          bgcolor: "#f9f9fb",
          borderRadius: "12px",
          border: "1px solid #ddd",
        }}
      >
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            size="small"
            placeholder="Message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onAddComment(msg);
                setMsg("");
              }
            }}
            sx={{ input: { userSelect: "text" } }} // 채팅은 드래그 허용
          />
          <Button
            variant="contained"
            onClick={() => {
              onAddComment(msg);
              setMsg("");
            }}
          >
            <SendIcon fontSize="small" sx={{ color: "#fff" }} />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

// ==========================================
// 🚀 5. DossierClient (Main)
// ==========================================
const DossierClient = () => {
  const navigate = useNavigate();
  const sigCanvas = useRef(null);

  const [signatureData, setSignatureData] = useState(null);
  const [approvedTime, setApprovedTime] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const [comments, setComments] = useState([
    {
      id: 1,
      isClient: false,
      author: "Kim Reparation",
      text: "Bonjour, n'hésitez pas si vous avez des questions !",
      date: "17/03/2026",
      time: "10:00",
    },
  ]);

  const devisData = {
    devisNumber: "DEV-2026-0042",
    version: "v3",
    date: "17/03/2026",
    validity: "17/04/2026",
    company: {
      name: "KIM REPARATION",
      address: "123 Rue de la Réparation",
      city: "Beaumetz-lès-Loges",
      siret: "SIRET : 123 456 789 00012",
      phone: "06 00 00 00 00",
      email: "contact@kimreparation.fr",
    },
    client: {
      name: "Jean Dupont",
      address: "456 Avenue des Champs",
      city: "Arras",
      contact: "07 11 22 33 44",
      toyName: "Nintendo Switch (Modèle OLED)",
    },
    items: [
      {
        title: "Diagnostic complet",
        description:
          "Analyse complète du system. Traces de surchauffe détectées sur la carte mère.",
        photos: [
          "https://images.unsplash.com/photo-1592659762303-90081d34b277",
          "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
        ],
        price: 15.0,
      },
      {
        title: "Remplacement joystick gauche",
        description: "Installation d'un nouveau module pour corriger le drift.",
        photos: [
          "https://images.unsplash.com/photo-1592659762303-90081d34b277",
          "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
        ],
        price: 35.0,
        previousPrice: 25.0,
        modifiedFromVersion: "v1",
        helperText:
          "Ajustement du prix suite à l'utilisation de pièces premium.",
      },
    ],
  };

  const totalHT = devisData.items.reduce((acc, i) => acc + i.price, 0);
  const totalTVA = totalHT * 0.2;
  const totalTTC = totalHT + totalTVA;

  const handleApprove = (sig, time) => {
    setSignatureData(sig);
    setApprovedTime(time);
    setOpenModal(true);
  };
  const handleAddComment = (text) => {
    if (!text.trim()) return;
    const now = new Date();
    setComments((prev) => [
      ...prev,
      {
        id: now.getTime(),
        isClient: true,
        author: devisData.client.name,
        text,
        date: now.toLocaleDateString("fr-FR"),
        time: now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenGallery = (photos, idx) => {
    setGalleryImages(photos);
    setCurrentImgIdx(idx);
    setGalleryOpen(true);
  };
  const handlePrevImg = () =>
    setCurrentImgIdx((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  const handleNextImg = () =>
    setCurrentImgIdx((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        alert(
          "🔒 Sécurité : L'accès aux outils de développement est interdit.",
        );
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 🛡️ 📍 보안 2: 문서 위변조 (DOM 수정) 완벽 감지
  // [최종 수정] 모바일 브라우저의 오지랖(자동 링크 등) 충돌 방지를 위해 모바일에서는 감시를 끕니다.
  useEffect(() => {
    // 📍 1. 현재 접속한 기기가 모바일(터치 기기)이거나 화면이 좁은지 확인합니다.
    const isMobile = window.innerWidth <= 1024 || navigator.maxTouchPoints > 0;

    // 📍 2. 모바일 기기라면 F12(개발자 도구) 조작이 불가능하므로, 감시자를 실행하지 않고 퇴근시킵니다!
    if (isMobile) {
      return;
    }

    // 📍 3. PC(데스크탑)에서만 아래의 철통 보안 감시가 돌아갑니다.
    // 👉 여기에 있던 mutations 단어를 지워서 에러를 없앴습니다!
    const observer = new MutationObserver(() => {
      alert("🚨 Sécurité : Tentative de modification du document détectée !");
      window.location.reload();
    });

    const config = {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: true,
    };

    const protectedZones = document.querySelectorAll(".protected-zone");

    protectedZones.forEach((zone) => {
      observer.observe(zone, config);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      onContextMenu={(e) => {
        e.preventDefault();
        alert("🔒 Sécurité : Clic droit désactivé.");
      }}
      sx={{
        backgroundColor: "#525659",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 20,
        userSelect: "none",
        overflowX: "hidden", // 📍 [추가] 모바일에서 800px DOM 영역 때문에 좌우 텅 빈 스크롤 생기는 것 방지
        "@media print": { backgroundColor: "#fff", py: 0 },
      }}
    >
      <style>{`
        @media print {
          header, nav, footer, .MuiAppBar-root, .MuiDrawer-root, .no-print, .MuiDialog-root { display: none !important; }
          body { background: white !important; margin: 0 !important; padding: 0 !important; }
          #printable-paper { width: 100% !important; margin: 0 !important; padding: 15mm !important; box-shadow: none !important; border: none !important; transform: none !important; }
          .MuiBox-root { page-break-inside: avoid; break-inside: avoid; }
        }
      `}</style>

      <Box
        className="no-print"
        sx={{
          width: { xs: "90%", md: "800px" }, // 버튼 박스도 반응형 조절
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ bgcolor: "#fff", color: "#333" }}
        >
          Retour
        </Button>
        {signatureData && (
          <Button
            variant="contained"
            startIcon={<PrintIcon sx={{ color: "#fff" }} />}
            onClick={handlePrint}
            sx={{ bgcolor: "#1976d2", fontWeight: 900 }}
          >
            Imprimer / PDF
          </Button>
        )}
      </Box>

      {/* 📄 실제 문서 영역 */}
      <Paper
        id="printable-paper"
        elevation={10}
        sx={{
          width: "800px",
          minWidth: "800px", // 📍 A4 너비 강제 고정
          minHeight: "1131px",
          p: "50px",
          bgcolor: "#ffffff",
          // 📍 [핵심] 모바일/태블릿에서 PDF 전체 보기처럼 비율을 확 축소시킴
          transform: { xs: "scale(0.42)", sm: "scale(0.7)", md: "none" },
          transformOrigin: "top center",
          // 📍 축소되면서 남는 하단 빈 공간을 위로 당겨서 없앰
          mb: { xs: "-650px", sm: "-340px", md: 0 },
        }}
      >
        <DevisHeader devisData={devisData} />
        <DevisItems items={devisData.items} onImageClick={handleOpenGallery} />
        <DevisFooter
          totalHT={totalHT}
          totalTVA={totalTVA}
          totalTTC={totalTTC}
          devisData={devisData}
          sigCanvas={sigCanvas}
          signatureData={signatureData}
          approvedTime={approvedTime}
          onApprove={handleApprove}
        />
        <DevisChat
          devisData={devisData}
          comments={comments}
          onAddComment={handleAddComment}
        />

        <Box
          className="protected-zone"
          sx={{
            textAlign: "center",
            borderTop: "1px solid #eee",
            pt: 2,
            mt: 5,
          }}
        >
          <Typography variant="caption" color="text.secondary" display="block">
            Conditions de paiement : Paiement à réception de facture.
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            Kim Reparation - {devisData.company.siret} - Dispensé
            d'immatriculation au RCS.
          </Typography>
        </Box>
      </Paper>

      {/* 🖼️ 이미지 확대 갤러리 모달 */}
      <Dialog
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: { bgcolor: "transparent", boxShadow: "none", overflow: "hidden" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <IconButton
            onClick={() => setGalleryOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          {galleryImages.length > 1 && (
            <IconButton
              onClick={handlePrevImg}
              sx={{
                position: "absolute",
                left: 16,
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 40, color: "#ffffff" }} />
            </IconButton>
          )}
          <Box
            component="img"
            src={galleryImages[currentImgIdx]}
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          />
          {galleryImages.length > 1 && (
            <IconButton
              onClick={handleNextImg}
              sx={{
                position: "absolute",
                right: 16,
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40, color: "#ffffff" }} />
            </IconButton>
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              color: "#ffffff",
              bgcolor: "rgba(0,0,0,0.5)",
              px: 2,
              py: 0.5,
              borderRadius: "16px",
              fontWeight: "bold",
            }}
          >
            {currentImgIdx + 1} / {galleryImages.length}
          </Box>
        </Box>
      </Dialog>

      {/* 🏆 승인 완료 모달창 */}
      <Dialog
        open={openModal}
        maxWidth="xs"
        fullWidth
        className="no-print"
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#1565c0",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Document Validé !
          </Typography>
          <IconButton onClick={() => setOpenModal(false)}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4, textAlign: "center" }}>
          <Typography sx={{ my: 4, fontWeight: 600 }}>
            Le document est maintenant prêt. Cliquez sur le bouton ci-dessous
            pour l'imprimer ou l'enregistrer en PDF.
          </Typography>
          <Stack spacing={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={handlePrint}
              startIcon={<PrintIcon sx={{ color: "#fff" }} />}
              sx={{
                bgcolor: "#0071e3",
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 900,
              }}
            >
              Imprimer / PDF
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenModal(false)}
              sx={{ py: 1.5, borderRadius: "12px" }}
            >
              Fermer
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DossierClient;
