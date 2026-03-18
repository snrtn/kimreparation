import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const DriveView = () => {
  // 1. 메인 로그인 상태
  const [userId, setUserId] = useState("");
  const [userCode, setUserCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const mainBlack = "#1d1d1f";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // 2. 복구 모달 관련 상태
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactType: "phone",
    phoneValue: "",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
  });

  // --- 검증 로직 ---
  const isCustomDomain = formData.emailDomain === "custom";
  const finalContact =
    formData.contactType === "phone"
      ? formData.phoneValue
      : `${formData.emailUser}${isCustomDomain ? "@" + formData.customDomain : formData.emailDomain}`;

  const isContactValid =
    formData.contactType === "phone"
      ? formData.phoneValue.trim() !== ""
      : formData.emailUser.trim() !== "" &&
        (!isCustomDomain ||
          (formData.customDomain.trim() !== "" &&
            formData.customDomain.includes(".")));

  const isComplete = formData.name.trim() !== "" && isContactValid;

  // 📍 검증용 정규식 (영어/숫자 3자리 - 영어/숫자 4자리 이상)
  const userIdRegex = /^[A-Z0-9]{3}-[A-Z0-9]{4,}$/;
  const isUserIdValid = userIdRegex.test(userId); // 이미 대문자라 toUpperCase() 뺌
  const isUserCodeValid = userCode.length >= 6;
  const canSearch = isUserIdValid && isUserCodeValid;

  const handleSearch = () => {
    if (!canSearch) return;
    console.log("Recherche...", { userId, userCode });
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#ffffff",
        py: 20,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: "24px",
            border: "1px solid #f2f2f7",
            textAlign: "center",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.04em",
                mb: 1,
                color: "#1d1d1f",
              }}
            >
              Espace Client
            </Typography>
            <Typography
              sx={{ color: "#86868b", fontSize: "0.85rem", fontWeight: 500 }}
            >
              Consultez l'historique de votre réparation.
            </Typography>
          </Box>

          <Stack spacing={1.5}>
            {/* 1. ID 입력 필드 (자동 대문자) */}
            <TextField
              fullWidth
              size="small"
              placeholder="ID (Ex: xxxxxxxxxxxxxx)"
              value={userId}
              // 📍 입력 즉시 대문자로 변환
              onChange={(e) => setUserId(e.target.value.toUpperCase())}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FingerprintIcon
                      sx={{ color: "#86868b", fontSize: "1.1rem" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  borderRadius: "12px",
                  bgcolor: "#f5f5f7",
                  fontSize: "0.9rem",
                  "& fieldset": { border: "none" },
                },
              }}
            />

            {/* 2. 코드 입력 필드 (자동 대문자 + 눈 아이콘) */}
            <TextField
              fullWidth
              size="small"
              type={showPassword ? "text" : "password"}
              placeholder="Code secret"
              value={userCode}
              // 📍 코드도 대문자로 자동 변환
              onChange={(e) => setUserCode(e.target.value.toUpperCase())}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon sx={{ color: "#86868b", fontSize: "1.1rem" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "#86868b", mr: 0.5 }}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: "1.1rem" }} />
                      ) : (
                        <Visibility sx={{ fontSize: "1.1rem" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  borderRadius: "12px",
                  bgcolor: "#f5f5f7",
                  fontSize: "0.9rem",
                  "& fieldset": { border: "none" },
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleSearch}
              disabled={!canSearch}
              sx={{
                mt: 1,
                height: "45px",
                borderRadius: "12px",
                bgcolor: canSearch ? "#1d1d1f" : "#e5e5e7",
                color: canSearch ? "#ffffff" : "#a1a1a6",
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: canSearch ? "#000" : "#e5e5e7",
                  boxShadow: "none",
                },
              }}
            >
              Rechercher
            </Button>
          </Stack>

          <Typography
            onClick={() => setOpenModal(true)}
            sx={{
              mt: 4,
              fontSize: "0.75rem",
              color: "#a1a1a6",
              cursor: "pointer",
              textDecoration: "underline",
              "&:hover": { color: "#0071e3" },
            }}
          >
            ID ou Code perdu ? Recevoir par e-mail
          </Typography>
        </Paper>
      </Container>

      {/* --- 🚀 수정된 복구 모달 (높이 고정 & 모바일 대응) --- */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            height: "600px", // 높이 고정
            maxHeight: "600px",
            minHeight: "600px",
            borderRadius: "24px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 900,
            textAlign: "center",
            pt: 5,
            fontSize: "1.4rem",
          }}
        >
          Récupérer mes accès
        </DialogTitle>

        <DialogContent sx={{ px: { xs: 3, sm: 5 } }}>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "center", color: "#666" }}
          >
            Saisissez votre nom et le contact utilisé lors du diagnostic.
          </Typography>

          <Stack spacing={4} sx={{ mt: { xs: 1, sm: 3 } }}>
            {/* 1. 성함 */}
            <TextField
              variant="standard"
              label="Votre Nom et Prénom"
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* 2. 연락처 수단 (모바일 세로 배치) */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "stretch", sm: "flex-end" }}
            >
              <FormControl
                variant="standard"
                sx={{ minWidth: { xs: "100%", sm: 140 } }}
              >
                <InputLabel>Contact</InputLabel>
                <Select
                  value={formData.contactType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactType: e.target.value,
                      phoneValue: "",
                      emailUser: "",
                    })
                  }
                  MenuProps={{ disableScrollLock: true }}
                >
                  <MenuItem value="phone">Téléphone</MenuItem>
                  <MenuItem value="email">E-mail</MenuItem>
                </Select>
              </FormControl>

              {formData.contactType === "phone" ? (
                <TextField
                  variant="standard"
                  label="Numéro"
                  fullWidth
                  placeholder="00 00 00 00 00"
                  value={formData.phoneValue}
                  sx={{ mt: { xs: 1, sm: 0 } }}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length > 0 && val[0] !== "0") val = "0" + val;
                    if (val.length > 10) val = val.substring(0, 10);
                    let formatted = val.match(/.{1,2}/g)?.join(" ") || "";
                    setFormData({ ...formData, phoneValue: formatted });
                  }}
                />
              ) : (
                /* 이메일 입력 (모바일은 세로로!) */
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ flex: 1, mt: { xs: 1, sm: 0 } }}
                >
                  <TextField
                    variant="standard"
                    label="E-mail"
                    sx={{ flex: 2 }}
                    placeholder="identifiant"
                    value={formData.emailUser}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emailUser: e.target.value.split("@")[0],
                      })
                    }
                  />
                  <FormControl variant="standard" sx={{ flex: 1 }}>
                    <Select
                      value={formData.emailDomain}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailDomain: e.target.value,
                          customDomain: "",
                        })
                      }
                      MenuProps={{ disableScrollLock: true }}
                    >
                      <MenuItem value="@gmail.com">@gmail.com</MenuItem>
                      <MenuItem value="@orange.fr">@orange.fr</MenuItem>
                      <MenuItem value="@wanadoo.fr">@wanadoo.fr</MenuItem>
                      <MenuItem value="@free.fr">@free.fr</MenuItem>
                      <MenuItem value="@sfr.fr">@sfr.fr</MenuItem>
                      <MenuItem value="@outlook.com">@outlook.com</MenuItem>
                      <MenuItem value="@yahoo.fr">@yahoo.fr</MenuItem>
                      <MenuItem value="@icloud.com">@icloud.com</MenuItem>
                      <MenuItem value="custom">Autre</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              )}
            </Stack>

            {/* 3. 기타 도메인 */}
            {isCustomDomain && (
              <TextField
                variant="standard"
                label="Nom de domaine"
                fullWidth
                placeholder="exemple.com"
                value={formData.customDomain}
                sx={{ mt: 2 }}
                onChange={(e) =>
                  setFormData({ ...formData, customDomain: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                }}
              />
            )}
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 4, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{ color: "#86868b", fontWeight: 700 }}
          >
            ANNULER
          </Button>
          <Button
            variant="contained"
            disabled={!isComplete}
            sx={{
              bgcolor: mainBlack,
              px: 5,
              py: 1.2,
              borderRadius: "12px",
              fontWeight: 700,
            }}
            onClick={() => {
              alert(`Contact : ${finalContact}`);
              setOpenModal(false);
            }}
          >
            ENVOYER
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DriveView;
