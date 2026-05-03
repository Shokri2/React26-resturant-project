import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CartIcon() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <IconButton onClick={() => navigate("/cart")}>
      <Badge badgeContent={totalItems} color="error">
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
      </Badge>
    </IconButton>
  );
}

export default CartIcon;
