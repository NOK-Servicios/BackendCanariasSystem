import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/createSalesDto';
import { UpdateSaleDto } from './dto/updateSalesDto';
import { SalesRepository } from './sales.repository';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository) {}
  create(sale: CreateSaleDto) {
    return this.salesRepository.create(sale);
  }

  salesFindAll() {
    return this.salesRepository.findAll();
  }

  salesFindOne(id: string) {
    return this.salesRepository.findOne(id);
  }

  salesUpdate(id: string, sale: UpdateSaleDto) {
    return this.salesRepository.update(id, sale);
  }

  saleDelete(id: string) {
    return this.salesRepository.saleDelete(id);
  }
}

// POST /ventas → crear venta (incluye producto, cliente, vendedor, cobrador, cuotas)

// GET /ventas → listar todas

// GET /ventas/:id → detalle de una venta

// PUT /ventas/:id → actualizar datos de la venta

// DELETE /ventas/:id → eliminar
