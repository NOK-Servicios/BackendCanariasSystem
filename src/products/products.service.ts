import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductsService {
  findAll() {
    return 'This action returns all products';
  }

  findOne(id: string) {
    return `This action returns the product with id: ${id}`;
  }
  create(product: CreateProductDto) {
    return `This action adds a new product: ${product.name}`;
  }
  update(id: string, product: UpdateProductDto) {
    return `This action updates the product with id: ${id} and name: ${product.name}`;
  }
}
