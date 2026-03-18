import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardClient = () => {
  const [accessCode, setAccessCode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  // 디자인 포인트 컬러 (애플 블랙/그레이)
  const mainBlack = "#1d1d1f";

  // --- [복구 모달 데이터 상태] ---
  const [formData, setFormData] = useState({
    name: "",
    contactType: "phone",
    phoneValue: "",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
  });

  // --- [복구 모달 검증 로직] ---
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

  // --- [입력창 반응형 스타일 계산] ---
  const getDynamicStyle = () => {
    const len = accessCode.length;
    if (len <= 6) return { fontSize: "2rem", letterSpacing: "0.5em" };
    if (len <= 10) return { fontSize: "1.5rem", letterSpacing: "0.3em" };
    if (len <= 14) return { fontSize: "1.2rem", letterSpacing: "0.15em" };
    return { fontSize: "1rem", letterSpacing: "0.05em" };
  };

  const dynamicStyle = getDynamicStyle();

  // --- [핸들러 로직] ---
  const handleCodeChange = (e) => {
    // 알파벳+숫자 허용 / 대문자 변환 / 최대 14자 제한
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (val.length <= 14) setAccessCode(val);
  };

  const handleSearch = () => {
    if (accessCode.length >= 6) {
      const isFacture = window.confirm(
        "Mode test 🛠️\n\n[OK] -> Facture (Paiement)\n[Annuler] -> Dossier (Devis)",
      );
      if (isFacture) navigate(`/client/facture:docsId`);
      else navigate(`/client/dossier:docsId`);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: { xs: 15, md: 20 }, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="900"
          sx={{ mb: 1, letterSpacing: "-0.04em" }}
        >
          DEVIS & FACTURE
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#86868b", fontWeight: 600 }}
        >
          CONSULTER MON DOSSIER
        </Typography>
        <Typography variant="body2" sx={{ mb: 6, color: "#86868b" }}>
          Veuillez saisir votre code d'accès (6 caractères minimum)
        </Typography>

        {/* 📍 코드 입력 텍스트 필드 */}
        <Box sx={{ mb: 4, maxWidth: "340px", mx: "auto" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="EX: xxxxxxxxxxxxxx"
            value={accessCode}
            onChange={handleCodeChange}
            autoComplete="off"
            inputProps={{
              style: {
                textAlign: "center",
                fontWeight: "800",
                textTransform: "uppercase",
                fontFamily: "monospace",
                fontSize: dynamicStyle.fontSize,
                letterSpacing: dynamicStyle.letterSpacing,
                transition: "all 0.2s ease",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                minHeight: "80px",
                borderRadius: "16px",
                bgcolor: "#f5f5f7",
                "& fieldset": { border: "2px solid #d2d2d7" },
                "&.Mui-focused fieldset": { border: `2px solid ${mainBlack}` },
              },
            }}
          />
        </Box>

        {/* 📍 검색 버튼 (6자부터 활성화) */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSearch}
          disabled={accessCode.length < 6}
          sx={{
            py: 2,
            fontSize: "1rem",
            fontWeight: "700",
            borderRadius: "14px",
            backgroundColor: accessCode.length >= 6 ? mainBlack : "#e5e5e7",
            color: accessCode.length >= 6 ? "#fff" : "#a1a1a6",
            boxShadow: "none",
            maxWidth: "340px",
            "&:hover": {
              backgroundColor: accessCode.length >= 6 ? "#000" : "#e5e5e7",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: "#f5f5f7",
              color: "#d2d2d7",
            },
          }}
        >
          VOIR MON DOSSIER
        </Button>

        {/* 📍 코드 분실 링크 */}
        <Typography
          onClick={() => setOpenModal(true)}
          sx={{
            mt: 4,
            color: "#a1a1a6",
            cursor: "pointer",
            fontSize: "0.85rem",
            textDecoration: "underline",
            "&:hover": { color: "#0071e3" },
          }}
        >
          Code perdu ? Recevoir par e-mail
        </Typography>
      </Box>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            // 📍 높이 600px 고정 (모바일/PC 공통)
            height: "640px",
            maxHeight: "640px",
            minHeight: "600px",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 900,
            textAlign: "center",
            pt: 5,
            fontSize: "1.5rem",
          }}
        >
          Récupérer mon code
        </DialogTitle>

        <DialogContent sx={{ px: { xs: 3, sm: 5 }, flex: 1 }}>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "center", color: "#666" }}
          >
            Saisissez votre nom et le contact utilisé lors du diagnostic.
          </Typography>

          {/* 📍 mt(Margin Top)를 모바일에서 더 확실하게 줌 */}
          <Stack spacing={4} sx={{ mt: { xs: 2, sm: 4 } }}>
            {/* 1. 성함 입력 칸 */}
            <TextField
              variant="standard"
              label="Votre Nom et Prénom"
              fullWidth
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* 2. 연락처 수단 선택 + 입력 필드 세트 (모바일은 세로로!) */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "stretch", sm: "flex-end" }}
            >
              {/* 수단 선택 셀렉터 */}
              <FormControl
                variant="standard"
                sx={{ minWidth: { xs: "100%", sm: 150 } }}
              >
                <InputLabel>Moyen de contact</InputLabel>
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

              {/* 전화번호 필드 */}
              {formData.contactType === "phone" ? (
                <TextField
                  variant="standard"
                  label="Numéro"
                  fullWidth
                  placeholder="00 00 00 00 00"
                  value={formData.phoneValue}
                  sx={{ mt: { xs: 1, sm: 0 } }} // 모바일 전용 mt
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length > 0 && val[0] !== "0") val = "0" + val;
                    if (val.length > 10) val = val.substring(0, 10);
                    let formatted = val.match(/.{1,2}/g)?.join(" ") || "";
                    setFormData({ ...formData, phoneValue: formatted });
                  }}
                />
              ) : (
                /* 이메일 입력 파트 (모바일 세로 배치) */
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ flex: 1, width: "100%", mt: { xs: 1, sm: 0 } }}
                >
                  <TextField
                    variant="standard"
                    label="E-mail (ID)"
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
                      <MenuItem value="@free.fr">@free.fr</MenuItem>
                      <MenuItem value="custom">Autre</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              )}
            </Stack>

            {/* 3. 기타 도메인 입력 (Autre 선택 시) */}
            {isCustomDomain && (
              <TextField
                variant="standard"
                label="Nom de domaine"
                fullWidth
                placeholder="exemple.com"
                value={formData.customDomain}
                onChange={(e) =>
                  setFormData({ ...formData, customDomain: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                }}
                sx={{ mt: 2 }}
              />
            )}
          </Stack>
        </DialogContent>

        <DialogActions sx={{ p: 5, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{ color: "#86868b", fontWeight: 700, px: 3 }}
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
              fontWeight: 700,
              borderRadius: "12px",
              "&:hover": { bgcolor: "#000" },
            }}
            onClick={() => {
              alert(
                `Demande envoyée pour : ${formData.name}\nContact : ${finalContact}`,
              );
              setOpenModal(false);
            }}
          >
            ENVOYER
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DashboardClient;
