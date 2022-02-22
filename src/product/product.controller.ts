import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from './entities';
import { CreateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.productService.create(dto);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.productService.deleteById(id);
  }
}
