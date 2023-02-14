import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Category } from 'src/category/entities/category.entity';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

// TODO: All validations and error handling to be done later
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post('/add-category/:id')
  addCategory(@Param('id') id: string, @Query('categoryId') categoryId: string) {
    return this.productService.addCategory(+id, +categoryId);
  }
}
