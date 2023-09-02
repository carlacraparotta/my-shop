import { useReducer } from 'react';

import * as ProductsApi from './products.api';
import { productsReducer, initialState } from './products.reducer';
import { Product } from '../../model/product';

export function useProductsService() {
    
    const [state, dispatch] = useReducer(productsReducer, initialState);

    async function getProducts(): Promise<void> {
        dispatch({ type: "pending", payload: true });
        try {
            const result = await ProductsApi.get();
            dispatch({ type: "productsGetSuccess", payload: result.items });
        } catch (err) {
            dispatch({ type: "error", payload: "Prodotti non caricati"});
        } 
    }

    async function deleteProduct(id: string) {
        dispatch({ type: "pending", payload: true });
        try {
            await ProductsApi.remove(id);
            dispatch({ type: "productDeleteSuccess", payload: id });
        } catch (err) {
            dispatch({ type: "error", payload: "Prodotto non cancellato"});
        } 
    }

    async function addProduct(product: Partial<Product>) {
        dispatch({ type: "pending", payload: true });
        try {
            const res = await ProductsApi.add(product);
            dispatch({ type: "productAddSuccess", payload: res });
        } catch (err) {
            dispatch({ type: "error", payload: "Prodotto non aggiunto"});
        } 
    }

    async function editProduct(product: Partial<Product>) {
        dispatch({ type: "pending", payload: true });
        try {
            const res = await ProductsApi.edit(product);
            dispatch({ type: "productEditSuccess", payload: res });
        } catch (err) {
            dispatch({ type: "error", payload: "Prodotto non modificato"});
        } 
    }

    function setActiveItem(product: Product | {}) {
        dispatch({ type: "productSetActive", payload: product });
    }

    function resetActiveItem() {
        dispatch({ type: "productSetActive", payload: null });
    }

    return {
        actions: {
            getProducts,
            deleteProduct,
            addProduct,
            editProduct,
            setActiveItem,
            resetActiveItem
        },
        state
        
    }
}
