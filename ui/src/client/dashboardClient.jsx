import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment, // 📍 추가됨: 지울 수 없는 '@'를 위해 필요합니다.
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardClient = () => {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [openModal, setOpenModal] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const mainBlue = "#1976d2";

  const [formData, setFormData] = useState({
    name: "",
    contactType: "phone",
    phoneValue: "",
    emailUser: "",
    emailDomain: "@gmail.com",
    customDomain: "",
  });

  const isCustomDomain = formData.emailDomain === "custom";
  const finalContact =
    formData.contactType === "phone"
      ? formData.phoneValue
      : `${formData.emailUser}${isCustomDomain ? "@" + formData.customDomain : formData.emailDomain}`;

  // 📍 [핵심 변경점 1] customDomain일 때 무조건 '.'이 포함되어야 유효(valid)하게 처리
  const isContactValid =
    formData.contactType === "phone"
      ? formData.phoneValue.trim() !== ""
      : formData.emailUser.trim() !== "" &&
        (!isCustomDomain ||
          (formData.customDomain.trim() !== "" &&
            formData.customDomain.includes(".")));

  const isComplete = formData.name.trim() !== "" && isContactValid;

  const handleChange = (e, index) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!val) return;
    const newCodes = [...codes];
    newCodes[index] = val.slice(-1);
    setCodes(newCodes);
    if (index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newCodes = [...codes];
      if (codes[index]) {
        newCodes[index] = "";
        setCodes(newCodes);
      } else if (index > 0) {
        newCodes[index - 1] = "";
        setCodes(newCodes);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSearch = () => {
    const finalCode = codes.join("");
    if (finalCode.length === 6) {
      // navigate(`/client/dossier/${finalCode}`);
      navigate(`/client/dossier:docsId`);
    } else {
      alert("Veuillez saisir votre code à 6 caractères.");
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 20, textAlign: "center" }}>
        <Typography
          variant="h3"
          fontWeight="900"
          sx={{ mb: 2, color: mainBlue }}
        >
          DEVIS & FACTURE
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, color: "#333", fontWeight: 700 }}>
          CONSULTER MON DOSSIER
        </Typography>
        <Typography variant="body2" sx={{ mb: 10, color: "#666" }}>
          Veuillez saisir votre code d'accès à 6 caractères
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          sx={{ mb: 10 }}
        >
          {codes.map((digit, index) => (
            <InputBase
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                autoComplete: "off",
                style: {
                  textAlign: "center",
                  fontSize: "4rem",
                  fontWeight: "900",
                  width: "90px",
                  height: "120px",
                  backgroundColor: "#f0f4f8",
                  borderRadius: "0px",
                  borderBottom: digit
                    ? `6px solid ${mainBlue}`
                    : "6px solid #d1d9e0",
                  color: mainBlue,
                  transition: "all 0.1s ease",
                  textTransform: "uppercase",
                },
              }}
            />
          ))}
        </Stack>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSearch}
          disabled={codes.join("").length !== 6}
          sx={{
            py: 3,
            fontSize: "1rem",
            fontWeight: "900",
            borderRadius: "0px",
            backgroundColor: mainBlue,
            color: "#fff",
            "&:hover": { backgroundColor: "#1565c0" },
            boxShadow: "none",
          }}
        >
          VOIR MON DOSSIER
        </Button>

        <Typography
          onClick={() => setOpenModal(true)}
          variant="body1"
          sx={{
            mt: 6,
            color: "#999",
            cursor: "pointer",
            textDecoration: "underline",
            "&:hover": { color: mainBlue },
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
          style: { height: "600px", maxHeight: "600px", minHeight: "600px" },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 900,
            textAlign: "center",
            pt: 4,
            fontSize: "1.5rem",
          }}
        >
          Récupérer mon code
        </DialogTitle>
        <DialogContent sx={{ px: 4, pb: 4 }}>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "center", color: "#666" }}
          >
            Veuillez saisir votre nom et le contact utilisé lors du diagnostic.
          </Typography>

          <Stack spacing={3} sx={{ mt: 2 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                variant="standard"
                label="Votre Nom et Prénom"
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="flex-end"
              sx={{ width: "100%" }}
            >
              <FormControl variant="standard" sx={{ minWidth: 150 }}>
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
                >
                  <MenuItem value="phone">Téléphone</MenuItem>
                  <MenuItem value="email">E-mail</MenuItem>
                </Select>
              </FormControl>

              {formData.contactType === "phone" ? (
                <TextField
                  variant="standard"
                  label="Numéro de téléphone"
                  fullWidth
                  placeholder="00 00 00 00 00" // 📍 요구사항 1: 전화번호 placeholder 변경
                  value={formData.phoneValue}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length > 0 && val[0] !== "0") val = "0" + val;
                    if (val.length > 10) val = val.substring(0, 10);
                    let formatted = val.match(/.{1,2}/g)?.join(" ") || "";
                    setFormData({ ...formData, phoneValue: formatted });
                  }}
                />
              ) : (
                <Stack
                  direction="column"
                  spacing={2}
                  sx={{ width: "100%", flex: 1 }}
                >
                  <Stack direction="row" alignItems="flex-end" spacing={1}>
                    <TextField
                      variant="standard"
                      label="E-mail"
                      sx={{ flex: 1 }}
                      placeholder="jean.dupont"
                      autoComplete="off" // 📍 요구사항 2: 이메일 자동완성 끄기
                      value={formData.emailUser}
                      onChange={(e) => {
                        // 📍 [핵심 변경점 2] 이메일 입력 시 '@' 뒤로 다 날려버림
                        let inputVal = e.target.value;
                        if (inputVal.includes("@")) {
                          inputVal = inputVal.split("@")[0];
                        }
                        setFormData({ ...formData, emailUser: inputVal });
                      }}
                    />
                    <FormControl variant="standard" sx={{ minWidth: 140 }}>
                      <Select
                        value={formData.emailDomain}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emailDomain: e.target.value,
                            customDomain: "", // 📍 다른 도메인 선택하면 커스텀 입력 초기화
                          })
                        }
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

                  {/* 📍 [핵심 변경점 3] 직접 입력창 + '.' 필수 확인 (빨간색 에러 텍스트) */}
                  {formData.emailDomain === "custom" && (
                    <TextField
                      variant="standard"
                      label="Nom de domaine"
                      fullWidth
                      placeholder="exemple.com"
                      autoComplete="off"
                      value={formData.customDomain}
                      error={
                        formData.customDomain.length > 0 &&
                        !formData.customDomain.includes(".")
                      }
                      helperText={
                        formData.customDomain.length > 0 &&
                        !formData.customDomain.includes(".")
                          ? "Le domaine doit contenir un point (ex: domaine.com)"
                          : ""
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customDomain: e.target.value,
                        })
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">@</InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 4, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{ color: "#666", fontWeight: 700 }}
          >
            ANNULER
          </Button>
          <Button
            variant="contained"
            disabled={!isComplete}
            sx={{ bgcolor: mainBlue, px: 6, fontWeight: 900, borderRadius: 0 }}
            onClick={() => {
              alert(
                `Nom : ${formData.name}\nContact : ${finalContact}\n\nDemande envoyée avec succès.`,
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
