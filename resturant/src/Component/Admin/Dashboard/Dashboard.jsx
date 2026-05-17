import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Sidebar from "../../Sidebar/Sidebar.jsx";

import { useState } from "react";

import MenuManage from "../Manage/MenuMange.jsx";

function Dashboard() {
  const [open, setOpen] = useState(true);

  const [selectedPage, setSelectedPage] = useState("menu");

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "menu":
        return <MenuManage />;

      case "users":
        return <h1>Users Page</h1>;

      case "feedbacks":
        return <h1>Feedbacks Page</h1>;

      default:
        return <MenuManage />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >
      <Sidebar
        open={open}
        toggleSideBar={toggleSideBar}
        setSelectedPage={setSelectedPage}
      />

      <Box
        sx={{
          flex: 1,
          width: "100%",
          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <IconButton
          onClick={toggleSideBar}
          sx={{
            mb: 3,
            bgcolor: "#1e1e2f",
            color: "#fff",

            "&:hover": {
              bgcolor: "#2c2c44",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {renderPage()}
      </Box>
    </Box>
  );
}

export default Dashboard;
