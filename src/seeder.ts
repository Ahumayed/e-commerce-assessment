import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { seeder } from "nestjs-seeder";
import { Category } from "./category/entities/category.entity";
import { Product } from "./product/entities/product.entity";
import { ProductSeeder } from "./product/product.seeder";

// seeder({
//   imports: [
//     TypeOrmModule.forFeature([Category, Product]),

//   ],
// }).run([ProductSeeder]);

// export class SeederModule {};