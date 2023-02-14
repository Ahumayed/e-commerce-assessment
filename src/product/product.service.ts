import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  
  create(product: Product) {
    this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({id});
  }

  update(id: number, product: Product) {
    return this.productRepository.update(id, product);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  // TODO: clean up this code later
  async addCategory(id: number, categoryId: number) {
    const product = await this.productRepository.findOneBy({id});
    const category = await this.categoryRepository.findOneBy({id: categoryId});
    const categories = product!.categories ?? [];
    categories.push(category!);
    product!.categories = categories;
    this.productRepository.save(product!);
    return product;
  }
}
