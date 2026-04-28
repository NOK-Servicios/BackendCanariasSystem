import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/createProductDto';
// import { UpdateProductDto } from './dto/updateProductDto';
import { Product, ProductsRepository } from './products.repository';
// import { products } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  findAll() {
    return this.productsRepository.findAll();
  }

  findOne(id: string) {
    const numericId = Number(id); // 👈 convierte el string a number
    return this.productsRepository.findOne(numericId);
  }
  create(product: Product) {
    return this.productsRepository.create(product);
  }
  update(id: string, product: Product) {
    return this.productsRepository.update(id, product);
  }
  remove(id: string) {
    return this.productsRepository.remove(id);
  }
}
