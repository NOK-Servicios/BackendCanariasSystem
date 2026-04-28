import { Controller, Get, Post } from '@nestjs/common';
import { CashboxmovementsService } from './cashboxmovements.service';
import { CreateCashMovementDto } from './dto/createCashMovementDto';

@Controller('cashboxmovements')
export class CashboxmovementsController {
  constructor(
    private readonly cashboxmovementsService: CashboxmovementsService,
  ) {}

  @Post()
  create(CreateCashMovement: CreateCashMovementDto) {
    return this.cashboxmovementsService.create(CreateCashMovement);
  }

  @Get()
  findAll() {
    return this.cashboxmovementsService.findAll();
  }

  @Get(':id')
  findOne(id: string) {
    return this.cashboxmovementsService.findOne(id);
  }
}
