import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
