import { Factory, Seeder } from "typeorm-seeding";
import { Product } from "src/product/entities/product.entity";
import { Category } from "src/category/entities/category.entity";
import { Connection } from "typeorm";


export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const categories = await factory(Category)().createMany(15);

    await factory(Product)()
      .map(async (product) => {
        product.categories = [categories[Math.floor(Math.random() * categories.length)]];
        return product;
      })
      .createMany(100);
  }
}