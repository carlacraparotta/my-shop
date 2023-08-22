import { CartItem } from "./cart-item";

export type OrderStatus = 'pending' | 'done';

export interface UserForm {
    name: string;
    email: string;
}

export interface OrderForm {
    user: UserForm;
    order: CartItem[];
    status: OrderStatus;
    total: number; 
}