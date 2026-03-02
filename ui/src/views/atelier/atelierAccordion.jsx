import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AtelierAccordion = ({ items }) => (
  <Box sx={{ mb: 8 }}>
    <Box sx={{ borderTop: "1.5px solid #1d1d1f" }}>
      {items.map((item, idx) => {
        const isWarning = item.q.includes("⚠️");
        const isRepair = item.q.includes("🔧"); // 🔧 수리 아이콘 체크

        return (
          <Accordion
            key={idx}
            elevation={0}
            disableGutters
            sx={{
              borderBottom: "1px solid #e5e5e7",
              "&:before": { display: "none" },
              backgroundColor: "#ffffff", // 배경은 무조건 흰색
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: "1rem" }} />}
              sx={{ px: 0 }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  // 1. 🔧 있으면 파란색(#007AFF)
                  // 2. ⚠️ 있으면 빨간색(#d32f2f)
                  // 3. 둘 다 없으면 기본 검정(#1d1d1f)
                  color: isRepair
                    ? "#007AFF"
                    : isWarning
                      ? "#e57373"
                      : "#1d1d1f",
                  fontWeight: isRepair || isWarning ? 700 : 500,
                }}
              >
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ bgcolor: "#fbfbfd", px: 2, py: 2, borderRadius: "8px" }}
            >
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#424245",
                  whiteSpace: "pre-line",
                  lineHeight: 1.6,
                }}
              >
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  </Box>
);

export default AtelierAccordion;
