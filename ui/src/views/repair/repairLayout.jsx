import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const RepairLayout = ({ data, onOpenModal }) => {
  const accentColor = data.accentColor || "#0071e3";
  const criticalColor = data.criticalColor || "#ff3b30";
  const steps = data.steps || [];

  // 💡 버튼 클릭 로직
  const handleButtonClick = () => {
    onOpenModal(); // 기본 침수 모달 열기
  };

  return (
    <Box sx={{ width: "100%", py: 12, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* 헤더 섹션 (형이 짠 원본 그대로) */}
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#0066cc",
              mb: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            {data.subTitle}
          </Typography>
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: "2rem",
              lineHeight: { xs: 1, md: 1.5 },
              letterSpacing: "-0.04em",
            }}
          >
            {data.mainTitle}
          </Typography>
          <Typography sx={{ color: "#86868b", fontSize: "0.9rem", mt: 1 }}>
            {data.description}
          </Typography>
        </Box>

        {/* 그리드 섹션 (형이 고생해서 맞춘 60% vs 50% 레이아웃) */}
        <Grid container spacing={3} alignItems="stretch">
          {/* 좌측 큰 카드 */}
          {steps[0] && (
            <Grid item xs={12} sx={{ maxWidth: { md: "60% !important" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #f2f2f4",
                  bgcolor: "#fbfbfd",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: accentColor,
                    mb: 1,
                  }}
                >
                  {steps[0].id}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1d1d1f",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {steps[0].title}
                </Typography>
                <Typography
                  sx={{
                    color: "#424245",
                    fontSize: "0.9rem",
                    mb: 2,
                    whiteSpace: "pre-line",
                  }}
                >
                  {steps[0].desc}
                </Typography>
                <Typography sx={{ color: "#86868b", fontSize: "0.9rem" }}>
                  💡 {steps[0].tip}
                </Typography>
              </Paper>
            </Grid>
          )}

          {/* 우측 작은 카드 2개 (세로 정렬) */}
          {[steps[1], steps[2]].map(
            (step, index) =>
              step && (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={step.id || index}
                  sx={{
                    display: "flex",
                    maxWidth: { md: "47.2% !important" }, // 형이 맞춘 그 수치 그대로
                    flexBasis: { md: "50% !important" },
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      width: "100%",
                      borderRadius: "24px",
                      border: "1px solid #f2f2f4",
                      bgcolor: "#fbfbfd",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: accentColor,
                        mb: 1,
                      }}
                    >
                      {step.id}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#1d1d1f",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#424245",
                        fontSize: "0.9rem",
                        mb: 2,
                        flexGrow: 1,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {step.desc}
                    </Typography>
                    <Typography sx={{ color: "#86868b", fontSize: "0.9rem" }}>
                      💡 {step.tip}
                    </Typography>
                  </Paper>
                </Grid>
              ),
          )}
        </Grid>

        {/* 알림 섹션 */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "#fff1f0",
            borderRadius: "24px",
            border: `1px solid ${criticalColor}20`,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 1.5 }}
          >
            <ReportProblemIcon sx={{ color: criticalColor }} />
            <Typography
              sx={{ fontSize: "1rem", fontWeight: 700, color: criticalColor }}
            >
              {data.alertTitle}
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: "#424245",
              fontSize: "0.9rem",
              whiteSpace: "pre-line",
            }}
          >
            {data.alertDesc}
          </Typography>
        </Box>

        {/* 하단 CTA (형이 짠 outlined 버튼 스타일) */}
        <Box
          sx={{
            mt: 10,
            textAlign: "center",
            py: 8,
            borderTop: "1px solid #f2f2f4",
          }}
        >
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
            Besoin d'aide ?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={handleButtonClick}
            sx={{
              color: "#1d1d1f",
              borderColor: "#1d1d1f",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Devis gratuit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RepairLayout;
