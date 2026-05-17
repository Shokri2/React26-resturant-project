import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/login2.png";
function Login() {
  const { login } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",

        backgroundImage: `linear-gradient(
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)
    ), url(${bgImage})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 5,
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              color: "#fff",
              mb: 2,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Back To Home
          </Button>

          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "#d1d5db",
              mb: 4,
            }}
          >
            Login to continue ordering your favorite food 
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "#f97316" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  color: "white",
                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },

                  "&.Mui-focused": {
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid #f97316",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#d1d5db",
                },
              }}
            />

            <TextField
              label="Pass"
              type="password"
              fullWidth
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText="Password must be at least 8 characters"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#f97316" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  color: "white",
                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.12)",
                  },

                  "&.Mui-focused": {
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid #f97316",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#d1d5db",
                },

                "& .MuiFormHelperText-root": {
                  color: "#9ca3af",
                },
              }}
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleLogin}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 3,
                fontSize: "1rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #f97316, #ea580c)",
                transition: "0.3s",

                "&:hover": {
                  transform: "scale(1.03)",
                  background: "linear-gradient(to right, #ea580c, #f97316)",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
