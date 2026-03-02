import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#FCFCFC",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid #d2d2d7",
        zIndex: 1200,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* 1. 상단: 부품 수급 팩트 안내 */}
          <Box sx={{ maxWidth: "850px" }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2, color: "#1d1d1f" }}
            >
              <VerifiedUserOutlinedIcon sx={{ fontSize: "1.2rem" }} />
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 700 }}>
                Engagement de qualité et traçabilité
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: "0.85rem", color: "#424245", lineHeight: 1.7 }}
            >
              Nos composants sont exclusivement sélectionnés auprès de{" "}
              <strong>
                réseaux de distribution agréés et de fournisseurs certifiés
              </strong>
              . Cette rigueur nous permet de garantir la conformité technique de
              chaque pièce installée et d'assurer une traçabilité totale.
            </Typography>
          </Box>

          {/* 2. 중간: 메인 버튼 (Garantie/Médiation 다 포함된 페이지로 연결) */}
          <Box>
            <Typography sx={{ fontSize: "0.8rem", color: "#86868b", mb: 2 }}>
              Consultez notre engagement, vos garanties et droits :
            </Typography>
            <Button
              component={RouterLink}
              to="/atelier/atelierWarranty"
              variant="text"
              sx={{
                color: "#0066cc",
                p: 0,
                fontSize: "0.85rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                  bgcolor: "transparent",
                },
              }}
            >
              Engagement, Garanties & Médiation (CGS) →
            </Button>
          </Box>

          <Divider sx={{ borderColor: "#d2d2d7", my: 2 }} />

          {/* 3. 하단: 저작권 및 형님이 만드실 Mentions Légales */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
          >
            <Typography sx={{ fontSize: "0.75rem", color: "#86868b" }}>
              Copyright © {currentYear} KIM REPARATION. TOUS DROITS RÉSERVÉS.
            </Typography>

            <Stack direction="row" spacing={3}>
              {/* 중복되던 Garanties 링크는 삭제함. 아래는 형님이 작업하실 링크! */}
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
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterMain;
