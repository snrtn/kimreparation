import { Box, Container, Typography, Stack, Grid, Paper } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const RepairLayout = ({ data }) => {
  const accentColor = data.accentColor || "#0071e3";
  const criticalColor = data.criticalColor || "#ff3b30";
  const steps = data.steps || [];

  return (
    <Box sx={{ width: "100%", py: 16, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* 헤더 섹션 */}
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

        {/* 그리드 섹션 (형이 맞춘 60% vs 50% 레이아웃) */}
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
                  height: "100%",
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
          {[steps[3], steps[4]].map(
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
      </Container>
    </Box>
  );
};

export default RepairLayout;
