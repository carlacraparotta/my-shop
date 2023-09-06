import { CartItem } from "./cart-item";
import { OrderStatus, OrderUser } from "./order-form";

export interface Order {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    order: CartItem[];
    status: OrderStatus;
    total: number;
    updated: string;
    user: OrderUser;
}