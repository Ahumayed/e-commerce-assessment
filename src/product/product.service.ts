import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  create(product: Product) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, product: Product) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
