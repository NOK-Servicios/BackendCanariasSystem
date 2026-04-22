import { Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import {UpdateProductDto} from './dto/updateProductDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(product: CreateProductDto) {
    return this.productsService.create(product);
  }

  @Post(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    product: UpdateProductDto,
  ) {
    return this.productsService.update(id, product);
  }
}