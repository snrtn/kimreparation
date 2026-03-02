import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    title: "Apple",
    path: "/screen/apple",
    logo: <AppleIcon sx={{ fontSize: 80, color: "#1d1d1f" }} />,
  },
  {
    title: "Samsung",
    path: "/guide/samsung/galaxy",
    logo: (
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "1.8rem",
          color: "#074da1",
          letterSpacing: "-0.05em",
        }}
      >
        SAMSUNG
      </Typography>
    ),
  },
  {
    title: "Xiaomi",
    path: "/guide/xiaomi",
    logo: (
      <Box
        sx={{
          p: 1.5,
          bgcolor: "#ff6700",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: 900,
          fontSize: "1.2rem",
        }}
      >
        mi
      </Box>
    ),
  },
  {
    title: "Oppo",
    path: "/guide/oppo",
    logo: (
      <Typography
        sx={{
          fontWeight: 800,
          color: "#008a4e",
          fontSize: "2.2rem",
          letterSpacing: "0.02em",
        }}
      >
        oppo
      </Typography>
    ),
  },
  {
    title: "Google",
    path: "/guide/google",
    logo: (
      <Typography sx={{ fontWeight: 700, color: "#4285F4", fontSize: "2rem" }}>
        Google
      </Typography>
    ),
  },
  {
    title: "Huawei",
    path: "/guide/huawei",
    logo: (
      <Typography
        sx={{ fontWeight: 800, color: "#ed1c24", fontSize: "1.6rem" }}
      >
        HUAWEI
      </Typography>
    ),
  },
  {
    title: "Autres",
    path: "/guide/others",
    logo: (
      <Typography
        sx={{ fontWeight: 600, color: "#86868b", fontSize: "1.5rem" }}
      >
        Plus
      </Typography>
    ),
  },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // 버튼 비활성화 상태 관리
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff", pt: 20, pb: 12 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "flex-end" },
            justifyContent: "space-between",
            mb: 4,
            pl: { md: 1 },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.04em",
              }}
            >
              Choisir mon écran
            </Typography>
            <Typography
              sx={{
                color: "#86868b",
                fontSize: "0.9rem",
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                maxWidth: "600px",
              }}
            >
              À chaque usage sa priorité : trouvez l'écran adapté à votre
              quotidien.
            </Typography>
          </Box>

          {/* 버튼 영역: 모바일 숨김, 비활성화 로직 추가 */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              mt: { xs: 3, md: 0 },
              mr: 10,
            }}
          >
            <IconButton
              disabled={!canScrollLeft}
              onClick={() =>
                scrollRef.current.scrollBy({ left: -360, behavior: "smooth" })
              }
              sx={{
                p: 1,
                "&:disabled": { opacity: 0.2 },
                "&:hover": { color: "#0066cc" },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 20, color: "#1d1d1f" }} />
            </IconButton>
            <IconButton
              disabled={!canScrollRight}
              onClick={() =>
                scrollRef.current.scrollBy({ left: 360, behavior: "smooth" })
              }
              sx={{
                p: 1,
                "&:disabled": { opacity: 0.2 },
                "&:hover": { color: "#0066cc" },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#1d1d1f" }} />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Stack
            ref={scrollRef}
            onScroll={checkScroll}
            direction="row"
            spacing={3}
            sx={{
              overflowX: "auto",
              pb: 6,
              px: 1,
              "::-webkit-scrollbar": { display: "none" },
              scrollBehavior: "smooth",
            }}
          >
            {guides.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                onClick={() => navigate(item.path)}
                sx={{
                  // 가로 사이즈 줄임 (md: 340px -> 300px)
                  minWidth: { xs: "280px", md: "320px" },
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  cursor: "pointer",
                  borderRadius: "28px",
                  bgcolor: "#f5f5f7",
                  position: "relative",
                  transition: "background-color 0.4s ease",
                  "&:hover": {
                    bgcolor: "#e8e8ed",
                  },
                }}
              >
                <Box
                  sx={{ position: "absolute", top: 32, left: 32, zIndex: 2 }}
                >
                  <Typography
                    sx={{
                      color: "#1d1d1f",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0066cc",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                      mt: 0.5,
                    }}
                  >
                    En savoir plus
                  </Typography>
                </Box>

                <Box
                  className="logo-container"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      transition: "transform 0.6s cubic-bezier(0.2, 1, 0.3, 1)",
                      "Paper:hover &": {
                        transform: "scale(1.04)",
                      },
                    }}
                  >
                    {item.logo}
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeScreen;
