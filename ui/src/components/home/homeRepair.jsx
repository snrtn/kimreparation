import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Button,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// ✅ Icones MUI
import SecurityIcon from "@mui/icons-material/Security";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ConstructionIcon from "@mui/icons-material/Construction";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const solutionData = [
  {
    id: 0,
    title: "Photos de suivi",
    icon: <CameraAltIcon />,
    headline: "Pas de surprises : Je prends des photos.",
    summary: "Je garde une trace de l'état de votre appareil, avant et après.",
    firstPara:
      "Avant de commencer, je photographie chaque rayure ou impact déjà présent. C'est plus clair pour vous comme pour moi.",
    restDesc:
      "Ouvrir un téléphone nécessite de forcer un peu sur les joints d'étanchéité d'origine. Même avec les bons outils, de très légères marques peuvent apparaître sur les bordures : c'est la mécanique qui veut ça. \n\nSi je découvre de la corrosion ou une anomalie interne dès l'ouverture, je vous envoie la photo immédiatement. Je fais la même chose une fois le travail terminé.",
    color: "#000000",
  },
  {
    id: 1,
    title: "Vos Données",
    icon: <SecurityIcon />,
    headline: "Votre vie privée reste privée.",
    summary: "Je ne touche pas à vos fichiers, je répare juste le matériel.",
    firstPara:
      "Le plus sûr reste d'effectuer une sauvegarde complète et de réinitialiser votre appareil avant de me le confier.",
    restDesc:
      "Je n'entre jamais dans vos messages ou vos dossiers personnels. J'accède uniquement aux réglages nécessaires pour tester le bon fonctionnement des composants. Notez que la sécurité de vos fichiers reste sous votre entière responsabilité.",
    color: "#1d1d1f",
  },
  {
    id: 2,
    title: "Diagnostic & Tarifs",
    icon: <PsychologyIcon />,
    headline: "Ici, les tarifs sont clairs dès le début.",
    summary:
      "Le diagnostic est inclus dans la réparation. Mes tarifs sont affichés à l'atelier.",
    firstPara:
      "Si votre écran reste noir ou que la panne est complexe, je teste la carte mère au multimètre pour trouver l'origine exacte du problème.",
    restDesc:
      "Trouver une panne exige du temps et du savoir-faire. \n\n1. Si on répare : le diagnostic est offert. \n2. Si vous décidez d'arrêter en cours : je demande 50% du prix de la main-d'œuvre pour le travail de recherche effectué. \n\nNote : Aucune garantie n'est possible sur une réparation interrompue à votre demande. Mes tarifs sont transparents et affichés à l'atelier.",
    color: "#0066cc",
  },
  {
    id: 3,
    title: "Quel Écran ?",
    icon: <WorkspacePremiumIcon />,
    headline: "C'est vous qui choisissez la qualité.",
    summary:
      "Original, OLED ou LCD : je vous explique la différence franchement.",
    firstPara:
      "Chaque écran a ses propres couleurs et sa luminosité. Je vous invite à consulter mon guide technique pour choisir celui qui vous convient.",
    restDesc:
      "Je garantis la pièce contre les défauts de fabrication (tactile, lignes). Cependant, si vous choisissez une gamme 'Budget' et que le rendu visuel diffère de l'original, cela est dû à la technologie utilisée. Veuillez bien lire le guide avant de décider.",
    color: "#6f42c1",
    link: "/screen",
  },
  {
    id: 4,
    title: "Sans votre Code",
    icon: <TouchAppIcon />,
    headline: "Je teste l'essentiel devant vous.",
    summary: "On vérifie les fonctions de base sans déverrouiller l'appareil.",
    firstPara:
      "Pas envie de partager votre code ? Pas de souci. Je teste le Wi-Fi, le son et les caméras via les accès rapides de l'écran verrouillé.",
    restDesc:
      "Pour tester l'appareil photo, je passe par le raccourci de l'écran de verrouillage. Je prends une photo de test, je vérifie la netteté, et c'est tout. Ainsi, je n'ai jamais besoin d'entrer dans votre galerie personnelle.",
    color: "#28a745",
  },
  {
    id: 5,
    title: "Soudure & Eau",
    icon: <SettingsSuggestIcon />,
    headline: "Réparer les puces ou sauver vos données.",
    summary: "Pour les pannes de carte mère ou les appareils oxydés.",
    firstPara:
      "Un appareil ayant pris l'eau est imprévisible. Mon objectif premier est de sauver vos données et vos souvenirs.",
    restDesc:
      "Je travaille sous microscope pour remplacer les composants grillés. \n\nAttention : pour les appareils oxydés, je garantis la récupération des données, mais je ne peux promettre que l'appareil durera des années.",
    color: "#e83e8c",
  },
  {
    id: 6,
    title: "Un Problème ?",
    icon: <ConstructionIcon />,
    headline: "Si ça ne va pas, on en parle.",
    summary: "Je ne vous laisse pas tomber après la réparation.",
    firstPara:
      "Si ma pièce ou mon montage présente un défaut, je m'occupe de la ré-intervention gratuitement et sans discuter.",
    restDesc:
      "Si c'est une nouvelle panne (chute, usure), je vous offre -20% sur la main-d'œuvre par fidélité. Par contre, si l'appareil a été ouvert par un tiers, ma garantie s'arrête là.",
    color: "#ff3b30",
  },
];

