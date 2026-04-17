import React, { useState, useRef } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// ✅ 형님이 작성하신 데이터 (토씨 하나 안 틀리고 그대로 유지)
const slideData = [
  {
    id: 0,
    title: "Kim Reparation",
    point: "L'atelier de Réparation Téléphone",
    headline: "Carte mère · Écran · Batterie",
    desc: "Nous identifions la cause de la panne et nous réparons tout ce qui est techniquement possible.",
    path: "",
  },
  {
    id: 1,
    title: "Écran & Tactile",
    point: "Écran & Tactile",
    headline: "Vitre cassée, tactile instable ou écran noir.",
    desc: "Le verre brisé abîme l'affichage interne. Nous vérifions aussi le châssis pour que votre nouvel écran reste bien en place sans se décoller.",
    path: "/repair",
  },
  {
    id: 2,
    title: "Tombé dans l'eau",
    point: "Désoxydation",
    headline: "Ce qui se passe quand l'eau pénètre l'appareil.",
    desc: "L'eau et la batterie provoquent des courts-circuits. Le riz ne sert à rien. Seul un nettoyage technique peut arrêter la rouille sous les composants.",
    path: "/repair/repairWater",
  },
  {
    id: 3,
    title: "Batterie & Énergie",
    point: "Batterie & Énergie",
    headline: "Batterie gonflée ou perte d'autonomie.",
    desc: "Une batterie gonflée est dangereuse : ne la pressez jamais. Parfois, le problème vient de la carte mère et non de la batterie elle-même.",
    path: "/repair/repairBattery",
  },
  {
    id: 4,
    title: "Système & Logiciel",
    point: "Système & Logiciel",
    headline: "Téléphone bloqué ou stockage plein.",
    desc: "Si le stockage est saturé à 100%, le téléphone peut s'arrêter de démarrer. Branchez toujours votre chargeur pendant une mise à jour pour éviter de bloquer le système.",
    path: "/repair/repairSystem",
  },
  {
    id: 5,
    title: "Caméra & Son",
    point: "Caméra & Son",
    headline: "Photos floues, pas de son ou capteurs HS.",
    desc: "Les vibrations (moto) cassent le stabilisateur photo. Ne nettoyez pas les grilles avec une aiguille : vous risquez de percer la membrane de protection.",
    path: "/repair/repairHardware",
  },
  {
    id: 6,
    title: "Étanchéité",
    point: "Étanchéité",
    headline: "La vérité sur la protection IP68.",
    desc: "Les joints s'usent naturellement avec le temps et la chaleur. Après une ouverture, aucun téléphone n'est plus jamais étanche à 100% comme à la sortie d'usine.",
    path: "/repair/waterproof",
  },
  {
    id: 7,
    title: "Réalité Technique",
    point: "Limites Techniques",
    headline: "Ce que nous pouvons réparer.",
    desc: "La réussite d'une réparation dépend de l'état réel des composants. Nous vous disons honnêtement si votre appareil est sauvable ou non.",
    path: "/repair/repairLimit",
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
        height: { xs: "580px", sm: "620px", md: "69vh" },
        minHeight: { xs: "580px", sm: "620px", md: "690px" },
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

              {slide.id === 0 ? (
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#0066cc",
                    fontWeight: 600,
                  }}
                >
                  Kim Reparation
                </Typography>
              ) : (
                <Link
                  component={RouterLink}
                  to={slide.path}
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
                fontSize: "0.8rem",
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
