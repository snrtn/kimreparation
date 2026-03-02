import React from "react";
import { Box, Typography, Stack, Container, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatIcon from "@mui/icons-material/Chat";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const AtelierHoraires = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
  };

  return (
    <Container maxWidth="md">
      {/* --- 섹션 1: 영업시간 (기존 유지) --- */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 16, xl: 20 },
        }}
      >
        <Box sx={{ mb: 3 }}>
          {/* 하이라이트 카테고리 (애플 블루 스타일) */}
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#0066cc", // 애플 공식 강조 블루
              mb: 0.8,
              letterSpacing: "-0.01em",
            }}
          >
            Infos Pratiques
          </Typography>

          {/* 메인 타이틀 */}
          <Typography
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.04em",
              mb: 1.5,
              fontSize: "2.5rem", // 조금 더 키워서 시원하게
              color: "#1d1d1f",
            }}
          >
            Horaires & Infos
          </Typography>
        </Box>

        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>HORAIRES D'OUVERTURE</Typography>
          <Stack spacing={4}>
            {/* 오전 - 출장 가능 */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Box>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
                  Matin
                </Typography>
                <Typography
                  sx={{ fontSize: "0.8rem", color: "#0071e3", fontWeight: 600 }}
                >
                  Déplacement possible
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#1d1d1f", // 낮에는 배경이 밝으니 d2d2d7보다 조금 더 진한 회색으로 가독성 잡음
                    fontStyle: "italic",
                    mt: 0.2,
                  }}
                >
                  RDV à l'Atelier ou Déplacement
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#1d1d1f" }}
              >
                09:00 — 12:00
              </Typography>
            </Stack>

            {/* 오후 - 출장 가능 */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Box>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
                  Après-midi
                </Typography>
                <Typography
                  sx={{ fontSize: "0.8rem", color: "#0071e3", fontWeight: 600 }}
                >
                  Déplacement possible
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#1d1d1f", // 낮에는 배경이 밝으니 d2d2d7보다 조금 더 진한 회색으로 가독성 잡음
                    fontStyle: "italic",
                    mt: 0.2,
                  }}
                >
                  RDV à l'Atelier ou Déplacement
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#1d1d1f" }}
              >
                14:00 — 18:00
              </Typography>
            </Stack>

            {/* <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center" // baseline보다 center가 네온 박스 느낌에 더 잘 어울립니다
            >
              <Box>
                <Typography
                  sx={{ fontSize: "1.2rem", fontWeight: 500, color: "#1d1d1f" }}
                >
                  Service Nuit
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#0071e3", // 네온 초록색
                    fontWeight: 700,
                  }}
                >
                  Uniquement à l'Atelier
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#1d1d1f",
                    fontStyle: "italic",
                  }}
                >
                  RDV au parking public
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0071e3", // 시간도 네온 초록
                }}
              >
                21:00 — 00:00
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: 500, color: "#787878" }}
              >
                Samedi - Dimanche
              </Typography>
              <Typography
                sx={{
                  color: "#787878",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                Fermé
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#787878",
                    fontStyle: "italic",
                  }}
                >
                  Urgence : Contactez-nous
                </Typography>
              </Typography>
            </Stack> */}
          </Stack>
        </Box>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center", // 가로 중앙 정렬
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              // 반응형 사이즈: 기본은 280px, 화면 작아지면 90%만 차지
              width: { xs: "90%", sm: "280px" },
              py: 1.8, // 두께를 살짝 줄여서 더 날렵하게
              color: "#0071e3",
              borderColor: "#d2d2d7",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 800,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                borderColor: "#86868b",
                bgcolor: "transparent",
              },
            }}
          >
            Devis Gratuit
          </Button>
          {/* 헛걸음 방지 강조 문구 */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // 가로 중앙 정렬
            width: "100%",
          }}
        >
          <Typography
            sx={{
              mt: 2,
              fontSize: "0.75rem",
              color: "#1d1d1f",
              fontStyle: "italic", // 이탈릭체 적용
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: "320px", // 너무 길게 퍼지지 않게 조절
              px: 2,
            }}
          >
            Utilisez ce bouton "Devis Gratuit" pour nous indiquer le modèle et
            la panne : nous vérifierons le stock pour vous éviter un déplacement
            inutile.
          </Typography>
        </Box>
      </Box>

      {/* --- 섹션 2: 유튜브 브릿지 (왼쪽 쇼츠 + 오른쪽 바로가기) --- */}
      <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
        <Typography sx={labelStyle}>SUR YOUTUBE</Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
        >
          {/* 왼쪽: 쇼츠 영상 (세로형) */}
          <Box
            sx={{
              width: { xs: "100%", md: "280px" },
              aspectRatio: "9 / 16",
              borderRadius: "16px",
              overflow: "hidden",
              bgcolor: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              filter: "grayscale(0.2)",
            }}
          >
            <iframe
              style={{ width: "100%", height: "100%", border: 0 }}
              src="https://www.youtube.com/embed/YOUR_SHORTS_ID"
              title="Kim Reparation Shorts"
              allowFullScreen
            />
          </Box>

          {/* 오른쪽: 채널 바로가기 정보 */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, mb: 1, letterSpacing: "-0.04em" }}
            >
              Kim <br /> Reparation
            </Typography>
            <Typography variant="body1" sx={{ color: "#86868b", mb: 4 }}>
              Réparer d'abord
            </Typography>

            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              href="https://youtube.com/@YOUR_CHANNEL_ID"
              target="_blank"
              sx={{
                bgcolor: "#ff0000",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": { bgcolor: "#cc0000", boxShadow: "none" },
              }}
            >
              Voir la chaîne
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* --- 섹션 3: 법적 정보 (프랑스 법적 필수 요건 완벽 준수) --- */}
      <Box sx={{ pb: 15, borderTop: "1px solid #e5e5e7", mt: 15 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            pt: 10,
            gap: { xs: 8, md: 0 },
          }}
        >
          {/* [좌측] ÉDITEUR : 운영자 정보 (필수) */}
          {/* [좌측] ÉDITEUR : 운영자 정보 */}
          <Box
            sx={{
              pr: { md: 8 },
              borderRight: { md: "1px solid #f2f2f2" },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 800,
                color: "#1d1d1f",
                mb: 4,
                letterSpacing: "0.2em",
              }}
            >
              ÉDITEUR
            </Typography>

            <Stack spacing={2}>
              {/* 상호명 및 대표자 - 우측처럼 한 줄씩 정리 */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Structure
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  Kim Réparation (EI)
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Dirigeant
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  KIM Hanjun
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  SIRET
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  [14자리 번호]
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Siège social
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textAlign: "right",
                  }}
                >
                  [주소 기입]
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Contact
                </Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                    [이메일]
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                    [전화번호]
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* [우측] SYSTEM : 기술 스택 및 호스팅 명세 (필수) */}
          <Box sx={{ pl: { md: 8 } }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 800,
                color: "#1d1d1f",
                mb: 4,
                letterSpacing: "0.2em",
              }}
            >
              SYSTEM & HÉBERGEMENT
            </Typography>
            <Stack spacing={2}>
              {/* 도메인/DNS: 호스팅거 정보 필수 */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  DNS / Domain
                </Typography>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                    Hostinger
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#c1c1c1" }}>
                    Larnaca, Chypre
                  </Typography>
                </Box>
              </Stack>

              {/* 프론트: 깃헙 */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Frontend
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  GitHub Pages
                </Typography>
              </Stack>

              {/* 백엔드: 버셀 */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Backend
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  Vercel
                </Typography>
              </Stack>

              {/* 데이터베이스: 몽고DB */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid #f5f5f7", pb: 1.5 }}
              >
                <Typography sx={{ fontSize: "0.8rem", color: "#86868b" }}>
                  Database
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  MongoDB
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "#86868b",
                  textAlign: "center",
                  mt: 2,
                  pt: 2,
                  borderTop: "1px dashed #f5f5f7", // 위 정보들과 살짝 구분
                  fontStyle: "italic",
                }}
              >
                Ce site web a été entièrement conçu et réalisé par nos soins.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AtelierHoraires;
