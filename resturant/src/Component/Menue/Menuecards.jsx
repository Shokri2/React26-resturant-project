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
// child component its always child
function Menuecards({ name, descraption, image, quantity, price }) {
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={image} height="182" />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{descraption}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleopen}>
            add to cart
          </Button>
          <Button size="small">view</Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            margin: "400px",
            padding: "70px",
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "20px",
            alignItems: "center",
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
            <Button>+</Button> quantity: {quantity} <Button>-</Button>
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
// props
