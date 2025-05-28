import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { cartReducer, type Item, type Order } from "../reducers/cart/reducer";

interface CartContextType {
  items: Item[];
  orders: Order[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  incrementItemQuantity: (item: Item) => void;
  decrementItemQuantity: (item: Item) => void;
  checkoutCart: (order: Order) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [], orders: [] }, (cartState) => {
    const storedStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return cartState;
  });
  const navigate = useNavigate();

  function addToCart(item: Item) {
    dispatch(addItemAction(item));
  }
  function removeFromCart(item: Item) {
    dispatch(removeItemAction(item));
  }
  function incrementItemQuantity(item: Item) {
    dispatch(incrementItemQuantityAction(item));
  }
  function decrementItemQuantity(item: Item) {
    dispatch(decrementItemQuantityAction(item));
  }
  function checkoutCart(order: Order) {
    dispatch(checkoutCartAction(order, navigate));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        orders: cartState.orders,
        addToCart,
        removeFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
