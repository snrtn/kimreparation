import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const BossRoom = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ id: "", pw: "" });
  const [error, setError] = useState(false);

  const handleLogin = () => {
    // 📍 형님만의 비밀번호 설정 (나중엔 서버랑 통신하겠지만 지금은 임시)
    if (loginData.id === "admin" && loginData.pw === "1234") {
      navigate("/admin/dashboard");
    } else {
      setError(true);
    }
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#000", // 어드민은 묵직하게 블랙
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: "24px",
            bgcolor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <AdminPanelSettingsIcon
              sx={{ fontSize: "3rem", color: "#fff", mb: 2 }}
            />
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 800, letterSpacing: "-0.05em" }}
            >
              Console d'Administration
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "0.85rem",
                mt: 1,
              }}
            >
              Accès réservé au personnel autorisé uniquement.
            </Typography>
          </Box>

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                borderRadius: "12px",
                bgcolor: "rgba(211, 47, 47, 0.1)",
                color: "#ff5252",
              }}
            >
              Identifiants incorrects.
            </Alert>
          )}

          <Stack spacing={2}>
            <TextField
              fullWidth
              placeholder="Identifiant"
              variant="outlined"
              value={loginData.id}
              onChange={(e) =>
                setLoginData({ ...loginData, id: e.target.value })
              }
              InputProps={{
                style: { color: "#fff" },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon
                      sx={{
                        color: "rgba(255, 255, 255, 0.3)",
                        fontSize: "1.2rem",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  "& fieldset": {
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={loginData.pw}
              onChange={(e) =>
                setLoginData({ ...loginData, pw: e.target.value })
              }
              InputProps={{
                style: { color: "#fff" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: "rgba(255, 255, 255, 0.3)" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  "& fieldset": {
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: "12px",
                bgcolor: "#fff",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { bgcolor: "#e5e5e7" },
              }}
            >
              Se Connecter
            </Button>
          </Stack>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 4, color: "rgba(255, 255, 255, 0.3)" }}
          >
            © {new Date().getFullYear()} Apple Repair Admin System
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BossRoom;
