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
import PhonelinkEraseIcon from "@mui/icons-material/PhonelinkErase";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import TerminalIcon from "@mui/icons-material/Terminal";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LaptopMacIcon from "@mui/icons-material/LaptopMac"; // ✅ 노트북 아이콘 추가
import { useNavigate } from "react-router-dom";

const HomeRepair = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // ✅ sidemenu.data와 순서 및 경로를 1:1로 매칭 (총 6개)
  const services = [
    {
      title: "Écran & Tactile", // ✅ 폰/태블릿 전용임을 명시
      desc: "Votre écran est cassé, noir ou ne répond plus ?",
      icon: <PhonelinkEraseIcon sx={{ fontSize: 75, color: "#ff3b30" }} />,
      path: "/repair",
    },
    {
      title: "Tombé dans l'eau", // ✅ 단순 침수보다 포괄적인 표현 (폰/태블릿)
      desc: "Votre appareil est tombé dans l'eau ?",
      icon: <WaterDropIcon sx={{ fontSize: 75, color: "#007aff" }} />,
      path: "/repair/repairWater",
    },
    {
      title: "Batterie & Charge",
      desc: "Batterie gonflée, décharge rapide ou problème de charge",
      icon: <BatteryAlertIcon sx={{ fontSize: 75, color: "#34c759" }} />,
      path: "/repair/repairBattery",
    },
    {
      title: "Système & Logiciel", // ✅ '먹통'의 가장 직관적인 프랑스식 표현
      desc: "Appareil bloqué, mot de passe oublié ou bug système",
      icon: <TerminalIcon sx={{ fontSize: 75, color: "#af52de" }} />,
      path: "/repair/repairSystem",
    },
    {
      title: "Caméra & Son", // ✅ 사장님 초이스!
      desc: "Photos floues, Pas de son, Micro HS, Haut-parleur grésille", // ✅ 지지직거림 추가
      icon: <CameraAltIcon sx={{ fontSize: 75, color: "#ff2d55" }} />,
      path: "/repair/repairHardware",
    },
    {
      title: "Ordinateur Portable",
      desc: "Liquide renversé, Batterie & Charge, Caméra & Son, Clavier & Trackpad, SSD(Stockage), Écran",
      icon: <LaptopMacIcon sx={{ fontSize: 75, color: "#5856d6" }} />,
      path: "/repair/repairLaptop",
    },
  ];

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
    <Box sx={{ width: "100%", bgcolor: "#fff", pt: 0, pb: 12 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            mb: 4,
            pl: { md: 1 },
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "-0.04em",
              }}
            >
              Besoin d'une réparation ?
            </Typography>
            <Typography
              sx={{
                color: "#86868b",
                fontSize: "0.9rem",
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              Sélectionnez votre panne pour découvrir les premiers gestes.
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, mr: 10 }}>
            <IconButton
              disabled={!canScrollLeft}
              onClick={() =>
                scrollRef.current.scrollBy({ left: -380, behavior: "smooth" })
              }
              sx={{
                p: 1,
                "&:hover": { color: "#0066cc" },
                "&:disabled": { opacity: 0.25 },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <IconButton
              disabled={!canScrollRight}
              onClick={() =>
                scrollRef.current.scrollBy({ left: 380, behavior: "smooth" })
              }
              sx={{
                p: 1,
                "&:hover": { color: "#0066cc" },
                "&:disabled": { opacity: 0.25 },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
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
            {services.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                onClick={() => navigate(item.path)}
                sx={{
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
                  "&:hover": { bgcolor: "#e8e8ed" },
                }}
              >
                <Box sx={{ textAlign: "left", zIndex: 2 }}>
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
                      color: "#86868b",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                      mt: 1,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  <Box
                    sx={{
                      transition: "transform 0.6s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>

                <Box sx={{ mt: "auto", zIndex: 2, textAlign: "left" }}>
                  <Typography
                    sx={{
                      color: "#0066cc",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    En savoir plus ›
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeRepair;
