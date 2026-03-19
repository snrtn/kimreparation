import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate, useParams } from "react-router-dom";

// 📍 [핵심] onMobileClick 프롭 추가
const MenuDrive = ({ items = [], onMobileClick }) => {
  const navigate = useNavigate();
  const { repairId } = useParams();

  const clientName = items[0]?.client?.name || "Client";

  const photoItems = items.filter(
    (item) => item.photos && item.photos.length > 0,
  );

  // 📍 [핵심] 이동 후 모바일이면 메뉴를 닫아주는 함수
  const handleNav = (path) => {
    navigate(path);
    if (onMobileClick) onMobileClick();
  };

  return (
    <Box
      sx={{
        width: "100%", // 📍 부모 Box가 360px로 고정했으니 여기선 100%
        borderRight: { md: "0.6px solid #d2d2d7" },
        bgcolor: "#fff",
        pt: { xs: 4, md: 12 },
        height: "100vh",
        position: "relative",
        boxSizing: "border-box", // 패딩 때문에 넓이 안 늘어나게 고정
      }}
    >
      <Typography
        sx={{ ml: 1, px: 3, mb: 3, fontWeight: 900, fontSize: "1rem" }}
      >
        Bienvenue dans votre Espace, <br />
        {clientName}
      </Typography>
      <List sx={{ px: 2 }}>
        <ListItem
          button
          onClick={() => handleNav(`/client/driveDashboard/${repairId}/docs`)}
          sx={{ mb: 1, cursor: "pointer" }}
        >
          <ListItemIcon sx={{ minWidth: 25 }}>
            <DescriptionIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Documents"
            primaryTypographyProps={{ fontWeight: 600 }}
          />
        </ListItem>

        <Divider sx={{ my: 2, mx: 1 }} />

        <Typography
          sx={{
            px: 2,
            mb: 2,
            fontSize: "0.8rem",
            fontWeight: 800,
            color: "#86868b",
            textTransform: "uppercase",
          }}
        >
          Photos Réparations
        </Typography>

        {photoItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() =>
              handleNav(`/client/driveDashboard/${repairId}/imgs/${index}`)
            }
            sx={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontSize: "0.85rem",
                fontWeight: 600,
                noWrap: true,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
            <Box component="span" sx={{ fontSize: "0.73rem" }}>
              {item.photos.length}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuDrive;
