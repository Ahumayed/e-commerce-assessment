import { PickType } from "@nestjs/mapped-types";
import { Product } from "../entities/product.entity";

export class ProductDto extends PickType(Product, ['name', 'price', 'description', 'categories', 'image', 'stock'] as const) {}
