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
    createdAt: Date;
    updatedAt: Date;
}