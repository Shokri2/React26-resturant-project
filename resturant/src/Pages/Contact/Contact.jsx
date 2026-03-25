import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Navbar from "../../Component/Navbar/Navbar";
import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!messageData.name || !messageData.email || !messageData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    const newMessage = {
      id: storedMessages.length + 1,
      ...messageData,
    };

    const updatedMessages = [...storedMessages, newMessage];

    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    setMessageData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    toast.success("Message sent successfully ✅");
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #4a4545, #2e2d2d)",
          color: "#fff",
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            Contact <span style={{ color: "#ff9800" }}>Us</span>
          </Typography>

          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "#fff",
              mb: 5,
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
                value={messageData.name}
                onChange={(e) =>
                  setMessageData({
                    ...messageData,
                    name: e.target.value,
                  })
                }
              />

              <TextField
                label="Email"
                type="email"
                fullWidth
                value={messageData.email}
                onChange={(e) =>
                  setMessageData({
                    ...messageData,
                    email: e.target.value,
                  })
                }
              />

              <TextField
                label="Subject"
                fullWidth
                value={messageData.subject}
                onChange={(e) =>
                  setMessageData({
                    ...messageData,
                    subject: e.target.value,
                  })
                }
              />

              <TextField
                multiline
                rows={4}
                label="Message"
                fullWidth
                value={messageData.message}
                onChange={(e) =>
                  setMessageData({
                    ...messageData,
                    message: e.target.value,
                  })
                }
              />

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
                Send Message
              </Button>
            </Box>
          </Paper>

          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Get in Touch
            </Typography>

            <Typography sx={{ mb: 2, color: "#ccc" }}>
              We’d love to hear from you anytime.
            </Typography>

            <Typography>Amman, Jordan</Typography>
            <Typography>+962 7 0000 0000</Typography>
            <Typography>info@steakhouse.com</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
