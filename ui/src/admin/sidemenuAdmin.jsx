import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment"; // Dossier용
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"; // Facture용
import { useNavigate, useLocation } from "react-router-dom";

const SidemenuAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 📍 메뉴 구성: 어떤 주소(match)에 있을 때 불을 켤지 똑똑하게 배열로 지정!
  const menuItems = [
    {
      text: "Dossiers",
      icon: <AssignmentIcon />,
      path: "/admin/dossier/view",
      // dashboard로 들어오든, dossier/new로 가든 다 Dossiers에 불 켜짐!
      match: ["/admin/dashboard", "/admin/dossier"],
    },
    {
      text: "Factures",
      icon: <ReceiptLongIcon />,
      path: "/admin/facture/view",
      // facture 관련 페이지면 다 Factures에 불 켜짐!
      match: ["/admin/facture"],
    },
  ];

  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "#fff",
        borderRight: "1px solid #eaeaea",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* --- 어드민 로고 영역 --- */}
      <Box sx={{ px: 2, py: 3, mb: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, letterSpacing: "-0.05em" }}
        >
          Kim Reparation
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Gestion de l'atelier v1.0
        </Typography>
      </Box>

      <Divider sx={{ mb: 2, opacity: 0.6 }} />

      {/* --- 메뉴 리스트 --- */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => {
          // 💡 핵심 로직: 현재 주소가 match 배열 안의 단어 중 하나라도 포함하고 있으면 true!
          const isActive = item.match.some((keyword) =>
            location.pathname.includes(keyword),
          );

          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: "12px",
                  py: 1.5,
                  bgcolor: isActive ? "#f5f5f7" : "transparent",
                  color: isActive ? "#000" : "#666",
                  "&:hover": {
                    bgcolor: "#f5f5f7",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "#000" : "#999",
                    minWidth: 45,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* --- 하단 정보 --- */}
      <Box sx={{ p: 2, bgcolor: "#fafafa", borderRadius: "12px" }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block" }}
        >
          Connecté en tant que :
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Hanjun Kim
        </Typography>
      </Box>
    </Box>
  );
};

export default SidemenuAdmin;