const HomeRepair = () => {
  const [current, setCurrent] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const tabRefs = useRef([]);
  const theme = useTheme();

  // 📌 폰에서만 '더보기' (sm: 600px 미만), 태블릿은 풀 버전
  const isSmallPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (index) => {
    setCurrent(index);
    setIsExpanded(false);
    if (tabRefs.current[index]) {
      tabRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const slide = solutionData[current];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        pt: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 3, md: 4 }, px: { xs: 1, md: 2 } }}>
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.6rem" },
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            On vous dit tout. <br /> Pour éviter les malentendus.
          </Typography>
          <Typography
            sx={{
              color: "#86868b",
              fontSize: "0.85rem",
              fontStyle: "italic",
              mt: 2,
            }}
          >
            Je garde une trace de tout ce que je fais pour que ce soit clair
            entre nous. <br /> Pas de baratin, je répare simplement pour que
            votre téléphone dure le plus longtemps possible.
          </Typography>
        </Box>

        {/* Navigation Tabs */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            borderTop: "1px solid #d2d2d7",
            borderBottom: "1px solid #d2d2d7",
            mb: { xs: 4, md: 8 },
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {solutionData.map((item, index) => (
            <Box
              key={item.id}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleTabChange(index)}
              sx={{
                flex: { xs: "0 0 160px", md: "1" },
                py: { xs: 3, md: 4 },
                px: 2,
                cursor: "pointer",
                textAlign: "center",
                borderBottom: "4px solid",
                borderColor: index === current ? item.color : "transparent",
                bgcolor: index === current ? "#f5f5f7" : "transparent",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box sx={{ color: index === current ? item.color : "#86868b" }}>
                {React.cloneElement(item.icon, { sx: { fontSize: 24 } })}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: index === current ? "#1d1d1f" : "#86868b",
                  whiteSpace: "normal",
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Content Area */}
        <Box
          sx={{ minHeight: { xs: "auto", md: "400px" }, position: "relative" }}
        >
          {/* ✅ 워터마크 아이콘 (기능만 추가됨) */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: -20, md: 0 },
              bottom: { xs: -20, md: 0 },
              zIndex: 0,
              opacity: 0.02,
              pointerEvents: "none",
              transition: "all 0.5s ease",
              color: slide.color,
              // ✅ 핵심: xs(모바일)에서만 block, sm(태블릿) 이상부터는 none으로 숨김
              display: { xs: "none", md: "block", lg: "block" },
            }}
          >
            {React.cloneElement(slide.icon, {
              sx: { fontSize: { xs: "100px", md: "200px" } },
            })}
          </Box>

          <Box
            key={slide.id}
            sx={{
              position: "relative",
              zIndex: 1,
              animation: "fadeInStable 0.5s ease-out",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 10 }}
              alignItems="flex-start"
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.4rem", md: "1.6rem" },
                    fontWeight: 700,
                    color: slide.color,
                    mb: 2,
                  }}
                >
                  {slide.headline}
                </Typography>
                <Typography
                  sx={{
                    color: "#424245",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  {slide.summary}
                </Typography>
                {slide.id === 3 && (
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewIcon />}
                    sx={{
                      mt: 1,
                      mb: 2,
                      borderRadius: "20px",
                      color: slide.color,
                      borderColor: slide.color,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                    component={RouterLink} // 💡 Redirection interne sans rechargement
                    to={slide.link}
                  >
                    Consulter le guide
                  </Button>
                )}
              </Box>

              <Box sx={{ flex: 1.5 }}>
                <Typography
                  sx={{
                    color: "#424245",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {slide.firstPara}
                </Typography>

                {!isSmallPhone ? (
                  <Typography
                    sx={{
                      color: "#424245",
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                      mt: 3,
                      pt: 3,
                      borderTop: "1px solid #f0f0f0",
                    }}
                  >
                    {slide.restDesc}
                  </Typography>
                ) : (
                  <>
                    <Collapse in={isExpanded}>
                      <Typography
                        sx={{
                          color: "#424245",
                          fontSize: "1rem",
                          lineHeight: 1.8,
                          whiteSpace: "pre-line",
                          mt: 2,
                          p: 2,
                          bgcolor: "#f9f9fb",
                          borderRadius: "8px",
                        }}
                      >
                        {slide.restDesc}
                      </Typography>
                    </Collapse>
                    <Button
                      onClick={() => setIsExpanded(!isExpanded)}
                      endIcon={
                        isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                      sx={{
                        color: slide.color,
                        fontWeight: 700,
                        mt: 1,
                        p: 0,
                        textTransform: "none",
                      }}
                    >
                      {isExpanded ? "Réduire les détails" : "Voir les détails"}
                    </Button>
                  </>
                )}
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ mt: 3 }} />
      </Container>

      <style>{`
        @keyframes fadeInStable {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default HomeRepair;
