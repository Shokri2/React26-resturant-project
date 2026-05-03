import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import toast from "react-hot-toast";
function Cart() {
  const { cart, removeFromCart, decreaseQuantity, addToCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        Cart is empty 
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: "900px", margin: "auto" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Your Order
      </Typography>

      {cart.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            mb: 3,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardMedia component="img" image={item.image} sx={{ width: 150 }} />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              {item.name}
            </Typography>

            <Typography color="text.secondary">${item.price}</Typography>

            <Box sx={{ mt: 2 }}>
              <Button onClick={() => decreaseQuantity(item.id)}>-</Button>

              <Typography component="span" sx={{ mx: 2 }}>
                {item.quantity}
              </Typography>

              <Button onClick={() => addToCart(item)}>+</Button>
            </Box>
          </CardContent>

          <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <Button color="error" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </Box>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* 💰 المجموع */}
      <Box sx={{ textAlign: "right" }}>
        <Typography variant="h5" fontWeight="bold">
          Total: ${totalPrice.toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 3 }}
          onClick={() => {
            toast.success("Order placed successfully ");
          }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
}

export default Cart;
