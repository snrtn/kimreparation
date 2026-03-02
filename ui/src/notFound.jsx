import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        textAlign: "center",
        py: { xs: 0, md: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 404 다람쥐 이미지 영역 */}
      <Box sx={{ width: "100%", maxWidth: "300px" }}>
        <img
          src="/assets/404.png" // 경로 확인 필수!
          alt="Page Non Trouvée"
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 800 }}>
        Oups ! Page introuvable.
      </Typography>

      <Typography sx={{ color: "#666", mb: 4, wordBreak: "keep-all" }}>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          bgcolor: "rgb(0, 114, 228)",
          px: 5,
          py: 1.8,
          borderRadius: "50px",
          fontWeight: 700,
          fontSize: "1rem",
          boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
          "&:hover": {
            bgcolor: "rgb(0, 90, 180)",
          },
        }}
      >
        Retour à l'accueil
      </Button>
    </Container>
  );
};

export default NotFound;
