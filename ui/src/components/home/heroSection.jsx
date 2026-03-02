import { Box, Container, Typography, Button, Stack } from "@mui/material";

const HeroSection = ({ onOpenModal }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "#ffffff",
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, sm: 2, md: 22 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* 기존 flex: 1.2 레이아웃 유지 */}
          <Box sx={{ flex: 1.2, width: "100%" }}>
            <Stack spacing={0}>
              {/* 상단 포인트 문구 */}
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#0066cc",
                  mb: 1.5,
                  letterSpacing: "0.02em",
                }}
              >
                Besoin d'aide ?
              </Typography>

              {/* 메인 타이틀: 레이아웃은 그대로, 크기만 적당하게(3.5rem) */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#1d1d1f",
                  letterSpacing: "-0.03em",
                }}
              >
                Obtenez votre
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#0066cc",
                  letterSpacing: "-0.03em",
                }}
              >
                devis gratuit.
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#1d1d1f",
                  letterSpacing: "-0.03em",
                  mb: 1,
                }}
              >
                En toute clarté.
              </Typography>

              {/* 설명 영역 */}
              <Typography
                sx={{
                  color: "#86868b",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  maxWidth: "540px",
                  mx: { xs: "auto", md: 0 },
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                Écrans, batteries ou pannes complexes : nous analysons votre
                appareil avec rigueur. <br /> Profitez d'une estimation claire
                et transparente pour vous permettre de choisir la meilleure
                option de remise en état.
              </Typography>

              {/* 검색 필드 대신 버튼으로만 교체 (레이아웃 위치 고정) */}
              <Box
                sx={{
                  pt: { xs: 4, md: 6 },
                  width: "100%",
                }}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    onClick={onOpenModal}
                    sx={{
                      bgcolor: "#0071e3",
                      color: "#fff",
                      borderRadius: "50px",
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.2, md: 1.5 },
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#0077ed", boxShadow: "none" },
                    }}
                  >
                    Devis gratuit
                  </Button>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    color: "#a1a1a6",
                    fontWeight: 400,
                    mt: 1,
                    display: "block",
                    fontSize: "0.8rem",
                  }}
                >
                  * Sans engagement de votre part.
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* 기존 flex: 0.8 빈 박스 레이아웃 유지 */}
          <Box sx={{ flex: 0.8, display: { xs: "none", md: "block" } }} />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
