import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../Theme/Theme.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const role = user?.role;
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "rgba(233, 230, 230, 0.77)",
          backdropFilter: "blur(10px)",
          color: "#000",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Steak House
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" },  gap: 3, ml: -9 }}>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate("/reservations ")}
                sx={{
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Reservations
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                sx={{
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Contact
              </Button>

              {role === "admin" ? (
                <Button onClick={() => navigate("/admin/manage-menu")}>
                  Manage Menu
                </Button>
              ) : (
                <Button onClick={() => navigate("/menu")}>Menu</Button>
              )}
            </Box>

            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">Account</Typography>

          {user ? (
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/register");
                  setOpen(false);
                }}
              >
                Register
              </Button>
            </>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Settings</Typography>
          <Theme />
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
