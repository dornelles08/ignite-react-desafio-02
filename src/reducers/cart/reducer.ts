import { produce } from "immer";
import { ActionTypes, type Actions } from "./actions";

export interface Item {
  id: string;
  quantity: number;
}

interface CartState {
  items: Item[];
  orders: Order[];
}

export interface Order {
  id: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  payment: "credit" | "debit" | "cash";
  items: Item[];
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload.item);
      });
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload.item.id);
        if (itemIndex >= 0) {
          draft.items.splice(itemIndex, 1);
        }
        return draft;
      });
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload.item.id);
        if (itemIndex >= 0) {
          draft.items[itemIndex].quantity += 1;
        }
        return draft;
      });
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload.item.id);
        if (itemIndex >= 0 && draft.items[itemIndex].quantity > 1) {
          draft.items[itemIndex].quantity -= 1;
        }
        return draft;
      });
    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        draft.items = [];
        draft.orders.push(action.payload.order);

        action.payload.callback(`/order/${action.payload.order.id}/success`);
        return draft;
      });

    default:
      return state;
  }
}
