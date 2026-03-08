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

// 💡 hasSideMenu 다시 복구해서 LayoutView랑 완벽 연동
const HeadSub = ({ onDrawerToggle, hasSideMenu }) => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const renderDynamicTitle = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const rootPath = `/${pathSegments[0] || ""}`;
    const isMobile = window.innerWidth < 1200;

    const currentDrop = dropdownData.find((m) => pathname.startsWith(m.path));
    let mainTitleText = currentDrop ? currentDrop.title : "KIM REPARATION";

    if (isMobile) {
      if (rootPath === "/screen") mainTitleText = "Écrans";
      if (rootPath === "/repair") mainTitleText = "Technique";
      if (rootPath === "/atelier") mainTitleText = "L'Atelier";
      if (rootPath === "/devis") mainTitleText = "Devis";
      if (rootPath === "/toy") mainTitleText = "Jouets";
    }

    let subTitle = "";
    // 💡 이제 URL이랑 데이터 이름이 일치하니까 꼼수 쓸 필요 없이 바로 맵핑!
    const typeKey = pathSegments[0];

    if (typeKey && sideMenuData[typeKey]) {
      const target = sideMenuData[typeKey].find(
        (item) => item.path === pathname,
      );
      if (target) {
        subTitle = target.title;
      }
    }

    const isDeepPath = Boolean(subTitle);

    if (!isMobile) {
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

    return (
      <Box
        onClick={(e) => {
          if (!isDeepPath) setAnchorEl(e.currentTarget);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          py: 0.5,
          px: 1,
          cursor: "pointer",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0.3}>
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "0.8rem" },
              fontWeight: 500,
              color: isDeepPath ? "#86868b" : "#000",
            }}
          >
            {mainTitleText}
          </Typography>

          {isDeepPath && (
            <>
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
              transition: "transform 0.2s",
            }}
          />
        )}
      </Box>
    );
  };

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
        {/* 💡 사이드 메뉴가 있는 페이지면 무조건 햄버거 노출! */}
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
