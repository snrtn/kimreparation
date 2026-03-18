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
const FactureClient = () => {
  const navigate = useNavigate();

  // 사장님이 주신 데이터에 📍 'isPaid' 상태 추가
  const factureData = {
    devisNumber: "DEV-2026-0042",
    date: "17/03/2026",
    validity: "17/04/2026",
    isPaid: true,
    // 📍 DB에서 가져올 결제 수단 (예: "PayPal", "Espèces", "Virement", "CB")
    paymentMethod: "PayPal", // 📍 false: 결제 대기 / true: 결제 완료 (도장 찍힘)
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
          "Analyse complète du système. Traces de surchauffe détectées sur la carte mère.",
        price: 15.0,
      },
      {
        title: "Remplacement joystick gauche",
        description: "Installation d'un nouveau module pour corriger le drift.",
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

  // 🛡️ 📍 보안 1: 개발자 도구 단축키 차단
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
        userSelect: "none", // 🛡️ 📍 보안 4: 전체 텍스트 드래그 및 복사 방지
        overflowX: "hidden", // 📍 모바일에서 화면 넘어가는 가로 스크롤 방지
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

      {/* 📄 실제 청구서 문서 영역 */}
      <Paper
        id="printable-facture"
        className="protected-zone"
        elevation={10}
        sx={{
          width: "800px",
          minWidth: "800px", // 📍 A4 너비 강제 고정
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
            <Typography variant="body2">
              {factureData.client.address}
            </Typography>
            <Typography variant="body2">{factureData.client.city}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Contact : {factureData.client.contact}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#1d1d1f", fontWeight: 700, mt: 1 }}
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
            sx={{ py: 6 }}
          >
            <Typography variant="h6" fontWeight="900" sx={{ letterSpacing: 1 }}>
              FACTURE N° {factureNumber}
            </Typography>
            <Typography
              sx={{
                border: "3px solid #2e7d32", // 테두리 살짝 굵게 (도장 느낌)
                color: "#2e7d32",
                fontWeight: "600", // 글씨도 굵게
                fontSize: "1.2rem",
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
              <strong>Date de facturation :</strong> {factureData.date}
            </Typography>
            <Typography variant="body2">
              <strong>Date d'échéance :</strong> {factureData.validity}
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
                  <TableCell align="right">{item.price.toFixed(2)} €</TableCell>
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

          {/* 합계 요약 */}
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
                Total TTC :
              </Typography>
              <Typography variant="h6" fontWeight="900">
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
              Net à payer
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
          {/* 📍 돈 안 내면 연체료 물린다는 협박 삭제 -> 결제 증명 멘트로 교체 */}
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            sx={{ mb: 1, fontWeight: "bold" }}
          >
            Ce document atteste du règlement intégral de la prestation.
          </Typography>

          {/* 📍 사업자 필수 정보 (이건 영수증이라도 무조건 있어야 함) */}
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
