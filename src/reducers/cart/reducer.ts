import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Item {
  id: string;
  quantity: number;
}

interface CartState {
  items: Item[];
}

interface CartAction {
  type: string;
  payload?: { item: Item };
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        draft.items.push(action.payload!.item);
      });
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload!.item.id);
        if (itemIndex >= 0) {
          draft.items.splice(itemIndex, 1);
        }
        return draft;
      });
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload!.item.id);
        if (itemIndex >= 0) {
          draft.items[itemIndex].quantity += 1;
        }
        return draft;
      });
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === action.payload!.item.id);
        if (itemIndex >= 0 && draft.items[itemIndex].quantity > 1) {
          draft.items[itemIndex].quantity -= 1;
        }
        return draft;
      });

    default:
      return state;
  }
}
