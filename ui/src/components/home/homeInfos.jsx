import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const infoContent = {
  label: "Informations",
  title: "L'Atelier",

  // ✅ 더 쉽고, 더 정중하며, 절대 나대지 않는 3줄 요약
  note: [
    "Accueil : Pour vous consacrer le temps nécessaire et vous éviter toute attente, je vous reçois sur rendez-vous après réception de votre demande de devis.",
    "Confirmation : Comme je me déplace parfois en intervention, un petit message avant de venir vous assure de ma présence à l'atelier.",
  ],
};

const HomeInfos = () => {
  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#86868b",
    letterSpacing: "0.1em",
    mb: 3,
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        py: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 8, md: 12 }}>
          {/* 좌측 섹션: 영업 시간 및 안내 */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  color: "#86868b",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  mb: 1.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {infoContent.label}
              </Typography>
              <Typography
                sx={{
                  color: "#1d1d1f",
                  fontWeight: 700,
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  letterSpacing: "-0.04em",
                  whiteSpace: "pre-line",
                }}
              >
                {infoContent.title}
              </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 6 }}>
              <Typography sx={labelStyle}>HORAIRES D'OUVERTURE</Typography>
              <Stack spacing={4} sx={{ mb: 6 }}>
                {/* 정규 영업일 (월, 화, 목, 금) */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  spacing={2} // 모바일에서 두 텍스트가 붙지 않게 최소 간격 유지
                >
                  <Box sx={{ flex: 1 }}>
                    {" "}
                    {/* 왼쪽 영역이 남는 공간을 다 차지하게 해서 오른쪽을 끝으로 밀어줌 */}
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#86868b",
                        mb: 0.5,
                      }}
                    >
                      Lundi, Mardi, Jeudi, Vendredi
                    </Typography>
                    {/* 📍 아이콘에만 툴팁 적용 */}
                    {/* 📍 부모 Typography 안에서 텍스트와 아이콘을 가로로 정렬 */}
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: "#1d1d1f",
                        display: "flex", // 가로 정렬
                        alignItems: "center", // 세로 중앙 맞춤
                        gap: 0.5, // 텍스트와 아이콘 사이 간격
                      }}
                    >
                      Sur rendez-vous uniquement
                      {/* 🛡️ 하얀색 바탕의 고급스러운 툴팁 설정 */}
                      <Tooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{
                                fontWeight: 700,
                                mb: 0.5,
                                color: "#1d1d1f",
                              }}
                            >
                              Horaires : 09h00 - 18h00
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ color: "#424245" }}
                            >
                              • Uniquement sur RDV
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ color: "#424245" }}
                            >
                              • Réservation obligatoire
                            </Typography>

                            {/* ✅ 정중하고 기분 나쁘지 않은 이메일 문의 멘트로 수정 */}
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{
                                mt: 1.5,
                                pt: 1,
                                borderTop: "1px solid #eee",
                                color: "#636366",
                                fontStyle: "italic",
                              }}
                            >
                              Une question ? Écrivez-nous :<br />
                              <strong>contact@kimreparation.fr</strong>
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        // 📍 MUI 툴팁의 기본 검은 배경을 하얀색으로 바꾸는 핵심 스타일
                        slotProps={{
                          popper: {
                            sx: {
                              "& .MuiTooltip-tooltip": {
                                bgcolor: "#ffffff", // 배경 하얀색
                                color: "#1d1d1f", // 글자 검은색
                                border: "1px solid #d2d2d7", // 연한 테두리
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // 부드러운 그림자
                                p: 1.5, // 안쪽 여백
                                borderRadius: "12px", // 둥근 모서리
                              },
                              "& .MuiTooltip-arrow": {
                                color: "#ffffff", // 화살표 색상도 하얀색으로 통일
                                "&::before": {
                                  border: "1px solid #d2d2d7", // 화살표에도 테두리 적용
                                },
                              },
                            },
                          },
                        }}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "1.4rem", // 글자보다 약간 작게
                            color: "#86868b", // 연한 회색
                            cursor: "help",
                            mr: 1,
                            opacity: 0.7,
                            "&:hover": { opacity: 1, color: "#0071e3" }, // 마우스 오버 시 파랗게
                          }}
                        />
                      </Tooltip>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "#0071e3",
                      fontWeight: 700,
                      textAlign: "right",
                      minWidth: { xs: "120px", sm: "auto" }, // 모바일에서 오른쪽 칸 너비를 일정하게 고정해서 줄을 맞춤
                    }}
                  >
                    Disponibilités à confirmer
                  </Typography>
                </Stack>

                {/* 유동 영업일 (수, 저녁, 주말) - 견적 승인 고객 전용 */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  spacing={2}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#86868b",
                        mb: 0.5,
                      }}
                    >
                      Mercredi, Soirées & Week-ends
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#0066cc", // 파란색 유지
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      Dépôt sur RDV
                      <Tooltip
                        title={
                          <Box sx={{ p: 0.5 }}>
                            {/* 📍 툴팁 상단: 문 닫음 (일반 영업 없음) */}
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ fontWeight: 800, mb: 1, color: "#d32f2f" }}
                            >
                              Horaires : FERMÉ (Pas d'ouverture libre)
                            </Typography>

                            {/* 📍 툴팁 본문: 일정에 따른 기기 접수 안내 */}
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{
                                color: "#424245",
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              • Dépôt d'appareils possible uniquement selon mes
                              disponibilités.
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{ color: "#424245" }}
                            >
                              • Uniquement après validation de votre devis.
                            </Typography>

                            {/* 📍 하단: 궁금한 점은 메일로 문의 */}
                            <Typography
                              variant="caption"
                              display="block"
                              sx={{
                                mt: 1.5,
                                pt: 1,
                                borderTop: "1px solid #eee",
                                color: "#636366",
                                fontStyle: "italic",
                              }}
                            >
                              Une question ? Écrivez-nous par e-mail :<br />
                              <strong>contact@kimreparation.fr</strong>
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                        enterTouchDelay={0}
                        slotProps={{
                          popper: {
                            sx: {
                              "& .MuiTooltip-tooltip": {
                                bgcolor: "#ffffff",
                                color: "#1d1d1f",
                                border: "1px solid #d2d2d7",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                p: 1.5,
                                borderRadius: "12px",
                              },
                              "& .MuiTooltip-arrow": {
                                color: "#ffffff",
                                "&::before": { border: "1px solid #d2d2d7" },
                              },
                            },
                          },
                        }}
                      >
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "1.4rem",
                            color: "#86868b",
                            cursor: "help",
                            opacity: 0.8,
                            "&:hover": { opacity: 1, color: "#0071e3" },
                          }}
                        />
                      </Tooltip>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "#d32f2f",
                      fontWeight: 700,
                      textAlign: "right",
                      minWidth: { xs: "130px", sm: "auto" },
                    }}
                  >
                    Après validation du devis
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            {/* 안내 박스: 톤이 아주 차분해졌습니다. */}
            <Stack
              spacing={2.5}
              sx={{
                p: 4,
                bgcolor: "#f9f9fb",
                borderRadius: "20px",
                borderLeft: "4px solid #ff0000",
              }}
            >
              {infoContent.note.map((text, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "#424245",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  • {text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* 우측 섹션: 위치 및 연락처 */}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeInfos;
