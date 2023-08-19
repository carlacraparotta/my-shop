import { CartState } from "./useCart";

export const selectCartList = (state: CartState) => state.list;
export const selectCartIsEmpty = (state: CartState) => state.list.length === 0;

export const selectTotalCartCost = (state: CartState) => {
    return state.list.reduce((acc, item) => acc + (item.product.cost * item.quantity), 0);
}

export const selectTotalCartItems = (state: CartState) => {
    return state.list.reduce((acc, item) => acc + item.quantity, 0);
}

export const selectDecreaseQuantity = (state: CartState) => state.decreaseQuantity;
export const selectIncreaseQuantity = (state: CartState) => state.increaseQuantity;
