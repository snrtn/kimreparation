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

const solutionData = [
  {
    id: 0,
    title: "Photos & Transparence",

    headline:
      "Votre appareil sous tous les angles pour une réparation sereine.",
    summary:
      "Un suivi visuel complet pour une transparence totale sur l'intervention.",
    firstPara:
      "Pour votre tranquillité, je prends le temps de photographier l'état de votre appareil dès sa réception. \n\nNoter chaque détail extérieur (rayures ou impacts déjà présents) me permet de vous garantir que votre téléphone vous sera rendu exactement dans le même état, la réparation en plus.",
    restDesc:
      "L'ouverture d'un châssis est une opération délicate. Même avec des outils professionnels, de légères marques techniques peuvent parfois apparaître sur les joints d'origine.\n\nSi je découvre une surprise à l'intérieur (traces d'eau, vis manquantes ou ancienne réparation mal faite), je vous envoie immédiatement une photo. Comme ça, on décide ensemble de la suite, sans mauvaise surprise.",
    color: "#000000",
  },
  {
    id: 1,
    title: "Confidentialité & Données",
    headline: "Protection de votre vie privée",
    summary: "Comment sécuriser votre appareil avant l'intervention.",
    firstPara:
      "Sauvegarder vos données est la meilleure sécurité. Si votre écran fonctionne, nous vous conseillons d'utiliser les modes de protection intégrés. Donner votre code est un droit, pas une obligation.",
    restDesc:
      "Étapes de préparation et sauvegarde :\n\n" +
      "• iPhone (iOS 17.5+) :\n" +
      "1. Sauvegarde : Réglages > [Nom] > iCloud > Sauvegarde iCloud > Sauvegarder maintenant.\n" +
      "2. Sécurité : Activez le « Mode Réparation » (Localiser > Appareils).\n\n" +
      "• Samsung :\n" +
      "1. Sauvegarde : Paramètres > Google > Sauvegarde.\n" +
      "2. Sécurité : Activez le « Mode Maintenance » (Paramètres > Entretien de l'appareil).\n\n" +
      "• Autres modèles Android :\n" +
      "Sauvegarde : Paramètres > Google > Sauvegarde > Sauvegarder.\n\n" +
      "Note technique : Si vous ne donnez pas votre code, nous effectuons les tests de base et nous vous contactons. À votre venue, vous saisirez votre code pour finir les tests restants avec nous. Si un problème est détecté, nous le réparons immédiatement. Toutefois, si vous choisissez de repartir avec un défaut constaté ensemble, nous devrons vérifier si la garantie peut s'appliquer ou si un nouveau devis est nécessaire pour cette fonction.\n\n" +
      "Engagement : Nous testons uniquement le matériel (tactile, caméras, son). Vos applications personnelles ne sont jamais ouvertes.",
    color: "#1d1d1f",
  },
  {
    id: 2,
    title: "Diagnostic & Tarifs",

    headline: "Une tarification claire, sans surprise.",
    summary: "Le diagnostic est offert pour toute réparation effectuée.",
    firstPara:
      "Identifier l'origine exacte d'une panne, qu'il s'agisse d'un écran noir ou d'un défaut de circuit, demande une expertise précise. J'utilise des outils de mesure professionnels comme le multimètre pour isoler le problème et vous proposer la solution la plus adaptée.",
    restDesc:
      "Le temps passé à analyser votre appareil est une étape technique essentielle :\n\n" +
      "Si nous procédons à la réparation :\n" +
      "Le diagnostic est totalement gratuit. Vous ne payez que le forfait de réparation convenu, sans frais cachés.\n\n" +
      "En cas d'interruption à votre demande :\n" +
      "Si vous décidez de ne pas poursuivre la réparation après que le travail de recherche a été effectué, un forfait correspondant à 50% de la main-d'œuvre est appliqué. Cela permet de couvrir le temps de démontage et l'expertise technique mobilisée.\n\n" +
      "Note importante : Une garantie ne peut être appliquée sur une intervention qui a été interrompue avant sa finalisation complète.",
    color: "#0066cc",
  },
  {
    id: 3,
    title: "Le choix de votre écran",

    headline: "Plusieurs options pour votre réparation.",
    summary: "Original, OLED ou LCD : des solutions adaptées à votre usage.",
    firstPara:
      "Il existe différentes technologies d'affichage sur le marché. Mon rôle est d'installer la pièce qui correspond au choix que vous avez fait, que vous privilégiez la fidélité des couleurs d'origine ou une solution plus économique pour votre budget.",
    restDesc:
      "Le rendu visuel varie selon la gamme choisie. \n\nPar exemple, sur un écran LCD (gamme Budget), les contrastes et la luminosité sont techniquement différents de l'écran initial. C'est une alternative courante pour remettre en état un appareil à moindre coût.\n\nJe vous invite à consulter mon guide technique pour comparer les caractéristiques de chaque dalle et choisir l'option qui vous convient avant l'intervention.",
    color: "#6f42c1",
    link: "/screen",
  },
  {
    id: 4,
    title: "Écran noir et accès technique",

    headline: "Le diagnostic sur un appareil bloqué.",
    summary: "Comment tester votre téléphone si l'écran ne s'allume plus.",
    firstPara:
      "Si votre écran est totalement noir ou que le tactile ne répond plus, il est impossible d'activer les modes de protection ou de faire une sauvegarde. Dans ce cas, ma priorité est d'installer une nouvelle dalle pour restaurer l'image et le tactile afin de commencer les tests techniques.",
    restDesc:
      "Une fois l'image revenue, l'accès au menu reste nécessaire pour une vérification complète. \n\nSans votre code confidentiel, le test sera limité aux fonctions visibles depuis l'écran de verrouillage (caméras, son, tactile de base). Je ne pourrai pas confirmer le bon fonctionnement du Wi-Fi, du Bluetooth ou des systèmes de sécurité comme le Face ID et le Touch ID. \n\nC'est pourquoi, pour un contrôle total de l'appareil après la réparation, votre collaboration pour l'accès aux réglages est indispensable. Sans cela, ma vérification technique ne portera que sur les composants que j'ai pu réellement tester.",
    color: "#28a745",
  },
  {
    id: 5,
    title: "Micro-soudure & Oxydation",

    headline: "La priorité : sauver vos souvenirs.",
    summary:
      "Intervention technique sur les appareils en contact avec un liquide.",
    firstPara:
      "Face à l'oxydation, chaque minute compte. Mon objectif est de stabiliser les circuits de la carte mère pour tenter d'extraire vos photos et vos fichiers personnels. C'est une intervention de précision qui vise avant tout à récupérer ce qui est irremplaçable : vos données.",
    restDesc:
      "Le travail sous microscope permet de traiter les zones touchées par la corrosion, mais un appareil mouillé reste techniquement imprévisible. \n\nIl est important de comprendre que l'oxydation peut continuer à évoluer avec le temps. Pour cette raison, l'intervention se concentre sur la survie immédiate de l'appareil pour le transfert de vos données. La fiabilité matérielle sur le long terme ne pouvant être certifiée, aucune responsabilité technique ne sera engagée sur la durée de vie du téléphone après ce type de réparation spécifique.",
    color: "#e83e8c",
  },
  {
    id: 6,
    title: "Suivi Technique & SAV",

    headline: "Une expertise pour identifier l'origine de la panne.",
    summary: "Différencier un défaut de pièce d'une panne de carte mère.",
    firstPara:
      "Ma responsabilité s'applique sur les pièces neuves que j'installe, comme l'écran, la batterie ou le connecteur. En cas de problème après la réparation, je réalise un audit technique complet : je teste la pièce avec un programmateur et je mesure les tensions avec un multimètre.",
    restDesc:
      "Ce contrôle permet de vérifier si le défaut vient de la pièce neuve ou d'une défaillance interne de votre carte mère. Si le composant est défectueux, il est remplacé. En revanche, si la panne provient d'un autre circuit de votre téléphone, cela fera l'objet d'un nouveau diagnostic.\n\nIl est important de noter qu'aucune garantie n'est possible sur les interventions liées à l'oxydation ou à la micro-soudure. L'état d'un appareil mouillé est instable par nature : un composant critique peut lâcher à tout moment à cause de la corrosion passée.\n\nPour les petits ajustements comme un nettoyage externe, je le fais avec plaisir et gratuitement. Mais pour toute nouvelle panne matérielle ou choc survenu après la réparation, un nouveau devis sera nécessaire.",
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
        {/* <Divider sx={{ mt: 10 }} /> */}

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
