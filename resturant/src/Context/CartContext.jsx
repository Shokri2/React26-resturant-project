import { useState, createContext } from "react";
// 1 ===2 ? "true" :false
export const CartContext = createContext();

export const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState([]);
  const existed = Prev.find((cartItem) => cartItem.id === item.id);
  if (existed) {
    return prev.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem,
    );
  } else {
    return [...prev, { ...item, quantity: 1 }];
  }
};
