import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
  InputAdornment,
  Divider,
  Grid,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import KeyIcon from "@mui/icons-material/Key";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { format } from "date-fns";

const DossierCreate = ({ onClose }) => {
  // 📍 팝업 시 배경 스크롤 방지 (factureCreate 스타일 적용)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // 📍 [핵심] dossierClient.jsx와 연동되는 데이터 구조 (주소/도시 제거 버전)
  const [formData, setFormData] = useState({
    devisNumber: `DEV-${format(new Date(), "yyyy")}-${Math.floor(Math.random() * 9000 + 1000)}`, // 자동 생성 번호
    version: "v1",
    date: format(new Date(), "dd/MM/yyyy"),
    client: {
      name: "",
      contact: "",
      toyName: "",
    },
    accessCode: "", // 대시보드 조회용 임시번호
    items: [
      {
        title: "",
        description: "",
        price: 0,
        photos: [], // 진단 사진들
        helperText: "", // 추가 설명
      },
    ],
  });

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      client: { ...prev.client, [name]: value },
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index][name] = name === "price" ? parseFloat(value) || 0 : value;
    setFormData((prev) => ({ ...prev, items: newItems }));
  };

  const handleAddPhoto = (itemIndex) => {
    const photoUrl = window.prompt(
      "URL de la photo (이미지 주소 입력):",
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
    );
    if (photoUrl) {
      const newItems = [...formData.items];
      newItems[itemIndex].photos.push(photoUrl);
      setFormData((prev) => ({ ...prev, items: newItems }));
    }
  };

  const handleRemovePhoto = (itemIndex, photoIndex) => {
    const newItems = [...formData.items];
    newItems[itemIndex].photos.splice(photoIndex, 1);
    setFormData((prev) => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { title: "", description: "", price: 0, photos: [], helperText: "" },
      ],
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length === 1) return;
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const totalHT = formData.items.reduce(
    (sum, item) => sum + (item.price || 0),
    0,
  );
  const totalTVA = totalHT * 0.2;
  const totalTTC = totalHT + totalTVA;

  const handleSave = () => {
    if (!formData.client.name || !formData.accessCode) {
      return alert("Nom du client et Code d'accès sont obligatoires !");
    }
    console.log("Full Dossier Data:", formData);
    alert(`Enregistré ! Code client : ${formData.accessCode}`);
    onClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        bgcolor: "#525659",
        zIndex: 999999,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
        pb: 10,
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 20,
          right: 30,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
        }}
      >
        <CloseIcon sx={{ fontSize: 35 }} />
      </IconButton>

      <Paper
        elevation={10}
        sx={{
          width: "850px",
          minHeight: "900px",
          p: "60px",
          bgcolor: "#fff",
          borderRadius: "8px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <Typography variant="h4" fontWeight="900" sx={{ color: "#1d1d1f" }}>
            📦 Nouveau Dossier
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="subtitle2" color="text.secondary">
              N° {formData.devisNumber}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Date : {formData.date}
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={5}>
          {/* 1. 고객 정보 (주소 빼고 핵심만!) */}
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="800"
              color="primary"
              sx={{ mb: 2 }}
            >
              👤 CLIENT & APPAREIL
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Nom complet *"
                  name="name"
                  variant="outlined"
                  size="small"
                  onChange={handleClientChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Contact (Email/Tél) *"
                  name="contact"
                  variant="outlined"
                  size="small"
                  onChange={handleClientChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Modèle de l'appareil"
                  name="toyName"
                  placeholder="ex: Switch OLED"
                  variant="outlined"
                  size="small"
                  onChange={handleClientChange}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {/* 2. 수리 항목 및 사진 섹션 */}
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="subtitle2" fontWeight="800" color="primary">
                🛠️ PRESTATIONS & PHOTOS
              </Typography>
              <Button
                startIcon={<AddCircleIcon />}
                size="small"
                onClick={addItem}
                sx={{ fontWeight: "bold" }}
              >
                Ajouter un article
              </Button>
            </Stack>

            {formData.items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  mb: 3,
                  bgcolor: "#f8f9fa",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                }}
              >
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <TextField
                    flex={1}
                    label="Titre"
                    name="title"
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: "#fff", flexGrow: 1 }}
                    value={item.title}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                  <TextField
                    label="Prix HT"
                    name="price"
                    type="number"
                    size="small"
                    variant="outlined"
                    sx={{ bgcolor: "#fff", width: "120px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">€</InputAdornment>
                      ),
                    }}
                    value={item.price}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                  <IconButton color="error" onClick={() => removeItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  size="small"
                  multiline
                  rows={2}
                  variant="outlined"
                  sx={{ bgcolor: "#fff", mb: 2 }}
                  value={item.description}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <TextField
                  fullWidth
                  label="Helper Text (수리 보조 설명)"
                  name="helperText"
                  size="small"
                  variant="outlined"
                  placeholder="ex: Pièce premium incluse"
                  sx={{ bgcolor: "#fff", mb: 2 }}
                  value={item.helperText}
                  onChange={(e) => handleItemChange(index, e)}
                />

                {/* 사진 갤러리 관리 */}
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  {item.photos.map((url, pIdx) => (
                    <Box key={pIdx} sx={{ position: "relative" }}>
                      <Avatar
                        src={url}
                        variant="rounded"
                        sx={{ width: 80, height: 80, border: "1px solid #ddd" }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleRemovePhoto(index, pIdx)}
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: -10,
                          bgcolor: "#f44336",
                          color: "#fff",
                          width: 20,
                          height: 20,
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    variant="outlined"
                    startIcon={<AddPhotoAlternateIcon />}
                    onClick={() => handleAddPhoto(index)}
                    sx={{ height: 80, width: 120, borderStyle: "dashed" }}
                  >
                    Photo
                  </Button>
                </Stack>
              </Box>
            ))}
          </Box>

          {/* 3. 합계 금액 표시 */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Paper
              variant="outlined"
              sx={{ p: 2, width: "300px", bgcolor: "#fafafa" }}
            >
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Total HT :</Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {totalHT.toFixed(2)} €
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">TVA (20%) :</Typography>
                  <Typography variant="body2">
                    {totalTVA.toFixed(2)} €
                  </Typography>
                </Stack>
                <Divider sx={{ my: 1 }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    variant="subtitle1"
                    fontWeight="900"
                    color="primary"
                  >
                    Total TTC :
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="900"
                    color="primary"
                  >
                    {totalTTC.toFixed(2)} €
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Box>

          <Divider />

          {/* 4. 고객용 액세스 코드 (대시보드 검색용) */}
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="800"
              color="error"
              gutterBottom
            >
              🔑 CODE D'ACCÈS CLIENT *
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              sx={{ mb: 1 }}
            >
              고객이 DashboardClient에서 조회할 때 사용할 고유 번호입니다.
            </Typography>
            <TextField
              fullWidth
              placeholder="EX: A1B2C3D4"
              name="accessCode"
              value={formData.accessCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  accessCode: e.target.value.toUpperCase(),
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon color="error" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>

        <Box sx={{ mt: 8, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              px: 10,
              py: 2,
              borderRadius: "12px",
              fontWeight: "900",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            ENREGISTRER LE DOSSIER
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DossierCreate;
