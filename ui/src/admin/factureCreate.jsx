import React, { useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import FactureClient from "../client/factureClient"; // 📍 형님 원본 그대로 사용

const FactureCreate = ({ factureData, onClose }) => {
  useEffect(() => {
    const modal = document.getElementById("facture-create-modal");
    if (modal) modal.scrollTop = 0;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      id="facture-create-modal"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        bgcolor: "#525659",
        zIndex: 999999,
        overflowY: "auto", // 📍 내용이 길면 끝까지 스크롤 가능
        display: "block", // flex 해제하여 내부 높이가 자연스럽게 확장되게 함
      }}
    >
      <style>{`
        /* 📍 [핵심] FactureClient 내부의 버튼 박스(div.no-print)만 콕 집어서 숨기기 */
        #facture-create-modal div.no-print {
          display: none !important;
        }

        /* 📍 인쇄 시 설정: 팝업 버튼들 숨기고 영수증만 1.5배 줌으로 출력 */
        @media print {
          body * { visibility: hidden !important; }
          #facture-create-modal, #facture-create-modal * {
            visibility: visible !important;
          }
          #facture-create-modal {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
            display: block !important;
            overflow: visible !important;
          }
          #printable-facture {
            position: relative !important;
            width: 800px !important;
            margin: 0 auto !important;
            padding: 20px !important;
            box-sizing: border-box !important;
            transform: none !important;
            box-shadow: none !important;
            zoom: 1.5; 
          }
          /* 인쇄할 때는 팝업의 아이콘 버튼들도 다 숨김 */
          .no-print { display: none !important; }
        }
        @page { size: A4 portrait; margin: 0; }
      `}</style>

      {/* 🖨️ 우측 상단 프린트 버튼 */}
      <IconButton
        onClick={handlePrint}
        className="no-print"
        sx={{
          position: "fixed",
          top: 20,
          right: 90,
          bgcolor: "rgba(0,0,0,0.5)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
          zIndex: 1000000,
        }}
      >
        <PrintIcon sx={{ fontSize: 35, color: "#fff" }} />
      </IconButton>

      {/* ❌ 우측 상단 닫기 버튼 */}
      <IconButton
        onClick={onClose}
        className="no-print"
        sx={{
          position: "fixed",
          top: 20,
          right: 30,
          bgcolor: "rgba(12, 5, 5, 0.5)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
          zIndex: 1000000,
        }}
      >
        <CloseIcon sx={{ fontSize: 35, color: "#fff" }} />
      </IconButton>

      {/* 📄 영수증 컨테이너: 얼마나 길든 씨발 다 보여주는 영역 */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 10, // 바닥 여백
        }}
      >
        <FactureClient data={factureData} />
      </Box>
    </Box>
  );
};

export default FactureCreate;
