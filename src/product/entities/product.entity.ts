import { Category } from "src/category/entities/category.entity";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    // TODO: Add a relationship between Category and Product once orm is configured
    category: Category;
}
