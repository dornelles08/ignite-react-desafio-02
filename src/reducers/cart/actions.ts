import type { Item } from "./reducer";

export const ActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY: "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY: "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART: "CHECKOUT_CART",
} as const;

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  };
}

export function removeItemAction(item: Item) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      item,
    },
  };
}

export function incrementItemQuantityAction(item: Item) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      item,
    },
  };
}

export function decrementItemQuantityAction(item: Item) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      item,
    },
  };
}

export function checkoutCartAction() {
  return {
    type: ActionTypes.CHECKOUT_CART,
  };
}
