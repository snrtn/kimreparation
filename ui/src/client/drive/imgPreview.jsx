import React, { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Dialog,
  Zoom,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef((props, ref) => (
  <Zoom ref={ref} {...props} />
));

const ImgPreview = () => {
  const { itemId } = useParams();
  const { devisItems } = useOutletContext();
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const currentFolder = devisItems[itemId];
  if (!currentFolder)
    return (
      <Box sx={{ p: 5 }}>
        <Typography>Sélectionnez un dossier</Typography>
      </Box>
    );

  const photos = currentFolder.photos;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container
      maxWidth={false}
      sx={{ py: { xs: 2, md: 6 }, px: { xs: 1, md: 6 } }}
    >
      {/* 📷 [핵심 수정] Grid 대신 CSS Grid로 강제 고정 */}
      <Box
        sx={{
          display: "grid",
          // 📍 데스크탑 4개 / 태블릿 3개 / 모바일 2개 강제 할당
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "8px", // 사진 사이 간격
        }}
      >
        {photos.map((url, idx) => (
          <Paper
            key={idx}
            elevation={0}
            onClick={() => setCurrentImgIndex(idx)}
            sx={{
              overflow: "hidden",
              cursor: "pointer",
              bgcolor: "#f5f5f7",
              borderRadius: 0,
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src={url}
              alt={`photo-${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Paper>
        ))}
      </Box>

      {/* 📍 슬라이드 모달 (기존과 동일) */}
      <Dialog
        fullScreen
        open={currentImgIndex !== null}
        onClose={() => setCurrentImgIndex(null)}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            bgcolor: "rgba(0, 0, 0, 0.95)",
            boxShadow: "none",
            p: 0,
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => setCurrentImgIndex(null)}
            sx={{
              position: "absolute",
              top: 10,
              right: { xs: 20, md: 40 },
              color: "#fff",
              zIndex: 10,
            }}
          >
            <CloseIcon fontSize="large" sx={{ color: "#fff" }} />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              color: "#fff",
              fontWeight: 800,
              zIndex: 10,
            }}
          >
            {currentImgIndex + 1} / {photos.length}
          </Typography>

          <Box
            component="img"
            src={photos[currentImgIndex]}
            sx={{
              maxWidth: "95%",
              maxHeight: "85dvh",
              display: "block",
              userSelect: "none",
              objectFit: "contain",
            }}
          />

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 20, md: 40 },
              bgcolor: "rgba(255,255,255,0.1)",
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" sx={{ color: "#fff" }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 20, md: 40 },
              bgcolor: "rgba(255,255,255,0.1)",
            }}
          >
            <ArrowForwardIosIcon fontSize="large" sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Dialog>
    </Container>
  );
};

export default ImgPreview;
