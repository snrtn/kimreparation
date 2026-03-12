import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// 📌 텍스트 데이터: '전자' 장난감(Jouets Électroniques)임을 명확히 명시
const toysContent = {
  // ✅ 마을 이름은 여기에만 리스트업
  label:
    "Beaumetz-lès-Loges, Basseux, Rivière, Berneville, Simencourt, Bailleulval, Warlus, Monchiet",

  title: "L'Atelier des Jouets Électroniques.\nRéparation & Recyclage.",

  // ✅ 요청하신 대로 건드리지 않고 유지
  description:
    "Un jouet électronique en panne ? \n" +
    "Je lance un programme pilote de réparation gratuite pour les jouets électroniques (valeur neuve max. 60€) des enfants de Beaumetz-lès-Loges et des communes voisines(Basseux, Rivière, Berneville, Simencourt, Bailleulval, Warlus, Monchiet).\n" +
    "Cette initiative bénévole me permet de tester ce service localement avant d'envisager de l'étendre, le tout en complément de mon activité principale.",

  button: "En savoir plus",

  // 📌 defense: 도미실(거주증명) 추가 및 지역 한정 이유(테스트 중) 명시
  defense:
    "* Ce service bénévole étant réservé aux habitants des communes citées, une simple vérification de votre adresse (facture ou pièce d'identité) sera effectuée lors du dépôt pour confirmer que nous sommes voisins.\n" +
    "* Initiative personnelle : Ce programme pilote est une démarche privée et bénévole visant à tester la faisabilité technique du projet de recyclage.\n" +
    "* Priorité à mon activité principale : Les prestations professionnelles (payantes) sont traitées en priorité. Ce service gratuit est effectué sur mon temps libre et peut être suspendu selon ma charge de travail.\n" +
    "* Accueil sur rendez-vous : S'agissant d'un atelier privé, aucun objet ne sera accepté sans demande de prise en charge préalable.\n" +
    "* Service bénévole (Aucun achat de pièces) : Je fonctionne uniquement sur la base de la réparation ou du recyclage de composants existants. Aucun engagement de résultat ou de délai ne peut être garanti.",
};

const HomeToy = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        py: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        {/* 디자인 프레임 */}
        <Box
          sx={{
            position: "relative",
            border: "1px solid #d2d2d7",
            borderRadius: "4px",
            p: { xs: 4, md: 8 },
            backgroundImage:
              "linear-gradient(#fbfbfd 1px, transparent 1px), linear-gradient(90deg, #f2f2f2 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          {/* 모서리 포인트 */}
          <Box
            sx={{
              position: "absolute",
              top: 1,
              left: 1,
              width: "10px",
              height: "10px",
              borderTop: "2px solid #1d1d1f",
              borderLeft: "2px solid #1d1d1f",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 1,
              right: 1,
              width: "10px",
              height: "10px",
              borderTop: "2px solid #1d1d1f",
              borderRight: "2px solid #1d1d1f",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 1,
              left: 1,
              width: "10px",
              height: "10px",
              borderBottom: "2px solid #1d1d1f",
              borderLeft: "2px solid #1d1d1f",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 1,
              right: 1,
              width: "10px",
              height: "10px",
              borderBottom: "2px solid #1d1d1f",
              borderRight: "2px solid #1d1d1f",
            }}
          />

          <Stack
            spacing={0}
            sx={{ maxWidth: "900px", position: "relative", zIndex: 1 }}
          >
            {/* 상단 라벨 */}
            <Typography
              sx={{
                color: "#86868b",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 1.5,
                display: "inline-flex",
                alignItems: "center",
                "&::before": {
                  content: '""',
                  display: "inline-block",
                  width: "20px",
                  height: "2px",
                  bgcolor: "#1d1d1f",
                  mr: 1.5,
                },
              }}
            >
              {toysContent.label}
            </Typography>

            {/* 메인 타이틀: '전자' 장난감 강조 */}
            <Typography
              variant="h2"
              sx={{
                color: "#1d1d1f",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.6rem" },
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                whiteSpace: "pre-line",
                mb: 3,
              }}
            >
              {toysContent.title}
            </Typography>

            {/* 설명: 전자 장난감 수리임을 명시 */}
            <Typography
              sx={{
                color: "#424245",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
                mb: 6,
              }}
            >
              {toysContent.description}
            </Typography>

            {/* 버튼 */}
            <Box>
              <Button
                component={RouterLink} // 💡 MUI 버튼을 리액트 라우터 링크로 변환
                to="/toy"
                disableRipple
                sx={{
                  color: "#1d1d1f",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  px: 5,
                  py: 2,
                  bgcolor: "#FFD60A",
                  borderRadius: "16px",
                  border: "2px solid #1d1d1f",
                  boxShadow: "0 6px 0 #b4860f",
                  transition: "all 0.1s ease",
                  "&:hover": {
                    bgcolor: "#FFC300",
                    boxShadow: "0 6px 0 #b4860f",
                  },
                  "&:active": {
                    transform: "translateY(4px)",
                    boxShadow: "0 2px 0 #b4860f",
                  },
                }}
              >
                {toysContent.button}
              </Button>
            </Box>

            {/* 하단 방패 주석 */}
            <Typography
              sx={{
                mt: 4,
                color: "#86868b",
                fontSize: "0.85rem",
                fontWeight: 400,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {toysContent.defense}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeToy;
