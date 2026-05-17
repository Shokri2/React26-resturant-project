import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PeopleIcon from "@mui/icons-material/People";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar({ open, toggleSideBar, setSelectedPage }){
  const { user, logout } = useContext(UserContext);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const role = user?.role;

  if (role !== "admin") {
    return null;
  }

  const menuItemStyle = {
    borderRadius: 2,
    mb: 1,

    "&:hover": {
      backgroundColor: "#ffffff22",
    },
  };

  const sidebarContent = (
    <Box
      sx={{
        width: 240,

        p: 2,

        bgcolor: "#1e1e2f",

        color: "#fff",

        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          mb: 4,

          fontWeight: "bold",

          fontSize: "1.3rem",

          textAlign: "center",
        }}
      >
        Admin Panel
      </Typography>

      <Typography
        sx={{
          mb: 3,

          fontWeight: "bold",

          fontSize: "1rem",
        }}
      >
        Hello, {user?.name}
      </Typography>

      <List>
        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <RestaurantMenuIcon />
          </ListItemIcon>

          <ListItemText primary="Menu Manage" />
        </ListItemButton>

        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>

          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <FeedbackIcon />
          </ListItemIcon>

          <ListItemText primary="Feedbacks" />
        </ListItemButton>

        <ListItemButton onClick={logout} sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSideBar}
        variant="temporary"
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: open ? 240 : 0,

        overflow: "hidden",

        transition: "0.3s",
      }}
    >
      {sidebarContent}
    </Box>
  );
}

export default Sidebar;
