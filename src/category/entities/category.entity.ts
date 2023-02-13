import { Product } from "src/product/entities/product.entity";

export class Category {
    id: number;
    name: string;
    description: string;
    image: string;
    // TODO: Add a relationship between Category and Product once orm is configured
    products: Product[];
}
