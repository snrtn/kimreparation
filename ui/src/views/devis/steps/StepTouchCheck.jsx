import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
    </Box>
  );
};

export default StepTouchCheck;
