import { define } from "typeorm-seeding";
const { faker } = require('@faker-js/faker');

import { Product } from "src/product/entities/product.entity";

define(Product, () => {
  const product = new Product();
    product.name = faker.name.firstName();
    product.description = faker.lorem.sentence();
    product.price = +faker.random.numeric(3);
    product.stock = +faker.random.numeric(2);
    product.image = faker.image.imageUrl();
  return product;
});