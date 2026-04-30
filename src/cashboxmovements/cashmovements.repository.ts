import { Injectable } from '@nestjs/common';
import { CreateCashMovementDto } from './dto/createCashMovementDto';

@Injectable()
export class CashboxmovementsRepository {
  create(createCashMovement: CreateCashMovementDto) {
    return 'Esta accion crea el diario de caja (apertura y cierre)';
  }
  findAll() {
    return 'Esta accion devuelve todos los movimientos de caja';
  }
  findOne(id: string) {
    return `Esta accion devuelve un movimiento de caja`;
  }
}
