import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ScreenContent = ({
  current,
  isMobile,
  formatDescription,
  onScreenModel,
}) => {
  return (
    <Grid container spacing={isMobile ? 5 : 8}>
      {/* 왼쪽: 설명 및 추천 박스 */}
      <Grid item xs={12} md={7.5}>
        <Box
          sx={{
            mb: { xs: 4, md: 0 },
            width: {
              xs: "100%",
              sm: "380px",
              md: "480px",
              xl: "580px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
              letterSpacing: "-0.04em",
            }}
          >
            {current.title}
          </Typography>
          <Typography
            sx={{
              color: current.color,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: { xs: 500, md: 600 },
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
            }}
          >
            {current.subtitle}
          </Typography>
          <Typography
            sx={{
              color: "#86868b",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              mb: 2,
            }}
          >
            "{current.recommendation}"
          </Typography>
          <Box sx={{ minHeight: { md: "100px" } }}>
            <Typography
              sx={{
                color: "#424245",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
              }}
            >
              {formatDescription(current.description)}
            </Typography>
          </Box>
        </Box>

        {/* Est-ce pour vous ? 박스 */}
        <Box
          sx={{
            p: { xs: 3.5, md: 4 },
            bgcolor: "#f5f5f7",
            borderRadius: "20px",
            mb: 4,
            minHeight: { md: "180px" },
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
            {current.forWhom.map((text, i) => (
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
                  component="span" // ✅ 에러 원인 해결: 이 줄을 추가해서 <p> 안에 <p>가 들어가는 걸 막았습니다!
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

        {/* --- 여기서부터 사장님이 원하신 버튼 영역입니다 --- */}
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            onClick={onScreenModel}
            sx={{
              bgcolor: "#0071e3",
              color: "#fff",
              borderRadius: "50px",
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              fontWeight: 600,
              fontSize: "0.9rem",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { bgcolor: "#0077ed", boxShadow: "none" },
            }}
          >
            Devis Gratuit
          </Button>
        </Stack>
        {/* ------------------------------------------- */}
      </Grid>

      {/* 오른쪽: 포인트 체크리스트 */}
      <Grid item xs={12} md={4.5}>
        <Box
          sx={{
            borderLeft: { md: "1px solid #d2d2d7" },
            pl: { md: 5 },
            pt: { md: 1 },
          }}
        >
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
            {current.features.map((f, i) => (
              <Box
                key={i}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
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
      </Grid>
    </Grid>
  );
};

export default ScreenContent;
