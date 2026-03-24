import React, { useMemo, useState, useEffect } from "react"; // 📍 useEffect 추가
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Paper,
  Tabs,
  Tab,
  IconButton,
  GlobalStyles,
  TextField,
  InputAdornment,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ViewListIcon from "@mui/icons-material/ViewList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { DataGrid } from "@mui/x-data-grid";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import FactureCreate from "./factureCreate";

const locales = { fr: fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const generateDummyData = (count) => {
  const firstNames = [
    "Jean",
    "Marie",
    "Paul",
    "Sophie",
    "Lucas",
    "Emma",
    "Leo",
    "Chloe",
    "Hugo",
    "Alice",
  ];
  const lastNames = [
    "Dupont",
    "Martin",
    "Dubois",
    "Blanc",
    "Leroy",
    "Roux",
    "Moreau",
    "Simon",
    "Laurent",
    "Garcia",
  ];
  const methods = ["Carte", "Espèces", "Virement"];
  const startDate = new Date(2024, 0, 1).getTime();
  const endDate = new Date().getTime();

  const data = [];
  for (let i = 1; i <= count; i++) {
    const randomTime = startDate + Math.random() * (endDate - startDate);
    const randomDate = new Date(randomTime);
    const year = randomDate.getFullYear();
    const fName = firstNames[Math.floor(Math.random() * 10)];
    const lName = lastNames[Math.floor(Math.random() * 10)];

    data.push({
      id: `F-${String(year).slice(2)}${String(i).padStart(4, "0")}`,
      client: `${fName} ${lName}`,
      contact:
        Math.random() > 0.5
          ? `06 ${Math.floor(10 + Math.random() * 90)} ${Math.floor(10 + Math.random() * 90)} ${Math.floor(10 + Math.random() * 90)} ${Math.floor(10 + Math.random() * 90)}`
          : `${fName.toLowerCase()}.${lName.toLowerCase()}@gmail.com`,
      amount: Math.floor(Math.random() * 300) + 49,
      status: "Payé",
      method: methods[Math.floor(Math.random() * 3)],
      date: format(randomDate, "yyyy-MM-dd"),
    });
  }
  return data.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const FacturePreview = () => {
  const [tabValue, setTabValue] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [searchClient, setSearchClient] = useState("");
  const [searchContact, setSearchContact] = useState("");

  // 📍 [추가] PDF 미리보기 모달 상태
  const [openPreview, setOpenPreview] = useState(false);

  // 📍 [핵심] 로직: 로컬 스토리지에서 초기값을 가져옴
  const [hideAmount, setHideAmount] = useState(() => {
    const saved = localStorage.getItem("hideAmountSettings");
    return saved === "true"; // 저장된 값이 "true"면 true, 아니면 false
  });

  // 📍 [핵심] 로직: hideAmount 상태가 바뀔 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("hideAmountSettings", hideAmount);
  }, [hideAmount]);

  const hasSearch = searchClient.trim() !== "" || searchContact.trim() !== "";

  const factures = useMemo(() => generateDummyData(1000), []);

  const currentYearEncaisse = useMemo(() => {
    return factures
      .filter(
        (f) => new Date(f.date).getFullYear() === currentDate.getFullYear(),
      )
      .reduce((sum, f) => sum + f.amount, 0);
  }, [factures, currentDate]);

  const currentMonthFactures = useMemo(() => {
    return factures.filter((f) => {
      const fDate = new Date(f.date);
      return (
        fDate.getMonth() === currentDate.getMonth() &&
        fDate.getFullYear() === currentDate.getFullYear()
      );
    });
  }, [factures, currentDate]);

  const displayedRows = useMemo(() => {
    if (!hasSearch) return currentMonthFactures;
    let filtered = factures;
    if (searchClient.trim() !== "") {
      const termClient = searchClient.toLowerCase();
      filtered = filtered.filter((f) =>
        f.client.toLowerCase().includes(termClient),
      );
    }
    if (searchContact.trim() !== "") {
      const termContact = searchContact.replace(/\s+/g, "").toLowerCase();
      filtered = filtered.filter((f) =>
        f.contact.replace(/\s+/g, "").toLowerCase().includes(termContact),
      );
    }
    return filtered;
  }, [hasSearch, factures, currentMonthFactures, searchClient, searchContact]);

  const currentMonthTotal = useMemo(() => {
    return currentMonthFactures.reduce((sum, f) => sum + f.amount, 0);
  }, [currentMonthFactures]);

  const dailyTotalsMap = useMemo(() => {
    const map = {};
    currentMonthFactures.forEach((f) => {
      map[f.date] = (map[f.date] || 0) + f.amount;
    });
    return map;
  }, [currentMonthFactures]);

  const calendarEvents = useMemo(() => {
    return currentMonthFactures.map((f) => ({
      title: hideAmount ? `***€ (${f.client})` : `${f.amount}€ (${f.client})`,
      start: new Date(f.date),
      end: new Date(f.date),
      allDay: true,
    }));
  }, [currentMonthFactures, hideAmount]);

  const handlePrintLedger = () => {
    const doc = new jsPDF();
    const monthTitle = format(currentDate, "MMMM yyyy", {
      locale: fr,
    }).toUpperCase();

    doc.setFontSize(18);
    doc.text(`LIVRE DES RECETTES - ${monthTitle}`, 14, 22);
    doc.setFontSize(12);
    doc.setTextColor(46, 125, 50);
    doc.text(
      `Total Chiffre d'Affaires (CA): ${currentMonthTotal.toLocaleString()} EUR`,
      14,
      32,
    );
    doc.setTextColor(0, 0, 0);

    const tableColumn = [
      "Date",
      "N. Facture",
      "Client",
      "Contact",
      "Montant",
      "Paiement",
    ];
    const tableRows = currentMonthFactures.map((f) => [
      f.date,
      f.id,
      f.client,
      f.contact,
      `${f.amount.toFixed(2)} €`,
      f.method,
    ]);

    autoTable(doc, {
      startY: 40,
      head: [tableColumn],
      body: tableRows,
      theme: "striped",
      headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 9 },
    });
    doc.save(`Livre_de_recettes_${monthTitle.replace(" ", "_")}.pdf`);
  };

  const CustomEvent = ({ event }) => (
    <Typography
      variant="caption"
      sx={{
        color: "#ffffff !important",
        fontWeight: 700,
        display: "block",
        px: 0.5,
      }}
    >
      {event.title}
    </Typography>
  );

  const CustomDateHeader = ({ date, label }) => {
    const dStr = format(date, "yyyy-MM-dd");
    const total = dailyTotalsMap[dStr];
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          px: 1,
          py: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#666" }}>
          {label}
        </Typography>
        {total > 0 && (
          <Chip
            label={hideAmount ? `+***€` : `+${total.toFixed(0)}€`}
            size="small"
            sx={{
              bgcolor: "#d32f2f !important",
              color: "#ffffff !important",
              fontWeight: "bold",
              height: 20,
              fontSize: "0.7rem",
              "& .MuiChip-label": { color: "#ffffff !important" },
            }}
          />
        )}
      </Box>
    );
  };

  const columns = [
    { field: "id", headerName: "N° Facture", width: 110 },
    { field: "date", headerName: "Date", width: 110 },
    {
      field: "client",
      headerName: "Client",
      width: 180,
      sx: { fontWeight: 600 },
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "amount",
      headerName: "Montant",
      width: 110,
      renderCell: (p) => (
        <Typography variant="body2" sx={{ fontWeight: 800, mt: 1.5 }}>
          {hideAmount ? "**** €" : `${p.value.toFixed(2)} €`}
        </Typography>
      ),
    },
    { field: "method", headerName: "Paiement", width: 110 },
    {
      field: "action",
      headerName: "Action",
      width: 90,
      sortable: false,
      renderCell: () => (
        <Button
          size="small"
          variant="contained"
          sx={{ bgcolor: "#333", color: "#fff", mt: 0.5, boxShadow: "none" }}
          onClick={() => setOpenPreview(true)} // 📍 [추가] 모달 열기 버튼
        >
          PDF
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 📍 [추가] PDF 팝업 모달 */}
      {openPreview && <FactureCreate onClose={() => setOpenPreview(false)} />}

      <GlobalStyles
        styles={{
          ".rbc-month-row": { minHeight: "250px !important" },
          ".rbc-events-container": {
            overflowY: "auto !important",
            maxHeight: "180px !important",
          },
          ".rbc-event": {
            backgroundColor: "rgba(82, 196, 26, 0.9) !important",
            border: "none !important",
          },
          ".rbc-off-range-bg": { backgroundColor: "#f0f2f5" },
        }}
      />

      <Box sx={{ flexShrink: 0 }}>
        <Card sx={{ border: "none", bgcolor: "#f6ffed", mb: 4 }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{ p: 1.5, bgcolor: "#4caf50", borderRadius: "12px", mr: 2 }}
              >
                <EuroIcon sx={{ color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Total Annuel ({currentDate.getFullYear()}년)
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {hideAmount
                    ? "****** €"
                    : `${currentYearEncaisse.toLocaleString()} €`}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              onClick={() => setHideAmount(!hideAmount)}
              startIcon={
                hideAmount ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              sx={{
                color: "#2e7d32",
                borderColor: "#2e7d32",
                fontWeight: 700,
                p: 1,
                px: 4,
                borderRadius: "10px",
                "&:hover": { borderColor: "#1b5e20", bgcolor: "#e8f5e9" },
              }}
            >
              {hideAmount ? "Afficher les montants" : "Masquer les montants"}
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Tabs
        value={tabValue}
        onChange={(e, v) => setTabValue(v)}
        sx={{ mb: 2, flexShrink: 0 }}
      >
        <Tab
          icon={<ViewListIcon />}
          label="Liste"
          iconPosition="start"
          sx={{ fontWeight: 700 }}
        />
        <Tab
          icon={<CalendarMonthIcon />}
          label="Calendrier"
          iconPosition="start"
          sx={{ fontWeight: 700 }}
          disabled={hasSearch}
        />
      </Tabs>

      <Paper
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          overflow: "hidden",
          borderRadius: "20px",
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
              onClick={() => {
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1,
                  ),
                );
                setSearchClient("");
                setSearchContact("");
              }}
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
              onClick={() => {
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1,
                  ),
                );
                setSearchClient("");
                setSearchContact("");
              }}
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
          </Box>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ width: 450, justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              disabled={hasSearch}
              startIcon={
                <LocalPrintshopIcon
                  sx={{ color: hasSearch ? "action.disabled" : "#fff" }}
                />
              }
              onClick={handlePrintLedger}
              sx={{
                width: 230,
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                py: 1,
                borderRadius: "10px",
                "&.Mui-disabled": { bgcolor: "#e0e0e0", color: "#9e9e9e" },
              }}
            >
              Imprimer{" "}
              {format(currentDate, "MMMM", { locale: fr }).replace(
                /^./,
                (str) => str.toUpperCase(),
              )}
            </Button>

            <Box sx={{ width: 200, textAlign: "right" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: hasSearch ? "#bdbdbd" : "#2e7d32",
                  transition: "color 0.3s",
                }}
              >
                Total CA :{" "}
                {hideAmount
                  ? "**** €"
                  : `${currentMonthTotal.toLocaleString()} €`}
              </Typography>
            </Box>
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
          {tabValue === 0 ? (
            <DataGrid
              rows={displayedRows}
              columns={columns}
              initialState={{
                pagination: { paginationModel: { pageSize: 8 } },
                sorting: { sortModel: [{ field: "date", sort: "desc" }] },
              }}
              disableRowSelectionOnClick
              sx={{
                border: "none",
                px: 2,
                flex: 1,
                "& .MuiDataGrid-main": { overflow: "auto" },
                "& .MuiDataGrid-columnHeaders": { bgcolor: "#f8f9fa" },
              }}
            />
          ) : (
            <Box sx={{ p: 1, flexGrow: 1, overflow: "auto", bgcolor: "#fff" }}>
              <Calendar
                localizer={localizer}
                events={calendarEvents}
                views={["month"]}
                date={currentDate}
                onNavigate={setCurrentDate}
                toolbar={false}
                style={{ height: "100%" }}
                components={{
                  month: { dateHeader: CustomDateHeader },
                  event: CustomEvent,
                }}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default FacturePreview;
