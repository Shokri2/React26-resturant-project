import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function Viewitem() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, description, image, price } = location.state || {};

  if (!name) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5">No item data found </Typography>
        <Button sx={{ mt: 3 }} onClick={() => navigate("/")}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #2e2d2d, #1c1c1c)",
        py: 10,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {name}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>

          {price && (
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: "bold", mb: 3 }}
            >
              ${price}
            </Typography>
          )}

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff9800",
                "&:hover": { backgroundColor: "#e68900" },
              }}
            >
              Add to Cart
            </Button>

            <Button variant="outlined" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Viewitem;
