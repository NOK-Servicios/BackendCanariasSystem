import { Injectable } from '@nestjs/common';
import { CashboxmovementsRepository } from './cashmovements.repository';
import { CreateCashMovementDto } from './dto/createCashMovementDto';

@Injectable()
export class CashboxmovementsService {
  constructor(
    private readonly cashboxmovementsRepository: CashboxmovementsRepository,
  ) {}

  create(createCashMovement: CreateCashMovementDto) {
    return this.cashboxmovementsRepository.create(createCashMovement);
  }
  findAll() {
    return this.cashboxmovementsRepository.findAll();
  }
  findOne(id: string) {
    return this.cashboxmovementsRepository.findOne(id);
  }
}
