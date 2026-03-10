import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const DevisOther = () => {
  return (
    <Box
      sx={{
        pt: { xs: 15, md: 20 },
        pb: 10,
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        {/* 🛠️ 공사 중을 나타내는 깔끔한 아이콘 */}
        <BuildOutlinedIcon sx={{ fontSize: 64, color: "#86868b", mb: 3 }} />

        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 2, color: "#1d1d1f" }}
        >
          Bientôt disponible
        </Typography>

        <Typography
          sx={{ color: "#424245", fontSize: "1.1rem", mb: 5, lineHeight: 1.6 }}
        >
          Le service de diagnostic pour les{" "}
          <strong>tablettes et ordinateurs portables</strong> est actuellement
          en cours de préparation. Merci de votre patience !
        </Typography>

        {/* 🔙 막다른 길 방지용 홈버튼 */}
        <Button
          variant="contained"
          href="/"
          sx={{
            p: 1.5,
            px: 4,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Retour à l'accueil
        </Button>
      </Container>
    </Box>
  );
};

export default DevisOther;
