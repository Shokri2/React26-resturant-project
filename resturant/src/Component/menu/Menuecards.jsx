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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext.jsx";
import { useContext } from "react";
//child component its always child

function Menuecards({ id, name, descraption, image, quantity, price }) {
  const item = { id, name, descraption, image, price, quantity };
  console.log(item);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { cart, addToCart } = useContext(CartContext);
  const handleView = () => {
    navigate("/view-details", { state: { name, descraption, image } });
  };

  const handleopen = () => {
    setOpen(true);
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
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descraption}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ mt: 1, fontWeight: "bold" }}
          >
            {price}$
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            pb: 2,
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={handleopen}
            sx={{ borderRadius: 3 }}
          >
            add to cart
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleView}
            sx={{ borderRadius: 3 }}
          >
            view
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            margin: "150px auto",
            padding: "70px",
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "20px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" align="center">
            {name} add to cart! <br />
          </Typography>
          <Typography variant="body1" align="center">
            price: {price}$
          </Typography>
          <Typography variant="body1" align="center">
            description: {descraption}
          </Typography>

          <Typography variant="body1" align="center">
            <Button onClick={() => addToCart(item)}>+</Button> quantity:{" "}
            {quantity} <Button>-</Button>
          </Typography>
          <Button sx={{ textAlign: "center" }} onClick={handleClose}>
            {" "}
            Done!
          </Button>
        </Box>
      </Modal>
     
    </>
  );
}
export default Menuecards;
//props passing from parent to child
//task: increase decrease the quantity
