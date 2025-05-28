import { createContext, useReducer, type ReactNode } from "react";
import {
  addItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { cartReducer, type Item } from "../reducers/cart/reducer";

interface CartContextType {
  items: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  incrementItemQuantity: (item: Item) => void;
  decrementItemQuantity: (item: Item) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

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

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addToCart,
        removeFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
