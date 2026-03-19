import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ReceiptIcon from "@mui/icons-material/Receipt"; // Facture 전환용
import DescriptionIcon from "@mui/icons-material/Description"; // Devis용
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

// 📍 커스텀 툴바 (검색 기능 포함)
const MyCustomToolbar = () => (
  <GridToolbarContainer sx={{ p: 2, justifyContent: "space-between" }}>
    <Typography variant="h6" sx={{ fontWeight: 800, ml: 1 }}>
      Liste des Devis / Dossiers
    </Typography>
    <GridToolbarQuickFilter
      placeholder="Rechercher un dossier..."
      sx={{
        width: 300,
        "& .MuiInputBase-root": {
          borderRadius: "10px",
          bgcolor: "#f5f5f7",
          px: 2,
        },
      }}
    />
  </GridToolbarContainer>
);

const DossierPreview = () => {
  const navigate = useNavigate();

  // 📍 테스트 데이터 (Dossier / Devis 혼합)
  const rows = useMemo(
    () => [
      {
        id: "D-2603-001",
        client: "Jean Dupont",
        device: "iPhone 15 Pro",
        status: "Devis",
        date: "2026-03-19",
      },
      {
        id: "D-2603-002",
        client: "Marie Claire",
        device: "MacBook Air M2",
        status: "En attente",
        date: "2026-03-18",
      },
      {
        id: "D-2603-003",
        client: "Luc Lucas",
        device: "iPad Pro",
        status: "Prêt",
        date: "2026-03-17",
      },
      {
        id: "D-2603-004",
        client: "Sophie Roux",
        device: "Samsung S24",
        status: "Facturé",
        date: "2026-03-16",
      },
    ],
    [],
  );

  const columns = [
    {
      field: "id",
      headerName: "ID Dossier",
      width: 130,
      sx: { fontWeight: 700 },
    },
    { field: "client", headerName: "Client", width: 200 },
    { field: "device", headerName: "Appareil (기기)", width: 200 },
    {
      field: "status",
      headerName: "Statut",
      width: 150,
      renderCell: (p) => {
        let color = "#eee";
        let textColor = "#666";
        if (p.value === "Devis") {
          color = "#e3f2fd";
          textColor = "#1976d2";
        }
        if (p.value === "Prêt") {
          color = "#e8f5e9";
          textColor = "#2e7d32";
        }
        if (p.value === "Facturé") {
          color = "#f3e5f5";
          textColor = "#7b1fa2";
        }

        return (
          <Chip
            label={p.value}
            size="small"
            sx={{
              bgcolor: color,
              color: textColor,
              fontWeight: 700,
              borderRadius: "8px",
            }}
          />
        );
      },
    },
    { field: "date", headerName: "Date", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      renderCell: (p) => (
        <Stack direction="row" spacing={1} sx={{ mt: 0.8 }}>
          <Tooltip title="Détails">
            <IconButton
              size="small"
              onClick={() => navigate(`/admin/dossier/${p.id}`)}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Modifier le Devis">
            <IconButton
              size="small"
              onClick={() => navigate(`/admin/dossier/edit/${p.id}`)}
            >
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Tooltip>
          {/* 📍 여기서 Facture로 바로 전환하는 로직 연결 예정 */}
          <Tooltip title="Convertir en Facture">
            <IconButton
              size="small"
              disabled={p.row.status === "Facturé"}
              onClick={() => alert(`${p.id}를 Facture로 전환합니다.`)}
            >
              <ReceiptIcon
                fontSize="small"
                sx={{ color: p.row.status === "Facturé" ? "#ccc" : "#2e7d32" }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <Box
      sx={{
        p: 4,
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f8f9fa",
      }}
    >
      {/* 헤더 섹션 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#1a1a1a" }}>
            Gestion des Dossiers
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Créez des devis et gérez vos réparations en cours.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/admin/dossier/new")}
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "12px",
            px: 3,
            py: 1.5,
            fontWeight: 700,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          Nouveau Dossier / Devis
        </Button>
      </Box>

      {/* 데이터 그리드 영역 */}
      <Paper
        sx={{
          flexGrow: 1,
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
          border: "none",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: MyCustomToolbar }}
          disableRowSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              bgcolor: "#fafafa",
              borderBottom: "1px solid #eee",
              fontWeight: 800,
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #f5f5f5",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #eee",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default DossierPreview;
