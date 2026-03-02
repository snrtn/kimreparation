import React from "react";
import { Box, Tabs, Tab, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ScreenTabs = ({
  tabValue,
  handleTabChange,
  handlePrev,
  handleNext,
  data,
  isMobile,
  current,
  prevTitle,
  nextTitle,
}) => {
  const isSingle = data.length <= 1; // ✅ 체크용 변수
  return (
    <>
      {!isMobile ? (
        /* PC 버전 탭 */
        <Box sx={{ borderBottom: "1px solid #d2d2d7", mb: 2 }}>
          {!isSingle && (
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": { bgcolor: "#1d1d1f", height: 2 },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#86868b",
                  px: 0,
                  mr: 5,
                  minWidth: 0,
                  "&.Mui-selected": { color: "#1d1d1f" },
                },
              }}
            >
              {data.map((item, index) => (
                <Tab key={index} label={item.title} />
              ))}
            </Tabs>
          )}
        </Box>
      ) : (
        /* 모바일 상단 네비게이션 */
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
            bgcolor: "#f5f5f7",
            borderRadius: "16px",
            py: 1.6,
            px: 1,
          }}
        >
          {!isSingle && (
            <Button
              onClick={handlePrev}
              sx={{
                minWidth: "80px",
                color: "#86868b",
                display: "flex",
                flexDirection: "column",
                p: 0,
                // ✅ 첫 번째 페이지면 아예 안 보이게 처리 (공간은 차지함)
                visibility: tabValue === 0 ? "hidden" : "visible",
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: "0.75rem", mb: 0.3 }} />
              <Typography sx={{ fontSize: "0.6rem", fontWeight: 600 }}>
                {prevTitle.split(" ")[0]} {prevTitle.split(" ")[1]}
              </Typography>
            </Button>
          )}

          <Typography
            sx={{
              flex: 1,
              textAlign: "center",
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "#1d1d1f",
            }}
          >
            {current.title}
          </Typography>

          {!isSingle && (
            <Button
              onClick={handleNext}
              sx={{
                minWidth: "80px",
                color: "#86868b",
                display: "flex",
                flexDirection: "column",
                p: 0,
                // ✅ 마지막 페이지면 아예 안 보이게 처리
                visibility: tabValue === data.length - 1 ? "hidden" : "visible",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "0.75rem", mb: 0.3 }} />
              <Typography sx={{ fontSize: "0.6rem", fontWeight: 600 }}>
                {nextTitle.split(" ")[0]} {nextTitle.split(" ")[1]}
              </Typography>
            </Button>
          )}
        </Box>
      )}
    </>
  );
};

export default ScreenTabs;
