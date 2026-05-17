import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Container,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import toast from "react-hot-toast";

function Cart() {
  const { cart, removeFromCart, decreaseQuantity, addToCart } =
    useContext(CartContext);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.65)
            ),
            url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600")
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          px: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",

            background: "rgba(255,255,255,0.08)",

            backdropFilter: "blur(10px)",

            border: "1px solid rgba(255,255,255,0.15)",

            borderRadius: 6,

            p: 6,

            width: "100%",
            maxWidth: "500px",

            boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          }}
        >
          <ShoppingCartIcon
            sx={{
              fontSize: 90,
              color: "#8b5e3c",
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Your Cart Is Empty
          </Typography>

          <Typography
            sx={{
              color: "#d1d5db",
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Add some delicious food and enjoy your meal
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 4,
              fontWeight: "bold",
              fontSize: "1rem",

              background: "linear-gradient(to right, #8b5e3c, #b08968)",

              "&:hover": {
                background: "linear-gradient(to right, #6f4518, #8b5e3c)",

                transform: "scale(1.03)",
              },
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8fafc",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            fontWeight: "bold",
            textAlign: "center",
            color: "#111827",
          }}
        >
          Your Order 🛒
        </Typography>

        {cart.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              mb: 3,
              borderRadius: 5,
              overflow: "hidden",

              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-5px)",
              },

              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              sx={{
                width: {
                  xs: "100%",
                  sm: 220,
                },

                height: {
                  xs: 220,
                  sm: "auto",
                },

                objectFit: "cover",
              }}
            />

            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#8b5e3c",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  ${item.price}
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  onClick={() => decreaseQuantity(item.id)}
                  sx={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    color: "#111827",

                    "&:hover": {
                      background: "#e5e7eb",
                    },
                  }}
                >
                  <RemoveIcon />
                </Button>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </Typography>

                <Button
                  onClick={() => {
                    if (!user) {
                      toast.error("Please login first");

                      navigate("/login");

                      return;
                    }

                    addToCart(item);
                  }}
                  sx={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "50%",

                    background: "linear-gradient(to right, #8b5e3c, #b08968)",

                    color: "#fff",

                    "&:hover": {
                      background: "linear-gradient(to right, #6f4518, #8b5e3c)",
                    },
                  }}
                >
                  <AddIcon />
                </Button>
              </Box>
            </CardContent>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
              }}
            >
              <Button
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => removeFromCart(item.id)}
                sx={{
                  borderRadius: 3,
                }}
              >
                Remove
              </Button>
            </Box>
          </Card>
        ))}

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            background: "#fff",
            p: 4,
            borderRadius: 5,

            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",

            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 3,
              color: "#111827",
            }}
          >
            Total: ${totalPrice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            onClick={() => {
              const orders = JSON.parse(localStorage.getItem("orders")) || [];

              const newOrder = {
                id: Date.now(),
                items: cart,
                total: totalPrice,
                user: user?.name,
                date: new Date().toLocaleString(),
              };

              orders.push(newOrder);

              localStorage.setItem("orders", JSON.stringify(orders));

              localStorage.removeItem("cart");

              toast.success("Order placed successfully 🍕");

              window.location.reload();

              navigate("/");
            }}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 4,
              fontWeight: "bold",
              fontSize: "1rem",

              background: "linear-gradient(to right, #8b5e3c, #b08968)",

              "&:hover": {
                background: "linear-gradient(to right, #6f4518, #8b5e3c)",

                transform: "scale(1.03)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;
