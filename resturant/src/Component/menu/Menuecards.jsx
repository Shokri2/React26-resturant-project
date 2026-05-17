import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Box,
  Modal,
} from "@mui/material";

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../Context/CartContext.jsx";

import toast from "react-hot-toast";

function Menuecards({ id, name, descraption, image, price }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { cart, addToCart, decreaseQuantity } = useContext(CartContext);

  const handleView = () => {
    navigate("/view-details", {
      state: { id, name, descraption, image, price },
    });
  };

  const handleOpen = () => {
    const currentUser = localStorage.getItem("currentrUsers");

    if (!currentUser) {
      toast.error("Please login first");

      navigate("/login");

      return;
    }

    setOpen(true);

    addToCart({ id, name, price, image });

    toast.success(`${name} added to cart 🍕`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartItem = cart.find((item) => item.id === id);

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={image}
            height="220"
            sx={{
              transition: "0.4s",

              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          />
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "#111827",
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              mt: 1,
              minHeight: "40px",
            }}
          >
            {descraption}
          </Typography>

          {/* ✅ السعر بني فاتح */}
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              color: "#b08968",
              fontWeight: "bold",
            }}
          >
            ${price}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "center",
            gap: 2,
            pb: 3,
          }}
        >
          {/* ✅ زر Add To Cart */}
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              borderRadius: 3,
              px: 3,
              backgroundColor: "#b08968",
              color: "#fff",

              "&:hover": {
                backgroundColor: "#9c6644",
              },
            }}
          >
            Add To Cart
          </Button>

          {/* ✅ زر View */}
          <Button
            variant="outlined"
            onClick={handleView}
            sx={{
              borderRadius: 3,

              borderColor: "#b08968",

              color: "#b08968",

              "&:hover": {
                borderColor: "#9c6644",
                backgroundColor: "rgba(176,137,104,0.1)",
              },
            }}
          >
            View
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            margin: "150px auto",
            padding: "40px",
            bgcolor: "white",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: 24,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {name} added to cart
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#b08968",
              fontWeight: "bold",
            }}
          >
            Price: ${price}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              onClick={() => decreaseQuantity(id)}
              variant="outlined"
              sx={{
                borderColor: "#b08968",
                color: "#b08968",
              }}
            >
              -
            </Button>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {cartItem ? cartItem.quantity : 0}
            </Typography>

            <Button
              onClick={() => {
                const currentUser = localStorage.getItem("currentrUsers");

                if (!currentUser) {
                  toast.error("Please login first");

                  navigate("/login");

                  return;
                }

                addToCart({ id, name, price, image });
              }}
              variant="contained"
              sx={{
                backgroundColor: "#b08968",

                "&:hover": {
                  backgroundColor: "#9c6644",
                },
              }}
            >
              +
            </Button>
          </Box>

          <Button
            sx={{
              mt: 4,
              px: 4,
              borderRadius: 3,

              backgroundColor: "#b08968",

              color: "#fff",

              "&:hover": {
                backgroundColor: "#9c6644",
              },
            }}
            onClick={handleClose}
          >
            Done
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Menuecards;
