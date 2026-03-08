/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Link,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Stack,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// hooks
import useScroll from "@hooks/useScrollTrigger";

// datas
import dropdownData from "./dropdown.data";

const HeadMain = ({ isHome }) => {
  const { isTriggered } = useScroll(45);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    if (isMdUp && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMdUp, mobileOpen]);

  return (
    <>
      {isHome && (
        <Box
          sx={{
            bgcolor: "rgb(0, 114, 228)",
            py: 2,
            px: 2,
            position: "relative",
            zIndex: 10,
            display: "flex",
            // 모바일은 세로, PC는 가로
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            // ⬇️ 여기서 간격을 확 줄였습니다. 0.5면 아주 촘촘하게 붙습니다.
            gap: { xs: 0, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // 모바일 중앙 정렬 유지
            }}
          >
            <AutoAwesomeIcon
              sx={{ fontSize: "1.1rem", color: "#ffb400", mr: 0.8 }}
            />
            <Typography // Box 대신 Typography로 텍스트 제어
              sx={{
                color: "#fff",
                fontSize: "0.86rem",
                textAlign: "center",
              }}
            >
              Détails des Écrans
            </Typography>
            <Box sx={{ mx: 0.5 }}></Box>
            <Link
              component={RouterLink}
              to="/screen/apple"
              sx={{
                color: "#fff",
                fontSize: "0.86rem",
                fontWeight: 800, // 링크를 더 강조
                textDecoration: "underline",
              }}
            >
              Les points clés →
            </Link>
          </Box>
        </Box>
      )}

      <AppBar
        sx={{
          position: isTriggered ? "fixed" : "relative",
          top: 0,
          backgroundColor: "#fff",
          color: "#1d1d1f",
          boxShadow: "none",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: isTriggered ? "56px" : "64px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{ display: "flex", alignItems: "center", mr: 2 }}
              >
                <img
                  src="/assets/logo_removeBg.png"
                  alt="KIM"
                  style={{ height: "52px" }}
                />
              </Box>

              <Stack
                direction="row"
                spacing={{ md: 2, lg: 4 }}
                sx={{
                  ml: { md: 2, lg: 4 },
                  display: { xs: "none", md: "flex" },
                }}
              >
                {dropdownData.map((menu) => {
                  // ⬇️ 아틀리에 메뉴 색상 조건 (에르메스 오렌지)
                  const isAtelier = menu.title === "Devis Gratuits";
                  return (
                    <Typography
                      key={menu.title}
                      component={RouterLink}
                      to={menu.path}
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        color: isAtelier ? "#E65100" : "inherit", // 아틀리에만 오렌지
                      }}
                    >
                      {menu.title}
                    </Typography>
                  );
                })}
              </Stack>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleDrawerToggle} color="inherit">
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            p: 3,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: { xs: 6, sm: 14 },
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon sx={{ fontSize: "2.5rem", color: "#1d1d1f" }} />
          </IconButton>
        </Box>

        <Stack spacing={8} sx={{ alignItems: "center" }}>
          {dropdownData.map((menu) => {
            // ⬇️ 모바일에서도 아틀리에만 오렌지
            const isAtelier = menu.title === "Devis Gratuits";
            return (
              <Typography
                key={menu.title}
                component={RouterLink}
                to={menu.path}
                onClick={handleDrawerToggle}
                sx={{
                  fontSize: { xs: "1.6rem", sm: "2rem" },
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isAtelier ? "#E65100" : "inherit",
                }}
              >
                {menu.title}
              </Typography>
            );
          })}
        </Stack>
      </Drawer>

      {isTriggered && <Box sx={{ height: "64px" }} />}
    </>
  );
};

export default HeadMain;
