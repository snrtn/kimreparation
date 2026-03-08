import React from "react";
import { Box, Typography, Stack, Container, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const AtelierAtelier = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
  };

  // ✅ 형님이 주신 원본 데이터 반영 (안내 문구)
  const infoNotes = [
    "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
    "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 16, xl: 20 } }}>
      {/* --- 섹션 1: 영업시간 및 안내 사항 --- */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#0066cc",
              mb: 0.8,
              letterSpacing: "-0.01em",
            }}
          >
            Infos Pratiques
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.04em",
              mb: 1.5,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#1d1d1f",
            }}
          >
            Horaires & Infos
          </Typography>
        </Box>

        <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
          <Typography sx={labelStyle}>HORAIRES D'OUVERTURE</Typography>
          <Stack spacing={4} sx={{ mb: 6 }}>
            {/* 정규 영업일 (월, 화, 목, 금) */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2} // 모바일에서 두 텍스트가 붙지 않게 최소 간격 유지
            >
              <Box sx={{ flex: 1 }}>
                {" "}
                {/* 왼쪽 영역이 남는 공간을 다 차지하게 해서 오른쪽을 끝으로 밀어줌 */}
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#86868b",
                    mb: 0.5,
                  }}
                >
                  Lundi, Mardi, Jeudi, Vendredi
                </Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
                  09h00 — 18h00
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#0071e3",
                  fontWeight: 700,
                  textAlign: "right",
                  minWidth: { xs: "120px", sm: "auto" }, // 모바일에서 오른쪽 칸 너비를 일정하게 고정해서 줄을 맞춤
                }}
              >
                RDV uniquement
              </Typography>
            </Stack>

            {/* 유동 영업일 (수, 저녁, 주말) */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={2}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#86868b",
                    mb: 0.5,
                  }}
                >
                  Mercredi, Soirées & Week-ends
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2rem", fontWeight: 500, color: "#0066cc" }}
                >
                  Sur demande
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#86868b",
                  fontWeight: 600,
                  textAlign: "right",
                  minWidth: { xs: "120px", sm: "auto" }, // 위와 똑같은 너비를 줘서 세로 줄을 칼같이 맞춤
                }}
              >
                Selon mes disponibilités
              </Typography>
            </Stack>
          </Stack>

          {/* 안내 박스: 예약제 강조 */}
          <Stack
            spacing={2.5}
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: "#f9f9fb",
              borderRadius: "20px",
              borderLeft: "4px solid #f2f2f7",
            }}
          >
            {infoNotes.map((text, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#424245",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                • {text}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* --- 섹션 2: 유튜브 브릿지 (그대로 유지) --- */}
      <Box sx={{ py: 6, borderTop: "1px solid #e5e5e7" }}>
        <Typography sx={labelStyle}>SUR YOUTUBE</Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="center"
        >
          {/* 쇼츠 영상 */}
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

          {/* 채널 정보 */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.04em" }}
            >
              Kim <br /> Reparation
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
    </Container>
  );
};

export default AtelierAtelier;
