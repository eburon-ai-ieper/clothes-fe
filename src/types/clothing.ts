import type { Size } from "./size";

export interface Clothing {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    avatarUrl: string;
    price: number;
    inStock: boolean;
    category: string;
    brand: string;
    sizes: Size[]
    createdAt: Date;
    updatedAt: Date;
}