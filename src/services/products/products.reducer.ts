import { Product } from "../../model/product";
import { ProductsActions } from "./products.actions";

export interface ProductsState {
    activeItem: Partial<Product> | null;
    error: string | null;
    pending: boolean;
    products: Product[];
}

export const initialState: ProductsState = { 
    activeItem: null,
    error: null,
    pending: false, 
    products: [],
};

export function productsReducer(state: ProductsState, action: ProductsActions): ProductsState {
    
    const { type, payload } = action;

    switch (type) {

        case "error":
            return { ...state, error: payload, pending: false };

        case "pending":
            return { ...state, pending: payload, error: null };

        case "productSetActive":
            return { ...state, activeItem: payload };

        case "productsGetSuccess":
            return { ...state, products: payload, pending: false, error: null };

        case "productDeleteSuccess":
            return { 
                ...state, 
                products: state.products.filter(item => item.id !== payload),
                activeItem: null,
                error: null,
                pending: false
            };

        case "productAddSuccess":
            return {
                ...state,
                products: [...state.products, payload],
                activeItem: null,
                error: null,
                pending: false
            };

        case "productEditSuccess":
            return {
                ...state,
                activeItem: null,
                products: state.products.map(item => item.id === payload.id ? payload : item),
                error: null,
                pending: false
            };
    
        default:
            return state;
    }
}
