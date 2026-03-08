import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

// 📌 텍스트 데이터: '전자' 장난감(Jouets Électroniques)임을 명확히 명시
const toysContent = {
  label: "Beaumetz-lès-Loges",
  title: "L'Atelier des Jouets Électroniques.\nRéparation & Recyclage.",

  description:
    "Un jouet électronique en panne ? Je lance un programme pilote de réparation gratuite pour les jouets électroniques (valeur neuve max. 60€) des enfants de Beaumetz-lès-Loges et des communes voisines. Cette initiative bénévole me permet de tester ce service localement avant d'envisager de l'étendre, le tout en complément de mon activité principale.",

  button: "En savoir plus",

  // 📌 defense: 기증 요청 절차(solliciter)와 분리 시 기스 발생 가능성 명시
  defense:
    "* Service bénévole (Aucun achat de pièces neuves).\n" +
    "* Si le processeur (MCU) est HS après diagnostic, nous vous contacterons pour solliciter le don du jouet.\n" +
    "* Les composants (Audio, Drivers, Haut-parleurs, CMS) sont récupérés pour servir de pièces de rechange sur d'autres réparations.\n" + // ✅ '다른 수리 시 부품으로 쓰기 위해 수거한다'고 명시
    "* L'aspect extérieur reste globalement identique, mais des rayures ou traces d'ouverture peuvent apparaître lors du démontage.\n" + // ✅ 기스/흔적 남을 수 있다고 팩트 강조
    "* La coque ou l'enveloppe vide peut être récupérée sur demande.",
};

const HomeToy = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        pt: { xs: 10, md: 15 },
        pb: { xs: 12, md: 20 },
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
            sx={{ maxWidth: "800px", position: "relative", zIndex: 1 }}
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
                mb: 6,
              }}
            >
              {toysContent.description}
            </Typography>

            {/* 버튼 */}
            <Box>
              <Button
                href="/toy"
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
