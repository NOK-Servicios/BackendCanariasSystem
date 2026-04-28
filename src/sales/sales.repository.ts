import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/createSalesDto';
import { UpdateSaleDto } from './dto/updateSalesDto';

export class SalesRepository {
  constructor(private readonly salesRepository: SalesRepository) {}

  create(sale: CreateSaleDto) {
    return 'ACA VAMOS A TENER LA LOGICA PARA CREAR UNA VENTA';
  }

  findAll() {
    return 'ACA VAMOS A TENER TODAS LAS VENTAS';
  }

  findOne(id: string) {
    return 'ACA VAMOS A TENER EL DETALLE DE UNA VENTA';
  }

  update(id: string, sale: UpdateSaleDto) {
    return 'ACA VAMOS A TENER LA LOGICA PARA ACTUALIZAR UNA VENTA';
  }

  saleDelete(id: string) {
    return 'ACA VAMOS A TENER LA LOGICA PARA ELIMINAR UNA VENTA';
  }
}
