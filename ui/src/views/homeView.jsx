import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HeroSection from "@components/home/heroSection";
import HomeScreen from "@components/home/homeScreen";
import HomeRepair from "@components/home/homeRepair";
import HomeDevis from "@components/home/homeDevis";
import HomeToy from "@components/home/homeToy";
import HomeInfos from "@components/home/homeInfos";

const HomeView = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  const handleClose = () => {
    if (isCheck) {
      setShowBanner(false);
    }
  };

  return (
    <div style={{ height: "100%", position: "relative" }}>
      {showBanner && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 10000,
            bgcolor: "rgba(255, 255, 255, 0.9)", // 블러 효과를 위해 투명도 살짝 조절
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              width: "100%",
              textAlign: "center",
              p: 4,
              borderRadius: "28px",
              bgcolor: "white",
              border: "1px solid #d2d2d7",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 48, color: "#0071e3", mb: 2 }} />

            <Typography
              variant="h5"
              sx={{ fontWeight: 800, color: "#1d1d1f", mb: 2 }}
            >
              Version de Démonstration
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                color: "#424245",
                mb: 4,
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Ceci est une version démo de <strong>Kim Reparation</strong>.
              <br />
              L'envoi de devis est désactivé sur cette plateforme.
              <br />
              Les textes sont susceptibles d'être modifiés à tout moment.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheck}
                    onChange={(e) => setIsCheck(e.target.checked)}
                    sx={{
                      color: "#0071e3",
                      "&.Mui-checked": { color: "#0071e3" },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#1d1d1f",
                      fontWeight: 600,
                    }}
                  >
                    J'ai compris
                  </Typography>
                }
              />

              <Button
                variant="contained"
                fullWidth
                disabled={!isCheck}
                onClick={handleClose}
                sx={{
                  py: 2,
                  borderRadius: "14px",
                  bgcolor: "#0071e3",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "1rem",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#005bb5", boxShadow: "none" },
                  "&.Mui-disabled": { bgcolor: "#f5f5f7", color: "#d2d2d7" },
                }}
              >
                ACCÉDER AU SITE
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      <Box>
        <HeroSection />
        <HomeScreen />
        <HomeRepair />
        <HomeDevis />
        <HomeToy />
        <HomeInfos />
      </Box>
    </div>
  );
};

export default HomeView;
