import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

// ==========================================
// 🚀 FactureClient (청구서 메인 컴포넌트)
// ==========================================

// 📍 [핵심] 데이터를 받기 위해 `({ data })` 추가!
const FactureClient = ({ data }) => {
  const navigate = useNavigate();

  // 📍 외부 데이터가 있으면 그 금액을 쓰고, 없으면 테스트용 50유로 적용
  const baseAmount = data ? data.amount : 50.0;
  const calcHT = baseAmount / 1.2; // 부가세 20% 역산 (그래야 하단 총합이 딱 맞음)

  // 사장님이 주신 데이터 구조에 외부 데이터(data) 연결
  const factureData = {
    devisNumber: data ? data.id.replace("F-", "DEV-") : "DEV-2026-0042",
    date: data ? data.date : "17/03/2026",
    dateEmission: data ? data.date : "22/04/2026",
    isPaid: true,
    paymentMethod: data ? data.method : "PayPal",
    company: {
      name: "KIM REPARATION",
      address: "123 Rue de la Réparation",
      city: "Beaumetz-lès-Loges",
      siret: "SIRET : 123 456 789 00012",
      phone: "06 00 00 00 00",
      email: "contact@kimreparation.fr",
    },
    client: {
      name: data ? data.client : "Jean Dupont",
      address: "456 Avenue des Champs",
      city: "Arras",
      contact: data ? data.contact : "07 11 22 33 44",
      toyName: "Nintendo Switch (Modèle OLED)",
    },
    // 리스트에서 넘어올 땐 세부 항목이 없으므로 '수리비 총합'으로 하나만 띄움
    items: data
      ? [
          {
            title: "Prestation de réparation",
            description: "Détails selon le livre des recettes.",
            price: calcHT,
          },
        ]
      : [
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
          {
            title: "Diagnostic complet",
            description:
              "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
            price: 15.0,
          },
          {
            title: "Remplacement joystick gauche",
            description:
              "Installation d'un nouveau module pour corriger le drift.",
            price: 35.0,
          },
        ],
  };

  // 견적서 번호(DEV)를 청구서 번호(FAC)로 변환
  const factureNumber = factureData.devisNumber.replace("DEV", "FAC");

  // 계산 로직
  const totalHT = factureData.items.reduce((acc, i) => acc + i.price, 0);
  const totalTVA = totalHT * 0.2; // 부가세 20%
  const totalTTC = totalHT + totalTVA;

  const handlePrint = () => {
    window.print();
  };

  // 🛡️ 📍 보안 1: 개발자 도구 단축키 차단 (원본 유지)
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

  // 🛡️ 📍 보안 2: 문서 위변조 (DOM 수정) 완벽 감지 (원본 유지)
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024 || navigator.maxTouchPoints > 0;
    if (isMobile) {
      return;
    }
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
      // 🛡️ 📍 보안 3: 오른쪽 클릭(우클릭) 완벽 방지
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
        overflowX: "hidden",
        "@media print": { backgroundColor: "#fff", py: 0 },
      }}
    >
      <style>{`
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          body { background: white !important; margin: 0 !important; padding: 0 !important; }
          #printable-facture { 
            width: 100% !important; margin: 0 !important; padding: 15mm !important; 
            box-shadow: none !important; border: none !important; transform: none !important; 
          }
        }
      `}</style>

      {/* 상단 액션 버튼 */}
      <Box
        className="no-print"
        sx={{
          width: { xs: "90%", md: "800px" },
          mb: 2,
          display: "flex",
          justifyContent: data ? "flex-end" : "space-between", // 📍 팝업일 땐 Retour 숨김
        }}
      >
        {!data && (
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ bgcolor: "#fff", color: "#333" }}
          >
            Retour
          </Button>
        )}
        {factureData.isPaid && (
          <Button
            variant="contained"
            startIcon={<PrintIcon sx={{ color: "#fff" }} />}
            onClick={handlePrint}
            sx={{ bgcolor: "#1976d2", fontWeight: 900 }}
          >
            Imprimer Facture
          </Button>
        )}
      </Box>

      {/* 📄 실제 청구서 문서 영역 (여기부터 아래는 형님 원본 100% 유지) */}
      <Paper
        id="printable-facture"
        className="protected-zone"
        elevation={10}
        sx={{
          width: "800px",
          minWidth: "800px",
          minHeight: "1131px",
          p: "50px",
          bgcolor: "#ffffff",
          transform: { xs: "scale(0.42)", sm: "scale(0.7)", md: "none" },
          transformOrigin: "top center",
          mb: { xs: "-650px", sm: "-340px", md: 0 },
        }}
      >
        {/* 1. 헤더 (회사 및 고객 정보) */}
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
          <Box>
            <Typography
              variant="h4"
              fontWeight="900"
              sx={{ color: "#1d1d1f", mb: 1 }}
            >
              {factureData.company.name}
            </Typography>
            <Typography variant="body2">
              {factureData.company.address}
            </Typography>
            <Typography variant="body2">{factureData.company.city}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {factureData.company.siret}
            </Typography>
            <Typography variant="body2">
              Tél : {factureData.company.phone}
            </Typography>
            <Typography variant="body2">
              E-mail : {factureData.company.email}
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
              Facturé à :
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {factureData.client.name}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Contact : {factureData.client.contact}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#1976d2", fontWeight: 700, mt: 1 }}
            >
              Appareil : {factureData.client.toyName}
            </Typography>
          </Box>
        </Stack>

        {/* 2. 청구서 제목 및 날짜 정보 */}
        <Box sx={{ borderBottom: "2px solid #1d1d1f", pb: 2, mb: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 2 }}
          >
            <Typography variant="h6" fontWeight="900" sx={{ letterSpacing: 1 }}>
              FACTURE N° {factureNumber}
            </Typography>
            <Typography
              sx={{
                border: "3px solid #4caf50",
                color: "#4caf50",
                fontWeight: "600",
                fontSize: "0.9rem",
                px: 2,
                py: 0.5,
                borderRadius: "6px",
                transform: "rotate(-5deg)",
                whiteSpace: "nowrap",
                flexShrink: 0,
                mr: 2,
              }}
            >
              {factureData.paymentMethod
                ? `PAYÉE PAR ${factureData.paymentMethod.toUpperCase()}`
                : "PAYÉE"}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
            <Typography variant="body2">
              <strong>Date d'émission :</strong> {factureData.dateEmission}
            </Typography>
          </Stack>
        </Box>

        {/* 3. 항목 리스트 (테이블 형식) */}
        <TableContainer sx={{ mb: 4 }}>
          <Table sx={{ border: "1px solid #ddd" }}>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
                <TableCell align="center" sx={{ width: "80px" }}>
                  <strong>Qté</strong>
                </TableCell>
                <TableCell align="right" sx={{ width: "120px" }}>
                  <strong>Prix Unit. HT</strong>
                </TableCell>
                <TableCell align="right" sx={{ width: "120px" }}>
                  <strong>Total HT</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {factureData.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.description}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="right">{item.price.toFixed(2)} €</TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "#1976d2", fontWeight: "900" }}
                  >
                    {item.price.toFixed(2)} €
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 4. 합계 금액 및 결제 정보 */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ mt: 4 }}
        >
          <Box
            sx={{
              width: "45%",
            }}
          ></Box>

          <Box sx={{ width: "300px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography variant="body1">Total HT :</Typography>
              <Typography variant="body1" fontWeight="bold">
                {totalHT.toFixed(2)} €
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography variant="body1">TVA (20%) :</Typography>
              <Typography variant="body1">{totalTVA.toFixed(2)} €</Typography>
            </Stack>
            <Divider sx={{ my: 1, borderColor: "#000" }} />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" fontWeight="900">
                Total Payé TTC :
              </Typography>
              <Typography
                variant="h6"
                fontWeight="900"
                sx={{ color: "#1976d2" }}
              >
                {totalTTC.toFixed(2)} €
              </Typography>
            </Stack>
            <Typography
              variant="caption"
              display="block"
              textAlign="right"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              ✔ Règlement effectué
            </Typography>
          </Box>
        </Stack>

        {/* 5. 하단 법적 고지 (결제 완료 영수증 전용) */}
        <Box
          sx={{
            mt: 10,
            pt: 2,
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            sx={{ mb: 1, fontWeight: "bold" }}
          >
            Ce document atteste du règlement intégral de la prestation.
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            {factureData.company.name} - {factureData.company.siret} - Dispensé
            d'immatriculation au RCS.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default FactureClient;
