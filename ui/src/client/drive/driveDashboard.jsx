import React, { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Dialog,
  Slide,
  Drawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrive from "./menuDrive";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

// ... 상단 import 동일

const DriveDashboard = () => {
  const { repairId, itemId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const devisItems = [
    {
      client: {
        name: "Jean Dupont",
        address: "456 Avenue des Champs",
        city: "Arras",
        contact: "07 11 22 33 44",
        toyName: "Nintendo Switch (Modèle OLED)",
      },
      title: "Diagnostic complet",
      photos: [
        "https://images.unsplash.com/photo-1592659762303-90081d34b277",
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
        "https://images.unsplash.com/photo-1592659762303-90081d34b277",
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
        "https://images.unsplash.com/photo-1592659762303-90081d34b277",
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
      ],
    },
    {
      title: "Remplacement joystick gauche",
      photos: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f"],
    },
  ];

  // 📍 [수정] 거추장스러운 수식어 다 빼고 알맹이 이름만 반환
  const getHeaderTitle = () => {
    // 1. 문서 페이지일 때
    if (pathname.includes("/docs")) return "Documents";

    // 2. 사진 폴더 페이지일 때 (배열에서 제목만 추출)
    if (pathname.includes("/imgs") && itemId !== undefined) {
      const currentFolder = devisItems[itemId];
      return currentFolder ? currentFolder.title : "";
    }

    return;
  };

  return (
    <Dialog
      fullScreen
      open={true}
      TransitionComponent={Transition}
      sx={{ zIndex: 1200 }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#f5f5f7",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* 사이드바 영역 (기존과 동일) */}
        <Box
          component="nav"
          sx={{
            width: { md: 360 },
            flexShrink: 0,
            display: { xs: "none", md: "block" },
            bgcolor: "#fff",
          }}
        >
          <MenuDrive items={devisItems} />
        </Box>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            zIndex: 1500,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: 300, sm: 400 },
            },
          }}
        >
          <MenuDrive items={devisItems} onMobileClick={handleDrawerToggle} />
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
          }}
        >
          <AppBar
            position="sticky"
            elevation={0}
            sx={{ bgcolor: "#fff", borderBottom: "0.6px solid #d2d2d7" }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { md: "none" },
                    color: "#1d1d1f",
                  }}
                >
                  <MenuIcon />
                </IconButton>

                {/* 📍 군더더기 없이 이름만 출력되는 부분 */}
                <Typography
                  sx={{
                    color: "#1d1d1f",
                    fontWeight: 600,
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                  }}
                >
                  {getHeaderTitle()}
                </Typography>
              </Box>

              <IconButton
                onClick={() => navigate("/client/drive")}
                sx={{ color: "#1d1d1f" }}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Box sx={{ flexGrow: 1, overflowY: "auto", bgcolor: "#f5f5f7" }}>
            <Outlet context={{ devisItems }} />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DriveDashboard;
