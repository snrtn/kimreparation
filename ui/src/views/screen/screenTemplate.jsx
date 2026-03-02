import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ScreenTabs from "./screenTabs";
import ScreenContent from "./screenContent";
import ScreenFooter from "./screenFooter";
import ScreenModal from "./screenModal"; // 새로 만들 모달 컴포넌트

const ScreenTemplate = ({ categoryTitle, mainTitle, guideData }) => {
  const [tabValue, setTabValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleTabChange = (_event, newValue) => setTabValue(newValue);
  const handlePrev = () =>
    setTabValue((p) => (p === 0 ? guideData.length - 1 : p - 1));
  const handleNext = () =>
    setTabValue((p) => (p === guideData.length - 1 ? 0 : p + 1));

  const current = guideData[tabValue];
  const prevTitle =
    guideData[tabValue === 0 ? guideData.length - 1 : tabValue - 1].title;
  const nextTitle =
    guideData[tabValue === guideData.length - 1 ? 0 : tabValue + 1].title;

  const formatDescription = (text) =>
    text.split(".").map((s, i, a) => (
      <React.Fragment key={i}>
        {s}
        {i !== a.length - 1 ? "." : ""}
        {i !== a.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 12, md: 14, xl: 16 },
        bgcolor: "#ffffff",
        color: "#1d1d1f",
      }}
    >
      <Container>
        <Box>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              mb: { xs: 0.5, md: 0 },
              color: "#0066cc",
              letterSpacing: "0.02em",
            }}
          >
            {categoryTitle}
          </Typography>
          <Typography
            sx={{
              color: { xs: "#86868b", md: "#1d1d1f" },
              fontWeight: { xs: 400, md: 800 },
              fontSize: { xs: "0.8rem", md: "2rem" },
              letterSpacing: { xs: "-0.01em", md: "-0.04em" },
              lineHeight: { xs: 1, md: 1.5 },
              mb: 4,
            }}
          >
            {mainTitle}
          </Typography>
        </Box>

        <ScreenTabs
          tabValue={tabValue}
          handleTabChange={handleTabChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          data={guideData}
          isMobile={isMobile}
          current={current}
          prevTitle={prevTitle}
          nextTitle={nextTitle}
        />

        <ScreenContent
          current={current}
          isMobile={isMobile}
          formatDescription={formatDescription}
          onCheckStock={() => navigate("/stock")}
          onScreenModel={() => setIsModalOpen(true)}
        />

        {isMobile && (
          <ScreenFooter
            tabValue={tabValue}
            dataLength={guideData.length}
            handlePrev={handlePrev}
            handleNext={handleNext}
            prevTitle={prevTitle}
            nextTitle={nextTitle}
          />
        )}

        {/* 견적 문의 모달 */}
        <ScreenModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productTitle={current.title} // 예: "Soft OLED", "LCD Incell" 등 자동 전달
          category={categoryTitle} // 예: "GUIDE IPHONE"
          current={current}
        />
      </Container>
    </Box>
  );
};

export default ScreenTemplate;
