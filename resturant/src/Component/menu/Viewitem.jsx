import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Navbar from "../../Component/Navbar/Navbar";

function Viewitem() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, name, descraption, image, price } = location.state || {};
  const { addToCart } = useContext(CartContext);

  if (!name) {
    return (
      <>
        <Navbar />
        <Container sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h5">No item data found</Typography>
          <Button sx={{ mt: 3 }} onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1c1c1c, #3a3a3a)",
          py: 6,
        }}
      >
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  "&:hover img": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={name}
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 450 },
                    objectFit: "cover",
                    transition: "0.5s",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Delicious Meal
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    left: 15,
                    backgroundColor: "#ff9800",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  Best Seller
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight="bold" color="#fff">
                {name}
              </Typography>

              <Typography sx={{ mt: 2, color: "#ccc", fontSize: "18px" }}>
                {descraption}
              </Typography>

              <Typography
                variant="h4"
                sx={{ mt: 3, color: "#ff9800", fontWeight: "bold" }}
              >
                {price}$
              </Typography>

              

              <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#ff9800",
                    "&:hover": { backgroundColor: "#e68900" },
                    borderRadius: "30px",
                    px: 4,
                  }}
                  onClick={() => {
                    addToCart({ id, name, image, price });
                    alert("Order added 🛒");
                  }}
                >
                  Order Now
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: "#fff", borderColor: "#fff" }}
                  onClick={() => navigate("/")}
                >
                  Back Home
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Viewitem;
