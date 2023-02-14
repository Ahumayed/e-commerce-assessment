import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataFactory, Seeder } from "nestjs-seeder";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductSeeder implements Seeder {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async seed(): Promise<any> {
    // Generate 10 users.
    const users = DataFactory.createForClass(Product).generate(10);

    // Insert into the database.
    return this.productRepository.insert(users);
  }

  async drop(): Promise<any> {
    return this.productRepository.delete({});
  }
}
