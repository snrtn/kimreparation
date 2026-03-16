import React, { useState, useRef } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// ✅ 형님이 작성하신 데이터 (토씨 하나 안 틀리고 그대로 유지)
const slideData = [
  {
    id: 0,
    title: "Écran & Tactile",
    point: "Structure & Précision",
    headline: "Plus qu'une vitre, un équilibre fragile.",
    desc: "Les éclats de verre brisé exercent une pression destructrice sur la dalle OLED/LCD interne.\nUn châssis tordu ou des micro-fissures invisibles sur la carte mère peuvent compromettre la survie d'un écran neuf bien après l'intervention.",
    path: "/repair",
  },
  {
    id: 1,
    title: "Tombé dans l'eau",
    point: "Urgence & Oxydation",
    headline: "L'oxydation, une réaction chimique invisible.",
    desc: "Le courant de la batterie combiné à l'eau crée des micro-étincelles destructrices.\nLe riz et le sèche-cheveux aggravent la situation ; seul un traitement technique peut stopper la gangrène de l'oxydation qui progresse sous les puces.",
    path: "/repair/repairWater",
  },
  {
    id: 2,
    title: "Batterie & Énergie",
    point: "Chimie & Sécurité",
    headline: "Gonflement gazeux et instabilité de tension.",
    desc: "Une batterie gonflée est une réaction chimique dangereuse qui ne doit jamais être pressée.\nLes micro-fissures internes peuvent fausser les tests en atelier, provoquant des pannes aléatoires malgré une batterie neuve.",
    path: "/repair/repairBattery",
  },
  {
    id: 3,
    title: "Système & Logiciel",
    point: "Stabilité & NAND",
    headline: "Le secteur, unique garant de vos données.",
    desc: "100% de stockage saturé mène au 'Bootloop' définitif.\nToute mise à jour système doit impérativement se faire sur prise murale pour éviter de corrompre la puce mémoire NAND lors de l'écriture.",
    path: "/repair/repairSystem",
  },
  {
    id: 4,
    title: "Caméra & Son",
    point: "Optique & Acoustique",
    headline: "Vibrations mécaniques et membranes fragiles.",
    desc: "Les vibrations (supports moto) désalignent les aimants de stabilisation optique.\nPour l'audio, évitez les objets pointus : les grilles obstruées nécessitent un nettoyage doux pour ne pas déchirer l'étanchéité des haut-parleurs.",
    path: "/repair/repairHardware",
  },
  {
    id: 5,
    title: "Étanchéité",
    point: "Isolation & Limites",
    headline: "L'étanchéité n'est pas une barrière éternelle.",
    desc: "Les joints adhésifs sèchent naturellement avec la chaleur et le temps.\nLa vapeur d'eau traverse là où le liquide s'arrête, et aucune intervention ne peut restaurer l'indice IP68 certifié en usine à 100%.",
    path: "/repair/waterproof",
  },
  {
    id: 6,
    title: "Réalité Technique",
    point: "Expertise & Vérité",
    headline: "L'envers du décor de l'électronique.",
    desc: "Alliages rigides sans plomb, stress thermique à 350°C et fragilité structurelle du PCB : découvrez la réalité physique de vos composants.\nUne approche transparente pour comprendre pourquoi une réparation dépend avant tout de l'état résiduel de la matière.",
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

              <Link
                component={RouterLink} // 💡 Ajoute cette ligne
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
