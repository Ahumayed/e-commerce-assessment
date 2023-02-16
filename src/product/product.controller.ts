import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, DefaultValuePipe, UseInterceptors, CacheInterceptor, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CreateProductDto } from './dtos/createProduct.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

// TODO: All validations and error handling to be done later
@Controller('products')
@UseInterceptors(CacheInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    const product = new Product();
    product.name = productDto.name;
    product.description = productDto.description;
    product.price = productDto.price;
    product.stock = productDto.stock;
    product.image = productDto.image;

    try {
      await this.productService.create(product);
    }
    catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    return product;
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Product>> {
    limit = limit > 100 ? 100 : limit;
    return this.productService.findAll({
      page,
      limit,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOne(+id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    else {
      return product;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() product: Product) {
    return await this.productService.update(+id, product);
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
