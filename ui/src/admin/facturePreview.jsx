import React, { useMemo, useState } from "react";
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
import { DataGrid, getGridStringOperators } from "@mui/x-data-grid";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterValues: [],
  });

  const hasSearch =
    filterModel.quickFilterValues &&
    filterModel.quickFilterValues.length > 0 &&
    filterModel.quickFilterValues[0] !== "";

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
      title: `${f.amount}€ (${f.client})`,
      start: new Date(f.date),
      end: new Date(f.date),
      allDay: true,
    }));
  }, [currentMonthFactures]);

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
            label={`+${total.toFixed(0)}€`}
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

  // 📍 [핵심] 전화번호 띄어쓰기 무시하고 검색되게 하는 커스텀 필터
  const contactFilterOperators = getGridStringOperators().map((operator) => {
    if (operator.value === "contains") {
      return {
        ...operator,
        getApplyFilterFn: (filterItem) => {
          if (!filterItem.value) return null;
          // 검색어에서 공백 제거 (예: "0612" -> "0612")
          const filterValue = filterItem.value
            .replace(/\s+/g, "")
            .toLowerCase();
          return (params) => {
            if (!params.value) return false;
            // 실제 데이터에서 공백 제거 (예: "06 12 34" -> "061234")
            const cellValue = String(params.value)
              .replace(/\s+/g, "")
              .toLowerCase();
            return cellValue.includes(filterValue);
          };
        },
      };
    }
    return operator;
  });

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
      filterOperators: contactFilterOperators, // 📍 커스텀 검색 필터 적용
    },
    {
      field: "amount",
      headerName: "Montant",
      width: 110,
      renderCell: (p) => (
        <Typography variant="body2" sx={{ fontWeight: 800, mt: 1.5 }}>
          {p.value.toFixed(2)} €
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
        bgcolor: "#f8f9fa",
        p: 4,
      }}
    >
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
          <CardContent sx={{ display: "flex", alignItems: "center", p: 3 }}>
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
                {currentYearEncaisse.toLocaleString()} €
              </Typography>
            </Box>
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
          label="Liste (엑셀)"
          iconPosition="start"
          sx={{ fontWeight: 700 }}
        />
        <Tab
          icon={<CalendarMonthIcon />}
          label="Calendrier (달력)"
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
                setFilterModel({ items: [], quickFilterValues: [] });
              }}
              sx={{ bgcolor: "#f5f5f7" }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <Button
              onClick={() => {
                setCurrentDate(new Date());
                setFilterModel({ items: [], quickFilterValues: [] });
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
                setFilterModel({ items: [], quickFilterValues: [] });
              }}
              sx={{ bgcolor: "#f5f5f7" }}
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
            }}
          >
            <TextField
              placeholder="Rechercher (Client, Facture, 061234...)"
              size="small"
              value={filterModel?.quickFilterValues?.[0] || ""}
              onChange={(e) =>
                setFilterModel({
                  items: [],
                  quickFilterValues: [e.target.value],
                })
              }
              sx={{
                width: "100%",
                maxWidth: 400,
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
                "&.Mui-disabled": { bgcolor: "#e0e0e0", color: "#9e9e9e" },
              }}
            >
              {/* 📍 [수정] 월 숫자를 예쁜 프랑스어 달 이름(예: Mars)으로 변경 */}
              Imprimer{" "}
              {format(currentDate, "MMMM", { locale: fr }).replace(
                /^./,
                (str) => str.toUpperCase(),
              )}{" "}
              (PDF)
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
                Total CA : {currentMonthTotal.toLocaleString()} €
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
              rows={hasSearch ? factures : currentMonthFactures}
              columns={columns}
              filterModel={filterModel}
              onFilterModelChange={(newModel) => setFilterModel(newModel)}
              // 📍 quickFilter가 모든 컬럼에 적용될 때, 전화번호 커스텀 필터를 태우도록 설정
              slotProps={{ toolbar: { showQuickFilter: true } }}
              initialState={{
                pagination: { paginationModel: { pageSize: 7 } },
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
