import { Box, Typography, Menu } from "@mui/material";
import { Link } from "react-router-dom";

const DropDown = ({ anchorEl, open, onClose, menus, onDrawerToggle }) => {
  const handleItemClick = () => {
    onClose();
    if (onDrawerToggle) onDrawerToggle();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          p: 1.5,
          width: { xs: "285px", sm: "500px" },
          borderRadius: "20px",
          boxShadow: "0px 15px 50px rgba(0,0,0,0.12)",
          border: "1px solid #f0f0f0",
          backgroundImage: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 1,
        }}
      >
        {menus.map((menu, i) => (
          <Box
            key={i}
            component={Link}
            to={menu.path}
            onClick={handleItemClick}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              p: 2,
              textDecoration: "none",
              color: "inherit",
              borderRadius: "14px",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Typography
              className="menu-title"
              sx={{
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#1d1d1f",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {menu.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: "#86868b",
                mt: 0.5,
                lineHeight: 1.5,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {menu.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Menu>
  );
};

export default DropDown;
