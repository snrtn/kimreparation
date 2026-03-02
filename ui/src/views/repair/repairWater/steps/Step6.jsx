/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import {
  Stack,
  Typography,
  Box,
  TextField,
  Collapse,
  useTheme,
} from "@mui/material";

// 아이콘 임포트
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Step6 = ({
  deviceType,
  setDeviceType,
  brand,
  setBrand,
  otherBrand,
  setOtherBrand,
}) => {
  const theme = useTheme();
  const textFieldRef = useRef(null);

  // 기기 종류 리스트
  const devices = [
    {
      id: "Téléphone",
      label: "Téléphone",
      icon: <SmartphoneIcon sx={{ fontSize: "2rem" }} />,
    },
    {
      id: "Tablette",
      label: "Tablette",
      icon: <TabletMacIcon sx={{ fontSize: "2rem" }} />,
    },
  ];

  // 💡 형님이 요청하신 브랜드 리스트 + 고유 색상 업데이트 완료!
  const brands = [
    {
      id: "Apple",
      label: "Apple",
      color: "#000000",
      icon: <AppleIcon sx={{ fontSize: "2rem" }} />,
    },
    { id: "Samsung", label: "Samsung", color: "#1428A0", textIcon: "S" },
    { id: "Xiaomi", label: "Xiaomi", color: "#FF6900", textIcon: "Mi" },
    {
      id: "Google",
      label: "Google",
      color: "#4285F4",
      icon: <GoogleIcon sx={{ fontSize: "1.8rem" }} />,
    },
    { id: "Oppo", label: "Oppo", color: "#007D4C", textIcon: "O" }, // 오포 초록색
    { id: "Huawei", label: "Huawei", color: "#CF0A2C", textIcon: "H" }, // 화웨이 빨간색
    {
      id: "Autre",
      label: "Autre",
      color: "#86868b",
      icon: <MoreHorizIcon sx={{ fontSize: "2rem" }} />,
    },
  ];

  return (
    <Stack spacing={5} sx={{ pb: 4 }}>
      {/* --- 1. 기기 선택 영역 --- */}
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 800, color: "#0071e3", display: "block", mb: 0.5 }}
        ></Typography>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
          Quel est votre type d'appareil ?
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {devices.map((dev) => {
            const isSelected = deviceType === dev.id;
            return (
              <Box
                key={dev.id}
                onClick={() => setDeviceType(dev.id)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 3,
                  cursor: "pointer",
                  bgcolor: isSelected ? "#f5fbff" : "transparent",
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  color: isSelected ? "#0071e3" : "#86868b",
                }}
              >
                {dev.icon}
                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: "1rem",
                  }}
                >
                  {dev.label}
                </Typography>
                {/* 💡 형님이 원하신 60% 밑줄 디자인 */}
                <Box
                  sx={{
                    width: "60%",
                    height: "3px",
                    bgcolor: isSelected ? "#0071e3" : "transparent",
                    mt: 0.5,
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* --- 2. 브랜드 선택 영역 --- */}
      <Collapse in={!!deviceType}>
        <Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: "#0071e3",
              display: "block",
              mb: 0.5,
            }}
          >
            ÉTAPE 2/2
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
            Quelle est la marque ?
          </Typography>

          {/* 2열(1fr 1fr) 그리드 배치 */}
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {brands.map((b) => {
              const isSelected = brand === b.id;
              // 홀수 개수일 때 'Autre'를 가로 전체(span 2)로 꽉 채우면 디자인이 더 깔끔합니다.
              const isAutre = b.id === "Autre";

              return (
                <Box
                  key={b.id}
                  onClick={() => setBrand(b.id)}
                  sx={{
                    gridColumn: isAutre ? "span 2" : "auto", // Autre는 가로 꽉 차게
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 2.5,
                    cursor: "pointer",
                    bgcolor: isSelected ? `${b.color}15` : "transparent", // 색상 투명도 15% 배경
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    color: isSelected ? b.color : "#86868b",
                  }}
                >
                  {/* 아이콘이 없으면 텍스트로 로고 느낌 내기 */}
                  {b.icon ? (
                    b.icon
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        fontFamily: "sans-serif",
                      }}
                    >
                      {b.textIcon}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      mt: 1,
                      fontWeight: isSelected ? 800 : 600,
                      fontSize: "0.95rem",
                    }}
                  >
                    {b.label}
                  </Typography>
                  {/* 💡 브랜드 컬러가 적용된 60% 밑줄 */}
                  <Box
                    sx={{
                      width: "60%",
                      height: "3px",
                      bgcolor: isSelected ? b.color : "transparent",
                      mt: 0.5,
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* 'Autre(기타)' 선택 시 나타나는 입력 필드 */}
          <Collapse in={brand === "Autre"}>
            <Box ref={textFieldRef} sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  mb: 1,
                  color: "#1d1d1f",
                }}
              >
                Précisez la marque :
              </Typography>
              <TextField
                fullWidth
                autoFocus
                placeholder="Ex: OnePlus, Motorola, etc."
                value={otherBrand}
                onChange={(e) => setOtherBrand(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    bgcolor: "#f5f5f7",
                    "& fieldset": { borderColor: "transparent" }, // 기본 테두리 제거
                    "&:hover fieldset": { borderColor: "#d2d2d7" },
                    "&.Mui-focused fieldset": { borderColor: "#86868b" },
                  },
                }}
              />
            </Box>
          </Collapse>
        </Box>
      </Collapse>
    </Stack>
  );
};

export default Step6;
