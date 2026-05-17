import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PeopleIcon from "@mui/icons-material/People";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

import { useContext } from "react";

import { UserContext } from "../../Context/UserContext";

function AdminNavbar({ setSelectedPage }) {
  const { logout, user } = useContext(UserContext);

  const navButtonStyle = {
    color: "#fff",

    textTransform: "none",

    fontWeight: "bold",

    borderRadius: 3,

    px: 2,

    "&:hover": {
      backgroundColor: "#ffffff22",
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#1e1e2f",

        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",

          justifyContent: "space-between",

          flexWrap: "wrap",

          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Admin Panel
        </Typography>

        <Box
          sx={{
            display: "flex",

            gap: 1,

            flexWrap: "wrap",
          }}
        >
          <Button
            startIcon={<DashboardIcon />}
            sx={navButtonStyle}
            onClick={() => setSelectedPage("dashboard")}
          >
            Dashboard
          </Button>

          <Button
            startIcon={<RestaurantMenuIcon />}
            sx={navButtonStyle}
            onClick={() => setSelectedPage("menu")}
          >
            Menu Manage
          </Button>

          <Button
            startIcon={<PeopleIcon />}
            sx={navButtonStyle}
            onClick={() => setSelectedPage("users")}
          >
            Users
          </Button>

          <Button
            startIcon={<FeedbackIcon />}
            sx={navButtonStyle}
            onClick={() => setSelectedPage("feedbacks")}
          >
            Feedbacks
          </Button>

          <Button
            startIcon={<LogoutIcon />}
            sx={navButtonStyle}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>

        <Typography
          sx={{
            color: "#d1d5db",

            fontWeight: "bold",
          }}
        >
          Hello, {user?.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNavbar;
