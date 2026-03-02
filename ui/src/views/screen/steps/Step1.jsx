import React from "react";
import { Stack, Typography, Box, Checkbox, Divider, Grid } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Step1 = ({
  category,
  productTitle,
  current,
  isBackupChecked,
  onBackupToggle,
}) => {
  // 데이터 방어 코드
  const forWhom = current?.forWhom || [];
  const features = current?.features || [];

  return (
    <Stack spacing={3}>
      {/* 1. 상단 타이틀 영역 (ScreenContent 스타일 그대로) */}
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        >
          {category}
        </Typography>
        <Typography
          sx={{
            color: "#1d1d1f",
            fontWeight: 800,
            fontSize: "2rem", // ScreenContent와 동일
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
          }}
        >
          {productTitle}
        </Typography>
        <Typography
          sx={{
            color: current?.color || "#1d1d1f",
            fontSize: "0.9rem",
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
          }}
        >
          {current?.subtitle}
        </Typography>
        <Typography
          sx={{
            color: "#86868b",
            fontSize: "0.8rem",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            fontStyle: "italic",
          }}
        >
          "{current?.recommendation}"
        </Typography>
      </Box>

      {/* 2. 누구에게 쓰면 좋은지 (Est-ce pour vous ? 박스 디자인 그대로) */}
      <Box
        sx={{
          p: 3,
          bgcolor: "#f5f5f7",
          borderRadius: "20px",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <PersonSearchIcon sx={{ fontSize: "1rem" }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            Est-ce pour vous ?
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          {forWhom.map((text, i) => (
            <Typography
              key={i}
              sx={{
                color: "#424245",
                fontSize: "0.9rem",
                display: "flex",
                gap: 1.2,
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              •{" "}
              <Typography
                component="span"
                sx={{
                  color: "#424245",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                {text}
              </Typography>
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* 3. 포인트 체크리스트 (Points clés 디자인 그대로) */}
      <Box sx={{ px: 1 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            mb: 2,
          }}
        >
          Points clés :
        </Typography>
        <Stack spacing={1}>
          {features.map((f, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleOutlineIcon
                sx={{ color: "#0077ed", fontSize: "1rem" }}
              />
              <Typography
                sx={{
                  color: "#424245",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                {f}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider />

      {/* 4. 확인 체크박스 (모달 전용) */}
      <Box
        onClick={onBackupToggle}
        sx={{
          p: 2.5,
          borderRadius: "16px",
          border: "2px solid",
          borderColor: isBackupChecked ? "#0071e3" : "#d2d2d7",
          bgcolor: isBackupChecked ? "#f5fbff" : "white",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        <Checkbox
          checked={isBackupChecked}
          sx={{ p: 0, mr: 2 }}
          color="primary"
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 800,
            color: isBackupChecked ? "#0071e3" : "#1d1d1f",
          }}
        >
          Je confirme ma sélection.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Step1;
