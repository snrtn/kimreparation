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
    headline: "La transparence avant tout : Je photographie l'étape.",
    summary:
      "Un suivi visuel précis de l'état de votre appareil, avant et après.",
    firstPara:
      "Pour votre sérénité, je documente l'état cosmétique de votre appareil dès sa réception.\n\nChaque rayure ou impact préexistant est répertorié : c'est la garantie d'une relation de confiance.",
    restDesc:
      "L'ouverture d'un châssis scellé est une intervention délicate qui peut parfois laisser de micro-marques techniques sur les joints d'origine, malgré l'usage d'outils professionnels.\n\nSi une anomalie interne (corrosion, réparation antérieure) est découverte au démontage, vous recevez immédiatement une photo pour valider la suite ensemble.",
    color: "#000000",
  },
  {
    id: 1,
    title: "Vos Données",
    icon: <SecurityIcon />,
    headline: "Votre vie privée est entre de bonnes mains.",
    summary:
      "Je prends grand soin de votre matériel. Pensez simplement à sauvegarder vos fichiers avant la réparation.",
    firstPara:
      "La protection de vos données personnelles me tient à cœur.\n\nBien que je travaille avec la plus grande précaution, une perte de données peut exceptionnellement survenir lors d'une intervention. C'est pourquoi, si votre écran s'allume encore, je vous invite chaleureusement à faire une sauvegarde complète de votre appareil avant de me le confier. Veuillez noter que la préservation de vos fichiers reste sous votre responsabilité.",
    restDesc:
      "Voici un petit guide pour sécuriser vos données en toute sérénité :\n\n" +
      "🍏 iPhone (Sauvegarde) :\n" +
      "Allez dans Réglages > [Votre Nom] > iCloud > Sauvegarde iCloud > touchez « Sauvegarder maintenant ».\n\n" +
      "🤖 Samsung (Sauvegarde & Astuce) :\n" +
      "• Sauvegarde : Allez dans Paramètres > Comptes et sauvegarde > Sauvegarde des données > touchez « Sauvegarder maintenant » (ou utilisez l'application Smart Switch).\n" +
      "• 💡 Astuce (Mode Maintenance) : Allez dans Paramètres > Batterie et maintenance > Mode Maintenance. Ce mode génial bloque l'accès à vos données sans les effacer, tout en me laissant tester le téléphone !\n\n" +
      "📱 Autres Android (Sauvegarde) :\n" +
      "Allez dans Paramètres > Google > Sauvegarder > touchez « Sauvegarder maintenant ».\n\n" +
      "Soyez tranquille : je teste uniquement les composants techniques (écran, caméras, son...) et n'ouvre jamais vos applications personnelles.",
    color: "#1d1d1f",
  },
  {
    id: 2,
    title: "Diagnostic & Tarifs",
    icon: <PsychologyIcon />,
    headline: "Une tarification claire, sans frais cachés.",
    summary: "Le diagnostic est offert pour toute réparation effectuée.",
    firstPara:
      "Qu'il s'agisse d'un écran noir ou d'une panne complexe, je mobilise mon expertise et mes outils de mesure (multimètre) pour isoler l'origine exacte du problème.",
    restDesc:
      "L'expertise technique demande du temps et de la précision :\n\n1. Réparation validée : Le diagnostic est totalement offert.\n2. Interruption à votre demande : Un forfait de 50% de la main-d'œuvre est appliqué pour le travail de recherche effectué.\n\nImportant : Une garantie ne peut être appliquée sur une intervention interrompue avant sa finalisation.",
    color: "#0066cc",
  },
  {
    id: 3,
    title: "Le choix de l'écran",
    icon: <WorkspacePremiumIcon />,
    headline: "À chaque usage, sa technologie d'affichage.",
    summary:
      "Original, OLED ou LCD : je vous oriente vers le meilleur compromis.",
    firstPara:
      "La luminosité et le rendu des couleurs varient selon la gamme choisie.\n\nMon rôle est de vous conseiller la pièce la plus cohérente avec votre utilisation et votre budget.",
    restDesc:
      "Toutes mes pièces sont rigoureusement sélectionnées et garanties.\n\nNotez que sur les gammes 'Budget' (LCD), une légère variation de contraste est normale par rapport à l'écran d'origine.\n\nPrenez le temps de consulter mon guide technique pour choisir en toute connaissance de cause.",
    color: "#6f42c1",
    link: "/screen",
  },
  {
    id: 4,
    title: "Accès & Confidentialité",
    icon: <TouchAppIcon />,
    headline: "Pas de code ? Gardez vos accès rapides actifs.",
    summary: "Vérification des fonctions de base sans déverrouillage.",
    firstPara:
      "Si vous préférez ne pas partager votre code confidentiel, c'est tout à fait possible.\n\nPour que je puisse néanmoins tester l'essentiel, veillez simplement à autoriser l'accès à l'Appareil photo et au Centre de contrôle depuis votre écran verrouillé (dans vos réglages iOS/Android).",
    restDesc:
      "C'est indispensable pour valider le son, les caméras et l'activation des signaux.\n\nImportant : Sans accès au menu complet 'Réglages', je ne peux pas confirmer la stabilité réelle du Wi-Fi, la qualité du Bluetooth ou le bon appairage du Face ID / Touch ID.\n\nPar conséquent, si ces options ne sont pas accessibles ou si le code n'est pas fourni, le bon fonctionnement de ces fonctions de sécurité et de réseau ne pourra pas être couvert par ma garantie technique.",
    color: "#28a745",
  },
  {
    id: 5,
    title: "Micro-soudure & Eau",
    icon: <SettingsSuggestIcon />,
    headline: "Sauver l'appareil ou vos souvenirs.",
    summary: "Expertise dédiée aux cartes mères et aux appareils oxydés.",
    firstPara:
      "Face à une oxydation, chaque minute compte.\n\nMon objectif prioritaire est de stabiliser l'électronique pour tenter d'extraire vos données précieuses.",
    restDesc:
      "Le travail sous microscope permet de traiter les composants critiques, mais un appareil ayant subi un contact avec un liquide reste imprévisible par nature.\n\nAttention : Aucune réussite n'est garantie à 100%.\n\nMon intervention vise avant tout la récupération de vos souvenirs. En raison de l'oxydation, la fiabilité matérielle sur le long terme ne peut être assurée, et aucune garantie de réparation durable ne sera appliquée sur ces cas spécifiques.",
    color: "#e83e8c",
  },
  {
    id: 6,
    title: "Garantie & SAV",
    icon: <ConstructionIcon />,
    headline:
      "Une expertise technique pour définir les limites de l'intervention.",
    summary:
      "Diagnostic précis pour différencier une pièce neuve d'une réparation de fortune.",
    firstPara:
      "Ma garantie s'applique **uniquement** sur les pièces neuves installées (Écran, Batterie, Connecteur).\n\nEn cas de retour, je réalise un audit rigoureux : test au programmateur et mesure des tensions au multimètre. Cela permet de vérifier si le défaut vient de la pièce neuve (garantie) ou d'une défaillance interne de votre carte mère (non garantie).",
    restDesc:
      "**Attention : Aucune garantie n'est possible sur les interventions de désoxydation ou de micro-soudure.**\n\nL'oxydation est un processus instable : un composant critique (CPU, AP, IC, Mémoire) peut lâcher à tout moment. \n\nNote : Pour les ajustements mineurs (nettoyage externe, vérification de connectique), je m'efforcerai de vous aider gracieusement. En revanche, toute nouvelle panne matérielle, changement de pièce ou court-circuit complexe fera l'objet d'un nouveau devis.",
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
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#ffffff",
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
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
            sx={{
              minHeight: { xs: "auto", md: "480px" },
              position: "relative",
            }}
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
                      whiteSpace: "pre-line",
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
                        {isExpanded
                          ? "Réduire les détails"
                          : "Voir les détails"}
                      </Button>
                    </>
                  )}
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
        <Divider sx={{ mt: 3 }} />

        <style>{`
        @keyframes fadeInStable {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
          }
          `}</style>
      </Box>
    </>
  );
};

export default HomeRepair;
