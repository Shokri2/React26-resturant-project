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
    setOpen(true);
    addToCart({ id, name, price, image });
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
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardMedia component="img" image={image} height="182" />

        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {descraption}
          </Typography>

          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            {price}$
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
          <Button variant="contained" onClick={handleOpen}>
            Add to Cart
          </Button>

          <Button variant="outlined" onClick={handleView}>
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
          }}
        >
          <Typography variant="h6">{name} added to cart 🛒</Typography>

          <Typography sx={{ mt: 1 }}>price: {price}$</Typography>

          <Box sx={{ mt: 2 }}>
            <Button onClick={() => decreaseQuantity(id)} variant="outlined">
              -
            </Button>

            <Typography component="span" sx={{ mx: 2 }}>
              {cartItem ? cartItem.quantity : 0}
            </Typography>

            <Button
              onClick={() => addToCart({ id, name, price, image })}
              variant="contained"
            >
              +
            </Button>
          </Box>

          <Button sx={{ mt: 3 }} onClick={handleClose}>
            Done
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Menuecards;
