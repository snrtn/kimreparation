import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline, Container, Drawer } from "@mui/material";

import HeadMain from "@components/navigation/headMain";
import HeadSub from "@components/navigation/headSub";
import FooterMain from "@components/navigation/footerMain";
import FooterSub from "../components/navigation/footerSub";

import Sidemenu from "@components/navigation/sidemenu";
import sidemenuData from "@components/navigation/sidemenu.data";

const LayoutView = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const isHome = pathname === "/";

  const isToyPage = pathname.startsWith("/toy");

  const hasSideMenu =
    pathname.startsWith("/screen") ||
    pathname.startsWith("/repair") ||
    pathname.startsWith("/devis") ||
    pathname.startsWith("/atelier") ||
    pathname.startsWith("/toy") ||
    pathname.startsWith("/client");

  const getGuideType = () => {
    if (pathname.startsWith("/screen")) return "screen";
    if (pathname.startsWith("/repair")) return "repair";
    if (pathname.startsWith("/devis")) return "devis";
    if (pathname.startsWith("/atelier")) return "atelier";
    if (pathname.startsWith("/toy")) return "toy";
    if (pathname.startsWith("/client")) return "client";
    return "";
  };

  const guideType = getGuideType();
  const currentMenu = sidemenuData[guideType] || [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {/* 헤더 출력 로직 */}
      {isHome ? (
        <HeadMain isHome={isHome} />
      ) : (
        <HeadSub
          onDrawerToggle={handleDrawerToggle}
          hasSideMenu={hasSideMenu}
        />
      )}

      <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
        {/* 모바일용 사이드바 Drawer */}
        {hasSideMenu && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: 300, md: 400 },
                zIndex: 100,
              },
            }}
          >
            <Sidemenu
              menuData={currentMenu}
              onDrawerToggle={handleDrawerToggle}
            />
          </Drawer>
        )}

        {/* PC용 고정 사이드바 */}
        {hasSideMenu && (
          <Box
            component="nav"
            sx={{
              width: 260,
              flexShrink: 0,
              display: { xs: "none", lg: "block" },
              borderRight: "1px solid #eee",
              bgcolor: "#fcfcfc",
              position: "fixed",
              top: "64px",
              height: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <Sidemenu menuData={currentMenu} />
          </Box>
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            ml: hasSideMenu ? { xs: 0, lg: "280px" } : 0,
            minHeight: "calc(100vh - 64px)",
            bgcolor: "#fff",
          }}
        >
          <Container
            maxWidth={hasSideMenu ? false : "lg"}
            sx={{
              px: { xs: 1, md: 4 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* {isHome ? (
              <Box
                // ✅ 에러 원인 해결: 이 자리에 있던 isHome={isHome} 코드를 삭제했습니다!
                component="img"
                src="/assets/hero.png"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%", // 섹션 가로 꽉 채움
                  height: "740px", // 섹션 세로 꽉 채움
                  objectFit: "cover", // 비율 유지하며 꽉 채우기
                  zIndex: 1, // 글자보다 아래
                  backgroundSize: "cover",
                  display: { xs: "none", md: "block" },
                }}
              />
            ) : (
              <></>
            )} */}

            <Outlet />

            {!isHome && !isToyPage && <FooterSub />}
          </Container>
        </Box>
      </Box>

      {isHome && <FooterMain />}
    </Box>
  );
};

export default LayoutView;
