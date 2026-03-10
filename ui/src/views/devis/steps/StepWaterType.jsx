import React from "react";
import { Typography, Stack, Button, Box, Collapse, Paper } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepWaterType = ({ selected, onUpdate }) => {
  const options = [
    { id: "tap", label: "Eau douce (Robinet, Pluie, Toilettes)" },
    { id: "sweet", label: "Boissons sucrées (Soda, Jus, Café, Alcool)" },
    { id: "sea", label: "Eau de mer (Eau salée)" },
    { id: "pool", label: "Eau de piscine (Eau chlorée)" },
    { id: "soap", label: "Eau savonneuse / Lessive (Lave-linge)" },
    { id: "nature", label: "Eau naturelle (Rivière, Étang, Flaque)" },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 1,
          color: "#1d1d1f",
          fontSize: { xs: "1.6rem", md: "2.125rem" },
        }}
      >
        Type de liquide
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Le type de liquide impacte directement la vitesse de corrosion de vos
        composants.
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => onUpdate({ waterType: opt.id })}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: "16px",
                justifyContent: "space-between",
                textAlign: "left",
                border: isSelected ? "2px solid #0071e3" : "1px solid #d2d2d7",
                bgcolor: isSelected ? "#eff7ff" : "white",
                textTransform: "none",
                color: isSelected ? "#0071e3" : "#1d1d1f",
                fontWeight: 700,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#0071e3",
                  bgcolor: "#eff7ff",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {opt.label}
              </Typography>
              {isSelected && (
                <CheckCircleIcon
                  sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
                />
              )}
            </Button>
          );
        })}
      </Stack>

      {/* 🟢 1. Eau douce */}
      <Collapse in={selected === "tap"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Même l'eau douce provoque une lente oxydation. Si l'appareil n'est
            pas traité, des pannes peuvent apparaître avec le temps.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🟠 2. Boissons sucrées */}
      <Collapse in={selected === "sweet"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Le sucre laisse des résidus collants qui peuvent créer des
            courts-circuits. Un nettoyage adapté est nécessaire pour préserver
            vos composants.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🔴 3. Eau de mer */}
      <Collapse in={selected === "sea"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            L'eau salée est particulièrement corrosive pour les métaux. Il est
            conseillé de ne jamais charger l'appareil pour maximiser ses chances
            de survie.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🟡 4. Eau de piscine */}
      <Collapse in={selected === "pool"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Le chlore attaque progressivement les joints et les métaux. Un
            rinçage approprié en atelier est nécessaire pour stopper l'oxydation
            interne.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🔵 5. Eau savonneuse */}
      <Collapse in={selected === "soap"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Le savon annule l'étanchéité naturelle de l'appareil et facilite la
            pénétration des liquides. Un entretien adapté est recommandé au plus
            vite.
          </Typography>
        </Paper>
      </Collapse>

      {/* 🟤 6. Eau naturelle */}
      <Collapse in={selected === "nature"}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            mb: 2,
            bgcolor: "#f0f7ff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #0071e3",
          }}
        >
          <InfoOutlinedIcon
            sx={{
              color: "#0071e3",
              mr: 1.5,
              mt: 0.2,
              fontSize: { xs: 20, md: 22 },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#004080",
              lineHeight: 1.5,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Le saviez-vous ?</strong>
            <br />
            Les micro-particules et la boue continuent d'agir après le séchage.
            Un contrôle technique adapté est préconisé pour éviter des dommages
            futurs.
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default StepWaterType;
