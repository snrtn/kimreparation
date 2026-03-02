import { Box, Container, Typography, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom"; // useLocation 추가

const FooterSub = () => {
  const location = useLocation(); // 현재 경로 가져오기
  const currentYear = new Date().getFullYear();

  // 현재 페이지가 보증/약관 페이지인지 확인
  const isWarrantyPage = location.pathname === "/atelier/atelierWarranty";
  const isHorairesPage = location.pathname === "/atelier/atelierHoraires";

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        bgcolor: "transparent",
        py: { xs: 4, md: 6 },
        borderTop: "1px solid #f2f2f7",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          {/* 데이터 백업 골든타임 안내 */}
          <Typography
            sx={{ fontSize: "0.75rem", color: "#86868b", lineHeight: 1.6 }}
          >
            Si votre écran fonctionne encore après une chute ou un contact avec
            l’eau, <strong>sauvegardez immédiatement vos données</strong>{" "}
            (iCloud, Google Drive). Un appareil endommagé peut cesser de
            répondre à tout moment.
          </Typography>

          {/* 기술적 고지 */}
          <Typography
            sx={{ fontSize: "0.75rem", color: "#86868b", lineHeight: 1.6 }}
          >
            Note technique : Un choc laisse parfois de{" "}
            <strong>minuscules fissures invisibles</strong>. Même si tout semble
            en ordre, ces fragilités peuvent évoluer. C'est un risque structurel
            que nous partageons en toute transparence.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}
          >
            {/* 🔥 현재 그 페이지가 아닐 때만 링크를 보여줌 */}
            {!isWarrantyPage && (
              <Typography
                component={RouterLink}
                to="/atelier/atelierWarranty"
                sx={{
                  fontSize: "0.75rem",
                  color: "#424245",
                  textDecoration: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#1d1d1f" },
                }}
              >
                Garanties & Conditions →
              </Typography>
            )}

            {/* 오픈 시간 링크 (이것도 그 페이지에 있으면 숨기고 싶으면 똑같이 처리 가능) */}

            {!isHorairesPage && (
              <Typography
                component={RouterLink}
                to="/atelier/atelierHoraires"
                sx={{
                  fontSize: "0.75rem",
                  color: "#424245",
                  textDecoration: "none",
                  "&:hover": { color: "#1d1d1f" },
                }}
              >
                Horaires & Infos Légales
              </Typography>
            )}

            {/* 저작권 표시는 어디서든 보여야 하니까 남겨둠 */}
            <Typography sx={{ fontSize: "0.75rem", color: "#86868b" }}>
              © {currentYear} KIM REPARATION. TOUS DROITS RÉSERVÉS.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSub;
