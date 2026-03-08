import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import ScreenTabs from "./screenTabs";
import ScreenContent from "./screenContent";
import ScreenFooter from "./screenFooter";

const ScreenTemplate = ({ navData, currentData, currentIndex }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // 형님 컴포넌트용 핸들러 (경로 이동)
  const handleTabChange = (_event, newValue) =>
    navigate(navData[newValue].path);
  const handlePrev = () => {
    const p = currentIndex === 0 ? navData.length - 1 : currentIndex - 1;
    navigate(navData[p].path);
  };
  const handleNext = () => {
    const n = currentIndex === navData.length - 1 ? 0 : currentIndex + 1;
    navigate(navData[n].path);
  };

  // 형님 컴포넌트가 요구하는 텍스트 포맷팅 함수 (그대로 유지)
  const formatDescription = (text) =>
    text?.split(".").map((s, i, a) => (
      <React.Fragment key={i}>
        {s}
        {i !== a.length - 1 ? "." : ""}
        {i !== a.length - 1 && <br />}
      </React.Fragment>
    ));

  const prevTitle =
    navData[currentIndex === 0 ? navData.length - 1 : currentIndex - 1].title;
  const nextTitle =
    navData[currentIndex === navData.length - 1 ? 0 : currentIndex + 1].title;

  return (
    <Box sx={{ width: "100%", py: { xs: 12, md: 16 }, bgcolor: "#fff" }}>
      <Container>
        {/* ✅ 형님이 주신 ScreenTabs 그대로 사용 */}
        {isMobile && (
          <ScreenTabs
            tabValue={currentIndex}
            handleTabChange={handleTabChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            data={navData}
            isMobile={isMobile}
            current={currentData}
            prevTitle={prevTitle}
            nextTitle={nextTitle}
          />
        )}

        {/* ✅ 형님이 주신 ScreenContent 그대로 사용 (함수 전달 완료) */}
        <ScreenContent
          current={currentData}
          isMobile={isMobile}
          formatDescription={formatDescription}
          onScreenModel={() => navigate("/devis")}
        />

        {/* ✅ 형님이 주신 ScreenFooter 그대로 사용 */}
        {isMobile && (
          <ScreenFooter
            tabValue={currentIndex}
            dataLength={navData.length}
            handlePrev={handlePrev}
            handleNext={handleNext}
            prevTitle={prevTitle}
            nextTitle={nextTitle}
          />
        )}
      </Container>
    </Box>
  );
};

export default ScreenTemplate;
