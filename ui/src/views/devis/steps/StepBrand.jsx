import React from "react";
import {
  Typography,
  Stack,
  Button,
  Box,
  Collapse,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepBrand = ({ brand = "", customBrand = "", onUpdate }) => {
  const options = [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "xiaomi", label: "Xiaomi" },
    { id: "google", label: "Google" },
    { id: "oppo", label: "Oppo" },
    { id: "huawei", label: "Huawei" },
    { id: "other", label: "Autre marque (Préciser)" },
  ];

  const handleToggle = (id) => {
    onUpdate({ brand: id });
    if (id !== "other") {
      onUpdate({ customBrand: "" });
    }
  };

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
        Marque de l'appareil
      </Typography>
      <Typography
        sx={{
          color: "#424245",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Quelle est la marque de votre téléphone ?
      </Typography>

      <Stack spacing={1.5} sx={{ mb: 4 }}>
        {options.map((opt) => {
          const isSelected = brand === opt.id;
          return (
            <Button
              key={opt.id}
              variant="outlined"
              onClick={() => handleToggle(opt.id)}
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
                "&:hover": { borderColor: "#0071e3", bgcolor: "#eff7ff" },
              }}
            >
              <Typography
                sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", md: "1rem" } }}
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

      {/* 기타 브랜드 직접 입력란 */}
      <Collapse in={brand === "other"}>
        <Box sx={{ p: 1 }}>
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 700,
              fontSize: "0.95rem",
              mb: 1.5,
            }}
          >
            Veuillez préciser la marque :
          </Typography>
          <TextField
            fullWidth
            placeholder="Ex: OnePlus, Sony, Motorola..."
            value={customBrand}
            onChange={(e) => onUpdate({ customBrand: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "#fbfbfd",
                "&.Mui-focused fieldset": {
                  borderColor: "#0071e3",
                  borderWidth: "2px",
                },
              },
            }}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default StepBrand;
