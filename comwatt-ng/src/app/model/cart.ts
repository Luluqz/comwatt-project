import { Product } from "./product";

export interface CartObj extends Product {
    quantity: number;
}

export interface Cart {
    items: CartObj[];
    totalQuantity: number;
    totalPrice: number;
}
