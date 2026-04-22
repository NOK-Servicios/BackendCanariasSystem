import { Controller, Get, Post } from '@nestjs/common';
import { CashboxService } from './cashbox.service';
import { UpdateCashboxDto } from './dto/updateCashboxDto';

@Controller('cashbox')
export class CashboxController {
  constructor(private readonly cashboxService: CashboxService) {}
  @Get()
  allCashbox() {
    return this.cashboxService.findAll();
  }

  @Get(':id')
  oneCashbox(id: string) {
    return this.cashboxService.findOne(id);
  }

  @Post(':id')
  updateCashbox(id: string, cashbox: UpdateCashboxDto) {
    return this.cashboxService.update(id, cashbox);
  }
}

