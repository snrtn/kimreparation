import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    title: "Origine (Pull)",
    tag: "Composant d'origine",
    // ✅ "성능 유지" 삭제 -> "추출 부품"이라는 물리적 사실만 기재
    desc: "Écran d'origine récupéré sur un autre appareil de la marque. Conserve le rendu visuel initial du constructeur.",
    pros: "Rendu visuel et tactile d'origine",
    cons: "Prix élevé / Selon arrivage",
    target: "Utilisateurs privilégiant les pièces constructeur.",
    path: "/screen",
    serial: "SERIES-O1",
  },
  {
    title: "Reconditionné",
    tag: "Dalle d'origine",
    // ✅ 리스크 방지: 외부 유리가 교체된 제품임을 명확히 고지
    desc: "Dalle d'origine avec une vitre externe remplacée. L'affichage reste celui du constructeur.",
    pros: "Affichage d'origine / Prix intermédiaire",
    cons: "Vitre externe non certifiée constructeur",
    target: "Alternative à l'écran d'origine pur.",
    path: "/screen/eco",
    serial: "SERIES-R1",
  },
  {
    title: "Copie Soft OLED",
    tag: "Compatible (Souple)",
    // ✅ 팩트: 재질이 유연하다는 성질만 강조
    desc: "Écran compatible sur base flexible. Technologie conçue pour une meilleure absorption des pressions.",
    pros: "Meilleure tolérance aux chocs (gamme copie)",
    cons: "Nuances de couleurs variables",
    target: "Usage quotidien standard.",
    path: "/screen/soft",
    serial: "SERIES-S2",
  },
  {
    title: "Copie Hard OLED",
    tag: "Compatible (Rigide)",
    // ✅ 팩트 폭격: "잘 깨진다"가 아니라 "충격에 취약한 구조"임을 명시
    desc: "Attention : écran rigide. Structure sensible aux pressions internes. Risque de défaut d'affichage en cas de choc.",
    pros: "Technologie OLED au prix le plus bas",
    cons: "Fragilité structurelle élevée",
    target:
      "Excellent choix pour ceux qui ne font jamais tomber leur téléphone.",
    path: "/screen/hard",
    serial: "SERIES-H2",
  },
  {
    title: "Copie LCD",
    tag: "Compatible (In-cell)",
    // ✅ 리스크 방지: 두께, 전력 소비, 발열 가능성 사전 고지
    desc: "Technologie LCD. Épaisseur supérieure à l'OLED. Peut impacter l'autonomie et la température de l'appareil.",
    pros: "Prix le plus accessible",
    cons: "Écran épais / Consommation d'énergie",
    target: "Usage secondaire (SMS) / Pour les utilisateurs soigneux.",
    path: "/screen/lcd",
    serial: "SERIES-L3",
  },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

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

  // ✅ 핵심 추가: 기기마다 다른 카드 1장 넓이를 자동으로 계산해서 넘겨주는 함수
  const handleScroll = (direction) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      // 첫 번째 카드의 실제 넓이(px)를 가져옴
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#ffffff", pt: 15, pb: 12 }}>
      <Container maxWidth="xl">
        {/* 상단 헤더 섹션 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            px: 2,
            pt: { xs: 10, md: 16 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#86868b",
                fontSize: "0.9rem",
                fontWeight: 600,
                mb: 1.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                position: "relative",
                zIndex: 1,
              }}
            >
              Spécifications de pièces
            </Typography>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.6rem" },
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                position: "relative",
                zIndex: 1,
              }}
            >
              Détails des Écrans
            </Typography>
          </Box>

          <Typography
            sx={{
              position: "absolute",
              right: 20,
              top: { md: "10px", lg: "20px" },
              fontSize: { md: "5rem", lg: "6.5rem" },
              fontWeight: 900,
              opacity: 0.03,
              userSelect: "none",
              lineHeight: 0.8,
              display: { xs: "none", md: "block" },
              zIndex: 0,
            }}
          >
            HARDWARE
          </Typography>
        </Box>

        {/* ✅ 스크롤 버튼 영역 (420 고정값 버리고 handleScroll 함수 적용) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "auto",
            gap: 1,
            position: "relative",
            zIndex: 1,
            mb: { xs: 1, md: 3 },
            mt: { xs: 1, md: 0 },
            pr: 1,
          }}
        >
          <IconButton
            disableRipple
            disabled={!canScrollLeft}
            onClick={() => handleScroll("left")} // ✅ 변경됨
            sx={{
              p: 1.5,
              "&:hover": { bgcolor: "transparent" },
              "&:disabled": { bgcolor: "transparent" },
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 22,
                color: canScrollLeft ? "#1d1d1f" : "#d2d2d7",
                transition: "color 0.3s ease",
              }}
            />
          </IconButton>

          <IconButton
            disableRipple
            disabled={!canScrollRight}
            onClick={() => handleScroll("right")} // ✅ 변경됨
            sx={{
              p: 1.5,
              "&:hover": { bgcolor: "transparent" },
              "&:disabled": { bgcolor: "transparent" },
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: 22,
                color: canScrollRight ? "#1d1d1f" : "#d2d2d7",
                transition: "color 0.3s ease",
              }}
            />
          </IconButton>
        </Box>

        {/* 메인 스크롤 영역 */}
        <Stack
          ref={scrollRef}
          onScroll={checkScroll}
          direction="row"
          spacing={0}
          sx={{
            overflowX: "auto",
            borderTop: "2px solid #1d1d1f",
            "::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory", // ✅ 자석 효과 켜기
          }}
        >
          {guides.map((item, index) => (
            <Box
              key={index}
              onClick={() => navigate(item.path)}
              sx={{
                minWidth: { xs: "85vw", sm: "350px", md: "400px" },
                scrollSnapAlign: "start", // ✅ 왼쪽 경계선에 자석처럼 찰칵 붙게 만듦
                height: { xs: "550px", md: "520px" },
                p: { xs: 4, md: 5 },
                cursor: "pointer",
                borderRight: "1px solid #d2d2d7",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                bgcolor: "#ffffff",
                "&:hover": { bgcolor: "#fbfbfb" },
              }}
            >
              {/* --- 내부 데이터 100% 동일하게 유지 --- */}
              <Box sx={{ height: "20px", mb: 1 }}>
                <Typography
                  sx={{
                    color: "#86868b",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  CATÉGORIE PIÈCE
                </Typography>
              </Box>

              <Box sx={{ height: "70px", mb: 1 }}>
                <Typography
                  sx={{
                    color: "#1d1d1f",
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Box sx={{ height: "90px", mb: 3, overflow: "hidden" }}>
                <Typography
                  sx={{
                    color: "#424245",
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>

              <Box
                sx={{
                  borderLeft: "2px solid #0066cc",
                  pl: 3,
                  mb: 2,
                  height: "130px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    color: "#0066cc",
                    fontWeight: 900,
                    mb: 1.5,
                    letterSpacing: "0.1em",
                  }}
                >
                  POINTS CLÉS (FACTS)
                </Typography>
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#1d1d1f",
                      fontWeight: 500,
                    }}
                  >
                    (+) {item.pros}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#86868b",
                      fontWeight: 500,
                    }}
                  >
                    (-) {item.cons}
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{ mb: 2, pl: 3.4, display: "flex", alignItems: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: "#1d1d1f",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  En savoir plus{" "}
                  <ArrowForwardIosIcon
                    className="arrow-icon"
                    sx={{
                      fontSize: "0.65rem",
                      ml: 1,
                      transition: "transform 0.2s ease",
                    }}
                  />
                </Typography>
              </Box>

              <Box
                sx={{ pt: 3, borderTop: "1px solid #f5f5f7", height: "85px" }}
              >
                <Typography
                  sx={{
                    color: "#86868b",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    mb: 0.5,
                    letterSpacing: "0.05em",
                  }}
                >
                  CONTEXTE D'USAGE
                </Typography>
                <Typography
                  sx={{
                    color: "#1d1d1f",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.target}
                </Typography>
              </Box>

              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 15,
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#000",
                  opacity: 0.02,
                  fontFamily: "monospace",
                  pointerEvents: "none",
                }}
              >
                {item.serial.split("-")[1]}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeScreen;
