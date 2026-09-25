import type { CartItem } from "./cart";

export interface ShippingAddress {
    fullName: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
}

export type OrderStatus = 'pending' | 'confirmed';

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    shippingAddress: ShippingAddress;
    status: OrderStatus;
    createdAt: string;
}