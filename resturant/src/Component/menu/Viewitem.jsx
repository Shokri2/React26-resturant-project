import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Navbar from "../../Component/Navbar/Navbar";

function Viewitem() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const { id, name, descraption, image, price } = location.state || {};

  const [qty, setQty] = useState(1);

  if (!name) {
    return (
      <>
        <Navbar />
        <Container sx={{ py: 10, textAlign: "center" }}>
          <Typography>No item data found</Typography>
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

      {/* 🔥 BACKGROUND UPDATED */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ece9e6, #ffffff)",
          py: 6,
        }}
      >
        <Container>
          <Paper sx={{ p: 4, borderRadius: 5, boxShadow: 3 }}>
            <Grid container spacing={4}>
              {/* IMAGE */}
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={image}
                    sx={{
                      width: "100%",
                      height: 280,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />

                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    {[image, image, image].map((img, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={img}
                        sx={{
                          width: 70,
                          height: 70,
                          objectFit: "cover",
                          borderRadius: 2,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* CONTENT */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold">
                  {name}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ mt: 2, color: "#ff6f00", fontWeight: "bold" }}
                >
                  {price}$
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography>Preparation Time: 20 - 30 min</Typography>
                  <Typography>Category: Fast Food</Typography>
                </Box>

                <Typography sx={{ mt: 2, color: "text.secondary" }}>
                  {descraption}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography fontWeight="bold">Ingredients:</Typography>
                  <Typography>- Chicken</Typography>
                  <Typography>- Cheese</Typography>
                  <Typography>- Special Sauce</Typography>
                </Box>

                {/* QTY */}
                <Box
                  sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Typography>Quantity:</Typography>
                  <TextField
                    size="small"
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    sx={{ width: 80 }}
                  />
                </Box>

                {/* BUTTONS */}
                <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: "#ff6f00",
                      borderRadius: "30px",
                      px: 3,
                      "&:hover": { backgroundColor: "#e65c00" },
                    }}
                    onClick={() => {
                      addToCart({ id, name, image, price, qty });
                      alert("Added to cart 🛒");
                    }}
                  >
                    Add to Cart
                  </Button>

                  <Button onClick={() => navigate("/")}>Back</Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Viewitem;
