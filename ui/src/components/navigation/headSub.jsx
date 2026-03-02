import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// components
import DropDown from "./dropdown";

// datas
import dropdownData from "./dropdown.data";
import sideMenuData from "./sidemenu.data";

const HeadSub = ({ onDrawerToggle, hasSideMenu }) => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // ... 상단 생략

  const renderDynamicTitle = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const isScreen = pathname.startsWith("/screen");
    const isRepair = pathname.startsWith("/repair");
    const isLocation = pathname.startsWith("/atelier");
    const isMobile = window.innerWidth < 1200;

    let mainTitleText = isRepair ? "Dépannage" : "Écrans";
    if (isLocation) mainTitleText = "L'Atelier";
    if (isMobile && isScreen) mainTitleText = "Écran";

    const middleTitle = pathSegments[1]
      ? pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1)
      : "";

    let subTitle = "";
    const typeKey = isScreen ? "screen" : isRepair ? "repair" : null;

    if (typeKey && sideMenuData[typeKey]) {
      const allItems = sideMenuData[typeKey].flatMap(
        (group) => group.children || [group],
      );
      const target = allItems.find((item) => item.path === pathname);
      if (target) {
        subTitle = target.title.split("/")[0].trim();
      }
    }

    // ✅ 1. 여기에 Atelier용 서브타이틀 로직 추가
    if (isLocation) {
      if (pathname.includes("atelierDomicile")) subTitle = "Déplacement";
      if (pathname.includes("atelierWarranty")) subTitle = "Engagement";
      if (pathname.includes("atelierHoraires")) subTitle = "Horaires & Infos";
      if (pathSegments.length === 1) subTitle = "L'Atelier";
    }

    // 기본값 iPhone 처리
    if (isScreen && pathSegments.length === 2 && !subTitle) subTitle = "iPhone";

    // ✅ 수정: repair의 첫 번째 항목(/repair)인 경우에도 subTitle이 있으면 DeepPath로 인정
    const isDeepPath =
      subTitle !== "" && (pathSegments.length >= 2 || isRepair || isLocation);

    if (!isMobile) {
      // 데스크탑 로직 (사장님 요청 유지: 화살표 X, 드롭다운 O)
      return (
        <Box
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            py: 0.5,
            px: 1,
            borderRadius: "12px",
            "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
          }}
        >
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
            {mainTitleText}
          </Typography>
          <ExpandMoreIcon
            sx={{
              ml: 0.3,
              fontSize: "1.1rem",
              color: "#666",
              transform: open ? "rotate(180deg)" : "none",
              transition: "0.2s",
            }}
          />
        </Box>
      );
    }

    // 모바일 로직 (회색 계층 + 검정 굵게 + 화살표 보강)
    return (
      <Box
        onClick={(e) => {
          if (!isDeepPath) setAnchorEl(e.currentTarget);
        }}
        sx={{ display: "flex", alignItems: "center", py: 0.5, px: 1 }}
      >
        <Stack direction="row" alignItems="center" spacing={0.3}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: isDeepPath ? "#86868b" : "#000",
            }}
          >
            {mainTitleText}
          </Typography>
          {isDeepPath && (
            <>
              {isScreen && middleTitle && (
                <>
                  <ChevronRightIcon
                    sx={{ fontSize: "0.8rem", color: "#ccc" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "#86868b",
                      fontWeight: 500,
                    }}
                  >
                    {middleTitle}
                  </Typography>
                </>
              )}
              <ChevronRightIcon sx={{ fontSize: "0.8rem", color: "#ccc" }} />
              <Typography
                sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#000" }}
              >
                {subTitle}
              </Typography>
            </>
          )}
        </Stack>
        {!isDeepPath && (
          <ExpandMoreIcon
            sx={{
              ml: 0.3,
              fontSize: "1rem",
              color: "#666",
              transform: open ? "rotate(180deg)" : "none",
            }}
          />
        )}
      </Box>
    );
  };

  // const dropdownMenus = dropdownData.filter(
  //   (m) => !pathname.startsWith(m.path),
  // );
  const dropdownMenus = dropdownData;

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
        backdropFilter: "blur(10px)",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ height: "64px", minHeight: "64px !important" }}>
        {hasSideMenu && (
          <IconButton
            color="inherit"
            onClick={onDrawerToggle}
            sx={{ mr: 1, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", mr: { xs: 0, md: 2 } }}
        >
          <img
            src="/assets/logo_removeBg.png"
            alt="KIM REPARATION"
            style={{ height: "52px", width: "auto", display: "block" }}
          />
        </Box>
        {renderDynamicTitle()}
        <DropDown
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          menus={dropdownMenus}
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeadSub;
