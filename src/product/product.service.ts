import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Product } from './entities/product';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(dto);
    //TODO: save image etc...
    return this.productRepo.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productRepo.findOne(id);
    if (!product) throw new NotFoundException('No product found');
    return product;
  }

  async deleteById(id: string): Promise<DeleteResult> {
    return this.productRepo.delete(id);
  }
}
