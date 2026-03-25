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
          background: "linear-gradient(to right, #494848, #1c1c1c)",
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            sx={{ mb: 6, color: "#fff" }}
          >
            Book a <span style={{ color: "#ff9800" }}>Table</span>
          </Typography>

          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Full Name"
                fullWidth
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <TextField
                label="Phone Number"
                fullWidth
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <TextField
                type="date"
                fullWidth
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                
              />

              <TextField
                type="time"
                fullWidth
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
               
              />

              <TextField
                select
                label="Number of Guests"
                fullWidth
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
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
                  borderRadius: 3,
                  backgroundColor: "#ff9800",
                  "&:hover": {
                    backgroundColor: "#e68900",
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
