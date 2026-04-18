import React from "react";
import { Typography, Stack, Button, Box, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";

const StepTouchCheck = ({ selected, onUpdate }) => {
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
        Test du Tactile
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Le tactile répond-il correctement à vos commandes ?
      </Typography>

      <Stack spacing={1.5}>
        <Button
          variant="outlined"
          onClick={() => onUpdate({ touchWorks: "yes" })}
          sx={{
            p: { xs: 2, md: 2.5 },
            borderRadius: "16px",
            justifyContent: "space-between",
            textAlign: "left",
            border:
              selected === "yes" ? "2px solid #0071e3" : "1px solid #d2d2d7",
            bgcolor: selected === "yes" ? "#eff7ff" : "white",
            textTransform: "none",
            color: selected === "yes" ? "#0071e3" : "#1d1d1f",
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
            Oui, le tactile fonctionne normalement
          </Typography>
          {selected === "yes" && (
            <CheckCircleIcon
              sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
            />
          )}
        </Button>

        <Button
          variant="outlined"
          onClick={() => onUpdate({ touchWorks: "no" })}
          sx={{
            p: { xs: 2, md: 2.5 },
            borderRadius: "16px",
            justifyContent: "space-between",
            textAlign: "left",
            border:
              selected === "no" ? "2px solid #0071e3" : "1px solid #d2d2d7",
            bgcolor: selected === "no" ? "#eff7ff" : "white",
            textTransform: "none",
            color: selected === "no" ? "#0071e3" : "#1d1d1f",
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
            Non, le tactile présente des dysfonctionnements
          </Typography>
          {selected === "no" && (
            <CheckCircleIcon
              sx={{ color: "#0071e3", fontSize: { xs: 20, md: 24 } }}
            />
          )}
        </Button>
      </Stack>

      {selected === "no" && (
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 2, md: 2.5 },
            bgcolor: "#fff8e1",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #f5a623",
          }}
        >
          <BuildCircleOutlinedIcon
            sx={{ color: "#f5a623", mr: 1.5, mt: 0.2, fontSize: { xs: 20, md: 22 }, flexShrink: 0 }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7a4f00",
              lineHeight: 1.6,
              fontWeight: 500,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            <strong>Information importante</strong>
            <br />
            Si le tactile ne fonctionne pas, il nous est impossible de vérifier
            à distance la caméra, le son et les connexions (Wi-Fi / Bluetooth).{" "}
            <strong>
              Ces fonctionnalités seront testées directement après la réparation
              de l'écran.
            </strong>
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default StepTouchCheck;
