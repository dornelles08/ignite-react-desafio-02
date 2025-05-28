import type { NavigateFunction } from "react-router-dom";
import type { Item, Order } from "./reducer";

export const ActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY: "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY: "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART: "CHECKOUT_CART",
} as const;

export type ActionTypes = (typeof ActionTypes)[keyof typeof ActionTypes];

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

export function checkoutCartAction(order: Order, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  };
}
export type Actions =
  | {
      type: typeof ActionTypes.ADD_ITEM;
      payload: {
        item: Item;
      };
    }
  | {
      type:
        | typeof ActionTypes.DECREMENT_ITEM_QUANTITY
        | typeof ActionTypes.INCREMENT_ITEM_QUANTITY
        | typeof ActionTypes.REMOVE_ITEM;
      payload: {
        item: Item;
      };
    }
  | {
      type: typeof ActionTypes.CHECKOUT_CART;
      payload: {
        order: Order;
        callback: NavigateFunction;
      };
    };
