import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSaleDto } from './dto/createSalesDto';
import { UpdateSaleDto } from './dto/updateSalesDto';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() sale: CreateSaleDto) {
    return this.salesService.create(sale);
  }

  @Get()
  findAll() {
    return this.salesService.salesFindAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.salesService.salesFindOne(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() sale: UpdateSaleDto,
  ) {
    return this.salesService.salesUpdate(id, sale);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.salesService.saleDelete(id);
  }
}
