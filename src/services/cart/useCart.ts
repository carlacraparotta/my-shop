import { create } from "zustand";
import { CartItem } from "../../model/cart-item";
import { Product } from "../../model/product";

export interface CartState {
    list: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
    list: [],
    addToCart: (product: Product) => {
        const found = get().list.find(item => item.product.id === product.id);   

        if (found) {
            get().increaseQuantity(product.id);        
        } else {
            const item: CartItem = { product, quantity: 1};
            set({ list: [...get().list, item]});
        }       
    },
    removeFromCart: (productId: string) => {
        set(state => ({list: state.list.filter(item => item.product.id !== productId)}));
    },
    increaseQuantity: (productId: string) => {
        const found = get().list.find(item => item.product.id === productId);

        if (found) {
            found.quantity++;
            set(state => ({
                list: state.list.map(item => item.product.id === found.product.id ? found : item)
            }));
        } 
    },
    decreaseQuantity: (productId: string) => {
        const found = get().list.find(item => item.product.id === productId);

        if (found?.quantity === 1)
            get().removeFromCart(productId);

        if (found && found.quantity > 0) {
            found.quantity--;
            set(state => ({
                list: state.list.map(item => item.product.id === found.product.id ? found : item)
            }));
        } 
    },
    clearCart: () => {
        set({ list: [] });
    }
}))