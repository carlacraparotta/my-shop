import { Product } from "../../model/product";

export type ProductsGetSuccess = { type: 'productsGetSuccess', payload: Product[] };
export type ProductDeleteSuccess = { type: 'productDeleteSuccess', payload: string };
export type ProductAddSuccess = { type: 'productAddSuccess', payload: Product };
export type ProductEditSuccess = { type: 'productEditSuccess', payload: Product };
export type ProductSetActive = { type: 'productSetActive', payload: Partial<Product> | null };
export type Error = { type: 'error', payload: string };
export type Pending = { type: 'pending', payload: boolean };

export type ProductsActions =
  ProductsGetSuccess |
  ProductDeleteSuccess |
  ProductAddSuccess |
  ProductEditSuccess |
  ProductSetActive |
  Error |
  Pending ;