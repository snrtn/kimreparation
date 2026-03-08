import React, { useState, useRef } from "react";
import { Box, Container, Typography, Link } from "@mui/material";

// ✅ 형님이 작성하신 데이터 (토씨 하나 안 틀리고 그대로 유지)
const slideData = [
  {
    id: 0,
    title: "Réalité Technique",
    point: "Prévention & Diagnostic",
    headline: "Les petits gestes qui sauvent votre appareil.",
    desc: "Quelques conseils simples pour mieux comprendre votre appareil.\nLa majorité des pannes complexes commencent par de petites erreurs du quotidien : mauvaises habitudes de charge, chocs invisibles ou exposition à l'humidité.\nDécouvrez les réflexes essentiels pour prolonger la vie de votre appareil.",
    path: "/repair",
  },
  {
    id: 1,
    title: "Écran & Tactile",
    point: "Symptômes fréquents",
    headline: "Lignes colorées, taches noires et Face ID en danger.",
    desc: "C'est la panne la plus fréquente : une vitre cassée finit par blesser l'écran interne, faisant apparaître des lignes colorées ou des taches noires.\nDe plus, les éclats de verre rayent les capteurs du Face ID, ce qui bloque définitivement la reconnaissance faciale de l'appareil.",
    path: "/repair",
  },
  {
    id: 2,
    title: "Tombé dans l'eau",
    point: "Urgence Humidité",
    headline: "Pas de charge et oubliez le riz.",
    desc: "Si l'appareil prend l'eau, éteignez-le et ne le branchez surtout pas : le courant aggrave l'oxydation.\nLe riz est inefficace et le sèche-cheveux pousse l'eau plus loin.\nUn séchage naturel est requerido, mais sachez que l'humidité peut laisser des traces invisibles sous les puces.",
    path: "/repair/repairWater",
  },
  {
    id: 3,
    title: "Batterie & Charge",
    point: "Santé Énergie",
    headline: "Extinctions soudaines et batterie gonflée.",
    desc: "Si l'appareil s'éteint brusquement à 20%, la batterie est chimiquement fatiguée.\nLa chaleur étant son ennemi, retirez la coque lors d'une charge sur prise murale.\nSi l'écran se soulève, la batterie gonfle : arrêtez immédiatement la charge pour éviter d'aggraver les micro-fissures internes.",
    path: "/repair/repairBattery",
  },
  {
    id: 4,
    title: "Système & Logiciel",
    point: "Sécurité Système",
    headline: "Mises à jour sur secteur et blocage logo.",
    desc: "Toute mise à jour doit se faire sur prise murale pour éviter de corrompre l'appareil.\nSoyez prudent avec les nouvelles versions souvent instables.\nEnfin, si l'espace est rempli à 100%, l'appareil reste bloqué sur le logo au démarrage sans possibilité d'accès.",
    path: "/repair/repairSystem",
  },
  {
    id: 5,
    title: "Caméra & Son",
    point: "Optique et Audio",
    headline: "Vibrations moto et grilles obstruées.",
    desc: "Les vibrations (supports moto) désalignent les aimants de la caméra, rendant l'image floue.\nPour le son, évitez absolument les aiguilles qui déchirent les membranes : une brosse douce suffit.\nEnfin, sachez que des micro-fissures internes peuvent affecter l'appareil bien après un choc.",
    path: "/repair/repairHardware",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // 1. 추가: 각 탭을 참조하기 위한 Ref 배열
  const tabRefs = useRef([]);

  // 2. 추가: 클릭 시 중앙 정렬 함수
  const handleTabClick = (index) => {
    setCurrent(index);
    if (tabRefs.current[index]) {
      tabRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // 가로축 기준 중앙 정렬
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        height: { xs: "580px", sm: "630px", md: "70vh" },
        minHeight: { xs: "580px", sm: "630px", md: "600px" },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 상단 메인 영역 - 원본 그대로 유지 */}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Container maxWidth="xl">
          {slideData.map((slide, index) => (
            <Box
              key={slide.id}
              sx={{
                display: index === current ? "block" : "none",
                animation: "fadeIn 0.5s ease-out",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#0066cc",
                  mb: 1.5,
                }}
              >
                {slide.point}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  fontWeight: 700,
                  color: "#1d1d1f",
                  mb: { xs: 2, md: 3 },
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                {slide.headline}
              </Typography>
              <Typography
                sx={{
                  color: "#424245",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: "750px",
                  mb: 4,
                  whiteSpace: "pre-line",
                }}
              >
                {slide.desc}
              </Typography>
              {index !== 0 && (
                <Link
                  href={slide.path}
                  sx={{
                    fontSize: "1rem",
                    color: "#0066cc",
                    fontWeight: 600,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  En savoir plus sur ce sujet {">"}
                </Link>
              )}
            </Box>
          ))}
        </Container>
      </Box>

      {/* 하단 네비게이션 - 스타일 그대로 유지, 중앙 정렬 로직만 탑재 */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          borderTop: "1px solid #d2d2d7",
          height: { xs: "100px", md: "120px" },
          bgcolor: "#ffffff",
          flexShrink: 0,
        }}
      >
        {slideData.map((slide, index) => (
          <Box
            key={slide.id}
            // 3. 추가: Ref 연결 및 함수 연결
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => handleTabClick(index)}
            sx={{
              height: "100%",
              flex: { xs: "0 0 160px", md: "1" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderTop: "3px solid",
              borderColor: index === current ? "#1d1d1f" : "transparent",
              marginTop: "-1.5px",
              bgcolor: index === current ? "#fafafa" : "transparent",
              transition: "all 0.2s ease-in-out",
              boxSizing: "border-box",
              "&:hover": { bgcolor: "#f5f5f7" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "0.95rem", lg: "1.05rem" },
                fontWeight: index === current ? 700 : 500,
                color: index === current ? "#1d1d1f" : "#86868b",
                textAlign: "center",
                whiteSpace: "normal",
                wordBreak: "keep-all",
                lineHeight: 1.3,
                px: 2,
              }}
            >
              {slide.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
