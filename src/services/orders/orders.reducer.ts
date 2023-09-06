import { Order } from "../../model/order";
import { OrdersActions } from "./orders.actions";

type OrdersState = {
    orders: Order[];
    pending: boolean;
    error: string | null;
  }
  
  export const initialState: OrdersState = {
    orders: [],
    pending: false,
    error: null,
  }
  
  export function ordersReducer(state: OrdersState, action: OrdersActions) {
    switch (action.type) {
      case 'ordersGetSuccess':
        return { ...state, orders: action.payload, error: null, pending: false };
      case 'orderDeleteSuccess':
        return { ...state, orders: state.orders.filter(item => item.id !== action.payload), error: null, pending: false}
      case 'orderToggleStatusSuccess':
        return { ...state, orders: state.orders.map(item => item.id === action.payload.id ? action.payload : item ), error: null, pending: false };
      case 'error':
        return { ...state, error: action.payload, pending: false};
      case 'pending':
        return { ...state, pending: true, error: null };
    }
    return state;
  }