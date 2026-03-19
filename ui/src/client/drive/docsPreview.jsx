import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Dialog,
  IconButton,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DocsPreview = () => {
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const docs = [
    { id: "DOC_01", title: "Diagnostic.pdf", date: "2026-03-8", size: "1.2MB" },
    { id: "DOC_02", title: "Devis_v1.pdf", date: "2026-03-10", size: "1.2MB" },
    { id: "DOC_03", title: "Devis_v2.pdf", date: "2026-03-12", size: "2.3MB" },
    { id: "DOC_04", title: "Devis_v3.pdf", date: "2026-03-14", size: "4.2MB" },
    { id: "DOC_05", title: "Facture.pdf", date: "2026-03-14", size: "1.2MB" },
  ];

  const samplePdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const handleOpen = (pdf, title) => {
    setSelectedPdf(pdf);
    setSelectedTitle(title);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {docs.map((doc) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={doc.id}
            sx={{ width: { xs: "100%", sm: "45%", xl: "30%" }, margin: 0 }}
          >
            <Paper
              elevation={0}
              onClick={() => handleOpen(samplePdfUrl, doc.title)}
              sx={{
                p: 3,
                border: "1px solid #d2d2d7",
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: "#0071e3",
                  bgcolor: "#fff",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  "& .view-icon": { opacity: 1 },
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ bgcolor: "#f5f5f7", p: 1.5 }}>
                  <InsertDriveFileIcon
                    sx={{ color: "#0071e3", fontSize: "2rem" }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={700} noWrap sx={{ mb: 0.5 }}>
                    {doc.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block" }}
                  >
                    {doc.date}
                  </Typography>
                </Box>
                <VisibilityIcon
                  className="view-icon"
                  sx={{ opacity: 0, color: "#0071e3", transition: "0.2s" }}
                />
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 📍 [수정] 스크롤 시 높이 변경 방지를 위한 FullScreen 설정 */}
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // 📍 모달 자체 스크롤 막아서 높이 고정
            bgcolor: "#525659", // 📍 배경을 미리 검은색으로
          },
        }}
      >
        {/* 상단바 고정 */}
        <Box
          sx={{
            px: 3,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
            zIndex: 10,
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ color: "#1d1d1f" }}>
            {selectedTitle}
          </Typography>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#1d1d1f" }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* 📍 PDF 뷰어 영역: 검은 배경 + 위아래 여백 2(16px) */}
        <Box
          sx={{
            flexGrow: 1,
            position: "relative", // 📍 위치 고정용
            display: "flex",
            justifyContent: "center",
            bgcolor: "#232424", // 검은색
            py: 2, // 📍 형님이 말한 위아래 여백!
            boxSizing: "border-box",
            height: "calc(100% - 64px)", // 📍 헤더 높이만큼 빼서 스크롤 유발 방지
          }}
        >
          <Box
            component="iframe"
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedPdf)}&embedded=true`}
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)", // 종이 느낌 그림자
            }}
            title="PDF Viewer"
          />
        </Box>
      </Dialog>
    </Container>
  );
};

export default DocsPreview;
