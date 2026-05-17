import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  MenuItem,
} from "@mui/material";

import Navbar from "../../Component/Navbar/Navbar";

import { useState } from "react";

import toast from "react-hot-toast";

// ✅ صورة الخلفية
import bgImage from "../../assets/resv.jpeg";

function Res() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("reservations")) || [];

    const newReservation = {
      id: stored.length + 1,
      ...formData,
    };

    const updated = [...stored, newReservation];

    localStorage.setItem("reservations", JSON.stringify(updated));

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
    });

    toast.success("Table reserved successfully 🍽️");
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",

          // ✅ الخلفية
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.7)
            ),
            url(${bgImage})
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          py: 10,
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            sx={{
              mb: 5,
              color: "#fff",
            }}
          >
            Book a <span style={{ color: "#f97316" }}>Table</span>
          </Typography>

          <Paper
            elevation={10}
            sx={{
              p: 5,
              borderRadius: 5,

              background: "rgba(255,255,255,0.08)",

              backdropFilter: "blur(12px)",

              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                label="Full Name"
                fullWidth
                variant="filled"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    color: "#fcd9b6",

                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.12)",
                    },

                    "&.Mui-focused": {
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: "1px solid #f97316",
                    },
                  },

                  "& input": {
                    color: "#fcd9b6",
                  },

                  "& .MuiInputLabel-root": {
                    color: "#d1d5db",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f97316",
                  },
                }}
              />

              <TextField
                label="Phone Number"
                fullWidth
                variant="filled"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    color: "#fcd9b6",
                  },

                  "& input": {
                    color: "#fcd9b6",
                  },

                  "& .MuiInputLabel-root": {
                    color: "#d1d5db",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f97316",
                  },
                }}
              />

              <TextField
                type="date"
                fullWidth
                variant="filled"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                  },

                  "& input": {
                    color: "#fcd9b6",
                  },
                }}
              />

              <TextField
                type="time"
                fullWidth
                variant="filled"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                  },

                  "& input": {
                    color: "#fcd9b6",
                  },
                }}
              />

              <TextField
                select
                label="Number of Guests"
                fullWidth
                variant="filled"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    color: "#fcd9b6",
                  },

                  "& .MuiInputLabel-root": {
                    color: "#d1d5db",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#f97316",
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num} People
                  </MenuItem>
                ))}
              </TextField>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: "bold",

                  background: "linear-gradient(to right, #f97316, #ea580c)",

                  "&:hover": {
                    background: "linear-gradient(to right, #ea580c, #f97316)",

                    transform: "scale(1.02)",
                  },
                }}
              >
                Reserve Now
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Res;
