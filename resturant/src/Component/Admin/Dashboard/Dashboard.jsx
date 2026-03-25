import { Box } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import MenuManage from "../Manage/MenuMange.jsx";

function Dashboard() {
  const [open, setOpen] = useState(true);

  const toggleSideBar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />

      <Box sx={{ display: "flex" }}>
        <Sidebar open={open} />

        <Box
          sx={{
            flex: 1,
            p: 3,
            transition: "0.3s",
          }}
        >
          
        <MenuManage />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
