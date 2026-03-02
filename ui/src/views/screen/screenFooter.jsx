import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ScreenFooter = ({
  tabValue,
  dataLength,
  handlePrev,
  handleNext,
  prevTitle,
  nextTitle,
}) => {
  if (dataLength <= 1) return null;

  return (
    <Box sx={{ mt: 8, pt: 3, borderTop: "1px solid #d2d2d7" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 이전 버튼 영역 */}
        <Box
          sx={{
            width: "40%",
            // ✅ 1페이지(0)면 왼쪽 버튼 숨김
            visibility: tabValue === 0 ? "hidden" : "visible",
          }}
        >
          <Button
            onClick={handlePrev}
            startIcon={<ArrowBackIosNewIcon sx={{ fontSize: "0.7rem" }} />}
            sx={{
              color: "#1d1d1f",
              textTransform: "none",
              p: 0,
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Box sx={{ textAlign: "left", overflow: "hidden" }}>
              <Typography
                sx={{ fontSize: "0.55rem", color: "#86868b", fontWeight: 600 }}
              >
                PRÉCÉDENT
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {prevTitle}
              </Typography>
            </Box>
          </Button>
        </Box>

        {/* 페이지 표시 (중앙 고정) */}
        <Typography
          sx={{
            width: "20%",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#1d1d1f",
            fontWeight: 600,
          }}
        >
          {tabValue + 1}/{dataLength}
        </Typography>

        {/* 다음 버튼 영역 */}
        <Box
          sx={{
            width: "40%",
            // ✅ 마지막 페이지면 오른쪽 버튼 숨김
            visibility: tabValue === dataLength - 1 ? "hidden" : "visible",
          }}
        >
          <Button
            onClick={handleNext}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />}
            sx={{
              color: "#1d1d1f",
              textTransform: "none",
              p: 0,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Box sx={{ textAlign: "right", overflow: "hidden" }}>
              <Typography
                sx={{ fontSize: "0.55rem", color: "#86868b", fontWeight: 600 }}
              >
                SUIVANT
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {nextTitle}
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ScreenFooter;
