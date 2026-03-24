import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SidemenuAdmin from "./sidemenuAdmin";

// 📍 메인 레이아웃 컴포넌트
const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f7" }}>
      <SidemenuAdmin />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        {/* 복잡한 조건문 다 빼고 Outlet만 딱 넣으면 끝! */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
