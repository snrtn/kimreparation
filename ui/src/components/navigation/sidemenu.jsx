import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse, // 추가
} from "@mui/material";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // 추가

// components
import DropDown from "./dropdown";

// datas
import dropdownData from "./dropdown.data";

// ... 상단 import 생략

const SideMenu = ({ menuData, onDrawerToggle }) => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openStates, setOpenStates] = React.useState({});

  const handleToggle = (title) => {
    setOpenStates((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const currentMenu = dropdownData.find((m) => pathname.startsWith(m.path));
  const currentTitle = currentMenu ? currentMenu.title : "";
  // const dropdownMenus = dropdownData.filter(
  //   (m) => !pathname.startsWith(m.path),
  // );

  const isAtelierTitle = currentTitle === "Diagnostic Personnalisé";

  const dropdownMenus = dropdownData;

  return (
    <Box>
      {/* 모바일 상단 (기존과 동일) */}
      <Box
        sx={{
          height: "64px",
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          px: 3,
          borderBottom: "1px solid #eee",
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={() => onDrawerToggle && onDrawerToggle(false)}
          sx={{ display: "flex", mr: 1.5 }}
        >
          <img
            src="/assets/logo_removeBg.png"
            alt="KIM"
            style={{ height: "52px" }}
          />
        </Box>
        <Box
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: 0.5,
            pt: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.86rem",
              fontWeight: 700,
              color: isAtelierTitle ? "#E65100" : "inherit",
            }}
          >
            {currentTitle || "Écrans"}
          </Typography>
          <ExpandMoreIcon
            sx={{
              ml: 0.5,
              fontSize: "1.1rem",
              transform: open ? "rotate(180deg)" : "none",
              transition: "0.2s",
            }}
          />
        </Box>
      </Box>

      <DropDown
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        menus={dropdownMenus}
      />

      <Box sx={{ pl: 4, pr: 2, pt: { xs: 2, lg: 4 } }}>
        <List dense>
          {menuData &&
            menuData.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;
              const isBrandOpen =
                openStates[item.title] || pathname.includes(item.path);

              return (
                <React.Fragment key={idx}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={hasChildren ? "div" : Link}
                      to={hasChildren ? undefined : item.path}
                      onClick={
                        hasChildren
                          ? () => handleToggle(item.title)
                          : () => onDrawerToggle && onDrawerToggle(false)
                      }
                      // ✅ 수정: 자식이 있는 부모(Apple 등)는 selected 배경색 원천 차단
                      selected={!hasChildren && pathname === item.path}
                      sx={{
                        borderRadius: "8px",
                        mb: hasChildren ? 0 : 2, // 자식 있으면 간격 좁힘
                        "&.Mui-selected": {
                          bgcolor: "#e3f2fd",
                          color: "#1976d2",
                          "& .MuiTypography-root": { fontWeight: 800 },
                        },
                        // 부모일 때 호버 효과만 남기고 배경 유지 X
                        "&:hover": {
                          bgcolor: hasChildren
                            ? "transparent"
                            : "rgba(0,0,0,0.04)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                        }}
                      />
                      {hasChildren &&
                        (isBrandOpen ? (
                          <ExpandLessIcon fontSize="small" />
                        ) : (
                          <ExpandMoreIcon fontSize="small" />
                        ))}
                    </ListItemButton>
                  </ListItem>

                  {hasChildren && (
                    <Collapse in={isBrandOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ mb: 2 }}>
                        {item.children.map((child, cIdx) => (
                          <ListItemButton
                            key={cIdx}
                            component={Link}
                            to={child.path}
                            selected={pathname === child.path}
                            onClick={() =>
                              onDrawerToggle && onDrawerToggle(false)
                            }
                            sx={{
                              pl: 4,
                              borderRadius: "8px",
                              mb: 0.5,
                              "&.Mui-selected": {
                                bgcolor: "#f0f7ff",
                                color: "#1976d2",
                                "& .MuiTypography-root": { fontWeight: 800 },
                              },
                            }}
                          >
                            <ListItemText
                              primary={child.title}
                              primaryTypographyProps={{
                                fontSize: "0.85rem",
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
        </List>
      </Box>
    </Box>
  );
};

export default SideMenu;
