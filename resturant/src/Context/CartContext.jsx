import { useState, createContext, useContext, Children } from "react";
export const CartContext = createContext();
export const useCart = () => {
  useContext(CartContext);
};

export const CartProvider=({Children}) =>{
    const [cart, setCart] = useState ([]);

}