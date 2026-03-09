 Admin-Dashboard
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  Box,
  List,
  ListItem,

import {
  colors,
  ListItem,
  ListItemText,
 main
  Typography,
  ListItemText,
  IconButton,
} from "@mui/material";
 Admin-Dashboard
import MenuIcon from "@mui/icons-material/Menu";
function Sidebar({ open, toggleSideBar }) {
  const user = localStorage.getItem("currentrUsers");
  const role = user?.role;
  return (
    <>
      <Box
        sx={{
          p: 3,
          bgcolor: "MediumPurple",
          color: "white",
          minHeight: "100vh",
        }}
      >
        {/* role based access=rba */}
        <IconButton
          onClick={toggleSideBar}
          sx={{ color: "grey", bgcolor: "white" }}
        >
          <MenuIcon />
        </IconButton>
        {open && <Typography sx={{ p: 2 }}>Hello, {user?.name} </Typography>}
=======
import { UserContext } from "../../Context/UserContext";
import MenueIcon from "@mui/icons-material/Menue";
function Sidebar({ open, toggleSideBar }) {
  const { user } = useContext(UserContext);
  const role = user?.role;
  return (
    <>
      <Box>
        <IconButton onClick={toggleSideBar} sx={{ color: "grey" }}>
          <menueIcon />
        </IconButton>
        {open && <Typography sx={{ p: 2 }}> hello,{user?.name}</Typography>}
 main
        <List>
          <ListItem button>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
 Admin-Dashboard
          {role === "admin" && (
            <>
              {/* conditional render components  */}
              <ListItem button>
                <ListItemText primary={open ? "menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "users" : "U"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "employee" : "E"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "logout" : "L"} />
              </ListItem>
            </>
          )}
          {role === "user" && (
            <>
              <ListItem button>
                <ListItemText primary={open ? "Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Profile" : "P"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Cart" : "C"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Messaged" : "MS"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Logout" : "L"} />
=======
          {role === "user" && (
            <>
              <ListItem button>
                <ListItemText primary="mange menue" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="mange user" />
              </ListItem>
            </>
          )}
          {role === "admin" && (
            <>
              <ListItem button>
                <ListItemText primary=" menue" />
              </ListItem>

              <ListItem button>
                <ListItemText primary=" profile" />
              </ListItem>

              <ListItem button>
                <ListItemText primary=" ordered" />
 main
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}
export default Sidebar;
