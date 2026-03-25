import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar({ open, toggleSideBar }) {
  const { user } = useContext(UserContext);
  const role = user?.role;

  const menuItemStyle = {
    borderRadius: 2,
    mb: 1,
    "&:hover": {
      backgroundColor: "#ffffff22",
    },
  };

  return (
    <Box
      sx={{
        width: open ? 220 : 80,
        transition: "0.3s",
        p: 2,
        bgcolor: "#1e1e2f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <IconButton
        onClick={toggleSideBar}
        sx={{
          color: "#fff",
          mb: 2,
          backgroundColor: "#ffffff22",
          "&:hover": { backgroundColor: "#ffffff33" },
        }}
      >
        <MenuIcon />
      </IconButton>

      {open && (
        <Typography sx={{ mb: 3, fontWeight: "bold" }}>
          Hello, {user?.name}
        </Typography>
      )}

      <List>
        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItemButton>

        {role === "admin" && (
          <>
            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <RestaurantMenuIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Menu" />}
            </ListItemButton>

            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <PeopleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItemButton>

            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <WorkIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Employee" />}
            </ListItemButton>
          </>
        )}

        {role === "user" && (
          <>
            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <RestaurantMenuIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Menu" />}
            </ListItemButton>

            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <PersonIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Profile" />}
            </ListItemButton>

            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Cart" />}
            </ListItemButton>

            <ListItemButton sx={menuItemStyle}>
              <ListItemIcon sx={{ color: "#fff" }}>
                <MessageIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Messages" />}
            </ListItemButton>
          </>
        )}

        <ListItemButton sx={menuItemStyle}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Logout" />}
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
