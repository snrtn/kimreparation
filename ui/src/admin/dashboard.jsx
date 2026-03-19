import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ReceiptIcon from "@mui/icons-material/Receipt";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SidemenuAdmin from "./sidemenuAdmin";

// 📍 파일 상단에 '알맹이' 컴포넌트를 직접 선언 (파일 따로 안 만들어도 됨)
const DashboardMainContent = () => {
  const navigate = useNavigate();
  const stats = [
    {
      label: "En cours",
      count: 12,
      color: "#ff9800",
      icon: <EngineeringIcon />,
    },
    { label: "Prêt", count: 5, color: "#4caf50", icon: <CheckCircleIcon /> },
    {
      label: "Factures à régler",
      count: 3,
      color: "#f44336",
      icon: <ReceiptIcon />,
    },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Tableau de Bord
          </Typography>
          <Typography color="text.secondary">
            Bienvenue, Boss. Voici l'état de l'atelier.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate("/admin/dossier/new")}
            sx={{
              borderRadius: "12px",
              bgcolor: "#000",
              "&:hover": { bgcolor: "#333" },
              px: 3,
            }}
          >
            Nouveau Dossier
          </Button>
          <Button
            variant="outlined"
            startIcon={<ReceiptIcon />}
            onClick={() => navigate("/admin/facture/new")}
            sx={{
              borderRadius: "12px",
              borderColor: "#000",
              color: "#000",
              "&:hover": { borderColor: "#333" },
            }}
          >
            Nouvelle Facture
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                border: "none",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    bgcolor: `${stat.color}15`,
                    color: stat.color,
                    mr: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 600 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    {stat.count}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              borderRadius: "20px",
              minHeight: "400px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Dernières Réparations
            </Typography>
            <Typography color="text.secondary" variant="body2">
              수리 리스트가 여기에 들어옵니다...
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: "20px",
              minHeight: "400px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Notes / Rappels
            </Typography>
            <Typography color="text.secondary" variant="body2">
              중요 메모...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// 📍 메인 레이아웃 컴포넌트
const Dashboard = () => {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/admin/dashboard";

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f7" }}>
      <SidemenuAdmin />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        {isMainDashboard ? <DashboardMainContent /> : <Outlet />}
      </Box>
    </Box>
  );
};

export default Dashboard;
