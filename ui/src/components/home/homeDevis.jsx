import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HomeDevis = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        py: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "750px", textAlign: "left" }}>
          <Typography
            sx={{
              color: "#86868b",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              mb: 1.5,
              textTransform: "uppercase",
            }}
          >
            Diagnostic
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              mb: 3,
              textAlign: "left",
            }}
          >
            Comprendre la panne, <br />
            réparer l'appareil.
          </Typography>

          <Typography
            sx={{
              color: "#424245",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 6,
              textAlign: "left",
            }}
          >
            Dites-nous ce qui ne va pas avec votre appareil. <br />
            Un diagnostic clair nous permet d'appliquer la solution technique
            adaptée.
          </Typography>

          <Button
            component={RouterLink} // 💡 MUI 버튼을 리액트 라우터 링크로 변환
            to="/devis"
            disableRipple
            sx={{
              p: 0,
              pb: 0.5, // 📌 모바일에서도 밑줄이 들어갈 공간 확보
              fontSize: "1.5rem",
              color: "#E65100",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "inline-flex",
              position: "relative",
              bgcolor: "transparent",
              overflow: "visible",
              "&:hover": {
                bgcolor: "transparent",
                color: "#86868b",
                "& .line-horizontal, & .line-mobile": { bgcolor: "#86868b" }, // 모바일 선도 터치 시 색상 변경
                "& .line-diag-up": {
                  bgcolor: "#86868b",
                  width: "60px",
                  transition: "width 0.3s ease 0s, background-color 0.3s ease",
                },
                "& .line-diag-down": {
                  bgcolor: "#86868b",
                  width: "60px",
                  transition:
                    "width 0.3s ease 0.3s, background-color 0.3s ease",
                },
                "& .line-diag-down::before, & .line-diag-down::after": {
                  bgcolor: "#86868b",
                  width: "16px",
                  transition:
                    "width 0.2s ease 0.6s, background-color 0.3s ease",
                },
              },
            }}
          >
            Choisir l'appareil
            {/* 📌 0단: 모바일 전용 심플 밑줄 (PC에선 숨김) */}
            <Box
              className="line-mobile"
              component="span"
              sx={{
                display: { xs: "block", md: "none" }, // 모바일/태블릿에서만 보임
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%", // 글자 길이에 딱 맞춤 (튀어나가지 않게)
                height: "3px",
                bgcolor: "#1d1d1f",
                borderRadius: "10px",
                transition: "background-color 0.3s ease",
              }}
            />
            {/* 1단: 가로선 (모바일/태블릿에선 숨김, PC에서만 보임) */}
            <Box
              className="line-horizontal"
              component="span"
              sx={{
                display: { xs: "none", md: "block" }, // PC에서만 보임
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "calc(100% + 20px)",
                height: "3px",
                bgcolor: "#1d1d1f",
                borderRadius: "10px",
                transition: "background-color 0.3s ease",
              }}
            />
            {/* 2단: 위로 꺾여 올라가는 선 (/) */}
            <Box
              className="line-diag-up"
              component="span"
              sx={{
                display: { xs: "none", md: "block" }, // PC에서만 보임
                position: "absolute",
                bottom: 0,
                left: "calc(100% + 19px)",
                width: "18px",
                height: "3px",
                bgcolor: "#1d1d1f",
                borderRadius: "10px",
                transform: "rotate(-45deg)",
                transformOrigin: "left center",
                transition: "width 0.3s ease 0.5s, background-color 0.3s ease",
              }}
            >
              {/* 3단: 다시 아래로 꺾이는 선 (\) */}
              <Box
                className="line-diag-down"
                component="span"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "97.9%",
                  width: "0px",
                  height: "3px",
                  bgcolor: "#1d1d1f",
                  borderRadius: "10px",
                  transform: "rotate(90deg)",
                  transformOrigin: "left center",
                  transition:
                    "width 0.3s ease 0.2s, background-color 0.3s ease",

                  // 4단: 화살표 날개 (>)
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    right: "1px",
                    top: 0,
                    width: "0px",
                    height: "3px",
                    bgcolor: "#1d1d1f",
                    borderRadius: "10px",
                    transformOrigin: "right center",
                    transition:
                      "width 0.2s ease 0s, background-color 0.3s ease",
                  },
                  "&::before": { transform: "rotate(45deg)" },
                  "&::after": { transform: "rotate(-45deg)" },
                }}
              />
            </Box>
          </Button>

          {/* ✅ 견적(Devis)과 직접 관련된 두 가지만 남겼습니다. */}
          <Stack spacing={1.5} sx={{ mt: 6, maxWidth: "750px" }}>
            <Typography
              sx={{ color: "#86868b", fontSize: "0.85rem", lineHeight: 1.6 }}
            >
              • <strong>Estimation :</strong> Le montant du devis est basé sur
              un remplacement standard de pièce. <br />
              Le tarif final sera validé à l'atelier après l'examen technique de
              votre appareil.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeDevis;
