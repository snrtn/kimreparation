import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  Typography,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

// 아이콘들
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ReceiptIcon from "@mui/icons-material/Receipt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";

import DossierCreate from "./DossierCreate"; // 📍 오버레이 컴포넌트 임포트

// ==========================================
// 🚀 300개 랜덤 데이터 생성기
// ==========================================
const generateDummyDossiers = (count) => {
  const firstNames = [
    "Jean",
    "Marie",
    "Luc",
    "Sophie",
    "Marc",
    "Emma",
    "Leo",
    "Chloe",
    "Hugo",
    "Alice",
  ];
  const lastNames = [
    "Dupont",
    "Claire",
    "Lucas",
    "Roux",
    "Blanc",
    "Martin",
    "Dubois",
    "Leroy",
    "Moreau",
    "Simon",
  ];
  const methods = ["Carte", "Espèces", "Virement", "PayPal"];
  const data = [];
  const startDate = new Date(2025, 0, 1).getTime();
  const endDate = new Date().getTime();

  for (let i = 1; i <= count; i++) {
    const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const client = `${fName} ${lName}`;
    const contact =
      Math.random() > 0.5
        ? `06 ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)}`
        : `${fName.toLowerCase()}.${lName.toLowerCase()}@gmail.com`;

    const randomTime = startDate + Math.random() * (endDate - startDate);
    const createdAtDate = new Date(randomTime);
    const createdAt = format(createdAtDate, "yyyy-MM-dd");

    let updatedAt = null;
    if (Math.random() > 0.4) {
      const updateDaysAfter = Math.floor(Math.random() * 3);
      const updateDate = new Date(
        createdAtDate.getTime() + updateDaysAfter * 24 * 60 * 60 * 1000,
      );
      if (updateDate <= new Date())
        updatedAt = format(updateDate, "yyyy-MM-dd");
    }

    const isPaid = Math.random() > 0.7;
    const isSigned = isPaid || Math.random() > 0.4;
    let paymentMethod = null;
    let facturedAt = null;
    if (isPaid) {
      paymentMethod = methods[Math.floor(Math.random() * methods.length)];
      facturedAt = updatedAt || createdAt;
    }
    data.push({
      id: `D-${format(createdAtDate, "yyMM")}-${String(i).padStart(3, "0")}`,
      client,
      contact,
      createdAt,
      updatedAt,
      isPaid,
      paymentMethod,
      isSigned,
      facturedAt,
      unreadCount: Math.random() > 0.85 ? Math.floor(Math.random() * 3) + 1 : 0,
    });
  }
  return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

const DossierPreview = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchClient, setSearchClient] = useState("");
  const [searchContact, setSearchContact] = useState("");
  const [modalType, setModalType] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openMsgModal, setOpenMsgModal] = useState(false);
  const [allRows, setAllRows] = useState(() => generateDummyDossiers(300));
  const [readMsgIds, setReadMsgIds] = useState(new Set());

  const [openCreate, setOpenCreate] = useState(false); // 📍 신규 등록 오버레이 상태

  const isSearching = searchClient.trim() !== "" || searchContact.trim() !== "";
  const unreadMessagesList = useMemo(
    () => allRows.filter((r) => !readMsgIds.has(r.id) && r.unreadCount > 0),
    [allRows, readMsgIds],
  );
  const totalUnread = useMemo(
    () => unreadMessagesList.reduce((sum, r) => sum + r.unreadCount, 0),
    [unreadMessagesList],
  );

  const handleOpenModal = (type, row) => {
    setSelectedRow(row);
    setModalType(type);
    if (type === "message") setReadMsgIds((prev) => new Set(prev).add(row.id));
  };
  const handleCloseModal = () => {
    setModalType(null);
    setSelectedRow(null);
  };
  const handleMsgListClick = (row) => {
    setSearchClient(row.client);
    setSearchContact(row.contact);
    setOpenMsgModal(false);
  };

  const displayedRows = useMemo(() => {
    return allRows.filter((row) => {
      const rowDate = new Date(row.createdAt);
      const isSameMonth =
        rowDate.getMonth() === currentDate.getMonth() &&
        rowDate.getFullYear() === currentDate.getFullYear();
      const matchesClient = row.client
        .toLowerCase()
        .includes(searchClient.toLowerCase());
      const matchesContact = row.contact
        .replace(/\s+/g, "")
        .toLowerCase()
        .includes(searchContact.replace(/\s+/g, "").toLowerCase());
      if (isSearching) return matchesClient && matchesContact;
      return isSameMonth;
    });
  }, [allRows, currentDate, searchClient, searchContact, isSearching]);

  const CenterWrapper = ({ children, direction = "column" }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );

  const columns = [
    {
      field: "id",
      headerName: "N° Dossier",
      flex: 0.8,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Créé le",
      flex: 0.8,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "client",
      headerName: "Client",
      flex: 1.2,
      align: "center",
      headerAlign: "center",
      sx: { fontWeight: 700 },
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1.2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "updatedAt",
      headerName: "Modifié le",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (p) => (
        <CenterWrapper>
          <Typography
            variant="body2"
            sx={{
              color: p.value ? "inherit" : "#999",
              fontStyle: p.value ? "normal" : "italic",
            }}
          >
            {p.value ? p.value : "Non modifié"}
          </Typography>
        </CenterWrapper>
      ),
    },
    {
      field: "paymentDeadline",
      headerName: "Délai",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
      renderCell: (p) => {
        if (p.row.isPaid) {
          const fDate = new Date(p.row.facturedAt || p.row.updatedAt);
          const dateStr = `${String(fDate.getDate()).padStart(2, "0")}/${String(fDate.getMonth() + 1).padStart(2, "0")}/${fDate.getFullYear()}`;
          return (
            <CenterWrapper>
              <Typography
                variant="body2"
                sx={{ color: "#2e7d32", fontWeight: 900, lineHeight: 1.2 }}
              >
                PAYÉ LE {dateStr}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#2e7d32", fontWeight: 700 }}
              >
                (VIA {p.row.paymentMethod?.toUpperCase()})
              </Typography>
            </CenterWrapper>
          );
        }
        const origDate = new Date(p.row.createdAt);
        origDate.setHours(0, 0, 0, 0);
        const valid3 = new Date(origDate);
        valid3.setDate(valid3.getDate() + 3);
        const valid10 = new Date(valid3);
        valid10.setDate(valid10.getDate() + 7);
        const valid21 = new Date(valid10);
        valid21.setDate(valid10.getDate() + 11);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const formatDate = (d) =>
          `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
        if (today > valid21)
          return (
            <CenterWrapper>
              <Typography
                variant="body2"
                sx={{ color: "#d32f2f", fontWeight: 900 }}
              >
                ⚠️ DEVIS EXPIRÉ
              </Typography>
            </CenterWrapper>
          );
        else if (today > valid10)
          return (
            <CenterWrapper>
              <Typography
                variant="body2"
                sx={{ color: "#d32f2f", fontWeight: 900, lineHeight: 1.2 }}
              >
                Dernier délai: {formatDate(valid21)}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#d32f2f",
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  mt: 0.2,
                }}
              >
                À VÉRIFIER
              </Typography>
            </CenterWrapper>
          );
        else if (today > valid3)
          return (
            <CenterWrapper>
              <Typography
                variant="body2"
                sx={{ color: "#ff9800", fontWeight: 900 }}
              >
                Prolongé: {formatDate(valid10)}
              </Typography>
            </CenterWrapper>
          );
        else
          return (
            <CenterWrapper>
              <Typography variant="body2" sx={{ color: "#424242" }}>
                Jusqu'au: {formatDate(valid3)}
              </Typography>
            </CenterWrapper>
          );
      },
    },
    {
      field: "isSigned",
      headerName: "Signature",
      flex: 0.8,
      align: "center",
      headerAlign: "center",
      renderCell: (p) => (
        <CenterWrapper direction="row">
          <Chip
            label={p.value ? "Signé" : "En attente"}
            size="small"
            sx={{
              bgcolor: p.value ? "#e3f2fd" : "#f5f5f5",
              color: p.value ? "#1976d2" : "#999",
              fontWeight: 800,
              borderRadius: "6px",
            }}
          />
        </CenterWrapper>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: (p) => {
        const rowUnreadCount = readMsgIds.has(p.row.id) ? 0 : p.row.unreadCount;
        return (
          <CenterWrapper direction="row">
            <Stack
              direction="row"
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <Tooltip title="Voir">
                <IconButton
                  size="small"
                  onClick={() => handleOpenModal("view", p.row)}
                >
                  <VisibilityIcon fontSize="small" sx={{ color: "#555" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Modifier">
                <IconButton
                  size="small"
                  onClick={() => handleOpenModal("edit", p.row)}
                >
                  <EditIcon fontSize="small" sx={{ color: "#1976d2" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Messages">
                <IconButton
                  size="small"
                  onClick={() => handleOpenModal("message", p.row)}
                >
                  <Badge
                    badgeContent={rowUnreadCount}
                    color="error"
                    overlap="circular"
                  >
                    <MailIcon
                      fontSize="small"
                      sx={{ color: rowUnreadCount > 0 ? "#f57c00" : "#999" }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 0.5, my: 1, borderColor: "#ccc" }}
              />
              <Tooltip title="Créer Facture">
                <IconButton
                  size="small"
                  onClick={() => handleOpenModal("facture", p.row)}
                >
                  <ReceiptIcon fontSize="small" sx={{ color: "#2e7d32" }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </CenterWrapper>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fcfcfd",
      }}
    >
      {/* 📍 오버레이 렌더링 */}
      {openCreate && <DossierCreate onClose={() => setOpenCreate(false)} />}

      <Paper
        elevation={0}
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          border: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: "#fff",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ width: 300 }}
          >
            <IconButton
              disabled={isSearching}
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1,
                  ),
                )
              }
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Button
              onClick={() => {
                setCurrentDate(new Date());
                setSearchClient("");
                setSearchContact("");
              }}
              sx={{
                width: 180,
                color: "#000",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              {format(currentDate, "MMMM yyyy", { locale: fr }).toUpperCase()}
            </Button>
            <IconButton
              disabled={isSearching}
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1,
                  ),
                )
              }
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              px: 2,
              gap: 2,
            }}
          >
            <TextField
              placeholder="Nom du Client..."
              size="small"
              value={searchClient}
              onChange={(e) => setSearchClient(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: 220,
                bgcolor: "#f5f5f7",
                borderRadius: "10px",
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#999" }} fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="061234... ou Email"
              size="small"
              value={searchContact}
              onChange={(e) => setSearchContact(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: 220,
                bgcolor: "#f5f5f7",
                borderRadius: "10px",
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#999" }} fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            {isSearching && (
              <Tooltip title="Reset">
                <IconButton
                  onClick={() => {
                    setSearchClient("");
                    setSearchContact("");
                  }}
                >
                  <RestartAltIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ width: 450, justifyContent: "flex-end" }}
          >
            <Tooltip title="Messages">
              <IconButton onClick={() => setOpenMsgModal(true)}>
                <Badge badgeContent={totalUnread} color="error">
                  <MailIcon
                    sx={{ color: totalUnread > 0 ? "#1976d2" : "#999" }}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ my: 1, borderColor: "#e0e0e0" }}
            />
            {/* 📍 Nouveau Dossier 버튼 - 오버레이 열기 */}
            <Button
              variant="contained"
              startIcon={<AddIcon sx={{ color: "#fff" }} />}
              onClick={() => setOpenCreate(true)}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "10px",
                px: 3,
                py: 1,
                fontWeight: 800,
                "&:hover": { bgcolor: "#333" },
              }}
            >
              Nouveau Dossier
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DataGrid
            rows={displayedRows}
            columns={columns}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 11 } },
              sorting: { sortModel: [{ field: "createdAt", sort: "desc" }] },
            }}
            rowHeight={60}
            sx={{
              border: "none",
              px: 2,
              flex: 1,
              "& .MuiDataGrid-main": { overflow: "auto" },
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "#fafafa",
                fontWeight: 800,
              },
              "& .MuiDataGrid-cell": { borderBottom: "1px solid #f5f5f5" },
            }}
          />
        </Box>
      </Paper>

      {/* 기존 모달창들 */}
      <Dialog
        open={openMsgModal}
        onClose={() => setOpenMsgModal(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Nouveaux Messages
          </Typography>
          <IconButton
            onClick={() => setOpenMsgModal(false)}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <List sx={{ pt: 0 }}>
            {unreadMessagesList.length === 0 ? (
              <Typography sx={{ p: 4, textAlign: "center", color: "#666" }}>
                Aucun nouveau message.
              </Typography>
            ) : (
              unreadMessagesList.map((msgRow, index) => (
                <React.Fragment key={msgRow.id}>
                  <ListItem
                    alignItems="center"
                    sx={{
                      px: 3,
                      py: 2,
                      "&:hover": { bgcolor: "#f5f5f5", cursor: "pointer" },
                    }}
                    onClick={() => handleMsgListClick(msgRow)}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#1976d2" }}>
                        {msgRow.client.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold" color="#1d1d1f">
                          {msgRow.client}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          Contact : {msgRow.contact}
                        </Typography>
                      }
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "#d32f2f", fontWeight: "bold" }}
                    >
                      {msgRow.unreadCount} message(s)
                    </Typography>
                  </ListItem>
                  {index < unreadMessagesList.length - 1 && (
                    <Divider component="li" />
                  )}
                </React.Fragment>
              ))
            )}
          </List>
        </DialogContent>
      </Dialog>
      <Dialog
        open={modalType !== null}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        <DialogTitle
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {modalType === "view" &&
              `Détails du Dossier - ${selectedRow?.client}`}
            {modalType === "edit" &&
              `Modifier Dossier - ${selectedRow?.client}`}
            {modalType === "facture" &&
              `Générer Facture - ${selectedRow?.client}`}
            {modalType === "message" && "Demande de Contact"}
          </Typography>
          <IconButton onClick={handleCloseModal} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, pt: 4, minHeight: "150px" }}>
          {modalType === "view" && (
            <Typography>
              Ici, vous pouvez voir les détails du dossier{" "}
              <b>{selectedRow?.id}</b> en mode lecture seule.
            </Typography>
          )}
          {modalType === "edit" && (
            <Typography>
              Ici, vous pouvez modifier les informations du dossier{" "}
              <b>{selectedRow?.id}</b>.
            </Typography>
          )}
          {modalType === "facture" && (
            <Typography>
              Êtes-vous sûr de vouloir générer une facture pour{" "}
              <b>{selectedRow?.client}</b> ?
            </Typography>
          )}
          {modalType === "message" && (
            <Box textAlign="center" py={2}>
              <Avatar
                sx={{
                  bgcolor: "#f57c00",
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  mb: 2,
                }}
              >
                {selectedRow?.client.charAt(0)}
              </Avatar>
              <Typography variant="h5" fontWeight="bold" color="#1d1d1f" mb={1}>
                {selectedRow?.client}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                Contact : {selectedRow?.contact}
              </Typography>
              <Typography
                variant="body2"
                color="#666"
                sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: "8px" }}
              >
                * Ouvrez le dossier de ce client pour vérifier les messages
                complets.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2, bgcolor: "#f9f9f9" }}>
          <Button
            onClick={handleCloseModal}
            sx={{ color: "#666", fontWeight: "bold" }}
          >
            Fermer
          </Button>
          {(modalType === "edit" || modalType === "facture") && (
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{ fontWeight: "bold" }}
            >
              {modalType === "facture" ? "Générer" : "Sauvegarder"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DossierPreview;
