import { define } from "typeorm-seeding";
const { faker } = require('@faker-js/faker');

import { Category } from "src/category/entities/category.entity";

define(Category, () => {
  const category = new Category();
    category.name = faker.name.firstName();
    category.description = faker.lorem.sentence();

  return category;
});